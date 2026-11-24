# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [FacebookBusinessManagerClient](facebook_business_manager/client.py)

## AdAccounts

> Source: [AdAccounts](facebook_business_manager/apis/ad_accounts.py)

<details>
<summary><code>def get_ad_account(ad_account_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdAccount</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad account including settings, spend limits, and status information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_accounts.get_ad_account("some example string")
    # TODO: Handle 'response' of type AdAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_accounts.get_ad_account("some example string")
    # TODO: Handle 'response' of type AdAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdAccount](facebook_business_manager/models/ad_account.py)</code> -- Successfully retrieved ad account details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetAdAccountErrorBody](facebook_business_manager/errors/get_ad_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdCreatives

> Source: [AdCreatives](facebook_business_manager/apis/ad_creatives.py)

<details>
<summary><code>def create_ad_creative(ad_account_id: str, body: AdCreativeCreate | AdCreativeCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_creatives.create_ad_creative(
        "some example string", AdCreativeCreate(name="some example string", object_story_spec={})
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdCreativeErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_creatives.create_ad_creative(
        "some example string", AdCreativeCreate(name="some example string", object_story_spec={})
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdCreativeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdCreativeCreate](facebook_business_manager/models/ad_creative_create.py) \| [AdCreativeCreateDict](facebook_business_manager/models/ad_creative_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad creative created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateAdCreativeErrorBody](facebook_business_manager/errors/create_ad_creative_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ad_creatives(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdCreativeList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad creatives for the specified ad account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_creatives.list_ad_creatives("some example string")
    # TODO: Handle 'response' of type AdCreativeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdCreativesErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_creatives.list_ad_creatives("some example string")
    # TODO: Handle 'response' of type AdCreativeList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdCreativesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination to retrieve the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdCreativeList](facebook_business_manager/models/ad_creative_list.py)</code> -- Successfully retrieved list of ad creatives

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[ListAdCreativesErrorBody](facebook_business_manager/errors/list_ad_creatives_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdImages

> Source: [AdImages](facebook_business_manager/apis/ad_images.py)

<details>
<summary><code>def upload_ad_image(ad_account_id: str, *, filename: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ActAdimagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_images.upload_ad_image("some example string")
    # TODO: Handle 'response' of type ActAdimagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAdImageErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_images.upload_ad_image("some example string")
    # TODO: Handle 'response' of type ActAdimagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAdImageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>filename</code> | <code>FileInput \| None</code> | The image file to upload<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActAdimagesResponse](facebook_business_manager/models/act_adimages_response.py)</code> -- Image uploaded successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UploadAdImageErrorBody](facebook_business_manager/errors/upload_ad_image_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdSets

> Source: [AdSets](facebook_business_manager/apis/ad_sets.py)

<details>
<summary><code>def create_ad_set(ad_account_id: str, body: AdSetCreate | AdSetCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_sets.create_ad_set(
        "some example string",
        AdSetCreate(
            name="some example string",
            campaign_id="some example string",
            optimization_goal=OptimizationGoal1.LINK_CLICKS,
            billing_event=BillingEvent1.IMPRESSIONS,
            targeting={},
            status=Status1.ACTIVE,
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdSetErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_sets.create_ad_set(
        "some example string",
        AdSetCreate(
            name="some example string",
            campaign_id="some example string",
            optimization_goal=OptimizationGoal1.LINK_CLICKS,
            billing_event=BillingEvent1.IMPRESSIONS,
            targeting={},
            status=Status1.ACTIVE,
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdSetCreate](facebook_business_manager/models/ad_set_create.py) \| [AdSetCreateDict](facebook_business_manager/models/ad_set_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad set created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateAdSetErrorBody](facebook_business_manager/errors/create_ad_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ad_set(ad_set_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdSet</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_sets.get_ad_set("some example string")
    # TODO: Handle 'response' of type AdSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdSetErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_sets.get_ad_set("some example string")
    # TODO: Handle 'response' of type AdSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_set_id</code> | <code>str</code> | The ID of the ad set |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdSet](facebook_business_manager/models/ad_set.py)</code> -- Successfully retrieved ad set details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetAdSetErrorBody](facebook_business_manager/errors/get_ad_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ad_sets(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdSetList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization configurations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_sets.list_ad_sets("some example string")
    # TODO: Handle 'response' of type AdSetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdSetsErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_sets.list_ad_sets("some example string")
    # TODO: Handle 'response' of type AdSetList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination to retrieve the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdSetList](facebook_business_manager/models/ad_set_list.py)</code> -- Successfully retrieved list of ad sets

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[ListAdSetsErrorBody](facebook_business_manager/errors/list_ad_sets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_ad_set(ad_set_id: str, body: AdSetUpdate | AdSetUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ad_sets.update_ad_set("some example string", AdSetUpdate())
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAdSetErrorBody
```

**Async**

```python
try:
    response = await async_client.ad_sets.update_ad_set("some example string", AdSetUpdate())
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAdSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_set_id</code> | <code>str</code> | The ID of the ad set |
| <code>body</code> | <code>[AdSetUpdate](facebook_business_manager/models/ad_set_update.py) \| [AdSetUpdateDict](facebook_business_manager/models/ad_set_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Ad set updated successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UpdateAdSetErrorBody](facebook_business_manager/errors/update_ad_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Ads

> Source: [Ads](facebook_business_manager/apis/ads.py)

<details>
<summary><code>def create_ad(ad_account_id: str, body: AdCreate | AdCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at the ad set level.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ads.create_ad(
        "some example string",
        AdCreate(
            name="some example string",
            adset_id="some example string",
            creative=Creative(creative_id="some example string"),
            status=StatusFacebookBusinessManagerFacebookMarketingAdsApi.ACTIVE,
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdErrorBody
```

**Async**

```python
try:
    response = await async_client.ads.create_ad(
        "some example string",
        AdCreate(
            name="some example string",
            adset_id="some example string",
            creative=Creative(creative_id="some example string"),
            status=StatusFacebookBusinessManagerFacebookMarketingAdsApi.ACTIVE,
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdCreate](facebook_business_manager/models/ad_create.py) \| [AdCreateDict](facebook_business_manager/models/ad_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateAdErrorBody](facebook_business_manager/errors/create_ad_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ad(ad_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Ad</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad including its creative, status, and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ads.get_ad("some example string")
    # TODO: Handle 'response' of type Ad
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdErrorBody
```

**Async**

```python
try:
    response = await async_client.ads.get_ad("some example string")
    # TODO: Handle 'response' of type Ad
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_id</code> | <code>str</code> | The ID of the ad |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ad](facebook_business_manager/models/ad.py)</code> -- Successfully retrieved ad details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetAdErrorBody](facebook_business_manager/errors/get_ad_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ads(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AdList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ads.list_ads("some example string")
    # TODO: Handle 'response' of type AdList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdsErrorBody
```

**Async**

```python
try:
    response = await async_client.ads.list_ads("some example string")
    # TODO: Handle 'response' of type AdList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAdsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination to retrieve the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdList](facebook_business_manager/models/ad_list.py)</code> -- Successfully retrieved list of ads

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[ListAdsErrorBody](facebook_business_manager/errors/list_ads_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](facebook_business_manager/apis/campaigns.py)

<details>
<summary><code>def create_campaign(ad_account_id: str, body: CampaignCreate | CampaignCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.create_campaign(
        "some example string",
        CampaignCreate(
            name="some example string",
            objective=Objective.OUTCOME_AWARENESS,
            status=Status2.ACTIVE,
            special_ad_categories=["some example string"],
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.create_campaign(
        "some example string",
        CampaignCreate(
            name="some example string",
            objective=Objective.OUTCOME_AWARENESS,
            status=Status2.ACTIVE,
            special_ad_categories=["some example string"],
        ),
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[CampaignCreate](facebook_business_manager/models/campaign_create.py) \| [CampaignCreateDict](facebook_business_manager/models/campaign_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Campaign created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateCampaignErrorBody](facebook_business_manager/errors/create_campaign_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_campaign(campaign_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.delete_campaign("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.delete_campaign("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | The ID of the campaign |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Campaign deleted successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[DeleteCampaignErrorBody](facebook_business_manager/errors/delete_campaign_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_campaign(campaign_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Campaign</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.get_campaign("some example string")
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.get_campaign("some example string")
    # TODO: Handle 'response' of type Campaign
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | The ID of the campaign |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](facebook_business_manager/models/campaign.py)</code> -- Successfully retrieved campaign details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetCampaignErrorBody](facebook_business_manager/errors/get_campaign_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_campaigns(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filtering: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CampaignList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their configurations and status information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.list_campaigns("some example string")
    # TODO: Handle 'response' of type CampaignList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCampaignsErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.list_campaigns("some example string")
    # TODO: Handle 'response' of type CampaignList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCampaignsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination to retrieve the next page of results<br>**Default**: <code>None</code> |
| <code>filtering</code> | <code>str \| None</code> | Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator, and value.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignList](facebook_business_manager/models/campaign_list.py)</code> -- Successfully retrieved list of campaigns

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[ListCampaignsErrorBody](facebook_business_manager/errors/list_campaigns_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_campaign(campaign_id: str, body: CampaignUpdate | CampaignUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.update_campaign("some example string", CampaignUpdate())
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.update_campaign("some example string", CampaignUpdate())
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | The ID of the campaign |
| <code>body</code> | <code>[CampaignUpdate](facebook_business_manager/models/campaign_update.py) \| [CampaignUpdateDict](facebook_business_manager/models/campaign_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Campaign updated successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UpdateCampaignErrorBody](facebook_business_manager/errors/update_campaign_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CommentsApi

> Source: [CommentsApi](facebook_business_manager/apis/comments_api.py)

<details>
<summary><code>def create_comment(post_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comments_api.create_comment("some example string", CommentsRequest(message="some example string"))
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.comments_api.create_comment(
        "some example string", CommentsRequest(message="some example string")
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>body</code> | <code>[CommentsRequest](facebook_business_manager/models/comments_request.py) \| [CommentsRequestDict](facebook_business_manager/models/comments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Comment created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateCommentErrorBody](facebook_business_manager/errors/create_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_comment(comment_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comments_api.delete_comment("some example string")
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCommentErrorBody
```

**Async**

```python
try:
    response = await async_client.comments_api.delete_comment("some example string")
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | The ID of the comment to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Comment deleted successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[DeleteCommentErrorBody](facebook_business_manager/errors/delete_comment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_post_comments(post_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filter_: FilterOrStr | None = None, order: OrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> CommentList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves comments on a specific post. Supports pagination and filtering by order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.comments_api.get_post_comments("some example string")
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPostCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.comments_api.get_post_comments("some example string")
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPostCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for forward pagination<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>[FilterOrStr](facebook_business_manager/models/enums/filter.py) \| None</code> | Filter for comment type<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](facebook_business_manager/models/enums/order.py) \| None</code> | Order of comments<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentList](facebook_business_manager/models/comment_list.py)</code> -- Successfully retrieved comments

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetPostCommentsErrorBody](facebook_business_manager/errors/get_post_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomAudiences

> Source: [CustomAudiences](facebook_business_manager/apis/custom_audiences.py)

<details>
<summary><code>def create_custom_audience(ad_account_id: str, body: CustomAudienceCreate | CustomAudienceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences, app activity audiences, and lookalike audiences.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_audiences.create_custom_audience(
        "some example string", CustomAudienceCreate(name="some example string", subtype=Subtype1.CUSTOM)
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomAudienceErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_audiences.create_custom_audience(
        "some example string", CustomAudienceCreate(name="some example string", subtype=Subtype1.CUSTOM)
    )
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomAudienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[CustomAudienceCreate](facebook_business_manager/models/custom_audience_create.py) \| [CustomAudienceCreateDict](facebook_business_manager/models/custom_audience_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Custom audience created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreateCustomAudienceErrorBody](facebook_business_manager/errors/create_custom_audience_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_audiences(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomAudienceList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate sizes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_audiences.list_custom_audiences("some example string")
    # TODO: Handle 'response' of type CustomAudienceList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomAudiencesErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_audiences.list_custom_audiences("some example string")
    # TODO: Handle 'response' of type CustomAudienceList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomAudiencesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination to retrieve the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomAudienceList](facebook_business_manager/models/custom_audience_list.py)</code> -- Successfully retrieved list of custom audiences

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[ListCustomAudiencesErrorBody](facebook_business_manager/errors/list_custom_audiences_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](facebook_business_manager/apis/insights.py)

<details>
<summary><code>def get_ad_account_insights(ad_account_id: str, *, fields: str | None = None, time_range: str | None = None, breakdowns: str | None = None, level: LevelOrStr | None = None, time_increment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights and analytics for the specified ad account. Supports date range filtering, breakdowns, and action breakdowns.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_ad_account_insights("some example string")
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdAccountInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_ad_account_insights("some example string")
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAdAccountInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ad_account_id</code> | <code>str</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>time_range</code> | <code>str \| None</code> | JSON object specifying the date range with since and until fields in YYYY-MM-DD format.<br>**Default**: <code>None</code> |
| <code>breakdowns</code> | <code>str \| None</code> | Comma-separated list of breakdown dimensions such as age, gender, country, or placement.<br>**Default**: <code>None</code> |
| <code>level</code> | <code>[LevelOrStr](facebook_business_manager/models/enums/level.py) \| None</code> | Level of aggregation for results. Options include account, campaign, adset, or ad.<br>**Default**: <code>None</code> |
| <code>time_increment</code> | <code>str \| None</code> | Number of days for each increment in the time range, or use monthly or all_days.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](facebook_business_manager/models/insights_response.py)</code> -- Successfully retrieved insights data

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetAdAccountInsightsErrorBody](facebook_business_manager/errors/get_ad_account_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_campaign_insights(campaign_id: str, *, fields: str | None = None, time_range: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion metrics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_campaign_insights("some example string")
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_campaign_insights("some example string")
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | The ID of the campaign |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned.<br>**Default**: <code>None</code> |
| <code>time_range</code> | <code>str \| None</code> | JSON object specifying the date range with since and until fields in YYYY-MM-DD format.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](facebook_business_manager/models/insights_response.py)</code> -- Successfully retrieved campaign insights

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetCampaignInsightsErrorBody](facebook_business_manager/errors/get_campaign_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PageInsights

> Source: [PageInsights](facebook_business_manager/apis/page_insights.py)

<details>
<summary><code>def get_page_insights(page_id: str, metric: str, *, period: PeriodOrStr | None = None, since: str | None = None, until: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PageInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience demographics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.page_insights.get_page_insights("some example string", "some example string")
    # TODO: Handle 'response' of type PageInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.page_insights.get_page_insights("some example string", "some example string")
    # TODO: Handle 'response' of type PageInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>metric</code> | <code>str</code> | Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans. |
| <code>period</code> | <code>[PeriodOrStr](facebook_business_manager/models/enums/period.py) \| None</code> | Aggregation period for the metrics<br>**Default**: <code>None</code> |
| <code>since</code> | <code>str \| None</code> | Start of the date range in Unix timestamp or YYYY-MM-DD format<br>**Default**: <code>None</code> |
| <code>until</code> | <code>str \| None</code> | End of the date range in Unix timestamp or YYYY-MM-DD format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageInsightsResponse](facebook_business_manager/models/page_insights_response.py)</code> -- Successfully retrieved page insights

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetPageInsightsErrorBody](facebook_business_manager/errors/get_page_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](facebook_business_manager/apis/pages.py)

<details>
<summary><code>def get_page(page_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a Facebook Page including name, category, description, fan count, and other metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pages.get_page("some example string")
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageErrorBody
```

**Async**

```python
try:
    response = await async_client.pages.get_page("some example string")
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](facebook_business_manager/models/page.py)</code> -- Successfully retrieved page details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetPageErrorBody](facebook_business_manager/errors/get_page_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def subscribe_page_app(page_id: str, body: SubscribedAppsRequest | SubscribedAppsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the Page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pages.subscribe_page_app(
        "some example string", SubscribedAppsRequest(subscribed_fields=["some example string"])
    )
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribePageAppErrorBody
```

**Async**

```python
try:
    response = await async_client.pages.subscribe_page_app(
        "some example string", SubscribedAppsRequest(subscribed_fields=["some example string"])
    )
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribePageAppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[SubscribedAppsRequest](facebook_business_manager/models/subscribed_apps_request.py) \| [SubscribedAppsRequestDict](facebook_business_manager/models/subscribed_apps_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- App subscribed to page successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[SubscribePageAppErrorBody](facebook_business_manager/errors/subscribe_page_app_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Photos

> Source: [Photos](facebook_business_manager/apis/photos.py)

<details>
<summary><code>def upload_page_photo(page_id: str, body: PhotosRequest | PhotosRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in posts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.photos.upload_page_photo("some example string", PhotosRequest())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadPagePhotoErrorBody
```

**Async**

```python
try:
    response = await async_client.photos.upload_page_photo("some example string", PhotosRequest())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadPagePhotoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[PhotosRequest](facebook_business_manager/models/photos_request.py) \| [PhotosRequestDict](facebook_business_manager/models/photos_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Photo uploaded successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UploadPagePhotoErrorBody](facebook_business_manager/errors/upload_page_photo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](facebook_business_manager/apis/posts.py)

<details>
<summary><code>def create_page_post(page_id: str, body: PostCreate | PostCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts. Requires a page access token with pages_manage_posts permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.create_page_post("some example string", PostCreate())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePagePostErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.create_page_post("some example string", PostCreate())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePagePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[PostCreate](facebook_business_manager/models/post_create.py) \| [PostCreateDict](facebook_business_manager/models/post_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Post created successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[CreatePagePostErrorBody](facebook_business_manager/errors/create_page_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_post(post_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a post from the Facebook Page. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.delete_post("some example string")
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.delete_post("some example string")
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Post deleted successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[DeletePostErrorBody](facebook_business_manager/errors/delete_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_page_feed(page_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PostList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.get_page_feed("some example string")
    # TODO: Handle 'response' of type PostList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageFeedErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.get_page_feed("some example string")
    # TODO: Handle 'response' of type PostList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPageFeedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of objects to return per page<br>**Default**: <code>25</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for forward pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostList](facebook_business_manager/models/post_list.py)</code> -- Successfully retrieved page feed

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetPageFeedErrorBody](facebook_business_manager/errors/get_page_feed_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_post(post_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Post</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.get_post("some example string")
    # TODO: Handle 'response' of type Post
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPostErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.get_post("some example string")
    # TODO: Handle 'response' of type Post
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Post](facebook_business_manager/models/post.py)</code> -- Successfully retrieved post details

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[GetPostErrorBody](facebook_business_manager/errors/get_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_post(post_id: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing post on the Page. Only the message field can be updated after publishing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.posts.update_post("some example string", Request())
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePostErrorBody
```

**Async**

```python
try:
    response = await async_client.posts.update_post("some example string", Request())
    # TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>post_id</code> | <code>str</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>body</code> | <code>[Request](facebook_business_manager/models/request.py) \| [RequestDict](facebook_business_manager/models/request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Post updated successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UpdatePostErrorBody](facebook_business_manager/errors/update_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Videos

> Source: [Videos](facebook_business_manager/apis/videos.py)

<details>
<summary><code>def upload_page_video(page_id: str, body: VideosRequest | VideosRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.videos.upload_page_video("some example string", VideosRequest())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadPageVideoErrorBody
```

**Async**

```python
try:
    response = await async_client.videos.upload_page_video("some example string", VideosRequest())
    # TODO: Handle 'response' of type CreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadPageVideoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[VideosRequest](facebook_business_manager/models/videos_request.py) \| [VideosRequestDict](facebook_business_manager/models/videos_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](facebook_business_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Video uploaded successfully

**OnError**: <code>[ApiError](facebook_business_manager/core/exceptions.py)&#91;[UploadPageVideoErrorBody](facebook_business_manager/errors/upload_page_video_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](facebook_business_manager/models/error.py)</code> |
| anything unmapped | <code>[RawError](facebook_business_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

