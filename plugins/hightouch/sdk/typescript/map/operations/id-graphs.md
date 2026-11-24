<!-- Generated file — do not edit; regenerated with the SDK. -->

# IdGraphs — operations

Accessor: `client.idGraphs` · Source: `src/resources/id-graphs.ts` · 1 operation · Request and error types: namespace `IdGraphs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### triggerRunIdGraph

- **Signature**: `triggerRunIdGraph(request: IdGraphs.TriggerRunIdGraphRequest, options?: RequestOptions): ApiPromise<TriggerRunIdrOutput, IdGraphs.TriggerRunIdGraphError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /id_graphs/{graphId}/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerRunIdrOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `IdGraphs.TriggerRunIdGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IdGraphs.TriggerRunIdGraphRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `graphId` | `path` | `string` | yes |
| `body` | `body` | `TriggerRunIdrInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerRunIdrInput` | `triggerRunIdrInputSchema` | `src/models/trigger-run-idr-input.ts` |
| `TriggerRunIdrOutput` | `triggerRunIdrOutputSchema` | `src/models/trigger-run-idr-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

