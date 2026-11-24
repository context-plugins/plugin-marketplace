<!-- Generated file — do not edit; regenerated with the SDK. -->

# TcGplayer — operations

Accessor: `client.tcGplayer` · Source: `src/resources/tc-gplayer.ts` · 2 operations · Request and error types: namespace `TcGplayer`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getV1TcgplayerListings

- **Signature**: `getV1TcgplayerListings(request?: TcGplayer.GetV1TcgplayerListingsRequest, options?: RequestOptions): ApiPromise<V1TcgplayerListingsResponse, TcGplayer.GetV1TcgplayerListingsError>`
- **Wire**: `GET /v1/tcgplayer/listings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TcgplayerListingsResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `TcGplayer.GetV1TcgplayerListingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1TcgplayerListings400Error1"` [400] `V1TcgplayerListings400Error1` · `"v1TcgplayerListings401Error1"` [401] `V1TcgplayerListings401Error1` · `"v1TcgplayerListings429Error1"` [429] `V1TcgplayerListings429Error1` · `"v1TcgplayerListings502Error1"` [502] `V1TcgplayerListings502Error1` · `"v1TcgplayerListings503Error1"` [503] `V1TcgplayerListings503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TcGplayer.GetV1TcgplayerListingsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | no | — |
| `productId` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `count` | `query` | — | `number` | no | `25` |
| `condition` | `query` | — | `string` | no | — |
| `variant` | `query` | — | `string` | no | — |
| `language` | `query` | — | `string` | no | — |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1TcgplayerListingsResponse` | `v1TcgplayerListingsResponseSchema` | `src/models/v1-tcgplayer-listings-response.ts` |
| `V1TcgplayerListings400Error1` | `v1TcgplayerListings400Error1Schema` | `src/models/v1-tcgplayer-listings400-error1.ts` |
| `V1TcgplayerListings401Error1` | `v1TcgplayerListings401Error1Schema` | `src/models/v1-tcgplayer-listings401-error1.ts` |
| `V1TcgplayerListings429Error1` | `v1TcgplayerListings429Error1Schema` | `src/models/v1-tcgplayer-listings429-error1.ts` |
| `V1TcgplayerListings502Error1` | `v1TcgplayerListings502Error1Schema` | `src/models/v1-tcgplayer-listings502-error1.ts` |
| `V1TcgplayerListings503Error1` | `v1TcgplayerListings503Error1Schema` | `src/models/v1-tcgplayer-listings503-error1.ts` |

### getV1TcgplayerSold

- **Signature**: `getV1TcgplayerSold(request?: TcGplayer.GetV1TcgplayerSoldRequest, options?: RequestOptions): ApiPromise<V1TcgplayerSoldResponse, TcGplayer.GetV1TcgplayerSoldError>`
- **Wire**: `GET /v1/tcgplayer/sold`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TcgplayerSoldResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `TcGplayer.GetV1TcgplayerSoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1TcgplayerSold400Error1"` [400] `V1TcgplayerSold400Error1` · `"v1TcgplayerSold401Error1"` [401] `V1TcgplayerSold401Error1` · `"v1TcgplayerSold429Error1"` [429] `V1TcgplayerSold429Error1` · `"v1TcgplayerSold502Error1"` [502] `V1TcgplayerSold502Error1` · `"v1TcgplayerSold503Error1"` [503] `V1TcgplayerSold503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TcGplayer.GetV1TcgplayerSoldRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | no | — |
| `productId` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `100` |
| `condition` | `query` | — | `string` | no | — |
| `variant` | `query` | — | `string` | no | — |
| `language` | `query` | — | `string` | no | — |
| `history` | `query` | — | `History` | no | `History.None` |
| `soldAfter` | `query` | — | `string` (date) | no | — |
| `soldBefore` | `query` | — | `string` (date) | no | — |
| `fresh` | `query` | — | `boolean` | no | `false` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `History` | `historySchema` | `src/models/history.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1TcgplayerSoldResponse` | `v1TcgplayerSoldResponseSchema` | `src/models/v1-tcgplayer-sold-response.ts` |
| `V1TcgplayerSold400Error1` | `v1TcgplayerSold400Error1Schema` | `src/models/v1-tcgplayer-sold400-error1.ts` |
| `V1TcgplayerSold401Error1` | `v1TcgplayerSold401Error1Schema` | `src/models/v1-tcgplayer-sold401-error1.ts` |
| `V1TcgplayerSold429Error1` | `v1TcgplayerSold429Error1Schema` | `src/models/v1-tcgplayer-sold429-error1.ts` |
| `V1TcgplayerSold502Error1` | `v1TcgplayerSold502Error1Schema` | `src/models/v1-tcgplayer-sold502-error1.ts` |
| `V1TcgplayerSold503Error1` | `v1TcgplayerSold503Error1Schema` | `src/models/v1-tcgplayer-sold503-error1.ts` |

