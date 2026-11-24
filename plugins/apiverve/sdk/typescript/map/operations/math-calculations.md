<!-- Generated file — do not edit; regenerated with the SDK. -->

# MathCalculations — operations

Accessor: `client.mathCalculations` · Source: `src/resources/math-calculations.ts` · 8 operations · Request and error types: namespace `MathCalculations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### colorsimilarity

- **Signature**: `colorsimilarity(request: MathCalculations.ColorsimilarityRequest, options?: RequestOptions): ApiPromise<V1ColorsimilarityResponse, MathCalculations.ColorsimilarityError>`
- **Wire**: `GET /v1/colorsimilarity`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ColorsimilarityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.ColorsimilarityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.ColorsimilarityRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `color1` | `query` | `string` | yes |
| `color2` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ColorsimilarityResponse` | `v1ColorsimilarityResponseSchema` | `src/models/v1-colorsimilarity-response.ts` |

### daylightduration

- **Signature**: `daylightduration(request: MathCalculations.DaylightdurationRequest, options?: RequestOptions): ApiPromise<V1DaylightdurationResponse, MathCalculations.DaylightdurationError>`
- **Wire**: `GET /v1/daylightduration`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DaylightdurationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.DaylightdurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.DaylightdurationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `latitude` | `query` | `number` | yes |
| `longitude` | `query` | `number` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DaylightdurationResponse` | `v1DaylightdurationResponseSchema` | `src/models/v1-daylightduration-response.ts` |

### fibonaccigenerator

- **Signature**: `fibonaccigenerator(request: MathCalculations.FibonaccigeneratorRequest, options?: RequestOptions): ApiPromise<V1FibonaccigeneratorResponse, MathCalculations.FibonaccigeneratorError>`
- **Wire**: `GET /v1/fibonaccigenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FibonaccigeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.FibonaccigeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.FibonaccigeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | yes |
| `startfrom` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FibonaccigeneratorResponse` | `v1FibonaccigeneratorResponseSchema` | `src/models/v1-fibonaccigenerator-response.ts` |

### permutationcombination

- **Signature**: `permutationcombination(request: MathCalculations.PermutationcombinationRequest, options?: RequestOptions): ApiPromise<V1PermutationcombinationResponse, MathCalculations.PermutationcombinationError>`
- **Wire**: `GET /v1/permutationcombination`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PermutationcombinationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.PermutationcombinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.PermutationcombinationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `n` | `query` | `number` | yes |
| `r` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PermutationcombinationResponse` | `v1PermutationcombinationResponseSchema` | `src/models/v1-permutationcombination-response.ts` |

### romannumeralmath

- **Signature**: `romannumeralmath(request: MathCalculations.RomannumeralmathRequest, options?: RequestOptions): ApiPromise<V1RomannumeralmathResponse, MathCalculations.RomannumeralmathError>`
- **Wire**: `GET /v1/romannumeralmath`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RomannumeralmathResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.RomannumeralmathError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.RomannumeralmathRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roman1` | `query` | `string` | yes |
| `roman2` | `query` | `string` | yes |
| `operation` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RomannumeralmathResponse` | `v1RomannumeralmathResponseSchema` | `src/models/v1-romannumeralmath-response.ts` |

### tipcalculator

- **Signature**: `tipcalculator(request: MathCalculations.TipcalculatorRequest, options?: RequestOptions): ApiPromise<V1TipcalculatorResponse, MathCalculations.TipcalculatorError>`
- **Wire**: `GET /v1/tipcalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TipcalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.TipcalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.TipcalculatorRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `percentage` | `query` | `number` | no |
| `people` | `query` | `number` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TipcalculatorResponse` | `v1TipcalculatorResponseSchema` | `src/models/v1-tipcalculator-response.ts` |

### truthtable

- **Signature**: `truthtable(request: MathCalculations.TruthtableRequest, options?: RequestOptions): ApiPromise<V1TruthtableResponse, MathCalculations.TruthtableError>`
- **Wire**: `GET /v1/truthtable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TruthtableResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.TruthtableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.TruthtableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `expression` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TruthtableResponse` | `v1TruthtableResponseSchema` | `src/models/v1-truthtable-response.ts` |

### utmconverter

- **Signature**: `utmconverter(request: MathCalculations.UtmconverterRequest, options?: RequestOptions): ApiPromise<V1UtmconverterResponse, MathCalculations.UtmconverterError>`
- **Wire**: `GET /v1/utmconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UtmconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `MathCalculations.UtmconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MathCalculations.UtmconverterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `latitude` | `query` | `number` | yes |
| `longitude` | `query` | `number` | yes |
| `direction` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UtmconverterResponse` | `v1UtmconverterResponseSchema` | `src/models/v1-utmconverter-response.ts` |

