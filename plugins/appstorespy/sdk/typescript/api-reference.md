# Reference

> Source: [AppstoreSpyClient](src/client.ts)

## AppStore

> Source: [AppStore](src/resources/app-store.ts)

<details>
<summary><code>devFilterSearchIosDevelopersQueryPost(request: AppStore.DevFilterSearchIosDevelopersQueryPostRequest, options?: RequestOptions): ApiPromise&lt;IosDevListResponse, AppStore.DevFilterSearchIosDevelopersQueryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches App Store developers by a structured JSON filter, with paging and sorting. `GET /ios/developers` covers the free-text equivalent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.devFilterSearchIosDevelopersQueryPost({
    body: {
      limit: 2,
      sort: DevSortEnum.Revenue2,
      fields: [
        "id",
        "name",
        "seller_name",
        "hq_country",
        "category",
        "type",
        "total_apps",
        "revenue",
        "downloads",
      ],
      filter: { hqCountry: ["SE"], type: TypeEnum.App, totalApps: { gte: 2 } },
    },
  });
  // TODO: Handle 'response' of type IosDevListResponse
} catch (err) {
  // TODO: Handle 'err' of type AppStore.DevFilterSearchIosDevelopersQueryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .devFilterSearchIosDevelopersQueryPost({
    body: {
      limit: 2,
      sort: DevSortEnum.Revenue2,
      fields: [
        "id",
        "name",
        "seller_name",
        "hq_country",
        "category",
        "type",
        "total_apps",
        "revenue",
        "downloads",
      ],
      filter: { hqCountry: ["SE"], type: TypeEnum.App, totalApps: { gte: 2 } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosDevListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosDevSearchBody](src/models/ios-dev-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.devFilterSearchIosDevelopersQueryPost(request)`

- **OnSuccess**: <code>[IosDevListResponse](src/models/ios-dev-list-response.ts)</code>
- **OnError**: throws <code>[AppStore.DevFilterSearchIosDevelopersQueryPostError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.devFilterSearchIosDevelopersQueryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosDevListResponse, AppStore.DevFilterSearchIosDevelopersQueryPostError&gt;</code>, with `result.value` of type <code>[IosDevListResponse](src/models/ios-dev-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>devSearchIosDevelopersGet(request?: AppStore.DevSearchIosDevelopersGetRequest, options?: RequestOptions): ApiPromise&lt;IosDev[], AppStore.DevSearchIosDevelopersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /ios/developers/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.devSearchIosDevelopersGet({
    q: "hq_country:US",
    sort: "-total_apps,-installs",
  });
  // TODO: Handle 'response' of type IosDev[]
} catch (err) {
  // TODO: Handle 'err' of type AppStore.DevSearchIosDevelopersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .devSearchIosDevelopersGet({ q: "hq_country:US", sort: "-total_apps,-installs" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosDev[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Query for search |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.devSearchIosDevelopersGet(request)`

- **OnSuccess**: <code>[IosDev](src/models/ios-dev.ts)[]</code>
- **OnError**: throws <code>[AppStore.DevSearchIosDevelopersGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.devSearchIosDevelopersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosDev[], AppStore.DevSearchIosDevelopersGetError&gt;</code>, with `result.value` of type <code>[IosDev](src/models/ios-dev.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppDetailsIosAppsIdGet(request: AppStore.GetAppDetailsIosAppsIdGetRequest, options?: RequestOptions): ApiPromise&lt;IosApp, AppStore.GetAppDetailsIosAppsIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getAppDetailsIosAppsIdGet({ id: "333903271" });
  // TODO: Handle 'response' of type IosApp
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetAppDetailsIosAppsIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getAppDetailsIosAppsIdGet({ id: "333903271" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosApp
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for which return data. By default: US. |
| <code>language?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Language of meta data. By default: store default language. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getAppDetailsIosAppsIdGet(request)`

- **OnSuccess**: <code>[IosApp](src/models/ios-app.ts)</code>
- **OnError**: throws <code>[AppStore.GetAppDetailsIosAppsIdGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getAppDetailsIosAppsIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosApp, AppStore.GetAppDetailsIosAppsIdGetError&gt;</code>, with `result.value` of type <code>[IosApp](src/models/ios-app.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppSearchIosAppsGet(request?: AppStore.GetAppSearchIosAppsGetRequest, options?: RequestOptions): ApiPromise&lt;IosApp[], AppStore.GetAppSearchIosAppsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, downloads or category, use `POST /ios/apps/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getAppSearchIosAppsGet({ q: "Twitter", sort: "-revenue" });
  // TODO: Handle 'response' of type IosApp[]
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetAppSearchIosAppsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getAppSearchIosAppsGet({ q: "Twitter", sort: "-revenue" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosApp[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Word or phrase for search. |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for specific country fields. Default - US. |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getAppSearchIosAppsGet(request)`

- **OnSuccess**: <code>[IosApp](src/models/ios-app.ts)[]</code>
- **OnError**: throws <code>[AppStore.GetAppSearchIosAppsGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getAppSearchIosAppsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosApp[], AppStore.GetAppSearchIosAppsGetError&gt;</code>, with `result.value` of type <code>[IosApp](src/models/ios-app.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppsEstimatesIosDevelopersIdEstimatesGet(request: AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetRequest, options?: RequestOptions): ApiPromise&lt;DevAppsEstimates[], AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getAppsEstimatesIosDevelopersIdEstimatesGet({ id: "296415947" });
  // TODO: Handle 'response' of type DevAppsEstimates[]
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .getAppsEstimatesIosDevelopersIdEstimatesGet({ id: "296415947" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevAppsEstimates[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Developer's ids to return separated by comma(,) |
| <code>start?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>fillGaps?</code> | <code>boolean</code> | Return every month from the developer's earliest to its latest month with estimates within start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is not read as a zero. Off by default, which leaves such months out.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getAppsEstimatesIosDevelopersIdEstimatesGet(request)`

- **OnSuccess**: <code>[DevAppsEstimates](src/models/dev-apps-estimates.ts)[]</code>
- **OnError**: throws <code>[AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getAppsEstimatesIosDevelopersIdEstimatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevAppsEstimates[], AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError&gt;</code>, with `result.value` of type <code>[DevAppsEstimates](src/models/dev-apps-estimates.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppsEstimatesIosEstimatesGet(request: AppStore.GetAppsEstimatesIosEstimatesGetRequest, options?: RequestOptions): ApiPromise&lt;AppsEstimates[], AppStore.GetAppsEstimatesIosEstimatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get App Store apps estimates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getAppsEstimatesIosEstimatesGet({ id: "333903271" });
  // TODO: Handle 'response' of type AppsEstimates[]
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetAppsEstimatesIosEstimatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getAppsEstimatesIosEstimatesGet({ id: "333903271" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsEstimates[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370, URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422 |
| <code>start?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getAppsEstimatesIosEstimatesGet(request)`

- **OnSuccess**: <code>[AppsEstimates](src/models/apps-estimates.ts)[]</code>
- **OnError**: throws <code>[AppStore.GetAppsEstimatesIosEstimatesGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getAppsEstimatesIosEstimatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsEstimates[], AppStore.GetAppsEstimatesIosEstimatesGetError&gt;</code>, with `result.value` of type <code>[AppsEstimates](src/models/apps-estimates.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCountryAggregatesIosAggregatesCountriesGet(request?: AppStore.GetCountryAggregatesIosAggregatesCountriesGetRequest, options?: RequestOptions): ApiPromise&lt;DevCountryAggregatesResponse, AppStore.GetCountryAggregatesIosAggregatesCountriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all App Store developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getCountryAggregatesIosAggregatesCountriesGet();
  // TODO: Handle 'response' of type DevCountryAggregatesResponse
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetCountryAggregatesIosAggregatesCountriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getCountryAggregatesIosAggregatesCountriesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevCountryAggregatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryType?</code> | <code>[TypeEnum](src/models/type-enum.ts)</code> | Restrict to developers with this dominant category type |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getCountryAggregatesIosAggregatesCountriesGet(request)`

- **OnSuccess**: <code>[DevCountryAggregatesResponse](src/models/dev-country-aggregates-response.ts)</code>
- **OnError**: throws <code>[AppStore.GetCountryAggregatesIosAggregatesCountriesGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getCountryAggregatesIosAggregatesCountriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevCountryAggregatesResponse, AppStore.GetCountryAggregatesIosAggregatesCountriesGetError&gt;</code>, with `result.value` of type <code>[DevCountryAggregatesResponse](src/models/dev-country-aggregates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeveloperIosDevelopersIdGet(request: AppStore.GetDeveloperIosDevelopersIdGetRequest, options?: RequestOptions): ApiPromise&lt;IosDev, AppStore.GetDeveloperIosDevelopersIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the App Store developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getDeveloperIosDevelopersIdGet({ id: "1641486560" });
  // TODO: Handle 'response' of type IosDev
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetDeveloperIosDevelopersIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getDeveloperIosDevelopersIdGet({ id: "1641486560" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosDev
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Developer ID |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getDeveloperIosDevelopersIdGet(request)`

- **OnSuccess**: <code>[IosDev](src/models/ios-dev.ts)</code>
- **OnError**: throws <code>[AppStore.GetDeveloperIosDevelopersIdGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getDeveloperIosDevelopersIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosDev, AppStore.GetDeveloperIosDevelopersIdGetError&gt;</code>, with `result.value` of type <code>[IosDev](src/models/ios-dev.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFilterSearchIosAppsQueryPost(request?: AppStore.GetFilterSearchIosAppsQueryPostRequest, options?: RequestOptions): ApiPromise&lt;IosAppListResponse, AppStore.GetFilterSearchIosAppsQueryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Full Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Сategory|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
|screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|copyright |string |- |Copyright|
|seller |string |- |Seller|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getFilterSearchIosAppsQueryPost({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "324684583" },
    },
  });
  // TODO: Handle 'response' of type IosAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetFilterSearchIosAppsQueryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .getFilterSearchIosAppsQueryPost({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "324684583" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[IosAppSearchBody](src/models/ios-app-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getFilterSearchIosAppsQueryPost(request)`

- **OnSuccess**: <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: throws <code>[AppStore.GetFilterSearchIosAppsQueryPostError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getFilterSearchIosAppsQueryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosAppListResponse, AppStore.GetFilterSearchIosAppsQueryPostError&gt;</code>, with `result.value` of type <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIosRankingsIosRankingsGet(request?: AppStore.GetIosRankingsIosRankingsGetRequest, options?: RequestOptions): ApiPromise&lt;ApiResponseListModelsResponsesResponseIosRankingItem, AppStore.GetIosRankingsIosRankingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns App Store chart positions over a date range, filtered by storefront, category, collection and platform. One row per app per chart per day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getIosRankingsIosRankingsGet();
  // TODO: Handle 'response' of type ApiResponseListModelsResponsesResponseIosRankingItem
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetIosRankingsIosRankingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getIosRankingsIosRankingsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiResponseListModelsResponsesResponseIosRankingItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateStart?</code> | <code>string</code> (date) | Start date (YYYY-MM-DD) |
| <code>dateEnd?</code> | <code>string</code> (date) | End date (YYYY-MM-DD) |
| <code>app?</code> | <code>number[]</code> | App IDs (comma-separated) |
| <code>platform?</code> | <code>[IosPlatform](src/models/ios-platform.ts)[]</code> | Platforms (iPhone/iPad, comma-separated) |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)[]</code> | Country codes (comma-separated) |
| <code>category?</code> | <code>[IosCategory](src/models/ios-category.ts)[]</code> | App categories (comma-separated) |
| <code>collection?</code> | <code>[Collection](src/models/collection.ts)[]</code> | Collection types (comma-separated) |
| <code>rankStart?</code> | <code>number</code> | Minimum rank |
| <code>rankEnd?</code> | <code>number</code> | Maximum rank |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getIosRankingsIosRankingsGet(request)`

- **OnSuccess**: <code>[ApiResponseListModelsResponsesResponseIosRankingItem](src/models/api-response-list-models-responses-response-ios-ranking-item.ts)</code>
- **OnError**: throws <code>[AppStore.GetIosRankingsIosRankingsGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getIosRankingsIosRankingsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiResponseListModelsResponsesResponseIosRankingItem, AppStore.GetIosRankingsIosRankingsGetError&gt;</code>, with `result.value` of type <code>[ApiResponseListModelsResponsesResponseIosRankingItem](src/models/api-response-list-models-responses-response-ios-ranking-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlayAppCountriesIosInfoCountriesGet(options?: RequestOptions): ApiPromise&lt;StoreCountries, AppStore.GetPlayAppCountriesIosInfoCountriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of App Store storefronts available as a `country` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getPlayAppCountriesIosInfoCountriesGet();
  // TODO: Handle 'response' of type StoreCountries
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetPlayAppCountriesIosInfoCountriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getPlayAppCountriesIosInfoCountriesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoreCountries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getPlayAppCountriesIosInfoCountriesGet()`

- **OnSuccess**: <code>[StoreCountries](src/models/store-countries.ts)</code>
- **OnError**: throws <code>[AppStore.GetPlayAppCountriesIosInfoCountriesGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getPlayAppCountriesIosInfoCountriesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoreCountries, AppStore.GetPlayAppCountriesIosInfoCountriesGetError&gt;</code>, with `result.value` of type <code>[StoreCountries](src/models/store-countries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlayAppLanguagesIosInfoLanguagesGet(options?: RequestOptions): ApiPromise&lt;StoreLanguages, AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of metadata languages available as a `language` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getPlayAppLanguagesIosInfoLanguagesGet();
  // TODO: Handle 'response' of type StoreLanguages
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getPlayAppLanguagesIosInfoLanguagesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoreLanguages
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getPlayAppLanguagesIosInfoLanguagesGet()`

- **OnSuccess**: <code>[StoreLanguages](src/models/store-languages.ts)</code>
- **OnError**: throws <code>[AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getPlayAppLanguagesIosInfoLanguagesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoreLanguages, AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError&gt;</code>, with `result.value` of type <code>[StoreLanguages](src/models/store-languages.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecrawlIosAppsIdRecrawlGet(request: AppStore.GetRecrawlIosAppsIdRecrawlGetRequest, options?: RequestOptions): ApiPromise&lt;undefined, AppStore.GetRecrawlIosAppsIdRecrawlGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.appStore.getRecrawlIosAppsIdRecrawlGet({ id: "333903271" });
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetRecrawlIosAppsIdRecrawlGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore.getRecrawlIosAppsIdRecrawlGet({ id: "333903271" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for which return data. By default: US.<br>**Default**: "US" |
| <code>language?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Language of meta data. By default: en_US<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getRecrawlIosAppsIdRecrawlGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AppStore.GetRecrawlIosAppsIdRecrawlGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getRecrawlIosAppsIdRecrawlGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AppStore.GetRecrawlIosAppsIdRecrawlGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReviewsIosAppsIdReviewsGet(request: AppStore.GetReviewsIosAppsIdReviewsGetRequest, options?: RequestOptions): ApiPromise&lt;IosReview[], AppStore.GetReviewsIosAppsIdReviewsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single App Store app. Reviews are storefront-specific, so `country` changes which set is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getReviewsIosAppsIdReviewsGet({
    id: "333903271",
    sort: "rating,-date",
  });
  // TODO: Handle 'response' of type IosReview[]
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetReviewsIosAppsIdReviewsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .getReviewsIosAppsIdReviewsGet({ id: "333903271", sort: "rating,-date" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosReview[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | App storefront |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>limit?</code> | <code>number</code> | Count of reviews per page<br>**Default**: 10 |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getReviewsIosAppsIdReviewsGet(request)`

- **OnSuccess**: <code>[IosReview](src/models/ios-review.ts)[]</code>
- **OnError**: throws <code>[AppStore.GetReviewsIosAppsIdReviewsGetError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getReviewsIosAppsIdReviewsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosReview[], AppStore.GetReviewsIosAppsIdReviewsGetError&gt;</code>, with `result.value` of type <code>[IosReview](src/models/ios-review.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimilarIosAppsSimilarPost(request?: AppStore.GetSimilarIosAppsSimilarPostRequest, options?: RequestOptions): ApiPromise&lt;IosAppListResponse, AppStore.GetSimilarIosAppsSimilarPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps App Store lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getSimilarIosAppsSimilarPost({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
      filter: { published: true },
      id: "310633997",
      link: SimilarEnum.To,
    },
  });
  // TODO: Handle 'response' of type IosAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetSimilarIosAppsSimilarPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .getSimilarIosAppsSimilarPost({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
      filter: { published: true },
      id: "310633997",
      link: SimilarEnum.To,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[IosSimilarSearchBody](src/models/ios-similar-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getSimilarIosAppsSimilarPost(request)`

- **OnSuccess**: <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: throws <code>[AppStore.GetSimilarIosAppsSimilarPostError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getSimilarIosAppsSimilarPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosAppListResponse, AppStore.GetSimilarIosAppsSimilarPostError&gt;</code>, with `result.value` of type <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSummaryIosAppsSummaryPost(request: AppStore.GetSummaryIosAppsSummaryPostRequest, options?: RequestOptions): ApiPromise&lt;SummaryResponse, AppStore.GetSummaryIosAppsSummaryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /ios/apps/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appStore.getSummaryIosAppsSummaryPost({
    body: { filter: { published: true } },
  });
  // TODO: Handle 'response' of type SummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type AppStore.GetSummaryIosAppsSummaryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appStore
  .getSummaryIosAppsSummaryPost({ body: { filter: { published: true } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosSummarySearchBody](src/models/ios-summary-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appStore.getSummaryIosAppsSummaryPost(request)`

- **OnSuccess**: <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: throws <code>[AppStore.GetSummaryIosAppsSummaryPostError](src/resources/app-store.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appStore.getSummaryIosAppsSummaryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummaryResponse, AppStore.GetSummaryIosAppsSummaryPostError&gt;</code>, with `result.value` of type <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>getEventsPlayLiveopsGet(request: Events.GetEventsPlayLiveopsGetRequest, options?: RequestOptions): ApiPromise&lt;Event[], Events.GetEventsPlayLiveopsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEventsPlayLiveopsGet({ app: "some example string" });
  // TODO: Handle 'response' of type Event[]
} catch (err) {
  // TODO: Handle 'err' of type Events.GetEventsPlayLiveopsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.getEventsPlayLiveopsGet({ app: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Event[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app</code> | <code>string</code> | - |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | -<br>**Default**: "US" |
| <code>freshness?</code> | <code>[CacheTime](src/models/cache-time.ts)</code> | -<br>**Default**: "7d" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEventsPlayLiveopsGet(request)`

- **OnSuccess**: <code>[Event](src/models/event.ts)[]</code>
- **OnError**: throws <code>[Events.GetEventsPlayLiveopsGetError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getEventsPlayLiveopsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Event[], Events.GetEventsPlayLiveopsGetError&gt;</code>, with `result.value` of type <code>[Event](src/models/event.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GooglePlay

> Source: [GooglePlay](src/resources/google-play.ts)

<details>
<summary><code>devFilterSearchPlayDevelopersQueryPost(request: GooglePlay.DevFilterSearchPlayDevelopersQueryPostRequest, options?: RequestOptions): ApiPromise&lt;PlayDevListResponse, GooglePlay.DevFilterSearchPlayDevelopersQueryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Google Play developers by a structured JSON filter, with paging and sorting. `GET /play/developers` covers the free-text equivalent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.devFilterSearchPlayDevelopersQueryPost({
    body: {
      limit: 2,
      sort: DevSortEnum.Revenue2,
      fields: ["id", "name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
      filter: { hqCountry: ["SE"], type: TypeEnum.App, totalApps: { gte: 2 } },
    },
  });
  // TODO: Handle 'response' of type PlayDevListResponse
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.DevFilterSearchPlayDevelopersQueryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .devFilterSearchPlayDevelopersQueryPost({
    body: {
      limit: 2,
      sort: DevSortEnum.Revenue2,
      fields: ["id", "name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
      filter: { hqCountry: ["SE"], type: TypeEnum.App, totalApps: { gte: 2 } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayDevListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlayDevSearchBody](src/models/play-dev-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.devFilterSearchPlayDevelopersQueryPost(request)`

- **OnSuccess**: <code>[PlayDevListResponse](src/models/play-dev-list-response.ts)</code>
- **OnError**: throws <code>[GooglePlay.DevFilterSearchPlayDevelopersQueryPostError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.devFilterSearchPlayDevelopersQueryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayDevListResponse, GooglePlay.DevFilterSearchPlayDevelopersQueryPostError&gt;</code>, with `result.value` of type <code>[PlayDevListResponse](src/models/play-dev-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>devSearchPlayDevelopersGet(request?: GooglePlay.DevSearchPlayDevelopersGetRequest, options?: RequestOptions): ApiPromise&lt;PlayDev[], GooglePlay.DevSearchPlayDevelopersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /play/developers/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.devSearchPlayDevelopersGet({
    q: "hq_country:US",
    sort: "-total_apps,-installs",
  });
  // TODO: Handle 'response' of type PlayDev[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.DevSearchPlayDevelopersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .devSearchPlayDevelopersGet({ q: "hq_country:US", sort: "-total_apps,-installs" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayDev[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Query for search |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.devSearchPlayDevelopersGet(request)`

- **OnSuccess**: <code>[PlayDev](src/models/play-dev.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.DevSearchPlayDevelopersGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.devSearchPlayDevelopersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayDev[], GooglePlay.DevSearchPlayDevelopersGetError&gt;</code>, with `result.value` of type <code>[PlayDev](src/models/play-dev.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppDetailsPlayAppsIdGet(request: GooglePlay.GetAppDetailsPlayAppsIdGetRequest, options?: RequestOptions): ApiPromise&lt;PlayApp, GooglePlay.GetAppDetailsPlayAppsIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full Google Play listing for a single app, looked up by its bundle id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getAppDetailsPlayAppsIdGet({ id: "com.twitter.android" });
  // TODO: Handle 'response' of type PlayApp
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetAppDetailsPlayAppsIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getAppDetailsPlayAppsIdGet({ id: "com.twitter.android" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayApp
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for which return data. By default: US. |
| <code>language?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Language of meta data. By default: store default language. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getAppDetailsPlayAppsIdGet(request)`

- **OnSuccess**: <code>[PlayApp](src/models/play-app.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetAppDetailsPlayAppsIdGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getAppDetailsPlayAppsIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayApp, GooglePlay.GetAppDetailsPlayAppsIdGetError&gt;</code>, with `result.value` of type <code>[PlayApp](src/models/play-app.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppSearchPlayAppsGet(request?: GooglePlay.GetAppSearchPlayAppsGetRequest, options?: RequestOptions): ApiPromise&lt;PlayApp[], GooglePlay.GetAppSearchPlayAppsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, installs or category, use `POST /play/apps/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getAppSearchPlayAppsGet({
    q: "X",
    sort: "-installs_exact,-revenue",
  });
  // TODO: Handle 'response' of type PlayApp[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetAppSearchPlayAppsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getAppSearchPlayAppsGet({ q: "X", sort: "-installs_exact,-revenue" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayApp[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Word or phrase for search. |
| <code>published?</code> | <code>boolean</code> | Empty for all. |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for specific country fields. Default - US. |
| <code>language?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Language of meta data. By default: store default language. |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getAppSearchPlayAppsGet(request)`

- **OnSuccess**: <code>[PlayApp](src/models/play-app.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetAppSearchPlayAppsGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getAppSearchPlayAppsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayApp[], GooglePlay.GetAppSearchPlayAppsGetError&gt;</code>, with `result.value` of type <code>[PlayApp](src/models/play-app.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppsEstimatesPlayDevelopersIdEstimatesGet(request: GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest, options?: RequestOptions): ApiPromise&lt;DevAppsEstimates[], GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getAppsEstimatesPlayDevelopersIdEstimatesGet({
    id: "7022973042396704692",
  });
  // TODO: Handle 'response' of type DevAppsEstimates[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getAppsEstimatesPlayDevelopersIdEstimatesGet({ id: "7022973042396704692" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevAppsEstimates[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Developer's id |
| <code>start?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>fillGaps?</code> | <code>boolean</code> | Return every month from the developer's earliest to its latest month with estimates within start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is not read as a zero. Off by default, which leaves such months out.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getAppsEstimatesPlayDevelopersIdEstimatesGet(request)`

- **OnSuccess**: <code>[DevAppsEstimates](src/models/dev-apps-estimates.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getAppsEstimatesPlayDevelopersIdEstimatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevAppsEstimates[], GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError&gt;</code>, with `result.value` of type <code>[DevAppsEstimates](src/models/dev-apps-estimates.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppsEstimatesPlayEstimatesGet(request: GooglePlay.GetAppsEstimatesPlayEstimatesGetRequest, options?: RequestOptions): ApiPromise&lt;AppsEstimates[], GooglePlay.GetAppsEstimatesPlayEstimatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getAppsEstimatesPlayEstimatesGet({ id: "com.twitter.android" });
  // TODO: Handle 'response' of type AppsEstimates[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetAppsEstimatesPlayEstimatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getAppsEstimatesPlayEstimatesGet({ id: "com.twitter.android" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsEstimates[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play link (https://play.google.com/store/apps/details?id=com.example.app or market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace answers 422 |
| <code>start?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getAppsEstimatesPlayEstimatesGet(request)`

- **OnSuccess**: <code>[AppsEstimates](src/models/apps-estimates.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetAppsEstimatesPlayEstimatesGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getAppsEstimatesPlayEstimatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsEstimates[], GooglePlay.GetAppsEstimatesPlayEstimatesGetError&gt;</code>, with `result.value` of type <code>[AppsEstimates](src/models/apps-estimates.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAppsInstallsDailyPlayAppsIdInstallsDailyGet(request: GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest, options?: RequestOptions): ApiPromise&lt;AppsDailyInstalls[], GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps daily installs.

`ipd` is derived from the cumulative install total: each increase is spread evenly across the elapsed days since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a single-day spike. Values are raw and never negative.

By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving average for readability. Pass `smooth=true` to get that series: a centered, triangular-weighted 9-day moving average of `ipd` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised). Neighbouring days outside `start`/`end` are included in the window, so the first and last days are smoothed the same way as the rest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getAppsInstallsDailyPlayAppsIdInstallsDailyGet({
    id: "com.twitter.android",
  });
  // TODO: Handle 'response' of type AppsDailyInstalls[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getAppsInstallsDailyPlayAppsIdInstallsDailyGet({ id: "com.twitter.android" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsDailyInstalls[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it. An unrecognised id answers 422 |
| <code>start?</code> | <code>string</code> (date) | Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at `end` |
| <code>end?</code> | <code>string</code> (date) | End date. Format YYYY-MM-DD |
| <code>smooth?</code> | <code>boolean</code> | Return `ipd` smoothed as on the website chart<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getAppsInstallsDailyPlayAppsIdInstallsDailyGet(request)`

- **OnSuccess**: <code>[AppsDailyInstalls](src/models/apps-daily-installs.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getAppsInstallsDailyPlayAppsIdInstallsDailyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsDailyInstalls[], GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError&gt;</code>, with `result.value` of type <code>[AppsDailyInstalls](src/models/apps-daily-installs.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCountryAggregatesPlayAggregatesCountriesGet(request?: GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetRequest, options?: RequestOptions): ApiPromise&lt;DevCountryAggregatesResponse, GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getCountryAggregatesPlayAggregatesCountriesGet();
  // TODO: Handle 'response' of type DevCountryAggregatesResponse
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay.getCountryAggregatesPlayAggregatesCountriesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevCountryAggregatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryType?</code> | <code>[TypeEnum](src/models/type-enum.ts)</code> | Restrict to developers with this dominant category type |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getCountryAggregatesPlayAggregatesCountriesGet(request)`

- **OnSuccess**: <code>[DevCountryAggregatesResponse](src/models/dev-country-aggregates-response.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getCountryAggregatesPlayAggregatesCountriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevCountryAggregatesResponse, GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError&gt;</code>, with `result.value` of type <code>[DevCountryAggregatesResponse](src/models/dev-country-aggregates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeveloperPlayDevelopersIdGet(request: GooglePlay.GetDeveloperPlayDevelopersIdGetRequest, options?: RequestOptions): ApiPromise&lt;PlayDev, GooglePlay.GetDeveloperPlayDevelopersIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google Play developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getDeveloperPlayDevelopersIdGet({ id: "6891936352065498609" });
  // TODO: Handle 'response' of type PlayDev
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetDeveloperPlayDevelopersIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getDeveloperPlayDevelopersIdGet({ id: "6891936352065498609" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayDev
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Developer ID |
| <code>fields?</code> | <code>string</code> | Fields to return separated by comma(,) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getDeveloperPlayDevelopersIdGet(request)`

- **OnSuccess**: <code>[PlayDev](src/models/play-dev.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetDeveloperPlayDevelopersIdGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getDeveloperPlayDevelopersIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayDev, GooglePlay.GetDeveloperPlayDevelopersIdGetError&gt;</code>, with `result.value` of type <code>[PlayDev](src/models/play-dev.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEventsPlayLiveopsGet2(request: GooglePlay.GetEventsPlayLiveopsGet2Request, options?: RequestOptions): ApiPromise&lt;Event[], GooglePlay.GetEventsPlayLiveopsGet2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getEventsPlayLiveopsGet2({ app: "some example string" });
  // TODO: Handle 'response' of type Event[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetEventsPlayLiveopsGet2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay.getEventsPlayLiveopsGet2({ app: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Event[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app</code> | <code>string</code> | - |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | -<br>**Default**: "US" |
| <code>freshness?</code> | <code>[CacheTime](src/models/cache-time.ts)</code> | -<br>**Default**: "7d" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getEventsPlayLiveopsGet2(request)`

- **OnSuccess**: <code>[Event](src/models/event.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetEventsPlayLiveopsGet2Error](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getEventsPlayLiveopsGet2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Event[], GooglePlay.GetEventsPlayLiveopsGet2Error&gt;</code>, with `result.value` of type <code>[Event](src/models/event.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFilterSearchPlayAppsQueryPost(request?: GooglePlay.GetFilterSearchPlayAppsQueryPostRequest, options?: RequestOptions): ApiPromise&lt;PlayAppListResponse, GooglePlay.GetFilterSearchPlayAppsQueryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Category|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|feature_graphic |string |- |Feature graphic|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|downloads_daily |integer |+ |Daily Installs|
|downloads_exact |integer |+ |Total Installs|
|downloads_mark |integer |+ |Installs|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|editorial |boolean |- |Editor's choise|
|hosts |[]string |- |Hosts|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|editorial|boolean|Editor's choise|
|iap|boolean|Inapp|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
|downloads_mark|integer|100, 500, 1000, 5000, 10000 etc|
|downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
|downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|similar_apps|string|"com.twitter.android" - Twitter similar apps|
|reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|hosts|string||
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getFilterSearchPlayAppsQueryPost({
    body: {
      limit: 2,
      sort: PlaySortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "6523013212965523194" },
    },
  });
  // TODO: Handle 'response' of type PlayAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetFilterSearchPlayAppsQueryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getFilterSearchPlayAppsQueryPost({
    body: {
      limit: 2,
      sort: PlaySortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "6523013212965523194" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PlayAppSearchBody](src/models/play-app-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getFilterSearchPlayAppsQueryPost(request)`

- **OnSuccess**: <code>[PlayAppListResponse](src/models/play-app-list-response.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetFilterSearchPlayAppsQueryPostError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getFilterSearchPlayAppsQueryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayAppListResponse, GooglePlay.GetFilterSearchPlayAppsQueryPostError&gt;</code>, with `result.value` of type <code>[PlayAppListResponse](src/models/play-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListingPlayAppsIdListingGet(request: GooglePlay.GetListingPlayAppsIdListingGetRequest, options?: RequestOptions): ApiPromise&lt;PlayListing, GooglePlay.GetListingPlayAppsIdListingGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the store listing of one app for a country and language exactly as Google Play serves it: title, short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play Console accepts can be requested. The listing is crawled on demand and kept; `freshness` sets how old a kept listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass `wait=false` to get the 202 immediately. Repeated requests for the same listing share one crawl. `translated` tells whether Google Play machine-translated the texts instead of showing a translation the developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getListingPlayAppsIdListingGet({ id: "com.twitter.android" });
  // TODO: Handle 'response' of type PlayListing
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetListingPlayAppsIdListingGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getListingPlayAppsIdListingGet({ id: "com.twitter.android" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayListing
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country of the listing (Google Play `gl`). By default: US.<br>**Default**: "US" |
| <code>language?</code> | <code>[PlayListingLanguages](src/models/play-listing-languages.ts)</code> | Language of the listing (Google Play `hl`), any Google Play Console locale. By default: en_US.<br>**Default**: "en_US" |
| <code>freshness?</code> | <code>[CacheTime](src/models/cache-time.ts)</code> | How old a kept listing may be before it is crawled again.<br>**Default**: "1d" |
| <code>wait?</code> | <code>boolean</code> | Wait for a running crawl, or answer 202 right away.<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getListingPlayAppsIdListingGet(request)`

- **OnSuccess**: <code>[PlayListing](src/models/play-listing.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetListingPlayAppsIdListingGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getListingPlayAppsIdListingGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayListing, GooglePlay.GetListingPlayAppsIdListingGetError&gt;</code>, with `result.value` of type <code>[PlayListing](src/models/play-listing.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlayAppCountriesPlayInfoCountriesGet(options?: RequestOptions): ApiPromise&lt;StoreCountries, GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available countries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getPlayAppCountriesPlayInfoCountriesGet();
  // TODO: Handle 'response' of type StoreCountries
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay.getPlayAppCountriesPlayInfoCountriesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoreCountries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getPlayAppCountriesPlayInfoCountriesGet()`

- **OnSuccess**: <code>[StoreCountries](src/models/store-countries.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getPlayAppCountriesPlayInfoCountriesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoreCountries, GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError&gt;</code>, with `result.value` of type <code>[StoreCountries](src/models/store-countries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlayAppLanguagesPlayInfoLanguagesGet(options?: RequestOptions): ApiPromise&lt;StoreLanguages, GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available languages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getPlayAppLanguagesPlayInfoLanguagesGet();
  // TODO: Handle 'response' of type StoreLanguages
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay.getPlayAppLanguagesPlayInfoLanguagesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoreLanguages
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getPlayAppLanguagesPlayInfoLanguagesGet()`

- **OnSuccess**: <code>[StoreLanguages](src/models/store-languages.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getPlayAppLanguagesPlayInfoLanguagesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoreLanguages, GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError&gt;</code>, with `result.value` of type <code>[StoreLanguages](src/models/store-languages.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlayRankingsPlayRankingsGet(request?: GooglePlay.GetPlayRankingsPlayRankingsGetRequest, options?: RequestOptions): ApiPromise&lt;ApiResponseListModelsResponsesResponsePlayRankingItem, GooglePlay.GetPlayRankingsPlayRankingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play chart positions over a date range, filtered by country, category and collection. One row per app per chart per day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getPlayRankingsPlayRankingsGet();
  // TODO: Handle 'response' of type ApiResponseListModelsResponsesResponsePlayRankingItem
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetPlayRankingsPlayRankingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay.getPlayRankingsPlayRankingsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiResponseListModelsResponsesResponsePlayRankingItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateStart?</code> | <code>string</code> (date) | Start date (YYYY-MM-DD) |
| <code>dateEnd?</code> | <code>string</code> (date) | End date (YYYY-MM-DD) |
| <code>app?</code> | <code>string[]</code> | App IDs (comma-separated) |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)[]</code> | Country codes (comma-separated) |
| <code>category?</code> | <code>[PlayCategory](src/models/play-category.ts)[]</code> | App categories (comma-separated) |
| <code>collection?</code> | <code>[Collection](src/models/collection.ts)[]</code> | Collection types (comma-separated) |
| <code>rankStart?</code> | <code>number</code> | Minimum rank |
| <code>rankEnd?</code> | <code>number</code> | Maximum rank |
| <code>limit?</code> | <code>number</code> | Count per page<br>**Default**: 10 |
| <code>page?</code> | <code>number</code> | Page<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getPlayRankingsPlayRankingsGet(request)`

- **OnSuccess**: <code>[ApiResponseListModelsResponsesResponsePlayRankingItem](src/models/api-response-list-models-responses-response-play-ranking-item.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetPlayRankingsPlayRankingsGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getPlayRankingsPlayRankingsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiResponseListModelsResponsesResponsePlayRankingItem, GooglePlay.GetPlayRankingsPlayRankingsGetError&gt;</code>, with `result.value` of type <code>[ApiResponseListModelsResponsesResponsePlayRankingItem](src/models/api-response-list-models-responses-response-play-ranking-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecrawlPlayAppsIdRecrawlGet(request: GooglePlay.GetRecrawlPlayAppsIdRecrawlGetRequest, options?: RequestOptions): ApiPromise&lt;undefined, GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.googlePlay.getRecrawlPlayAppsIdRecrawlGet({ id: "com.twitter.android" });
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getRecrawlPlayAppsIdRecrawlGet({ id: "com.twitter.android" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | Country for which return data. By default: US.<br>**Default**: "US" |
| <code>language?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Language of meta data. By default: en_US<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getRecrawlPlayAppsIdRecrawlGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getRecrawlPlayAppsIdRecrawlGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReviewsPlayAppsIdReviewsGet(request: GooglePlay.GetReviewsPlayAppsIdReviewsGetRequest, options?: RequestOptions): ApiPromise&lt;PlayReview[], GooglePlay.GetReviewsPlayAppsIdReviewsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so `country` and `language` change which set is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getReviewsPlayAppsIdReviewsGet({
    id: "com.twitter.android",
    language: AppLanguages.EnUs,
    sort: "stars,-likes",
  });
  // TODO: Handle 'response' of type PlayReview[]
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetReviewsPlayAppsIdReviewsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getReviewsPlayAppsIdReviewsGet({
    id: "com.twitter.android",
    language: AppLanguages.EnUs,
    sort: "stars,-likes",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayReview[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>language</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | Review language |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | Count of reviews per page<br>**Default**: 10 |
| <code>sort?</code> | <code>string</code> | Sort params separated by comma(,) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getReviewsPlayAppsIdReviewsGet(request)`

- **OnSuccess**: <code>[PlayReview](src/models/play-review.ts)[]</code>
- **OnError**: throws <code>[GooglePlay.GetReviewsPlayAppsIdReviewsGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getReviewsPlayAppsIdReviewsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayReview[], GooglePlay.GetReviewsPlayAppsIdReviewsGetError&gt;</code>, with `result.value` of type <code>[PlayReview](src/models/play-review.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimilarPlayAppsSimilarPost(request?: GooglePlay.GetSimilarPlayAppsSimilarPostRequest, options?: RequestOptions): ApiPromise&lt;PlayAppListResponse, GooglePlay.GetSimilarPlayAppsSimilarPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps Google Play lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getSimilarPlayAppsSimilarPost({
    body: {
      limit: 2,
      sort: PlaySortEnum.DownloadsMonth2,
      fields: ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
      filter: { published: true },
      id: "com.whatsapp",
      link: SimilarEnum.To,
    },
  });
  // TODO: Handle 'response' of type PlayAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetSimilarPlayAppsSimilarPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getSimilarPlayAppsSimilarPost({
    body: {
      limit: 2,
      sort: PlaySortEnum.DownloadsMonth2,
      fields: ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
      filter: { published: true },
      id: "com.whatsapp",
      link: SimilarEnum.To,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlayAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SimilarSearchBody](src/models/similar-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getSimilarPlayAppsSimilarPost(request)`

- **OnSuccess**: <code>[PlayAppListResponse](src/models/play-app-list-response.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetSimilarPlayAppsSimilarPostError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getSimilarPlayAppsSimilarPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlayAppListResponse, GooglePlay.GetSimilarPlayAppsSimilarPostError&gt;</code>, with `result.value` of type <code>[PlayAppListResponse](src/models/play-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSuggestsPlaySuggestionsGet(request: GooglePlay.GetSuggestsPlaySuggestionsGetRequest, options?: RequestOptions): ApiPromise&lt;Suggest, GooglePlay.GetSuggestsPlaySuggestionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getSuggestsPlaySuggestionsGet({ q: "some example string" });
  // TODO: Handle 'response' of type Suggest
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetSuggestsPlaySuggestionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getSuggestsPlaySuggestionsGet({ q: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Suggest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | - |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | -<br>**Default**: "US" |
| <code>lang?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | -<br>**Default**: "en_US" |
| <code>freshness?</code> | <code>[CacheTime](src/models/cache-time.ts)</code> | -<br>**Default**: "7d" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getSuggestsPlaySuggestionsGet(request)`

- **OnSuccess**: <code>[Suggest](src/models/suggest.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetSuggestsPlaySuggestionsGetError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getSuggestsPlaySuggestionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Suggest, GooglePlay.GetSuggestsPlaySuggestionsGetError&gt;</code>, with `result.value` of type <code>[Suggest](src/models/suggest.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSummaryPlayAppsSummaryPost(request: GooglePlay.GetSummaryPlayAppsSummaryPostRequest, options?: RequestOptions): ApiPromise&lt;SummaryResponse, GooglePlay.GetSummaryPlayAppsSummaryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /play/apps/query`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.googlePlay.getSummaryPlayAppsSummaryPost({
    body: { filter: { published: true } },
  });
  // TODO: Handle 'response' of type SummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type GooglePlay.GetSummaryPlayAppsSummaryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.googlePlay
  .getSummaryPlayAppsSummaryPost({ body: { filter: { published: true } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummaryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SummarySearchBody](src/models/summary-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.googlePlay.getSummaryPlayAppsSummaryPost(request)`

- **OnSuccess**: <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: throws <code>[GooglePlay.GetSummaryPlayAppsSummaryPostError](src/resources/google-play.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.googlePlay.getSummaryPlayAppsSummaryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummaryResponse, GooglePlay.GetSummaryPlayAppsSummaryPostError&gt;</code>, with `result.value` of type <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>createSearchJobsSearchPost(request: Jobs.CreateSearchJobsSearchPostRequest, options?: RequestOptions): ApiPromise&lt;SearchResult, Jobs.CreateSearchJobsSearchPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a keyword crawl job for one search term in one store and country. Returns the created job immediately; poll `GET /jobs/search` with the returned id to collect the results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.createSearchJobsSearchPost({
    body: { store: "play", term: "spotify", country: "US", lang: "en_US", idUser: "spotify", limit: 5 },
  });
  // TODO: Handle 'response' of type SearchResult
} catch (err) {
  // TODO: Handle 'err' of type Jobs.CreateSearchJobsSearchPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .createSearchJobsSearchPost({
    body: { store: "play", term: "spotify", country: "US", lang: "en_US", idUser: "spotify", limit: 5 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchCreate](src/models/search-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.createSearchJobsSearchPost(request)`

- **OnSuccess**: <code>[SearchResult](src/models/search-result.ts)</code>
- **OnError**: throws <code>[Jobs.CreateSearchJobsSearchPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.createSearchJobsSearchPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResult, Jobs.CreateSearchJobsSearchPostError&gt;</code>, with `result.value` of type <code>[SearchResult](src/models/search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSearchJobsSearchGet(request?: Jobs.GetSearchJobsSearchGetRequest, options?: RequestOptions): ApiPromise&lt;SearchResult[], Jobs.GetSearchJobsSearchGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window. Each result carries the job's current state and, once finished, its results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getSearchJobsSearchGet({
    updatedGte: new Date(Date.UTC(2020, 0, 1, 0, 0, 0)),
    updatedLte: new Date(Date.UTC(2022, 0, 1, 0, 0, 0)),
  });
  // TODO: Handle 'response' of type SearchResult[]
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetSearchJobsSearchGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getSearchJobsSearchGet({
    updatedGte: new Date(Date.UTC(2020, 0, 1, 0, 0, 0)),
    updatedLte: new Date(Date.UTC(2022, 0, 1, 0, 0, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>store?</code> | <code>[Store](src/models/store.ts)</code> | - |
| <code>term?</code> | <code>string</code> | - |
| <code>idUser?</code> | <code>string</code> | - |
| <code>country?</code> | <code>string</code> | - |
| <code>searchId?</code> | <code>string</code> | - |
| <code>updatedGte?</code> | <code>Date</code> (date-time) | - |
| <code>updatedLte?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getSearchJobsSearchGet(request)`

- **OnSuccess**: <code>[SearchResult](src/models/search-result.ts)[]</code>
- **OnError**: throws <code>[Jobs.GetSearchJobsSearchGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getSearchJobsSearchGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResult[], Jobs.GetSearchJobsSearchGetError&gt;</code>, with `result.value` of type <code>[SearchResult](src/models/search-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SearchFilterV2

> Source: [SearchFilterV2](src/resources/search-filter-v2.ts)

<details>
<summary><code>getFilterSearchIosAppsQueryPost2(request?: SearchFilterV2.GetFilterSearchIosAppsQueryPost2Request, options?: RequestOptions): ApiPromise&lt;IosAppListResponse, SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Full Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Сategory|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
|screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|copyright |string |- |Copyright|
|seller |string |- |Seller|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchFilterV2.getFilterSearchIosAppsQueryPost2({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "324684583" },
    },
  });
  // TODO: Handle 'response' of type IosAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchFilterV2
  .getFilterSearchIosAppsQueryPost2({
    body: {
      limit: 2,
      sort: IosSortEnum.DownloadsMonth2,
      fields: [
        "id",
        "name",
        "developer_name",
        "category",
        "downloads_month",
        "revenue_month",
        "rating_value",
      ],
      filter: { published: true, developerId: "324684583" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IosAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[IosAppSearchBody](src/models/ios-app-search-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchFilterV2.getFilterSearchIosAppsQueryPost2(request)`

- **OnSuccess**: <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: throws <code>[SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error](src/resources/search-filter-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchFilterV2.getFilterSearchIosAppsQueryPost2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IosAppListResponse, SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error&gt;</code>, with `result.value` of type <code>[IosAppListResponse](src/models/ios-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](src/resources/suggestions.ts)

<details>
<summary><code>getSuggestsPlaySuggestionsGet2(request: Suggestions.GetSuggestsPlaySuggestionsGet2Request, options?: RequestOptions): ApiPromise&lt;Suggest, Suggestions.GetSuggestsPlaySuggestionsGet2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.suggestions.getSuggestsPlaySuggestionsGet2({ q: "some example string" });
  // TODO: Handle 'response' of type Suggest
} catch (err) {
  // TODO: Handle 'err' of type Suggestions.GetSuggestsPlaySuggestionsGet2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.suggestions
  .getSuggestsPlaySuggestionsGet2({ q: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Suggest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | - |
| <code>country?</code> | <code>[AppCountries](src/models/app-countries.ts)</code> | -<br>**Default**: "US" |
| <code>lang?</code> | <code>[AppLanguages](src/models/app-languages.ts)</code> | -<br>**Default**: "en_US" |
| <code>freshness?</code> | <code>[CacheTime](src/models/cache-time.ts)</code> | -<br>**Default**: "7d" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.suggestions.getSuggestsPlaySuggestionsGet2(request)`

- **OnSuccess**: <code>[Suggest](src/models/suggest.ts)</code>
- **OnError**: throws <code>[Suggestions.GetSuggestsPlaySuggestionsGet2Error](src/resources/suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.suggestions.getSuggestsPlaySuggestionsGet2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Suggest, Suggestions.GetSuggestsPlaySuggestionsGet2Error&gt;</code>, with `result.value` of type <code>[Suggest](src/models/suggest.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AppstoreSpyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

