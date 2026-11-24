<!-- Generated file — do not edit; regenerated with the SDK. -->

# Depop — operations

Accessor: `client.depop` · Source: `src/resources/depop.ts` · 1 operation · Request and error types: namespace `Depop`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getV1DepopListings

- **Signature**: `getV1DepopListings(request: Depop.GetV1DepopListingsRequest, options?: RequestOptions): ApiPromise<V1DepopListingsResponse, Depop.GetV1DepopListingsError>`
- **Wire**: `GET /v1/depop/listings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DepopListingsResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Depop.GetV1DepopListingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1DepopListings400Error1"` [400] `V1DepopListings400Error1` · `"v1DepopListings401Error1"` [401] `V1DepopListings401Error1` · `"v1DepopListings429Error1"` [429] `V1DepopListings429Error1` · `"v1DepopListings502Error1"` [502] `V1DepopListings502Error1` · `"v1DepopListings503Error1"` [503] `V1DepopListings503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Depop.GetV1DepopListingsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `country` | `query` | — | `Country` | no | `Country.Us` |
| `count` | `query` | — | `number` | no | `24` |
| `cursor` | `query` | — | `string` | no | — |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Country` | `countrySchema` | `src/models/country.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1DepopListingsResponse` | `v1DepopListingsResponseSchema` | `src/models/v1-depop-listings-response.ts` |
| `V1DepopListings400Error1` | `v1DepopListings400Error1Schema` | `src/models/v1-depop-listings400-error1.ts` |
| `V1DepopListings401Error1` | `v1DepopListings401Error1Schema` | `src/models/v1-depop-listings401-error1.ts` |
| `V1DepopListings429Error1` | `v1DepopListings429Error1Schema` | `src/models/v1-depop-listings429-error1.ts` |
| `V1DepopListings502Error1` | `v1DepopListings502Error1Schema` | `src/models/v1-depop-listings502-error1.ts` |
| `V1DepopListings503Error1` | `v1DepopListings503Error1Schema` | `src/models/v1-depop-listings503-error1.ts` |

