<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomBitlinks — operations

Accessor: `client.customBitlinks` · Source: `src/resources/custom-bitlinks.ts` · 5 operations · Request and error types: namespace `CustomBitlinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCustomBitlink

- **Signature**: `addCustomBitlink(request: CustomBitlinks.AddCustomBitlinkRequest, options?: RequestOptions): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.AddCustomBitlinkError>`
- **Wire**: `POST /custom_bitlinks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CustomBitlinks.AddCustomBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error7"` [500] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomBitlinks.AddCustomBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AddCustomBitlink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddCustomBitlink` | `addCustomBitlinkSchema` | `src/models/add-custom-bitlink.ts` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `customBitlinkBitlyCustomBitlinksApiSchema` | `src/models/custom-bitlink-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getClicksForCustomBitlink

- **Signature**: `getClicksForCustomBitlink(request: CustomBitlinks.GetClicksForCustomBitlinkRequest, options?: RequestOptions): ApiPromise<Clicks, CustomBitlinks.GetClicksForCustomBitlinkError>`
- **Wire**: `GET /custom_bitlinks/{custom_bitlink}/clicks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Clicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CustomBitlinks.GetClicksForCustomBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomBitlinks.GetClicksForCustomBitlinkRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customBitlink` | `path` | `custom_bitlink` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `Clicks` | `clicksSchema` | `src/models/clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getCustomBitlink

- **Signature**: `getCustomBitlink(request: CustomBitlinks.GetCustomBitlinkRequest, options?: RequestOptions): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkError>`
- **Wire**: `GET /custom_bitlinks/{custom_bitlink}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CustomBitlinks.GetCustomBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomBitlinks.GetCustomBitlinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customBitlink` | `path` | `custom_bitlink` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomBitlinkBitlyCustomBitlinksApi` | `customBitlinkBitlyCustomBitlinksApiSchema` | `src/models/custom-bitlink-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getCustomBitlinkMetricsByDestination

- **Signature**: `getCustomBitlinkMetricsByDestination(request: CustomBitlinks.GetCustomBitlinkMetricsByDestinationRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkMetricsByDestinationError>`
- **Wire**: `GET /custom_bitlinks/{custom_bitlink}/clicks_by_destination`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CustomBitlinks.GetCustomBitlinkMetricsByDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomBitlinks.GetCustomBitlinkMetricsByDestinationRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customBitlink` | `path` | `custom_bitlink` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateCustomBitlink

- **Signature**: `updateCustomBitlink(request: CustomBitlinks.UpdateCustomBitlinkRequest, options?: RequestOptions): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.UpdateCustomBitlinkError>`
- **Wire**: `PATCH /custom_bitlinks/{custom_bitlink}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CustomBitlinks.UpdateCustomBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomBitlinks.UpdateCustomBitlinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customBitlink` | `path` | `custom_bitlink` | `string` | yes |
| `body` | `body` | — | `UpdateCustomBitlink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomBitlink` | `updateCustomBitlinkSchema` | `src/models/update-custom-bitlink.ts` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `customBitlinkBitlyCustomBitlinksApiSchema` | `src/models/custom-bitlink-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

