var documenterSearchIndex = {"docs":
[{"location":"#StructuralCausalModels-1","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"","category":"section"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"Documentation goes here.","category":"page"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"CurrentModule = StructuralCausalModels","category":"page"},{"location":"#scm_path-1","page":"StructuralCausalModels","title":"scm_path","text":"","category":"section"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"scm_path(parts...)","category":"page"},{"location":"#StructuralCausalModels.scm_path-Tuple","page":"StructuralCausalModels","title":"StructuralCausalModels.scm_path","text":"scm_path\n\nRelative path using the StatisticalRethinking src/ directory. Copied from DynamicHMCExamples.jl\n\nExample to get access to the data subdirectory\n\nscm_path(\"..\", \"data\")\n\n\n\n\n\n","category":"method"},{"location":"#DAG-1","page":"StructuralCausalModels","title":"DAG","text":"","category":"section"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"DAG\nDAG(name::AbstractString, d::OrderedDict{Symbol, Vector{Symbol}}, df::DataFrame) ","category":"page"},{"location":"#StructuralCausalModels.DAG","page":"StructuralCausalModels","title":"StructuralCausalModels.DAG","text":"DAG\n\nDirected acyclic graph struct\n\nStruct\n\nDAG(\n* `name::AbstractString`                    : Variables used to compute correlation\n* `d::OrderedDict{Symbol, Vector{Symbol}}`  : DAG definition aas a Dict\n* `a::NamedArray`                           : Adjacency matrix\n* `e::NamedArray`                           : Edge matric\n* `s::NamedArray`                           : Covariance matrix\n* `df::DataFrame`                           : Variable observations\n* `vars::Vector{Symbol}`                    : Names of variables\n)\n\nPart of API, exported.\n\n\n\n\n\n","category":"type"},{"location":"#StructuralCausalModels.DAG-Tuple{AbstractString,OrderedDict{Symbol,Array{Symbol,1}},DataFrame}","page":"StructuralCausalModels","title":"StructuralCausalModels.DAG","text":"DAG\n\nDirected acyclic graph constructor\n\nDAG(name, d, df)\n\n\nMethod\n\nDAG(\n* `name::AbstractString`                    : Variables used to compute correlation\n* `d::OrderedDict{Symbol, Vector{Symbol}}`  : DAG definition aas a Dict\n* `df::DataFrame`                           : Variable observations\n)\n\nReturns\n\n* `res::DAG`                                : Boolean result of test\n\nExtended help\n\nExample\n\nDefine and create a DAG\n\nusing StructuralCausalModels, CSV\n\ndf = CSV.read(scm_path(\"..\", \"data\", \"marks.csv\");\n\nd = OrderedDict(\n  :mechanics => [:vectors, :algebra],\n  :vectors => [:algebra],\n  :analysis => [:algebra],\n  :statistics => [:algebra, :analysis]\n);\n\ndag = DAG(\"marks\", d, df);\n\nAcknowledgements\n\nOriginal author:                       Giovanni M. Marchetti\n\nTranslated to Julia:                   Rob J Goedman\n\nLicense\n\nThe R package ggm is licensed under License: GPL-2.\n\nThe Julia translation is licenced under: MIT.\n\nPart of API, exported.\n\n\n\n\n\n","category":"method"},{"location":"#d_separation-1","page":"StructuralCausalModels","title":"d_separation","text":"","category":"section"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"d_separation(d::DAG, first::Vector{Symbol}, second::Vector{Symbol}, cond::SymbolList=nothing) ","category":"page"},{"location":"#StructuralCausalModels.d_separation","page":"StructuralCausalModels","title":"StructuralCausalModels.d_separation","text":"d_separation\n\nd_separation(d, first, second)\nd_separation(d, first, second, cond; debug)\n\n\nComputes the d_separation between 2 sets of nodes conditioned on a third set.\n\nMethod\n\nd_separation(\n* `d::DAG`                             : DAG\n* `first::Vector{Symbol}`              : First set\n* `second::Vector{Symbol}`             : Second set\n* `cond::Vector{Symbol}`               : Conditioning set\n)\n\nReturns\n\n* `res::Bool`                          : Boolean result of test\n\nExtended help\n\nExample\n\nd_separation between mechanics and statistics, conditioning on algebra\n\nusing StructuralCausalModels, CSV\n\ndf = CSV.read(scm_path(\"..\", \"data\", \"marks.csv\");\n\nd = OrderedDict(\n  :mechanics => [:vectors, :algebra],\n  :vectors => [:algebra],\n  :analysis => [:algebra],\n  :statistics => [:algebra, :analysis]\n);\n\ndag = DAG(\"marks\", d, df);\nd_separation(marks, [:statistics], [:mechanics], [:algebra]))\n\nAcknowledgements\n\nOriginal author:                       Giovanni M. Marchetti\n\nTranslated to Julia:                   Rob J Goedman\n\nLicense\n\nThe R package ggm is licensed under License: GPL-2.\n\nThe Julia translation is licenced under: MIT.\n\nPart of the API, exported.\n\n\n\n\n\n","category":"function"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"##basis_set","category":"page"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"basis_set(dag::DAG)","category":"page"},{"location":"#StructuralCausalModels.basis_set-Tuple{DAG}","page":"StructuralCausalModels","title":"StructuralCausalModels.basis_set","text":"basis_set\n\nDetermine basis_set\n\nbasis_set(dag)\n\n\nPart of API, not exported.\n\n\n\n\n\n","category":"method"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"##shipley_test","category":"page"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"shipley_test(d::DAG)","category":"page"},{"location":"#StructuralCausalModels.shipley_test-Tuple{DAG}","page":"StructuralCausalModels","title":"StructuralCausalModels.shipley_test","text":"shipley_test\n\nshipley_test(d)\n\n\nTest of all independencies implied by a given DAG\n\nComputes a simultaneous test of all independence relationships implied by a given Gaussian model defined according to a directed acyclic graph, based on the sample covariance matrix.\n\nThe test statistic is C = -2 sum(ln(pj)) where pj are the p-values of tests of conditional independence in the basis set computed by basiSet(A). The p-values are independent uniform variables on (0,1) and the statistic has exactly a chi square distribution on 2k degrees of freedom where k is the number of elements of the basis set.  Shipley (2002) calls this test Fisher's C test.\n\nMethod\n\nshipley_test(;\n* `d::Dag`                             : Directed acyclic graph\n)\n\nReturns\n\n* `res::NamedTuple`                    : (ctest=..., dof=..., pval=...)\n\nwhere:\n\nctest: Test statistic C   dof:   Degrees of freedom.   pval:  The P-value of the test, assuming a two-sided alternative.\n\nExtended help\n\nExample\n\nShipley_test for the mathematics marks data\n\nusing StructuralCausalModels, RData\n\nobjs = RData.load(scm_path(\"..\", \"data\", \"marks.rda\");\nmarks_df = objs[\"marks\"]\n\nd = OrderedDict(\n  :mechanics => [:vectors, :algebra],\n  :vectors => [:algebra],\n  :statistics => [:algebra, :analysis],\n  :analysis => [:algebra]\n);\ndag = Dag(d; df=df)\nshipley_test(dag)\n\nSee also\n\n?Dag\n?basis_set\n?pcor_test\n\nAcknowledgements\n\nOriginal author:                       Giovanni M. Marchetti\n\nTranslated to Julia:                   Rob J Goedman\n\nReferences\n\nShipley, B. (2000). A new inferential test for path models based on directed acyclic graphs. Structural Equation Modeling, 7(2), 206–218.\n\nLicence\n\nThe R package ggm is licensed under License: GPL-2.\n\nThe Julia translation is licenced under: MIT.\n\nExported as part of the api\n\n\n\n\n\n","category":"method"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"##pcor","category":"page"},{"location":"#","page":"StructuralCausalModels","title":"StructuralCausalModels","text":"pcor(u::Vector{Symbol}, S::NamedArray)","category":"page"},{"location":"#StructuralCausalModels.pcor-Tuple{Array{Symbol,1},NamedArray}","page":"StructuralCausalModels","title":"StructuralCausalModels.pcor","text":"pcor\n\npcor(u, S)\n\n\nComputes the partial correlation between two variables given a set of other variables.\n\nMethod\n\npcor(;\n* `u::Vector{Int}`                     : Variables used to compute correlation\n* `S::Matrix`                          : Sample covariance matrix\n)\n\nwhere:\n\nu[1], u[2]: Variables used to compute correlation between, remaining indices   are the conditioning set\n\nReturns\n\n* `res::Float64`                       : Correlation between u[1] and u[2]\n\nExtended help\n\nExample\n\nCorrelation between vectors and algebra, conditioning on analysis and statistics\n\nusing StructuralCausalModels, CSV\n\ndf = CSV.read(scm_path(\"..\", \"data\", \"marks.csv\");\nS = cov(Array(df))\n\nu = [2, 3, 4, 5]\npcor(u, S)\nu = [:vectors, :algebra, :statistics, :analysis]\n\nAcknowledgements\n\nOriginal author:                       Giovanni M. Marchetti\n\nTranslated to Julia:                   Rob J Goedman\n\nLicense\n\nThe R package ggm is licensed under License: GPL-2.\n\nThe Julia translation is licenced under: MIT.\n\nPart of the api, not exported.\n\n\n\n\n\n","category":"method"}]
}
