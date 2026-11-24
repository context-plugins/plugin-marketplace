<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmployeeApi — operations

Accessor: `client.employeeApi` · Source: `src/resources/employee-api.ts` · 6 operations · Request types: namespace `EmployeeApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### employeeCount

- **Signature**: `employeeCount(options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /Employee/count`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### employeeCreate

- **Signature**: `employeeCreate(request: EmployeeApi.EmployeeCreateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /Employee`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmployeeApi.EmployeeCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EmployeeModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmployeeModel` | `employeeModelSchema` | `src/models/employee-model.ts` |

### employeeEdit

- **Signature**: `employeeEdit(request: EmployeeApi.EmployeeEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /Employee`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmployeeApi.EmployeeEditRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EmployeeModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmployeeModel` | `employeeModelSchema` | `src/models/employee-model.ts` |

### employeeGetById

- **Signature**: `employeeGetById(request: EmployeeApi.EmployeeGetByIdRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /Employee/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmployeeApi.EmployeeGetByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

### employeeGetList

- **Signature**: `employeeGetList(options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /Employee`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### employeeRemove

- **Signature**: `employeeRemove(request: EmployeeApi.EmployeeRemoveRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /Employee/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmployeeApi.EmployeeRemoveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

