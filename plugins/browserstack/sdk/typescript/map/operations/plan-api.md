<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlanApi — operations

Accessor: `client.planApi` · Source: `src/resources/plan-api.ts` · 1 operation · Request types: namespace `PlanApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPlan

- **Signature**: `getPlan(options?: RequestOptions): ApiPromise<Plan, ApiError>`
- **Wire**: `GET /automate/plan.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Plan`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Plan` | `planSchema` | `src/models/plan.ts` |

