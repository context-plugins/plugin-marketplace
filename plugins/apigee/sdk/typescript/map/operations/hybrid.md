<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hybrid — operations

Accessor: `client.hybrid` · Source: `src/resources/hybrid.ts` · 1 operation · Request and error types: namespace `Hybrid`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apigee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apigeeHybridIssuersList

- **Signature**: `apigeeHybridIssuersList(options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListHybridIssuersResponse, Hybrid.ApigeeHybridIssuersListError>`
- **Wire**: `GET /v1/hybrid/issuers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListHybridIssuersResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Hybrid.ApigeeHybridIssuersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListHybridIssuersResponse` | `googleCloudApigeeV1ListHybridIssuersResponseSchema` | `src/models/google-cloud-apigee-v1-list-hybrid-issuers-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

