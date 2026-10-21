<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstanceManagement — operations

Accessor: `client.instanceManagement` · Source: `src/resources/instance-management.ts` · 1 operation · Request and error types: namespace `InstanceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInstance

- **Signature**: `deleteInstance(request: InstanceManagement.DeleteInstanceRequest, options?: RequestOptions): ApiPromise<JourneyStateDeleteResponse, InstanceManagement.DeleteInstanceError>`
- **Wire**: `POST /journey/state/delete`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStateDeleteResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `InstanceManagement.DeleteInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InstanceManagement.DeleteInstanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStateDeleteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStateDeleteRequest` | `journeyStateDeleteRequestSchema` | `src/models/journey-state-delete-request.ts` |
| `JourneyStateDeleteResponse` | `journeyStateDeleteResponseSchema` | `src/models/journey-state-delete-response.ts` |

