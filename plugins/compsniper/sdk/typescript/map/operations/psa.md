<!-- Generated file — do not edit; regenerated with the SDK. -->

# Psa — operations

Accessor: `client.psa` · Source: `src/resources/psa.ts` · 4 operations · Request and error types: namespace `Psa`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPsaCard

- **Signature**: `getPsaCard(request?: Psa.GetPsaCardRequest, options?: RequestOptions): ApiPromise<V1PsaCardResponse, Psa.GetPsaCardError>`
- **Wire**: `GET /v1/psa/card`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PsaCardResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Psa.GetPsaCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1PsaCard400Error1"` [400] `V1PsaCard400Error1` · `"v1PsaCard401Error1"` [401] `V1PsaCard401Error1` · `"v1PsaCard429Error1"` [429] `V1PsaCard429Error1` · `"v1PsaCard502Error1"` [502] `V1PsaCard502Error1` · `"v1PsaCard503Error1"` [503] `V1PsaCard503Error1` · `"v1PsaCard404Error1"` [404] `V1PsaCard404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Psa.GetPsaCardRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `specId` | `query` | — | `string` | no | — |
| `keyword` | `query` | — | `string` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `timeRange` | `query` | — | `number` | no | `0` |
| `grade` | `query` | — | `string` | no | — |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1PsaCardResponse` | `v1PsaCardResponseSchema` | `src/models/v1-psa-card-response.ts` |
| `V1PsaCard400Error1` | `v1PsaCard400Error1Schema` | `src/models/v1-psa-card400-error1.ts` |
| `V1PsaCard401Error1` | `v1PsaCard401Error1Schema` | `src/models/v1-psa-card401-error1.ts` |
| `V1PsaCard429Error1` | `v1PsaCard429Error1Schema` | `src/models/v1-psa-card429-error1.ts` |
| `V1PsaCard502Error1` | `v1PsaCard502Error1Schema` | `src/models/v1-psa-card502-error1.ts` |
| `V1PsaCard503Error1` | `v1PsaCard503Error1Schema` | `src/models/v1-psa-card503-error1.ts` |
| `V1PsaCard404Error1` | `v1PsaCard404Error1Schema` | `src/models/v1-psa-card404-error1.ts` |

### getPsaSetPopulation

- **Signature**: `getPsaSetPopulation(request?: Psa.GetPsaSetPopulationRequest, options?: RequestOptions): ApiPromise<V1PsaSetResponse, Psa.GetPsaSetPopulationError>`
- **Wire**: `GET /v1/psa/set`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PsaSetResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Psa.GetPsaSetPopulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1PsaSet400Error1"` [400] `V1PsaSet400Error1` · `"v1PsaSet401Error1"` [401] `V1PsaSet401Error1` · `"v1PsaSet429Error1"` [429] `V1PsaSet429Error1` · `"v1PsaSet502Error1"` [502] `V1PsaSet502Error1` · `"v1PsaSet503Error1"` [503] `V1PsaSet503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Psa.GetPsaSetPopulationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `headingId` | `query` | — | `string` | no |
| `url` | `query` | — | `string` | no |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1PsaSetResponse` | `v1PsaSetResponseSchema` | `src/models/v1-psa-set-response.ts` |
| `V1PsaSet400Error1` | `v1PsaSet400Error1Schema` | `src/models/v1-psa-set400-error1.ts` |
| `V1PsaSet401Error1` | `v1PsaSet401Error1Schema` | `src/models/v1-psa-set401-error1.ts` |
| `V1PsaSet429Error1` | `v1PsaSet429Error1Schema` | `src/models/v1-psa-set429-error1.ts` |
| `V1PsaSet502Error1` | `v1PsaSet502Error1Schema` | `src/models/v1-psa-set502-error1.ts` |
| `V1PsaSet503Error1` | `v1PsaSet503Error1Schema` | `src/models/v1-psa-set503-error1.ts` |

### listPsaSets

- **Signature**: `listPsaSets(request?: Psa.ListPsaSetsRequest, options?: RequestOptions): ApiPromise<V1PsaSetsResponse, Psa.ListPsaSetsError>`
- **Wire**: `GET /v1/psa/sets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PsaSetsResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Psa.ListPsaSetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1PsaSets400Error1"` [400] `V1PsaSets400Error1` · `"v1PsaSets401Error1"` [401] `V1PsaSets401Error1` · `"v1PsaSets429Error1"` [429] `V1PsaSets429Error1` · `"v1PsaSets502Error1"` [502] `V1PsaSets502Error1` · `"v1PsaSets503Error1"` [503] `V1PsaSets503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Psa.ListPsaSetsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `game` | `query` | — | `Game` | no | — |
| `keyword` | `query` | — | `string` | no | — |
| `year` | `query` | — | `string` | no | — |
| `count` | `query` | — | `number` | no | `25` |
| `page` | `query` | — | `number` | no | `1` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Game` | `gameSchema` | `src/models/game.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1PsaSetsResponse` | `v1PsaSetsResponseSchema` | `src/models/v1-psa-sets-response.ts` |
| `V1PsaSets400Error1` | `v1PsaSets400Error1Schema` | `src/models/v1-psa-sets400-error1.ts` |
| `V1PsaSets401Error1` | `v1PsaSets401Error1Schema` | `src/models/v1-psa-sets401-error1.ts` |
| `V1PsaSets429Error1` | `v1PsaSets429Error1Schema` | `src/models/v1-psa-sets429-error1.ts` |
| `V1PsaSets502Error1` | `v1PsaSets502Error1Schema` | `src/models/v1-psa-sets502-error1.ts` |
| `V1PsaSets503Error1` | `v1PsaSets503Error1Schema` | `src/models/v1-psa-sets503-error1.ts` |

### searchPsaCards

- **Signature**: `searchPsaCards(request: Psa.SearchPsaCardsRequest, options?: RequestOptions): ApiPromise<V1PsaSearchResponse, Psa.SearchPsaCardsError>`
- **Wire**: `GET /v1/psa/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PsaSearchResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Psa.SearchPsaCardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1PsaSearch400Error1"` [400] `V1PsaSearch400Error1` · `"v1PsaSearch401Error1"` [401] `V1PsaSearch401Error1` · `"v1PsaSearch429Error1"` [429] `V1PsaSearch429Error1` · `"v1PsaSearch502Error1"` [502] `V1PsaSearch502Error1` · `"v1PsaSearch503Error1"` [503] `V1PsaSearch503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Psa.SearchPsaCardsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `count` | `query` | — | `number` | no | `10` |
| `page` | `query` | — | `number` | no | `1` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1PsaSearchResponse` | `v1PsaSearchResponseSchema` | `src/models/v1-psa-search-response.ts` |
| `V1PsaSearch400Error1` | `v1PsaSearch400Error1Schema` | `src/models/v1-psa-search400-error1.ts` |
| `V1PsaSearch401Error1` | `v1PsaSearch401Error1Schema` | `src/models/v1-psa-search401-error1.ts` |
| `V1PsaSearch429Error1` | `v1PsaSearch429Error1Schema` | `src/models/v1-psa-search429-error1.ts` |
| `V1PsaSearch502Error1` | `v1PsaSearch502Error1Schema` | `src/models/v1-psa-search502-error1.ts` |
| `V1PsaSearch503Error1` | `v1PsaSearch503Error1Schema` | `src/models/v1-psa-search503-error1.ts` |

