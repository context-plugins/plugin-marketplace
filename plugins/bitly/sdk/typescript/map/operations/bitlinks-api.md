<!-- Generated file — do not edit; regenerated with the SDK. -->

# BitlinksApi — operations

Accessor: `client.bitlinksApi` · Source: `src/resources/bitlinks-api.ts` · 21 operations · Request and error types: namespace `BitlinksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBitlink

- **Signature**: `createBitlink(request: BitlinksApi.CreateBitlinkRequest, options?: RequestOptions): ApiPromise<ShortenBitlinkBody, BitlinksApi.CreateBitlinkError>`
- **Wire**: `POST /shorten`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ShortenBitlinkBody`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.CreateBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [417] `Error` · `"error4"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.CreateBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Shorten` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Shorten` | `shortenSchema` | `src/models/shorten.ts` |
| `ShortenBitlinkBody` | `shortenBitlinkBodySchema` | `src/models/shorten-bitlink-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### createFullBitlink

- **Signature**: `createFullBitlink(request: BitlinksApi.CreateFullBitlinkRequest, options?: RequestOptions): ApiPromise<BitlinkBody, BitlinksApi.CreateFullBitlinkError>`
- **Wire**: `POST /bitlinks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BitlinkBody`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.CreateFullBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [417] `Error` · `"error6"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error7"` [500] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.CreateFullBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FullShorten` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FullShorten` | `fullShortenSchema` | `src/models/full-shorten.ts` |
| `BitlinkBody` | `bitlinkBodySchema` | `src/models/bitlink-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### deleteBitlink

- **Signature**: `deleteBitlink(request: BitlinksApi.DeleteBitlinkRequest, options?: RequestOptions): ApiPromise<LinkDeletionResponse, BitlinksApi.DeleteBitlinkError>`
- **Wire**: `DELETE /bitlinks/{bitlink}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkDeletionResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.DeleteBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.DeleteBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bitlink` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkDeletionResponse` | `linkDeletionResponseSchema` | `src/models/link-deletion-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### expandBitlink

- **Signature**: `expandBitlink(request: BitlinksApi.ExpandBitlinkRequest, options?: RequestOptions): ApiPromise<ExpandedBitlink, BitlinksApi.ExpandBitlinkError>`
- **Wire**: `POST /expand`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpandedBitlink`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.ExpandBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"error3"` [410] `Error` · `"error4"` [422] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.ExpandBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ExpandBitlink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandBitlink` | `expandBitlinkSchema` | `src/models/expand-bitlink.ts` |
| `ExpandedBitlink` | `expandedBitlinkSchema` | `src/models/expanded-bitlink.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBitlink

- **Signature**: `getBitlink(request: BitlinksApi.GetBitlinkRequest, options?: RequestOptions): ApiPromise<BitlinkBody, BitlinksApi.GetBitlinkError>`
- **Wire**: `GET /bitlinks/{bitlink}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BitlinkBody`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetBitlinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bitlink` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BitlinkBody` | `bitlinkBodySchema` | `src/models/bitlink-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getBitlinksByGroup

