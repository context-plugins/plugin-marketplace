# Goe — operations

Accessor: `client.Goe` · Source: `Api/Goe.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdviceLookupUnderDevelopment
- **HTTP**: `POST /api/goe-api/advice-status/lookup/` (Default (api))
- **Notes**: The &lt;b&gt;Advice Lookup&lt;/b&gt; endpoint returns request, response, and related metadata for a historical API request when provided with an Advice ID. Due to API security constraints, clients can only retrieve data for Advice IDs that they originally generated. As a result, the sample payload is only valid when used with the default GOE Developer Hub ID.
- **Signature**: `AdviceLookupUnderDevelopment(AdviceLookupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdviceLookupResponse`
- **Error**: `SdkException<AdviceLookupUnderDevelopmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetInternalServerMessageGeneral(out InternalServerMessageGeneral)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdviceStatusUnderDevelopment
- **HTTP**: `POST /api/goe-api/advice-status` (Default (api))
- **Notes**: The &lt;b&gt;Advice Status API&lt;/b&gt; is utilized by Platform Partners to provide GOE with a list of unique Advice IDs with their corresponding execution status. GOE leverages this information to monitor the End Investor’s goal investment lifecycle.
- **Signature**: `AdviceStatusUnderDevelopment(AdvicePayload body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertAdvice`
- **Error**: `SdkException<AdviceStatusUnderDevelopmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetInternalServerMessageGeneral(out InternalServerMessageGeneral)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GoeenhancedInitialWealthSplitterUnderDevelopment
- **HTTP**: `POST /api/goe-api/enhancedIWS` (Default (api))
- **Notes**: &lt;b&gt;Enhanced Wealth Splitter (EWS)&lt;/b&gt; is an evolution of the Initial Wealth Splitter API, both built on top of the core GOE Engine. Given a pool of accounts and future contributions, EWS &lt;b&gt;optimally apportions available balances&lt;/b&gt; across &lt;b&gt;multiple End Investor goals&lt;/b&gt; — while ensuring, higher-ranked goals are fully funded before resources flow to lower-priority ones.
- **Signature**: `GoeenhancedInitialWealthSplitterUnderDevelopment(EwsInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EwsResponseModel`
- **Error**: `SdkException<GoeenhancedInitialWealthSplitterUnderDevelopmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GoeforTaxes
- **HTTP**: `POST /GOEforTaxes` (Default (api))
- **Notes**: &lt;b&gt;GOE for Taxes (GOE TO)&lt;/b&gt; is a &lt;b&gt;tax-aware&lt;/b&gt; API built on the Goals Optimization Engine and Unified Portfolio Advice that &lt;b&gt;optimizes asset allocation&lt;/b&gt; and generates trade recommendations, adjusting goals and cashflows to maximize post-tax goal success probability through dynamic planning and Social Security offsets.
- **Signature**: `GoeforTaxes(GoeForTaxesInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GoeForTaxesOutputModel`
- **Error**: `SdkException<GoeforTaxesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessageGeneral(out InternalServerMessageGeneral)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GoesimulationEngine
- **HTTP**: `POST /api/goe-api/goalsimulationengine` (Default (api))
- **Notes**: &lt;b&gt;GOE SIMPL&lt;/b&gt; is an advanced API built on the Goals Optimization Engine that simulates portfolio outcomes using &lt;b&gt;tax-aware logic&lt;/b&gt;, Social Security offsets, and &lt;b&gt;Monte Carlo&lt;/b&gt; simulations to optimize multi-goal financial plans for individuals or households, including support for custom portfolios and pre/post-tax account structures.
- **Signature**: `GoesimulationEngine(GoeSimulationEngineInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GoeSimulationEngineOutputModel`
- **Error**: `SdkException<GoesimulationEngineError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessageGeneral(out InternalServerMessageGeneral)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GoewithAnnuitiesUnderDevelopment
- **HTTP**: `POST /api/goe-api/goeWithAnnuities` (Default (api))
- **Notes**: &lt;b&gt;GOE with Annuities&lt;/b&gt; is a retirement-focused API built on the Goals Optimization Engine that provides adaptive financial planning by recommending deferred and immediate &lt;b&gt;annuity purchases&lt;/b&gt; to ensure guaranteed income for fixed expenses, while maintaining market exposure to support long-term growth.
- **Signature**: `GoewithAnnuitiesUnderDevelopment(GoeWithAnnuitiesInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnnuitiesResponseModel`
- **Error**: `SdkException<GoewithAnnuitiesUnderDevelopmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GoalCalculator
- **HTTP**: `POST /api/goe-api/goalcalculator` (Default (api))
- **Notes**: The &lt;b&gt;Goal Calculator API&lt;/b&gt; is a GOE-based tool that computes a &lt;b&gt;precise goal value&lt;/b&gt; aligned with a &lt;b&gt;target probability&lt;/b&gt; and goal priority using the core GOE algorithm and existing payload structures.
- **Signature**: `GoalCalculator(GoalCalculatorInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GoalCalculatorOutputModel`
- **Error**: `SdkException<GoalCalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InitialWealthSplitter
- **HTTP**: `POST /v3/runWealthSplitter` (Default (api))
- **Notes**: &lt;b&gt;Initial Wealth Splitter (IWS)&lt;/b&gt; is an optional API built on top of GOE that allocates an &lt;b&gt;End Investor’s lump-sum&lt;/b&gt; initial wealth across &lt;b&gt;multiple goals&lt;/b&gt; based on their priority, ensuring higher-priority goals are funded first and transparently displaying the prioritization logic to Platform Partners.
- **Signature**: `InitialWealthSplitter(WealthSplitterInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WealthSplitterOutputModel`
- **Error**: `SdkException<InitialWealthSplitterError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RunPipe
- **HTTP**: `POST /v3/runPipe` (Default (api))
- **Notes**: The &lt;b&gt;Run Pipe API&lt;/b&gt; is the core of the Goals Optimization Engine (GOE), dynamically generating and adjusting personalized asset allocations using backward-looking &lt;b&gt;dynamic programming&lt;/b&gt; to maximize goal success probability while factoring in risk tolerance, goal priority, and real-time progress.
- **Signature**: `RunPipe(RunPipeInputModel body, string? version = "4", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `version` = "4", `requestOptions` = null
- **Returns**: `RunPipeResponseModelV4`
- **Error**: `SdkException<RunPipeError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessage(out Message)` [400] · `TryGetValidationMessageOne(out ValidationMessageOne)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnifiedPortfolioAdvice
- **HTTP**: `POST /v4/unifiedportfolioadvice` (Default (api))
- **Notes**: &lt;b&gt;Unified Portfolio Advice (UPA)&lt;/b&gt; is an API layer built on top of the Goals Optimization Engine (GOE) that consolidates &lt;b&gt;multiple financial goals&lt;/b&gt; into a &lt;b&gt;single portfolio plan&lt;/b&gt;, enabling integration with Platform Partner services, while also offering goal reduction recommendations to enhance plan success.
- **Signature**: `UnifiedPortfolioAdvice(string? detailedResponse, UnifiedPortfolioAdviceInputModelV4 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `detailedResponse` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Upav4ResponseModel`
- **Error**: `SdkException<UnifiedPortfolioAdviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageOne(out ValidationMessageOne)` [400] · `TryGetMessage(out Message)` [404] · `TryGetInternalServerMessage(out InternalServerMessage)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
