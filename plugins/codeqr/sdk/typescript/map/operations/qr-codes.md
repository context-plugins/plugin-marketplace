<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qrCodes` · Source: `src/resources/qr-codes.ts` · 8 operations · Request and error types: namespace `QrCodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkCreateQrCodes

- **Signature**: `bulkCreateQrCodes(request?: QrCodes.BulkCreateQrCodesRequest, options?: RequestOptions): ApiPromise<QrcodesBulkResponse1[], QrCodes.BulkCreateQrCodesError>`
- **Wire**: `POST /qrcodes/bulk`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrcodesBulkResponse1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.BulkCreateQrCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.BulkCreateQrCodesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QrcodesBulkRequest[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcodesBulkRequest` | `qrcodesBulkRequestSchema` | `src/models/qrcodes-bulk-request.ts` |
| `QrcodesBulkResponse1` | `qrcodesBulkResponse1Schema` | `src/models/unions/qrcodes-bulk-response1.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### bulkDeleteQrCodes

- **Signature**: `bulkDeleteQrCodes(request: QrCodes.BulkDeleteQrCodesRequest, options?: RequestOptions): ApiPromise<QrcodesBulkResponse, QrCodes.BulkDeleteQrCodesError>`
- **Wire**: `DELETE /qrcodes/bulk`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrcodesBulkResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.BulkDeleteQrCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.BulkDeleteQrCodesRequest` (1):

| Field | Channel | Type | Req | Style |
| --- | --- | --- | --- | --- |
| `qrcodeIds` | `query` | `string[]` | yes | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcodesBulkResponse` | `qrcodesBulkResponseSchema` | `src/models/qrcodes-bulk-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### createQrCode

- **Signature**: `createQrCode(request?: QrCodes.CreateQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.CreateQrCodeError>`
- **Wire**: `POST /qrcodes`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCode`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.CreateQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.CreateQrCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QrcodesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcodesRequest` | `qrcodesRequestSchema` | `src/models/qrcodes-request.ts` |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### deleteQrCode

- **Signature**: `deleteQrCode(request: QrCodes.DeleteQrCodeRequest, options?: RequestOptions): ApiPromise<QrcodesResponse, QrCodes.DeleteQrCodeError>`
- **Wire**: `DELETE /qrcodes/{qrcodeId}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrcodesResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.DeleteQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.DeleteQrCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `qrcodeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcodesResponse` | `qrcodesResponseSchema` | `src/models/qrcodes-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getQrCodeInfo

- **Signature**: `getQrCodeInfo(request: QrCodes.GetQrCodeInfoRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.GetQrCodeInfoError>`
- **Wire**: `GET /qrcodes/info`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QrCode`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.GetQrCodeInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetQrCodeInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectSlug` | `query` | `string` | yes |
| `domain` | `query` | `string` | yes |
| `key` | `query` | `string` | yes |
| `qrCodeId` | `query` | `string` | no |
| `externalId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getQrCodes

- **Signature**: `getQrCodes(request?: QrCodes.GetQrCodesRequest, options?: RequestOptions): ApiPromise<QrCode[], QrCodes.GetQrCodesError>`
- **Wire**: `GET /qrcodes`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QrCode[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.GetQrCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetQrCodesRequest` (39):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectSlug` | `query` | — | `string` | no | — |
| `domain` | `query` | — | `string` | no | — |
| `tagId` | `query` | — | `string` | no | — |
| `tagIds` | `query` | — | `TagIdsModel` | no | — |
| `tagNames` | `query` | — | `TagNames` | no | — |
| `folderId` | `query` | — | `string` | no | — |
| `search` | `query` | — | `string` | no | — |
| `userId` | `query` | — | `string` | no | — |
| `showArchived` | `query` | — | `boolean` | no | `false` |
| `comments` | `query` | — | `string` | no | — |
| `password` | `query` | — | `string` | no | — |
| `expiresAt` | `query` | — | `Date` (date-time) | no | — |
| `trackConversion` | `query` | — | `boolean` | no | `false` |
| `withTags` | `query` | — | `boolean` | no | `false` |
| `useAsTemplate` | `query` | — | `boolean` | no | — |
| `format` | `query` | — | `Format` | no | — |
| `type` | `query` | — | `Type2` | no | — |
| `hasPassword` | `query` | — | `boolean` | no | — |
| `hasExpiration` | `query` | — | `boolean` | no | — |
| `hasUtm` | `query` | `hasUTM` | `boolean` | no | — |
| `hasCustomSocial` | `query` | — | `boolean` | no | — |
| `hasGeo` | `query` | — | `boolean` | no | — |
| `hasDevice` | `query` | — | `boolean` | no | — |
| `hasComments` | `query` | — | `boolean` | no | — |
| `hasTags` | `query` | — | `boolean` | no | — |
| `createdAfter` | `query` | — | `Date` (date-time) | no | — |
| `createdBefore` | `query` | — | `Date` (date-time) | no | — |
| `expiresAfter` | `query` | — | `Date` (date-time) | no | — |
| `expiresBefore` | `query` | — | `Date` (date-time) | no | — |
| `scansMin` | `query` | — | `number` | no | — |
| `scansMax` | `query` | — | `number` | no | — |
| `utmSource` | `query` | `utm_source` | `string` | no | — |
| `utmMedium` | `query` | `utm_medium` | `string` | no | — |
| `utmCampaign` | `query` | `utm_campaign` | `string` | no | — |
| `utmContent` | `query` | `utm_content` | `string` | no | — |
| `utmTerm` | `query` | `utm_term` | `string` | no | — |
| `sort` | `query` | — | `SortCodeqrIoQrCodesApi` | no | `SortCodeqrIoQrCodesApi.CreatedAt` |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagIdsModel` | `tagIdsModelSchema` | `src/models/unions/tag-ids-model.ts` |
| `TagNames` | `tagNamesSchema` | `src/models/unions/tag-names.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Type2` | `type2Schema` | `src/models/type2.ts` |
| `SortCodeqrIoQrCodesApi` | `sortCodeqrIoQrCodesApiSchema` | `src/models/sort-codeqr-io-qr-codes-api.ts` |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getQrCodesCount

- **Signature**: `getQrCodesCount(request?: QrCodes.GetQrCodesCountRequest, options?: RequestOptions): ApiPromise<number, QrCodes.GetQrCodesCountError>`
- **Wire**: `GET /qrcodes/count`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.GetQrCodesCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.GetQrCodesCountRequest` (37):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectSlug` | `query` | — | `string` | no | — |
| `domain` | `query` | — | `string` | no | — |
| `tagId` | `query` | — | `string` | no | — |
| `tagIds` | `query` | — | `TagIdsModel` | no | — |
| `tagNames` | `query` | — | `TagNames` | no | — |
| `folderId` | `query` | — | `string` | no | — |
| `search` | `query` | — | `string` | no | — |
| `userId` | `query` | — | `string` | no | — |
| `showArchived` | `query` | — | `boolean` | no | `false` |
| `comments` | `query` | — | `string` | no | — |
| `password` | `query` | — | `string` | no | — |
| `expiresAt` | `query` | — | `Date` (date-time) | no | — |
| `trackConversion` | `query` | — | `boolean` | no | `false` |
| `withTags` | `query` | — | `boolean` | no | `false` |
| `useAsTemplate` | `query` | — | `boolean` | no | — |
| `format` | `query` | — | `Format` | no | — |
| `type` | `query` | — | `Type2` | no | — |
| `hasPassword` | `query` | — | `boolean` | no | — |
| `hasExpiration` | `query` | — | `boolean` | no | — |
| `hasUtm` | `query` | `hasUTM` | `boolean` | no | — |
| `hasCustomSocial` | `query` | — | `boolean` | no | — |
| `hasGeo` | `query` | — | `boolean` | no | — |
| `hasDevice` | `query` | — | `boolean` | no | — |
| `hasComments` | `query` | — | `boolean` | no | — |
| `hasTags` | `query` | — | `boolean` | no | — |
| `createdAfter` | `query` | — | `Date` (date-time) | no | — |
| `createdBefore` | `query` | — | `Date` (date-time) | no | — |
| `expiresAfter` | `query` | — | `Date` (date-time) | no | — |
| `expiresBefore` | `query` | — | `Date` (date-time) | no | — |
| `scansMin` | `query` | — | `number` | no | — |
| `scansMax` | `query` | — | `number` | no | — |
| `utmSource` | `query` | `utm_source` | `string` | no | — |
| `utmMedium` | `query` | `utm_medium` | `string` | no | — |
| `utmCampaign` | `query` | `utm_campaign` | `string` | no | — |
| `utmContent` | `query` | `utm_content` | `string` | no | — |
| `utmTerm` | `query` | `utm_term` | `string` | no | — |
| `groupBy` | `query` | — | `GroupBy4CodeqrIoQrCodesApi` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagIdsModel` | `tagIdsModelSchema` | `src/models/unions/tag-ids-model.ts` |
| `TagNames` | `tagNamesSchema` | `src/models/unions/tag-names.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Type2` | `type2Schema` | `src/models/type2.ts` |
| `GroupBy4CodeqrIoQrCodesApi` | `groupBy4CodeqrIoQrCodesApiSchema` | `src/models/unions/group-by4-codeqr-io-qr-codes-api.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### updateQrCode

- **Signature**: `updateQrCode(request: QrCodes.UpdateQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.UpdateQrCodeError>`
- **Wire**: `PUT /qrcodes/{qrcodeId}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCode`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `QrCodes.UpdateQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.UpdateQrCodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `qrcodeId` | `path` | `string` | yes |
| `body` | `body` | `QrcodesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrcodesRequest1` | `qrcodesRequest1Schema` | `src/models/qrcodes-request1.ts` |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

