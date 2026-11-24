<!-- Generated file — do not edit; regenerated with the SDK. -->

# WidgetsBeta — operations

Accessor: `client.widgetsBeta` · Source: `src/resources/widgets-beta.ts` · 2 operations · Request and error types: namespace `WidgetsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWidget

- **Signature**: `getWidget(request: WidgetsBeta.GetWidgetRequest, options?: RequestOptions): ApiPromise<Widget, WidgetsBeta.GetWidgetError>`
- **Wire**: `GET /analytics/v1/widgets/{widgetId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Widget`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `WidgetsBeta.GetWidgetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"problemDetails3"` [404] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WidgetsBeta.GetWidgetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `widgetId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Widget` | `widgetSchema` | `src/models/widget.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listWidgets

- **Signature**: `listWidgets(request?: WidgetsBeta.ListWidgetsRequest, options?: RequestOptions): ApiPromise<WidgetList, WidgetsBeta.ListWidgetsError>`
- **Wire**: `GET /analytics/v1/widgets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WidgetList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `WidgetsBeta.ListWidgetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"problemDetails3"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WidgetsBeta.ListWidgetsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WidgetList` | `widgetListSchema` | `src/models/widget-list.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

