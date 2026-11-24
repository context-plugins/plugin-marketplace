<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qrCodes` · Source: `src/resources/qr-codes.ts` · 16 operations · Request and error types: namespace `QrCodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createQrCodePublic

- **Signature**: `createQrCodePublic(request: QrCodes.CreateQrCodePublicRequest, options?: RequestOptions): ApiPromise<QrCodeMinimal, QrCodes.CreateQrCodePublicError>`
- **Wire**: `POST /qr-codes`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCodeMinimal`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.CreateQrCodePublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [410] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.CreateQrCodePublicRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicCreateQrCodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicCreateQrCodeRequest` | `publicCreateQrCodeRequestSchema` | `src/models/public-create-qr-code-request.ts` |
| `QrCodeMinimal` | `qrCodeMinimalSchema` | `src/models/qr-code-minimal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### createStaticQrCodePublic

- **Signature**: `createStaticQrCodePublic(request: QrCodes.CreateStaticQrCodePublicRequest, options?: RequestOptions): ApiPromise<PublicStaticQrCodeResponse, QrCodes.CreateStaticQrCodePublicError>`
- **Wire**: `POST /qr-codes/static`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicStaticQrCodeResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.CreateStaticQrCodePublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [406] `Error` · `"error4"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.CreateStaticQrCodePublicRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `query` | — | `Format` | no | `Format.Svg` |
| `accept` | `header` | `Accept` | `Accept` | no | — |
| `body` | `body` | — | `PublicCreateStaticQrCodeRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `PublicCreateStaticQrCodeRequest` | `publicCreateStaticQrCodeRequestSchema` | `src/models/public-create-static-qr-code-request.ts` |
| `PublicStaticQrCodeResponse` | `publicStaticQrCodeResponseSchema` | `src/models/public-static-qr-code-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### deleteQrCode

