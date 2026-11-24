<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pledges — operations

Accessor: `client.pledges` · Source: `src/resources/pledges.ts` · 2 operations · Request and error types: namespace `Pledges`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### pledgesIndex

- **Signature**: `pledgesIndex(options?: RequestOptions): ApiPromise<V1PledgesResponse, ApiError>`
- **Wire**: `GET /v1/pledges`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PledgesResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PledgesResponse` | `v1PledgesResponseSchema` | `src/models/v1-pledges-response.ts` |

### pledgesShow

- **Signature**: `pledgesShow(request: Pledges.PledgesShowRequest, options?: RequestOptions): ApiPromise<PledgeResource, Pledges.PledgesShowError>`
- **Wire**: `GET /v1/pledges/{pledge}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PledgeResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Pledges.PledgesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pledges.PledgesShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pledge` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PledgeResource` | `pledgeResourceSchema` | `src/models/pledge-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

