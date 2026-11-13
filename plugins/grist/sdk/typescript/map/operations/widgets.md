<!-- Generated file — do not edit; regenerated with the SDK. -->

# Widgets — operations

Accessor: `client.widgets` · Source: `src/resources/widgets.ts` · 1 operation · Request types: namespace `Widgets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listWidgets

- **Signature**: `listWidgets(options?: RequestOptions): ApiPromise<WidgetsResponse[], ApiError>`
- **Wire**: `GET /widgets`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WidgetsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `WidgetsResponse` | `widgetsResponseSchema` | `src/models/widgets-response.ts` |