- **Signature**: `getBitlinksByGroup(request: BitlinksApi.GetBitlinksByGroupRequest, options?: RequestOptions): ApiPromise<Bitlinks, BitlinksApi.GetBitlinksByGroupError>`
- **Wire**: `GET /groups/{group_guid}/bitlinks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bitlinks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetBitlinksByGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetBitlinksByGroupRequest` (20):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `size` | `query` | — | `number` | no | `50` |
| `searchAfter` | `query` | `search_after` | `string` | no | — |
| `query` | `query` | — | `string` | no | — |
| `hostnamePathQuery` | `query` | `hostname_path_query` | `string` | no | — |
| `createdBefore` | `query` | `created_before` | `number` | no | — |
| `createdAfter` | `query` | `created_after` | `number` | no | — |
| `archived` | `query` | — | `Archived` | no | `Archived.Off` |
| `deeplinks` | `query` | — | `Deeplinks` | no | `Deeplinks.Both` |
| `domainDeeplinks` | `query` | `domain_deeplinks` | `DomainDeeplinks` | no | `DomainDeeplinks.Both` |
| `campaignGuid` | `query` | `campaign_guid` | `string` | no | — |
| `channelGuid` | `query` | `channel_guid` | `string` | no | — |
| `customBitlink` | `query` | `custom_bitlink` | `CustomBitlink` | no | `CustomBitlink.Both` |
| `hasQrCodes` | `query` | `has_qr_codes` | `HasQrCodes` | no | `HasQrCodes.Both` |
| `isExpired` | `query` | `is_expired` | `IsExpired` | no | `IsExpired.Both` |
| `hasExpiration` | `query` | `has_expiration` | `HasExpiration` | no | `HasExpiration.Both` |
| `hasDynamicRouting` | `query` | `has_dynamic_routing` | `HasDynamicRouting` | no | `HasDynamicRouting.Both` |
| `tags` | `query` | — | `string[]` | no | — |
| `launchpadIds` | `query` | `launchpad_ids` | `string[]` | no | — |
| `encodingLogin` | `query` | `encoding_login` | `string[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Archived` | `archivedSchema` | `src/models/archived.ts` |
| `Deeplinks` | `deeplinksSchema` | `src/models/deeplinks.ts` |
| `DomainDeeplinks` | `domainDeeplinksSchema` | `src/models/domain-deeplinks.ts` |
| `CustomBitlink` | `customBitlinkSchema` | `src/models/custom-bitlink.ts` |
| `HasQrCodes` | `hasQrCodesSchema` | `src/models/has-qr-codes.ts` |
| `IsExpired` | `isExpiredSchema` | `src/models/is-expired.ts` |
| `HasExpiration` | `hasExpirationSchema` | `src/models/has-expiration.ts` |
| `HasDynamicRouting` | `hasDynamicRoutingSchema` | `src/models/has-dynamic-routing.ts` |
| `Bitlinks` | `bitlinksSchema` | `src/models/bitlinks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getClicksForBitlink

- **Signature**: `getClicksForBitlink(request: BitlinksApi.GetClicksForBitlinkRequest, options?: RequestOptions): ApiPromise<Clicks, BitlinksApi.GetClicksForBitlinkError>`
- **Wire**: `GET /bitlinks/{bitlink}/clicks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Clicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetClicksForBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetClicksForBitlinkRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `Clicks` | `clicksSchema` | `src/models/clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getClicksSummaryForBitlink

- **Signature**: `getClicksSummaryForBitlink(request: BitlinksApi.GetClicksSummaryForBitlinkRequest, options?: RequestOptions): ApiPromise<ClicksSummary, BitlinksApi.GetClicksSummaryForBitlinkError>`
- **Wire**: `GET /bitlinks/{bitlink}/clicks/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClicksSummary`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetClicksSummaryForBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetClicksSummaryForBitlinkRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClicksSummary` | `clicksSummarySchema` | `src/models/clicks-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getEngagements

- **Signature**: `getEngagements(request: BitlinksApi.GetEngagementsRequest, options?: RequestOptions): ApiPromise<TotalEngagements, BitlinksApi.GetEngagementsError>`
- **Wire**: `GET /bitlinks/{bitlink}/engagements`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TotalEngagements`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetEngagementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetEngagementsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `TotalEngagements` | `totalEngagementsSchema` | `src/models/total-engagements.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getEngagementsSummary

- **Signature**: `getEngagementsSummary(request: BitlinksApi.GetEngagementsSummaryRequest, options?: RequestOptions): ApiPromise<TotalEngagementsSummary, BitlinksApi.GetEngagementsSummaryError>`
- **Wire**: `GET /bitlinks/{bitlink}/engagements/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TotalEngagementsSummary`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetEngagementsSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetEngagementsSummaryRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `TotalEngagementsSummary` | `totalEngagementsSummarySchema` | `src/models/total-engagements-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getMetricsForBitlinkByCities

- **Signature**: `getMetricsForBitlinkByCities(request: BitlinksApi.GetMetricsForBitlinkByCitiesRequest, options?: RequestOptions): ApiPromise<CityMetrics, BitlinksApi.GetMetricsForBitlinkByCitiesError>`
- **Wire**: `GET /bitlinks/{bitlink}/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CityMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByCitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByCitiesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `CityMetrics` | `cityMetricsSchema` | `src/models/city-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getMetricsForBitlinkByCountries

