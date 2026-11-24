<!-- Generated file — do not edit; regenerated with the SDK. -->

# Links — operations

Accessor: `client.links` · Source: `src/resources/links.ts` · 8 operations · Request and error types: namespace `Links`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkCreateLinks

- **Signature**: `bulkCreateLinks(request?: Links.BulkCreateLinksRequest, options?: RequestOptions): ApiPromise<LinksBulkResponse1[], Links.BulkCreateLinksError>`
- **Wire**: `POST /links/bulk`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinksBulkResponse1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.BulkCreateLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.BulkCreateLinksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinksBulkRequest[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksBulkRequest` | `linksBulkRequestSchema` | `src/models/links-bulk-request.ts` |
| `LinksBulkResponse1` | `linksBulkResponse1Schema` | `src/models/unions/links-bulk-response1.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### bulkDeleteLinks

- **Signature**: `bulkDeleteLinks(request: Links.BulkDeleteLinksRequest, options?: RequestOptions): ApiPromise<LinksBulkResponse, Links.BulkDeleteLinksError>`
- **Wire**: `DELETE /links/bulk`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinksBulkResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.BulkDeleteLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.BulkDeleteLinksRequest` (1):

| Field | Channel | Type | Req | Style |
| --- | --- | --- | --- | --- |
| `linkIds` | `query` | `string[]` | yes | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksBulkResponse` | `linksBulkResponseSchema` | `src/models/links-bulk-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### createLink

- **Signature**: `createLink(request?: Links.CreateLinkRequest, options?: RequestOptions): ApiPromise<LinkCodeqrIoLinksApi, Links.CreateLinkError>`
- **Wire**: `POST /links`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.CreateLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.CreateLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksRequest` | `linksRequestSchema` | `src/models/links-request.ts` |
| `LinkCodeqrIoLinksApi` | `linkCodeqrIoLinksApiSchema` | `src/models/link-codeqr-io-links-api.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### deleteLink

- **Signature**: `deleteLink(request: Links.DeleteLinkRequest, options?: RequestOptions): ApiPromise<LinksResponse, Links.DeleteLinkError>`
- **Wire**: `DELETE /links/{linkId}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinksResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.DeleteLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.DeleteLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `linkId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksResponse` | `linksResponseSchema` | `src/models/links-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getLinkInfo

- **Signature**: `getLinkInfo(request: Links.GetLinkInfoRequest, options?: RequestOptions): ApiPromise<LinkCodeqrIoLinksApi, Links.GetLinkInfoError>`
- **Wire**: `GET /links/info`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.GetLinkInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.GetLinkInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectSlug` | `query` | `string` | yes |
| `domain` | `query` | `string` | yes |
| `key` | `query` | `string` | yes |
| `linkId` | `query` | `string` | no |
| `externalId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkCodeqrIoLinksApi` | `linkCodeqrIoLinksApiSchema` | `src/models/link-codeqr-io-links-api.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getLinks

- **Signature**: `getLinks(request?: Links.GetLinksRequest, options?: RequestOptions): ApiPromise<LinkCodeqrIoLinksApi[], Links.GetLinksError>`
- **Wire**: `GET /links`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkCodeqrIoLinksApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.GetLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.GetLinksRequest` (41):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `projectSlug` | `query` | — | `string` | no | — | — |
| `domain` | `query` | — | `string` | no | — | — |
| `tagId` | `query` | — | `string` | no | — | — |
| `tagIds` | `query` | — | `TagIdsModel` | no | — | — |
| `tagNames` | `query` | — | `TagNames` | no | — | — |
| `folderId` | `query` | — | `string` | no | — | — |
| `search` | `query` | — | `string` | no | — | — |
| `userId` | `query` | — | `string` | no | — | — |
| `showArchived` | `query` | — | `boolean` | no | `false` | — |
| `password` | `query` | — | `string` | no | — | — |
| `expiresAt` | `query` | — | `Date` (date-time) | no | — | — |
| `geo` | `query` | — | `Geo1` | no | — | `spread` |
| `ios` | `query` | — | `string` | no | — | — |
| `android` | `query` | — | `string` | no | — | — |
| `comments` | `query` | — | `string` | no | — | — |
| `withTags` | `query` | — | `boolean` | no | `false` | — |
| `trackConversion` | `query` | — | `boolean` | no | `false` | — |
| `useAsTemplate` | `query` | — | `boolean` | no | — | — |
| `hasPassword` | `query` | — | `boolean` | no | — | — |
| `hasExpiration` | `query` | — | `boolean` | no | — | — |
| `hasUtm` | `query` | `hasUTM` | `boolean` | no | — | — |
| `hasCustomSocial` | `query` | — | `boolean` | no | — | — |
| `hasGeo` | `query` | — | `boolean` | no | — | — |
| `hasDevice` | `query` | — | `boolean` | no | — | — |
| `hasComments` | `query` | — | `boolean` | no | — | — |
| `hasTags` | `query` | — | `boolean` | no | — | — |
| `createdAfter` | `query` | — | `Date` (date-time) | no | — | — |
| `createdBefore` | `query` | — | `Date` (date-time) | no | — | — |
| `expiresAfter` | `query` | — | `Date` (date-time) | no | — | — |
| `expiresBefore` | `query` | — | `Date` (date-time) | no | — | — |
| `clicksMin` | `query` | — | `number` | no | — | — |
| `clicksMax` | `query` | — | `number` | no | — | — |
| `utmSource` | `query` | `utm_source` | `string` | no | — | — |
| `utmMedium` | `query` | `utm_medium` | `string` | no | — | — |
| `utmCampaign` | `query` | `utm_campaign` | `string` | no | — | — |
| `utmContent` | `query` | `utm_content` | `string` | no | — | — |
| `utmTerm` | `query` | `utm_term` | `string` | no | — | — |
| `sort` | `query` | — | `Sort` | no | `Sort.CreatedAt` | — |
| `linkIds` | `query` | — | `LinkIds` | no | — | — |
| `page` | `query` | — | `number` | no | `1` | — |
| `pageSize` | `query` | — | `number` | no | `100` | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagIdsModel` | `tagIdsModelSchema` | `src/models/unions/tag-ids-model.ts` |
| `TagNames` | `tagNamesSchema` | `src/models/unions/tag-names.ts` |
| `Geo1` | `geo1Schema` | `src/models/geo1.ts` |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `LinkIds` | `linkIdsSchema` | `src/models/unions/link-ids.ts` |
| `LinkCodeqrIoLinksApi` | `linkCodeqrIoLinksApiSchema` | `src/models/link-codeqr-io-links-api.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getLinksCount

- **Signature**: `getLinksCount(request?: Links.GetLinksCountRequest, options?: RequestOptions): ApiPromise<number, Links.GetLinksCountError>`
- **Wire**: `GET /links/count`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.GetLinksCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.GetLinksCountRequest` (38):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `projectSlug` | `query` | — | `string` | no | — | — |
| `domain` | `query` | — | `string` | no | — | — |
| `tagId` | `query` | — | `string` | no | — | — |
| `tagIds` | `query` | — | `TagIdsModel` | no | — | — |
| `tagNames` | `query` | — | `TagNames` | no | — | — |
| `folderId` | `query` | — | `string` | no | — | — |
| `search` | `query` | — | `string` | no | — | — |
| `userId` | `query` | — | `string` | no | — | — |
| `showArchived` | `query` | — | `boolean` | no | `false` | — |
| `password` | `query` | — | `string` | no | — | — |
| `expiresAt` | `query` | — | `Date` (date-time) | no | — | — |
| `geo` | `query` | — | `Geo1` | no | — | `spread` |
| `ios` | `query` | — | `string` | no | — | — |
| `android` | `query` | — | `string` | no | — | — |
| `comments` | `query` | — | `string` | no | — | — |
| `withTags` | `query` | — | `boolean` | no | `false` | — |
| `trackConversion` | `query` | — | `boolean` | no | `false` | — |
| `useAsTemplate` | `query` | — | `boolean` | no | — | — |
| `hasPassword` | `query` | — | `boolean` | no | — | — |
| `hasExpiration` | `query` | — | `boolean` | no | — | — |
| `hasUtm` | `query` | `hasUTM` | `boolean` | no | — | — |
| `hasCustomSocial` | `query` | — | `boolean` | no | — | — |
| `hasGeo` | `query` | — | `boolean` | no | — | — |
| `hasDevice` | `query` | — | `boolean` | no | — | — |
| `hasComments` | `query` | — | `boolean` | no | — | — |
| `hasTags` | `query` | — | `boolean` | no | — | — |
| `createdAfter` | `query` | — | `Date` (date-time) | no | — | — |
| `createdBefore` | `query` | — | `Date` (date-time) | no | — | — |
| `expiresAfter` | `query` | — | `Date` (date-time) | no | — | — |
| `expiresBefore` | `query` | — | `Date` (date-time) | no | — | — |
| `clicksMin` | `query` | — | `number` | no | — | — |
| `clicksMax` | `query` | — | `number` | no | — | — |
| `utmSource` | `query` | `utm_source` | `string` | no | — | — |
| `utmMedium` | `query` | `utm_medium` | `string` | no | — | — |
| `utmCampaign` | `query` | `utm_campaign` | `string` | no | — | — |
| `utmContent` | `query` | `utm_content` | `string` | no | — | — |
| `utmTerm` | `query` | `utm_term` | `string` | no | — | — |
| `groupBy` | `query` | — | `GroupBy4` | no | — | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagIdsModel` | `tagIdsModelSchema` | `src/models/unions/tag-ids-model.ts` |
| `TagNames` | `tagNamesSchema` | `src/models/unions/tag-names.ts` |
| `Geo1` | `geo1Schema` | `src/models/geo1.ts` |
| `GroupBy4` | `groupBy4Schema` | `src/models/unions/group-by4.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### updateLink

- **Signature**: `updateLink(request: Links.UpdateLinkRequest, options?: RequestOptions): ApiPromise<LinkCodeqrIoLinksApi, Links.UpdateLinkError>`
- **Wire**: `PUT /links/{linkId}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Links.UpdateLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Links.UpdateLinkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `linkId` | `path` | `string` | yes |
| `body` | `body` | `LinksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinksRequest1` | `linksRequest1Schema` | `src/models/links-request1.ts` |
| `LinkCodeqrIoLinksApi` | `linkCodeqrIoLinksApiSchema` | `src/models/link-codeqr-io-links-api.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

