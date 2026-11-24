<!-- Generated file — do not edit; regenerated with the SDK. -->

# Models — operations

Accessor: `client.models` · Source: `src/resources/models.ts` · 1 operation · Request and error types: namespace `Models`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### modelsModelsGet

- **Signature**: `modelsModelsGet(request?: Models.ModelsModelsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Models.ModelsModelsGetError>`
- **Wire**: `GET /models`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Models.ModelsModelsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Models.ModelsModelsGetRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `Q` | no | — |
| `provider` | `query` | — | `Provider` | no | — |
| `maxInputPrice` | `query` | `max_input_price` | `MaxInputPrice` | no | — |
| `minContext` | `query` | `min_context` | `MinContext` | no | — |
| `needsVision` | `query` | `needs_vision` | `NeedsVision` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Q` | `qSchema` | `src/models/unions/q.ts` |
| `Provider` | `providerSchema` | `src/models/unions/provider.ts` |
| `MaxInputPrice` | `maxInputPriceSchema` | `src/models/unions/max-input-price.ts` |
| `MinContext` | `minContextSchema` | `src/models/unions/min-context.ts` |
| `NeedsVision` | `needsVisionSchema` | `src/models/unions/needs-vision.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