- **Signature**: `getMetricsForBitlinkByCountries(request: BitlinksApi.GetMetricsForBitlinkByCountriesRequest, options?: RequestOptions): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByCountriesError>`
- **Wire**: `GET /bitlinks/{bitlink}/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByCountriesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetrics` | `clickMetricsSchema` | `src/models/click-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getMetricsForBitlinkByDevices

- **Signature**: `getMetricsForBitlinkByDevices(request: BitlinksApi.GetMetricsForBitlinkByDevicesRequest, options?: RequestOptions): ApiPromise<DeviceMetrics, BitlinksApi.GetMetricsForBitlinkByDevicesError>`
- **Wire**: `GET /bitlinks/{bitlink}/devices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByDevicesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `DeviceMetrics` | `deviceMetricsSchema` | `src/models/device-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getMetricsForBitlinkByReferrerName

- **Signature**: `getMetricsForBitlinkByReferrerName(request: BitlinksApi.GetMetricsForBitlinkByReferrerNameRequest, options?: RequestOptions): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrerNameError>`
- **Wire**: `GET /bitlinks/{bitlink}/referrer_name`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByReferrerNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByReferrerNameRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetrics` | `clickMetricsSchema` | `src/models/click-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getMetricsForBitlinkByReferrers

- **Signature**: `getMetricsForBitlinkByReferrers(request: BitlinksApi.GetMetricsForBitlinkByReferrersRequest, options?: RequestOptions): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrersError>`
- **Wire**: `GET /bitlinks/{bitlink}/referrers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByReferrersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByReferrersRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetrics` | `clickMetricsSchema` | `src/models/click-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getMetricsForBitlinkByReferrersByDomains

- **Signature**: `getMetricsForBitlinkByReferrersByDomains(request: BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsRequest, options?: RequestOptions): ApiPromise<ReferrersByDomains, BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError>`
- **Wire**: `GET /bitlinks/{bitlink}/referrers_by_domains`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReferrersByDomains`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ReferrersByDomains` | `referrersByDomainsSchema` | `src/models/referrers-by-domains.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getMetricsForBitlinkByReferringDomains

- **Signature**: `getMetricsForBitlinkByReferringDomains(request: BitlinksApi.GetMetricsForBitlinkByReferringDomainsRequest, options?: RequestOptions): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferringDomainsError>`
- **Wire**: `GET /bitlinks/{bitlink}/referring_domains`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetMetricsForBitlinkByReferringDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetMetricsForBitlinkByReferringDomainsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bitlink` | `path` | — | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetrics` | `clickMetricsSchema` | `src/models/click-metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getSortedBitlinks

- **Signature**: `getSortedBitlinks(request: BitlinksApi.GetSortedBitlinksRequest, options?: RequestOptions): ApiPromise<SortedLinks, BitlinksApi.GetSortedBitlinksError>`
- **Wire**: `GET /groups/{group_guid}/bitlinks/{sort}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SortedLinks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetSortedBitlinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetSortedBitlinksRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `sort` | `path` | — | `Sort` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |
| `size` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `SortedLinks` | `sortedLinksSchema` | `src/models/sorted-links.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getTopLinksAndQrCodesByEngagements

- **Signature**: `getTopLinksAndQrCodesByEngagements(request: BitlinksApi.GetTopLinksAndQrCodesByEngagementsRequest, options?: RequestOptions): ApiPromise<TopLinksAndQrCodes, BitlinksApi.GetTopLinksAndQrCodesByEngagementsError>`
- **Wire**: `GET /groups/{group_guid}/engagements/sorted/top`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopLinksAndQrCodes`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.GetTopLinksAndQrCodesByEngagementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.GetTopLinksAndQrCodesByEngagementsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |
| `size` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `TopLinksAndQrCodes` | `topLinksAndQrCodesSchema` | `src/models/top-links-and-qr-codes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateBitlink

- **Signature**: `updateBitlink(request: BitlinksApi.UpdateBitlinkRequest, options?: RequestOptions): ApiPromise<BitlinkBody, BitlinksApi.UpdateBitlinkError>`
- **Wire**: `PATCH /bitlinks/{bitlink}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BitlinkBody`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.UpdateBitlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [410] `Error` · `"error7"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error8"` [500] `Error` · `"error9"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.UpdateBitlinkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bitlink` | `path` | `string` | yes |
| `body` | `body` | `BitlinkUpdateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BitlinkUpdateBody` | `bitlinkUpdateBodySchema` | `src/models/bitlink-update-body.ts` |
| `BitlinkBody` | `bitlinkBodySchema` | `src/models/bitlink-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateBitlinksByGroup

- **Signature**: `updateBitlinksByGroup(request: BitlinksApi.UpdateBitlinksByGroupRequest, options?: RequestOptions): ApiPromise<BulkUpdate, BitlinksApi.UpdateBitlinksByGroupError>`
- **Wire**: `PATCH /groups/{group_guid}/bitlinks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkUpdate`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BitlinksApi.UpdateBitlinksByGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BitlinksApi.UpdateBitlinksByGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `body` | `body` | — | `BulkUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateRequest` | `bulkUpdateRequestSchema` | `src/models/bulk-update-request.ts` |
| `BulkUpdate` | `bulkUpdateSchema` | `src/models/bulk-update.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

