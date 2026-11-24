<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.geolocation` · Source: `src/resources/geolocation.ts` · 3 operations · Request and error types: namespace `Geolocation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGeoCities

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGeoCities(request: Geolocation.GetGeoCitiesRequest, options?: RequestOptions): ApiPromise<GeoList, Geolocation.GetGeoCitiesError>`
- **Wire**: `GET /geolocation/cities`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeoList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Geolocation.GetGeoCitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geolocation.GetGeoCitiesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoList` | `geoListSchema` | `src/models/geo-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getGeoCountries

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGeoCountries(request: Geolocation.GetGeoCountriesRequest, options?: RequestOptions): ApiPromise<GeoList, Geolocation.GetGeoCountriesError>`
- **Wire**: `GET /geolocation/countries`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeoList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Geolocation.GetGeoCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geolocation.GetGeoCountriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoList` | `geoListSchema` | `src/models/geo-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getGeoRegions

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGeoRegions(request: Geolocation.GetGeoRegionsRequest, options?: RequestOptions): ApiPromise<GeoList, Geolocation.GetGeoRegionsError>`
- **Wire**: `GET /geolocation/regions`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeoList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Geolocation.GetGeoRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geolocation.GetGeoRegionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoList` | `geoListSchema` | `src/models/geo-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

