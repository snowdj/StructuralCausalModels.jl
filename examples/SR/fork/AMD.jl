# Load Julia packages (libraries) needed for clip

using StatisticalRethinking, StructuralCausalModels
using StatsPlots

ProjDir = @__DIR__

println()
N = 100
df = DataFrame();
df[!, :A] = rand(Normal(), N)
df[!, :M] = [rand(Normal(-a), 1)[1] for a in df[:, :A]]
df[!, :D] = [rand(Normal(a), 1)[1] for a in df[:, :A]]
println()

for i in 1:3
  include(scm_path("..", "examples", "SR", "fork", "AMD_m$i.jl"))
end

if success(rc)

  r1 = plotcoef([m5_1s, m5_2s, m5_3s], [:bA, :bM], "$(ProjDir)/AMD.png",
    "Particles (Normal) estimates")
  display(r1)

end

d = OrderedDict(
  :M => [:A],
  :D => [:A]
);

dag = DAG("fork", d, df);
show(dag)

display(dag.s); println()

shipley_test_dag_3 = shipley_test(dag)
if !isnothing(shipley_test_dag_3)
  display(shipley_test_dag_3)
end
println()

f = [:M]; s = [:D]; sel = vcat(f, s)
cond = [:A]

e = d_separation(dag, f, s)
println("d_separation($(dag.name), $f, $s) = $e")

e = d_separation(dag, f, s, cond)
println("d_separation($(dag.name), $f, $s, $cond) = $e")