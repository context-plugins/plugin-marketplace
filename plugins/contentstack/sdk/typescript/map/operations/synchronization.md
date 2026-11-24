<!-- Generated file — do not edit; regenerated with the SDK. -->

# Synchronization — operations

Accessor: `client.synchronization` · Source: `src/resources/synchronization.ts` · 1 operation · Request and error types: namespace `Synchronization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### syncContent

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `syncContent(request: Synchronization.SyncContentRequest, options?: RequestOptions): ApiPromise<SyncResponse, Synchronization.SyncContentError>`
- **Wire**: `GET /stacks/sync`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Synchronization.SyncContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Synchronization.SyncContentRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `init` | `query` | — | `boolean` | no |
| `syncToken` | `query` | `sync_token` | `string` | no |
| `paginationToken` | `query` | `pagination_token` | `string` | no |
| `type` | `query` | — | `Type1ContentstackContentDeliverySynchronizationApi` | no |
| `contentTypeUid` | `query` | `content_type_uid` | `string` | no |
| `locale` | `query` | — | `string` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type1ContentstackContentDeliverySynchronizationApi` | `type1ContentstackContentDeliverySynchronizationApiSchema` | `src/models/type1-contentstack-content-delivery-synchronization-api.ts` |
| `SyncResponse` | `syncResponseSchema` | `src/models/sync-response.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

