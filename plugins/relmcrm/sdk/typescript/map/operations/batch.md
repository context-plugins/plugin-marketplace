<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.batch` · Source: `src/resources/batch.ts` · 1 operation · Request types: namespace `Batch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batch

- **Signature**: `batch(request: Batch.BatchRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /batch`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Batch.BatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |

