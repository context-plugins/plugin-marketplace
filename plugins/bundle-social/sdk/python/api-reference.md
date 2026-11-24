# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BundleSocialClient](bundle_social/client.py)

## Analytics

> Source: [Analytics](bundle_social/apis/analytics.py)

<details>
<summary><code>def analytics_force_post_analytics(*, body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsPostForceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_force_post_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostForceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsForcePostAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_force_post_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostForceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsForcePostAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AnalyticsPostForceRequest](bundle_social/models/api_v1_analytics_post_force_request.py) \| [ApiV1AnalyticsPostForceRequestDict](bundle_social/models/api_v1_analytics_post_force_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostForceResponse](bundle_social/models/api_v1_analytics_post_force_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsForcePostAnalyticsErrorBody](bundle_social/errors/analytics_force_post_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsPostForce400Error1](bundle_social/models/api_v1_analytics_post_force400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsPostForce401Error1](bundle_social/models/api_v1_analytics_post_force401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsPostForce403Error1](bundle_social/models/api_v1_analytics_post_force403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsPostForce404Error1](bundle_social/models/api_v1_analytics_post_force404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsPostForce429Error1](bundle_social/models/api_v1_analytics_post_force429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsPostForce500Error1](bundle_social/models/api_v1_analytics_post_force500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsPostForce502Error1](bundle_social/models/api_v1_analytics_post_force502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsPostForce503Error1](bundle_social/models/api_v1_analytics_post_force503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsPostForce504Error1](bundle_social/models/api_v1_analytics_post_force504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_force_social_account_analytics(*, body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsSocialAccountForceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_force_social_account_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountForceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsForceSocialAccountAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_force_social_account_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountForceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsForceSocialAccountAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AnalyticsSocialAccountForceRequest](bundle_social/models/api_v1_analytics_social_account_force_request.py) \| [ApiV1AnalyticsSocialAccountForceRequestDict](bundle_social/models/api_v1_analytics_social_account_force_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountForceResponse](bundle_social/models/api_v1_analytics_social_account_force_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsForceSocialAccountAnalyticsErrorBody](bundle_social/errors/analytics_force_social_account_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsSocialAccountForce400Error1](bundle_social/models/api_v1_analytics_social_account_force400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsSocialAccountForce401Error1](bundle_social/models/api_v1_analytics_social_account_force401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsSocialAccountForce403Error1](bundle_social/models/api_v1_analytics_social_account_force403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsSocialAccountForce404Error1](bundle_social/models/api_v1_analytics_social_account_force404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsSocialAccountForce429Error1](bundle_social/models/api_v1_analytics_social_account_force429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsSocialAccountForce500Error1](bundle_social/models/api_v1_analytics_social_account_force500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsSocialAccountForce502Error1](bundle_social/models/api_v1_analytics_social_account_force502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsSocialAccountForce503Error1](bundle_social/models/api_v1_analytics_social_account_force503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsSocialAccountForce504Error1](bundle_social/models/api_v1_analytics_social_account_force504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_get_bulk_post_analytics(post_ids: list[str], platform_type: PlatformTypeOrStr, *, page: float | None = 1.0, limit: float | None = 20.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsPostBulkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20 per page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_get_bulk_post_analytics(["some example string"], PlatformType.TIKTOK)
    # TODO: Handle 'response' of type ApiV1AnalyticsPostBulkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetBulkPostAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_get_bulk_post_analytics(
        ["some example string"], PlatformType.TIKTOK
    )
    # TODO: Handle 'response' of type ApiV1AnalyticsPostBulkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetBulkPostAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_ids</code> | <code>list&#91;str&#93;</code> | Value sent with the request. |
| <code>platform_type</code> | <code>[PlatformTypeOrStr](bundle_social/models/enums/platform_type.py)</code> | Value sent with the request. |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>20.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostBulkResponse](bundle_social/models/api_v1_analytics_post_bulk_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsGetBulkPostAnalyticsErrorBody](bundle_social/errors/analytics_get_bulk_post_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsPostBulk400Error1](bundle_social/models/api_v1_analytics_post_bulk400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsPostBulk401Error1](bundle_social/models/api_v1_analytics_post_bulk401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsPostBulk403Error1](bundle_social/models/api_v1_analytics_post_bulk403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsPostBulk404Error1](bundle_social/models/api_v1_analytics_post_bulk404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsPostBulk429Error1](bundle_social/models/api_v1_analytics_post_bulk429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsPostBulk500Error1](bundle_social/models/api_v1_analytics_post_bulk500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsPostBulk502Error1](bundle_social/models/api_v1_analytics_post_bulk502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsPostBulk503Error1](bundle_social/models/api_v1_analytics_post_bulk503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsPostBulk504Error1](bundle_social/models/api_v1_analytics_post_bulk504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_get_post_analytics(*, post_id: str | None = None, platform_type: PlatformTypeOrStr | None = None, imported_post_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published post. Metric names are unified across platforms for easier reporting.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_get_post_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetPostAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_get_post_analytics()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetPostAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform_type</code> | <code>[PlatformTypeOrStr](bundle_social/models/enums/platform_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>imported_post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostResponse](bundle_social/models/api_v1_analytics_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsGetPostAnalyticsErrorBody](bundle_social/errors/analytics_get_post_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsPost400Error1](bundle_social/models/api_v1_analytics_post400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsPost401Error1](bundle_social/models/api_v1_analytics_post401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsPost403Error1](bundle_social/models/api_v1_analytics_post403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsPost404Error1](bundle_social/models/api_v1_analytics_post404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsPost429Error1](bundle_social/models/api_v1_analytics_post429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsPost500Error1](bundle_social/models/api_v1_analytics_post500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsPost502Error1](bundle_social/models/api_v1_analytics_post502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsPost503Error1](bundle_social/models/api_v1_analytics_post503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsPost504Error1](bundle_social/models/api_v1_analytics_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_get_post_analytics_raw(*, post_id: str | None = None, platform_type: PlatformTypeOrStr | None = None, imported_post_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsPostRawResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_get_post_analytics_raw()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetPostAnalyticsRawErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_get_post_analytics_raw()
    # TODO: Handle 'response' of type ApiV1AnalyticsPostRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetPostAnalyticsRawErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform_type</code> | <code>[PlatformTypeOrStr](bundle_social/models/enums/platform_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>imported_post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostRawResponse](bundle_social/models/api_v1_analytics_post_raw_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsGetPostAnalyticsRawErrorBody](bundle_social/errors/analytics_get_post_analytics_raw_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsPostRaw400Error1](bundle_social/models/api_v1_analytics_post_raw400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsPostRaw401Error1](bundle_social/models/api_v1_analytics_post_raw401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsPostRaw403Error1](bundle_social/models/api_v1_analytics_post_raw403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsPostRaw404Error1](bundle_social/models/api_v1_analytics_post_raw404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsPostRaw429Error1](bundle_social/models/api_v1_analytics_post_raw429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsPostRaw500Error1](bundle_social/models/api_v1_analytics_post_raw500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsPostRaw502Error1](bundle_social/models/api_v1_analytics_post_raw502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsPostRaw503Error1](bundle_social/models/api_v1_analytics_post_raw503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsPostRaw504Error1](bundle_social/models/api_v1_analytics_post_raw504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_get_social_account_analytics(team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsSocialAccountResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_get_social_account_analytics("some example string", PlatformType.TIKTOK)
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetSocialAccountAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_get_social_account_analytics(
        "some example string", PlatformType.TIKTOK
    )
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetSocialAccountAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>platform_type</code> | <code>[PlatformTypeOrStr](bundle_social/models/enums/platform_type.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountResponse](bundle_social/models/api_v1_analytics_social_account_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsGetSocialAccountAnalyticsErrorBody](bundle_social/errors/analytics_get_social_account_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsSocialAccount400Error1](bundle_social/models/api_v1_analytics_social_account400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsSocialAccount401Error1](bundle_social/models/api_v1_analytics_social_account401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsSocialAccount403Error1](bundle_social/models/api_v1_analytics_social_account403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsSocialAccount404Error1](bundle_social/models/api_v1_analytics_social_account404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsSocialAccount429Error1](bundle_social/models/api_v1_analytics_social_account429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsSocialAccount500Error1](bundle_social/models/api_v1_analytics_social_account500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsSocialAccount502Error1](bundle_social/models/api_v1_analytics_social_account502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsSocialAccount503Error1](bundle_social/models/api_v1_analytics_social_account503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsSocialAccount504Error1](bundle_social/models/api_v1_analytics_social_account504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analytics_get_social_account_analytics_raw(team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AnalyticsSocialAccountRawResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve social account analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.analytics_get_social_account_analytics_raw("some example string", PlatformType.TIKTOK)
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetSocialAccountAnalyticsRawErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.analytics_get_social_account_analytics_raw(
        "some example string", PlatformType.TIKTOK
    )
    # TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnalyticsGetSocialAccountAnalyticsRawErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>platform_type</code> | <code>[PlatformTypeOrStr](bundle_social/models/enums/platform_type.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountRawResponse](bundle_social/models/api_v1_analytics_social_account_raw_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AnalyticsGetSocialAccountAnalyticsRawErrorBody](bundle_social/errors/analytics_get_social_account_analytics_raw_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AnalyticsSocialAccountRaw400Error1](bundle_social/models/api_v1_analytics_social_account_raw400_error1.py)</code> |
| 401 | <code>[ApiV1AnalyticsSocialAccountRaw401Error1](bundle_social/models/api_v1_analytics_social_account_raw401_error1.py)</code> |
| 403 | <code>[ApiV1AnalyticsSocialAccountRaw403Error1](bundle_social/models/api_v1_analytics_social_account_raw403_error1.py)</code> |
| 404 | <code>[ApiV1AnalyticsSocialAccountRaw404Error1](bundle_social/models/api_v1_analytics_social_account_raw404_error1.py)</code> |
| 429 | <code>[ApiV1AnalyticsSocialAccountRaw429Error1](bundle_social/models/api_v1_analytics_social_account_raw429_error1.py)</code> |
| 500 | <code>[ApiV1AnalyticsSocialAccountRaw500Error1](bundle_social/models/api_v1_analytics_social_account_raw500_error1.py)</code> |
| 502 | <code>[ApiV1AnalyticsSocialAccountRaw502Error1](bundle_social/models/api_v1_analytics_social_account_raw502_error1.py)</code> |
| 503 | <code>[ApiV1AnalyticsSocialAccountRaw503Error1](bundle_social/models/api_v1_analytics_social_account_raw503_error1.py)</code> |
| 504 | <code>[ApiV1AnalyticsSocialAccountRaw504Error1](bundle_social/models/api_v1_analytics_social_account_raw504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## App

> Source: [App](bundle_social/apis/app.py)

<details>
<summary><code>def app_get_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether the bundle.social API is reachable and see the current operational status of every supported social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.app.app_get_health()
    # TODO: Handle 'response' of type ApiV1Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AppGetHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.app.app_get_health()
    # TODO: Handle 'response' of type ApiV1Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AppGetHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Response](bundle_social/models/api_v1_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AppGetHealthErrorBody](bundle_social/errors/app_get_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1400Error1](bundle_social/models/api_v1400_error1.py)</code> |
| 401 | <code>[ApiV1401Error1](bundle_social/models/api_v1401_error1.py)</code> |
| 403 | <code>[ApiV1403Error1](bundle_social/models/api_v1403_error1.py)</code> |
| 404 | <code>[ApiV1404Error1](bundle_social/models/api_v1404_error1.py)</code> |
| 429 | <code>[ApiV1429Error1](bundle_social/models/api_v1429_error1.py)</code> |
| 500 | <code>[ApiV1500Error1](bundle_social/models/api_v1500_error1.py)</code> |
| 502 | <code>[ApiV1502Error1](bundle_social/models/api_v1502_error1.py)</code> |
| 503 | <code>[ApiV1503Error1](bundle_social/models/api_v1503_error1.py)</code> |
| 504 | <code>[ApiV1504Error1](bundle_social/models/api_v1504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Automation

> Source: [Automation](bundle_social/apis/automation.py)

<details>
<summary><code>def automation_activate_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsActivateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a paused flow so that it triggers on new events again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_activate_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsActivateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationActivateFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_activate_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsActivateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationActivateFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsActivateResponse](bundle_social/models/api_v1_automations_activate_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationActivateFlowErrorBody](bundle_social/errors/automation_activate_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsActivate400Error1](bundle_social/models/api_v1_automations_activate400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsActivate401Error1](bundle_social/models/api_v1_automations_activate401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsActivate403Error1](bundle_social/models/api_v1_automations_activate403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsActivate404Error1](bundle_social/models/api_v1_automations_activate404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsActivate429Error1](bundle_social/models/api_v1_automations_activate429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsActivate500Error1](bundle_social/models/api_v1_automations_activate500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsActivate502Error1](bundle_social/models/api_v1_automations_activate502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsActivate503Error1](bundle_social/models/api_v1_automations_activate503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsActivate504Error1](bundle_social/models/api_v1_automations_activate504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_archive_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsArchiveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_archive_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsArchiveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationArchiveFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_archive_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsArchiveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationArchiveFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsArchiveResponse](bundle_social/models/api_v1_automations_archive_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationArchiveFlowErrorBody](bundle_social/errors/automation_archive_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsArchive400Error1](bundle_social/models/api_v1_automations_archive400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsArchive401Error1](bundle_social/models/api_v1_automations_archive401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsArchive403Error1](bundle_social/models/api_v1_automations_archive403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsArchive404Error1](bundle_social/models/api_v1_automations_archive404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsArchive429Error1](bundle_social/models/api_v1_automations_archive429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsArchive500Error1](bundle_social/models/api_v1_automations_archive500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsArchive502Error1](bundle_social/models/api_v1_automations_archive502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsArchive503Error1](bundle_social/models/api_v1_automations_archive503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsArchive504Error1](bundle_social/models/api_v1_automations_archive504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_copy_flows(*, body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsCopyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate one or more automation flows into another team. The copies are created as drafts so they can be re-pointed at that team's social accounts before going live.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_copy_flows()
    # TODO: Handle 'response' of type ApiV1AutomationsCopyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationCopyFlowsErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_copy_flows()
    # TODO: Handle 'response' of type ApiV1AutomationsCopyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationCopyFlowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AutomationsCopyRequest](bundle_social/models/api_v1_automations_copy_request.py) \| [ApiV1AutomationsCopyRequestDict](bundle_social/models/api_v1_automations_copy_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsCopyResponse](bundle_social/models/api_v1_automations_copy_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationCopyFlowsErrorBody](bundle_social/errors/automation_copy_flows_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsCopy400Error1](bundle_social/models/api_v1_automations_copy400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsCopy401Error1](bundle_social/models/api_v1_automations_copy401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsCopy403Error1](bundle_social/models/api_v1_automations_copy403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsCopy404Error1](bundle_social/models/api_v1_automations_copy404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsCopy429Error1](bundle_social/models/api_v1_automations_copy429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsCopy500Error1](bundle_social/models/api_v1_automations_copy500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsCopy502Error1](bundle_social/models/api_v1_automations_copy502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsCopy503Error1](bundle_social/models/api_v1_automations_copy503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsCopy504Error1](bundle_social/models/api_v1_automations_copy504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_create_flow(*, body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once it is published.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_create_flow()
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationCreateFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_create_flow()
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationCreateFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AutomationsRequest](bundle_social/models/api_v1_automations_request.py) \| [ApiV1AutomationsRequestDict](bundle_social/models/api_v1_automations_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](bundle_social/models/api_v1_automations_response1.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationCreateFlowErrorBody](bundle_social/errors/automation_create_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Automations400Error1](bundle_social/models/api_v1_automations400_error1.py)</code> |
| 401 | <code>[ApiV1Automations401Error1](bundle_social/models/api_v1_automations401_error1.py)</code> |
| 403 | <code>[ApiV1Automations403Error1](bundle_social/models/api_v1_automations403_error1.py)</code> |
| 404 | <code>[ApiV1Automations404Error1](bundle_social/models/api_v1_automations404_error1.py)</code> |
| 429 | <code>[ApiV1Automations429Error1](bundle_social/models/api_v1_automations429_error1.py)</code> |
| 500 | <code>[ApiV1Automations500Error1](bundle_social/models/api_v1_automations500_error1.py)</code> |
| 502 | <code>[ApiV1Automations502Error1](bundle_social/models/api_v1_automations502_error1.py)</code> |
| 503 | <code>[ApiV1Automations503Error1](bundle_social/models/api_v1_automations503_error1.py)</code> |
| 504 | <code>[ApiV1Automations504Error1](bundle_social/models/api_v1_automations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_delete_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an automation flow. Past executions are kept for auditing and stay readable.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_delete_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationDeleteFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_delete_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationDeleteFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](bundle_social/models/api_v1_automations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationDeleteFlowErrorBody](bundle_social/errors/automation_delete_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Automations400Error1](bundle_social/models/api_v1_automations400_error1.py)</code> |
| 401 | <code>[ApiV1Automations401Error1](bundle_social/models/api_v1_automations401_error1.py)</code> |
| 403 | <code>[ApiV1Automations403Error1](bundle_social/models/api_v1_automations403_error1.py)</code> |
| 404 | <code>[ApiV1Automations404Error1](bundle_social/models/api_v1_automations404_error1.py)</code> |
| 429 | <code>[ApiV1Automations429Error1](bundle_social/models/api_v1_automations429_error1.py)</code> |
| 500 | <code>[ApiV1Automations500Error1](bundle_social/models/api_v1_automations500_error1.py)</code> |
| 502 | <code>[ApiV1Automations502Error1](bundle_social/models/api_v1_automations502_error1.py)</code> |
| 503 | <code>[ApiV1Automations503Error1](bundle_social/models/api_v1_automations503_error1.py)</code> |
| 504 | <code>[ApiV1Automations504Error1](bundle_social/models/api_v1_automations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_get_execution(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationExecutionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation run by id, including its input event, its per-step results and any error that stopped it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_get_execution("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetExecutionErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_get_execution("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationExecutionsResponse](bundle_social/models/api_v1_automation_executions_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationGetExecutionErrorBody](bundle_social/errors/automation_get_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationExecutions400Error1](bundle_social/models/api_v1_automation_executions400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationExecutions401Error1](bundle_social/models/api_v1_automation_executions401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationExecutions403Error1](bundle_social/models/api_v1_automation_executions403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationExecutions404Error1](bundle_social/models/api_v1_automation_executions404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationExecutions429Error1](bundle_social/models/api_v1_automation_executions429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationExecutions500Error1](bundle_social/models/api_v1_automation_executions500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationExecutions502Error1](bundle_social/models/api_v1_automation_executions502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationExecutions503Error1](bundle_social/models/api_v1_automation_executions503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationExecutions504Error1](bundle_social/models/api_v1_automation_executions504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_get_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation flow by id, including its trigger, its steps and its current status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_get_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_get_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](bundle_social/models/api_v1_automations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationGetFlowErrorBody](bundle_social/errors/automation_get_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Automations400Error1](bundle_social/models/api_v1_automations400_error1.py)</code> |
| 401 | <code>[ApiV1Automations401Error1](bundle_social/models/api_v1_automations401_error1.py)</code> |
| 403 | <code>[ApiV1Automations403Error1](bundle_social/models/api_v1_automations403_error1.py)</code> |
| 404 | <code>[ApiV1Automations404Error1](bundle_social/models/api_v1_automations404_error1.py)</code> |
| 429 | <code>[ApiV1Automations429Error1](bundle_social/models/api_v1_automations429_error1.py)</code> |
| 500 | <code>[ApiV1Automations500Error1](bundle_social/models/api_v1_automations500_error1.py)</code> |
| 502 | <code>[ApiV1Automations502Error1](bundle_social/models/api_v1_automations502_error1.py)</code> |
| 503 | <code>[ApiV1Automations503Error1](bundle_social/models/api_v1_automations503_error1.py)</code> |
| 504 | <code>[ApiV1Automations504Error1](bundle_social/models/api_v1_automations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_get_flow_executions(id_: str, team_id: str, *, flow_version_id: str | None = None, trigger_id: str | None = None, social_account_id: str | None = None, platform: PlatformOrStr | None = None, status: Status31OrStr | None = None, conversation_id: str | None = None, fetched_comment_id: str | None = None, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsExecutionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the runs of a single automation flow, newest first. Use it to see which events matched and how each run ended. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_get_flow_executions("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowExecutionsErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_get_flow_executions(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1AutomationsExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>flow_version_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>trigger_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>[PlatformOrStr](bundle_social/models/enums/platform.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status31OrStr](bundle_social/models/enums/status31.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>conversation_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>fetched_comment_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsExecutionsResponse](bundle_social/models/api_v1_automations_executions_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationGetFlowExecutionsErrorBody](bundle_social/errors/automation_get_flow_executions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsExecutions400Error1](bundle_social/models/api_v1_automations_executions400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsExecutions401Error1](bundle_social/models/api_v1_automations_executions401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsExecutions403Error1](bundle_social/models/api_v1_automations_executions403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsExecutions404Error1](bundle_social/models/api_v1_automations_executions404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsExecutions429Error1](bundle_social/models/api_v1_automations_executions429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsExecutions500Error1](bundle_social/models/api_v1_automations_executions500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsExecutions502Error1](bundle_social/models/api_v1_automations_executions502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsExecutions503Error1](bundle_social/models/api_v1_automations_executions503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsExecutions504Error1](bundle_social/models/api_v1_automations_executions504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_get_flows(team_id: str, *, status: StatusBundleSocialAutomationApiOrStr | None = None, platform_scope: PlatformScopeOrStr | None = None, social_account_id: str | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the automation flows of a team, newest first. Filter by `socialAccountId`, `status` and `platformScope`. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_get_flows("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowsErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_get_flows("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetFlowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>status</code> | <code>[StatusBundleSocialAutomationApiOrStr](bundle_social/models/enums/status_bundle_social_automation_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform_scope</code> | <code>[PlatformScopeOrStr](bundle_social/models/enums/platform_scope.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse](bundle_social/models/api_v1_automations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationGetFlowsErrorBody](bundle_social/errors/automation_get_flows_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Automations400Error1](bundle_social/models/api_v1_automations400_error1.py)</code> |
| 401 | <code>[ApiV1Automations401Error1](bundle_social/models/api_v1_automations401_error1.py)</code> |
| 403 | <code>[ApiV1Automations403Error1](bundle_social/models/api_v1_automations403_error1.py)</code> |
| 404 | <code>[ApiV1Automations404Error1](bundle_social/models/api_v1_automations404_error1.py)</code> |
| 429 | <code>[ApiV1Automations429Error1](bundle_social/models/api_v1_automations429_error1.py)</code> |
| 500 | <code>[ApiV1Automations500Error1](bundle_social/models/api_v1_automations500_error1.py)</code> |
| 502 | <code>[ApiV1Automations502Error1](bundle_social/models/api_v1_automations502_error1.py)</code> |
| 503 | <code>[ApiV1Automations503Error1](bundle_social/models/api_v1_automations503_error1.py)</code> |
| 504 | <code>[ApiV1Automations504Error1](bundle_social/models/api_v1_automations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_get_provider_settings(team_id: str, *, platform: PlatformOrStr | None = None, social_account_id: str | None = None, type_: Type112OrStr | None = None, status: Status59OrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationProviderSettingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the platform-side automation settings stored per social account, such as the Instagram icebreakers or persistent menu we manage for you. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_get_provider_settings("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetProviderSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_get_provider_settings("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationGetProviderSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>platform</code> | <code>[PlatformOrStr](bundle_social/models/enums/platform.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type112OrStr](bundle_social/models/enums/type112.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status59OrStr](bundle_social/models/enums/status59.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse](bundle_social/models/api_v1_automation_provider_settings_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationGetProviderSettingsErrorBody](bundle_social/errors/automation_get_provider_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationProviderSettings400Error1](bundle_social/models/api_v1_automation_provider_settings400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationProviderSettings401Error1](bundle_social/models/api_v1_automation_provider_settings401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationProviderSettings403Error1](bundle_social/models/api_v1_automation_provider_settings403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationProviderSettings404Error1](bundle_social/models/api_v1_automation_provider_settings404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationProviderSettings429Error1](bundle_social/models/api_v1_automation_provider_settings429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationProviderSettings500Error1](bundle_social/models/api_v1_automation_provider_settings500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationProviderSettings502Error1](bundle_social/models/api_v1_automation_provider_settings502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationProviderSettings503Error1](bundle_social/models/api_v1_automation_provider_settings503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationProviderSettings504Error1](bundle_social/models/api_v1_automation_provider_settings504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_pause_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsPauseResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a live flow from triggering on new events while keeping its configuration intact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_pause_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsPauseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationPauseFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_pause_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsPauseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationPauseFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsPauseResponse](bundle_social/models/api_v1_automations_pause_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationPauseFlowErrorBody](bundle_social/errors/automation_pause_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsPause400Error1](bundle_social/models/api_v1_automations_pause400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsPause401Error1](bundle_social/models/api_v1_automations_pause401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsPause403Error1](bundle_social/models/api_v1_automations_pause403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsPause404Error1](bundle_social/models/api_v1_automations_pause404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsPause429Error1](bundle_social/models/api_v1_automations_pause429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsPause500Error1](bundle_social/models/api_v1_automations_pause500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsPause502Error1](bundle_social/models/api_v1_automations_pause502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsPause503Error1](bundle_social/models/api_v1_automations_pause503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsPause504Error1](bundle_social/models/api_v1_automations_pause504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_publish_flow(id_: str, *, body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsPublishResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the flow is not valid.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_publish_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationPublishFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_publish_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationPublishFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AutomationsPublishRequest](bundle_social/models/api_v1_automations_publish_request.py) \| [ApiV1AutomationsPublishRequestDict](bundle_social/models/api_v1_automations_publish_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsPublishResponse](bundle_social/models/api_v1_automations_publish_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationPublishFlowErrorBody](bundle_social/errors/automation_publish_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsPublish400Error1](bundle_social/models/api_v1_automations_publish400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsPublish401Error1](bundle_social/models/api_v1_automations_publish401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsPublish403Error1](bundle_social/models/api_v1_automations_publish403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsPublish404Error1](bundle_social/models/api_v1_automations_publish404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsPublish429Error1](bundle_social/models/api_v1_automations_publish429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsPublish500Error1](bundle_social/models/api_v1_automations_publish500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsPublish502Error1](bundle_social/models/api_v1_automations_publish502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsPublish503Error1](bundle_social/models/api_v1_automations_publish503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsPublish504Error1](bundle_social/models/api_v1_automations_publish504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_send_rich_message(conversation_id: str, *, body: ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationRichMessagesConversationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a rich message, such as a button or card template, into a conversation using the same renderer the automation steps use. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_send_rich_message("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationRichMessagesConversationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationSendRichMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_send_rich_message("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationRichMessagesConversationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationSendRichMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>conversation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AutomationRichMessagesConversationsRequest](bundle_social/models/api_v1_automation_rich_messages_conversations_request.py) \| [ApiV1AutomationRichMessagesConversationsRequestDict](bundle_social/models/api_v1_automation_rich_messages_conversations_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationRichMessagesConversationsResponse](bundle_social/models/api_v1_automation_rich_messages_conversations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationSendRichMessageErrorBody](bundle_social/errors/automation_send_rich_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationRichMessagesConversations400Error1](bundle_social/models/api_v1_automation_rich_messages_conversations400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationRichMessagesConversations401Error1](bundle_social/models/api_v1_automation_rich_messages_conversations401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationRichMessagesConversations403Error1](bundle_social/models/api_v1_automation_rich_messages_conversations403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationRichMessagesConversations404Error1](bundle_social/models/api_v1_automation_rich_messages_conversations404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationRichMessagesConversations429Error1](bundle_social/models/api_v1_automation_rich_messages_conversations429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationRichMessagesConversations500Error1](bundle_social/models/api_v1_automation_rich_messages_conversations500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationRichMessagesConversations502Error1](bundle_social/models/api_v1_automation_rich_messages_conversations502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationRichMessagesConversations503Error1](bundle_social/models/api_v1_automation_rich_messages_conversations503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationRichMessagesConversations504Error1](bundle_social/models/api_v1_automation_rich_messages_conversations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_sync_provider_setting(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationProviderSettingsSyncResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_sync_provider_setting("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationSyncProviderSettingErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_sync_provider_setting("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationSyncProviderSettingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsSyncResponse](bundle_social/models/api_v1_automation_provider_settings_sync_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationSyncProviderSettingErrorBody](bundle_social/errors/automation_sync_provider_setting_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationProviderSettingsSync400Error1](bundle_social/models/api_v1_automation_provider_settings_sync400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationProviderSettingsSync401Error1](bundle_social/models/api_v1_automation_provider_settings_sync401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationProviderSettingsSync403Error1](bundle_social/models/api_v1_automation_provider_settings_sync403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationProviderSettingsSync404Error1](bundle_social/models/api_v1_automation_provider_settings_sync404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationProviderSettingsSync429Error1](bundle_social/models/api_v1_automation_provider_settings_sync429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationProviderSettingsSync500Error1](bundle_social/models/api_v1_automation_provider_settings_sync500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationProviderSettingsSync502Error1](bundle_social/models/api_v1_automation_provider_settings_sync502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationProviderSettingsSync503Error1](bundle_social/models/api_v1_automation_provider_settings_sync503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationProviderSettingsSync504Error1](bundle_social/models/api_v1_automation_provider_settings_sync504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_test_flow(id_: str, *, body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsTestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a flow once against a sample event and return the resulting execution. Steps that send a message really send it, so a test returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_test_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationTestFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_test_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationTestFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AutomationsTestRequest](bundle_social/models/api_v1_automations_test_request.py) \| [ApiV1AutomationsTestRequestDict](bundle_social/models/api_v1_automations_test_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsTestResponse](bundle_social/models/api_v1_automations_test_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationTestFlowErrorBody](bundle_social/errors/automation_test_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationsTest400Error1](bundle_social/models/api_v1_automations_test400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationsTest401Error1](bundle_social/models/api_v1_automations_test401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationsTest403Error1](bundle_social/models/api_v1_automations_test403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationsTest404Error1](bundle_social/models/api_v1_automations_test404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationsTest429Error1](bundle_social/models/api_v1_automations_test429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationsTest500Error1](bundle_social/models/api_v1_automations_test500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationsTest502Error1](bundle_social/models/api_v1_automations_test502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationsTest503Error1](bundle_social/models/api_v1_automations_test503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationsTest504Error1](bundle_social/models/api_v1_automations_test504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_update_flow(id_: str, *, body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next matching event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_update_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationUpdateFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_update_flow("some example string")
    # TODO: Handle 'response' of type ApiV1AutomationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationUpdateFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AutomationsRequest1](bundle_social/models/api_v1_automations_request1.py) \| [ApiV1AutomationsRequest1Dict](bundle_social/models/api_v1_automations_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](bundle_social/models/api_v1_automations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationUpdateFlowErrorBody](bundle_social/errors/automation_update_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Automations400Error1](bundle_social/models/api_v1_automations400_error1.py)</code> |
| 401 | <code>[ApiV1Automations401Error1](bundle_social/models/api_v1_automations401_error1.py)</code> |
| 403 | <code>[ApiV1Automations403Error1](bundle_social/models/api_v1_automations403_error1.py)</code> |
| 404 | <code>[ApiV1Automations404Error1](bundle_social/models/api_v1_automations404_error1.py)</code> |
| 429 | <code>[ApiV1Automations429Error1](bundle_social/models/api_v1_automations429_error1.py)</code> |
| 500 | <code>[ApiV1Automations500Error1](bundle_social/models/api_v1_automations500_error1.py)</code> |
| 502 | <code>[ApiV1Automations502Error1](bundle_social/models/api_v1_automations502_error1.py)</code> |
| 503 | <code>[ApiV1Automations503Error1](bundle_social/models/api_v1_automations503_error1.py)</code> |
| 504 | <code>[ApiV1Automations504Error1](bundle_social/models/api_v1_automations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def automation_upsert_provider_setting(social_account_id: str, type_: Type112OrStr, *, body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1AutomationProviderSettingsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace the automation setting of a given type for a social account, and push it to the platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.automation.automation_upsert_provider_setting(
        "some example string", Type112.FACEBOOK_PERSISTENT_MENU
    )
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationUpsertProviderSettingErrorBody
```

**Async**

```python
try:
    response = await async_client.automation.automation_upsert_provider_setting(
        "some example string", Type112.FACEBOOK_PERSISTENT_MENU
    )
    # TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AutomationUpsertProviderSettingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>social_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>type_</code> | <code>[Type112OrStr](bundle_social/models/enums/type112.py)</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1AutomationProviderSettingsRequest](bundle_social/models/api_v1_automation_provider_settings_request.py) \| [ApiV1AutomationProviderSettingsRequestDict](bundle_social/models/api_v1_automation_provider_settings_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse1](bundle_social/models/api_v1_automation_provider_settings_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[AutomationUpsertProviderSettingErrorBody](bundle_social/errors/automation_upsert_provider_setting_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1AutomationProviderSettings400Error1](bundle_social/models/api_v1_automation_provider_settings400_error1.py)</code> |
| 401 | <code>[ApiV1AutomationProviderSettings401Error1](bundle_social/models/api_v1_automation_provider_settings401_error1.py)</code> |
| 403 | <code>[ApiV1AutomationProviderSettings403Error1](bundle_social/models/api_v1_automation_provider_settings403_error1.py)</code> |
| 404 | <code>[ApiV1AutomationProviderSettings404Error1](bundle_social/models/api_v1_automation_provider_settings404_error1.py)</code> |
| 429 | <code>[ApiV1AutomationProviderSettings429Error1](bundle_social/models/api_v1_automation_provider_settings429_error1.py)</code> |
| 500 | <code>[ApiV1AutomationProviderSettings500Error1](bundle_social/models/api_v1_automation_provider_settings500_error1.py)</code> |
| 502 | <code>[ApiV1AutomationProviderSettings502Error1](bundle_social/models/api_v1_automation_provider_settings502_error1.py)</code> |
| 503 | <code>[ApiV1AutomationProviderSettings503Error1](bundle_social/models/api_v1_automation_provider_settings503_error1.py)</code> |
| 504 | <code>[ApiV1AutomationProviderSettings504Error1](bundle_social/models/api_v1_automation_provider_settings504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CommentApi

> Source: [CommentApi](bundle_social/apis/comment_api.py)

<details>
<summary><code>def comment_create(*, body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on Instagram or LinkedIn, or to respond to your audience programmatically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_create()
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_create()
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CommentRequest1](bundle_social/models/api_v1_comment_request1.py) \| [ApiV1CommentRequest1Dict](bundle_social/models/api_v1_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](bundle_social/models/api_v1_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentCreateErrorBody](bundle_social/errors/comment_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Comment400Error1](bundle_social/models/api_v1_comment400_error1.py)</code> |
| 401 | <code>[ApiV1Comment401Error1](bundle_social/models/api_v1_comment401_error1.py)</code> |
| 403 | <code>[ApiV1Comment403Error1](bundle_social/models/api_v1_comment403_error1.py)</code> |
| 404 | <code>[ApiV1Comment404Error1](bundle_social/models/api_v1_comment404_error1.py)</code> |
| 429 | <code>[ApiV1Comment429Error1](bundle_social/models/api_v1_comment429_error1.py)</code> |
| 500 | <code>[ApiV1Comment500Error1](bundle_social/models/api_v1_comment500_error1.py)</code> |
| 502 | <code>[ApiV1Comment502Error1](bundle_social/models/api_v1_comment502_error1.py)</code> |
| 503 | <code>[ApiV1Comment503Error1](bundle_social/models/api_v1_comment503_error1.py)</code> |
| 504 | <code>[ApiV1Comment504Error1](bundle_social/models/api_v1_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_delete("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_delete("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](bundle_social/models/api_v1_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentDeleteErrorBody](bundle_social/errors/comment_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Comment400Error1](bundle_social/models/api_v1_comment400_error1.py)</code> |
| 401 | <code>[ApiV1Comment401Error1](bundle_social/models/api_v1_comment401_error1.py)</code> |
| 403 | <code>[ApiV1Comment403Error1](bundle_social/models/api_v1_comment403_error1.py)</code> |
| 404 | <code>[ApiV1Comment404Error1](bundle_social/models/api_v1_comment404_error1.py)</code> |
| 429 | <code>[ApiV1Comment429Error1](bundle_social/models/api_v1_comment429_error1.py)</code> |
| 500 | <code>[ApiV1Comment500Error1](bundle_social/models/api_v1_comment500_error1.py)</code> |
| 502 | <code>[ApiV1Comment502Error1](bundle_social/models/api_v1_comment502_error1.py)</code> |
| 503 | <code>[ApiV1Comment503Error1](bundle_social/models/api_v1_comment503_error1.py)</code> |
| 504 | <code>[ApiV1Comment504Error1](bundle_social/models/api_v1_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_get(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single comment you created through bundle.social, including its publishing status and any error details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_get("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentGetErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_get("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](bundle_social/models/api_v1_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentGetErrorBody](bundle_social/errors/comment_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Comment400Error1](bundle_social/models/api_v1_comment400_error1.py)</code> |
| 401 | <code>[ApiV1Comment401Error1](bundle_social/models/api_v1_comment401_error1.py)</code> |
| 403 | <code>[ApiV1Comment403Error1](bundle_social/models/api_v1_comment403_error1.py)</code> |
| 404 | <code>[ApiV1Comment404Error1](bundle_social/models/api_v1_comment404_error1.py)</code> |
| 429 | <code>[ApiV1Comment429Error1](bundle_social/models/api_v1_comment429_error1.py)</code> |
| 500 | <code>[ApiV1Comment500Error1](bundle_social/models/api_v1_comment500_error1.py)</code> |
| 502 | <code>[ApiV1Comment502Error1](bundle_social/models/api_v1_comment502_error1.py)</code> |
| 503 | <code>[ApiV1Comment503Error1](bundle_social/models/api_v1_comment503_error1.py)</code> |
| 504 | <code>[ApiV1Comment504Error1](bundle_social/models/api_v1_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_get_list(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, status: Status4OrStr | None = None, order_by: OrderByOrStr | None = None, order: OrderOrStr | None = None, q: str | None = None, platforms: list[Platform6OrStr] | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter the comments your organization has created, with pagination. Use it to track which scheduled comments published successfully.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>imported_post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status4OrStr](bundle_social/models/enums/status4.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByOrStr](bundle_social/models/enums/order_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](bundle_social/models/enums/order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platforms</code> | <code>list&#91;[Platform6OrStr](bundle_social/models/enums/platform6.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse3](bundle_social/models/api_v1_comment_response3.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentGetListErrorBody](bundle_social/errors/comment_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Comment400Error1](bundle_social/models/api_v1_comment400_error1.py)</code> |
| 401 | <code>[ApiV1Comment401Error1](bundle_social/models/api_v1_comment401_error1.py)</code> |
| 403 | <code>[ApiV1Comment403Error1](bundle_social/models/api_v1_comment403_error1.py)</code> |
| 404 | <code>[ApiV1Comment404Error1](bundle_social/models/api_v1_comment404_error1.py)</code> |
| 429 | <code>[ApiV1Comment429Error1](bundle_social/models/api_v1_comment429_error1.py)</code> |
| 500 | <code>[ApiV1Comment500Error1](bundle_social/models/api_v1_comment500_error1.py)</code> |
| 502 | <code>[ApiV1Comment502Error1](bundle_social/models/api_v1_comment502_error1.py)</code> |
| 503 | <code>[ApiV1Comment503Error1](bundle_social/models/api_v1_comment503_error1.py)</code> |
| 504 | <code>[ApiV1Comment504Error1](bundle_social/models/api_v1_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_import_action_fetched_comment(comment_id: str, *, body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentImportCommentsActionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and engage without leaving your own app.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_import_action_fetched_comment("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportCommentsActionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportActionFetchedCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_import_action_fetched_comment("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportCommentsActionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportActionFetchedCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1CommentImportCommentsActionRequest](bundle_social/models/api_v1_comment_import_comments_action_request.py) \| [ApiV1CommentImportCommentsActionRequestDict](bundle_social/models/api_v1_comment_import_comments_action_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportCommentsActionResponse](bundle_social/models/api_v1_comment_import_comments_action_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentImportActionFetchedCommentErrorBody](bundle_social/errors/comment_import_action_fetched_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentImportCommentsAction400Error1](bundle_social/models/api_v1_comment_import_comments_action400_error1.py)</code> |
| 401 | <code>[ApiV1CommentImportCommentsAction401Error1](bundle_social/models/api_v1_comment_import_comments_action401_error1.py)</code> |
| 403 | <code>[ApiV1CommentImportCommentsAction403Error1](bundle_social/models/api_v1_comment_import_comments_action403_error1.py)</code> |
| 404 | <code>[ApiV1CommentImportCommentsAction404Error1](bundle_social/models/api_v1_comment_import_comments_action404_error1.py)</code> |
| 429 | <code>[ApiV1CommentImportCommentsAction429Error1](bundle_social/models/api_v1_comment_import_comments_action429_error1.py)</code> |
| 500 | <code>[ApiV1CommentImportCommentsAction500Error1](bundle_social/models/api_v1_comment_import_comments_action500_error1.py)</code> |
| 502 | <code>[ApiV1CommentImportCommentsAction502Error1](bundle_social/models/api_v1_comment_import_comments_action502_error1.py)</code> |
| 503 | <code>[ApiV1CommentImportCommentsAction503Error1](bundle_social/models/api_v1_comment_import_comments_action503_error1.py)</code> |
| 504 | <code>[ApiV1CommentImportCommentsAction504Error1](bundle_social/models/api_v1_comment_import_comments_action504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_import_create(*, body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls existing comments from a published post on the social platform into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_import_create()
    # TODO: Handle 'response' of type ApiV1CommentImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_import_create()
    # TODO: Handle 'response' of type ApiV1CommentImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CommentImportRequest](bundle_social/models/api_v1_comment_import_request.py) \| [ApiV1CommentImportRequestDict](bundle_social/models/api_v1_comment_import_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse](bundle_social/models/api_v1_comment_import_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentImportCreateErrorBody](bundle_social/errors/comment_import_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentImport400Error1](bundle_social/models/api_v1_comment_import400_error1.py)</code> |
| 401 | <code>[ApiV1CommentImport401Error1](bundle_social/models/api_v1_comment_import401_error1.py)</code> |
| 403 | <code>[ApiV1CommentImport403Error1](bundle_social/models/api_v1_comment_import403_error1.py)</code> |
| 404 | <code>[ApiV1CommentImport404Error1](bundle_social/models/api_v1_comment_import404_error1.py)</code> |
| 409 | <code>[ApiV1CommentImport409Error1](bundle_social/models/api_v1_comment_import409_error1.py)</code> |
| 429 | <code>[ApiV1CommentImport429Error1](bundle_social/models/api_v1_comment_import429_error1.py)</code> |
| 500 | <code>[ApiV1CommentImport500Error1](bundle_social/models/api_v1_comment_import500_error1.py)</code> |
| 502 | <code>[ApiV1CommentImport502Error1](bundle_social/models/api_v1_comment_import502_error1.py)</code> |
| 503 | <code>[ApiV1CommentImport503Error1](bundle_social/models/api_v1_comment_import503_error1.py)</code> |
| 504 | <code>[ApiV1CommentImport504Error1](bundle_social/models/api_v1_comment_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_import_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single comment import job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_import_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_import_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse](bundle_social/models/api_v1_comment_import_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentImportGetByIdErrorBody](bundle_social/errors/comment_import_get_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentImport400Error1](bundle_social/models/api_v1_comment_import400_error1.py)</code> |
| 401 | <code>[ApiV1CommentImport401Error1](bundle_social/models/api_v1_comment_import401_error1.py)</code> |
| 403 | <code>[ApiV1CommentImport403Error1](bundle_social/models/api_v1_comment_import403_error1.py)</code> |
| 404 | <code>[ApiV1CommentImport404Error1](bundle_social/models/api_v1_comment_import404_error1.py)</code> |
| 429 | <code>[ApiV1CommentImport429Error1](bundle_social/models/api_v1_comment_import429_error1.py)</code> |
| 500 | <code>[ApiV1CommentImport500Error1](bundle_social/models/api_v1_comment_import500_error1.py)</code> |
| 502 | <code>[ApiV1CommentImport502Error1](bundle_social/models/api_v1_comment_import502_error1.py)</code> |
| 503 | <code>[ApiV1CommentImport503Error1](bundle_social/models/api_v1_comment_import503_error1.py)</code> |
| 504 | <code>[ApiV1CommentImport504Error1](bundle_social/models/api_v1_comment_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_import_get_fetched_comments(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, platform: PlatformBundleSocialCommentApiOrStr | None = None, social_account_id: str | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentImportCommentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments pulled in by a comment import, with pagination. Use this to read audience replies and decide which ones need a response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_import_get_fetched_comments("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetFetchedCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_import_get_fetched_comments("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetFetchedCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>imported_post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>[PlatformBundleSocialCommentApiOrStr](bundle_social/models/enums/platform_bundle_social_comment_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportCommentsResponse](bundle_social/models/api_v1_comment_import_comments_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentImportGetFetchedCommentsErrorBody](bundle_social/errors/comment_import_get_fetched_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentImportComments400Error1](bundle_social/models/api_v1_comment_import_comments400_error1.py)</code> |
| 401 | <code>[ApiV1CommentImportComments401Error1](bundle_social/models/api_v1_comment_import_comments401_error1.py)</code> |
| 403 | <code>[ApiV1CommentImportComments403Error1](bundle_social/models/api_v1_comment_import_comments403_error1.py)</code> |
| 404 | <code>[ApiV1CommentImportComments404Error1](bundle_social/models/api_v1_comment_import_comments404_error1.py)</code> |
| 429 | <code>[ApiV1CommentImportComments429Error1](bundle_social/models/api_v1_comment_import_comments429_error1.py)</code> |
| 500 | <code>[ApiV1CommentImportComments500Error1](bundle_social/models/api_v1_comment_import_comments500_error1.py)</code> |
| 502 | <code>[ApiV1CommentImportComments502Error1](bundle_social/models/api_v1_comment_import_comments502_error1.py)</code> |
| 503 | <code>[ApiV1CommentImportComments503Error1](bundle_social/models/api_v1_comment_import_comments503_error1.py)</code> |
| 504 | <code>[ApiV1CommentImportComments504Error1](bundle_social/models/api_v1_comment_import_comments504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_import_get_list(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, status: StatusBundleSocialCommentApiOrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentImportResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comment import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_import_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_import_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1CommentImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentImportGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>imported_post_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusBundleSocialCommentApiOrStr](bundle_social/models/enums/status_bundle_social_comment_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse1](bundle_social/models/api_v1_comment_import_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentImportGetListErrorBody](bundle_social/errors/comment_import_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentImport400Error1](bundle_social/models/api_v1_comment_import400_error1.py)</code> |
| 401 | <code>[ApiV1CommentImport401Error1](bundle_social/models/api_v1_comment_import401_error1.py)</code> |
| 403 | <code>[ApiV1CommentImport403Error1](bundle_social/models/api_v1_comment_import403_error1.py)</code> |
| 404 | <code>[ApiV1CommentImport404Error1](bundle_social/models/api_v1_comment_import404_error1.py)</code> |
| 429 | <code>[ApiV1CommentImport429Error1](bundle_social/models/api_v1_comment_import429_error1.py)</code> |
| 500 | <code>[ApiV1CommentImport500Error1](bundle_social/models/api_v1_comment_import500_error1.py)</code> |
| 502 | <code>[ApiV1CommentImport502Error1](bundle_social/models/api_v1_comment_import502_error1.py)</code> |
| 503 | <code>[ApiV1CommentImport503Error1](bundle_social/models/api_v1_comment_import503_error1.py)</code> |
| 504 | <code>[ApiV1CommentImport504Error1](bundle_social/models/api_v1_comment_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_retry(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentRetryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_retry("some example string")
    # TODO: Handle 'response' of type ApiV1CommentRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentRetryErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_retry("some example string")
    # TODO: Handle 'response' of type ApiV1CommentRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentRetryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentRetryResponse](bundle_social/models/api_v1_comment_retry_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentRetryErrorBody](bundle_social/errors/comment_retry_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CommentRetry400Error1](bundle_social/models/api_v1_comment_retry400_error1.py)</code> |
| 401 | <code>[ApiV1CommentRetry401Error1](bundle_social/models/api_v1_comment_retry401_error1.py)</code> |
| 403 | <code>[ApiV1CommentRetry403Error1](bundle_social/models/api_v1_comment_retry403_error1.py)</code> |
| 404 | <code>[ApiV1CommentRetry404Error1](bundle_social/models/api_v1_comment_retry404_error1.py)</code> |
| 429 | <code>[ApiV1CommentRetry429Error1](bundle_social/models/api_v1_comment_retry429_error1.py)</code> |
| 500 | <code>[ApiV1CommentRetry500Error1](bundle_social/models/api_v1_comment_retry500_error1.py)</code> |
| 502 | <code>[ApiV1CommentRetry502Error1](bundle_social/models/api_v1_comment_retry502_error1.py)</code> |
| 503 | <code>[ApiV1CommentRetry503Error1](bundle_social/models/api_v1_comment_retry503_error1.py)</code> |
| 504 | <code>[ApiV1CommentRetry504Error1](bundle_social/models/api_v1_comment_retry504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def comment_update(id_: str, *, body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content or scheduled time of a comment that has not published yet.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comment_api.comment_update("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.comment_api.comment_update("some example string")
    # TODO: Handle 'response' of type ApiV1CommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1CommentRequest](bundle_social/models/api_v1_comment_request.py) \| [ApiV1CommentRequestDict](bundle_social/models/api_v1_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](bundle_social/models/api_v1_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CommentUpdateErrorBody](bundle_social/errors/comment_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Comment400Error1](bundle_social/models/api_v1_comment400_error1.py)</code> |
| 401 | <code>[ApiV1Comment401Error1](bundle_social/models/api_v1_comment401_error1.py)</code> |
| 403 | <code>[ApiV1Comment403Error1](bundle_social/models/api_v1_comment403_error1.py)</code> |
| 404 | <code>[ApiV1Comment404Error1](bundle_social/models/api_v1_comment404_error1.py)</code> |
| 429 | <code>[ApiV1Comment429Error1](bundle_social/models/api_v1_comment429_error1.py)</code> |
| 500 | <code>[ApiV1Comment500Error1](bundle_social/models/api_v1_comment500_error1.py)</code> |
| 502 | <code>[ApiV1Comment502Error1](bundle_social/models/api_v1_comment502_error1.py)</code> |
| 503 | <code>[ApiV1Comment503Error1](bundle_social/models/api_v1_comment503_error1.py)</code> |
| 504 | <code>[ApiV1Comment504Error1](bundle_social/models/api_v1_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Credit

> Source: [Credit](bundle_social/apis/credit.py)

<details>
<summary><code>def credit_get_credit_balance(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1BillingCreditsBalanceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount metered X actions draw from.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit.credit_get_credit_balance()
    # TODO: Handle 'response' of type ApiV1BillingCreditsBalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditGetCreditBalanceErrorBody
```

**Async**

```python
try:
    response = await async_client.credit.credit_get_credit_balance()
    # TODO: Handle 'response' of type ApiV1BillingCreditsBalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditGetCreditBalanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BillingCreditsBalanceResponse](bundle_social/models/api_v1_billing_credits_balance_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CreditGetCreditBalanceErrorBody](bundle_social/errors/credit_get_credit_balance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1BillingCreditsBalance400Error1](bundle_social/models/api_v1_billing_credits_balance400_error1.py)</code> |
| 401 | <code>[ApiV1BillingCreditsBalance401Error1](bundle_social/models/api_v1_billing_credits_balance401_error1.py)</code> |
| 403 | <code>[ApiV1BillingCreditsBalance403Error1](bundle_social/models/api_v1_billing_credits_balance403_error1.py)</code> |
| 404 | <code>[ApiV1BillingCreditsBalance404Error1](bundle_social/models/api_v1_billing_credits_balance404_error1.py)</code> |
| 429 | <code>[ApiV1BillingCreditsBalance429Error1](bundle_social/models/api_v1_billing_credits_balance429_error1.py)</code> |
| 500 | <code>[ApiV1BillingCreditsBalance500Error1](bundle_social/models/api_v1_billing_credits_balance500_error1.py)</code> |
| 502 | <code>[ApiV1BillingCreditsBalance502Error1](bundle_social/models/api_v1_billing_credits_balance502_error1.py)</code> |
| 503 | <code>[ApiV1BillingCreditsBalance503Error1](bundle_social/models/api_v1_billing_credits_balance503_error1.py)</code> |
| 504 | <code>[ApiV1BillingCreditsBalance504Error1](bundle_social/models/api_v1_billing_credits_balance504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_quote_billable_usage(*, body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1BillingBillableUsageQuoteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it, and see whether your current balance covers it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit.credit_quote_billable_usage()
    # TODO: Handle 'response' of type ApiV1BillingBillableUsageQuoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditQuoteBillableUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.credit.credit_quote_billable_usage()
    # TODO: Handle 'response' of type ApiV1BillingBillableUsageQuoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreditQuoteBillableUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1BillingBillableUsageQuoteRequest](bundle_social/models/api_v1_billing_billable_usage_quote_request.py) \| [ApiV1BillingBillableUsageQuoteRequestDict](bundle_social/models/api_v1_billing_billable_usage_quote_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BillingBillableUsageQuoteResponse](bundle_social/models/api_v1_billing_billable_usage_quote_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[CreditQuoteBillableUsageErrorBody](bundle_social/errors/credit_quote_billable_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1BillingBillableUsageQuote400Error1](bundle_social/models/api_v1_billing_billable_usage_quote400_error1.py)</code> |
| 401 | <code>[ApiV1BillingBillableUsageQuote401Error1](bundle_social/models/api_v1_billing_billable_usage_quote401_error1.py)</code> |
| 403 | <code>[ApiV1BillingBillableUsageQuote403Error1](bundle_social/models/api_v1_billing_billable_usage_quote403_error1.py)</code> |
| 404 | <code>[ApiV1BillingBillableUsageQuote404Error1](bundle_social/models/api_v1_billing_billable_usage_quote404_error1.py)</code> |
| 429 | <code>[ApiV1BillingBillableUsageQuote429Error1](bundle_social/models/api_v1_billing_billable_usage_quote429_error1.py)</code> |
| 500 | <code>[ApiV1BillingBillableUsageQuote500Error1](bundle_social/models/api_v1_billing_billable_usage_quote500_error1.py)</code> |
| 502 | <code>[ApiV1BillingBillableUsageQuote502Error1](bundle_social/models/api_v1_billing_billable_usage_quote502_error1.py)</code> |
| 503 | <code>[ApiV1BillingBillableUsageQuote503Error1](bundle_social/models/api_v1_billing_billable_usage_quote503_error1.py)</code> |
| 504 | <code>[ApiV1BillingBillableUsageQuote504Error1](bundle_social/models/api_v1_billing_billable_usage_quote504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](bundle_social/apis/misc.py)

<details>
<summary><code>def misc_bluesky_delete_comment(*, body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscBlueskyCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_bluesky_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscBlueskyCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscBlueskyDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_bluesky_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscBlueskyCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscBlueskyDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscBlueskyCommentRequest](bundle_social/models/api_v1_misc_bluesky_comment_request.py) \| [ApiV1MiscBlueskyCommentRequestDict](bundle_social/models/api_v1_misc_bluesky_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscBlueskyCommentResponse](bundle_social/models/api_v1_misc_bluesky_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscBlueskyDeleteCommentErrorBody](bundle_social/errors/misc_bluesky_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscBlueskyComment400Error1](bundle_social/models/api_v1_misc_bluesky_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscBlueskyComment401Error1](bundle_social/models/api_v1_misc_bluesky_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscBlueskyComment403Error1](bundle_social/models/api_v1_misc_bluesky_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscBlueskyComment404Error1](bundle_social/models/api_v1_misc_bluesky_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscBlueskyComment429Error1](bundle_social/models/api_v1_misc_bluesky_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscBlueskyComment500Error1](bundle_social/models/api_v1_misc_bluesky_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscBlueskyComment502Error1](bundle_social/models/api_v1_misc_bluesky_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscBlueskyComment503Error1](bundle_social/models/api_v1_misc_bluesky_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscBlueskyComment504Error1](bundle_social/models/api_v1_misc_bluesky_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_bluesky_delete_post(*, body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscBlueskyPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_bluesky_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscBlueskyPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscBlueskyDeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_bluesky_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscBlueskyPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscBlueskyDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscBlueskyPostRequest](bundle_social/models/api_v1_misc_bluesky_post_request.py) \| [ApiV1MiscBlueskyPostRequestDict](bundle_social/models/api_v1_misc_bluesky_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscBlueskyPostResponse](bundle_social/models/api_v1_misc_bluesky_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscBlueskyDeletePostErrorBody](bundle_social/errors/misc_bluesky_delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscBlueskyPost400Error1](bundle_social/models/api_v1_misc_bluesky_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscBlueskyPost401Error1](bundle_social/models/api_v1_misc_bluesky_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscBlueskyPost403Error1](bundle_social/models/api_v1_misc_bluesky_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscBlueskyPost404Error1](bundle_social/models/api_v1_misc_bluesky_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscBlueskyPost429Error1](bundle_social/models/api_v1_misc_bluesky_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscBlueskyPost500Error1](bundle_social/models/api_v1_misc_bluesky_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscBlueskyPost502Error1](bundle_social/models/api_v1_misc_bluesky_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscBlueskyPost503Error1](bundle_social/models/api_v1_misc_bluesky_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscBlueskyPost504Error1](bundle_social/models/api_v1_misc_bluesky_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_discord_delete_message(*, body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscDiscordMessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Discord message.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_discord_delete_message()
    # TODO: Handle 'response' of type ApiV1MiscDiscordMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscDiscordDeleteMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_discord_delete_message()
    # TODO: Handle 'response' of type ApiV1MiscDiscordMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscDiscordDeleteMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscDiscordMessageRequest](bundle_social/models/api_v1_misc_discord_message_request.py) \| [ApiV1MiscDiscordMessageRequestDict](bundle_social/models/api_v1_misc_discord_message_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscDiscordMessageResponse](bundle_social/models/api_v1_misc_discord_message_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscDiscordDeleteMessageErrorBody](bundle_social/errors/misc_discord_delete_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscDiscordMessage400Error1](bundle_social/models/api_v1_misc_discord_message400_error1.py)</code> |
| 401 | <code>[ApiV1MiscDiscordMessage401Error1](bundle_social/models/api_v1_misc_discord_message401_error1.py)</code> |
| 403 | <code>[ApiV1MiscDiscordMessage403Error1](bundle_social/models/api_v1_misc_discord_message403_error1.py)</code> |
| 404 | <code>[ApiV1MiscDiscordMessage404Error1](bundle_social/models/api_v1_misc_discord_message404_error1.py)</code> |
| 429 | <code>[ApiV1MiscDiscordMessage429Error1](bundle_social/models/api_v1_misc_discord_message429_error1.py)</code> |
| 500 | <code>[ApiV1MiscDiscordMessage500Error1](bundle_social/models/api_v1_misc_discord_message500_error1.py)</code> |
| 502 | <code>[ApiV1MiscDiscordMessage502Error1](bundle_social/models/api_v1_misc_discord_message502_error1.py)</code> |
| 503 | <code>[ApiV1MiscDiscordMessage503Error1](bundle_social/models/api_v1_misc_discord_message503_error1.py)</code> |
| 504 | <code>[ApiV1MiscDiscordMessage504Error1](bundle_social/models/api_v1_misc_discord_message504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_delete_comment(*, body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookCommentResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscFacebookCommentRequest1](bundle_social/models/api_v1_misc_facebook_comment_request1.py) \| [ApiV1MiscFacebookCommentRequest1Dict](bundle_social/models/api_v1_misc_facebook_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse1](bundle_social/models/api_v1_misc_facebook_comment_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookDeleteCommentErrorBody](bundle_social/errors/misc_facebook_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookComment400Error1](bundle_social/models/api_v1_misc_facebook_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookComment401Error1](bundle_social/models/api_v1_misc_facebook_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookComment403Error1](bundle_social/models/api_v1_misc_facebook_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookComment404Error1](bundle_social/models/api_v1_misc_facebook_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookComment429Error1](bundle_social/models/api_v1_misc_facebook_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookComment500Error1](bundle_social/models/api_v1_misc_facebook_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookComment502Error1](bundle_social/models/api_v1_misc_facebook_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookComment503Error1](bundle_social/models/api_v1_misc_facebook_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookComment504Error1](bundle_social/models/api_v1_misc_facebook_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_delete_post(*, body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookPostResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook post or reel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookDeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscFacebookPostRequest1](bundle_social/models/api_v1_misc_facebook_post_request1.py) \| [ApiV1MiscFacebookPostRequest1Dict](bundle_social/models/api_v1_misc_facebook_post_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPostResponse1](bundle_social/models/api_v1_misc_facebook_post_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookDeletePostErrorBody](bundle_social/errors/misc_facebook_delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookPost400Error1](bundle_social/models/api_v1_misc_facebook_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookPost401Error1](bundle_social/models/api_v1_misc_facebook_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookPost403Error1](bundle_social/models/api_v1_misc_facebook_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookPost404Error1](bundle_social/models/api_v1_misc_facebook_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookPost429Error1](bundle_social/models/api_v1_misc_facebook_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookPost500Error1](bundle_social/models/api_v1_misc_facebook_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookPost502Error1](bundle_social/models/api_v1_misc_facebook_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookPost503Error1](bundle_social/models/api_v1_misc_facebook_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookPost504Error1](bundle_social/models/api_v1_misc_facebook_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_edit_comment(*, body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Facebook comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookEditCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookEditCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscFacebookCommentRequest](bundle_social/models/api_v1_misc_facebook_comment_request.py) \| [ApiV1MiscFacebookCommentRequestDict](bundle_social/models/api_v1_misc_facebook_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse](bundle_social/models/api_v1_misc_facebook_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookEditCommentErrorBody](bundle_social/errors/misc_facebook_edit_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookComment400Error1](bundle_social/models/api_v1_misc_facebook_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookComment401Error1](bundle_social/models/api_v1_misc_facebook_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookComment403Error1](bundle_social/models/api_v1_misc_facebook_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookComment404Error1](bundle_social/models/api_v1_misc_facebook_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookComment429Error1](bundle_social/models/api_v1_misc_facebook_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookComment500Error1](bundle_social/models/api_v1_misc_facebook_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookComment502Error1](bundle_social/models/api_v1_misc_facebook_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookComment503Error1](bundle_social/models/api_v1_misc_facebook_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookComment504Error1](bundle_social/models/api_v1_misc_facebook_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_edit_post(*, body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media cannot be changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookEditPostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookEditPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscFacebookPostRequest](bundle_social/models/api_v1_misc_facebook_post_request.py) \| [ApiV1MiscFacebookPostRequestDict](bundle_social/models/api_v1_misc_facebook_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPostResponse](bundle_social/models/api_v1_misc_facebook_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookEditPostErrorBody](bundle_social/errors/misc_facebook_edit_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookPost400Error1](bundle_social/models/api_v1_misc_facebook_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookPost401Error1](bundle_social/models/api_v1_misc_facebook_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookPost403Error1](bundle_social/models/api_v1_misc_facebook_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookPost404Error1](bundle_social/models/api_v1_misc_facebook_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookPost429Error1](bundle_social/models/api_v1_misc_facebook_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookPost500Error1](bundle_social/models/api_v1_misc_facebook_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookPost502Error1](bundle_social/models/api_v1_misc_facebook_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookPost503Error1](bundle_social/models/api_v1_misc_facebook_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookPost504Error1](bundle_social/models/api_v1_misc_facebook_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_recommendation_by_id(recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_recommendation_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_recommendation_by_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse1](bundle_social/models/api_v1_misc_facebook_recommendations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetRecommendationByIdErrorBody](bundle_social/errors/misc_facebook_get_recommendation_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendations400Error1](bundle_social/models/api_v1_misc_facebook_recommendations400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendations401Error1](bundle_social/models/api_v1_misc_facebook_recommendations401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendations403Error1](bundle_social/models/api_v1_misc_facebook_recommendations403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendations404Error1](bundle_social/models/api_v1_misc_facebook_recommendations404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendations429Error1](bundle_social/models/api_v1_misc_facebook_recommendations429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendations500Error1](bundle_social/models/api_v1_misc_facebook_recommendations500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendations502Error1](bundle_social/models/api_v1_misc_facebook_recommendations502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendations503Error1](bundle_social/models/api_v1_misc_facebook_recommendations503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendations504Error1](bundle_social/models/api_v1_misc_facebook_recommendations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_recommendation_comments(recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsCommentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_recommendation_comments("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_recommendation_comments(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsResponse](bundle_social/models/api_v1_misc_facebook_recommendations_comments_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetRecommendationCommentsErrorBody](bundle_social/errors/misc_facebook_get_recommendation_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsComments400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsComments401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsComments403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsComments404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsComments429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsComments500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsComments502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsComments503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsComments504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_recommendation_import_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Facebook recommendations import job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_recommendation_import_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationImportByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_recommendation_import_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationImportByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](bundle_social/models/api_v1_misc_facebook_recommendations_import_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetRecommendationImportByIdErrorBody](bundle_social/errors/misc_facebook_get_recommendation_import_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsImport400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsImport401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsImport403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsImport404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsImport429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsImport500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsImport502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsImport503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsImport504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_recommendation_import_status(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsImportResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_recommendation_import_status("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationImportStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_recommendation_import_status("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationImportStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse1](bundle_social/models/api_v1_misc_facebook_recommendations_import_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetRecommendationImportStatusErrorBody](bundle_social/errors/misc_facebook_get_recommendation_import_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsImport400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsImport401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsImport403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsImport404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsImport429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsImport500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsImport502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsImport503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsImport504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_recommendations(team_id: str, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Facebook Page recommendations pulled in by an import, with paging and your remaining import capacity. Use it to build a reputation-management inbox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_recommendations("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_recommendations("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>50.0</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse](bundle_social/models/api_v1_misc_facebook_recommendations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetRecommendationsErrorBody](bundle_social/errors/misc_facebook_get_recommendations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendations400Error1](bundle_social/models/api_v1_misc_facebook_recommendations400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendations401Error1](bundle_social/models/api_v1_misc_facebook_recommendations401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendations403Error1](bundle_social/models/api_v1_misc_facebook_recommendations403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendations404Error1](bundle_social/models/api_v1_misc_facebook_recommendations404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendations429Error1](bundle_social/models/api_v1_misc_facebook_recommendations429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendations500Error1](bundle_social/models/api_v1_misc_facebook_recommendations500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendations502Error1](bundle_social/models/api_v1_misc_facebook_recommendations502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendations503Error1](bundle_social/models/api_v1_misc_facebook_recommendations503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendations504Error1](bundle_social/models/api_v1_misc_facebook_recommendations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_text_format_presets(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookTextFormatPresetsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId, grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also accepted and passed straight through to Facebook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_text_format_presets()
    # TODO: Handle 'response' of type ApiV1MiscFacebookTextFormatPresetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetTextFormatPresetsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_text_format_presets()
    # TODO: Handle 'response' of type ApiV1MiscFacebookTextFormatPresetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetTextFormatPresetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookTextFormatPresetsResponse](bundle_social/models/api_v1_misc_facebook_text_format_presets_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetTextFormatPresetsErrorBody](bundle_social/errors/misc_facebook_get_text_format_presets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookTextFormatPresets400Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookTextFormatPresets401Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookTextFormatPresets403Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookTextFormatPresets404Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookTextFormatPresets429Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookTextFormatPresets500Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookTextFormatPresets502Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookTextFormatPresets503Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookTextFormatPresets504Error1](bundle_social/models/api_v1_misc_facebook_text_format_presets504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_get_token_debug(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookTokenDebugResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose permission errors when publishing fails.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_get_token_debug("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookTokenDebugResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetTokenDebugErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_get_token_debug("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookTokenDebugResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookGetTokenDebugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookTokenDebugResponse](bundle_social/models/api_v1_misc_facebook_token_debug_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookGetTokenDebugErrorBody](bundle_social/errors/misc_facebook_get_token_debug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookTokenDebug400Error1](bundle_social/models/api_v1_misc_facebook_token_debug400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookTokenDebug401Error1](bundle_social/models/api_v1_misc_facebook_token_debug401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookTokenDebug403Error1](bundle_social/models/api_v1_misc_facebook_token_debug403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookTokenDebug404Error1](bundle_social/models/api_v1_misc_facebook_token_debug404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookTokenDebug429Error1](bundle_social/models/api_v1_misc_facebook_token_debug429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookTokenDebug500Error1](bundle_social/models/api_v1_misc_facebook_token_debug500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookTokenDebug502Error1](bundle_social/models/api_v1_misc_facebook_token_debug502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookTokenDebug503Error1](bundle_social/models/api_v1_misc_facebook_token_debug503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookTokenDebug504Error1](bundle_social/models/api_v1_misc_facebook_token_debug504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_import_recommendations(*, body: ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_import_recommendations()
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookImportRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_import_recommendations()
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookImportRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscFacebookRecommendationsImportRequest](bundle_social/models/api_v1_misc_facebook_recommendations_import_request.py) \| [ApiV1MiscFacebookRecommendationsImportRequestDict](bundle_social/models/api_v1_misc_facebook_recommendations_import_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](bundle_social/models/api_v1_misc_facebook_recommendations_import_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookImportRecommendationsErrorBody](bundle_social/errors/misc_facebook_import_recommendations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsImport400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsImport401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsImport403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsImport404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import404_error1.py)</code> |
| 409 | <code>[ApiV1MiscFacebookRecommendationsImport409Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import409_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsImport429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsImport500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsImport502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsImport503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsImport504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_reply_to_recommendation(recommendation_id: str, *, body: ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsReplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of through Meta Business Suite.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_reply_to_recommendation("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookReplyToRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_reply_to_recommendation("some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookReplyToRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1MiscFacebookRecommendationsReplyRequest](bundle_social/models/api_v1_misc_facebook_recommendations_reply_request.py) \| [ApiV1MiscFacebookRecommendationsReplyRequestDict](bundle_social/models/api_v1_misc_facebook_recommendations_reply_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsReplyResponse](bundle_social/models/api_v1_misc_facebook_recommendations_reply_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookReplyToRecommendationErrorBody](bundle_social/errors/misc_facebook_reply_to_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsReply400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsReply401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsReply403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsReply404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsReply429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsReply500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsReply502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsReply503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsReply504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_reply504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_reply_to_recommendation_comment(recommendation_id: str, comment_id: str, *, body: ApiV1MiscFacebookRecommendationsCommentsReplyRequest | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookRecommendationsCommentsReplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a reply to a specific comment inside a Facebook recommendation thread.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_reply_to_recommendation_comment("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookReplyToRecommendationCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_reply_to_recommendation_comment(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookReplyToRecommendationCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1MiscFacebookRecommendationsCommentsReplyRequest](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_request.py) \| [ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsReplyResponse](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookReplyToRecommendationCommentErrorBody](bundle_social/errors/misc_facebook_reply_to_recommendation_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply400Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply401Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply403Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply404Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply429Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply500Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply502Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply503Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookRecommendationsCommentsReply504Error1](bundle_social/models/api_v1_misc_facebook_recommendations_comments_reply504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_facebook_search_pages(team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscFacebookPagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_facebook_search_pages("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookPagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookSearchPagesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_facebook_search_pages("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscFacebookPagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscFacebookSearchPagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>q</code> | <code>str</code> | Free-text query used to search Facebook Pages |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPagesResponse](bundle_social/models/api_v1_misc_facebook_pages_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscFacebookSearchPagesErrorBody](bundle_social/errors/misc_facebook_search_pages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscFacebookPages400Error1](bundle_social/models/api_v1_misc_facebook_pages400_error1.py)</code> |
| 401 | <code>[ApiV1MiscFacebookPages401Error1](bundle_social/models/api_v1_misc_facebook_pages401_error1.py)</code> |
| 403 | <code>[ApiV1MiscFacebookPages403Error1](bundle_social/models/api_v1_misc_facebook_pages403_error1.py)</code> |
| 404 | <code>[ApiV1MiscFacebookPages404Error1](bundle_social/models/api_v1_misc_facebook_pages404_error1.py)</code> |
| 429 | <code>[ApiV1MiscFacebookPages429Error1](bundle_social/models/api_v1_misc_facebook_pages429_error1.py)</code> |
| 500 | <code>[ApiV1MiscFacebookPages500Error1](bundle_social/models/api_v1_misc_facebook_pages500_error1.py)</code> |
| 502 | <code>[ApiV1MiscFacebookPages502Error1](bundle_social/models/api_v1_misc_facebook_pages502_error1.py)</code> |
| 503 | <code>[ApiV1MiscFacebookPages503Error1](bundle_social/models/api_v1_misc_facebook_pages503_error1.py)</code> |
| 504 | <code>[ApiV1MiscFacebookPages504Error1](bundle_social/models/api_v1_misc_facebook_pages504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_add_media(*, body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessMediaResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_add_media()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessAddMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_add_media()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessAddMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessMediaRequest](bundle_social/models/api_v1_misc_google_business_media_request.py) \| [ApiV1MiscGoogleBusinessMediaRequestDict](bundle_social/models/api_v1_misc_google_business_media_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse](bundle_social/models/api_v1_misc_google_business_media_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessAddMediaErrorBody](bundle_social/errors/misc_google_business_add_media_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessMedia400Error1](bundle_social/models/api_v1_misc_google_business_media400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessMedia401Error1](bundle_social/models/api_v1_misc_google_business_media401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessMedia403Error1](bundle_social/models/api_v1_misc_google_business_media403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessMedia404Error1](bundle_social/models/api_v1_misc_google_business_media404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessMedia429Error1](bundle_social/models/api_v1_misc_google_business_media429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessMedia500Error1](bundle_social/models/api_v1_misc_google_business_media500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessMedia502Error1](bundle_social/models/api_v1_misc_google_business_media502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessMedia503Error1](bundle_social/models/api_v1_misc_google_business_media503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessMedia504Error1](bundle_social/models/api_v1_misc_google_business_media504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_create_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can convert straight from the listing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_create_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessCreatePlaceActionLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_create_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessCreatePlaceActionLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request.py) \| [ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](bundle_social/models/api_v1_misc_google_business_location_place_action_links_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessCreatePlaceActionLinkErrorBody](bundle_social/errors/misc_google_business_create_place_action_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_delete_media(*, body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessMediaResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a photo or video from your Google Business Profile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_delete_media()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeleteMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_delete_media()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeleteMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessMediaRequest1](bundle_social/models/api_v1_misc_google_business_media_request1.py) \| [ApiV1MiscGoogleBusinessMediaRequest1Dict](bundle_social/models/api_v1_misc_google_business_media_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse2](bundle_social/models/api_v1_misc_google_business_media_response2.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessDeleteMediaErrorBody](bundle_social/errors/misc_google_business_delete_media_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessMedia400Error1](bundle_social/models/api_v1_misc_google_business_media400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessMedia401Error1](bundle_social/models/api_v1_misc_google_business_media401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessMedia403Error1](bundle_social/models/api_v1_misc_google_business_media403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessMedia404Error1](bundle_social/models/api_v1_misc_google_business_media404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessMedia429Error1](bundle_social/models/api_v1_misc_google_business_media429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessMedia500Error1](bundle_social/models/api_v1_misc_google_business_media500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessMedia502Error1](bundle_social/models/api_v1_misc_google_business_media502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessMedia503Error1](bundle_social/models/api_v1_misc_google_business_media503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessMedia504Error1](bundle_social/models/api_v1_misc_google_business_media504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_delete_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2 | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an action link from your Google Business Profile, for example when a booking URL is retired.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_delete_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeletePlaceActionLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_delete_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeletePlaceActionLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request2.py) \| [ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request2.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3](bundle_social/models/api_v1_misc_google_business_location_place_action_links_response3.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessDeletePlaceActionLinkErrorBody](bundle_social/errors/misc_google_business_delete_place_action_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_delete_post(*, body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Google Business post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessPostRequest](bundle_social/models/api_v1_misc_google_business_post_request.py) \| [ApiV1MiscGoogleBusinessPostRequestDict](bundle_social/models/api_v1_misc_google_business_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessPostResponse](bundle_social/models/api_v1_misc_google_business_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessDeletePostErrorBody](bundle_social/errors/misc_google_business_delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessPost400Error1](bundle_social/models/api_v1_misc_google_business_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessPost401Error1](bundle_social/models/api_v1_misc_google_business_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessPost403Error1](bundle_social/models/api_v1_misc_google_business_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessPost404Error1](bundle_social/models/api_v1_misc_google_business_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessPost429Error1](bundle_social/models/api_v1_misc_google_business_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessPost500Error1](bundle_social/models/api_v1_misc_google_business_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessPost502Error1](bundle_social/models/api_v1_misc_google_business_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessPost503Error1](bundle_social/models/api_v1_misc_google_business_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessPost504Error1](bundle_social/models/api_v1_misc_google_business_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_delete_review_reply(review_id: str, *, body: ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsReplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove your owner reply from a Google Review, leaving the customer's review in place.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_delete_review_reply("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeleteReviewReplyErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_delete_review_reply("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessDeleteReviewReplyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>review_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessReviewsReplyRequest1](bundle_social/models/api_v1_misc_google_business_reviews_reply_request1.py) \| [ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict](bundle_social/models/api_v1_misc_google_business_reviews_reply_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](bundle_social/models/api_v1_misc_google_business_reviews_reply_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessDeleteReviewReplyErrorBody](bundle_social/errors/misc_google_business_delete_review_reply_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviewsReply400Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviewsReply401Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviewsReply403Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviewsReply404Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviewsReply429Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviewsReply500Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviewsReply502Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviewsReply503Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviewsReply504Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_attributes(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationAttributesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the attributes currently set on your Google Business Profile location, such as accessibility, payment options, or amenities.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_attributes("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetAttributesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_attributes("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](bundle_social/models/api_v1_misc_google_business_location_attributes_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetAttributesErrorBody](bundle_social/errors/misc_google_business_get_attributes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationAttributes400Error1](bundle_social/models/api_v1_misc_google_business_location_attributes400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationAttributes401Error1](bundle_social/models/api_v1_misc_google_business_location_attributes401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationAttributes403Error1](bundle_social/models/api_v1_misc_google_business_location_attributes403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationAttributes404Error1](bundle_social/models/api_v1_misc_google_business_location_attributes404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationAttributes429Error1](bundle_social/models/api_v1_misc_google_business_location_attributes429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationAttributes500Error1](bundle_social/models/api_v1_misc_google_business_location_attributes500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationAttributes502Error1](bundle_social/models/api_v1_misc_google_business_location_attributes502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationAttributes503Error1](bundle_social/models/api_v1_misc_google_business_location_attributes503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationAttributes504Error1](bundle_social/models/api_v1_misc_google_business_location_attributes504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_food_menus(team_id: str, *, fields: list[Field3OrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,menus`) and repeated params (`fields=name&fields=menus`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_food_menus("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetFoodMenusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_food_menus("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetFoodMenusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>list&#91;[Field3OrStr](bundle_social/models/enums/field3.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](bundle_social/models/api_v1_misc_google_business_location_food_menus_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetFoodMenusErrorBody](bundle_social/errors/misc_google_business_get_food_menus_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus400Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus401Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus403Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus404Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus429Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus500Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus502Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus503Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus504Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_location(team_id: str, *, fields: list[FieldBundleSocialMiscApiOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,title`) and repeated params (`fields=name&fields=title`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_location("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_location("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>list&#91;[FieldBundleSocialMiscApiOrStr](bundle_social/models/enums/field_bundle_social_misc_api.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](bundle_social/models/api_v1_misc_google_business_location_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetLocationErrorBody](bundle_social/errors/misc_google_business_get_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocation400Error1](bundle_social/models/api_v1_misc_google_business_location400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocation401Error1](bundle_social/models/api_v1_misc_google_business_location401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocation403Error1](bundle_social/models/api_v1_misc_google_business_location403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocation404Error1](bundle_social/models/api_v1_misc_google_business_location404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocation429Error1](bundle_social/models/api_v1_misc_google_business_location429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocation500Error1](bundle_social/models/api_v1_misc_google_business_location500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocation502Error1](bundle_social/models/api_v1_misc_google_business_location502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocation503Error1](bundle_social/models/api_v1_misc_google_business_location503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocation504Error1](bundle_social/models/api_v1_misc_google_business_location504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_review_by_id(review_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_review_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_review_by_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>review_id</code> | <code>str</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse1](bundle_social/models/api_v1_misc_google_business_reviews_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetReviewByIdErrorBody](bundle_social/errors/misc_google_business_get_review_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviews400Error1](bundle_social/models/api_v1_misc_google_business_reviews400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviews401Error1](bundle_social/models/api_v1_misc_google_business_reviews401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviews403Error1](bundle_social/models/api_v1_misc_google_business_reviews403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviews404Error1](bundle_social/models/api_v1_misc_google_business_reviews404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviews429Error1](bundle_social/models/api_v1_misc_google_business_reviews429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviews500Error1](bundle_social/models/api_v1_misc_google_business_reviews500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviews502Error1](bundle_social/models/api_v1_misc_google_business_reviews502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviews503Error1](bundle_social/models/api_v1_misc_google_business_reviews503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviews504Error1](bundle_social/models/api_v1_misc_google_business_reviews504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_review_import_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Google Reviews import job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_review_import_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewImportByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_review_import_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewImportByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](bundle_social/models/api_v1_misc_google_business_reviews_import_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetReviewImportByIdErrorBody](bundle_social/errors/misc_google_business_get_review_import_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviewsImport400Error1](bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviewsImport401Error1](bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviewsImport403Error1](bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviewsImport404Error1](bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviewsImport429Error1](bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviewsImport500Error1](bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviewsImport502Error1](bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviewsImport503Error1](bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviewsImport504Error1](bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_review_import_status(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsImportResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_review_import_status("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewImportStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_review_import_status("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewImportStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse1](bundle_social/models/api_v1_misc_google_business_reviews_import_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetReviewImportStatusErrorBody](bundle_social/errors/misc_google_business_get_review_import_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviewsImport400Error1](bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviewsImport401Error1](bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviewsImport403Error1](bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviewsImport404Error1](bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviewsImport429Error1](bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviewsImport500Error1](bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviewsImport502Error1](bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviewsImport503Error1](bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviewsImport504Error1](bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_reviews(team_id: str, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to build a review inbox or monitor rating trends.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_reviews("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_reviews("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>50.0</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse](bundle_social/models/api_v1_misc_google_business_reviews_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetReviewsErrorBody](bundle_social/errors/misc_google_business_get_reviews_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviews400Error1](bundle_social/models/api_v1_misc_google_business_reviews400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviews401Error1](bundle_social/models/api_v1_misc_google_business_reviews401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviews403Error1](bundle_social/models/api_v1_misc_google_business_reviews403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviews404Error1](bundle_social/models/api_v1_misc_google_business_reviews404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviews429Error1](bundle_social/models/api_v1_misc_google_business_reviews429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviews500Error1](bundle_social/models/api_v1_misc_google_business_reviews500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviews502Error1](bundle_social/models/api_v1_misc_google_business_reviews502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviews503Error1](bundle_social/models/api_v1_misc_google_business_reviews503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviews504Error1](bundle_social/models/api_v1_misc_google_business_reviews504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_get_service_list(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationServiceListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the services listed on your Google Business Profile, including custom services and prices.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_get_service_list("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetServiceListErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_get_service_list("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessGetServiceListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](bundle_social/models/api_v1_misc_google_business_location_service_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessGetServiceListErrorBody](bundle_social/errors/misc_google_business_get_service_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationServiceList400Error1](bundle_social/models/api_v1_misc_google_business_location_service_list400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationServiceList401Error1](bundle_social/models/api_v1_misc_google_business_location_service_list401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationServiceList403Error1](bundle_social/models/api_v1_misc_google_business_location_service_list403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationServiceList404Error1](bundle_social/models/api_v1_misc_google_business_location_service_list404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationServiceList429Error1](bundle_social/models/api_v1_misc_google_business_location_service_list429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationServiceList500Error1](bundle_social/models/api_v1_misc_google_business_location_service_list500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationServiceList502Error1](bundle_social/models/api_v1_misc_google_business_location_service_list502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationServiceList503Error1](bundle_social/models/api_v1_misc_google_business_location_service_list503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationServiceList504Error1](bundle_social/models/api_v1_misc_google_business_location_service_list504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_import_reviews(*, body: ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_import_reviews()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessImportReviewsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_import_reviews()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessImportReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessReviewsImportRequest](bundle_social/models/api_v1_misc_google_business_reviews_import_request.py) \| [ApiV1MiscGoogleBusinessReviewsImportRequestDict](bundle_social/models/api_v1_misc_google_business_reviews_import_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](bundle_social/models/api_v1_misc_google_business_reviews_import_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessImportReviewsErrorBody](bundle_social/errors/misc_google_business_import_reviews_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviewsImport400Error1](bundle_social/models/api_v1_misc_google_business_reviews_import400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviewsImport401Error1](bundle_social/models/api_v1_misc_google_business_reviews_import401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviewsImport403Error1](bundle_social/models/api_v1_misc_google_business_reviews_import403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviewsImport404Error1](bundle_social/models/api_v1_misc_google_business_reviews_import404_error1.py)</code> |
| 409 | <code>[ApiV1MiscGoogleBusinessReviewsImport409Error1](bundle_social/models/api_v1_misc_google_business_reviews_import409_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviewsImport429Error1](bundle_social/models/api_v1_misc_google_business_reviews_import429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviewsImport500Error1](bundle_social/models/api_v1_misc_google_business_reviews_import500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviewsImport502Error1](bundle_social/models/api_v1_misc_google_business_reviews_import502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviewsImport503Error1](bundle_social/models/api_v1_misc_google_business_reviews_import503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviewsImport504Error1](bundle_social/models/api_v1_misc_google_business_reviews_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_list_available_attributes(team_id: str, *, language_code: str | None = None, region_code: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the attributes Google allows for your location's category and country. Check this before updating attributes, since the valid set differs per business category. `regionCode`/`languageCode` are honoured by looking the attributes up through the location's primary category; when that category or a region code cannot be resolved (common for service-area businesses with no storefront address) the location's own defaults are returned instead and `lookup.by` comes back as `location`, meaning those two parameters were not applied.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_list_available_attributes("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListAvailableAttributesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_list_available_attributes("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListAvailableAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>language_code</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>region_code</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse](bundle_social/models/api_v1_misc_google_business_location_attributes_available_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessListAvailableAttributesErrorBody](bundle_social/errors/misc_google_business_list_available_attributes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1](bundle_social/models/api_v1_misc_google_business_location_attributes_available504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_list_categories(team_id: str, region_code: str, language_code: str, *, names: list[str] | None = None, filter_: str | None = None, page_size: int | None = 50, page_token: str | None = None, view: ViewOrStr | None = View.BASIC, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires `regionCode` and `languageCode`. Default `view=BASIC`. Optional `names` fetches exact category IDs through `categories:batchGet`; otherwise `filter` supports `displayName` prefix search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_list_categories(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListCategoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_list_categories(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>region_code</code> | <code>str</code> | Value sent with the request. |
| <code>language_code</code> | <code>str</code> | Value sent with the request. |
| <code>names</code> | <code>list&#91;str&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>view</code> | <code>[ViewOrStr](bundle_social/models/enums/view.py) \| None</code> | Value sent with the request.<br>**Default**: <code>View.BASIC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse](bundle_social/models/api_v1_misc_google_business_location_categories_available_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessListCategoriesErrorBody](bundle_social/errors/misc_google_business_list_categories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1](bundle_social/models/api_v1_misc_google_business_location_categories_available504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_list_media(team_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessMediaResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are live before adding or removing media.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_list_media("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_list_media("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse1](bundle_social/models/api_v1_misc_google_business_media_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessListMediaErrorBody](bundle_social/errors/misc_google_business_list_media_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessMedia400Error1](bundle_social/models/api_v1_misc_google_business_media400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessMedia401Error1](bundle_social/models/api_v1_misc_google_business_media401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessMedia403Error1](bundle_social/models/api_v1_misc_google_business_media403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessMedia404Error1](bundle_social/models/api_v1_misc_google_business_media404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessMedia429Error1](bundle_social/models/api_v1_misc_google_business_media429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessMedia500Error1](bundle_social/models/api_v1_misc_google_business_media500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessMedia502Error1](bundle_social/models/api_v1_misc_google_business_media502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessMedia503Error1](bundle_social/models/api_v1_misc_google_business_media503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessMedia504Error1](bundle_social/models/api_v1_misc_google_business_media504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_list_place_action_links(team_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_list_place_action_links("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListPlaceActionLinksErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_list_place_action_links("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListPlaceActionLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse](bundle_social/models/api_v1_misc_google_business_location_place_action_links_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessListPlaceActionLinksErrorBody](bundle_social/errors/misc_google_business_list_place_action_links_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_list_search_keywords(team_id: str, start_month: str, end_month: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monthly search keyword impressions for your selected location. `startMonth`/`endMonth` are inclusive `YYYY-MM` values; counts are aggregated across the whole range, so request a single month for a per-month figure. Each keyword returns either an exact `value` or a `threshold`, meaning the real count is below that number: low-volume keywords are only ever reported as a threshold, so treat a null `value` as suppressed rather than zero. Counts are unique users, not raw impressions. Paginated with `pageToken`/`nextPageToken`, max `pageSize` 100.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_list_search_keywords(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListSearchKeywordsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_list_search_keywords(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessListSearchKeywordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>start_month</code> | <code>str</code> | Month in `YYYY-MM` format, inclusive. |
| <code>end_month</code> | <code>str</code> | Month in `YYYY-MM` format, inclusive. |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse](bundle_social/models/api_v1_misc_google_business_location_search_keywords_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessListSearchKeywordsErrorBody](bundle_social/errors/misc_google_business_list_search_keywords_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1](bundle_social/models/api_v1_misc_google_business_location_search_keywords504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_reply_to_review(review_id: str, *, body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessReviewsReplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending again overwrites the previous text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_reply_to_review("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessReplyToReviewErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_reply_to_review("some example string")
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessReplyToReviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>review_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessReviewsReplyRequest](bundle_social/models/api_v1_misc_google_business_reviews_reply_request.py) \| [ApiV1MiscGoogleBusinessReviewsReplyRequestDict](bundle_social/models/api_v1_misc_google_business_reviews_reply_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](bundle_social/models/api_v1_misc_google_business_reviews_reply_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessReplyToReviewErrorBody](bundle_social/errors/misc_google_business_reply_to_review_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessReviewsReply400Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessReviewsReply401Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessReviewsReply403Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessReviewsReply404Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessReviewsReply429Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessReviewsReply500Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessReviewsReply502Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessReviewsReply503Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessReviewsReply504Error1](bundle_social/models/api_v1_misc_google_business_reviews_reply504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_attributes(*, body: ApiV1MiscGoogleBusinessLocationAttributesRequest | ApiV1MiscGoogleBusinessLocationAttributesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationAttributesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set or change attributes on your Google Business Profile location. Complete attributes help your listing surface for more specific local searches.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_attributes()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateAttributesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_attributes()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationAttributesRequest](bundle_social/models/api_v1_misc_google_business_location_attributes_request.py) \| [ApiV1MiscGoogleBusinessLocationAttributesRequestDict](bundle_social/models/api_v1_misc_google_business_location_attributes_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](bundle_social/models/api_v1_misc_google_business_location_attributes_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdateAttributesErrorBody](bundle_social/errors/misc_google_business_update_attributes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationAttributes400Error1](bundle_social/models/api_v1_misc_google_business_location_attributes400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationAttributes401Error1](bundle_social/models/api_v1_misc_google_business_location_attributes401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationAttributes403Error1](bundle_social/models/api_v1_misc_google_business_location_attributes403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationAttributes404Error1](bundle_social/models/api_v1_misc_google_business_location_attributes404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationAttributes429Error1](bundle_social/models/api_v1_misc_google_business_location_attributes429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationAttributes500Error1](bundle_social/models/api_v1_misc_google_business_location_attributes500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationAttributes502Error1](bundle_social/models/api_v1_misc_google_business_location_attributes502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationAttributes503Error1](bundle_social/models/api_v1_misc_google_business_location_attributes503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationAttributes504Error1](bundle_social/models/api_v1_misc_google_business_location_attributes504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_food_menus(*, body: ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`menus`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_food_menus()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateFoodMenusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_food_menus()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateFoodMenusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationFoodMenusRequest](bundle_social/models/api_v1_misc_google_business_location_food_menus_request.py) \| [ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict](bundle_social/models/api_v1_misc_google_business_location_food_menus_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](bundle_social/models/api_v1_misc_google_business_location_food_menus_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdateFoodMenusErrorBody](bundle_social/errors/misc_google_business_update_food_menus_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus400Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus401Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus403Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus404Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus429Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus500Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus502Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus503Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationFoodMenus504Error1](bundle_social/models/api_v1_misc_google_business_location_food_menus504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_hours(*, body: ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationHoursResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`regularHours`, `specialHours`, `moreHours`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_hours()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationHoursResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateHoursErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_hours()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationHoursResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateHoursErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationHoursRequest](bundle_social/models/api_v1_misc_google_business_location_hours_request.py) \| [ApiV1MiscGoogleBusinessLocationHoursRequestDict](bundle_social/models/api_v1_misc_google_business_location_hours_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationHoursResponse](bundle_social/models/api_v1_misc_google_business_location_hours_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdateHoursErrorBody](bundle_social/errors/misc_google_business_update_hours_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationHours400Error1](bundle_social/models/api_v1_misc_google_business_location_hours400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationHours401Error1](bundle_social/models/api_v1_misc_google_business_location_hours401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationHours403Error1](bundle_social/models/api_v1_misc_google_business_location_hours403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationHours404Error1](bundle_social/models/api_v1_misc_google_business_location_hours404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationHours429Error1](bundle_social/models/api_v1_misc_google_business_location_hours429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationHours500Error1](bundle_social/models/api_v1_misc_google_business_location_hours500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationHours502Error1](bundle_social/models/api_v1_misc_google_business_location_hours502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationHours503Error1](bundle_social/models/api_v1_misc_google_business_location_hours503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationHours504Error1](bundle_social/models/api_v1_misc_google_business_location_hours504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_location(*, body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Field mask is derived automatically from provided fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_location()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_location()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationRequest](bundle_social/models/api_v1_misc_google_business_location_request.py) \| [ApiV1MiscGoogleBusinessLocationRequestDict](bundle_social/models/api_v1_misc_google_business_location_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](bundle_social/models/api_v1_misc_google_business_location_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdateLocationErrorBody](bundle_social/errors/misc_google_business_update_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocation400Error1](bundle_social/models/api_v1_misc_google_business_location400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocation401Error1](bundle_social/models/api_v1_misc_google_business_location401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocation403Error1](bundle_social/models/api_v1_misc_google_business_location403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocation404Error1](bundle_social/models/api_v1_misc_google_business_location404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocation429Error1](bundle_social/models/api_v1_misc_google_business_location429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocation500Error1](bundle_social/models/api_v1_misc_google_business_location500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocation502Error1](bundle_social/models/api_v1_misc_google_business_location502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocation503Error1](bundle_social/models/api_v1_misc_google_business_location503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocation504Error1](bundle_social/models/api_v1_misc_google_business_location504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_place_action_link(*, body: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1 | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`uri`, `placeActionType`, `isPreferred`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdatePlaceActionLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_place_action_link()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdatePlaceActionLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request1.py) \| [ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict](bundle_social/models/api_v1_misc_google_business_location_place_action_links_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](bundle_social/models/api_v1_misc_google_business_location_place_action_links_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdatePlaceActionLinkErrorBody](bundle_social/errors/misc_google_business_update_place_action_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1](bundle_social/models/api_v1_misc_google_business_location_place_action_links504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_google_business_update_service_list(*, body: ApiV1MiscGoogleBusinessLocationServiceListRequest | ApiV1MiscGoogleBusinessLocationServiceListRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscGoogleBusinessLocationServiceListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`serviceItems`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_google_business_update_service_list()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateServiceListErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_google_business_update_service_list()
    # TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscGoogleBusinessUpdateServiceListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscGoogleBusinessLocationServiceListRequest](bundle_social/models/api_v1_misc_google_business_location_service_list_request.py) \| [ApiV1MiscGoogleBusinessLocationServiceListRequestDict](bundle_social/models/api_v1_misc_google_business_location_service_list_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](bundle_social/models/api_v1_misc_google_business_location_service_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscGoogleBusinessUpdateServiceListErrorBody](bundle_social/errors/misc_google_business_update_service_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscGoogleBusinessLocationServiceList400Error1](bundle_social/models/api_v1_misc_google_business_location_service_list400_error1.py)</code> |
| 401 | <code>[ApiV1MiscGoogleBusinessLocationServiceList401Error1](bundle_social/models/api_v1_misc_google_business_location_service_list401_error1.py)</code> |
| 403 | <code>[ApiV1MiscGoogleBusinessLocationServiceList403Error1](bundle_social/models/api_v1_misc_google_business_location_service_list403_error1.py)</code> |
| 404 | <code>[ApiV1MiscGoogleBusinessLocationServiceList404Error1](bundle_social/models/api_v1_misc_google_business_location_service_list404_error1.py)</code> |
| 429 | <code>[ApiV1MiscGoogleBusinessLocationServiceList429Error1](bundle_social/models/api_v1_misc_google_business_location_service_list429_error1.py)</code> |
| 500 | <code>[ApiV1MiscGoogleBusinessLocationServiceList500Error1](bundle_social/models/api_v1_misc_google_business_location_service_list500_error1.py)</code> |
| 502 | <code>[ApiV1MiscGoogleBusinessLocationServiceList502Error1](bundle_social/models/api_v1_misc_google_business_location_service_list502_error1.py)</code> |
| 503 | <code>[ApiV1MiscGoogleBusinessLocationServiceList503Error1](bundle_social/models/api_v1_misc_google_business_location_service_list503_error1.py)</code> |
| 504 | <code>[ApiV1MiscGoogleBusinessLocationServiceList504Error1](bundle_social/models/api_v1_misc_google_business_location_service_list504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_instagram_business_discovery(team_id: str, username: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscInstagramTagsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and profile picture if available.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_instagram_business_discovery("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscInstagramTagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramBusinessDiscoveryErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_instagram_business_discovery("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscInstagramTagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramBusinessDiscoveryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>username</code> | <code>str</code> | Instagram username to search for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramTagsResponse](bundle_social/models/api_v1_misc_instagram_tags_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscInstagramBusinessDiscoveryErrorBody](bundle_social/errors/misc_instagram_business_discovery_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscInstagramTags400Error1](bundle_social/models/api_v1_misc_instagram_tags400_error1.py)</code> |
| 401 | <code>[ApiV1MiscInstagramTags401Error1](bundle_social/models/api_v1_misc_instagram_tags401_error1.py)</code> |
| 403 | <code>[ApiV1MiscInstagramTags403Error1](bundle_social/models/api_v1_misc_instagram_tags403_error1.py)</code> |
| 404 | <code>[ApiV1MiscInstagramTags404Error1](bundle_social/models/api_v1_misc_instagram_tags404_error1.py)</code> |
| 429 | <code>[ApiV1MiscInstagramTags429Error1](bundle_social/models/api_v1_misc_instagram_tags429_error1.py)</code> |
| 500 | <code>[ApiV1MiscInstagramTags500Error1](bundle_social/models/api_v1_misc_instagram_tags500_error1.py)</code> |
| 502 | <code>[ApiV1MiscInstagramTags502Error1](bundle_social/models/api_v1_misc_instagram_tags502_error1.py)</code> |
| 503 | <code>[ApiV1MiscInstagramTags503Error1](bundle_social/models/api_v1_misc_instagram_tags503_error1.py)</code> |
| 504 | <code>[ApiV1MiscInstagramTags504Error1](bundle_social/models/api_v1_misc_instagram_tags504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_instagram_delete_comment(*, body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscInstagramCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Instagram comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_instagram_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscInstagramCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_instagram_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscInstagramCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscInstagramCommentRequest](bundle_social/models/api_v1_misc_instagram_comment_request.py) \| [ApiV1MiscInstagramCommentRequestDict](bundle_social/models/api_v1_misc_instagram_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramCommentResponse](bundle_social/models/api_v1_misc_instagram_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscInstagramDeleteCommentErrorBody](bundle_social/errors/misc_instagram_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscInstagramComment400Error1](bundle_social/models/api_v1_misc_instagram_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscInstagramComment401Error1](bundle_social/models/api_v1_misc_instagram_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscInstagramComment403Error1](bundle_social/models/api_v1_misc_instagram_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscInstagramComment404Error1](bundle_social/models/api_v1_misc_instagram_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscInstagramComment429Error1](bundle_social/models/api_v1_misc_instagram_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscInstagramComment500Error1](bundle_social/models/api_v1_misc_instagram_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscInstagramComment502Error1](bundle_social/models/api_v1_misc_instagram_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscInstagramComment503Error1](bundle_social/models/api_v1_misc_instagram_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscInstagramComment504Error1](bundle_social/models/api_v1_misc_instagram_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_instagram_search_audio(team_id: str, audio_type: AudioTypeOrStr, *, search_query: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscInstagramAudioResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts connected via Facebook Login.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_instagram_search_audio("some example string", AudioType.ORIGINAL_SOUND)
    # TODO: Handle 'response' of type ApiV1MiscInstagramAudioResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramSearchAudioErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_instagram_search_audio("some example string", AudioType.ORIGINAL_SOUND)
    # TODO: Handle 'response' of type ApiV1MiscInstagramAudioResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramSearchAudioErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>audio_type</code> | <code>[AudioTypeOrStr](bundle_social/models/enums/audio_type.py)</code> | The type of Instagram audio to search for. |
| <code>search_query</code> | <code>str \| None</code> | Optional keyword search query.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramAudioResponse](bundle_social/models/api_v1_misc_instagram_audio_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscInstagramSearchAudioErrorBody](bundle_social/errors/misc_instagram_search_audio_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscInstagramAudio400Error1](bundle_social/models/api_v1_misc_instagram_audio400_error1.py)</code> |
| 401 | <code>[ApiV1MiscInstagramAudio401Error1](bundle_social/models/api_v1_misc_instagram_audio401_error1.py)</code> |
| 403 | <code>[ApiV1MiscInstagramAudio403Error1](bundle_social/models/api_v1_misc_instagram_audio403_error1.py)</code> |
| 404 | <code>[ApiV1MiscInstagramAudio404Error1](bundle_social/models/api_v1_misc_instagram_audio404_error1.py)</code> |
| 429 | <code>[ApiV1MiscInstagramAudio429Error1](bundle_social/models/api_v1_misc_instagram_audio429_error1.py)</code> |
| 500 | <code>[ApiV1MiscInstagramAudio500Error1](bundle_social/models/api_v1_misc_instagram_audio500_error1.py)</code> |
| 502 | <code>[ApiV1MiscInstagramAudio502Error1](bundle_social/models/api_v1_misc_instagram_audio502_error1.py)</code> |
| 503 | <code>[ApiV1MiscInstagramAudio503Error1](bundle_social/models/api_v1_misc_instagram_audio503_error1.py)</code> |
| 504 | <code>[ApiV1MiscInstagramAudio504Error1](bundle_social/models/api_v1_misc_instagram_audio504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_instagram_search_locations(team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscInstagramLocationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Facebook Pages with physical location data and returns IDs that can be used as data.INSTAGRAM.locationId.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_instagram_search_locations("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscInstagramLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramSearchLocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_instagram_search_locations("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscInstagramLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscInstagramSearchLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>q</code> | <code>str</code> | Free-text query used to search location pages |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramLocationsResponse](bundle_social/models/api_v1_misc_instagram_locations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscInstagramSearchLocationsErrorBody](bundle_social/errors/misc_instagram_search_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscInstagramLocations400Error1](bundle_social/models/api_v1_misc_instagram_locations400_error1.py)</code> |
| 401 | <code>[ApiV1MiscInstagramLocations401Error1](bundle_social/models/api_v1_misc_instagram_locations401_error1.py)</code> |
| 403 | <code>[ApiV1MiscInstagramLocations403Error1](bundle_social/models/api_v1_misc_instagram_locations403_error1.py)</code> |
| 404 | <code>[ApiV1MiscInstagramLocations404Error1](bundle_social/models/api_v1_misc_instagram_locations404_error1.py)</code> |
| 429 | <code>[ApiV1MiscInstagramLocations429Error1](bundle_social/models/api_v1_misc_instagram_locations429_error1.py)</code> |
| 500 | <code>[ApiV1MiscInstagramLocations500Error1](bundle_social/models/api_v1_misc_instagram_locations500_error1.py)</code> |
| 502 | <code>[ApiV1MiscInstagramLocations502Error1](bundle_social/models/api_v1_misc_instagram_locations502_error1.py)</code> |
| 503 | <code>[ApiV1MiscInstagramLocations503Error1](bundle_social/models/api_v1_misc_instagram_locations503_error1.py)</code> |
| 504 | <code>[ApiV1MiscInstagramLocations504Error1](bundle_social/models/api_v1_misc_instagram_locations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_build_commentary(*, body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinMentionsBuilderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_build_commentary()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsBuilderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinBuildCommentaryErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_build_commentary()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsBuilderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinBuildCommentaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinMentionsBuilderRequest](bundle_social/models/api_v1_misc_linkedin_mentions_builder_request.py) \| [ApiV1MiscLinkedinMentionsBuilderRequestDict](bundle_social/models/api_v1_misc_linkedin_mentions_builder_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinMentionsBuilderResponse](bundle_social/models/api_v1_misc_linkedin_mentions_builder_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinBuildCommentaryErrorBody](bundle_social/errors/misc_linkedin_build_commentary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinMentionsBuilder400Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinMentionsBuilder401Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinMentionsBuilder403Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinMentionsBuilder404Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinMentionsBuilder429Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinMentionsBuilder500Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinMentionsBuilder502Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinMentionsBuilder503Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinMentionsBuilder504Error1](bundle_social/models/api_v1_misc_linkedin_mentions_builder504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_delete_comment(*, body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinCommentResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinCommentRequest1](bundle_social/models/api_v1_misc_linkedin_comment_request1.py) \| [ApiV1MiscLinkedinCommentRequest1Dict](bundle_social/models/api_v1_misc_linkedin_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse1](bundle_social/models/api_v1_misc_linkedin_comment_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinDeleteCommentErrorBody](bundle_social/errors/misc_linkedin_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinComment400Error1](bundle_social/models/api_v1_misc_linkedin_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinComment401Error1](bundle_social/models/api_v1_misc_linkedin_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinComment403Error1](bundle_social/models/api_v1_misc_linkedin_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinComment404Error1](bundle_social/models/api_v1_misc_linkedin_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinComment429Error1](bundle_social/models/api_v1_misc_linkedin_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinComment500Error1](bundle_social/models/api_v1_misc_linkedin_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinComment502Error1](bundle_social/models/api_v1_misc_linkedin_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinComment503Error1](bundle_social/models/api_v1_misc_linkedin_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinComment504Error1](bundle_social/models/api_v1_misc_linkedin_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_delete_post(*, body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinPostResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinDeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinPostRequest1](bundle_social/models/api_v1_misc_linkedin_post_request1.py) \| [ApiV1MiscLinkedinPostRequest1Dict](bundle_social/models/api_v1_misc_linkedin_post_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse1](bundle_social/models/api_v1_misc_linkedin_post_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinDeletePostErrorBody](bundle_social/errors/misc_linkedin_delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinPost400Error1](bundle_social/models/api_v1_misc_linkedin_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinPost401Error1](bundle_social/models/api_v1_misc_linkedin_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinPost403Error1](bundle_social/models/api_v1_misc_linkedin_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinPost404Error1](bundle_social/models/api_v1_misc_linkedin_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinPost429Error1](bundle_social/models/api_v1_misc_linkedin_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinPost500Error1](bundle_social/models/api_v1_misc_linkedin_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinPost502Error1](bundle_social/models/api_v1_misc_linkedin_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinPost503Error1](bundle_social/models/api_v1_misc_linkedin_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinPost504Error1](bundle_social/models/api_v1_misc_linkedin_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_edit_comment(*, body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinEditCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinEditCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinCommentRequest](bundle_social/models/api_v1_misc_linkedin_comment_request.py) \| [ApiV1MiscLinkedinCommentRequestDict](bundle_social/models/api_v1_misc_linkedin_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse](bundle_social/models/api_v1_misc_linkedin_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinEditCommentErrorBody](bundle_social/errors/misc_linkedin_edit_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinComment400Error1](bundle_social/models/api_v1_misc_linkedin_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinComment401Error1](bundle_social/models/api_v1_misc_linkedin_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinComment403Error1](bundle_social/models/api_v1_misc_linkedin_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinComment404Error1](bundle_social/models/api_v1_misc_linkedin_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinComment429Error1](bundle_social/models/api_v1_misc_linkedin_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinComment500Error1](bundle_social/models/api_v1_misc_linkedin_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinComment502Error1](bundle_social/models/api_v1_misc_linkedin_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinComment503Error1](bundle_social/models/api_v1_misc_linkedin_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinComment504Error1](bundle_social/models/api_v1_misc_linkedin_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_edit_post(*, body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinEditPostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinEditPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinPostRequest](bundle_social/models/api_v1_misc_linkedin_post_request.py) \| [ApiV1MiscLinkedinPostRequestDict](bundle_social/models/api_v1_misc_linkedin_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse](bundle_social/models/api_v1_misc_linkedin_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinEditPostErrorBody](bundle_social/errors/misc_linkedin_edit_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinPost400Error1](bundle_social/models/api_v1_misc_linkedin_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinPost401Error1](bundle_social/models/api_v1_misc_linkedin_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinPost403Error1](bundle_social/models/api_v1_misc_linkedin_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinPost404Error1](bundle_social/models/api_v1_misc_linkedin_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinPost429Error1](bundle_social/models/api_v1_misc_linkedin_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinPost500Error1](bundle_social/models/api_v1_misc_linkedin_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinPost502Error1](bundle_social/models/api_v1_misc_linkedin_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinPost503Error1](bundle_social/models/api_v1_misc_linkedin_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinPost504Error1](bundle_social/models/api_v1_misc_linkedin_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_get_tags(team_id: str, *, q: str | None = None, url: str | None = None, display_name: str | None = None, scope: ScopeOrStr | None = Scope.ALL, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinMentionsTagsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly (case sensitive), so a vanity slug never works. When a person is resolved from `url` but LinkedIn does not expose their name, the tag comes back with an empty `display` and `needsDisplayName: true` — pass `displayName` to set it. Note that a page can only mention its own followers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_get_tags("some example string")
    # TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsTagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinGetTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_get_tags("some example string")
    # TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsTagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinGetTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>display_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>scope</code> | <code>[ScopeOrStr](bundle_social/models/enums/scope.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Scope.ALL</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinMentionsTagsResponse](bundle_social/models/api_v1_misc_linkedin_mentions_tags_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinGetTagsErrorBody](bundle_social/errors/misc_linkedin_get_tags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinMentionsTags400Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinMentionsTags401Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinMentionsTags403Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinMentionsTags404Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags404_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinMentionsTags429Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinMentionsTags500Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinMentionsTags502Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinMentionsTags503Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinMentionsTags504Error1](bundle_social/models/api_v1_misc_linkedin_mentions_tags504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_linkedin_reshare_post(*, body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscLinkedinPostReshareResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a LinkedIn reshare as the currently selected LinkedIn channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_linkedin_reshare_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostReshareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinResharePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_linkedin_reshare_post()
    # TODO: Handle 'response' of type ApiV1MiscLinkedinPostReshareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscLinkedinResharePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscLinkedinPostReshareRequest](bundle_social/models/api_v1_misc_linkedin_post_reshare_request.py) \| [ApiV1MiscLinkedinPostReshareRequestDict](bundle_social/models/api_v1_misc_linkedin_post_reshare_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostReshareResponse](bundle_social/models/api_v1_misc_linkedin_post_reshare_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscLinkedinResharePostErrorBody](bundle_social/errors/misc_linkedin_reshare_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscLinkedinPostReshare400Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare400_error1.py)</code> |
| 401 | <code>[ApiV1MiscLinkedinPostReshare401Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare401_error1.py)</code> |
| 403 | <code>[ApiV1MiscLinkedinPostReshare403Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare403_error1.py)</code> |
| 404 | <code>[ApiV1MiscLinkedinPostReshare404Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare404_error1.py)</code> |
| 422 | <code>[ApiV1MiscLinkedinPostReshare422Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare422_error1.py)</code> |
| 429 | <code>[ApiV1MiscLinkedinPostReshare429Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare429_error1.py)</code> |
| 500 | <code>[ApiV1MiscLinkedinPostReshare500Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare500_error1.py)</code> |
| 502 | <code>[ApiV1MiscLinkedinPostReshare502Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare502_error1.py)</code> |
| 503 | <code>[ApiV1MiscLinkedinPostReshare503Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare503_error1.py)</code> |
| 504 | <code>[ApiV1MiscLinkedinPostReshare504Error1](bundle_social/models/api_v1_misc_linkedin_post_reshare504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_mastodon_delete_comment(*, body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscMastodonCommentResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_mastodon_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_mastodon_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscMastodonCommentRequest1](bundle_social/models/api_v1_misc_mastodon_comment_request1.py) \| [ApiV1MiscMastodonCommentRequest1Dict](bundle_social/models/api_v1_misc_mastodon_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse1](bundle_social/models/api_v1_misc_mastodon_comment_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscMastodonDeleteCommentErrorBody](bundle_social/errors/misc_mastodon_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscMastodonComment400Error1](bundle_social/models/api_v1_misc_mastodon_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscMastodonComment401Error1](bundle_social/models/api_v1_misc_mastodon_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscMastodonComment403Error1](bundle_social/models/api_v1_misc_mastodon_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscMastodonComment404Error1](bundle_social/models/api_v1_misc_mastodon_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscMastodonComment429Error1](bundle_social/models/api_v1_misc_mastodon_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscMastodonComment500Error1](bundle_social/models/api_v1_misc_mastodon_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscMastodonComment502Error1](bundle_social/models/api_v1_misc_mastodon_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscMastodonComment503Error1](bundle_social/models/api_v1_misc_mastodon_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscMastodonComment504Error1](bundle_social/models/api_v1_misc_mastodon_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_mastodon_delete_status(*, body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscMastodonStatusResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_mastodon_delete_status()
    # TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonDeleteStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_mastodon_delete_status()
    # TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonDeleteStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscMastodonStatusRequest1](bundle_social/models/api_v1_misc_mastodon_status_request1.py) \| [ApiV1MiscMastodonStatusRequest1Dict](bundle_social/models/api_v1_misc_mastodon_status_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse1](bundle_social/models/api_v1_misc_mastodon_status_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscMastodonDeleteStatusErrorBody](bundle_social/errors/misc_mastodon_delete_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscMastodonStatus400Error1](bundle_social/models/api_v1_misc_mastodon_status400_error1.py)</code> |
| 401 | <code>[ApiV1MiscMastodonStatus401Error1](bundle_social/models/api_v1_misc_mastodon_status401_error1.py)</code> |
| 403 | <code>[ApiV1MiscMastodonStatus403Error1](bundle_social/models/api_v1_misc_mastodon_status403_error1.py)</code> |
| 404 | <code>[ApiV1MiscMastodonStatus404Error1](bundle_social/models/api_v1_misc_mastodon_status404_error1.py)</code> |
| 429 | <code>[ApiV1MiscMastodonStatus429Error1](bundle_social/models/api_v1_misc_mastodon_status429_error1.py)</code> |
| 500 | <code>[ApiV1MiscMastodonStatus500Error1](bundle_social/models/api_v1_misc_mastodon_status500_error1.py)</code> |
| 502 | <code>[ApiV1MiscMastodonStatus502Error1](bundle_social/models/api_v1_misc_mastodon_status502_error1.py)</code> |
| 503 | <code>[ApiV1MiscMastodonStatus503Error1](bundle_social/models/api_v1_misc_mastodon_status503_error1.py)</code> |
| 504 | <code>[ApiV1MiscMastodonStatus504Error1](bundle_social/models/api_v1_misc_mastodon_status504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_mastodon_edit_comment(*, body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscMastodonCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Mastodon reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_mastodon_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonEditCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_mastodon_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonEditCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscMastodonCommentRequest](bundle_social/models/api_v1_misc_mastodon_comment_request.py) \| [ApiV1MiscMastodonCommentRequestDict](bundle_social/models/api_v1_misc_mastodon_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse](bundle_social/models/api_v1_misc_mastodon_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscMastodonEditCommentErrorBody](bundle_social/errors/misc_mastodon_edit_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscMastodonComment400Error1](bundle_social/models/api_v1_misc_mastodon_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscMastodonComment401Error1](bundle_social/models/api_v1_misc_mastodon_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscMastodonComment403Error1](bundle_social/models/api_v1_misc_mastodon_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscMastodonComment404Error1](bundle_social/models/api_v1_misc_mastodon_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscMastodonComment429Error1](bundle_social/models/api_v1_misc_mastodon_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscMastodonComment500Error1](bundle_social/models/api_v1_misc_mastodon_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscMastodonComment502Error1](bundle_social/models/api_v1_misc_mastodon_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscMastodonComment503Error1](bundle_social/models/api_v1_misc_mastodon_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscMastodonComment504Error1](bundle_social/models/api_v1_misc_mastodon_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_mastodon_edit_status(*, body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscMastodonStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content and spoiler text of a published Mastodon status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_mastodon_edit_status()
    # TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonEditStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_mastodon_edit_status()
    # TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscMastodonEditStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscMastodonStatusRequest](bundle_social/models/api_v1_misc_mastodon_status_request.py) \| [ApiV1MiscMastodonStatusRequestDict](bundle_social/models/api_v1_misc_mastodon_status_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse](bundle_social/models/api_v1_misc_mastodon_status_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscMastodonEditStatusErrorBody](bundle_social/errors/misc_mastodon_edit_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscMastodonStatus400Error1](bundle_social/models/api_v1_misc_mastodon_status400_error1.py)</code> |
| 401 | <code>[ApiV1MiscMastodonStatus401Error1](bundle_social/models/api_v1_misc_mastodon_status401_error1.py)</code> |
| 403 | <code>[ApiV1MiscMastodonStatus403Error1](bundle_social/models/api_v1_misc_mastodon_status403_error1.py)</code> |
| 404 | <code>[ApiV1MiscMastodonStatus404Error1](bundle_social/models/api_v1_misc_mastodon_status404_error1.py)</code> |
| 429 | <code>[ApiV1MiscMastodonStatus429Error1](bundle_social/models/api_v1_misc_mastodon_status429_error1.py)</code> |
| 500 | <code>[ApiV1MiscMastodonStatus500Error1](bundle_social/models/api_v1_misc_mastodon_status500_error1.py)</code> |
| 502 | <code>[ApiV1MiscMastodonStatus502Error1](bundle_social/models/api_v1_misc_mastodon_status502_error1.py)</code> |
| 503 | <code>[ApiV1MiscMastodonStatus503Error1](bundle_social/models/api_v1_misc_mastodon_status503_error1.py)</code> |
| 504 | <code>[ApiV1MiscMastodonStatus504Error1](bundle_social/models/api_v1_misc_mastodon_status504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_pinterest_delete_pin(*, body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscPinterestPinResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Pinterest pin.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_pinterest_delete_pin()
    # TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscPinterestDeletePinErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_pinterest_delete_pin()
    # TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscPinterestDeletePinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscPinterestPinRequest1](bundle_social/models/api_v1_misc_pinterest_pin_request1.py) \| [ApiV1MiscPinterestPinRequest1Dict](bundle_social/models/api_v1_misc_pinterest_pin_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscPinterestPinResponse1](bundle_social/models/api_v1_misc_pinterest_pin_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscPinterestDeletePinErrorBody](bundle_social/errors/misc_pinterest_delete_pin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscPinterestPin400Error1](bundle_social/models/api_v1_misc_pinterest_pin400_error1.py)</code> |
| 401 | <code>[ApiV1MiscPinterestPin401Error1](bundle_social/models/api_v1_misc_pinterest_pin401_error1.py)</code> |
| 403 | <code>[ApiV1MiscPinterestPin403Error1](bundle_social/models/api_v1_misc_pinterest_pin403_error1.py)</code> |
| 404 | <code>[ApiV1MiscPinterestPin404Error1](bundle_social/models/api_v1_misc_pinterest_pin404_error1.py)</code> |
| 429 | <code>[ApiV1MiscPinterestPin429Error1](bundle_social/models/api_v1_misc_pinterest_pin429_error1.py)</code> |
| 500 | <code>[ApiV1MiscPinterestPin500Error1](bundle_social/models/api_v1_misc_pinterest_pin500_error1.py)</code> |
| 502 | <code>[ApiV1MiscPinterestPin502Error1](bundle_social/models/api_v1_misc_pinterest_pin502_error1.py)</code> |
| 503 | <code>[ApiV1MiscPinterestPin503Error1](bundle_social/models/api_v1_misc_pinterest_pin503_error1.py)</code> |
| 504 | <code>[ApiV1MiscPinterestPin504Error1](bundle_social/models/api_v1_misc_pinterest_pin504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_pinterest_edit_pin(*, body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscPinterestPinResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Temporarily disabled

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_pinterest_edit_pin()
    # TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscPinterestEditPinErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_pinterest_edit_pin()
    # TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscPinterestEditPinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscPinterestPinRequest](bundle_social/models/api_v1_misc_pinterest_pin_request.py) \| [ApiV1MiscPinterestPinRequestDict](bundle_social/models/api_v1_misc_pinterest_pin_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscPinterestPinResponse](bundle_social/models/api_v1_misc_pinterest_pin_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscPinterestEditPinErrorBody](bundle_social/errors/misc_pinterest_edit_pin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscPinterestPin400Error1](bundle_social/models/api_v1_misc_pinterest_pin400_error1.py)</code> |
| 401 | <code>[ApiV1MiscPinterestPin401Error1](bundle_social/models/api_v1_misc_pinterest_pin401_error1.py)</code> |
| 403 | <code>[ApiV1MiscPinterestPin403Error1](bundle_social/models/api_v1_misc_pinterest_pin403_error1.py)</code> |
| 404 | <code>[ApiV1MiscPinterestPin404Error1](bundle_social/models/api_v1_misc_pinterest_pin404_error1.py)</code> |
| 429 | <code>[ApiV1MiscPinterestPin429Error1](bundle_social/models/api_v1_misc_pinterest_pin429_error1.py)</code> |
| 500 | <code>[ApiV1MiscPinterestPin500Error1](bundle_social/models/api_v1_misc_pinterest_pin500_error1.py)</code> |
| 502 | <code>[ApiV1MiscPinterestPin502Error1](bundle_social/models/api_v1_misc_pinterest_pin502_error1.py)</code> |
| 503 | <code>[ApiV1MiscPinterestPin503Error1](bundle_social/models/api_v1_misc_pinterest_pin503_error1.py)</code> |
| 504 | <code>[ApiV1MiscPinterestPin504Error1](bundle_social/models/api_v1_misc_pinterest_pin504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_delete_comment(*, body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscRedditCommentResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscRedditCommentRequest1](bundle_social/models/api_v1_misc_reddit_comment_request1.py) \| [ApiV1MiscRedditCommentRequest1Dict](bundle_social/models/api_v1_misc_reddit_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditCommentResponse1](bundle_social/models/api_v1_misc_reddit_comment_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditDeleteCommentErrorBody](bundle_social/errors/misc_reddit_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditComment400Error1](bundle_social/models/api_v1_misc_reddit_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditComment401Error1](bundle_social/models/api_v1_misc_reddit_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditComment403Error1](bundle_social/models/api_v1_misc_reddit_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditComment404Error1](bundle_social/models/api_v1_misc_reddit_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditComment429Error1](bundle_social/models/api_v1_misc_reddit_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditComment500Error1](bundle_social/models/api_v1_misc_reddit_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditComment502Error1](bundle_social/models/api_v1_misc_reddit_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditComment503Error1](bundle_social/models/api_v1_misc_reddit_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditComment504Error1](bundle_social/models/api_v1_misc_reddit_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_delete_post(*, body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscRedditPostResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscRedditPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditDeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_delete_post()
    # TODO: Handle 'response' of type ApiV1MiscRedditPostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscRedditPostRequest1](bundle_social/models/api_v1_misc_reddit_post_request1.py) \| [ApiV1MiscRedditPostRequest1Dict](bundle_social/models/api_v1_misc_reddit_post_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostResponse1](bundle_social/models/api_v1_misc_reddit_post_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditDeletePostErrorBody](bundle_social/errors/misc_reddit_delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditPost400Error1](bundle_social/models/api_v1_misc_reddit_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditPost401Error1](bundle_social/models/api_v1_misc_reddit_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditPost403Error1](bundle_social/models/api_v1_misc_reddit_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditPost404Error1](bundle_social/models/api_v1_misc_reddit_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditPost429Error1](bundle_social/models/api_v1_misc_reddit_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditPost500Error1](bundle_social/models/api_v1_misc_reddit_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditPost502Error1](bundle_social/models/api_v1_misc_reddit_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditPost503Error1](bundle_social/models/api_v1_misc_reddit_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditPost504Error1](bundle_social/models/api_v1_misc_reddit_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_edit_comment(*, body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscRedditCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Reddit comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditEditCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditEditCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscRedditCommentRequest](bundle_social/models/api_v1_misc_reddit_comment_request.py) \| [ApiV1MiscRedditCommentRequestDict](bundle_social/models/api_v1_misc_reddit_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditCommentResponse](bundle_social/models/api_v1_misc_reddit_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditEditCommentErrorBody](bundle_social/errors/misc_reddit_edit_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditComment400Error1](bundle_social/models/api_v1_misc_reddit_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditComment401Error1](bundle_social/models/api_v1_misc_reddit_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditComment403Error1](bundle_social/models/api_v1_misc_reddit_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditComment404Error1](bundle_social/models/api_v1_misc_reddit_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditComment429Error1](bundle_social/models/api_v1_misc_reddit_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditComment500Error1](bundle_social/models/api_v1_misc_reddit_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditComment502Error1](bundle_social/models/api_v1_misc_reddit_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditComment503Error1](bundle_social/models/api_v1_misc_reddit_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditComment504Error1](bundle_social/models/api_v1_misc_reddit_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_edit_post(*, body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscRedditPostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscRedditPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditEditPostErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_edit_post()
    # TODO: Handle 'response' of type ApiV1MiscRedditPostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditEditPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscRedditPostRequest](bundle_social/models/api_v1_misc_reddit_post_request.py) \| [ApiV1MiscRedditPostRequestDict](bundle_social/models/api_v1_misc_reddit_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostResponse](bundle_social/models/api_v1_misc_reddit_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditEditPostErrorBody](bundle_social/errors/misc_reddit_edit_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditPost400Error1](bundle_social/models/api_v1_misc_reddit_post400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditPost401Error1](bundle_social/models/api_v1_misc_reddit_post401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditPost403Error1](bundle_social/models/api_v1_misc_reddit_post403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditPost404Error1](bundle_social/models/api_v1_misc_reddit_post404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditPost429Error1](bundle_social/models/api_v1_misc_reddit_post429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditPost500Error1](bundle_social/models/api_v1_misc_reddit_post500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditPost502Error1](bundle_social/models/api_v1_misc_reddit_post502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditPost503Error1](bundle_social/models/api_v1_misc_reddit_post503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditPost504Error1](bundle_social/models/api_v1_misc_reddit_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_get_post_requirements(team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscRedditPostRequirementsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call this first to avoid rejected submissions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_get_post_requirements("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscRedditPostRequirementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditGetPostRequirementsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_get_post_requirements("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscRedditPostRequirementsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditGetPostRequirementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>subreddit</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostRequirementsResponse](bundle_social/models/api_v1_misc_reddit_post_requirements_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditGetPostRequirementsErrorBody](bundle_social/errors/misc_reddit_get_post_requirements_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditPostRequirements400Error1](bundle_social/models/api_v1_misc_reddit_post_requirements400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditPostRequirements401Error1](bundle_social/models/api_v1_misc_reddit_post_requirements401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditPostRequirements403Error1](bundle_social/models/api_v1_misc_reddit_post_requirements403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditPostRequirements404Error1](bundle_social/models/api_v1_misc_reddit_post_requirements404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditPostRequirements429Error1](bundle_social/models/api_v1_misc_reddit_post_requirements429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditPostRequirements500Error1](bundle_social/models/api_v1_misc_reddit_post_requirements500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditPostRequirements502Error1](bundle_social/models/api_v1_misc_reddit_post_requirements502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditPostRequirements503Error1](bundle_social/models/api_v1_misc_reddit_post_requirements503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditPostRequirements504Error1](bundle_social/models/api_v1_misc_reddit_post_requirements504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_reddit_get_subreddit_flairs(team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None) -> list[ApiV1MiscRedditSubredditFlairsResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_reddit_get_subreddit_flairs("some example string", "some example string")
    # TODO: Handle 'response' of type list[ApiV1MiscRedditSubredditFlairsResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditGetSubredditFlairsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_reddit_get_subreddit_flairs("some example string", "some example string")
    # TODO: Handle 'response' of type list[ApiV1MiscRedditSubredditFlairsResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscRedditGetSubredditFlairsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>subreddit</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiV1MiscRedditSubredditFlairsResponse](bundle_social/models/api_v1_misc_reddit_subreddit_flairs_response.py)&#93;</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscRedditGetSubredditFlairsErrorBody](bundle_social/errors/misc_reddit_get_subreddit_flairs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscRedditSubredditFlairs400Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs400_error1.py)</code> |
| 401 | <code>[ApiV1MiscRedditSubredditFlairs401Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs401_error1.py)</code> |
| 403 | <code>[ApiV1MiscRedditSubredditFlairs403Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs403_error1.py)</code> |
| 404 | <code>[ApiV1MiscRedditSubredditFlairs404Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs404_error1.py)</code> |
| 429 | <code>[ApiV1MiscRedditSubredditFlairs429Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs429_error1.py)</code> |
| 500 | <code>[ApiV1MiscRedditSubredditFlairs500Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs500_error1.py)</code> |
| 502 | <code>[ApiV1MiscRedditSubredditFlairs502Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs502_error1.py)</code> |
| 503 | <code>[ApiV1MiscRedditSubredditFlairs503Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs503_error1.py)</code> |
| 504 | <code>[ApiV1MiscRedditSubredditFlairs504Error1](bundle_social/models/api_v1_misc_reddit_subreddit_flairs504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_slack_delete_message(*, body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscSlackMessageResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Slack message.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_slack_delete_message()
    # TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscSlackDeleteMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_slack_delete_message()
    # TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscSlackDeleteMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscSlackMessageRequest1](bundle_social/models/api_v1_misc_slack_message_request1.py) \| [ApiV1MiscSlackMessageRequest1Dict](bundle_social/models/api_v1_misc_slack_message_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscSlackMessageResponse1](bundle_social/models/api_v1_misc_slack_message_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscSlackDeleteMessageErrorBody](bundle_social/errors/misc_slack_delete_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscSlackMessage400Error1](bundle_social/models/api_v1_misc_slack_message400_error1.py)</code> |
| 401 | <code>[ApiV1MiscSlackMessage401Error1](bundle_social/models/api_v1_misc_slack_message401_error1.py)</code> |
| 403 | <code>[ApiV1MiscSlackMessage403Error1](bundle_social/models/api_v1_misc_slack_message403_error1.py)</code> |
| 404 | <code>[ApiV1MiscSlackMessage404Error1](bundle_social/models/api_v1_misc_slack_message404_error1.py)</code> |
| 429 | <code>[ApiV1MiscSlackMessage429Error1](bundle_social/models/api_v1_misc_slack_message429_error1.py)</code> |
| 500 | <code>[ApiV1MiscSlackMessage500Error1](bundle_social/models/api_v1_misc_slack_message500_error1.py)</code> |
| 502 | <code>[ApiV1MiscSlackMessage502Error1](bundle_social/models/api_v1_misc_slack_message502_error1.py)</code> |
| 503 | <code>[ApiV1MiscSlackMessage503Error1](bundle_social/models/api_v1_misc_slack_message503_error1.py)</code> |
| 504 | <code>[ApiV1MiscSlackMessage504Error1](bundle_social/models/api_v1_misc_slack_message504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_slack_edit_message(*, body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscSlackMessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Slack message.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_slack_edit_message()
    # TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscSlackEditMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_slack_edit_message()
    # TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscSlackEditMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscSlackMessageRequest](bundle_social/models/api_v1_misc_slack_message_request.py) \| [ApiV1MiscSlackMessageRequestDict](bundle_social/models/api_v1_misc_slack_message_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscSlackMessageResponse](bundle_social/models/api_v1_misc_slack_message_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscSlackEditMessageErrorBody](bundle_social/errors/misc_slack_edit_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscSlackMessage400Error1](bundle_social/models/api_v1_misc_slack_message400_error1.py)</code> |
| 401 | <code>[ApiV1MiscSlackMessage401Error1](bundle_social/models/api_v1_misc_slack_message401_error1.py)</code> |
| 403 | <code>[ApiV1MiscSlackMessage403Error1](bundle_social/models/api_v1_misc_slack_message403_error1.py)</code> |
| 404 | <code>[ApiV1MiscSlackMessage404Error1](bundle_social/models/api_v1_misc_slack_message404_error1.py)</code> |
| 429 | <code>[ApiV1MiscSlackMessage429Error1](bundle_social/models/api_v1_misc_slack_message429_error1.py)</code> |
| 500 | <code>[ApiV1MiscSlackMessage500Error1](bundle_social/models/api_v1_misc_slack_message500_error1.py)</code> |
| 502 | <code>[ApiV1MiscSlackMessage502Error1](bundle_social/models/api_v1_misc_slack_message502_error1.py)</code> |
| 503 | <code>[ApiV1MiscSlackMessage503Error1](bundle_social/models/api_v1_misc_slack_message503_error1.py)</code> |
| 504 | <code>[ApiV1MiscSlackMessage504Error1](bundle_social/models/api_v1_misc_slack_message504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_tiktok_delete_comment(*, body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTiktokCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a published TikTok comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_tiktok_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscTiktokCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_tiktok_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscTiktokCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscTiktokCommentRequest](bundle_social/models/api_v1_misc_tiktok_comment_request.py) \| [ApiV1MiscTiktokCommentRequestDict](bundle_social/models/api_v1_misc_tiktok_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokCommentResponse](bundle_social/models/api_v1_misc_tiktok_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTiktokDeleteCommentErrorBody](bundle_social/errors/misc_tiktok_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTiktokComment400Error1](bundle_social/models/api_v1_misc_tiktok_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTiktokComment401Error1](bundle_social/models/api_v1_misc_tiktok_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTiktokComment403Error1](bundle_social/models/api_v1_misc_tiktok_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTiktokComment404Error1](bundle_social/models/api_v1_misc_tiktok_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTiktokComment429Error1](bundle_social/models/api_v1_misc_tiktok_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTiktokComment500Error1](bundle_social/models/api_v1_misc_tiktok_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTiktokComment502Error1](bundle_social/models/api_v1_misc_tiktok_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTiktokComment503Error1](bundle_social/models/api_v1_misc_tiktok_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTiktokComment504Error1](bundle_social/models/api_v1_misc_tiktok_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_tiktok_get_commercial_music_trending_list(team_id: str, *, genre: GenreOrStr | None = Genre.POP, date_range: DateRangeOrStr | None = DateRange._7_DAY, request_options: RequestOptionsOrDict | None = None) -> list[ApiV1MiscTiktokCmlTrendingListResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_tiktok_get_commercial_music_trending_list("some example string")
    # TODO: Handle 'response' of type list[ApiV1MiscTiktokCmlTrendingListResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokGetCommercialMusicTrendingListErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_tiktok_get_commercial_music_trending_list("some example string")
    # TODO: Handle 'response' of type list[ApiV1MiscTiktokCmlTrendingListResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokGetCommercialMusicTrendingListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>genre</code> | <code>[GenreOrStr](bundle_social/models/enums/genre.py) \| None</code> | Genre filter for commercial music results.<br>**Default**: <code>Genre.POP</code> |
| <code>date_range</code> | <code>[DateRangeOrStr](bundle_social/models/enums/date_range.py) \| None</code> | Timeframe for popular tracks ranking.<br>**Default**: <code>DateRange._7_DAY</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiV1MiscTiktokCmlTrendingListResponse](bundle_social/models/api_v1_misc_tiktok_cml_trending_list_response.py)&#93;</code> -- List of trending tracks.

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTiktokGetCommercialMusicTrendingListErrorBody](bundle_social/errors/misc_tiktok_get_commercial_music_trending_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTiktokCmlTrendingList400Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTiktokCmlTrendingList401Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTiktokCmlTrendingList403Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTiktokCmlTrendingList404Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTiktokCmlTrendingList429Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTiktokCmlTrendingList500Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTiktokCmlTrendingList502Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTiktokCmlTrendingList503Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTiktokCmlTrendingList504Error1](bundle_social/models/api_v1_misc_tiktok_cml_trending_list504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_tiktok_get_post_settings(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTiktokPostSettingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer, not as a check before every publish: each call counts against the account's TikTok rate limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_tiktok_get_post_settings("some example string")
    # TODO: Handle 'response' of type ApiV1MiscTiktokPostSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokGetPostSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_tiktok_get_post_settings("some example string")
    # TODO: Handle 'response' of type ApiV1MiscTiktokPostSettingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokGetPostSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokPostSettingsResponse](bundle_social/models/api_v1_misc_tiktok_post_settings_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTiktokGetPostSettingsErrorBody](bundle_social/errors/misc_tiktok_get_post_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTiktokPostSettings400Error1](bundle_social/models/api_v1_misc_tiktok_post_settings400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTiktokPostSettings401Error1](bundle_social/models/api_v1_misc_tiktok_post_settings401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTiktokPostSettings403Error1](bundle_social/models/api_v1_misc_tiktok_post_settings403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTiktokPostSettings404Error1](bundle_social/models/api_v1_misc_tiktok_post_settings404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTiktokPostSettings429Error1](bundle_social/models/api_v1_misc_tiktok_post_settings429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTiktokPostSettings500Error1](bundle_social/models/api_v1_misc_tiktok_post_settings500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTiktokPostSettings502Error1](bundle_social/models/api_v1_misc_tiktok_post_settings502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTiktokPostSettings503Error1](bundle_social/models/api_v1_misc_tiktok_post_settings503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTiktokPostSettings504Error1](bundle_social/models/api_v1_misc_tiktok_post_settings504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_tiktok_search_locations(team_id: str, q: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTiktokLocationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches location tags available to the connected TikTok account (up to 20 results). Pass `locationId` and `name` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_tiktok_search_locations("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscTiktokLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokSearchLocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_tiktok_search_locations("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscTiktokLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTiktokSearchLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>q</code> | <code>str</code> | Free-text query used to search TikTok location tags. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokLocationsResponse](bundle_social/models/api_v1_misc_tiktok_locations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTiktokSearchLocationsErrorBody](bundle_social/errors/misc_tiktok_search_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTiktokLocations400Error1](bundle_social/models/api_v1_misc_tiktok_locations400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTiktokLocations401Error1](bundle_social/models/api_v1_misc_tiktok_locations401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTiktokLocations403Error1](bundle_social/models/api_v1_misc_tiktok_locations403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTiktokLocations404Error1](bundle_social/models/api_v1_misc_tiktok_locations404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTiktokLocations429Error1](bundle_social/models/api_v1_misc_tiktok_locations429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTiktokLocations500Error1](bundle_social/models/api_v1_misc_tiktok_locations500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTiktokLocations502Error1](bundle_social/models/api_v1_misc_tiktok_locations502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTiktokLocations503Error1](bundle_social/models/api_v1_misc_tiktok_locations503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTiktokLocations504Error1](bundle_social/models/api_v1_misc_tiktok_locations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_twitter_delete_comment(*, body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTwitterCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_twitter_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscTwitterCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_twitter_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscTwitterCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscTwitterCommentRequest](bundle_social/models/api_v1_misc_twitter_comment_request.py) \| [ApiV1MiscTwitterCommentRequestDict](bundle_social/models/api_v1_misc_twitter_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterCommentResponse](bundle_social/models/api_v1_misc_twitter_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTwitterDeleteCommentErrorBody](bundle_social/errors/misc_twitter_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTwitterComment400Error1](bundle_social/models/api_v1_misc_twitter_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTwitterComment401Error1](bundle_social/models/api_v1_misc_twitter_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTwitterComment403Error1](bundle_social/models/api_v1_misc_twitter_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTwitterComment404Error1](bundle_social/models/api_v1_misc_twitter_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTwitterComment429Error1](bundle_social/models/api_v1_misc_twitter_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTwitterComment500Error1](bundle_social/models/api_v1_misc_twitter_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTwitterComment502Error1](bundle_social/models/api_v1_misc_twitter_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTwitterComment503Error1](bundle_social/models/api_v1_misc_twitter_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTwitterComment504Error1](bundle_social/models/api_v1_misc_twitter_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_twitter_delete_tweet(*, body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTwitterTweetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_twitter_delete_tweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterTweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterDeleteTweetErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_twitter_delete_tweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterTweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterDeleteTweetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscTwitterTweetRequest](bundle_social/models/api_v1_misc_twitter_tweet_request.py) \| [ApiV1MiscTwitterTweetRequestDict](bundle_social/models/api_v1_misc_twitter_tweet_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterTweetResponse](bundle_social/models/api_v1_misc_twitter_tweet_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTwitterDeleteTweetErrorBody](bundle_social/errors/misc_twitter_delete_tweet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTwitterTweet400Error1](bundle_social/models/api_v1_misc_twitter_tweet400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTwitterTweet401Error1](bundle_social/models/api_v1_misc_twitter_tweet401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTwitterTweet403Error1](bundle_social/models/api_v1_misc_twitter_tweet403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTwitterTweet404Error1](bundle_social/models/api_v1_misc_twitter_tweet404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTwitterTweet429Error1](bundle_social/models/api_v1_misc_twitter_tweet429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTwitterTweet500Error1](bundle_social/models/api_v1_misc_twitter_tweet500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTwitterTweet502Error1](bundle_social/models/api_v1_misc_twitter_tweet502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTwitterTweet503Error1](bundle_social/models/api_v1_misc_twitter_tweet503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTwitterTweet504Error1](bundle_social/models/api_v1_misc_twitter_tweet504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_twitter_retweet(*, body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTwitterRetweetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_twitter_retweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterRetweetErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_twitter_retweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterRetweetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscTwitterRetweetRequest](bundle_social/models/api_v1_misc_twitter_retweet_request.py) \| [ApiV1MiscTwitterRetweetRequestDict](bundle_social/models/api_v1_misc_twitter_retweet_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](bundle_social/models/api_v1_misc_twitter_retweet_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTwitterRetweetErrorBody](bundle_social/errors/misc_twitter_retweet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTwitterRetweet400Error1](bundle_social/models/api_v1_misc_twitter_retweet400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTwitterRetweet401Error1](bundle_social/models/api_v1_misc_twitter_retweet401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTwitterRetweet403Error1](bundle_social/models/api_v1_misc_twitter_retweet403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTwitterRetweet404Error1](bundle_social/models/api_v1_misc_twitter_retweet404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTwitterRetweet429Error1](bundle_social/models/api_v1_misc_twitter_retweet429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTwitterRetweet500Error1](bundle_social/models/api_v1_misc_twitter_retweet500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTwitterRetweet502Error1](bundle_social/models/api_v1_misc_twitter_retweet502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTwitterRetweet503Error1](bundle_social/models/api_v1_misc_twitter_retweet503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTwitterRetweet504Error1](bundle_social/models/api_v1_misc_twitter_retweet504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_twitter_unretweet(*, body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscTwitterRetweetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your credits are charged once per post, per connected account, per UTC day, the same way reposting is.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_twitter_unretweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterUnretweetErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_twitter_unretweet()
    # TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscTwitterUnretweetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscTwitterRetweetRequest](bundle_social/models/api_v1_misc_twitter_retweet_request.py) \| [ApiV1MiscTwitterRetweetRequestDict](bundle_social/models/api_v1_misc_twitter_retweet_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](bundle_social/models/api_v1_misc_twitter_retweet_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscTwitterUnretweetErrorBody](bundle_social/errors/misc_twitter_unretweet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscTwitterRetweet400Error1](bundle_social/models/api_v1_misc_twitter_retweet400_error1.py)</code> |
| 401 | <code>[ApiV1MiscTwitterRetweet401Error1](bundle_social/models/api_v1_misc_twitter_retweet401_error1.py)</code> |
| 403 | <code>[ApiV1MiscTwitterRetweet403Error1](bundle_social/models/api_v1_misc_twitter_retweet403_error1.py)</code> |
| 404 | <code>[ApiV1MiscTwitterRetweet404Error1](bundle_social/models/api_v1_misc_twitter_retweet404_error1.py)</code> |
| 429 | <code>[ApiV1MiscTwitterRetweet429Error1](bundle_social/models/api_v1_misc_twitter_retweet429_error1.py)</code> |
| 500 | <code>[ApiV1MiscTwitterRetweet500Error1](bundle_social/models/api_v1_misc_twitter_retweet500_error1.py)</code> |
| 502 | <code>[ApiV1MiscTwitterRetweet502Error1](bundle_social/models/api_v1_misc_twitter_retweet502_error1.py)</code> |
| 503 | <code>[ApiV1MiscTwitterRetweet503Error1](bundle_social/models/api_v1_misc_twitter_retweet503_error1.py)</code> |
| 504 | <code>[ApiV1MiscTwitterRetweet504Error1](bundle_social/models/api_v1_misc_twitter_retweet504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_add_video_to_playlist(*, body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubePlaylistItemsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append a video to a YouTube playlist on a connected channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_add_video_to_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeAddVideoToPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_add_video_to_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeAddVideoToPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubePlaylistItemsRequest](bundle_social/models/api_v1_misc_youtube_playlist_items_request.py) \| [ApiV1MiscYoutubePlaylistItemsRequestDict](bundle_social/models/api_v1_misc_youtube_playlist_items_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse](bundle_social/models/api_v1_misc_youtube_playlist_items_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeAddVideoToPlaylistErrorBody](bundle_social/errors/misc_youtube_add_video_to_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylistItems400Error1](bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylistItems401Error1](bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylistItems403Error1](bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylistItems404Error1](bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylistItems429Error1](bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylistItems500Error1](bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylistItems502Error1](bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylistItems503Error1](bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylistItems504Error1](bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_create_new_channel_playlist(*, body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubePlaylistResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists group related videos and increase session watch time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_create_new_channel_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeCreateNewChannelPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_create_new_channel_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeCreateNewChannelPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubePlaylistRequest](bundle_social/models/api_v1_misc_youtube_playlist_request.py) \| [ApiV1MiscYoutubePlaylistRequestDict](bundle_social/models/api_v1_misc_youtube_playlist_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](bundle_social/models/api_v1_misc_youtube_playlist_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeCreateNewChannelPlaylistErrorBody](bundle_social/errors/misc_youtube_create_new_channel_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylist400Error1](bundle_social/models/api_v1_misc_youtube_playlist400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylist401Error1](bundle_social/models/api_v1_misc_youtube_playlist401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylist403Error1](bundle_social/models/api_v1_misc_youtube_playlist403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylist404Error1](bundle_social/models/api_v1_misc_youtube_playlist404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylist429Error1](bundle_social/models/api_v1_misc_youtube_playlist429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylist500Error1](bundle_social/models/api_v1_misc_youtube_playlist500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylist502Error1](bundle_social/models/api_v1_misc_youtube_playlist502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylist503Error1](bundle_social/models/api_v1_misc_youtube_playlist503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylist504Error1](bundle_social/models/api_v1_misc_youtube_playlist504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_delete_channel_playlist(playlist_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> bool</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_delete_channel_playlist("some example string", "some example string")
    # TODO: Handle 'response' of type bool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteChannelPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_delete_channel_playlist(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type bool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteChannelPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlist_id</code> | <code>str</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeDeleteChannelPlaylistErrorBody](bundle_social/errors/misc_youtube_delete_channel_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylist400Error1](bundle_social/models/api_v1_misc_youtube_playlist400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylist401Error1](bundle_social/models/api_v1_misc_youtube_playlist401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylist403Error1](bundle_social/models/api_v1_misc_youtube_playlist403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylist404Error1](bundle_social/models/api_v1_misc_youtube_playlist404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylist429Error1](bundle_social/models/api_v1_misc_youtube_playlist429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylist500Error1](bundle_social/models/api_v1_misc_youtube_playlist500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylist502Error1](bundle_social/models/api_v1_misc_youtube_playlist502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylist503Error1](bundle_social/models/api_v1_misc_youtube_playlist503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylist504Error1](bundle_social/models/api_v1_misc_youtube_playlist504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_delete_comment(*, body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeCommentResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_delete_comment()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubeCommentRequest1](bundle_social/models/api_v1_misc_youtube_comment_request1.py) \| [ApiV1MiscYoutubeCommentRequest1Dict](bundle_social/models/api_v1_misc_youtube_comment_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse1](bundle_social/models/api_v1_misc_youtube_comment_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeDeleteCommentErrorBody](bundle_social/errors/misc_youtube_delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeComment400Error1](bundle_social/models/api_v1_misc_youtube_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeComment401Error1](bundle_social/models/api_v1_misc_youtube_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeComment403Error1](bundle_social/models/api_v1_misc_youtube_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeComment404Error1](bundle_social/models/api_v1_misc_youtube_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeComment429Error1](bundle_social/models/api_v1_misc_youtube_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeComment500Error1](bundle_social/models/api_v1_misc_youtube_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeComment502Error1](bundle_social/models/api_v1_misc_youtube_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeComment503Error1](bundle_social/models/api_v1_misc_youtube_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeComment504Error1](bundle_social/models/api_v1_misc_youtube_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_delete_video(*, body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeVideoResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube video.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_delete_video()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteVideoErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_delete_video()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteVideoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubeVideoRequest1](bundle_social/models/api_v1_misc_youtube_video_request1.py) \| [ApiV1MiscYoutubeVideoRequest1Dict](bundle_social/models/api_v1_misc_youtube_video_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse1](bundle_social/models/api_v1_misc_youtube_video_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeDeleteVideoErrorBody](bundle_social/errors/misc_youtube_delete_video_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeVideo400Error1](bundle_social/models/api_v1_misc_youtube_video400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeVideo401Error1](bundle_social/models/api_v1_misc_youtube_video401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeVideo403Error1](bundle_social/models/api_v1_misc_youtube_video403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeVideo404Error1](bundle_social/models/api_v1_misc_youtube_video404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeVideo429Error1](bundle_social/models/api_v1_misc_youtube_video429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeVideo500Error1](bundle_social/models/api_v1_misc_youtube_video500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeVideo502Error1](bundle_social/models/api_v1_misc_youtube_video502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeVideo503Error1](bundle_social/models/api_v1_misc_youtube_video503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeVideo504Error1](bundle_social/models/api_v1_misc_youtube_video504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_delete_video_from_playlist(playlist_item_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> bool</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself stays on the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_delete_video_from_playlist("some example string", "some example string")
    # TODO: Handle 'response' of type bool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteVideoFromPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_delete_video_from_playlist(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type bool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeDeleteVideoFromPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlist_item_id</code> | <code>str</code> | Playlist item ID (not video ID) |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeDeleteVideoFromPlaylistErrorBody](bundle_social/errors/misc_youtube_delete_video_from_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylistItems400Error1](bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylistItems401Error1](bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylistItems403Error1](bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylistItems404Error1](bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylistItems429Error1](bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylistItems500Error1](bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylistItems502Error1](bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylistItems503Error1](bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylistItems504Error1](bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_edit_comment(*, body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeCommentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published YouTube comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeEditCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_edit_comment()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeEditCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubeCommentRequest](bundle_social/models/api_v1_misc_youtube_comment_request.py) \| [ApiV1MiscYoutubeCommentRequestDict](bundle_social/models/api_v1_misc_youtube_comment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse](bundle_social/models/api_v1_misc_youtube_comment_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeEditCommentErrorBody](bundle_social/errors/misc_youtube_edit_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeComment400Error1](bundle_social/models/api_v1_misc_youtube_comment400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeComment401Error1](bundle_social/models/api_v1_misc_youtube_comment401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeComment403Error1](bundle_social/models/api_v1_misc_youtube_comment403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeComment404Error1](bundle_social/models/api_v1_misc_youtube_comment404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeComment429Error1](bundle_social/models/api_v1_misc_youtube_comment429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeComment500Error1](bundle_social/models/api_v1_misc_youtube_comment500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeComment502Error1](bundle_social/models/api_v1_misc_youtube_comment502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeComment503Error1](bundle_social/models/api_v1_misc_youtube_comment503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeComment504Error1](bundle_social/models/api_v1_misc_youtube_comment504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_edit_video(*, body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeVideoResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the title, description, tags, category, or privacy status of a published YouTube video.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_edit_video()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeEditVideoErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_edit_video()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeEditVideoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubeVideoRequest](bundle_social/models/api_v1_misc_youtube_video_request.py) \| [ApiV1MiscYoutubeVideoRequestDict](bundle_social/models/api_v1_misc_youtube_video_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse](bundle_social/models/api_v1_misc_youtube_video_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeEditVideoErrorBody](bundle_social/errors/misc_youtube_edit_video_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeVideo400Error1](bundle_social/models/api_v1_misc_youtube_video400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeVideo401Error1](bundle_social/models/api_v1_misc_youtube_video401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeVideo403Error1](bundle_social/models/api_v1_misc_youtube_video403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeVideo404Error1](bundle_social/models/api_v1_misc_youtube_video404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeVideo429Error1](bundle_social/models/api_v1_misc_youtube_video429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeVideo500Error1](bundle_social/models/api_v1_misc_youtube_video500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeVideo502Error1](bundle_social/models/api_v1_misc_youtube_video502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeVideo503Error1](bundle_social/models/api_v1_misc_youtube_video503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeVideo504Error1](bundle_social/models/api_v1_misc_youtube_video504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_get_channel_playlist(team_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubePlaylistResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_get_channel_playlist("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetChannelPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_get_channel_playlist("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetChannelPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_results</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse](bundle_social/models/api_v1_misc_youtube_playlist_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeGetChannelPlaylistErrorBody](bundle_social/errors/misc_youtube_get_channel_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylist400Error1](bundle_social/models/api_v1_misc_youtube_playlist400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylist401Error1](bundle_social/models/api_v1_misc_youtube_playlist401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylist403Error1](bundle_social/models/api_v1_misc_youtube_playlist403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylist404Error1](bundle_social/models/api_v1_misc_youtube_playlist404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylist429Error1](bundle_social/models/api_v1_misc_youtube_playlist429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylist500Error1](bundle_social/models/api_v1_misc_youtube_playlist500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylist502Error1](bundle_social/models/api_v1_misc_youtube_playlist502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylist503Error1](bundle_social/models/api_v1_misc_youtube_playlist503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylist504Error1](bundle_social/models/api_v1_misc_youtube_playlist504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_get_regions(team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeRegionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of content regions that the YouTube website supports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_get_regions("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubeRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetRegionsErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_get_regions("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubeRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetRegionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeRegionsResponse](bundle_social/models/api_v1_misc_youtube_regions_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeGetRegionsErrorBody](bundle_social/errors/misc_youtube_get_regions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeRegions400Error1](bundle_social/models/api_v1_misc_youtube_regions400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeRegions401Error1](bundle_social/models/api_v1_misc_youtube_regions401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeRegions403Error1](bundle_social/models/api_v1_misc_youtube_regions403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeRegions404Error1](bundle_social/models/api_v1_misc_youtube_regions404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeRegions429Error1](bundle_social/models/api_v1_misc_youtube_regions429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeRegions500Error1](bundle_social/models/api_v1_misc_youtube_regions500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeRegions502Error1](bundle_social/models/api_v1_misc_youtube_regions502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeRegions503Error1](bundle_social/models/api_v1_misc_youtube_regions503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeRegions504Error1](bundle_social/models/api_v1_misc_youtube_regions504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_get_video_categories(team_id: str, *, region_code: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeVideoCategoriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_get_video_categories("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoCategoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetVideoCategoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_get_video_categories("some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubeVideoCategoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetVideoCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>region_code</code> | <code>str \| None</code> | ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoCategoriesResponse](bundle_social/models/api_v1_misc_youtube_video_categories_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeGetVideoCategoriesErrorBody](bundle_social/errors/misc_youtube_get_video_categories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeVideoCategories400Error1](bundle_social/models/api_v1_misc_youtube_video_categories400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeVideoCategories401Error1](bundle_social/models/api_v1_misc_youtube_video_categories401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeVideoCategories403Error1](bundle_social/models/api_v1_misc_youtube_video_categories403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeVideoCategories404Error1](bundle_social/models/api_v1_misc_youtube_video_categories404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeVideoCategories429Error1](bundle_social/models/api_v1_misc_youtube_video_categories429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeVideoCategories500Error1](bundle_social/models/api_v1_misc_youtube_video_categories500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeVideoCategories502Error1](bundle_social/models/api_v1_misc_youtube_video_categories502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeVideoCategories503Error1](bundle_social/models/api_v1_misc_youtube_video_categories503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeVideoCategories504Error1](bundle_social/models/api_v1_misc_youtube_video_categories504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_get_videos_from_playlist(team_id: str, playlist_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubePlaylistItemsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_get_videos_from_playlist("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetVideosFromPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_get_videos_from_playlist(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeGetVideosFromPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>playlist_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_results</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse1](bundle_social/models/api_v1_misc_youtube_playlist_items_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeGetVideosFromPlaylistErrorBody](bundle_social/errors/misc_youtube_get_videos_from_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylistItems400Error1](bundle_social/models/api_v1_misc_youtube_playlist_items400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylistItems401Error1](bundle_social/models/api_v1_misc_youtube_playlist_items401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylistItems403Error1](bundle_social/models/api_v1_misc_youtube_playlist_items403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylistItems404Error1](bundle_social/models/api_v1_misc_youtube_playlist_items404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylistItems429Error1](bundle_social/models/api_v1_misc_youtube_playlist_items429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylistItems500Error1](bundle_social/models/api_v1_misc_youtube_playlist_items500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylistItems502Error1](bundle_social/models/api_v1_misc_youtube_playlist_items502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylistItems503Error1](bundle_social/models/api_v1_misc_youtube_playlist_items503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylistItems504Error1](bundle_social/models/api_v1_misc_youtube_playlist_items504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_set_thumbnail(*, body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubeThumbnailResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and strongly influence click-through rate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_set_thumbnail()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeThumbnailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeSetThumbnailErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_set_thumbnail()
    # TODO: Handle 'response' of type ApiV1MiscYoutubeThumbnailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeSetThumbnailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubeThumbnailRequest](bundle_social/models/api_v1_misc_youtube_thumbnail_request.py) \| [ApiV1MiscYoutubeThumbnailRequestDict](bundle_social/models/api_v1_misc_youtube_thumbnail_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeThumbnailResponse](bundle_social/models/api_v1_misc_youtube_thumbnail_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeSetThumbnailErrorBody](bundle_social/errors/misc_youtube_set_thumbnail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubeThumbnail400Error1](bundle_social/models/api_v1_misc_youtube_thumbnail400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubeThumbnail401Error1](bundle_social/models/api_v1_misc_youtube_thumbnail401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubeThumbnail403Error1](bundle_social/models/api_v1_misc_youtube_thumbnail403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubeThumbnail404Error1](bundle_social/models/api_v1_misc_youtube_thumbnail404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubeThumbnail429Error1](bundle_social/models/api_v1_misc_youtube_thumbnail429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubeThumbnail500Error1](bundle_social/models/api_v1_misc_youtube_thumbnail500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubeThumbnail502Error1](bundle_social/models/api_v1_misc_youtube_thumbnail502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubeThumbnail503Error1](bundle_social/models/api_v1_misc_youtube_thumbnail503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubeThumbnail504Error1](bundle_social/models/api_v1_misc_youtube_thumbnail504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def misc_youtube_update_channel_playlist(*, body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1MiscYoutubePlaylistResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the playlist ID together with the fields you want to update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.misc.misc_youtube_update_channel_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeUpdateChannelPlaylistErrorBody
```

**Async**

```python
try:
    response = await async_client.misc.misc_youtube_update_channel_playlist()
    # TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MiscYoutubeUpdateChannelPlaylistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1MiscYoutubePlaylistRequest1](bundle_social/models/api_v1_misc_youtube_playlist_request1.py) \| [ApiV1MiscYoutubePlaylistRequest1Dict](bundle_social/models/api_v1_misc_youtube_playlist_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](bundle_social/models/api_v1_misc_youtube_playlist_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[MiscYoutubeUpdateChannelPlaylistErrorBody](bundle_social/errors/misc_youtube_update_channel_playlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1MiscYoutubePlaylist400Error1](bundle_social/models/api_v1_misc_youtube_playlist400_error1.py)</code> |
| 401 | <code>[ApiV1MiscYoutubePlaylist401Error1](bundle_social/models/api_v1_misc_youtube_playlist401_error1.py)</code> |
| 403 | <code>[ApiV1MiscYoutubePlaylist403Error1](bundle_social/models/api_v1_misc_youtube_playlist403_error1.py)</code> |
| 404 | <code>[ApiV1MiscYoutubePlaylist404Error1](bundle_social/models/api_v1_misc_youtube_playlist404_error1.py)</code> |
| 429 | <code>[ApiV1MiscYoutubePlaylist429Error1](bundle_social/models/api_v1_misc_youtube_playlist429_error1.py)</code> |
| 500 | <code>[ApiV1MiscYoutubePlaylist500Error1](bundle_social/models/api_v1_misc_youtube_playlist500_error1.py)</code> |
| 502 | <code>[ApiV1MiscYoutubePlaylist502Error1](bundle_social/models/api_v1_misc_youtube_playlist502_error1.py)</code> |
| 503 | <code>[ApiV1MiscYoutubePlaylist503Error1](bundle_social/models/api_v1_misc_youtube_playlist503_error1.py)</code> |
| 504 | <code>[ApiV1MiscYoutubePlaylist504Error1](bundle_social/models/api_v1_misc_youtube_playlist504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationApi

> Source: [OrganizationApi](bundle_social/apis/organization_api.py)

<details>
<summary><code>def organization_get_comments_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsageCommentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many comments your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_comments_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetCommentsUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_comments_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageCommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetCommentsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageCommentsResponse](bundle_social/models/api_v1_organization_usage_comments_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetCommentsUsageErrorBody](bundle_social/errors/organization_get_comments_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsageComments400Error1](bundle_social/models/api_v1_organization_usage_comments400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsageComments401Error1](bundle_social/models/api_v1_organization_usage_comments401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsageComments403Error1](bundle_social/models/api_v1_organization_usage_comments403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsageComments404Error1](bundle_social/models/api_v1_organization_usage_comments404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsageComments429Error1](bundle_social/models/api_v1_organization_usage_comments429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsageComments500Error1](bundle_social/models/api_v1_organization_usage_comments500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsageComments502Error1](bundle_social/models/api_v1_organization_usage_comments502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsageComments503Error1](bundle_social/models/api_v1_organization_usage_comments503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsageComments504Error1](bundle_social/models/api_v1_organization_usage_comments504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_daily_limits_usage(social_account_id: str, *, date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsageDailyLimitsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check how many posts a single social account has already published on a specific day versus the platform's own daily cap. Use this to avoid hitting platform-side publishing limits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_daily_limits_usage("some example string")
    # TODO: Handle 'response' of type ApiV1OrganizationUsageDailyLimitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetDailyLimitsUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_daily_limits_usage("some example string")
    # TODO: Handle 'response' of type ApiV1OrganizationUsageDailyLimitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetDailyLimitsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>social_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>date</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageDailyLimitsResponse](bundle_social/models/api_v1_organization_usage_daily_limits_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetDailyLimitsUsageErrorBody](bundle_social/errors/organization_get_daily_limits_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsageDailyLimits400Error1](bundle_social/models/api_v1_organization_usage_daily_limits400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsageDailyLimits401Error1](bundle_social/models/api_v1_organization_usage_daily_limits401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsageDailyLimits403Error1](bundle_social/models/api_v1_organization_usage_daily_limits403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsageDailyLimits404Error1](bundle_social/models/api_v1_organization_usage_daily_limits404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsageDailyLimits429Error1](bundle_social/models/api_v1_organization_usage_daily_limits429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsageDailyLimits500Error1](bundle_social/models/api_v1_organization_usage_daily_limits500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsageDailyLimits502Error1](bundle_social/models/api_v1_organization_usage_daily_limits502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsageDailyLimits503Error1](bundle_social/models/api_v1_organization_usage_daily_limits503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsageDailyLimits504Error1](bundle_social/models/api_v1_organization_usage_daily_limits504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_imports_usage(*, page: float | None = 1.0, page_size: float | None = 20.0, team_id: str | None = None, social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None, social_account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsageImportsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much import capacity each social account has consumed, paginated and filterable by team or platform. Use it to track post history and review import quota.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_imports_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetImportsUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_imports_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetImportsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>20.0</code> |
| <code>team_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_type</code> | <code>[SocialAccountTypeBundleSocialOrganizationApiOrStr](bundle_social/models/enums/social_account_type_bundle_social_organization_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageImportsResponse](bundle_social/models/api_v1_organization_usage_imports_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetImportsUsageErrorBody](bundle_social/errors/organization_get_imports_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsageImports400Error1](bundle_social/models/api_v1_organization_usage_imports400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsageImports401Error1](bundle_social/models/api_v1_organization_usage_imports401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsageImports403Error1](bundle_social/models/api_v1_organization_usage_imports403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsageImports404Error1](bundle_social/models/api_v1_organization_usage_imports404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsageImports429Error1](bundle_social/models/api_v1_organization_usage_imports429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsageImports500Error1](bundle_social/models/api_v1_organization_usage_imports500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsageImports502Error1](bundle_social/models/api_v1_organization_usage_imports502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsageImports503Error1](bundle_social/models/api_v1_organization_usage_imports503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsageImports504Error1](bundle_social/models/api_v1_organization_usage_imports504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_messages_usage(*, offset: int | None = 0, limit: int | None = 10, team_id: str | None = None, social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None, social_account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsageMessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this UTC calendar month against its monthly limits, paginated with `offset`/`limit` and filterable by team, platform or account. Messages counted: every message you sent, including private replies to comments. Not counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect per-account and organization overrides on top of the plan default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_messages_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetMessagesUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_messages_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetMessagesUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>team_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_type</code> | <code>[SocialAccountType1BundleSocialOrganizationApiOrStr](bundle_social/models/enums/social_account_type1_bundle_social_organization_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageMessagesResponse](bundle_social/models/api_v1_organization_usage_messages_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetMessagesUsageErrorBody](bundle_social/errors/organization_get_messages_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsageMessages400Error1](bundle_social/models/api_v1_organization_usage_messages400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsageMessages401Error1](bundle_social/models/api_v1_organization_usage_messages401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsageMessages403Error1](bundle_social/models/api_v1_organization_usage_messages403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsageMessages404Error1](bundle_social/models/api_v1_organization_usage_messages404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsageMessages429Error1](bundle_social/models/api_v1_organization_usage_messages429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsageMessages500Error1](bundle_social/models/api_v1_organization_usage_messages500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsageMessages502Error1](bundle_social/models/api_v1_organization_usage_messages502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsageMessages503Error1](bundle_social/models/api_v1_organization_usage_messages503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsageMessages504Error1](bundle_social/models/api_v1_organization_usage_messages504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_organization(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's details and plan. The `teams` field is deprecated and will be removed on 2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_organization()
    # TODO: Handle 'response' of type ApiV1OrganizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_organization()
    # TODO: Handle 'response' of type ApiV1OrganizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationResponse](bundle_social/models/api_v1_organization_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetOrganizationErrorBody](bundle_social/errors/organization_get_organization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Organization400Error1](bundle_social/models/api_v1_organization400_error1.py)</code> |
| 401 | <code>[ApiV1Organization401Error1](bundle_social/models/api_v1_organization401_error1.py)</code> |
| 403 | <code>[ApiV1Organization403Error1](bundle_social/models/api_v1_organization403_error1.py)</code> |
| 404 | <code>[ApiV1Organization404Error1](bundle_social/models/api_v1_organization404_error1.py)</code> |
| 429 | <code>[ApiV1Organization429Error1](bundle_social/models/api_v1_organization429_error1.py)</code> |
| 500 | <code>[ApiV1Organization500Error1](bundle_social/models/api_v1_organization500_error1.py)</code> |
| 502 | <code>[ApiV1Organization502Error1](bundle_social/models/api_v1_organization502_error1.py)</code> |
| 503 | <code>[ApiV1Organization503Error1](bundle_social/models/api_v1_organization503_error1.py)</code> |
| 504 | <code>[ApiV1Organization504Error1](bundle_social/models/api_v1_organization504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_posts_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsagePostsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many posts your organization has consumed against its plan limit for the current billing period. Use it to monitor quota before scheduling large batches.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_posts_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsagePostsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetPostsUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_posts_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsagePostsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetPostsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsagePostsResponse](bundle_social/models/api_v1_organization_usage_posts_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetPostsUsageErrorBody](bundle_social/errors/organization_get_posts_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsagePosts400Error1](bundle_social/models/api_v1_organization_usage_posts400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsagePosts401Error1](bundle_social/models/api_v1_organization_usage_posts401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsagePosts403Error1](bundle_social/models/api_v1_organization_usage_posts403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsagePosts404Error1](bundle_social/models/api_v1_organization_usage_posts404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsagePosts429Error1](bundle_social/models/api_v1_organization_usage_posts429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsagePosts500Error1](bundle_social/models/api_v1_organization_usage_posts500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsagePosts502Error1](bundle_social/models/api_v1_organization_usage_posts502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsagePosts503Error1](bundle_social/models/api_v1_organization_usage_posts503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsagePosts504Error1](bundle_social/models/api_v1_organization_usage_posts504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def organization_get_uploads_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1OrganizationUsageUploadsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much upload capacity your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_api.organization_get_uploads_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageUploadsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetUploadsUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_api.organization_get_uploads_usage()
    # TODO: Handle 'response' of type ApiV1OrganizationUsageUploadsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrganizationGetUploadsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageUploadsResponse](bundle_social/models/api_v1_organization_usage_uploads_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[OrganizationGetUploadsUsageErrorBody](bundle_social/errors/organization_get_uploads_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1OrganizationUsageUploads400Error1](bundle_social/models/api_v1_organization_usage_uploads400_error1.py)</code> |
| 401 | <code>[ApiV1OrganizationUsageUploads401Error1](bundle_social/models/api_v1_organization_usage_uploads401_error1.py)</code> |
| 403 | <code>[ApiV1OrganizationUsageUploads403Error1](bundle_social/models/api_v1_organization_usage_uploads403_error1.py)</code> |
| 404 | <code>[ApiV1OrganizationUsageUploads404Error1](bundle_social/models/api_v1_organization_usage_uploads404_error1.py)</code> |
| 429 | <code>[ApiV1OrganizationUsageUploads429Error1](bundle_social/models/api_v1_organization_usage_uploads429_error1.py)</code> |
| 500 | <code>[ApiV1OrganizationUsageUploads500Error1](bundle_social/models/api_v1_organization_usage_uploads500_error1.py)</code> |
| 502 | <code>[ApiV1OrganizationUsageUploads502Error1](bundle_social/models/api_v1_organization_usage_uploads502_error1.py)</code> |
| 503 | <code>[ApiV1OrganizationUsageUploads503Error1](bundle_social/models/api_v1_organization_usage_uploads503_error1.py)</code> |
| 504 | <code>[ApiV1OrganizationUsageUploads504Error1](bundle_social/models/api_v1_organization_usage_uploads504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PostApi

> Source: [PostApi](bundle_social/apis/post_api.py)

<details>
<summary><code>def post_create(*, body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply shared content plus optional per-platform overrides for captions, media, and platform-specific options.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_create()
    # TODO: Handle 'response' of type ApiV1PostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_create()
    # TODO: Handle 'response' of type ApiV1PostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PostRequest1](bundle_social/models/api_v1_post_request1.py) \| [ApiV1PostRequest1Dict](bundle_social/models/api_v1_post_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse1](bundle_social/models/api_v1_post_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCreateErrorBody](bundle_social/errors/post_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Post400Error1](bundle_social/models/api_v1_post400_error1.py)</code> |
| 401 | <code>[ApiV1Post401Error1](bundle_social/models/api_v1_post401_error1.py)</code> |
| 403 | <code>[ApiV1Post403Error1](bundle_social/models/api_v1_post403_error1.py)</code> |
| 404 | <code>[ApiV1Post404Error1](bundle_social/models/api_v1_post404_error1.py)</code> |
| 409 | <code>[ApiV1Post409Error1](bundle_social/models/api_v1_post409_error1.py)</code> |
| 429 | <code>[ApiV1Post429Error1](bundle_social/models/api_v1_post429_error1.py)</code> |
| 500 | <code>[ApiV1Post500Error1](bundle_social/models/api_v1_post500_error1.py)</code> |
| 502 | <code>[ApiV1Post502Error1](bundle_social/models/api_v1_post502_error1.py)</code> |
| 503 | <code>[ApiV1Post503Error1](bundle_social/models/api_v1_post503_error1.py)</code> |
| 504 | <code>[ApiV1Post504Error1](bundle_social/models/api_v1_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an already-published post does not remove it from the social platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_delete("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_delete("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse2](bundle_social/models/api_v1_post_response2.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostDeleteErrorBody](bundle_social/errors/post_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Post400Error1](bundle_social/models/api_v1_post400_error1.py)</code> |
| 401 | <code>[ApiV1Post401Error1](bundle_social/models/api_v1_post401_error1.py)</code> |
| 403 | <code>[ApiV1Post403Error1](bundle_social/models/api_v1_post403_error1.py)</code> |
| 404 | <code>[ApiV1Post404Error1](bundle_social/models/api_v1_post404_error1.py)</code> |
| 429 | <code>[ApiV1Post429Error1](bundle_social/models/api_v1_post429_error1.py)</code> |
| 500 | <code>[ApiV1Post500Error1](bundle_social/models/api_v1_post500_error1.py)</code> |
| 502 | <code>[ApiV1Post502Error1](bundle_social/models/api_v1_post502_error1.py)</code> |
| 503 | <code>[ApiV1Post503Error1](bundle_social/models/api_v1_post503_error1.py)</code> |
| 504 | <code>[ApiV1Post504Error1](bundle_social/models/api_v1_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_get(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_get("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_get("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse](bundle_social/models/api_v1_post_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostGetErrorBody](bundle_social/errors/post_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Post400Error1](bundle_social/models/api_v1_post400_error1.py)</code> |
| 401 | <code>[ApiV1Post401Error1](bundle_social/models/api_v1_post401_error1.py)</code> |
| 403 | <code>[ApiV1Post403Error1](bundle_social/models/api_v1_post403_error1.py)</code> |
| 404 | <code>[ApiV1Post404Error1](bundle_social/models/api_v1_post404_error1.py)</code> |
| 429 | <code>[ApiV1Post429Error1](bundle_social/models/api_v1_post429_error1.py)</code> |
| 500 | <code>[ApiV1Post500Error1](bundle_social/models/api_v1_post500_error1.py)</code> |
| 502 | <code>[ApiV1Post502Error1](bundle_social/models/api_v1_post502_error1.py)</code> |
| 503 | <code>[ApiV1Post503Error1](bundle_social/models/api_v1_post503_error1.py)</code> |
| 504 | <code>[ApiV1Post504Error1](bundle_social/models/api_v1_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_get_by_reference_key(reference_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostReferenceKeyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you store your own identifier on create and want to look the post up later without keeping a mapping table.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_get_by_reference_key("some example string")
    # TODO: Handle 'response' of type ApiV1PostReferenceKeyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetByReferenceKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_get_by_reference_key("some example string")
    # TODO: Handle 'response' of type ApiV1PostReferenceKeyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetByReferenceKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reference_key</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReferenceKeyResponse](bundle_social/models/api_v1_post_reference_key_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostGetByReferenceKeyErrorBody](bundle_social/errors/post_get_by_reference_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostReferenceKey400Error1](bundle_social/models/api_v1_post_reference_key400_error1.py)</code> |
| 401 | <code>[ApiV1PostReferenceKey401Error1](bundle_social/models/api_v1_post_reference_key401_error1.py)</code> |
| 403 | <code>[ApiV1PostReferenceKey403Error1](bundle_social/models/api_v1_post_reference_key403_error1.py)</code> |
| 404 | <code>[ApiV1PostReferenceKey404Error1](bundle_social/models/api_v1_post_reference_key404_error1.py)</code> |
| 429 | <code>[ApiV1PostReferenceKey429Error1](bundle_social/models/api_v1_post_reference_key429_error1.py)</code> |
| 500 | <code>[ApiV1PostReferenceKey500Error1](bundle_social/models/api_v1_post_reference_key500_error1.py)</code> |
| 502 | <code>[ApiV1PostReferenceKey502Error1](bundle_social/models/api_v1_post_reference_key502_error1.py)</code> |
| 503 | <code>[ApiV1PostReferenceKey503Error1](bundle_social/models/api_v1_post_reference_key503_error1.py)</code> |
| 504 | <code>[ApiV1PostReferenceKey504Error1](bundle_social/models/api_v1_post_reference_key504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_get_list(team_id: str, *, status: StatusOrStr | None = None, order_by: OrderByBundleSocialPostApiOrStr | None = None, order: OrderOrStr | None = None, q: str | None = None, platforms: list[PlatformBundleSocialPostApiOrStr] | None = None, post_date_from: RFC3339DateTime | None = None, post_date_to: RFC3339DateTime | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter posts across a team by status, platform, or date range with pagination. Use this to build a content calendar or reconcile your own database with bundle.social.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>status</code> | <code>[StatusOrStr](bundle_social/models/enums/status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>[OrderByBundleSocialPostApiOrStr](bundle_social/models/enums/order_by_bundle_social_post_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](bundle_social/models/enums/order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platforms</code> | <code>list&#91;[PlatformBundleSocialPostApiOrStr](bundle_social/models/enums/platform_bundle_social_post_api.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>post_date_from</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>post_date_to</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse3](bundle_social/models/api_v1_post_response3.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostGetListErrorBody](bundle_social/errors/post_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Post400Error1](bundle_social/models/api_v1_post400_error1.py)</code> |
| 401 | <code>[ApiV1Post401Error1](bundle_social/models/api_v1_post401_error1.py)</code> |
| 403 | <code>[ApiV1Post403Error1](bundle_social/models/api_v1_post403_error1.py)</code> |
| 404 | <code>[ApiV1Post404Error1](bundle_social/models/api_v1_post404_error1.py)</code> |
| 429 | <code>[ApiV1Post429Error1](bundle_social/models/api_v1_post429_error1.py)</code> |
| 500 | <code>[ApiV1Post500Error1](bundle_social/models/api_v1_post500_error1.py)</code> |
| 502 | <code>[ApiV1Post502Error1](bundle_social/models/api_v1_post502_error1.py)</code> |
| 503 | <code>[ApiV1Post503Error1](bundle_social/models/api_v1_post503_error1.py)</code> |
| 504 | <code>[ApiV1Post504Error1](bundle_social/models/api_v1_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_get_reconnect_social_account_candidates(team_id: str, type_: TypeOrStr, *, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostReconnectSocialAccountCandidatesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly connected account of the same platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_get_reconnect_social_account_candidates("some example string", Type.TIKTOK)
    # TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountCandidatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetReconnectSocialAccountCandidatesErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_get_reconnect_social_account_candidates(
        "some example string", Type.TIKTOK
    )
    # TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountCandidatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostGetReconnectSocialAccountCandidatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>type_</code> | <code>[TypeOrStr](bundle_social/models/enums/type.py)</code> | Value sent with the request. |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReconnectSocialAccountCandidatesResponse](bundle_social/models/api_v1_post_reconnect_social_account_candidates_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostGetReconnectSocialAccountCandidatesErrorBody](bundle_social/errors/post_get_reconnect_social_account_candidates_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostReconnectSocialAccountCandidates400Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates400_error1.py)</code> |
| 401 | <code>[ApiV1PostReconnectSocialAccountCandidates401Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates401_error1.py)</code> |
| 403 | <code>[ApiV1PostReconnectSocialAccountCandidates403Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates403_error1.py)</code> |
| 404 | <code>[ApiV1PostReconnectSocialAccountCandidates404Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates404_error1.py)</code> |
| 429 | <code>[ApiV1PostReconnectSocialAccountCandidates429Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates429_error1.py)</code> |
| 500 | <code>[ApiV1PostReconnectSocialAccountCandidates500Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates500_error1.py)</code> |
| 502 | <code>[ApiV1PostReconnectSocialAccountCandidates502Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates502_error1.py)</code> |
| 503 | <code>[ApiV1PostReconnectSocialAccountCandidates503Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates503_error1.py)</code> |
| 504 | <code>[ApiV1PostReconnectSocialAccountCandidates504Error1](bundle_social/models/api_v1_post_reconnect_social_account_candidates504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_reconnect_social_account(*, body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostReconnectSocialAccountResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reattach a newly connected social account to posts that were orphaned when the previous account was disconnected, so scheduled posts publish instead of failing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_reconnect_social_account()
    # TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostReconnectSocialAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_reconnect_social_account()
    # TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostReconnectSocialAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PostReconnectSocialAccountRequest](bundle_social/models/api_v1_post_reconnect_social_account_request.py) \| [ApiV1PostReconnectSocialAccountRequestDict](bundle_social/models/api_v1_post_reconnect_social_account_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReconnectSocialAccountResponse](bundle_social/models/api_v1_post_reconnect_social_account_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostReconnectSocialAccountErrorBody](bundle_social/errors/post_reconnect_social_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostReconnectSocialAccount400Error1](bundle_social/models/api_v1_post_reconnect_social_account400_error1.py)</code> |
| 401 | <code>[ApiV1PostReconnectSocialAccount401Error1](bundle_social/models/api_v1_post_reconnect_social_account401_error1.py)</code> |
| 403 | <code>[ApiV1PostReconnectSocialAccount403Error1](bundle_social/models/api_v1_post_reconnect_social_account403_error1.py)</code> |
| 404 | <code>[ApiV1PostReconnectSocialAccount404Error1](bundle_social/models/api_v1_post_reconnect_social_account404_error1.py)</code> |
| 429 | <code>[ApiV1PostReconnectSocialAccount429Error1](bundle_social/models/api_v1_post_reconnect_social_account429_error1.py)</code> |
| 500 | <code>[ApiV1PostReconnectSocialAccount500Error1](bundle_social/models/api_v1_post_reconnect_social_account500_error1.py)</code> |
| 502 | <code>[ApiV1PostReconnectSocialAccount502Error1](bundle_social/models/api_v1_post_reconnect_social_account502_error1.py)</code> |
| 503 | <code>[ApiV1PostReconnectSocialAccount503Error1](bundle_social/models/api_v1_post_reconnect_social_account503_error1.py)</code> |
| 504 | <code>[ApiV1PostReconnectSocialAccount504Error1](bundle_social/models/api_v1_post_reconnect_social_account504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_retry(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostRetryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the underlying cause first, then retry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_retry("some example string")
    # TODO: Handle 'response' of type ApiV1PostRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRetryErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_retry("some example string")
    # TODO: Handle 'response' of type ApiV1PostRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRetryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostRetryResponse](bundle_social/models/api_v1_post_retry_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostRetryErrorBody](bundle_social/errors/post_retry_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostRetry400Error1](bundle_social/models/api_v1_post_retry400_error1.py)</code> |
| 401 | <code>[ApiV1PostRetry401Error1](bundle_social/models/api_v1_post_retry401_error1.py)</code> |
| 403 | <code>[ApiV1PostRetry403Error1](bundle_social/models/api_v1_post_retry403_error1.py)</code> |
| 404 | <code>[ApiV1PostRetry404Error1](bundle_social/models/api_v1_post_retry404_error1.py)</code> |
| 429 | <code>[ApiV1PostRetry429Error1](bundle_social/models/api_v1_post_retry429_error1.py)</code> |
| 500 | <code>[ApiV1PostRetry500Error1](bundle_social/models/api_v1_post_retry500_error1.py)</code> |
| 502 | <code>[ApiV1PostRetry502Error1](bundle_social/models/api_v1_post_retry502_error1.py)</code> |
| 503 | <code>[ApiV1PostRetry503Error1](bundle_social/models/api_v1_post_retry503_error1.py)</code> |
| 504 | <code>[ApiV1PostRetry504Error1](bundle_social/models/api_v1_post_retry504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_update(id_: str, *, body: ApiV1PostRequest | ApiV1PostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the fields you send are modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_api.post_update("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.post_api.post_update("some example string")
    # TODO: Handle 'response' of type ApiV1PostResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PostRequest](bundle_social/models/api_v1_post_request.py) \| [ApiV1PostRequestDict](bundle_social/models/api_v1_post_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse1](bundle_social/models/api_v1_post_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostUpdateErrorBody](bundle_social/errors/post_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Post400Error1](bundle_social/models/api_v1_post400_error1.py)</code> |
| 401 | <code>[ApiV1Post401Error1](bundle_social/models/api_v1_post401_error1.py)</code> |
| 403 | <code>[ApiV1Post403Error1](bundle_social/models/api_v1_post403_error1.py)</code> |
| 404 | <code>[ApiV1Post404Error1](bundle_social/models/api_v1_post404_error1.py)</code> |
| 409 | <code>[ApiV1Post409Error1](bundle_social/models/api_v1_post409_error1.py)</code> |
| 429 | <code>[ApiV1Post429Error1](bundle_social/models/api_v1_post429_error1.py)</code> |
| 500 | <code>[ApiV1Post500Error1](bundle_social/models/api_v1_post500_error1.py)</code> |
| 502 | <code>[ApiV1Post502Error1](bundle_social/models/api_v1_post502_error1.py)</code> |
| 503 | <code>[ApiV1Post503Error1](bundle_social/models/api_v1_post503_error1.py)</code> |
| 504 | <code>[ApiV1Post504Error1](bundle_social/models/api_v1_post504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TeamApi

> Source: [TeamApi](bundle_social/apis/team_api.py)

<details>
<summary><code>def team_create_team(*, body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new team in your organization. Create one team per brand, client, or workspace you want to keep separate, then connect social accounts to it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.team_api.team_create_team()
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamCreateTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.team_api.team_create_team()
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamCreateTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1TeamRequest1](bundle_social/models/api_v1_team_request1.py) \| [ApiV1TeamRequest1Dict](bundle_social/models/api_v1_team_request1.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](bundle_social/models/api_v1_team_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[TeamCreateTeamErrorBody](bundle_social/errors/team_create_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Team400Error1](bundle_social/models/api_v1_team400_error1.py)</code> |
| 401 | <code>[ApiV1Team401Error1](bundle_social/models/api_v1_team401_error1.py)</code> |
| 403 | <code>[ApiV1Team403Error1](bundle_social/models/api_v1_team403_error1.py)</code> |
| 404 | <code>[ApiV1Team404Error21](bundle_social/models/api_v1_team404_error21.py)</code> |
| 429 | <code>[ApiV1Team429Error1](bundle_social/models/api_v1_team429_error1.py)</code> |
| 500 | <code>[ApiV1Team500Error1](bundle_social/models/api_v1_team500_error1.py)</code> |
| 502 | <code>[ApiV1Team502Error1](bundle_social/models/api_v1_team502_error1.py)</code> |
| 503 | <code>[ApiV1Team503Error1](bundle_social/models/api_v1_team503_error1.py)</code> |
| 504 | <code>[ApiV1Team504Error1](bundle_social/models/api_v1_team504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def team_delete_team(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.team_api.team_delete_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamDeleteTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.team_api.team_delete_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamDeleteTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](bundle_social/models/api_v1_team_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[TeamDeleteTeamErrorBody](bundle_social/errors/team_delete_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Team400Error1](bundle_social/models/api_v1_team400_error1.py)</code> |
| 401 | <code>[ApiV1Team401Error1](bundle_social/models/api_v1_team401_error1.py)</code> |
| 403 | <code>[ApiV1Team403Error1](bundle_social/models/api_v1_team403_error1.py)</code> |
| 404 | <code>[ApiV1Team404Error21](bundle_social/models/api_v1_team404_error21.py)</code> |
| 429 | <code>[ApiV1Team429Error1](bundle_social/models/api_v1_team429_error1.py)</code> |
| 500 | <code>[ApiV1Team500Error1](bundle_social/models/api_v1_team500_error1.py)</code> |
| 502 | <code>[ApiV1Team502Error1](bundle_social/models/api_v1_team502_error1.py)</code> |
| 503 | <code>[ApiV1Team503Error1](bundle_social/models/api_v1_team503_error1.py)</code> |
| 504 | <code>[ApiV1Team504Error1](bundle_social/models/api_v1_team504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def team_get_list(*, offset: float | None = 0.0, limit: float | None = 10.0, search: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the teams in your organization with pagination. Use this to discover team IDs, which are required by most publishing and analytics endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.team_api.team_get_list()
    # TODO: Handle 'response' of type ApiV1TeamResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.team_api.team_get_list()
    # TODO: Handle 'response' of type ApiV1TeamResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse3](bundle_social/models/api_v1_team_response3.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[TeamGetListErrorBody](bundle_social/errors/team_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Team400Error1](bundle_social/models/api_v1_team400_error1.py)</code> |
| 401 | <code>[ApiV1Team401Error1](bundle_social/models/api_v1_team401_error1.py)</code> |
| 403 | <code>[ApiV1Team403Error1](bundle_social/models/api_v1_team403_error1.py)</code> |
| 404 | <code>[ApiV1Team404Error21](bundle_social/models/api_v1_team404_error21.py)</code> |
| 429 | <code>[ApiV1Team429Error1](bundle_social/models/api_v1_team429_error1.py)</code> |
| 500 | <code>[ApiV1Team500Error1](bundle_social/models/api_v1_team500_error1.py)</code> |
| 502 | <code>[ApiV1Team502Error1](bundle_social/models/api_v1_team502_error1.py)</code> |
| 503 | <code>[ApiV1Team503Error1](bundle_social/models/api_v1_team503_error1.py)</code> |
| 504 | <code>[ApiV1Team504Error1](bundle_social/models/api_v1_team504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def team_get_team(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single team with its connected social accounts and settings. Teams are the container that social accounts, posts, and uploads belong to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.team_api.team_get_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamGetTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.team_api.team_get_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamGetTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse](bundle_social/models/api_v1_team_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[TeamGetTeamErrorBody](bundle_social/errors/team_get_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Team400Error1](bundle_social/models/api_v1_team400_error1.py)</code> |
| 401 | <code>[ApiV1Team401Error1](bundle_social/models/api_v1_team401_error1.py)</code> |
| 403 | <code>[ApiV1Team403Error1](bundle_social/models/api_v1_team403_error1.py)</code> |
| 404 | <code>[ApiV1Team404Error1](bundle_social/models/api_v1_team404_error1.py)</code> |
| 429 | <code>[ApiV1Team429Error1](bundle_social/models/api_v1_team429_error1.py)</code> |
| 500 | <code>[ApiV1Team500Error1](bundle_social/models/api_v1_team500_error1.py)</code> |
| 502 | <code>[ApiV1Team502Error1](bundle_social/models/api_v1_team502_error1.py)</code> |
| 503 | <code>[ApiV1Team503Error1](bundle_social/models/api_v1_team503_error1.py)</code> |
| 504 | <code>[ApiV1Team504Error1](bundle_social/models/api_v1_team504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def team_update_team(id_: str, *, body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.team_api.team_update_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamUpdateTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.team_api.team_update_team("some example string")
    # TODO: Handle 'response' of type ApiV1TeamResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TeamUpdateTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1TeamRequest](bundle_social/models/api_v1_team_request.py) \| [ApiV1TeamRequestDict](bundle_social/models/api_v1_team_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](bundle_social/models/api_v1_team_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[TeamUpdateTeamErrorBody](bundle_social/errors/team_update_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Team400Error1](bundle_social/models/api_v1_team400_error1.py)</code> |
| 401 | <code>[ApiV1Team401Error1](bundle_social/models/api_v1_team401_error1.py)</code> |
| 403 | <code>[ApiV1Team403Error1](bundle_social/models/api_v1_team403_error1.py)</code> |
| 404 | <code>[ApiV1Team404Error21](bundle_social/models/api_v1_team404_error21.py)</code> |
| 429 | <code>[ApiV1Team429Error1](bundle_social/models/api_v1_team429_error1.py)</code> |
| 500 | <code>[ApiV1Team500Error1](bundle_social/models/api_v1_team500_error1.py)</code> |
| 502 | <code>[ApiV1Team502Error1](bundle_social/models/api_v1_team502_error1.py)</code> |
| 503 | <code>[ApiV1Team503Error1](bundle_social/models/api_v1_team503_error1.py)</code> |
| 504 | <code>[ApiV1Team504Error1](bundle_social/models/api_v1_team504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UploadApi

> Source: [UploadApi](bundle_social/apis/upload_api.py)

<details>
<summary><code>def upload_abort_multipart_upload(*, body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadMultipartAbortResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned parts stay in storage and count against your usage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_abort_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartAbortResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAbortMultipartUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_abort_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartAbortResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAbortMultipartUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadMultipartAbortRequest](bundle_social/models/api_v1_upload_multipart_abort_request.py) \| [ApiV1UploadMultipartAbortRequestDict](bundle_social/models/api_v1_upload_multipart_abort_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartAbortResponse](bundle_social/models/api_v1_upload_multipart_abort_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadAbortMultipartUploadErrorBody](bundle_social/errors/upload_abort_multipart_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadMultipartAbort400Error1](bundle_social/models/api_v1_upload_multipart_abort400_error1.py)</code> |
| 401 | <code>[ApiV1UploadMultipartAbort401Error1](bundle_social/models/api_v1_upload_multipart_abort401_error1.py)</code> |
| 403 | <code>[ApiV1UploadMultipartAbort403Error1](bundle_social/models/api_v1_upload_multipart_abort403_error1.py)</code> |
| 404 | <code>[ApiV1UploadMultipartAbort404Error1](bundle_social/models/api_v1_upload_multipart_abort404_error1.py)</code> |
| 429 | <code>[ApiV1UploadMultipartAbort429Error1](bundle_social/models/api_v1_upload_multipart_abort429_error1.py)</code> |
| 500 | <code>[ApiV1UploadMultipartAbort500Error1](bundle_social/models/api_v1_upload_multipart_abort500_error1.py)</code> |
| 502 | <code>[ApiV1UploadMultipartAbort502Error1](bundle_social/models/api_v1_upload_multipart_abort502_error1.py)</code> |
| 503 | <code>[ApiV1UploadMultipartAbort503Error1](bundle_social/models/api_v1_upload_multipart_abort503_error1.py)</code> |
| 504 | <code>[ApiV1UploadMultipartAbort504Error1](bundle_social/models/api_v1_upload_multipart_abort504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_complete_multipart_upload(*, body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadMultipartCompleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assemble the uploaded parts into the final object and add it to your media library. Send every part with the ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403 means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself. Calling this again after it already succeeded returns the same upload instead of charging you twice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_complete_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCompleteMultipartUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_complete_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartCompleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCompleteMultipartUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadMultipartCompleteRequest](bundle_social/models/api_v1_upload_multipart_complete_request.py) \| [ApiV1UploadMultipartCompleteRequestDict](bundle_social/models/api_v1_upload_multipart_complete_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartCompleteResponse](bundle_social/models/api_v1_upload_multipart_complete_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadCompleteMultipartUploadErrorBody](bundle_social/errors/upload_complete_multipart_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadMultipartComplete400Error1](bundle_social/models/api_v1_upload_multipart_complete400_error1.py)</code> |
| 401 | <code>[ApiV1UploadMultipartComplete401Error1](bundle_social/models/api_v1_upload_multipart_complete401_error1.py)</code> |
| 403 | <code>[ApiV1UploadMultipartComplete403Error1](bundle_social/models/api_v1_upload_multipart_complete403_error1.py)</code> |
| 404 | <code>[ApiV1UploadMultipartComplete404Error1](bundle_social/models/api_v1_upload_multipart_complete404_error1.py)</code> |
| 429 | <code>[ApiV1UploadMultipartComplete429Error1](bundle_social/models/api_v1_upload_multipart_complete429_error1.py)</code> |
| 500 | <code>[ApiV1UploadMultipartComplete500Error1](bundle_social/models/api_v1_upload_multipart_complete500_error1.py)</code> |
| 502 | <code>[ApiV1UploadMultipartComplete502Error1](bundle_social/models/api_v1_upload_multipart_complete502_error1.py)</code> |
| 503 | <code>[ApiV1UploadMultipartComplete503Error1](bundle_social/models/api_v1_upload_multipart_complete503_error1.py)</code> |
| 504 | <code>[ApiV1UploadMultipartComplete504Error1](bundle_social/models/api_v1_upload_multipart_complete504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_create(*, team_id: str | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file. This is the only endpoint that uses multipart/form-data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_create()
    # TODO: Handle 'response' of type ApiV1UploadResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_create()
    # TODO: Handle 'response' of type ApiV1UploadResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>file</code> | <code>FileInput \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse1](bundle_social/models/api_v1_upload_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadCreateErrorBody](bundle_social/errors/upload_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Upload400Error1](bundle_social/models/api_v1_upload400_error1.py)</code> |
| 401 | <code>[ApiV1Upload401Error1](bundle_social/models/api_v1_upload401_error1.py)</code> |
| 403 | <code>[ApiV1Upload403Error1](bundle_social/models/api_v1_upload403_error1.py)</code> |
| 404 | <code>[ApiV1Upload404Error1](bundle_social/models/api_v1_upload404_error1.py)</code> |
| 429 | <code>[ApiV1Upload429Error1](bundle_social/models/api_v1_upload429_error1.py)</code> |
| 500 | <code>[ApiV1Upload500Error1](bundle_social/models/api_v1_upload500_error1.py)</code> |
| 502 | <code>[ApiV1Upload502Error1](bundle_social/models/api_v1_upload502_error1.py)</code> |
| 503 | <code>[ApiV1Upload503Error1](bundle_social/models/api_v1_upload503_error1.py)</code> |
| 504 | <code>[ApiV1Upload504Error1](bundle_social/models/api_v1_upload504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_create_from_url(*, body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadFromUrlResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_create_from_url()
    # TODO: Handle 'response' of type ApiV1UploadFromUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCreateFromUrlErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_create_from_url()
    # TODO: Handle 'response' of type ApiV1UploadFromUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadCreateFromUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadFromUrlRequest](bundle_social/models/api_v1_upload_from_url_request.py) \| [ApiV1UploadFromUrlRequestDict](bundle_social/models/api_v1_upload_from_url_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadFromUrlResponse](bundle_social/models/api_v1_upload_from_url_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadCreateFromUrlErrorBody](bundle_social/errors/upload_create_from_url_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadFromUrl400Error1](bundle_social/models/api_v1_upload_from_url400_error1.py)</code> |
| 401 | <code>[ApiV1UploadFromUrl401Error1](bundle_social/models/api_v1_upload_from_url401_error1.py)</code> |
| 403 | <code>[ApiV1UploadFromUrl403Error1](bundle_social/models/api_v1_upload_from_url403_error1.py)</code> |
| 404 | <code>[ApiV1UploadFromUrl404Error1](bundle_social/models/api_v1_upload_from_url404_error1.py)</code> |
| 429 | <code>[ApiV1UploadFromUrl429Error1](bundle_social/models/api_v1_upload_from_url429_error1.py)</code> |
| 500 | <code>[ApiV1UploadFromUrl500Error1](bundle_social/models/api_v1_upload_from_url500_error1.py)</code> |
| 502 | <code>[ApiV1UploadFromUrl502Error1](bundle_social/models/api_v1_upload_from_url502_error1.py)</code> |
| 503 | <code>[ApiV1UploadFromUrl503Error1](bundle_social/models/api_v1_upload_from_url503_error1.py)</code> |
| 504 | <code>[ApiV1UploadFromUrl504Error1](bundle_social/models/api_v1_upload_from_url504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a single media file from your library. Files still attached to scheduled posts should be replaced first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_delete("some example string")
    # TODO: Handle 'response' of type ApiV1UploadResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_delete("some example string")
    # TODO: Handle 'response' of type ApiV1UploadResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse1](bundle_social/models/api_v1_upload_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadDeleteErrorBody](bundle_social/errors/upload_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Upload400Error1](bundle_social/models/api_v1_upload400_error1.py)</code> |
| 401 | <code>[ApiV1Upload401Error1](bundle_social/models/api_v1_upload401_error1.py)</code> |
| 403 | <code>[ApiV1Upload403Error1](bundle_social/models/api_v1_upload403_error1.py)</code> |
| 404 | <code>[ApiV1Upload404Error1](bundle_social/models/api_v1_upload404_error1.py)</code> |
| 429 | <code>[ApiV1Upload429Error1](bundle_social/models/api_v1_upload429_error1.py)</code> |
| 500 | <code>[ApiV1Upload500Error1](bundle_social/models/api_v1_upload500_error1.py)</code> |
| 502 | <code>[ApiV1Upload502Error1](bundle_social/models/api_v1_upload502_error1.py)</code> |
| 503 | <code>[ApiV1Upload503Error1](bundle_social/models/api_v1_upload503_error1.py)</code> |
| 504 | <code>[ApiV1Upload504Error1](bundle_social/models/api_v1_upload504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_delete_many(*, body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ApiV1UploadResponse1]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete several media files in one request. Use it to clean up your library in bulk instead of calling delete per file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_delete_many()
    # TODO: Handle 'response' of type list[ApiV1UploadResponse1]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDeleteManyErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_delete_many()
    # TODO: Handle 'response' of type list[ApiV1UploadResponse1]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadDeleteManyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadRequest](bundle_social/models/api_v1_upload_request.py) \| [ApiV1UploadRequestDict](bundle_social/models/api_v1_upload_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiV1UploadResponse1](bundle_social/models/api_v1_upload_response1.py)&#93;</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadDeleteManyErrorBody](bundle_social/errors/upload_delete_many_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Upload400Error1](bundle_social/models/api_v1_upload400_error1.py)</code> |
| 401 | <code>[ApiV1Upload401Error1](bundle_social/models/api_v1_upload401_error1.py)</code> |
| 403 | <code>[ApiV1Upload403Error1](bundle_social/models/api_v1_upload403_error1.py)</code> |
| 404 | <code>[ApiV1Upload404Error1](bundle_social/models/api_v1_upload404_error1.py)</code> |
| 429 | <code>[ApiV1Upload429Error1](bundle_social/models/api_v1_upload429_error1.py)</code> |
| 500 | <code>[ApiV1Upload500Error1](bundle_social/models/api_v1_upload500_error1.py)</code> |
| 502 | <code>[ApiV1Upload502Error1](bundle_social/models/api_v1_upload502_error1.py)</code> |
| 503 | <code>[ApiV1Upload503Error1](bundle_social/models/api_v1_upload503_error1.py)</code> |
| 504 | <code>[ApiV1Upload504Error1](bundle_social/models/api_v1_upload504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_finalize_large_upload(*, body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadFinalizeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finalize large upload.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_finalize_large_upload()
    # TODO: Handle 'response' of type ApiV1UploadFinalizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadFinalizeLargeUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_finalize_large_upload()
    # TODO: Handle 'response' of type ApiV1UploadFinalizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadFinalizeLargeUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadFinalizeRequest](bundle_social/models/api_v1_upload_finalize_request.py) \| [ApiV1UploadFinalizeRequestDict](bundle_social/models/api_v1_upload_finalize_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadFinalizeResponse](bundle_social/models/api_v1_upload_finalize_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadFinalizeLargeUploadErrorBody](bundle_social/errors/upload_finalize_large_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadFinalize400Error1](bundle_social/models/api_v1_upload_finalize400_error1.py)</code> |
| 401 | <code>[ApiV1UploadFinalize401Error1](bundle_social/models/api_v1_upload_finalize401_error1.py)</code> |
| 403 | <code>[ApiV1UploadFinalize403Error1](bundle_social/models/api_v1_upload_finalize403_error1.py)</code> |
| 404 | <code>[ApiV1UploadFinalize404Error1](bundle_social/models/api_v1_upload_finalize404_error1.py)</code> |
| 429 | <code>[ApiV1UploadFinalize429Error1](bundle_social/models/api_v1_upload_finalize429_error1.py)</code> |
| 500 | <code>[ApiV1UploadFinalize500Error1](bundle_social/models/api_v1_upload_finalize500_error1.py)</code> |
| 502 | <code>[ApiV1UploadFinalize502Error1](bundle_social/models/api_v1_upload_finalize502_error1.py)</code> |
| 503 | <code>[ApiV1UploadFinalize503Error1](bundle_social/models/api_v1_upload_finalize503_error1.py)</code> |
| 504 | <code>[ApiV1UploadFinalize504Error1](bundle_social/models/api_v1_upload_finalize504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_get(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_get("some example string")
    # TODO: Handle 'response' of type ApiV1UploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadGetErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_get("some example string")
    # TODO: Handle 'response' of type ApiV1UploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse](bundle_social/models/api_v1_upload_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadGetErrorBody](bundle_social/errors/upload_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Upload400Error1](bundle_social/models/api_v1_upload400_error1.py)</code> |
| 401 | <code>[ApiV1Upload401Error1](bundle_social/models/api_v1_upload401_error1.py)</code> |
| 403 | <code>[ApiV1Upload403Error1](bundle_social/models/api_v1_upload403_error1.py)</code> |
| 404 | <code>[ApiV1Upload404Error1](bundle_social/models/api_v1_upload404_error1.py)</code> |
| 429 | <code>[ApiV1Upload429Error1](bundle_social/models/api_v1_upload429_error1.py)</code> |
| 500 | <code>[ApiV1Upload500Error1](bundle_social/models/api_v1_upload500_error1.py)</code> |
| 502 | <code>[ApiV1Upload502Error1](bundle_social/models/api_v1_upload502_error1.py)</code> |
| 503 | <code>[ApiV1Upload503Error1](bundle_social/models/api_v1_upload503_error1.py)</code> |
| 504 | <code>[ApiV1Upload504Error1](bundle_social/models/api_v1_upload504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_get_list(*, team_id: str | None = None, type_: TypeBundleSocialUploadApiOrStr | None = None, types: list[TypeBundleSocialUploadApiOrStr] | None = None, status: StatusBundleSocialUploadApiOrStr | None = None, ids: list[str] | None = None, urls: list[str] | None = None, limit: int | None = None, include_posts: IncludePosts2 | IncludePosts2Dict | None = None, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> list[ApiV1UploadResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the media files in your team's library, newest first. Each file carries `posts`, the links to the posts using it — pass `includePosts=false` to leave them out. Page with `limit` and `offset`. To check whether specific files already exist, filter by `ids` or `urls` instead of listing everything.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_get_list()
    # TODO: Handle 'response' of type list[ApiV1UploadResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_get_list()
    # TODO: Handle 'response' of type list[ApiV1UploadResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[TypeBundleSocialUploadApiOrStr](bundle_social/models/enums/type_bundle_social_upload_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>types</code> | <code>list&#91;[TypeBundleSocialUploadApiOrStr](bundle_social/models/enums/type_bundle_social_upload_api.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusBundleSocialUploadApiOrStr](bundle_social/models/enums/status_bundle_social_upload_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ids</code> | <code>list&#91;str&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>urls</code> | <code>list&#91;str&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_posts</code> | <code>[IncludePosts2](bundle_social/models/unions/include_posts2.py) \| [IncludePosts2Dict](bundle_social/models/unions/include_posts2.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiV1UploadResponse](bundle_social/models/api_v1_upload_response.py)&#93;</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadGetListErrorBody](bundle_social/errors/upload_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Upload400Error1](bundle_social/models/api_v1_upload400_error1.py)</code> |
| 401 | <code>[ApiV1Upload401Error1](bundle_social/models/api_v1_upload401_error1.py)</code> |
| 403 | <code>[ApiV1Upload403Error1](bundle_social/models/api_v1_upload403_error1.py)</code> |
| 404 | <code>[ApiV1Upload404Error1](bundle_social/models/api_v1_upload404_error1.py)</code> |
| 429 | <code>[ApiV1Upload429Error1](bundle_social/models/api_v1_upload429_error1.py)</code> |
| 500 | <code>[ApiV1Upload500Error1](bundle_social/models/api_v1_upload500_error1.py)</code> |
| 502 | <code>[ApiV1Upload502Error1](bundle_social/models/api_v1_upload502_error1.py)</code> |
| 503 | <code>[ApiV1Upload503Error1](bundle_social/models/api_v1_upload503_error1.py)</code> |
| 504 | <code>[ApiV1Upload504Error1](bundle_social/models/api_v1_upload504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_init_large_upload(*, body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadInitResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_init_large_upload()
    # TODO: Handle 'response' of type ApiV1UploadInitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadInitLargeUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_init_large_upload()
    # TODO: Handle 'response' of type ApiV1UploadInitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadInitLargeUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadInitRequest](bundle_social/models/api_v1_upload_init_request.py) \| [ApiV1UploadInitRequestDict](bundle_social/models/api_v1_upload_init_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadInitResponse](bundle_social/models/api_v1_upload_init_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadInitLargeUploadErrorBody](bundle_social/errors/upload_init_large_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadInit400Error1](bundle_social/models/api_v1_upload_init400_error1.py)</code> |
| 401 | <code>[ApiV1UploadInit401Error1](bundle_social/models/api_v1_upload_init401_error1.py)</code> |
| 403 | <code>[ApiV1UploadInit403Error1](bundle_social/models/api_v1_upload_init403_error1.py)</code> |
| 404 | <code>[ApiV1UploadInit404Error1](bundle_social/models/api_v1_upload_init404_error1.py)</code> |
| 429 | <code>[ApiV1UploadInit429Error1](bundle_social/models/api_v1_upload_init429_error1.py)</code> |
| 500 | <code>[ApiV1UploadInit500Error1](bundle_social/models/api_v1_upload_init500_error1.py)</code> |
| 502 | <code>[ApiV1UploadInit502Error1](bundle_social/models/api_v1_upload_init502_error1.py)</code> |
| 503 | <code>[ApiV1UploadInit503Error1](bundle_social/models/api_v1_upload_init503_error1.py)</code> |
| 504 | <code>[ApiV1UploadInit504Error1](bundle_social/models/api_v1_upload_init504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_init_multipart_upload(*, body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadMultipartInitResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part, keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the last, up to 10000 parts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_init_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartInitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadInitMultipartUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_init_multipart_upload()
    # TODO: Handle 'response' of type ApiV1UploadMultipartInitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadInitMultipartUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadMultipartInitRequest](bundle_social/models/api_v1_upload_multipart_init_request.py) \| [ApiV1UploadMultipartInitRequestDict](bundle_social/models/api_v1_upload_multipart_init_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartInitResponse](bundle_social/models/api_v1_upload_multipart_init_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadInitMultipartUploadErrorBody](bundle_social/errors/upload_init_multipart_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadMultipartInit400Error1](bundle_social/models/api_v1_upload_multipart_init400_error1.py)</code> |
| 401 | <code>[ApiV1UploadMultipartInit401Error1](bundle_social/models/api_v1_upload_multipart_init401_error1.py)</code> |
| 403 | <code>[ApiV1UploadMultipartInit403Error1](bundle_social/models/api_v1_upload_multipart_init403_error1.py)</code> |
| 404 | <code>[ApiV1UploadMultipartInit404Error1](bundle_social/models/api_v1_upload_multipart_init404_error1.py)</code> |
| 429 | <code>[ApiV1UploadMultipartInit429Error1](bundle_social/models/api_v1_upload_multipart_init429_error1.py)</code> |
| 500 | <code>[ApiV1UploadMultipartInit500Error1](bundle_social/models/api_v1_upload_multipart_init500_error1.py)</code> |
| 502 | <code>[ApiV1UploadMultipartInit502Error1](bundle_social/models/api_v1_upload_multipart_init502_error1.py)</code> |
| 503 | <code>[ApiV1UploadMultipartInit503Error1](bundle_social/models/api_v1_upload_multipart_init503_error1.py)</code> |
| 504 | <code>[ApiV1UploadMultipartInit504Error1](bundle_social/models/api_v1_upload_multipart_init504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_sign_multipart_parts(*, body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadMultipartSignResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep their ETags — only re-upload the ones that failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.upload_api.upload_sign_multipart_parts()
    # TODO: Handle 'response' of type ApiV1UploadMultipartSignResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadSignMultipartPartsErrorBody
```

**Async**

```python
try:
    response = await async_client.upload_api.upload_sign_multipart_parts()
    # TODO: Handle 'response' of type ApiV1UploadMultipartSignResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadSignMultipartPartsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UploadMultipartSignRequest](bundle_social/models/api_v1_upload_multipart_sign_request.py) \| [ApiV1UploadMultipartSignRequestDict](bundle_social/models/api_v1_upload_multipart_sign_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartSignResponse](bundle_social/models/api_v1_upload_multipart_sign_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[UploadSignMultipartPartsErrorBody](bundle_social/errors/upload_sign_multipart_parts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1UploadMultipartSign400Error1](bundle_social/models/api_v1_upload_multipart_sign400_error1.py)</code> |
| 401 | <code>[ApiV1UploadMultipartSign401Error1](bundle_social/models/api_v1_upload_multipart_sign401_error1.py)</code> |
| 403 | <code>[ApiV1UploadMultipartSign403Error1](bundle_social/models/api_v1_upload_multipart_sign403_error1.py)</code> |
| 404 | <code>[ApiV1UploadMultipartSign404Error1](bundle_social/models/api_v1_upload_multipart_sign404_error1.py)</code> |
| 429 | <code>[ApiV1UploadMultipartSign429Error1](bundle_social/models/api_v1_upload_multipart_sign429_error1.py)</code> |
| 500 | <code>[ApiV1UploadMultipartSign500Error1](bundle_social/models/api_v1_upload_multipart_sign500_error1.py)</code> |
| 502 | <code>[ApiV1UploadMultipartSign502Error1](bundle_social/models/api_v1_upload_multipart_sign502_error1.py)</code> |
| 503 | <code>[ApiV1UploadMultipartSign503Error1](bundle_social/models/api_v1_upload_multipart_sign503_error1.py)</code> |
| 504 | <code>[ApiV1UploadMultipartSign504Error1](bundle_social/models/api_v1_upload_multipart_sign504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ConversationApi

> Source: [ConversationApi](bundle_social/apis/conversation_api.py)

<details>
<summary><code>def conversation_archive(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsArchiveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a conversation out of the active inbox. Incoming messages reopen it automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_archive("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsArchiveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationArchiveErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_archive("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsArchiveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationArchiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsArchiveResponse](bundle_social/models/api_v1_conversations_archive_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationArchiveErrorBody](bundle_social/errors/conversation_archive_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsArchive400Error1](bundle_social/models/api_v1_conversations_archive400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsArchive401Error1](bundle_social/models/api_v1_conversations_archive401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsArchive403Error1](bundle_social/models/api_v1_conversations_archive403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsArchive404Error1](bundle_social/models/api_v1_conversations_archive404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsArchive429Error1](bundle_social/models/api_v1_conversations_archive429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsArchive500Error1](bundle_social/models/api_v1_conversations_archive500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsArchive502Error1](bundle_social/models/api_v1_conversations_archive502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsArchive503Error1](bundle_social/models/api_v1_conversations_archive503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsArchive504Error1](bundle_social/models/api_v1_conversations_archive504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_get(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single conversation by id, including the participant, the linked social account and its unread and status flags.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_get("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_get("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse1](bundle_social/models/api_v1_conversations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationGetErrorBody](bundle_social/errors/conversation_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Conversations400Error1](bundle_social/models/api_v1_conversations400_error1.py)</code> |
| 401 | <code>[ApiV1Conversations401Error1](bundle_social/models/api_v1_conversations401_error1.py)</code> |
| 403 | <code>[ApiV1Conversations403Error1](bundle_social/models/api_v1_conversations403_error1.py)</code> |
| 404 | <code>[ApiV1Conversations404Error1](bundle_social/models/api_v1_conversations404_error1.py)</code> |
| 429 | <code>[ApiV1Conversations429Error1](bundle_social/models/api_v1_conversations429_error1.py)</code> |
| 500 | <code>[ApiV1Conversations500Error1](bundle_social/models/api_v1_conversations500_error1.py)</code> |
| 502 | <code>[ApiV1Conversations502Error1](bundle_social/models/api_v1_conversations502_error1.py)</code> |
| 503 | <code>[ApiV1Conversations503Error1](bundle_social/models/api_v1_conversations503_error1.py)</code> |
| 504 | <code>[ApiV1Conversations504Error1](bundle_social/models/api_v1_conversations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_get_list(team_id: str, *, platform: PlatformBundleSocialConversationApiOrStr | None = None, social_account_id: str | None = None, status: StatusBundleSocialConversationApiOrStr | None = None, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List conversations for a team, newest activity first. Filter by `socialAccountId`, `platform` and `status`. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_get_list("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>platform</code> | <code>[PlatformBundleSocialConversationApiOrStr](bundle_social/models/enums/platform_bundle_social_conversation_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>social_account_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusBundleSocialConversationApiOrStr](bundle_social/models/enums/status_bundle_social_conversation_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse](bundle_social/models/api_v1_conversations_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationGetListErrorBody](bundle_social/errors/conversation_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Conversations400Error1](bundle_social/models/api_v1_conversations400_error1.py)</code> |
| 401 | <code>[ApiV1Conversations401Error1](bundle_social/models/api_v1_conversations401_error1.py)</code> |
| 403 | <code>[ApiV1Conversations403Error1](bundle_social/models/api_v1_conversations403_error1.py)</code> |
| 404 | <code>[ApiV1Conversations404Error1](bundle_social/models/api_v1_conversations404_error1.py)</code> |
| 429 | <code>[ApiV1Conversations429Error1](bundle_social/models/api_v1_conversations429_error1.py)</code> |
| 500 | <code>[ApiV1Conversations500Error1](bundle_social/models/api_v1_conversations500_error1.py)</code> |
| 502 | <code>[ApiV1Conversations502Error1](bundle_social/models/api_v1_conversations502_error1.py)</code> |
| 503 | <code>[ApiV1Conversations503Error1](bundle_social/models/api_v1_conversations503_error1.py)</code> |
| 504 | <code>[ApiV1Conversations504Error1](bundle_social/models/api_v1_conversations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_get_messages(id_: str, *, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsMessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_get_messages("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetMessagesErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_get_messages("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationGetMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesResponse](bundle_social/models/api_v1_conversations_messages_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationGetMessagesErrorBody](bundle_social/errors/conversation_get_messages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsMessages400Error1](bundle_social/models/api_v1_conversations_messages400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsMessages401Error1](bundle_social/models/api_v1_conversations_messages401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsMessages403Error1](bundle_social/models/api_v1_conversations_messages403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsMessages404Error1](bundle_social/models/api_v1_conversations_messages404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsMessages429Error1](bundle_social/models/api_v1_conversations_messages429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsMessages500Error1](bundle_social/models/api_v1_conversations_messages500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsMessages502Error1](bundle_social/models/api_v1_conversations_messages502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsMessages503Error1](bundle_social/models/api_v1_conversations_messages503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsMessages504Error1](bundle_social/models/api_v1_conversations_messages504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_mark_read(id_: str, *, body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsReadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the unread state of a conversation, optionally up to a specific message.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_mark_read("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsReadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationMarkReadErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_mark_read("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsReadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationMarkReadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ConversationsReadRequest](bundle_social/models/api_v1_conversations_read_request.py) \| [ApiV1ConversationsReadRequestDict](bundle_social/models/api_v1_conversations_read_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsReadResponse](bundle_social/models/api_v1_conversations_read_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationMarkReadErrorBody](bundle_social/errors/conversation_mark_read_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsRead400Error1](bundle_social/models/api_v1_conversations_read400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsRead401Error1](bundle_social/models/api_v1_conversations_read401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsRead403Error1](bundle_social/models/api_v1_conversations_read403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsRead404Error1](bundle_social/models/api_v1_conversations_read404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsRead429Error1](bundle_social/models/api_v1_conversations_read429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsRead500Error1](bundle_social/models/api_v1_conversations_read500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsRead502Error1](bundle_social/models/api_v1_conversations_read502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsRead503Error1](bundle_social/models/api_v1_conversations_read503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsRead504Error1](bundle_social/models/api_v1_conversations_read504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_open(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsOpenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move an archived or closed conversation back into the active inbox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_open("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsOpenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationOpenErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_open("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsOpenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationOpenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsOpenResponse](bundle_social/models/api_v1_conversations_open_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationOpenErrorBody](bundle_social/errors/conversation_open_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsOpen400Error1](bundle_social/models/api_v1_conversations_open400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsOpen401Error1](bundle_social/models/api_v1_conversations_open401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsOpen403Error1](bundle_social/models/api_v1_conversations_open403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsOpen404Error1](bundle_social/models/api_v1_conversations_open404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsOpen429Error1](bundle_social/models/api_v1_conversations_open429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsOpen500Error1](bundle_social/models/api_v1_conversations_open500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsOpen502Error1](bundle_social/models/api_v1_conversations_open502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsOpen503Error1](bundle_social/models/api_v1_conversations_open503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsOpen504Error1](bundle_social/models/api_v1_conversations_open504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_private_reply(*, body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsPrivateReplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_private_reply()
    # TODO: Handle 'response' of type ApiV1ConversationsPrivateReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationPrivateReplyErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_private_reply()
    # TODO: Handle 'response' of type ApiV1ConversationsPrivateReplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationPrivateReplyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ConversationsPrivateReplyRequest](bundle_social/models/api_v1_conversations_private_reply_request.py) \| [ApiV1ConversationsPrivateReplyRequestDict](bundle_social/models/api_v1_conversations_private_reply_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsPrivateReplyResponse](bundle_social/models/api_v1_conversations_private_reply_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationPrivateReplyErrorBody](bundle_social/errors/conversation_private_reply_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsPrivateReply400Error1](bundle_social/models/api_v1_conversations_private_reply400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsPrivateReply401Error1](bundle_social/models/api_v1_conversations_private_reply401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsPrivateReply403Error1](bundle_social/models/api_v1_conversations_private_reply403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsPrivateReply404Error1](bundle_social/models/api_v1_conversations_private_reply404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsPrivateReply429Error1](bundle_social/models/api_v1_conversations_private_reply429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsPrivateReply500Error1](bundle_social/models/api_v1_conversations_private_reply500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsPrivateReply502Error1](bundle_social/models/api_v1_conversations_private_reply502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsPrivateReply503Error1](bundle_social/models/api_v1_conversations_private_reply503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsPrivateReply504Error1](bundle_social/models/api_v1_conversations_private_reply504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_react_message(id_: str, message_id: str, *, body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsMessagesReactionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_react_message("some example string", "some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesReactionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationReactMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_react_message(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesReactionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationReactMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>message_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ConversationsMessagesReactionRequest](bundle_social/models/api_v1_conversations_messages_reaction_request.py) \| [ApiV1ConversationsMessagesReactionRequestDict](bundle_social/models/api_v1_conversations_messages_reaction_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesReactionResponse](bundle_social/models/api_v1_conversations_messages_reaction_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationReactMessageErrorBody](bundle_social/errors/conversation_react_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsMessagesReaction400Error1](bundle_social/models/api_v1_conversations_messages_reaction400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsMessagesReaction401Error1](bundle_social/models/api_v1_conversations_messages_reaction401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsMessagesReaction403Error1](bundle_social/models/api_v1_conversations_messages_reaction403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsMessagesReaction404Error1](bundle_social/models/api_v1_conversations_messages_reaction404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsMessagesReaction429Error1](bundle_social/models/api_v1_conversations_messages_reaction429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsMessagesReaction500Error1](bundle_social/models/api_v1_conversations_messages_reaction500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsMessagesReaction502Error1](bundle_social/models/api_v1_conversations_messages_reaction502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsMessagesReaction503Error1](bundle_social/models/api_v1_conversations_messages_reaction503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsMessagesReaction504Error1](bundle_social/models/api_v1_conversations_messages_reaction504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_send_message(id_: str, *, body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsMessagesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the participant of a conversation. The platform reply window must still be open. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_send_message("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationSendMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_send_message("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationSendMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ConversationsMessagesRequest](bundle_social/models/api_v1_conversations_messages_request.py) \| [ApiV1ConversationsMessagesRequestDict](bundle_social/models/api_v1_conversations_messages_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesResponse1](bundle_social/models/api_v1_conversations_messages_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationSendMessageErrorBody](bundle_social/errors/conversation_send_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1ConversationsMessages400Error1](bundle_social/models/api_v1_conversations_messages400_error1.py)</code> |
| 401 | <code>[ApiV1ConversationsMessages401Error1](bundle_social/models/api_v1_conversations_messages401_error1.py)</code> |
| 403 | <code>[ApiV1ConversationsMessages403Error1](bundle_social/models/api_v1_conversations_messages403_error1.py)</code> |
| 404 | <code>[ApiV1ConversationsMessages404Error1](bundle_social/models/api_v1_conversations_messages404_error1.py)</code> |
| 429 | <code>[ApiV1ConversationsMessages429Error1](bundle_social/models/api_v1_conversations_messages429_error1.py)</code> |
| 500 | <code>[ApiV1ConversationsMessages500Error1](bundle_social/models/api_v1_conversations_messages500_error1.py)</code> |
| 502 | <code>[ApiV1ConversationsMessages502Error1](bundle_social/models/api_v1_conversations_messages502_error1.py)</code> |
| 503 | <code>[ApiV1ConversationsMessages503Error1](bundle_social/models/api_v1_conversations_messages503_error1.py)</code> |
| 504 | <code>[ApiV1ConversationsMessages504Error1](bundle_social/models/api_v1_conversations_messages504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def conversation_update(id_: str, *, body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1ConversationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the status of a conversation. This is the general form of the archive and open endpoints, which move a conversation to one specific status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.conversation_api.conversation_update("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.conversation_api.conversation_update("some example string")
    # TODO: Handle 'response' of type ApiV1ConversationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConversationUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1ConversationsRequest](bundle_social/models/api_v1_conversations_request.py) \| [ApiV1ConversationsRequestDict](bundle_social/models/api_v1_conversations_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse1](bundle_social/models/api_v1_conversations_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[ConversationUpdateErrorBody](bundle_social/errors/conversation_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1Conversations400Error1](bundle_social/models/api_v1_conversations400_error1.py)</code> |
| 401 | <code>[ApiV1Conversations401Error1](bundle_social/models/api_v1_conversations401_error1.py)</code> |
| 403 | <code>[ApiV1Conversations403Error1](bundle_social/models/api_v1_conversations403_error1.py)</code> |
| 404 | <code>[ApiV1Conversations404Error1](bundle_social/models/api_v1_conversations404_error1.py)</code> |
| 429 | <code>[ApiV1Conversations429Error1](bundle_social/models/api_v1_conversations429_error1.py)</code> |
| 500 | <code>[ApiV1Conversations500Error1](bundle_social/models/api_v1_conversations500_error1.py)</code> |
| 502 | <code>[ApiV1Conversations502Error1](bundle_social/models/api_v1_conversations502_error1.py)</code> |
| 503 | <code>[ApiV1Conversations503Error1](bundle_social/models/api_v1_conversations503_error1.py)</code> |
| 504 | <code>[ApiV1Conversations504Error1](bundle_social/models/api_v1_conversations504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PostCsv

> Source: [PostCsv](bundle_social/apis/post_csv.py)

<details>
<summary><code>def post_csv_create(*, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostCsvImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload CSV for async bulk post import.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_csv.post_csv_create()
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.post_csv.post_csv_create()
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse](bundle_social/models/api_v1_post_csv_import_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCsvCreateErrorBody](bundle_social/errors/post_csv_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostCsvImport400Error1](bundle_social/models/api_v1_post_csv_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostCsvImport401Error1](bundle_social/models/api_v1_post_csv_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostCsvImport403Error1](bundle_social/models/api_v1_post_csv_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostCsvImport404Error1](bundle_social/models/api_v1_post_csv_import404_error1.py)</code> |
| 429 | <code>[ApiV1PostCsvImport429Error1](bundle_social/models/api_v1_post_csv_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostCsvImport500Error1](bundle_social/models/api_v1_post_csv_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostCsvImport502Error1](bundle_social/models/api_v1_post_csv_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostCsvImport503Error1](bundle_social/models/api_v1_post_csv_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostCsvImport504Error1](bundle_social/models/api_v1_post_csv_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_csv_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostCsvImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single CSV import with its summary counts and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_csv.post_csv_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.post_csv.post_csv_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse](bundle_social/models/api_v1_post_csv_import_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCsvGetByIdErrorBody](bundle_social/errors/post_csv_get_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostCsvImport400Error1](bundle_social/models/api_v1_post_csv_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostCsvImport401Error1](bundle_social/models/api_v1_post_csv_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostCsvImport403Error1](bundle_social/models/api_v1_post_csv_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostCsvImport404Error1](bundle_social/models/api_v1_post_csv_import404_error1.py)</code> |
| 429 | <code>[ApiV1PostCsvImport429Error1](bundle_social/models/api_v1_post_csv_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostCsvImport500Error1](bundle_social/models/api_v1_post_csv_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostCsvImport502Error1](bundle_social/models/api_v1_post_csv_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostCsvImport503Error1](bundle_social/models/api_v1_post_csv_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostCsvImport504Error1](bundle_social/models/api_v1_post_csv_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_csv_get_list(*, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostCsvImportResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_csv.post_csv_get_list()
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetListErrorBody
```

**Async**

```python
try:
    response = await async_client.post_csv.post_csv_get_list()
    # TODO: Handle 'response' of type ApiV1PostCsvImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse1](bundle_social/models/api_v1_post_csv_import_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCsvGetListErrorBody](bundle_social/errors/post_csv_get_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostCsvImport400Error1](bundle_social/models/api_v1_post_csv_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostCsvImport401Error1](bundle_social/models/api_v1_post_csv_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostCsvImport403Error1](bundle_social/models/api_v1_post_csv_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostCsvImport404Error1](bundle_social/models/api_v1_post_csv_import404_error1.py)</code> |
| 429 | <code>[ApiV1PostCsvImport429Error1](bundle_social/models/api_v1_post_csv_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostCsvImport500Error1](bundle_social/models/api_v1_post_csv_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostCsvImport502Error1](bundle_social/models/api_v1_post_csv_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostCsvImport503Error1](bundle_social/models/api_v1_post_csv_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostCsvImport504Error1](bundle_social/models/api_v1_post_csv_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_csv_get_rows(import_id: str, *, status: Status4BundleSocialPostCsvApiOrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostCsvImportRowsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed validation and why. Use it to report errors back to the person who uploaded the file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_csv.post_csv_get_rows("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportRowsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetRowsErrorBody
```

**Async**

```python
try:
    response = await async_client.post_csv.post_csv_get_rows("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportRowsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetRowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>status</code> | <code>[Status4BundleSocialPostCsvApiOrStr](bundle_social/models/enums/status4_bundle_social_post_csv_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>10.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportRowsResponse](bundle_social/models/api_v1_post_csv_import_rows_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCsvGetRowsErrorBody](bundle_social/errors/post_csv_get_rows_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostCsvImportRows400Error1](bundle_social/models/api_v1_post_csv_import_rows400_error1.py)</code> |
| 401 | <code>[ApiV1PostCsvImportRows401Error1](bundle_social/models/api_v1_post_csv_import_rows401_error1.py)</code> |
| 403 | <code>[ApiV1PostCsvImportRows403Error1](bundle_social/models/api_v1_post_csv_import_rows403_error1.py)</code> |
| 404 | <code>[ApiV1PostCsvImportRows404Error1](bundle_social/models/api_v1_post_csv_import_rows404_error1.py)</code> |
| 429 | <code>[ApiV1PostCsvImportRows429Error1](bundle_social/models/api_v1_post_csv_import_rows429_error1.py)</code> |
| 500 | <code>[ApiV1PostCsvImportRows500Error1](bundle_social/models/api_v1_post_csv_import_rows500_error1.py)</code> |
| 502 | <code>[ApiV1PostCsvImportRows502Error1](bundle_social/models/api_v1_post_csv_import_rows502_error1.py)</code> |
| 503 | <code>[ApiV1PostCsvImportRows503Error1](bundle_social/models/api_v1_post_csv_import_rows503_error1.py)</code> |
| 504 | <code>[ApiV1PostCsvImportRows504Error1](bundle_social/models/api_v1_post_csv_import_rows504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_csv_get_status(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostCsvImportStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_csv.post_csv_get_status("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.post_csv.post_csv_get_status("some example string")
    # TODO: Handle 'response' of type ApiV1PostCsvImportStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCsvGetStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportStatusResponse](bundle_social/models/api_v1_post_csv_import_status_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostCsvGetStatusErrorBody](bundle_social/errors/post_csv_get_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostCsvImportStatus400Error1](bundle_social/models/api_v1_post_csv_import_status400_error1.py)</code> |
| 401 | <code>[ApiV1PostCsvImportStatus401Error1](bundle_social/models/api_v1_post_csv_import_status401_error1.py)</code> |
| 403 | <code>[ApiV1PostCsvImportStatus403Error1](bundle_social/models/api_v1_post_csv_import_status403_error1.py)</code> |
| 404 | <code>[ApiV1PostCsvImportStatus404Error1](bundle_social/models/api_v1_post_csv_import_status404_error1.py)</code> |
| 429 | <code>[ApiV1PostCsvImportStatus429Error1](bundle_social/models/api_v1_post_csv_import_status429_error1.py)</code> |
| 500 | <code>[ApiV1PostCsvImportStatus500Error1](bundle_social/models/api_v1_post_csv_import_status500_error1.py)</code> |
| 502 | <code>[ApiV1PostCsvImportStatus502Error1](bundle_social/models/api_v1_post_csv_import_status502_error1.py)</code> |
| 503 | <code>[ApiV1PostCsvImportStatus503Error1](bundle_social/models/api_v1_post_csv_import_status503_error1.py)</code> |
| 504 | <code>[ApiV1PostCsvImportStatus504Error1](bundle_social/models/api_v1_post_csv_import_status504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PostImport

> Source: [PostImport](bundle_social/apis/post_import.py)

<details>
<summary><code>def post_import_create(*, body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that backfills posts a social account published before it was connected to bundle.social, together with their analytics. Use it to get historical reporting from day one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_create()
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_create()
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PostHistoryImportRequest](bundle_social/models/api_v1_post_history_import_request.py) \| [ApiV1PostHistoryImportRequestDict](bundle_social/models/api_v1_post_history_import_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse](bundle_social/models/api_v1_post_history_import_response.py)</code> -- 201

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportCreateErrorBody](bundle_social/errors/post_import_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImport400Error1](bundle_social/models/api_v1_post_history_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImport401Error1](bundle_social/models/api_v1_post_history_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImport403Error1](bundle_social/models/api_v1_post_history_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImport404Error1](bundle_social/models/api_v1_post_history_import404_error1.py)</code> |
| 409 | <code>[ApiV1PostHistoryImport409Error1](bundle_social/models/api_v1_post_history_import409_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImport429Error1](bundle_social/models/api_v1_post_history_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImport500Error1](bundle_social/models/api_v1_post_history_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImport502Error1](bundle_social/models/api_v1_post_history_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImport503Error1](bundle_social/models/api_v1_post_history_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImport504Error1](bundle_social/models/api_v1_post_history_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_import_delete_imported_posts(*, body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportPostsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import capacity.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_delete_imported_posts()
    # TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportDeleteImportedPostsErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_delete_imported_posts()
    # TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportDeleteImportedPostsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PostHistoryImportPostsRequest](bundle_social/models/api_v1_post_history_import_posts_request.py) \| [ApiV1PostHistoryImportPostsRequestDict](bundle_social/models/api_v1_post_history_import_posts_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse1](bundle_social/models/api_v1_post_history_import_posts_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportDeleteImportedPostsErrorBody](bundle_social/errors/post_import_delete_imported_posts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImportPosts400Error1](bundle_social/models/api_v1_post_history_import_posts400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImportPosts401Error1](bundle_social/models/api_v1_post_history_import_posts401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImportPosts403Error1](bundle_social/models/api_v1_post_history_import_posts403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImportPosts404Error1](bundle_social/models/api_v1_post_history_import_posts404_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImportPosts429Error1](bundle_social/models/api_v1_post_history_import_posts429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImportPosts500Error1](bundle_social/models/api_v1_post_history_import_posts500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImportPosts502Error1](bundle_social/models/api_v1_post_history_import_posts502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImportPosts503Error1](bundle_social/models/api_v1_post_history_import_posts503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImportPosts504Error1](bundle_social/models/api_v1_post_history_import_posts504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_import_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single post history import job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_get_by_id("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse](bundle_social/models/api_v1_post_history_import_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportGetByIdErrorBody](bundle_social/errors/post_import_get_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImport400Error1](bundle_social/models/api_v1_post_history_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImport401Error1](bundle_social/models/api_v1_post_history_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImport403Error1](bundle_social/models/api_v1_post_history_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImport404Error1](bundle_social/models/api_v1_post_history_import404_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImport429Error1](bundle_social/models/api_v1_post_history_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImport500Error1](bundle_social/models/api_v1_post_history_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImport502Error1](bundle_social/models/api_v1_post_history_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImport503Error1](bundle_social/models/api_v1_post_history_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImport504Error1](bundle_social/models/api_v1_post_history_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_import_get_imported_posts(team_id: str, social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportPostsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the historical posts pulled in by an import, with their analytics and your remaining import capacity. Use it to report on performance from before the account was connected.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_get_imported_posts(
        "some example string", SocialAccountTypeBundleSocialPostImportApi.FACEBOOK
    )
    # TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetImportedPostsErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_get_imported_posts(
        "some example string", SocialAccountTypeBundleSocialPostImportApi.FACEBOOK
    )
    # TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetImportedPostsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>social_account_type</code> | <code>[SocialAccountTypeBundleSocialPostImportApiOrStr](bundle_social/models/enums/social_account_type_bundle_social_post_import_api.py)</code> | Value sent with the request. |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>50.0</code> |
| <code>offset</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>0.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse](bundle_social/models/api_v1_post_history_import_posts_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportGetImportedPostsErrorBody](bundle_social/errors/post_import_get_imported_posts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImportPosts400Error1](bundle_social/models/api_v1_post_history_import_posts400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImportPosts401Error1](bundle_social/models/api_v1_post_history_import_posts401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImportPosts403Error1](bundle_social/models/api_v1_post_history_import_posts403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImportPosts404Error1](bundle_social/models/api_v1_post_history_import_posts404_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImportPosts429Error1](bundle_social/models/api_v1_post_history_import_posts429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImportPosts500Error1](bundle_social/models/api_v1_post_history_import_posts500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImportPosts502Error1](bundle_social/models/api_v1_post_history_import_posts502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImportPosts503Error1](bundle_social/models/api_v1_post_history_import_posts503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImportPosts504Error1](bundle_social/models/api_v1_post_history_import_posts504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_import_get_status(team_id: str, *, social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_get_status("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_get_status("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportGetStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>social_account_type</code> | <code>[SocialAccountTypeBundleSocialPostImportApiOrStr](bundle_social/models/enums/social_account_type_bundle_social_post_import_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse1](bundle_social/models/api_v1_post_history_import_response1.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportGetStatusErrorBody](bundle_social/errors/post_import_get_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImport400Error1](bundle_social/models/api_v1_post_history_import400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImport401Error1](bundle_social/models/api_v1_post_history_import401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImport403Error1](bundle_social/models/api_v1_post_history_import403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImport404Error1](bundle_social/models/api_v1_post_history_import404_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImport429Error1](bundle_social/models/api_v1_post_history_import429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImport500Error1](bundle_social/models/api_v1_post_history_import500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImport502Error1](bundle_social/models/api_v1_post_history_import502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImport503Error1](bundle_social/models/api_v1_post_history_import503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImport504Error1](bundle_social/models/api_v1_post_history_import504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_import_retry_import(import_id: str, *, body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostHistoryImportRetryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-run a post history import that failed, for example after a token expired or the platform rate-limited the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_import.post_import_retry_import("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportRetryImportErrorBody
```

**Async**

```python
try:
    response = await async_client.post_import.post_import_retry_import("some example string")
    # TODO: Handle 'response' of type ApiV1PostHistoryImportRetryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostImportRetryImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1PostHistoryImportRetryRequest](bundle_social/models/api_v1_post_history_import_retry_request.py) \| [ApiV1PostHistoryImportRetryRequestDict](bundle_social/models/api_v1_post_history_import_retry_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportRetryResponse](bundle_social/models/api_v1_post_history_import_retry_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[PostImportRetryImportErrorBody](bundle_social/errors/post_import_retry_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PostHistoryImportRetry400Error1](bundle_social/models/api_v1_post_history_import_retry400_error1.py)</code> |
| 401 | <code>[ApiV1PostHistoryImportRetry401Error1](bundle_social/models/api_v1_post_history_import_retry401_error1.py)</code> |
| 403 | <code>[ApiV1PostHistoryImportRetry403Error1](bundle_social/models/api_v1_post_history_import_retry403_error1.py)</code> |
| 404 | <code>[ApiV1PostHistoryImportRetry404Error1](bundle_social/models/api_v1_post_history_import_retry404_error1.py)</code> |
| 429 | <code>[ApiV1PostHistoryImportRetry429Error1](bundle_social/models/api_v1_post_history_import_retry429_error1.py)</code> |
| 500 | <code>[ApiV1PostHistoryImportRetry500Error1](bundle_social/models/api_v1_post_history_import_retry500_error1.py)</code> |
| 502 | <code>[ApiV1PostHistoryImportRetry502Error1](bundle_social/models/api_v1_post_history_import_retry502_error1.py)</code> |
| 503 | <code>[ApiV1PostHistoryImportRetry503Error1](bundle_social/models/api_v1_post_history_import_retry503_error1.py)</code> |
| 504 | <code>[ApiV1PostHistoryImportRetry504Error1](bundle_social/models/api_v1_post_history_import_retry504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SocialAccountApi

> Source: [SocialAccountApi](bundle_social/apis/social_account_api.py)

<details>
<summary><code>def social_account_connect(*, body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountConnectResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For Mastodon and Bluesky an unusable `serverUrl` returns 400 with the reason, while a reachable-but-failing instance returns 502.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_connect()
    # TODO: Handle 'response' of type ApiV1SocialAccountConnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountConnectErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_connect()
    # TODO: Handle 'response' of type ApiV1SocialAccountConnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountConnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountConnectRequest](bundle_social/models/api_v1_social_account_connect_request.py) \| [ApiV1SocialAccountConnectRequestDict](bundle_social/models/api_v1_social_account_connect_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountConnectResponse](bundle_social/models/api_v1_social_account_connect_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountConnectErrorBody](bundle_social/errors/social_account_connect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountConnect400Error1](bundle_social/models/api_v1_social_account_connect400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountConnect401Error1](bundle_social/models/api_v1_social_account_connect401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountConnect403Error1](bundle_social/models/api_v1_social_account_connect403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountConnect404Error1](bundle_social/models/api_v1_social_account_connect404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountConnect429Error1](bundle_social/models/api_v1_social_account_connect429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountConnect500Error1](bundle_social/models/api_v1_social_account_connect500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountConnect502Error1](bundle_social/models/api_v1_social_account_connect502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountConnect503Error1](bundle_social/models/api_v1_social_account_connect503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountConnect504Error1](bundle_social/models/api_v1_social_account_connect504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_connection_check(*, body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountConnectionCheckResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Force an immediate check of whether a social account's authorization is still valid, instead of waiting for the scheduled check. Use it to surface expired tokens before a scheduled post fails.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_connection_check()
    # TODO: Handle 'response' of type ApiV1SocialAccountConnectionCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountConnectionCheckErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_connection_check()
    # TODO: Handle 'response' of type ApiV1SocialAccountConnectionCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountConnectionCheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountConnectionCheckRequest](bundle_social/models/api_v1_social_account_connection_check_request.py) \| [ApiV1SocialAccountConnectionCheckRequestDict](bundle_social/models/api_v1_social_account_connection_check_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountConnectionCheckResponse](bundle_social/models/api_v1_social_account_connection_check_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountConnectionCheckErrorBody](bundle_social/errors/social_account_connection_check_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountConnectionCheck400Error1](bundle_social/models/api_v1_social_account_connection_check400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountConnectionCheck401Error1](bundle_social/models/api_v1_social_account_connection_check401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountConnectionCheck403Error1](bundle_social/models/api_v1_social_account_connection_check403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountConnectionCheck404Error1](bundle_social/models/api_v1_social_account_connection_check404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountConnectionCheck429Error1](bundle_social/models/api_v1_social_account_connection_check429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountConnectionCheck500Error1](bundle_social/models/api_v1_social_account_connection_check500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountConnectionCheck502Error1](bundle_social/models/api_v1_social_account_connection_check502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountConnectionCheck503Error1](bundle_social/models/api_v1_social_account_connection_check503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountConnectionCheck504Error1](bundle_social/models/api_v1_social_account_connection_check504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_copy(*, body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ApiV1SocialAccountCopyResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Copy connected social accounts from one team to another so you can reuse an existing authorization without sending the user through OAuth again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_copy()
    # TODO: Handle 'response' of type list[ApiV1SocialAccountCopyResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountCopyErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_copy()
    # TODO: Handle 'response' of type list[ApiV1SocialAccountCopyResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountCopyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountCopyRequest](bundle_social/models/api_v1_social_account_copy_request.py) \| [ApiV1SocialAccountCopyRequestDict](bundle_social/models/api_v1_social_account_copy_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApiV1SocialAccountCopyResponse](bundle_social/models/api_v1_social_account_copy_response.py)&#93;</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountCopyErrorBody](bundle_social/errors/social_account_copy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountCopy400Error1](bundle_social/models/api_v1_social_account_copy400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountCopy401Error1](bundle_social/models/api_v1_social_account_copy401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountCopy403Error1](bundle_social/models/api_v1_social_account_copy403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountCopy404Error1](bundle_social/models/api_v1_social_account_copy404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountCopy429Error1](bundle_social/models/api_v1_social_account_copy429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountCopy500Error1](bundle_social/models/api_v1_social_account_copy500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountCopy502Error1](bundle_social/models/api_v1_social_account_copy502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountCopy503Error1](bundle_social/models/api_v1_social_account_copy503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountCopy504Error1](bundle_social/models/api_v1_social_account_copy504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_create_portal_link(*, body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountCreatePortalLinkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on bundle.social platform without implementing the logic on your side.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_create_portal_link()
    # TODO: Handle 'response' of type ApiV1SocialAccountCreatePortalLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountCreatePortalLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_create_portal_link()
    # TODO: Handle 'response' of type ApiV1SocialAccountCreatePortalLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountCreatePortalLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountCreatePortalLinkRequest](bundle_social/models/api_v1_social_account_create_portal_link_request.py) \| [ApiV1SocialAccountCreatePortalLinkRequestDict](bundle_social/models/api_v1_social_account_create_portal_link_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountCreatePortalLinkResponse](bundle_social/models/api_v1_social_account_create_portal_link_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountCreatePortalLinkErrorBody](bundle_social/errors/social_account_create_portal_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountCreatePortalLink400Error1](bundle_social/models/api_v1_social_account_create_portal_link400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountCreatePortalLink401Error1](bundle_social/models/api_v1_social_account_create_portal_link401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountCreatePortalLink403Error1](bundle_social/models/api_v1_social_account_create_portal_link403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountCreatePortalLink404Error1](bundle_social/models/api_v1_social_account_create_portal_link404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountCreatePortalLink429Error1](bundle_social/models/api_v1_social_account_create_portal_link429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountCreatePortalLink500Error1](bundle_social/models/api_v1_social_account_create_portal_link500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountCreatePortalLink502Error1](bundle_social/models/api_v1_social_account_create_portal_link502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountCreatePortalLink503Error1](bundle_social/models/api_v1_social_account_create_portal_link503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountCreatePortalLink504Error1](bundle_social/models/api_v1_social_account_create_portal_link504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_disable_messaging(*, body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountMessagingDisableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is DISABLE_PENDING and the call returns 502, so it can be retried.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_disable_messaging()
    # TODO: Handle 'response' of type ApiV1SocialAccountMessagingDisableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountDisableMessagingErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_disable_messaging()
    # TODO: Handle 'response' of type ApiV1SocialAccountMessagingDisableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountDisableMessagingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountMessagingDisableRequest](bundle_social/models/api_v1_social_account_messaging_disable_request.py) \| [ApiV1SocialAccountMessagingDisableRequestDict](bundle_social/models/api_v1_social_account_messaging_disable_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountMessagingDisableResponse](bundle_social/models/api_v1_social_account_messaging_disable_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountDisableMessagingErrorBody](bundle_social/errors/social_account_disable_messaging_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountMessagingDisable400Error1](bundle_social/models/api_v1_social_account_messaging_disable400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountMessagingDisable401Error1](bundle_social/models/api_v1_social_account_messaging_disable401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountMessagingDisable403Error1](bundle_social/models/api_v1_social_account_messaging_disable403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountMessagingDisable404Error1](bundle_social/models/api_v1_social_account_messaging_disable404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountMessagingDisable429Error1](bundle_social/models/api_v1_social_account_messaging_disable429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountMessagingDisable500Error1](bundle_social/models/api_v1_social_account_messaging_disable500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountMessagingDisable502Error1](bundle_social/models/api_v1_social_account_messaging_disable502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountMessagingDisable503Error1](bundle_social/models/api_v1_social_account_messaging_disable503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountMessagingDisable504Error1](bundle_social/models/api_v1_social_account_messaging_disable504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_disconnect(*, body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountDisconnectResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will remove the social account from all the scheduled posts too.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_disconnect()
    # TODO: Handle 'response' of type ApiV1SocialAccountDisconnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountDisconnectErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_disconnect()
    # TODO: Handle 'response' of type ApiV1SocialAccountDisconnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountDisconnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountDisconnectRequest](bundle_social/models/api_v1_social_account_disconnect_request.py) \| [ApiV1SocialAccountDisconnectRequestDict](bundle_social/models/api_v1_social_account_disconnect_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountDisconnectResponse](bundle_social/models/api_v1_social_account_disconnect_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountDisconnectErrorBody](bundle_social/errors/social_account_disconnect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountDisconnect400Error1](bundle_social/models/api_v1_social_account_disconnect400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountDisconnect401Error1](bundle_social/models/api_v1_social_account_disconnect401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountDisconnect403Error1](bundle_social/models/api_v1_social_account_disconnect403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountDisconnect404Error1](bundle_social/models/api_v1_social_account_disconnect404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountDisconnect429Error1](bundle_social/models/api_v1_social_account_disconnect429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountDisconnect500Error1](bundle_social/models/api_v1_social_account_disconnect500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountDisconnect502Error1](bundle_social/models/api_v1_social_account_disconnect502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountDisconnect503Error1](bundle_social/models/api_v1_social_account_disconnect503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountDisconnect504Error1](bundle_social/models/api_v1_social_account_disconnect504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_enable_messaging(*, body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountMessagingEnableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the organization has not been granted Instagram and Facebook direct messages and automations (email contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and 502 when Meta rejects the subscription; the account then stays DISABLED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_enable_messaging()
    # TODO: Handle 'response' of type ApiV1SocialAccountMessagingEnableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountEnableMessagingErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_enable_messaging()
    # TODO: Handle 'response' of type ApiV1SocialAccountMessagingEnableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountEnableMessagingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountMessagingEnableRequest](bundle_social/models/api_v1_social_account_messaging_enable_request.py) \| [ApiV1SocialAccountMessagingEnableRequestDict](bundle_social/models/api_v1_social_account_messaging_enable_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountMessagingEnableResponse](bundle_social/models/api_v1_social_account_messaging_enable_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountEnableMessagingErrorBody](bundle_social/errors/social_account_enable_messaging_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountMessagingEnable400Error1](bundle_social/models/api_v1_social_account_messaging_enable400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountMessagingEnable401Error1](bundle_social/models/api_v1_social_account_messaging_enable401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountMessagingEnable403Error1](bundle_social/models/api_v1_social_account_messaging_enable403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountMessagingEnable404Error1](bundle_social/models/api_v1_social_account_messaging_enable404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountMessagingEnable429Error1](bundle_social/models/api_v1_social_account_messaging_enable429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountMessagingEnable500Error1](bundle_social/models/api_v1_social_account_messaging_enable500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountMessagingEnable502Error1](bundle_social/models/api_v1_social_account_messaging_enable502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountMessagingEnable503Error1](bundle_social/models/api_v1_social_account_messaging_enable503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountMessagingEnable504Error1](bundle_social/models/api_v1_social_account_messaging_enable504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_get_accounts_to_delete(*, page: float | None = 1.0, page_size: float | None = 20.0, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountToDeleteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List social accounts queued for deletion, with pagination. Use it to warn users before an account and its data are permanently removed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_get_accounts_to_delete()
    # TODO: Handle 'response' of type ApiV1SocialAccountToDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountGetAccountsToDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_get_accounts_to_delete()
    # TODO: Handle 'response' of type ApiV1SocialAccountToDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountGetAccountsToDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>20.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountToDeleteResponse](bundle_social/models/api_v1_social_account_to_delete_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountGetAccountsToDeleteErrorBody](bundle_social/errors/social_account_get_accounts_to_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountToDelete400Error1](bundle_social/models/api_v1_social_account_to_delete400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountToDelete401Error1](bundle_social/models/api_v1_social_account_to_delete401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountToDelete403Error1](bundle_social/models/api_v1_social_account_to_delete403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountToDelete404Error1](bundle_social/models/api_v1_social_account_to_delete404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountToDelete429Error1](bundle_social/models/api_v1_social_account_to_delete429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountToDelete500Error1](bundle_social/models/api_v1_social_account_to_delete500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountToDelete502Error1](bundle_social/models/api_v1_social_account_to_delete502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountToDelete503Error1](bundle_social/models/api_v1_social_account_to_delete503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountToDelete504Error1](bundle_social/models/api_v1_social_account_to_delete504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_get_by_type(type_: TypeOrStr, team_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountByTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up a team's connected account for a specific platform without listing every account first. Useful when you already know which platform you want to publish to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_get_by_type(Type.TIKTOK, "some example string")
    # TODO: Handle 'response' of type ApiV1SocialAccountByTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountGetByTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_get_by_type(Type.TIKTOK, "some example string")
    # TODO: Handle 'response' of type ApiV1SocialAccountByTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountGetByTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[TypeOrStr](bundle_social/models/enums/type.py)</code> | Value sent with the request. |
| <code>team_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountByTypeResponse](bundle_social/models/api_v1_social_account_by_type_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountGetByTypeErrorBody](bundle_social/errors/social_account_get_by_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountByType400Error1](bundle_social/models/api_v1_social_account_by_type400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountByType401Error1](bundle_social/models/api_v1_social_account_by_type401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountByType403Error1](bundle_social/models/api_v1_social_account_by_type403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountByType404Error1](bundle_social/models/api_v1_social_account_by_type404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountByType429Error1](bundle_social/models/api_v1_social_account_by_type429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountByType500Error1](bundle_social/models/api_v1_social_account_by_type500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountByType502Error1](bundle_social/models/api_v1_social_account_by_type502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountByType503Error1](bundle_social/models/api_v1_social_account_by_type503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountByType504Error1](bundle_social/models/api_v1_social_account_by_type504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_profile_refresh(*, body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountProfileRefreshResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep your own UI in sync after a user renames their profile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_profile_refresh()
    # TODO: Handle 'response' of type ApiV1SocialAccountProfileRefreshResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountProfileRefreshErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_profile_refresh()
    # TODO: Handle 'response' of type ApiV1SocialAccountProfileRefreshResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountProfileRefreshErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountProfileRefreshRequest](bundle_social/models/api_v1_social_account_profile_refresh_request.py) \| [ApiV1SocialAccountProfileRefreshRequestDict](bundle_social/models/api_v1_social_account_profile_refresh_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountProfileRefreshResponse](bundle_social/models/api_v1_social_account_profile_refresh_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountProfileRefreshErrorBody](bundle_social/errors/social_account_profile_refresh_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountProfileRefresh400Error1](bundle_social/models/api_v1_social_account_profile_refresh400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountProfileRefresh401Error1](bundle_social/models/api_v1_social_account_profile_refresh401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountProfileRefresh403Error1](bundle_social/models/api_v1_social_account_profile_refresh403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountProfileRefresh404Error1](bundle_social/models/api_v1_social_account_profile_refresh404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountProfileRefresh429Error1](bundle_social/models/api_v1_social_account_profile_refresh429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountProfileRefresh500Error1](bundle_social/models/api_v1_social_account_profile_refresh500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountProfileRefresh502Error1](bundle_social/models/api_v1_social_account_profile_refresh502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountProfileRefresh503Error1](bundle_social/models/api_v1_social_account_profile_refresh503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountProfileRefresh504Error1](bundle_social/models/api_v1_social_account_profile_refresh504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_refresh_channels(*, body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountRefreshChannelsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit, Discord, Slack, Pinterest.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_refresh_channels()
    # TODO: Handle 'response' of type ApiV1SocialAccountRefreshChannelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountRefreshChannelsErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_refresh_channels()
    # TODO: Handle 'response' of type ApiV1SocialAccountRefreshChannelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountRefreshChannelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountRefreshChannelsRequest](bundle_social/models/api_v1_social_account_refresh_channels_request.py) \| [ApiV1SocialAccountRefreshChannelsRequestDict](bundle_social/models/api_v1_social_account_refresh_channels_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountRefreshChannelsResponse](bundle_social/models/api_v1_social_account_refresh_channels_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountRefreshChannelsErrorBody](bundle_social/errors/social_account_refresh_channels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountRefreshChannels400Error1](bundle_social/models/api_v1_social_account_refresh_channels400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountRefreshChannels401Error1](bundle_social/models/api_v1_social_account_refresh_channels401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountRefreshChannels403Error1](bundle_social/models/api_v1_social_account_refresh_channels403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountRefreshChannels404Error1](bundle_social/models/api_v1_social_account_refresh_channels404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountRefreshChannels429Error1](bundle_social/models/api_v1_social_account_refresh_channels429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountRefreshChannels500Error1](bundle_social/models/api_v1_social_account_refresh_channels500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountRefreshChannels502Error1](bundle_social/models/api_v1_social_account_refresh_channels502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountRefreshChannels503Error1](bundle_social/models/api_v1_social_account_refresh_channels503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountRefreshChannels504Error1](bundle_social/models/api_v1_social_account_refresh_channels504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_set_channel(*, body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountSetChannelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_set_channel()
    # TODO: Handle 'response' of type ApiV1SocialAccountSetChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountSetChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_set_channel()
    # TODO: Handle 'response' of type ApiV1SocialAccountSetChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountSetChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountSetChannelRequest](bundle_social/models/api_v1_social_account_set_channel_request.py) \| [ApiV1SocialAccountSetChannelRequestDict](bundle_social/models/api_v1_social_account_set_channel_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountSetChannelResponse](bundle_social/models/api_v1_social_account_set_channel_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountSetChannelErrorBody](bundle_social/errors/social_account_set_channel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountSetChannel400Error1](bundle_social/models/api_v1_social_account_set_channel400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountSetChannel401Error1](bundle_social/models/api_v1_social_account_set_channel401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountSetChannel403Error1](bundle_social/models/api_v1_social_account_set_channel403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountSetChannel404Error1](bundle_social/models/api_v1_social_account_set_channel404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountSetChannel429Error1](bundle_social/models/api_v1_social_account_set_channel429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountSetChannel500Error1](bundle_social/models/api_v1_social_account_set_channel500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountSetChannel502Error1](bundle_social/models/api_v1_social_account_set_channel502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountSetChannel503Error1](bundle_social/models/api_v1_social_account_set_channel503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountSetChannel504Error1](bundle_social/models/api_v1_social_account_set_channel504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def social_account_unset_channel(*, body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SocialAccountUnsetChannelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear selected channel while keeping social account authorization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.social_account_api.social_account_unset_channel()
    # TODO: Handle 'response' of type ApiV1SocialAccountUnsetChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountUnsetChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.social_account_api.social_account_unset_channel()
    # TODO: Handle 'response' of type ApiV1SocialAccountUnsetChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SocialAccountUnsetChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SocialAccountUnsetChannelRequest](bundle_social/models/api_v1_social_account_unset_channel_request.py) \| [ApiV1SocialAccountUnsetChannelRequestDict](bundle_social/models/api_v1_social_account_unset_channel_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bundle_social/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountUnsetChannelResponse](bundle_social/models/api_v1_social_account_unset_channel_response.py)</code> -- 200

**OnError**: <code>[ApiError](bundle_social/core/exceptions.py)&#91;[SocialAccountUnsetChannelErrorBody](bundle_social/errors/social_account_unset_channel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1SocialAccountUnsetChannel400Error1](bundle_social/models/api_v1_social_account_unset_channel400_error1.py)</code> |
| 401 | <code>[ApiV1SocialAccountUnsetChannel401Error1](bundle_social/models/api_v1_social_account_unset_channel401_error1.py)</code> |
| 403 | <code>[ApiV1SocialAccountUnsetChannel403Error1](bundle_social/models/api_v1_social_account_unset_channel403_error1.py)</code> |
| 404 | <code>[ApiV1SocialAccountUnsetChannel404Error1](bundle_social/models/api_v1_social_account_unset_channel404_error1.py)</code> |
| 429 | <code>[ApiV1SocialAccountUnsetChannel429Error1](bundle_social/models/api_v1_social_account_unset_channel429_error1.py)</code> |
| 500 | <code>[ApiV1SocialAccountUnsetChannel500Error1](bundle_social/models/api_v1_social_account_unset_channel500_error1.py)</code> |
| 502 | <code>[ApiV1SocialAccountUnsetChannel502Error1](bundle_social/models/api_v1_social_account_unset_channel502_error1.py)</code> |
| 503 | <code>[ApiV1SocialAccountUnsetChannel503Error1](bundle_social/models/api_v1_social_account_unset_channel503_error1.py)</code> |
| 504 | <code>[ApiV1SocialAccountUnsetChannel504Error1](bundle_social/models/api_v1_social_account_unset_channel504_error1.py)</code> |
| anything unmapped | <code>[RawError](bundle_social/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

