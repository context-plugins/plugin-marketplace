<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.activities` · Source: `src/resources/activities.ts` · 1 operation · Request and error types: namespace `Activities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createActivities

- **Signature**: `createActivities(request: Activities.CreateActivitiesRequest, options?: RequestOptions): ApiPromise<undefined, Activities.CreateActivitiesError>`
- **Wire**: `POST /activities/create`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Activities.CreateActivitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Activities.CreateActivitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ActivitiesCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivitiesCreateRequest` | `activitiesCreateRequestSchema` | `src/models/activities-create-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

