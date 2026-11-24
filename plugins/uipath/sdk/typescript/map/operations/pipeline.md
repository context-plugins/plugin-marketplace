<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipeline — operations

Accessor: `client.pipeline` · Source: `src/resources/pipeline.ts` · 1 operation · Request and error types: namespace `Pipeline`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAutomationPipeline

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAutomationPipeline(options?: RequestOptions): ApiPromise<PipelineData, Pipeline.GetAutomationPipelineError>`
- **Wire**: `GET /automationpipeline`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineData`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Pipeline.GetAutomationPipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineData` | `pipelineDataSchema` | `src/models/pipeline-data.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

