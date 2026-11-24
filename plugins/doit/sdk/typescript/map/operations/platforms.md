<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.platforms` · Source: `src/resources/platforms.ts` · 1 operation · Request and error types: namespace `Platforms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listPlatforms

- **Signature**: `listPlatforms(options?: RequestOptions): ApiPromise<SupportV1MetadataPlatformsResponse, Platforms.ListPlatformsError>`
- **Wire**: `GET /support/v1/metadata/platforms`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportV1MetadataPlatformsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Platforms.ListPlatformsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportV1MetadataPlatformsResponse` | `supportV1MetadataPlatformsResponseSchema` | `src/models/support-v1-metadata-platforms-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

