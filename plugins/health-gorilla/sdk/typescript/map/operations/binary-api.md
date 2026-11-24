<!-- Generated file — do not edit; regenerated with the SDK. -->

# BinaryApi — operations

Accessor: `client.binaryApi` · Source: `src/resources/binary-api.ts` · 1 operation · Request types: namespace `BinaryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### readBinary

- **Signature**: `readBinary(request: BinaryApi.ReadBinaryRequest, options?: RequestOptions): ApiPromise<Binary, ApiError>`
- **Wire**: `GET /Binary/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Binary`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BinaryApi.ReadBinaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Binary` | `binarySchema` | `src/models/binary.ts` |

