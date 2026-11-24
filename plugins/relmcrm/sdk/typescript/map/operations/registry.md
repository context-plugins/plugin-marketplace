<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registry — operations

Accessor: `client.registry` · Source: `src/resources/registry.ts` · 4 operations · Request types: namespace `Registry`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEnumValue

- **Signature**: `createEnumValue(request: Registry.CreateEnumValueRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /enums`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Registry.CreateEnumValueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EnumsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnumsRequest` | `enumsRequestSchema` | `src/models/enums-request.ts` |

### createField

- **Signature**: `createField(request: Registry.CreateFieldRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /fields`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Registry.CreateFieldRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FieldsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FieldsRequest` | `fieldsRequestSchema` | `src/models/fields-request.ts` |

### createType

- **Signature**: `createType(request: Registry.CreateTypeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /types`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Registry.CreateTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TypesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypesRequest` | `typesRequestSchema` | `src/models/types-request.ts` |

### listEnums

- **Signature**: `listEnums(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /enums`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

