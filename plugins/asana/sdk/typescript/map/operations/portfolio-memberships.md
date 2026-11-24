<!-- Generated file — do not edit; regenerated with the SDK. -->

# PortfolioMemberships — operations

Accessor: `client.portfolioMemberships` · Source: `src/resources/portfolio-memberships.ts` · 3 operations · Request and error types: namespace `PortfolioMemberships`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPortfolioMembership

- **Signature**: `getPortfolioMembership(request: PortfolioMemberships.GetPortfolioMembershipRequest, options?: RequestOptions): ApiPromise<PortfolioMembershipsResponse1, PortfolioMemberships.GetPortfolioMembershipError>`
- **Wire**: `GET /portfolio_memberships/{portfolio_membership_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfolioMembershipsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `PortfolioMemberships.GetPortfolioMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMemberships.GetPortfolioMembershipRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioMembershipGid` | `path` | `portfolio_membership_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfolioMembershipsResponse1` | `portfolioMembershipsResponse1Schema` | `src/models/portfolio-memberships-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPortfolioMemberships

- **Signature**: `getPortfolioMemberships(request?: PortfolioMemberships.GetPortfolioMembershipsRequest, options?: RequestOptions): ApiPromise<PortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsError>`
- **Wire**: `GET /portfolio_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfolioMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `PortfolioMemberships.GetPortfolioMembershipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMemberships.GetPortfolioMembershipsRequest` (7):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolio` | `query` | — | `string` | no | — |
| `workspace` | `query` | — | `string` | no | — |
| `user` | `query` | — | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfolioMembershipsResponse` | `portfolioMembershipsResponseSchema` | `src/models/portfolio-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPortfolioMembershipsForPortfolio

- **Signature**: `getPortfolioMembershipsForPortfolio(request: PortfolioMemberships.GetPortfolioMembershipsForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosPortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsForPortfolioError>`
- **Wire**: `GET /portfolios/{portfolio_gid}/portfolio_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfoliosPortfolioMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `PortfolioMemberships.GetPortfolioMembershipsForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMemberships.GetPortfolioMembershipsForPortfolioRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `user` | `query` | — | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosPortfolioMembershipsResponse` | `portfoliosPortfolioMembershipsResponseSchema` | `src/models/portfolios-portfolio-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

