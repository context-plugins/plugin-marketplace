<!-- Generated file — do not edit; regenerated with the SDK. -->

# SandboxSimulations — operations

Accessor: `client.sandboxSimulations` · Source: `src/resources/sandbox-simulations.ts` · 1 operation · Request and error types: namespace `SandboxSimulations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### simulateBankTransferProcessing

- **Signature**: `simulateBankTransferProcessing(request: SandboxSimulations.SimulateBankTransferProcessingRequest, options?: RequestOptions): ApiPromise<undefined, SandboxSimulations.SimulateBankTransferProcessingError>`
- **Wire**: `POST /sandbox-simulations`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `SandboxSimulations.SimulateBankTransferProcessingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SandboxSimulations.SimulateBankTransferProcessingRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

