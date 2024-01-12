"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7474:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(3117),o=(n(7294),n(3905));const i={},r="Enhanced Inference",l={unversionedId:"Use-Cases/enhanced_inference",id:"Use-Cases/enhanced_inference",isDocsHomePage:!1,title:"Enhanced Inference",description:"autogen.OpenAIWrapper provides enhanced LLM inference for openai>=1.",source:"@site/docs/Use-Cases/enhanced_inference.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/enhanced_inference",permalink:"/autogen/docs/Use-Cases/enhanced_inference",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/enhanced_inference.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Multi-agent Conversation Framework",permalink:"/autogen/docs/Use-Cases/agent_chat"},next:{title:"Contributing",permalink:"/autogen/docs/Contribute"}},s=[{value:"Tune Inference Parameters (for openai&lt;1)",id:"tune-inference-parameters-for-openai1",children:[{value:"Choices to optimize",id:"choices-to-optimize",children:[],level:3},{value:"Validation data",id:"validation-data",children:[],level:3},{value:"Evaluation function",id:"evaluation-function",children:[],level:3},{value:"Metric to optimize",id:"metric-to-optimize",children:[],level:3},{value:"Search space",id:"search-space",children:[],level:3},{value:"Budgets",id:"budgets",children:[],level:3},{value:"Perform tuning",id:"perform-tuning",children:[],level:3}],level:2},{value:"API unification",id:"api-unification",children:[],level:2},{value:"Usage Summary",id:"usage-summary",children:[],level:2},{value:"Caching",id:"caching",children:[],level:2},{value:"Error handling",id:"error-handling",children:[{value:"Runtime error",id:"runtime-error",children:[],level:3},{value:"Logic error",id:"logic-error",children:[],level:3}],level:2},{value:"Templating",id:"templating",children:[],level:2},{value:"Logging (for openai&lt;1)",id:"logging-for-openai1",children:[],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enhanced-inference"},"Enhanced Inference"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.OpenAIWrapper")," provides enhanced LLM inference for ",(0,o.kt)("inlineCode",{parentName:"p"},"openai>=1"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion")," is a drop-in replacement of ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion")," for enhanced LLM inference using ",(0,o.kt)("inlineCode",{parentName:"p"},"openai<1"),".\nThere are a number of benefits of using ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen")," to perform inference: performance tuning, API unification, caching, error handling, multi-config inference, result filtering, templating and so on."),(0,o.kt)("h2",{id:"tune-inference-parameters-for-openai1"},"Tune Inference Parameters (for openai<1)"),(0,o.kt)("p",null,"Find a list of examples in this page: ",(0,o.kt)("a",{parentName:"p",href:"/autogen/docs/Examples#tune-inference-hyperparameters"},"Tune Inference Parameters Examples")),(0,o.kt)("h3",{id:"choices-to-optimize"},"Choices to optimize"),(0,o.kt)("p",null,"The cost of using foundation models for text generation is typically measured in terms of the number of tokens in the input and output combined. From the perspective of an application builder using foundation models, the use case is to maximize the utility of the generated text under an inference budget constraint (e.g., measured by the average dollar cost needed to solve a coding problem). This can be achieved by optimizing the hyperparameters of the inference,\nwhich can significantly affect both the utility and the cost of the generated text."),(0,o.kt)("p",null,"The tunable hyperparameters include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"model - this is a required input, specifying the model ID to use."),(0,o.kt)("li",{parentName:"ol"},"prompt/messages - the input prompt/messages to the model, which provides the context for the text generation task."),(0,o.kt)("li",{parentName:"ol"},"max_tokens - the maximum number of tokens (words or word pieces) to generate in the output."),(0,o.kt)("li",{parentName:"ol"},"temperature - a value between 0 and 1 that controls the randomness of the generated text. A higher temperature will result in more random and diverse text, while a lower temperature will result in more predictable text."),(0,o.kt)("li",{parentName:"ol"},"top_p - a value between 0 and 1 that controls the sampling probability mass for each token generation. A lower top_p value will make it more likely to generate text based on the most likely tokens, while a higher value will allow the model to explore a wider range of possible tokens."),(0,o.kt)("li",{parentName:"ol"},"n - the number of responses to generate for a given prompt. Generating multiple responses can provide more diverse and potentially more useful output, but it also increases the cost of the request."),(0,o.kt)("li",{parentName:"ol"},"stop - a list of strings that, when encountered in the generated text, will cause the generation to stop. This can be used to control the length or the validity of the output."),(0,o.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty - values that control the relative importance of the presence and frequency of certain words or phrases in the generated text."),(0,o.kt)("li",{parentName:"ol"},'best_of - the number of responses to generate server-side when selecting the "best" (the one with the highest log probability per token) response for a given prompt.')),(0,o.kt)("p",null,"The cost and utility of text generation are intertwined with the joint effect of these hyperparameters.\nThere are also complex interactions among subsets of the hyperparameters. For example,\nthe temperature and top_p are not recommended to be altered from their default values together because they both control the randomness of the generated text, and changing both at the same time can result in conflicting effects; n and best_of are rarely tuned together because if the application can process multiple outputs, filtering on the server side causes unnecessary information loss; both n and max_tokens will affect the total number of tokens generated, which in turn will affect the cost of the request.\nThese interactions and trade-offs make it difficult to manually determine the optimal hyperparameter settings for a given text generation task."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Do the choices matter? Check this ",(0,o.kt)("a",{parentName:"em",href:"/blog/2023/04/21/LLM-tuning-math"},"blogpost")," to find example tuning results about gpt-3.5-turbo and gpt-4.")),(0,o.kt)("p",null,"With AutoGen, the tuning can be performed with the following information:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Validation data."),(0,o.kt)("li",{parentName:"ol"},"Evaluation function."),(0,o.kt)("li",{parentName:"ol"},"Metric to optimize."),(0,o.kt)("li",{parentName:"ol"},"Search space."),(0,o.kt)("li",{parentName:"ol"},"Budgets: inference and optimization respectively.")),(0,o.kt)("h3",{id:"validation-data"},"Validation data"),(0,o.kt)("p",null,'Collect a diverse set of instances. They can be stored in an iterable of dicts. For example, each instance dict can contain "problem" as a key and the description str of a math problem as the value; and "solution" as a key and the solution str as the value.'),(0,o.kt)("h3",{id:"evaluation-function"},"Evaluation function"),(0,o.kt)("p",null,"The evaluation function should take a list of responses, and other keyword arguments corresponding to the keys in each validation data instance as input, and output a dict of metrics. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def eval_math_responses(responses: List[str], solution: str, **args) -> Dict:\n    # select a response from the list of responses\n    answer = voted_answer(responses)\n    # check whether the answer is correct\n    return {"success": is_equivalent(answer, solution)}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.code_utils")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.math_utils")," offer some example evaluation functions for code generation and math problem solving."),(0,o.kt)("h3",{id:"metric-to-optimize"},"Metric to optimize"),(0,o.kt)("p",null,'The metric to optimize is usually an aggregated metric over all the tuning data instances. For example, users can specify "success" as the metric and "max" as the optimization mode. By default, the aggregation function is taking the average. Users can provide a customized aggregation function if needed.'),(0,o.kt)("h3",{id:"search-space"},"Search space"),(0,o.kt)("p",null,"Users can specify the (optional) search range for each hyperparameter."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"model. Either a constant str, or multiple choices specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.choice"),"."),(0,o.kt)("li",{parentName:"ol"},'prompt/messages. Prompt is either a str or a list of strs, of the prompt templates. messages is a list of dicts or a list of lists, of the message templates.\nEach prompt/message template will be formatted with each data instance. For example, the prompt template can be:\n"{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in ',"\\",'boxed{{}}."\nAnd ',(0,o.kt)("inlineCode",{parentName:"li"},"{problem}"),' will be replaced by the "problem" field of each data instance.'),(0,o.kt)("li",{parentName:"ol"},"max_tokens, n, best_of. They can be constants, or specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.randint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.qrandint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.lograndint")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.qlograndint"),". By default, max_tokens is searched in [50, 1000); n is searched in [1, 100); and best_of is fixed to 1."),(0,o.kt)("li",{parentName:"ol"},"stop. It can be a str or a list of strs, or a list of lists of strs or None. Default is None."),(0,o.kt)("li",{parentName:"ol"},"temperature or top_p. One of them can be specified as a constant or by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.loguniform")," etc.\nPlease don't provide both. By default, each configuration will choose either a temperature or a top_p in ","[0, 1]"," uniformly."),(0,o.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty. They can be constants or specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," etc. Not tuned by default.")),(0,o.kt)("h3",{id:"budgets"},"Budgets"),(0,o.kt)("p",null,"One can specify an inference budget and an optimization budget.\nThe inference budget refers to the average inference cost per data instance.\nThe optimization budget refers to the total budget allowed in the tuning process. Both are measured by dollars and follow the price per 1000 tokens."),(0,o.kt)("h3",{id:"perform-tuning"},"Perform tuning"),(0,o.kt)("p",null,"Now, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.tune")," for tuning. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import autogen\n\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"num_samples")," is the number of configurations to sample. -1 means unlimited (until optimization budget is exhausted).\nThe returned ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," contains the optimized configuration and ",(0,o.kt)("inlineCode",{parentName:"p"},"analysis")," contains an ExperimentAnalysis object for all the tried configurations and results."),(0,o.kt)("p",null,"The tuned config can be used to perform inference."),(0,o.kt)("h2",{id:"api-unification"},"API unification"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.OpenAIWrapper.create()")," can be used to create completions for both chat and non-chat models, and both OpenAI API and Azure OpenAI API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from autogen import OpenAIWrapper\n# OpenAI endpoint\nclient = OpenAIWrapper()\n# ChatCompletion\nresponse = client.create(messages=[{"role": "user", "content": "2+2="}], model="gpt-3.5-turbo")\n# extract the response text\nprint(client.extract_text_or_completion_object(response))\n# get cost of this completion\nprint(response.cost)\n# Azure OpenAI endpoint\nclient = OpenAIWrapper(api_key=..., base_url=..., api_version=..., api_type="azure")\n# Completion\nresponse = client.create(prompt="2+2=", model="gpt-3.5-turbo-instruct")\n# extract the response text\nprint(client.extract_text_or_completion_object(response))\n\n')),(0,o.kt)("p",null,"For local LLMs, one can spin up an endpoint using a package like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lm-sys/FastChat"},"FastChat"),", and then use the same API to send a request. See ",(0,o.kt)("a",{parentName:"p",href:"/blog/2023/07/14/Local-LLMs"},"here")," for examples on how to make inference with local LLMs."),(0,o.kt)("h2",{id:"usage-summary"},"Usage Summary"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAIWrapper")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen")," tracks token counts and costs of your API calls. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"create()")," method to initiate requests and ",(0,o.kt)("inlineCode",{parentName:"p"},"print_usage_summary()")," to retrieve a detailed usage report, including total cost and token usage for both cached and actual requests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'mode=["actual", "total"]')," (default): print usage summary for all completions and non-caching completions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mode='actual'"),": only print non-cached usage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mode='total'"),": only print all usage (including cache).")),(0,o.kt)("p",null,"Reset your session's usage data with ",(0,o.kt)("inlineCode",{parentName:"p"},"clear_usage_summary()")," when needed. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_client_cost.ipynb"},"View Notebook")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from autogen import OpenAIWrapper\n\nclient = OpenAIWrapper()\nclient.create(messages=[{"role": "user", "content": "Python learning tips."}], model="gpt-3.5-turbo")\nclient.print_usage_summary()  # Display usage\nclient.clear_usage_summary()  # Reset usage data\n')),(0,o.kt)("p",null,"Sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage summary excluding cached usage:\nTotal cost: 0.00015\n* Model 'gpt-3.5-turbo': cost: 0.00015, prompt_tokens: 25, completion_tokens: 58, total_tokens: 83\n\nUsage summary including cached usage:\nTotal cost: 0.00027\n* Model 'gpt-3.5-turbo': cost: 0.00027, prompt_tokens: 50, completion_tokens: 100, total_tokens: 150\n")),(0,o.kt)("h2",{id:"caching"},"Caching"),(0,o.kt)("p",null,'API call results are cached locally and reused when the same request is issued. This is useful when repeating or continuing experiments for reproducibility and cost saving. It still allows controlled randomness by setting the "cache_seed" specified in ',(0,o.kt)("inlineCode",{parentName:"p"},"OpenAIWrapper.create()")," or the constructor of ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAIWrapper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client = OpenAIWrapper(cache_seed=...)\nclient.create(...)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client = OpenAIWrapper()\nclient.create(cache_seed=..., ...)\n")),(0,o.kt)("p",null,"Caching is enabled by default with cache_seed 41. To disable it please set ",(0,o.kt)("inlineCode",{parentName:"p"},"cache_seed")," to None."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE"),". openai v1.1 introduces a new param ",(0,o.kt)("inlineCode",{parentName:"p"},"seed"),". The difference between autogen's ",(0,o.kt)("inlineCode",{parentName:"p"},"cache_seed")," and openai's ",(0,o.kt)("inlineCode",{parentName:"p"},"seed")," is that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"autogen uses local disk cache to guarantee the exactly same output is produced for the same input and when cache is hit, no openai api call will be made."),(0,o.kt)("li",{parentName:"ul"},"openai's ",(0,o.kt)("inlineCode",{parentName:"li"},"seed")," is a best-effort deterministic sampling with no guarantee of determinism. When using openai's ",(0,o.kt)("inlineCode",{parentName:"li"},"seed")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"cache_seed")," set to None, even for the same input, an openai api call will be made and there is no guarantee for getting exactly the same output.")),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("h3",{id:"runtime-error"},"Runtime error"),(0,o.kt)("p",null,"One can pass a list of configurations of different models/endpoints to mitigate the rate limits and other runtime error. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client = OpenAIWrapper(\n    config_list=[\n        {\n            "model": "gpt-4",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2023-08-01-preview",\n        },\n        {\n            "model": "gpt-3.5-turbo",\n            "api_key": os.environ.get("OPENAI_API_KEY"),\n            "base_url": "https://api.openai.com/v1",\n        },\n        {\n            "model": "llama2-chat-7B",\n            "base_url": "http://127.0.0.1:8080",\n        }\n    ],\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client.create()")," will try querying Azure OpenAI gpt-4, OpenAI gpt-3.5-turbo, and a locally hosted llama2-chat-7B one by one,\nuntil a valid result is returned. This can speed up the development process where the rate limit is a bottleneck. An error will be raised if the last choice fails. So make sure the last choice in the list has the best availability."),(0,o.kt)("p",null,"For convenience, we provide a number of utility functions to load config lists."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_config_list"),": Generates configurations for API calls, primarily from provided API keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config_list_openai_aoai"),": Constructs a list of configurations using both Azure OpenAI and OpenAI endpoints, sourcing API keys from environment variables or local files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config_list_from_json"),": Loads configurations from a JSON structure, either from an environment variable or a local JSON file, with the flexibility of filtering configurations based on given criteria."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config_list_from_models"),": Creates configurations based on a provided list of models, useful when targeting specific models without manually specifying each configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config_list_from_dotenv"),": Constructs a configuration list from a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, offering a consolidated way to manage multiple API configurations and keys from a single file.")),(0,o.kt)("p",null,"We suggest that you take a look at this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_openai_utils.ipynb"},"notebook")," for full code examples of the different methods to configure your model endpoints."),(0,o.kt)("h3",{id:"logic-error"},"Logic error"),(0,o.kt)("p",null,"Another type of error is that the returned response does not satisfy a requirement. For example, if the response is required to be a valid json string, one would like to filter the responses that are not. This can be achieved by providing a list of configurations and a filter function. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def valid_json_filter(response, **_):\n    for text in OpenAIWrapper.extract_text_or_completion_object(response):\n        try:\n            json.loads(text)\n            return True\n        except ValueError:\n            pass\n    return False\n\nclient = OpenAIWrapper(\n    config_list=[{"model": "text-ada-001"}, {"model": "gpt-3.5-turbo-instruct"}, {"model": "text-davinci-003"}],\n)\nresponse = client.create(\n    prompt="How to construct a json request to Bing API to search for \'latest AI news\'? Return the JSON request.",\n    filter_func=valid_json_filter,\n)\n')),(0,o.kt)("p",null,"The example above will try to use text-ada-001, gpt-3.5-turbo-instruct, and text-davinci-003 iteratively, until a valid json string is returned or the last config is used. One can also repeat the same model in the list for multiple times (with different seeds) to try one model multiple times for increasing the robustness of the final response."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Advanced use case: Check this ",(0,o.kt)("a",{parentName:"em",href:"/blog/2023/05/18/GPT-adaptive-humaneval"},"blogpost")," to find how to improve GPT-4's coding performance from 68% to 90% while reducing the inference cost.")),(0,o.kt)("h2",{id:"templating"},"Templating"),(0,o.kt)("p",null,"If the provided prompt or message is a template, it will be automatically materialized with a given context. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'response = client.create(\n    context={"problem": "How many positive integers, not exceeding 100, are multiples of 2 or 3 but not 4?"},\n    prompt="{problem} Solve the problem carefully.",\n    allow_format_str_template=True,\n    **config\n)\n')),(0,o.kt)("p",null,"A template is either a format str, like the example above, or a function which produces a str from several input fields, like the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def content(turn, context):\n    return "\\n".join(\n        [\n            context[f"user_message_{turn}"],\n            context[f"external_info_{turn}"]\n        ]\n    )\n\nmessages = [\n    {\n        "role": "system",\n        "content": "You are a teaching assistant of math.",\n    },\n    {\n        "role": "user",\n        "content": partial(content, turn=0),\n    },\n]\ncontext = {\n    "user_message_0": "Could you explain the solution to Problem 1?",\n    "external_info_0": "Problem 1: ...",\n}\n\nresponse = client.create(context=context, messages=messages, **config)\nmessages.append(\n    {\n        "role": "assistant",\n        "content": client.extract_text(response)[0]\n    }\n)\nmessages.append(\n    {\n        "role": "user",\n        "content": partial(content, turn=1),\n    },\n)\ncontext.append(\n    {\n        "user_message_1": "Why can\'t we apply Theorem 1 to Equation (2)?",\n        "external_info_1": "Theorem 1: ...",\n    }\n)\nresponse = client.create(context=context, messages=messages, **config)\n')),(0,o.kt)("h2",{id:"logging-for-openai1"},"Logging (for openai<1)"),(0,o.kt)("p",null,"When debugging or diagnosing an LLM-based system, it is often convenient to log the API calls and analyze them. ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.ChatCompletion")," offer an easy way to collect the API call histories. For example, to log the chat histories, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.start_logging()\n")),(0,o.kt)("p",null,"The API calls made after this will be automatically logged. They can be retrieved at any time by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.logged_history\n")),(0,o.kt)("p",null,"There is a function that can be used to print usage summary (total cost, and token count usage from each model):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.print_usage_summary()\n")),(0,o.kt)("p",null,"To stop logging, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.stop_logging()\n")),(0,o.kt)("p",null,"If one would like to append the history to an existing dict, pass the dict like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.start_logging(history_dict=existing_history_dict)\n")),(0,o.kt)("p",null,"By default, the counter of API calls will be reset at ",(0,o.kt)("inlineCode",{parentName:"p"},"start_logging()"),". If no reset is desired, set ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_counter=False"),"."),(0,o.kt)("p",null,"There are two types of logging formats: compact logging and individual API call logging. The default format is compact.\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"compact=False")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"start_logging()")," to switch."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of a history dict with compact logging.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{\n    \"\"\"\n    [\n        {\n            'role': 'system',\n            'content': system_message,\n        },\n        {\n            'role': 'user',\n            'content': user_message_1,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_1,\n        },\n        {\n            'role': 'user',\n            'content': user_message_2,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_2,\n        },\n    ]\"\"\": {\n        \"created_at\": [0, 1],\n        \"cost\": [0.1, 0.2],\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of a history dict with individual API call logging.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{\n    0: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                }\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n    1: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                },\n                {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_2,\n                },\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_2,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of printing for usage summary")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Total cost: <cost>\nToken count summary for model <model>: prompt_tokens: <count 1>, completion_tokens: <count 2>, total_tokens: <count 3>\n")),(0,o.kt)("p",null,"It can be seen that the individual API call history contains redundant information of the conversation. For a long conversation the degree of redundancy is high.\nThe compact history is more efficient and the individual API call history contains more details."))}c.isMDXComponent=!0}}]);