- **Signature**: `deleteQrCode(request: QrCodes.DeleteQrCodeRequest, options?: RequestOptions): ApiPromise<PublicDeleteQrCodeResponse, QrCodes.DeleteQrCodeError>`
- **Wire**: `DELETE /qr-codes/{qrcode_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicDeleteQrCodeResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.DeleteQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.DeleteQrCodeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicDeleteQrCodeResponse` | `publicDeleteQrCodeResponseSchema` | `src/models/public-delete-qr-code-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getQrCodeByIdPublic

- **Signature**: `getQrCodeByIdPublic(request: QrCodes.GetQrCodeByIdPublicRequest, options?: RequestOptions): ApiPromise<QrCodeDetails, QrCodes.GetQrCodeByIdPublicError>`
- **Wire**: `GET /qr-codes/{qrcode_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QrCodeDetails`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetQrCodeByIdPublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetQrCodeByIdPublicRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrCodeDetails` | `qrCodeDetailsSchema` | `src/models/qr-code-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getQrCodeImagePublic

- **Signature**: `getQrCodeImagePublic(request: QrCodes.GetQrCodeImagePublicRequest, options?: RequestOptions): ApiPromise<PublicQrCodeImageResponse, QrCodes.GetQrCodeImagePublicError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/image`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicQrCodeImageResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetQrCodeImagePublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetQrCodeImagePublicRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `format` | `query` | — | `Format` | no | `Format.Svg` |
| `accept` | `header` | `Accept` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PublicQrCodeImageResponse` | `publicQrCodeImageResponseSchema` | `src/models/public-qr-code-image-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsForQrCode

- **Signature**: `getScanMetricsForQrCode(request: QrCodes.GetScanMetricsForQrCodeRequest, options?: RequestOptions): ApiPromise<BitlinkScans, QrCodes.GetScanMetricsForQrCodeError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BitlinkScans`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsForQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsForQrCodeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `BitlinkScans` | `bitlinkScansSchema` | `src/models/bitlink-scans.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsForQrCodeByBrowser

- **Signature**: `getScanMetricsForQrCodeByBrowser(request: QrCodes.GetScanMetricsForQrCodeByBrowserRequest, options?: RequestOptions): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByBrowserError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans/browsers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScanMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsForQrCodeByBrowserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsForQrCodeByBrowserRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ScanMetrics` | `scanMetricsSchema` | `src/models/scan-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsForQrCodeByCities

- **Signature**: `getScanMetricsForQrCodeByCities(request: QrCodes.GetScanMetricsForQrCodeByCitiesRequest, options?: RequestOptions): ApiPromise<CityScanMetrics, QrCodes.GetScanMetricsForQrCodeByCitiesError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CityScanMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsForQrCodeByCitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsForQrCodeByCitiesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `CityScanMetrics` | `cityScanMetricsSchema` | `src/models/city-scan-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsForQrCodeByCountries

- **Signature**: `getScanMetricsForQrCodeByCountries(request: QrCodes.GetScanMetricsForQrCodeByCountriesRequest, options?: RequestOptions): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByCountriesError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScanMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsForQrCodeByCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsForQrCodeByCountriesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ScanMetrics` | `scanMetricsSchema` | `src/models/scan-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsForQrCodeByDevicesOs

- **Signature**: `getScanMetricsForQrCodeByDevicesOs(request: QrCodes.GetScanMetricsForQrCodeByDevicesOsRequest, options?: RequestOptions): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByDevicesOsError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans/device_os`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScanMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsForQrCodeByDevicesOsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsForQrCodeByDevicesOsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ScanMetrics` | `scanMetricsSchema` | `src/models/scan-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getScanMetricsSummaryForQrCode

- **Signature**: `getScanMetricsSummaryForQrCode(request: QrCodes.GetScanMetricsSummaryForQrCodeRequest, options?: RequestOptions): ApiPromise<BitlinkScansSummary, QrCodes.GetScanMetricsSummaryForQrCodeError>`
- **Wire**: `GET /qr-codes/{qrcode_id}/scans/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BitlinkScansSummary`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.GetScanMetricsSummaryForQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetScanMetricsSummaryForQrCodeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `BitlinkScansSummary` | `bitlinkScansSummarySchema` | `src/models/bitlink-scans-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listQrMinimal

- **Signature**: `listQrMinimal(request: QrCodes.ListQrMinimalRequest, options?: RequestOptions): ApiPromise<QrCodesMinimal, QrCodes.ListQrMinimalError>`
- **Wire**: `GET /groups/{group_guid}/qr-codes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QrCodesMinimal`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.ListQrMinimalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.ListQrMinimalRequest` (16):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `hasRenderCustomizations` | `query` | `has_render_customizations` | `HasRenderCustomizations` | no | `HasRenderCustomizations.Both` |
| `size` | `query` | — | `number` | no | `50` |
| `searchAfter` | `query` | `search_after` | `string` | no | — |
| `query` | `query` | — | `string` | no | — |
| `hostnamePathQuery` | `query` | `hostname_path_query` | `string` | no | — |
| `createdBefore` | `query` | `created_before` | `number` | no | — |
| `createdAfter` | `query` | `created_after` | `number` | no | — |
| `archived` | `query` | — | `Archived` | no | `Archived.Off` |
| `creatingLogin` | `query` | `creating_login` | `string[]` | no | — |
| `qrcType` | `query` | `qrc_type` | `QrcType[]` | no | — |
| `isGs1` | `query` | `is_gs1` | `IsGs1` | no | `IsGs1.Both` |
| `isExpired` | `query` | `is_expired` | `IsExpired` | no | `IsExpired.Both` |
| `hasExpiration` | `query` | `has_expiration` | `HasExpiration` | no | `HasExpiration.Both` |
| `hasDynamicRouting` | `query` | `has_dynamic_routing` | `HasDynamicRouting` | no | `HasDynamicRouting.Both` |
| `tags` | `query` | — | `string[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `HasRenderCustomizations` | `hasRenderCustomizationsSchema` | `src/models/has-render-customizations.ts` |
| `Archived` | `archivedSchema` | `src/models/archived.ts` |
| `QrcType` | `qrcTypeSchema` | `src/models/qrc-type.ts` |
| `IsGs1` | `isGs1Schema` | `src/models/is-gs1.ts` |
| `IsExpired` | `isExpiredSchema` | `src/models/is-expired.ts` |
| `HasExpiration` | `hasExpirationSchema` | `src/models/has-expiration.ts` |
| `HasDynamicRouting` | `hasDynamicRoutingSchema` | `src/models/has-dynamic-routing.ts` |
| `QrCodesMinimal` | `qrCodesMinimalSchema` | `src/models/qr-codes-minimal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### redirectQrCodeDestination

- **Signature**: `redirectQrCodeDestination(request: QrCodes.RedirectQrCodeDestinationRequest, options?: RequestOptions): ApiPromise<QrCodeMinimal, QrCodes.RedirectQrCodeDestinationError>`
- **Wire**: `PATCH /qr-codes/{qrcode_id}/redirect`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCodeMinimal`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.RedirectQrCodeDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"error6"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.RedirectQrCodeDestinationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes |
| `body` | `body` | — | `RedirectQrCodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RedirectQrCodeRequest` | `redirectQrCodeRequestSchema` | `src/models/redirect-qr-code-request.ts` |
| `QrCodeMinimal` | `qrCodeMinimalSchema` | `src/models/qr-code-minimal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateQrCodePublic

- **Signature**: `updateQrCodePublic(request: QrCodes.UpdateQrCodePublicRequest, options?: RequestOptions): ApiPromise<QrCodeMinimal, QrCodes.UpdateQrCodePublicError>`
- **Wire**: `PATCH /qr-codes/{qrcode_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCodeMinimal`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.UpdateQrCodePublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.UpdateQrCodePublicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes |
| `body` | `body` | — | `PublicUpdateQrCodeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicUpdateQrCodeRequest` | `publicUpdateQrCodeRequestSchema` | `src/models/public-update-qr-code-request.ts` |
| `QrCodeMinimal` | `qrCodeMinimalSchema` | `src/models/qr-code-minimal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateQrCodesByGroup

- **Signature**: `updateQrCodesByGroup(request: QrCodes.UpdateQrCodesByGroupRequest, options?: RequestOptions): ApiPromise<QrcBulkUpdate, QrCodes.UpdateQrCodesByGroupError>`
- **Wire**: `PATCH /groups/{group_guid}/qr-codes`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrcBulkUpdate`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.UpdateQrCodesByGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.UpdateQrCodesByGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `body` | `body` | — | `QrcBulkUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcBulkUpdateRequest` | `qrcBulkUpdateRequestSchema` | `src/models/qrc-bulk-update-request.ts` |
| `QrcBulkUpdate` | `qrcBulkUpdateSchema` | `src/models/qrc-bulk-update.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### upgradeQrCodeToBitlink

- **Signature**: `upgradeQrCodeToBitlink(request: QrCodes.UpgradeQrCodeToBitlinkRequest, options?: RequestOptions): ApiPromise<BitlinkBody, QrCodes.UpgradeQrCodeToBitlinkError>`
- **Wire**: `PUT /qr-codes/{qrcode_id}/to-bitlink`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BitlinkBody`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `QrCodes.UpgradeQrCodeToBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.UpgradeQrCodeToBitlinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `qrcodeId` | `path` | `qrcode_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BitlinkBody` | `bitlinkBodySchema` | `src/models/bitlink-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

