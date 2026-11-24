# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AppstoreSpyClient](appstore_spy/client.py)

## AppStore

> Source: [AppStore](appstore_spy/apis/app_store.py)

<details>
<summary><code>def dev_filter_search_ios_developers_query_post(body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosDevListResponse, DevFilterSearchIosDevelopersQueryPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches App Store developers by a structured JSON filter, with paging and sorting. `GET /ios/developers` covers the free-text equivalent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.dev_filter_search_ios_developers_query_post(
    IosDevSearchBody(
        limit=2,
        sort=DevSortEnum.REVENUE2,
        fields=["id", "name", "seller_name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
        filter=SearchFilterDevIos(hq_country=["SE"], type_=TypeEnum.APP, total_apps=ValueRange(gte=2)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosDevListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevFilterSearchIosDevelopersQueryPostErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.dev_filter_search_ios_developers_query_post(
    IosDevSearchBody(
        limit=2,
        sort=DevSortEnum.REVENUE2,
        fields=["id", "name", "seller_name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
        filter=SearchFilterDevIos(hq_country=["SE"], type_=TypeEnum.APP, total_apps=ValueRange(gte=2)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosDevListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevFilterSearchIosDevelopersQueryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosDevSearchBody](appstore_spy/models/ios_dev_search_body.py) \| [IosDevSearchBodyDict](appstore_spy/models/ios_dev_search_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosDevListResponse](appstore_spy/models/ios_dev_list_response.py), [DevFilterSearchIosDevelopersQueryPostErrorBody](appstore_spy/errors/dev_filter_search_ios_developers_query_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosDevListResponse](appstore_spy/models/ios_dev_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DevFilterSearchIosDevelopersQueryPostErrorBody](appstore_spy/errors/dev_filter_search_ios_developers_query_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosDevelopersQuery401Error1](appstore_spy/models/ios_developers_query401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dev_search_ios_developers_get(*, q: str | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IosDev], DevSearchIosDevelopersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /ios/developers/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.dev_search_ios_developers_get(
    q="hq_country:US", sort="-total_apps,-installs"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosDev]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevSearchIosDevelopersGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.dev_search_ios_developers_get(
    q="hq_country:US", sort="-total_apps,-installs"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosDev]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevSearchIosDevelopersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Query for search<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[IosDev](appstore_spy/models/ios_dev.py)&#93;, [DevSearchIosDevelopersGetErrorBody](appstore_spy/errors/dev_search_ios_developers_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IosDev](appstore_spy/models/ios_dev.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[DevSearchIosDevelopersGetErrorBody](appstore_spy/errors/dev_search_ios_developers_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosDevelopers401Error1](appstore_spy/models/ios_developers401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_app_details_ios_apps_id_get(id_: str, *, fields: str | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosApp, GetAppDetailsIosAppsIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_app_details_ios_apps_id_get("333903271")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppDetailsIosAppsIdGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_app_details_ios_apps_id_get("333903271")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppDetailsIosAppsIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for which return data. By default: US.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Language of meta data. By default: store default language.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosApp](appstore_spy/models/ios_app.py), [GetAppDetailsIosAppsIdGetErrorBody](appstore_spy/errors/get_app_details_ios_apps_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosApp](appstore_spy/models/ios_app.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppDetailsIosAppsIdGetErrorBody](appstore_spy/errors/get_app_details_ios_apps_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosApps401Error1](appstore_spy/models/ios_apps401_error1.py)</code> |
| 402 | <code>str</code> |
| 403, 429 | <code>[Error](appstore_spy/models/error.py)</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_app_search_ios_apps_get(*, q: str | None = None, country: AppCountriesOrStr | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IosApp], GetAppSearchIosAppsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, downloads or category, use `POST /ios/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_app_search_ios_apps_get(q="Twitter", sort="-revenue")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosApp]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppSearchIosAppsGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_app_search_ios_apps_get(q="Twitter", sort="-revenue")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosApp]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppSearchIosAppsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Word or phrase for search.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for specific country fields. Default - US.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[IosApp](appstore_spy/models/ios_app.py)&#93;, [GetAppSearchIosAppsGetErrorBody](appstore_spy/errors/get_app_search_ios_apps_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IosApp](appstore_spy/models/ios_app.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppSearchIosAppsGetErrorBody](appstore_spy/errors/get_app_search_ios_apps_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosApps401Error1](appstore_spy/models/ios_apps401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apps_estimates_ios_developers_id_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, fill_gaps: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_apps_estimates_ios_developers_id_estimates_get("296415947")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DevAppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_apps_estimates_ios_developers_id_estimates_get("296415947")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DevAppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Developer's ids to return separated by comma(,) |
| <code>start</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>end</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>fill_gaps</code> | <code>bool \| None</code> | Return every month from the developer's earliest to its latest month with estimates within start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is not read as a zero. Off by default, which leaves such months out.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[DevAppsEstimates](appstore_spy/models/dev_apps_estimates.py)&#93;, [GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_ios_developers_id_estimates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DevAppsEstimates](appstore_spy/models/dev_apps_estimates.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_ios_developers_id_estimates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosDevelopersEstimates401Error1](appstore_spy/models/ios_developers_estimates401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apps_estimates_ios_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[AppsEstimates], GetAppsEstimatesIosEstimatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get App Store apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_apps_estimates_ios_estimates_get("333903271")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesIosEstimatesGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_apps_estimates_ios_estimates_get("333903271")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesIosEstimatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370, URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422 |
| <code>start</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>end</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[AppsEstimates](appstore_spy/models/apps_estimates.py)&#93;, [GetAppsEstimatesIosEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_ios_estimates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[AppsEstimates](appstore_spy/models/apps_estimates.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppsEstimatesIosEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_ios_estimates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosEstimates401Error1](appstore_spy/models/ios_estimates401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_country_aggregates_ios_aggregates_countries_get(*, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesIosAggregatesCountriesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all App Store developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_country_aggregates_ios_aggregates_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DevCountryAggregatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountryAggregatesIosAggregatesCountriesGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_country_aggregates_ios_aggregates_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DevCountryAggregatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountryAggregatesIosAggregatesCountriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_type</code> | <code>[TypeEnumOrStr](appstore_spy/models/enums/type_enum.py) \| None</code> | Restrict to developers with this dominant category type<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[DevCountryAggregatesResponse](appstore_spy/models/dev_country_aggregates_response.py), [GetCountryAggregatesIosAggregatesCountriesGetErrorBody](appstore_spy/errors/get_country_aggregates_ios_aggregates_countries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DevCountryAggregatesResponse](appstore_spy/models/dev_country_aggregates_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetCountryAggregatesIosAggregatesCountriesGetErrorBody](appstore_spy/errors/get_country_aggregates_ios_aggregates_countries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAggregatesCountries401Error1](appstore_spy/models/ios_aggregates_countries401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_developer_ios_developers_id_get(id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosDev, GetDeveloperIosDevelopersIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the App Store developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_developer_ios_developers_id_get("1641486560")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosDev
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeveloperIosDevelopersIdGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_developer_ios_developers_id_get("1641486560")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosDev
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeveloperIosDevelopersIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Developer ID |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosDev](appstore_spy/models/ios_dev.py), [GetDeveloperIosDevelopersIdGetErrorBody](appstore_spy/errors/get_developer_ios_developers_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosDev](appstore_spy/models/ios_dev.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetDeveloperIosDevelopersIdGetErrorBody](appstore_spy/errors/get_developer_ios_developers_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosDevelopers401Error1](appstore_spy/models/ios_developers401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_filter_search_ios_apps_query_post(*, body: IosAppSearchBody | IosAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPostErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_filter_search_ios_apps_query_post(
    body=IosAppSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterIos(published=True, developer_id="324684583"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchIosAppsQueryPostErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_filter_search_ios_apps_query_post(
    body=IosAppSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterIos(published=True, developer_id="324684583"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchIosAppsQueryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosAppSearchBody](appstore_spy/models/ios_app_search_body.py) \| [IosAppSearchBodyDict](appstore_spy/models/ios_app_search_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosAppListResponse](appstore_spy/models/ios_app_list_response.py), [GetFilterSearchIosAppsQueryPostErrorBody](appstore_spy/errors/get_filter_search_ios_apps_query_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosAppListResponse](appstore_spy/models/ios_app_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetFilterSearchIosAppsQueryPostErrorBody](appstore_spy/errors/get_filter_search_ios_apps_query_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsQuery401Error1](appstore_spy/models/ios_apps_query401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ios_rankings_ios_rankings_get(*, date_start: Date | None = None, date_end: Date | None = None, app: list[int] | None = None, platform: list[IosPlatformOrStr] | None = None, country: list[AppCountriesOrStr] | None = None, category: list[IosCategoryOrStr] | None = None, collection: list[CollectionOrStr] | None = None, rank_start: int | None = None, rank_end: int | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseListModelsResponsesResponseIosRankingItem, GetIosRankingsIosRankingsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns App Store chart positions over a date range, filtered by storefront, category, collection and platform. One row per app per chart per day.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_ios_rankings_ios_rankings_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseListModelsResponsesResponseIosRankingItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIosRankingsIosRankingsGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_ios_rankings_ios_rankings_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseListModelsResponsesResponseIosRankingItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIosRankingsIosRankingsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date_start</code> | <code>Date \| None</code> | Start date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>date_end</code> | <code>Date \| None</code> | End date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>app</code> | <code>list&#91;int&#93; \| None</code> | App IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>list&#91;[IosPlatformOrStr](appstore_spy/models/enums/ios_platform.py)&#93; \| None</code> | Platforms (iPhone/iPad, comma-separated)<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py)&#93; \| None</code> | Country codes (comma-separated)<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;[IosCategoryOrStr](appstore_spy/models/enums/ios_category.py)&#93; \| None</code> | App categories (comma-separated)<br>**Default**: <code>None</code> |
| <code>collection</code> | <code>list&#91;[CollectionOrStr](appstore_spy/models/enums/collection.py)&#93; \| None</code> | Collection types (comma-separated)<br>**Default**: <code>None</code> |
| <code>rank_start</code> | <code>int \| None</code> | Minimum rank<br>**Default**: <code>None</code> |
| <code>rank_end</code> | <code>int \| None</code> | Maximum rank<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[ApiResponseListModelsResponsesResponseIosRankingItem](appstore_spy/models/api_response_list_models_responses_response_ios_ranking_item.py), [GetIosRankingsIosRankingsGetErrorBody](appstore_spy/errors/get_ios_rankings_ios_rankings_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseListModelsResponsesResponseIosRankingItem](appstore_spy/models/api_response_list_models_responses_response_ios_ranking_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetIosRankingsIosRankingsGetErrorBody](appstore_spy/errors/get_ios_rankings_ios_rankings_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosRankings401Error1](appstore_spy/models/ios_rankings401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_play_app_countries_ios_info_countries_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoreCountries, GetPlayAppCountriesIosInfoCountriesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of App Store storefronts available as a `country` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_play_app_countries_ios_info_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreCountries
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppCountriesIosInfoCountriesGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_play_app_countries_ios_info_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreCountries
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppCountriesIosInfoCountriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[StoreCountries](appstore_spy/models/store_countries.py), [GetPlayAppCountriesIosInfoCountriesGetErrorBody](appstore_spy/errors/get_play_app_countries_ios_info_countries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoreCountries](appstore_spy/models/store_countries.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetPlayAppCountriesIosInfoCountriesGetErrorBody](appstore_spy/errors/get_play_app_countries_ios_info_countries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosInfoCountries401Error1](appstore_spy/models/ios_info_countries401_error1.py)</code> |
| 402 | <code>str</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_play_app_languages_ios_info_languages_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoreLanguages, GetPlayAppLanguagesIosInfoLanguagesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of metadata languages available as a `language` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_play_app_languages_ios_info_languages_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppLanguagesIosInfoLanguagesGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_play_app_languages_ios_info_languages_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppLanguagesIosInfoLanguagesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[StoreLanguages](appstore_spy/models/store_languages.py), [GetPlayAppLanguagesIosInfoLanguagesGetErrorBody](appstore_spy/errors/get_play_app_languages_ios_info_languages_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoreLanguages](appstore_spy/models/store_languages.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetPlayAppLanguagesIosInfoLanguagesGetErrorBody](appstore_spy/errors/get_play_app_languages_ios_info_languages_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosInfoLanguages401Error1](appstore_spy/models/ios_info_languages401_error1.py)</code> |
| 402 | <code>str</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recrawl_ios_apps_id_recrawl_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: AppLanguagesOrStr | None = AppLanguages.EN_US, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetRecrawlIosAppsIdRecrawlGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_recrawl_ios_apps_id_recrawl_get("333903271")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecrawlIosAppsIdRecrawlGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_recrawl_ios_apps_id_recrawl_get("333903271")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecrawlIosAppsIdRecrawlGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for which return data. By default: US.<br>**Default**: <code>AppCountries.US</code> |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Language of meta data. By default: en_US<br>**Default**: <code>AppLanguages.EN_US</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;None, [GetRecrawlIosAppsIdRecrawlGetErrorBody](appstore_spy/errors/get_recrawl_ios_apps_id_recrawl_get_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetRecrawlIosAppsIdRecrawlGetErrorBody](appstore_spy/errors/get_recrawl_ios_apps_id_recrawl_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsRecrawl401Error1](appstore_spy/models/ios_apps_recrawl401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_reviews_ios_apps_id_reviews_get(id_: str, *, country: AppCountriesOrStr | None = None, fields: str | None = None, limit: int | None = 10, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IosReview], GetReviewsIosAppsIdReviewsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single App Store app. Reviews are storefront-specific, so `country` changes which set is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_reviews_ios_apps_id_reviews_get("333903271", sort="rating,-date")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosReview]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewsIosAppsIdReviewsGetErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_reviews_ios_apps_id_reviews_get(
    "333903271", sort="rating,-date"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IosReview]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewsIosAppsIdReviewsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | App storefront<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count of reviews per page<br>**Default**: <code>10</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[IosReview](appstore_spy/models/ios_review.py)&#93;, [GetReviewsIosAppsIdReviewsGetErrorBody](appstore_spy/errors/get_reviews_ios_apps_id_reviews_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IosReview](appstore_spy/models/ios_review.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetReviewsIosAppsIdReviewsGetErrorBody](appstore_spy/errors/get_reviews_ios_apps_id_reviews_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsReviews401Error1](appstore_spy/models/ios_apps_reviews401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_similar_ios_apps_similar_post(*, body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosAppListResponse, GetSimilarIosAppsSimilarPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps App Store lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_similar_ios_apps_similar_post(
    body=IosSimilarSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
        filter=SearchFilterIos(published=True),
        id="310633997",
        link=SimilarEnum.TO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSimilarIosAppsSimilarPostErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_similar_ios_apps_similar_post(
    body=IosSimilarSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
        filter=SearchFilterIos(published=True),
        id="310633997",
        link=SimilarEnum.TO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSimilarIosAppsSimilarPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosSimilarSearchBody](appstore_spy/models/ios_similar_search_body.py) \| [IosSimilarSearchBodyDict](appstore_spy/models/ios_similar_search_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosAppListResponse](appstore_spy/models/ios_app_list_response.py), [GetSimilarIosAppsSimilarPostErrorBody](appstore_spy/errors/get_similar_ios_apps_similar_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosAppListResponse](appstore_spy/models/ios_app_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSimilarIosAppsSimilarPostErrorBody](appstore_spy/errors/get_similar_ios_apps_similar_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsSimilar401Error1](appstore_spy/models/ios_apps_similar401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_summary_ios_apps_summary_post(body: IosSummarySearchBody | IosSummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummaryResponse, GetSummaryIosAppsSummaryPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /ios/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_store.with_raw_response.get_summary_ios_apps_summary_post(
    IosSummarySearchBody(filter=SearchFilterIos(published=True))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSummaryIosAppsSummaryPostErrorBody
```

**Async**

```python
result = await async_client.app_store.with_raw_response.get_summary_ios_apps_summary_post(
    IosSummarySearchBody(filter=SearchFilterIos(published=True))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSummaryIosAppsSummaryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosSummarySearchBody](appstore_spy/models/ios_summary_search_body.py) \| [IosSummarySearchBodyDict](appstore_spy/models/ios_summary_search_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[SummaryResponse](appstore_spy/models/summary_response.py), [GetSummaryIosAppsSummaryPostErrorBody](appstore_spy/errors/get_summary_ios_apps_summary_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummaryResponse](appstore_spy/models/summary_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSummaryIosAppsSummaryPostErrorBody](appstore_spy/errors/get_summary_ios_apps_summary_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsSummary401Error1](appstore_spy/models/ios_apps_summary401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](appstore_spy/apis/events.py)

<details>
<summary><code>def get_events_play_liveops_get(app: str, *, country: AppCountriesOrStr | None = AppCountries.US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Event], GetEventsPlayLiveopsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_events_play_liveops_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Event]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsPlayLiveopsGetErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_events_play_liveops_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Event]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsPlayLiveopsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppCountries.US</code> |
| <code>freshness</code> | <code>[CacheTimeOrStr](appstore_spy/models/enums/cache_time.py) \| None</code> | Value sent with the request.<br>**Default**: <code>CacheTime._7D</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[Event](appstore_spy/models/event.py)&#93;, [GetEventsPlayLiveopsGetErrorBody](appstore_spy/errors/get_events_play_liveops_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Event](appstore_spy/models/event.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetEventsPlayLiveopsGetErrorBody](appstore_spy/errors/get_events_play_liveops_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayLiveops401Error1](appstore_spy/models/play_liveops401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GooglePlay

> Source: [GooglePlay](appstore_spy/apis/google_play.py)

<details>
<summary><code>def dev_filter_search_play_developers_query_post(body: PlayDevSearchBody | PlayDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayDevListResponse, DevFilterSearchPlayDevelopersQueryPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Google Play developers by a structured JSON filter, with paging and sorting. `GET /play/developers` covers the free-text equivalent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.dev_filter_search_play_developers_query_post(
    PlayDevSearchBody(
        limit=2,
        sort=DevSortEnum.REVENUE2,
        fields=["id", "name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
        filter=SearchFilterDevPlay(hq_country=["SE"], type_=TypeEnum.APP, total_apps=ValueRange(gte=2)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayDevListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevFilterSearchPlayDevelopersQueryPostErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.dev_filter_search_play_developers_query_post(
    PlayDevSearchBody(
        limit=2,
        sort=DevSortEnum.REVENUE2,
        fields=["id", "name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
        filter=SearchFilterDevPlay(hq_country=["SE"], type_=TypeEnum.APP, total_apps=ValueRange(gte=2)),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayDevListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevFilterSearchPlayDevelopersQueryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlayDevSearchBody](appstore_spy/models/play_dev_search_body.py) \| [PlayDevSearchBodyDict](appstore_spy/models/play_dev_search_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayDevListResponse](appstore_spy/models/play_dev_list_response.py), [DevFilterSearchPlayDevelopersQueryPostErrorBody](appstore_spy/errors/dev_filter_search_play_developers_query_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayDevListResponse](appstore_spy/models/play_dev_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DevFilterSearchPlayDevelopersQueryPostErrorBody](appstore_spy/errors/dev_filter_search_play_developers_query_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayDevelopersQuery401Error1](appstore_spy/models/play_developers_query401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dev_search_play_developers_get(*, q: str | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PlayDev], DevSearchPlayDevelopersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /play/developers/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.dev_search_play_developers_get(
    q="hq_country:US", sort="-total_apps,-installs"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayDev]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevSearchPlayDevelopersGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.dev_search_play_developers_get(
    q="hq_country:US", sort="-total_apps,-installs"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayDev]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DevSearchPlayDevelopersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Query for search<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[PlayDev](appstore_spy/models/play_dev.py)&#93;, [DevSearchPlayDevelopersGetErrorBody](appstore_spy/errors/dev_search_play_developers_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PlayDev](appstore_spy/models/play_dev.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[DevSearchPlayDevelopersGetErrorBody](appstore_spy/errors/dev_search_play_developers_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayDevelopers401Error1](appstore_spy/models/play_developers401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_app_details_play_apps_id_get(id_: str, *, fields: str | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayApp, GetAppDetailsPlayAppsIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full Google Play listing for a single app, looked up by its bundle id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_app_details_play_apps_id_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppDetailsPlayAppsIdGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_app_details_play_apps_id_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayApp
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppDetailsPlayAppsIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for which return data. By default: US.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Language of meta data. By default: store default language.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayApp](appstore_spy/models/play_app.py), [GetAppDetailsPlayAppsIdGetErrorBody](appstore_spy/errors/get_app_details_play_apps_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayApp](appstore_spy/models/play_app.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppDetailsPlayAppsIdGetErrorBody](appstore_spy/errors/get_app_details_play_apps_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayApps401Error1](appstore_spy/models/play_apps401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_app_search_play_apps_get(*, q: str | None = None, published: bool | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PlayApp], GetAppSearchPlayAppsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, installs or category, use `POST /play/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_app_search_play_apps_get(q="X", sort="-installs_exact,-revenue")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayApp]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppSearchPlayAppsGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_app_search_play_apps_get(
    q="X", sort="-installs_exact,-revenue"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayApp]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppSearchPlayAppsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Word or phrase for search.<br>**Default**: <code>None</code> |
| <code>published</code> | <code>bool \| None</code> | Empty for all.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for specific country fields. Default - US.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Language of meta data. By default: store default language.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[PlayApp](appstore_spy/models/play_app.py)&#93;, [GetAppSearchPlayAppsGetErrorBody](appstore_spy/errors/get_app_search_play_apps_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PlayApp](appstore_spy/models/play_app.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppSearchPlayAppsGetErrorBody](appstore_spy/errors/get_app_search_play_apps_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayApps401Error1](appstore_spy/models/play_apps401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apps_estimates_play_developers_id_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, fill_gaps: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_apps_estimates_play_developers_id_estimates_get("7022973042396704692")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DevAppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_apps_estimates_play_developers_id_estimates_get(
    "7022973042396704692"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DevAppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Developer's id |
| <code>start</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>end</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>fill_gaps</code> | <code>bool \| None</code> | Return every month from the developer's earliest to its latest month with estimates within start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is not read as a zero. Off by default, which leaves such months out.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[DevAppsEstimates](appstore_spy/models/dev_apps_estimates.py)&#93;, [GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_play_developers_id_estimates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DevAppsEstimates](appstore_spy/models/dev_apps_estimates.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_play_developers_id_estimates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayDevelopersEstimates401Error1](appstore_spy/models/play_developers_estimates401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apps_estimates_play_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[AppsEstimates], GetAppsEstimatesPlayEstimatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_apps_estimates_play_estimates_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesPlayEstimatesGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_apps_estimates_play_estimates_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsEstimates]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsEstimatesPlayEstimatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play link (https://play.google.com/store/apps/details?id=com.example.app or market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace answers 422 |
| <code>start</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>end</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[AppsEstimates](appstore_spy/models/apps_estimates.py)&#93;, [GetAppsEstimatesPlayEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_play_estimates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[AppsEstimates](appstore_spy/models/apps_estimates.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppsEstimatesPlayEstimatesGetErrorBody](appstore_spy/errors/get_apps_estimates_play_estimates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayEstimates401Error1](appstore_spy/models/play_estimates401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apps_installs_daily_play_apps_id_installs_daily_get(id_: str, *, start: Date | None = None, end: Date | None = None, smooth: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[AppsDailyInstalls], GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_apps_installs_daily_play_apps_id_installs_daily_get(
    "com.twitter.android"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsDailyInstalls]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_apps_installs_daily_play_apps_id_installs_daily_get(
    "com.twitter.android"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AppsDailyInstalls]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it. An unrecognised id answers 422 |
| <code>start</code> | <code>Date \| None</code> | Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at `end`<br>**Default**: <code>None</code> |
| <code>end</code> | <code>Date \| None</code> | End date. Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>smooth</code> | <code>bool \| None</code> | Return `ipd` smoothed as on the website chart<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[AppsDailyInstalls](appstore_spy/models/apps_daily_installs.py)&#93;, [GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody](appstore_spy/errors/get_apps_installs_daily_play_apps_id_installs_daily_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[AppsDailyInstalls](appstore_spy/models/apps_daily_installs.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody](appstore_spy/errors/get_apps_installs_daily_play_apps_id_installs_daily_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsInstallsDaily401Error1](appstore_spy/models/play_apps_installs_daily401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_country_aggregates_play_aggregates_countries_get(*, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesPlayAggregatesCountriesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_country_aggregates_play_aggregates_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DevCountryAggregatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountryAggregatesPlayAggregatesCountriesGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_country_aggregates_play_aggregates_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DevCountryAggregatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCountryAggregatesPlayAggregatesCountriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_type</code> | <code>[TypeEnumOrStr](appstore_spy/models/enums/type_enum.py) \| None</code> | Restrict to developers with this dominant category type<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[DevCountryAggregatesResponse](appstore_spy/models/dev_country_aggregates_response.py), [GetCountryAggregatesPlayAggregatesCountriesGetErrorBody](appstore_spy/errors/get_country_aggregates_play_aggregates_countries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DevCountryAggregatesResponse](appstore_spy/models/dev_country_aggregates_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetCountryAggregatesPlayAggregatesCountriesGetErrorBody](appstore_spy/errors/get_country_aggregates_play_aggregates_countries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAggregatesCountries401Error1](appstore_spy/models/play_aggregates_countries401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_developer_play_developers_id_get(id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayDev, GetDeveloperPlayDevelopersIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google Play developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_developer_play_developers_id_get("6891936352065498609")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayDev
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeveloperPlayDevelopersIdGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_developer_play_developers_id_get("6891936352065498609")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayDev
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeveloperPlayDevelopersIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Developer ID |
| <code>fields</code> | <code>str \| None</code> | Fields to return separated by comma(,)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayDev](appstore_spy/models/play_dev.py), [GetDeveloperPlayDevelopersIdGetErrorBody](appstore_spy/errors/get_developer_play_developers_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayDev](appstore_spy/models/play_dev.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetDeveloperPlayDevelopersIdGetErrorBody](appstore_spy/errors/get_developer_play_developers_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayDevelopers401Error1](appstore_spy/models/play_developers401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_events_play_liveops_get2(app: str, *, country: AppCountriesOrStr | None = AppCountries.US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Event], GetEventsPlayLiveopsGet2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_events_play_liveops_get2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Event]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsPlayLiveopsGet2ErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_events_play_liveops_get2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Event]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEventsPlayLiveopsGet2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppCountries.US</code> |
| <code>freshness</code> | <code>[CacheTimeOrStr](appstore_spy/models/enums/cache_time.py) \| None</code> | Value sent with the request.<br>**Default**: <code>CacheTime._7D</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[Event](appstore_spy/models/event.py)&#93;, [GetEventsPlayLiveopsGet2ErrorBody](appstore_spy/errors/get_events_play_liveops_get2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Event](appstore_spy/models/event.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetEventsPlayLiveopsGet2ErrorBody](appstore_spy/errors/get_events_play_liveops_get2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayLiveops401Error1](appstore_spy/models/play_liveops401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_filter_search_play_apps_query_post(*, body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayAppListResponse, GetFilterSearchPlayAppsQueryPostErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_filter_search_play_apps_query_post(
    body=PlayAppSearchBody(
        limit=2,
        sort=PlaySortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterPlay(published=True, developer_id="6523013212965523194"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchPlayAppsQueryPostErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_filter_search_play_apps_query_post(
    body=PlayAppSearchBody(
        limit=2,
        sort=PlaySortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterPlay(published=True, developer_id="6523013212965523194"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchPlayAppsQueryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlayAppSearchBody](appstore_spy/models/play_app_search_body.py) \| [PlayAppSearchBodyDict](appstore_spy/models/play_app_search_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayAppListResponse](appstore_spy/models/play_app_list_response.py), [GetFilterSearchPlayAppsQueryPostErrorBody](appstore_spy/errors/get_filter_search_play_apps_query_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayAppListResponse](appstore_spy/models/play_app_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetFilterSearchPlayAppsQueryPostErrorBody](appstore_spy/errors/get_filter_search_play_apps_query_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsQuery401Error1](appstore_spy/models/play_apps_query401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_listing_play_apps_id_listing_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._1D, wait: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayListing, GetListingPlayAppsIdListingGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the store listing of one app for a country and language exactly as Google Play serves it: title, short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play Console accepts can be requested. The listing is crawled on demand and kept; `freshness` sets how old a kept listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass `wait=false` to get the 202 immediately. Repeated requests for the same listing share one crawl. `translated` tells whether Google Play machine-translated the texts instead of showing a translation the developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_listing_play_apps_id_listing_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayListing
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetListingPlayAppsIdListingGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_listing_play_apps_id_listing_get("com.twitter.android")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayListing
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetListingPlayAppsIdListingGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country of the listing (Google Play `gl`). By default: US.<br>**Default**: <code>AppCountries.US</code> |
| <code>language</code> | <code>[PlayListingLanguagesOrStr](appstore_spy/models/enums/play_listing_languages.py) \| None</code> | Language of the listing (Google Play `hl`), any Google Play Console locale. By default: en_US.<br>**Default**: <code>PlayListingLanguages.EN_US</code> |
| <code>freshness</code> | <code>[CacheTimeOrStr](appstore_spy/models/enums/cache_time.py) \| None</code> | How old a kept listing may be before it is crawled again.<br>**Default**: <code>CacheTime._1D</code> |
| <code>wait</code> | <code>bool \| None</code> | Wait for a running crawl, or answer 202 right away.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayListing](appstore_spy/models/play_listing.py), [GetListingPlayAppsIdListingGetErrorBody](appstore_spy/errors/get_listing_play_apps_id_listing_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayListing](appstore_spy/models/play_listing.py)</code> -- The listing

**On `Failure`**: `error` is <code>[GetListingPlayAppsIdListingGetErrorBody](appstore_spy/errors/get_listing_play_apps_id_listing_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsListing401Error1](appstore_spy/models/play_apps_listing401_error1.py)</code> |
| 402 | <code>str</code> |
| 404, 502 | <code>[RawError](appstore_spy/core/results.py)</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| 429 | <code>[PlayAppsListing429Error1](appstore_spy/models/play_apps_listing429_error1.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_play_app_countries_play_info_countries_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoreCountries, GetPlayAppCountriesPlayInfoCountriesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available countries.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_play_app_countries_play_info_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreCountries
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppCountriesPlayInfoCountriesGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_play_app_countries_play_info_countries_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreCountries
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppCountriesPlayInfoCountriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[StoreCountries](appstore_spy/models/store_countries.py), [GetPlayAppCountriesPlayInfoCountriesGetErrorBody](appstore_spy/errors/get_play_app_countries_play_info_countries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoreCountries](appstore_spy/models/store_countries.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetPlayAppCountriesPlayInfoCountriesGetErrorBody](appstore_spy/errors/get_play_app_countries_play_info_countries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayInfoCountries401Error1](appstore_spy/models/play_info_countries401_error1.py)</code> |
| 402 | <code>str</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_play_app_languages_play_info_languages_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoreLanguages, GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available languages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_play_app_languages_play_info_languages_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_play_app_languages_play_info_languages_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoreLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[StoreLanguages](appstore_spy/models/store_languages.py), [GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody](appstore_spy/errors/get_play_app_languages_play_info_languages_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoreLanguages](appstore_spy/models/store_languages.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody](appstore_spy/errors/get_play_app_languages_play_info_languages_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayInfoLanguages401Error1](appstore_spy/models/play_info_languages401_error1.py)</code> |
| 402 | <code>str</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_play_rankings_play_rankings_get(*, date_start: Date | None = None, date_end: Date | None = None, app: list[str] | None = None, country: list[AppCountriesOrStr] | None = None, category: list[PlayCategoryOrStr] | None = None, collection: list[CollectionOrStr] | None = None, rank_start: int | None = None, rank_end: int | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseListModelsResponsesResponsePlayRankingItem, GetPlayRankingsPlayRankingsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play chart positions over a date range, filtered by country, category and collection. One row per app per chart per day.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_play_rankings_play_rankings_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseListModelsResponsesResponsePlayRankingItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayRankingsPlayRankingsGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_play_rankings_play_rankings_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseListModelsResponsesResponsePlayRankingItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlayRankingsPlayRankingsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date_start</code> | <code>Date \| None</code> | Start date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>date_end</code> | <code>Date \| None</code> | End date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>app</code> | <code>list&#91;str&#93; \| None</code> | App IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py)&#93; \| None</code> | Country codes (comma-separated)<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;[PlayCategoryOrStr](appstore_spy/models/enums/play_category.py)&#93; \| None</code> | App categories (comma-separated)<br>**Default**: <code>None</code> |
| <code>collection</code> | <code>list&#91;[CollectionOrStr](appstore_spy/models/enums/collection.py)&#93; \| None</code> | Collection types (comma-separated)<br>**Default**: <code>None</code> |
| <code>rank_start</code> | <code>int \| None</code> | Minimum rank<br>**Default**: <code>None</code> |
| <code>rank_end</code> | <code>int \| None</code> | Maximum rank<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count per page<br>**Default**: <code>10</code> |
| <code>page</code> | <code>int \| None</code> | Page<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[ApiResponseListModelsResponsesResponsePlayRankingItem](appstore_spy/models/api_response_list_models_responses_response_play_ranking_item.py), [GetPlayRankingsPlayRankingsGetErrorBody](appstore_spy/errors/get_play_rankings_play_rankings_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseListModelsResponsesResponsePlayRankingItem](appstore_spy/models/api_response_list_models_responses_response_play_ranking_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetPlayRankingsPlayRankingsGetErrorBody](appstore_spy/errors/get_play_rankings_play_rankings_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayRankings401Error1](appstore_spy/models/play_rankings401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recrawl_play_apps_id_recrawl_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: AppLanguagesOrStr | None = AppLanguages.EN_US, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetRecrawlPlayAppsIdRecrawlGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_recrawl_play_apps_id_recrawl_get("com.twitter.android")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecrawlPlayAppsIdRecrawlGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_recrawl_play_apps_id_recrawl_get("com.twitter.android")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecrawlPlayAppsIdRecrawlGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Country for which return data. By default: US.<br>**Default**: <code>AppCountries.US</code> |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Language of meta data. By default: en_US<br>**Default**: <code>AppLanguages.EN_US</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;None, [GetRecrawlPlayAppsIdRecrawlGetErrorBody](appstore_spy/errors/get_recrawl_play_apps_id_recrawl_get_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetRecrawlPlayAppsIdRecrawlGetErrorBody](appstore_spy/errors/get_recrawl_play_apps_id_recrawl_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsRecrawl401Error1](appstore_spy/models/play_apps_recrawl401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_reviews_play_apps_id_reviews_get(id_: str, language: AppLanguagesOrStr, *, country: AppCountriesOrStr | None = None, limit: int | None = 10, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PlayReview], GetReviewsPlayAppsIdReviewsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so `country` and `language` change which set is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_reviews_play_apps_id_reviews_get(
    "com.twitter.android", AppLanguages.EN_US, sort="stars,-likes"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayReview]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewsPlayAppsIdReviewsGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_reviews_play_apps_id_reviews_get(
    "com.twitter.android", AppLanguages.EN_US, sort="stars,-likes"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlayReview]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewsPlayAppsIdReviewsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the `id` value from it |
| <code>language</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py)</code> | Review language |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Count of reviews per page<br>**Default**: <code>10</code> |
| <code>sort</code> | <code>str \| None</code> | Sort params separated by comma(,)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[PlayReview](appstore_spy/models/play_review.py)&#93;, [GetReviewsPlayAppsIdReviewsGetErrorBody](appstore_spy/errors/get_reviews_play_apps_id_reviews_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PlayReview](appstore_spy/models/play_review.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetReviewsPlayAppsIdReviewsGetErrorBody](appstore_spy/errors/get_reviews_play_apps_id_reviews_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsReviews401Error1](appstore_spy/models/play_apps_reviews401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_similar_play_apps_similar_post(*, body: SimilarSearchBody | SimilarSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlayAppListResponse, GetSimilarPlayAppsSimilarPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps Google Play lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_similar_play_apps_similar_post(
    body=SimilarSearchBody(
        limit=2,
        sort=PlaySortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
        filter=SearchFilterPlay(published=True),
        id="com.whatsapp",
        link=SimilarEnum.TO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSimilarPlayAppsSimilarPostErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_similar_play_apps_similar_post(
    body=SimilarSearchBody(
        limit=2,
        sort=PlaySortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
        filter=SearchFilterPlay(published=True),
        id="com.whatsapp",
        link=SimilarEnum.TO,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlayAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSimilarPlayAppsSimilarPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SimilarSearchBody](appstore_spy/models/similar_search_body.py) \| [SimilarSearchBodyDict](appstore_spy/models/similar_search_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[PlayAppListResponse](appstore_spy/models/play_app_list_response.py), [GetSimilarPlayAppsSimilarPostErrorBody](appstore_spy/errors/get_similar_play_apps_similar_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlayAppListResponse](appstore_spy/models/play_app_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSimilarPlayAppsSimilarPostErrorBody](appstore_spy/errors/get_similar_play_apps_similar_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsSimilar401Error1](appstore_spy/models/play_apps_similar401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_suggests_play_suggestions_get(q: str, *, country: AppCountriesOrStr | None = AppCountries.US, lang: AppLanguagesOrStr | None = AppLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_suggests_play_suggestions_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Suggest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSuggestsPlaySuggestionsGetErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_suggests_play_suggestions_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Suggest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSuggestsPlaySuggestionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppCountries.US</code> |
| <code>lang</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppLanguages.EN_US</code> |
| <code>freshness</code> | <code>[CacheTimeOrStr](appstore_spy/models/enums/cache_time.py) \| None</code> | Value sent with the request.<br>**Default**: <code>CacheTime._7D</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[Suggest](appstore_spy/models/suggest.py), [GetSuggestsPlaySuggestionsGetErrorBody](appstore_spy/errors/get_suggests_play_suggestions_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Suggest](appstore_spy/models/suggest.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSuggestsPlaySuggestionsGetErrorBody](appstore_spy/errors/get_suggests_play_suggestions_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlaySuggestions401Error1](appstore_spy/models/play_suggestions401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_summary_play_apps_summary_post(body: SummarySearchBody | SummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummaryResponse, GetSummaryPlayAppsSummaryPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /play/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.google_play.with_raw_response.get_summary_play_apps_summary_post(
    SummarySearchBody(filter=SearchFilterPlay(published=True))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSummaryPlayAppsSummaryPostErrorBody
```

**Async**

```python
result = await async_client.google_play.with_raw_response.get_summary_play_apps_summary_post(
    SummarySearchBody(filter=SearchFilterPlay(published=True))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSummaryPlayAppsSummaryPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SummarySearchBody](appstore_spy/models/summary_search_body.py) \| [SummarySearchBodyDict](appstore_spy/models/summary_search_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[SummaryResponse](appstore_spy/models/summary_response.py), [GetSummaryPlayAppsSummaryPostErrorBody](appstore_spy/errors/get_summary_play_apps_summary_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummaryResponse](appstore_spy/models/summary_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSummaryPlayAppsSummaryPostErrorBody](appstore_spy/errors/get_summary_play_apps_summary_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlayAppsSummary401Error1](appstore_spy/models/play_apps_summary401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](appstore_spy/apis/jobs.py)

<details>
<summary><code>def create_search_jobs_search_post(body: SearchCreate | SearchCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResult, CreateSearchJobsSearchPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a keyword crawl job for one search term in one store and country. Returns the created job immediately; poll `GET /jobs/search` with the returned id to collect the results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.create_search_jobs_search_post(
    SearchCreate(store="play", term="spotify", country="US", lang="en_US", id_user="spotify", limit=5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSearchJobsSearchPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.create_search_jobs_search_post(
    SearchCreate(store="play", term="spotify", country="US", lang="en_US", id_user="spotify", limit=5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSearchJobsSearchPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchCreate](appstore_spy/models/search_create.py) \| [SearchCreateDict](appstore_spy/models/search_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[SearchResult](appstore_spy/models/search_result.py), [CreateSearchJobsSearchPostErrorBody](appstore_spy/errors/create_search_jobs_search_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResult](appstore_spy/models/search_result.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateSearchJobsSearchPostErrorBody](appstore_spy/errors/create_search_jobs_search_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[JobsSearch401Error1](appstore_spy/models/jobs_search401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_search_jobs_search_get(*, store: StoreOrStr | None = None, term: str | None = None, id_user: str | None = None, country: str | None = None, search_id: str | None = None, updated_gte: RFC3339DateTime | None = None, updated_lte: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SearchResult], GetSearchJobsSearchGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window. Each result carries the job's current state and, once finished, its results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_search_jobs_search_get(
    updated_gte=datetime(2020, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
    updated_lte=datetime(2022, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SearchResult]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSearchJobsSearchGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_search_jobs_search_get(
    updated_gte=datetime(2020, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
    updated_lte=datetime(2022, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SearchResult]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSearchJobsSearchGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>store</code> | <code>[StoreOrStr](appstore_spy/models/enums/store.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>term</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>id_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_gte</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_lte</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;list&#91;[SearchResult](appstore_spy/models/search_result.py)&#93;, [GetSearchJobsSearchGetErrorBody](appstore_spy/errors/get_search_jobs_search_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SearchResult](appstore_spy/models/search_result.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSearchJobsSearchGetErrorBody](appstore_spy/errors/get_search_jobs_search_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[JobsSearch401Error1](appstore_spy/models/jobs_search401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SearchFilterV2

> Source: [SearchFilterV2](appstore_spy/apis/search_filter_v2.py)

<details>
<summary><code>def get_filter_search_ios_apps_query_post2(*, body: IosAppSearchBody | IosAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPost2ErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search_filter_v2.with_raw_response.get_filter_search_ios_apps_query_post2(
    body=IosAppSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterIos(published=True, developer_id="324684583"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchIosAppsQueryPost2ErrorBody
```

**Async**

```python
result = await async_client.search_filter_v2.with_raw_response.get_filter_search_ios_apps_query_post2(
    body=IosAppSearchBody(
        limit=2,
        sort=IosSortEnum.DOWNLOADS_MONTH2,
        fields=["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
        filter=SearchFilterIos(published=True, developer_id="324684583"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IosAppListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFilterSearchIosAppsQueryPost2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IosAppSearchBody](appstore_spy/models/ios_app_search_body.py) \| [IosAppSearchBodyDict](appstore_spy/models/ios_app_search_body.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[IosAppListResponse](appstore_spy/models/ios_app_list_response.py), [GetFilterSearchIosAppsQueryPost2ErrorBody](appstore_spy/errors/get_filter_search_ios_apps_query_post2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IosAppListResponse](appstore_spy/models/ios_app_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetFilterSearchIosAppsQueryPost2ErrorBody](appstore_spy/errors/get_filter_search_ios_apps_query_post2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[IosAppsQuery401Error1](appstore_spy/models/ios_apps_query401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](appstore_spy/apis/suggestions.py)

<details>
<summary><code>def get_suggests_play_suggestions_get2(q: str, *, country: AppCountriesOrStr | None = AppCountries.US, lang: AppLanguagesOrStr | None = AppLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGet2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.suggestions.with_raw_response.get_suggests_play_suggestions_get2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Suggest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSuggestsPlaySuggestionsGet2ErrorBody
```

**Async**

```python
result = await async_client.suggestions.with_raw_response.get_suggests_play_suggestions_get2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Suggest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSuggestsPlaySuggestionsGet2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>[AppCountriesOrStr](appstore_spy/models/enums/app_countries.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppCountries.US</code> |
| <code>lang</code> | <code>[AppLanguagesOrStr](appstore_spy/models/enums/app_languages.py) \| None</code> | Value sent with the request.<br>**Default**: <code>AppLanguages.EN_US</code> |
| <code>freshness</code> | <code>[CacheTimeOrStr](appstore_spy/models/enums/cache_time.py) \| None</code> | Value sent with the request.<br>**Default**: <code>CacheTime._7D</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](appstore_spy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](appstore_spy/core/results.py)&#91;[Suggest](appstore_spy/models/suggest.py), [GetSuggestsPlaySuggestionsGet2ErrorBody](appstore_spy/errors/get_suggests_play_suggestions_get2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Suggest](appstore_spy/models/suggest.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetSuggestsPlaySuggestionsGet2ErrorBody](appstore_spy/errors/get_suggests_play_suggestions_get2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[PlaySuggestions401Error1](appstore_spy/models/play_suggestions401_error1.py)</code> |
| 402 | <code>str</code> |
| 422 | <code>[HttpValidationError](appstore_spy/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](appstore_spy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

