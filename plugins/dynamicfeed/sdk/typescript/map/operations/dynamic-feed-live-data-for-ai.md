<!-- Generated file — do not edit; regenerated with the SDK. -->

# DynamicFeedLiveDataForAi — operations

Accessor: `client.dynamicFeedLiveDataForAi` · Source: `src/resources/dynamic-feed-live-data-for-ai.ts` · 1 operation · Request types: namespace `DynamicFeedLiveDataForAi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### homeGet

- **Signature**: `homeGet(options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

