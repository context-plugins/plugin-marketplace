<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceQuotas — operations

Accessor: `client.serviceQuotas` · Source: `src/resources/service-quotas.ts` · 1 operation · Request and error types: namespace `ServiceQuotas`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listServiceQuotas

- **Signature**: `listServiceQuotas(request?: ServiceQuotas.ListServiceQuotasRequest, options?: RequestOptions): ApiPromise<ServiceQuotaList, ServiceQuotas.ListServiceQuotasError>`
- **Wire**: `GET /core/v1/service-quotas`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceQuotaList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ServiceQuotas.ListServiceQuotasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceQuotas.ListServiceQuotasRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cloudProvider` | `query` | `CloudProvider1` | no | — |
| `minUtilizationPercent` | `query` | `number` | no | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudProvider1` | `cloudProvider1Schema` | `src/models/cloud-provider1.ts` |
| `ServiceQuotaList` | `serviceQuotaListSchema` | `src/models/service-quota-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

