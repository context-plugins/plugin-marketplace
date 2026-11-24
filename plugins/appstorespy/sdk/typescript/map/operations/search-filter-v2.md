<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchFilterV2 — operations

Accessor: `client.searchFilterV2` · Source: `src/resources/search-filter-v2.ts` · 1 operation · Request and error types: namespace `SearchFilterV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFilterSearchIosAppsQueryPost2

- **Signature**: `getFilterSearchIosAppsQueryPost2(request?: SearchFilterV2.GetFilterSearchIosAppsQueryPost2Request, options?: RequestOptions): ApiPromise<IosAppListResponse, SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error>`
- **Wire**: `POST /ios/apps/query`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IosAppListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsQuery401Error1"` [401] `IosAppsQuery401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchFilterV2.GetFilterSearchIosAppsQueryPost2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IosAppSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosAppSearchBody` | `iosAppSearchBodySchema` | `src/models/ios-app-search-body.ts` |
| `IosAppListResponse` | `iosAppListResponseSchema` | `src/models/ios-app-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAppsQuery401Error1` | `iosAppsQuery401Error1Schema` | `src/models/ios-apps-query401-error1.ts` |

