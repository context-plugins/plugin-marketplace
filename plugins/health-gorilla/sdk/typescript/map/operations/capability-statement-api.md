<!-- Generated file — do not edit; regenerated with the SDK. -->

# CapabilityStatementApi — operations

Accessor: `client.capabilityStatementApi` · Source: `src/resources/capability-statement-api.ts` · 1 operation · Request types: namespace `CapabilityStatementApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCapabilityStatement

- **Signature**: `getCapabilityStatement(options?: RequestOptions): ApiPromise<CapabilityStatement, ApiError>`
- **Wire**: `GET /metadata`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CapabilityStatement`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CapabilityStatement` | `capabilityStatementSchema` | `src/models/capability-statement.ts` |

