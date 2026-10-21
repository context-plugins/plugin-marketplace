<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionLabels — operations

Accessor: `client.sessionLabels` · Source: `src/resources/session-labels.ts` · 3 operations · Request and error types: namespace `SessionLabels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sessionLabelCreate

- **Signature**: `sessionLabelCreate(request: SessionLabels.SessionLabelCreateRequest, options?: RequestOptions): ApiPromise<SessionLabel, SessionLabels.SessionLabelCreateError>`
- **Wire**: `POST /api/v1/session_labels/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionLabel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionLabels.SessionLabelCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionLabels.SessionLabelCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionLabelCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionLabelCreate` | `sessionLabelCreateSchema` | `src/models/session-label-create.ts` |
| `SessionLabel` | `sessionLabelSchema` | `src/models/session-label.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### sessionLabelGetById

- **Signature**: `sessionLabelGetById(request: SessionLabels.SessionLabelGetByIdRequest, options?: RequestOptions): ApiPromise<SessionLabel, SessionLabels.SessionLabelGetByIdError>`
- **Wire**: `GET /api/v1/session_labels/{session_label_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionLabel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionLabels.SessionLabelGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionLabels.SessionLabelGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionLabelId` | `path` | `session_label_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionLabel` | `sessionLabelSchema` | `src/models/session-label.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### sessionLabelsList

- **Signature**: `sessionLabelsList(request: SessionLabels.SessionLabelsListRequest, options?: RequestOptions): ApiPromise<ListResponseSessionLabel, SessionLabels.SessionLabelsListError>`
- **Wire**: `GET /api/v1/session_labels/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseSessionLabel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionLabels.SessionLabelsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SessionLabels400Error1"` [400] `ApiV1SessionLabels400Error1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionLabels.SessionLabelsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `SessionLabelProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy36` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields18` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `SessionLabelProperties` | `sessionLabelPropertiesSchema` | `src/models/session-label-properties.ts` |
| `OrderBy36` | `orderBy36Schema` | `src/models/unions/order-by36.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields18` | `fields18Schema` | `src/models/unions/fields18.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseSessionLabel` | `listResponseSessionLabelSchema` | `src/models/list-response-session-label.ts` |
| `ApiV1SessionLabels400Error1` | `apiV1SessionLabels400Error1Schema` | `src/models/api-v1-session-labels400-error1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

