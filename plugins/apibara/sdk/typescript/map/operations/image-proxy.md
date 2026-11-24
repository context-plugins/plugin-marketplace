<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageProxy — operations

Accessor: `client.imageProxy` · Source: `src/resources/image-proxy.ts` · 1 operation · Request and error types: namespace `ImageProxy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### proxyAuctionImage

- **Signature**: `proxyAuctionImage(request: ImageProxy.ProxyAuctionImageRequest, options?: RequestOptions): ApiPromise<BinaryContent, ImageProxy.ProxyAuctionImageError>`
- **Wire**: `GET /image-proxy`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `ImageProxy.ProxyAuctionImageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ImageProxy.ProxyAuctionImageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `url` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

