<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntryVariants — operations

Accessor: `client.entryVariants` · Source: `src/resources/entry-variants.ts` · 2 operations · Request and error types: namespace `EntryVariants`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllEntryVariants

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllEntryVariants(request: EntryVariants.GetAllEntryVariantsRequest, options?: RequestOptions): ApiPromise<EntryVariantList, EntryVariants.GetAllEntryVariantsError>`
- **Wire**: `GET /content_types/{content_type_uid}/entries/{entry_uid}/variants`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryVariantList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `EntryVariants.GetAllEntryVariantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntryVariants.GetAllEntryVariantsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntryVariantList` | `entryVariantListSchema` | `src/models/entry-variant-list.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getSingleEntryVariant

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSingleEntryVariant(request: EntryVariants.GetSingleEntryVariantRequest, options?: RequestOptions): ApiPromise<EntryVariant, EntryVariants.GetSingleEntryVariantError>`
- **Wire**: `GET /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryVariant`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `EntryVariants.GetSingleEntryVariantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntryVariants.GetSingleEntryVariantRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `variantUid` | `path` | `variant_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntryVariant` | `entryVariantSchema` | `src/models/entry-variant.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

