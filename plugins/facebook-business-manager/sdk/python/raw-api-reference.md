# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [FacebookBusinessManagerClient](facebook_business_manager/client.py)

## AdAccounts

> Source: [AdAccounts](facebook_business_manager/apis/ad_accounts.py)

<details>
<summary><code>def get_ad_account(ad_account_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdAccount, GetAdAccountErrorBody]</code></summary>

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
result = client.ad_accounts.with_raw_response.get_ad_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdAccountErrorBody
```

**Async**

```python
result = await async_client.ad_accounts.with_raw_response.get_ad_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdAccountErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[AdAccount](facebook_business_manager/models/ad_account.py), [GetAdAccountErrorBody](facebook_business_manager/errors/get_ad_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdAccount](facebook_business_manager/models/ad_account.py)</code> -- Successfully retrieved ad account details

**On `Failure`**: `error` is <code>[GetAdAccountErrorBody](facebook_business_manager/errors/get_ad_account_error.py)</code>

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
<summary><code>def create_ad_creative(ad_account_id: str, body: AdCreativeCreate | AdCreativeCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateAdCreativeErrorBody]</code></summary>

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
result = client.ad_creatives.with_raw_response.create_ad_creative(
    "some example string", AdCreativeCreate(name="some example string", object_story_spec={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdCreativeErrorBody
```

**Async**

```python
result = await async_client.ad_creatives.with_raw_response.create_ad_creative(
    "some example string", AdCreativeCreate(name="some example string", object_story_spec={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdCreativeErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateAdCreativeErrorBody](facebook_business_manager/errors/create_ad_creative_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad creative created successfully

**On `Failure`**: `error` is <code>[CreateAdCreativeErrorBody](facebook_business_manager/errors/create_ad_creative_error.py)</code>

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
<summary><code>def list_ad_creatives(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdCreativeList, ListAdCreativesErrorBody]</code></summary>

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
result = client.ad_creatives.with_raw_response.list_ad_creatives("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdCreativeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdCreativesErrorBody
```

**Async**

```python
result = await async_client.ad_creatives.with_raw_response.list_ad_creatives("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdCreativeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdCreativesErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[AdCreativeList](facebook_business_manager/models/ad_creative_list.py), [ListAdCreativesErrorBody](facebook_business_manager/errors/list_ad_creatives_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdCreativeList](facebook_business_manager/models/ad_creative_list.py)</code> -- Successfully retrieved list of ad creatives

**On `Failure`**: `error` is <code>[ListAdCreativesErrorBody](facebook_business_manager/errors/list_ad_creatives_error.py)</code>

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
<summary><code>def upload_ad_image(ad_account_id: str, *, filename: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActAdimagesResponse, UploadAdImageErrorBody]</code></summary>

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
result = client.ad_images.with_raw_response.upload_ad_image("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActAdimagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAdImageErrorBody
```

**Async**

```python
result = await async_client.ad_images.with_raw_response.upload_ad_image("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActAdimagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAdImageErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[ActAdimagesResponse](facebook_business_manager/models/act_adimages_response.py), [UploadAdImageErrorBody](facebook_business_manager/errors/upload_ad_image_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActAdimagesResponse](facebook_business_manager/models/act_adimages_response.py)</code> -- Image uploaded successfully

**On `Failure`**: `error` is <code>[UploadAdImageErrorBody](facebook_business_manager/errors/upload_ad_image_error.py)</code>

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
<summary><code>def create_ad_set(ad_account_id: str, body: AdSetCreate | AdSetCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateAdSetErrorBody]</code></summary>

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
result = client.ad_sets.with_raw_response.create_ad_set(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdSetErrorBody
```

**Async**

```python
result = await async_client.ad_sets.with_raw_response.create_ad_set(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdSetErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateAdSetErrorBody](facebook_business_manager/errors/create_ad_set_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad set created successfully

**On `Failure`**: `error` is <code>[CreateAdSetErrorBody](facebook_business_manager/errors/create_ad_set_error.py)</code>

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
<summary><code>def get_ad_set(ad_set_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdSet, GetAdSetErrorBody]</code></summary>

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
result = client.ad_sets.with_raw_response.get_ad_set("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdSetErrorBody
```

**Async**

```python
result = await async_client.ad_sets.with_raw_response.get_ad_set("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdSetErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[AdSet](facebook_business_manager/models/ad_set.py), [GetAdSetErrorBody](facebook_business_manager/errors/get_ad_set_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdSet](facebook_business_manager/models/ad_set.py)</code> -- Successfully retrieved ad set details

**On `Failure`**: `error` is <code>[GetAdSetErrorBody](facebook_business_manager/errors/get_ad_set_error.py)</code>

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
<summary><code>def list_ad_sets(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdSetList, ListAdSetsErrorBody]</code></summary>

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
result = client.ad_sets.with_raw_response.list_ad_sets("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdSetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdSetsErrorBody
```

**Async**

```python
result = await async_client.ad_sets.with_raw_response.list_ad_sets("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdSetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdSetsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[AdSetList](facebook_business_manager/models/ad_set_list.py), [ListAdSetsErrorBody](facebook_business_manager/errors/list_ad_sets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdSetList](facebook_business_manager/models/ad_set_list.py)</code> -- Successfully retrieved list of ad sets

**On `Failure`**: `error` is <code>[ListAdSetsErrorBody](facebook_business_manager/errors/list_ad_sets_error.py)</code>

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
<summary><code>def update_ad_set(ad_set_id: str, body: AdSetUpdate | AdSetUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, UpdateAdSetErrorBody]</code></summary>

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
result = client.ad_sets.with_raw_response.update_ad_set("some example string", AdSetUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAdSetErrorBody
```

**Async**

```python
result = await async_client.ad_sets.with_raw_response.update_ad_set("some example string", AdSetUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAdSetErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponse](facebook_business_manager/models/success_response.py), [UpdateAdSetErrorBody](facebook_business_manager/errors/update_ad_set_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Ad set updated successfully

**On `Failure`**: `error` is <code>[UpdateAdSetErrorBody](facebook_business_manager/errors/update_ad_set_error.py)</code>

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
<summary><code>def create_ad(ad_account_id: str, body: AdCreate | AdCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateAdErrorBody]</code></summary>

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
result = client.ads.with_raw_response.create_ad(
    "some example string",
    AdCreate(
        name="some example string",
        adset_id="some example string",
        creative=Creative(creative_id="some example string"),
        status=StatusFacebookBusinessManagerFacebookMarketingAdsApi.ACTIVE,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdErrorBody
```

**Async**

```python
result = await async_client.ads.with_raw_response.create_ad(
    "some example string",
    AdCreate(
        name="some example string",
        adset_id="some example string",
        creative=Creative(creative_id="some example string"),
        status=StatusFacebookBusinessManagerFacebookMarketingAdsApi.ACTIVE,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAdErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateAdErrorBody](facebook_business_manager/errors/create_ad_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Ad created successfully

**On `Failure`**: `error` is <code>[CreateAdErrorBody](facebook_business_manager/errors/create_ad_error.py)</code>

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
<summary><code>def get_ad(ad_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Ad, GetAdErrorBody]</code></summary>

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
result = client.ads.with_raw_response.get_ad("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ad
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdErrorBody
```

**Async**

```python
result = await async_client.ads.with_raw_response.get_ad("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Ad
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[Ad](facebook_business_manager/models/ad.py), [GetAdErrorBody](facebook_business_manager/errors/get_ad_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Ad](facebook_business_manager/models/ad.py)</code> -- Successfully retrieved ad details

**On `Failure`**: `error` is <code>[GetAdErrorBody](facebook_business_manager/errors/get_ad_error.py)</code>

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
<summary><code>def list_ads(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdList, ListAdsErrorBody]</code></summary>

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
result = client.ads.with_raw_response.list_ads("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdsErrorBody
```

**Async**

```python
result = await async_client.ads.with_raw_response.list_ads("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAdsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[AdList](facebook_business_manager/models/ad_list.py), [ListAdsErrorBody](facebook_business_manager/errors/list_ads_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdList](facebook_business_manager/models/ad_list.py)</code> -- Successfully retrieved list of ads

**On `Failure`**: `error` is <code>[ListAdsErrorBody](facebook_business_manager/errors/list_ads_error.py)</code>

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
<summary><code>def create_campaign(ad_account_id: str, body: CampaignCreate | CampaignCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateCampaignErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.create_campaign(
    "some example string",
    CampaignCreate(
        name="some example string",
        objective=Objective.OUTCOME_AWARENESS,
        status=Status2.ACTIVE,
        special_ad_categories=["some example string"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.create_campaign(
    "some example string",
    CampaignCreate(
        name="some example string",
        objective=Objective.OUTCOME_AWARENESS,
        status=Status2.ACTIVE,
        special_ad_categories=["some example string"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCampaignErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateCampaignErrorBody](facebook_business_manager/errors/create_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Campaign created successfully

**On `Failure`**: `error` is <code>[CreateCampaignErrorBody](facebook_business_manager/errors/create_campaign_error.py)</code>

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
<summary><code>def delete_campaign(campaign_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, DeleteCampaignErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.delete_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.delete_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCampaignErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponse](facebook_business_manager/models/success_response.py), [DeleteCampaignErrorBody](facebook_business_manager/errors/delete_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Campaign deleted successfully

**On `Failure`**: `error` is <code>[DeleteCampaignErrorBody](facebook_business_manager/errors/delete_campaign_error.py)</code>

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
<summary><code>def get_campaign(campaign_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Campaign, GetCampaignErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.get_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.get_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Campaign
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[Campaign](facebook_business_manager/models/campaign.py), [GetCampaignErrorBody](facebook_business_manager/errors/get_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Campaign](facebook_business_manager/models/campaign.py)</code> -- Successfully retrieved campaign details

**On `Failure`**: `error` is <code>[GetCampaignErrorBody](facebook_business_manager/errors/get_campaign_error.py)</code>

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
<summary><code>def list_campaigns(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filtering: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignList, ListCampaignsErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.list_campaigns("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCampaignsErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.list_campaigns("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCampaignsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CampaignList](facebook_business_manager/models/campaign_list.py), [ListCampaignsErrorBody](facebook_business_manager/errors/list_campaigns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignList](facebook_business_manager/models/campaign_list.py)</code> -- Successfully retrieved list of campaigns

**On `Failure`**: `error` is <code>[ListCampaignsErrorBody](facebook_business_manager/errors/list_campaigns_error.py)</code>

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
<summary><code>def update_campaign(campaign_id: str, body: CampaignUpdate | CampaignUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, UpdateCampaignErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.update_campaign("some example string", CampaignUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.update_campaign("some example string", CampaignUpdate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCampaignErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponse](facebook_business_manager/models/success_response.py), [UpdateCampaignErrorBody](facebook_business_manager/errors/update_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](facebook_business_manager/models/success_response.py)</code> -- Campaign updated successfully

**On `Failure`**: `error` is <code>[UpdateCampaignErrorBody](facebook_business_manager/errors/update_campaign_error.py)</code>

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
<summary><code>def create_comment(post_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateCommentErrorBody]</code></summary>

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
result = client.comments_api.with_raw_response.create_comment(
    "some example string", CommentsRequest(message="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCommentErrorBody
```

**Async**

```python
result = await async_client.comments_api.with_raw_response.create_comment(
    "some example string", CommentsRequest(message="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCommentErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateCommentErrorBody](facebook_business_manager/errors/create_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Comment created successfully

**On `Failure`**: `error` is <code>[CreateCommentErrorBody](facebook_business_manager/errors/create_comment_error.py)</code>

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
<summary><code>def delete_comment(comment_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeleteCommentErrorBody]</code></summary>

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
result = client.comments_api.with_raw_response.delete_comment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCommentErrorBody
```

**Async**

```python
result = await async_client.comments_api.with_raw_response.delete_comment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCommentErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py), [DeleteCommentErrorBody](facebook_business_manager/errors/delete_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Comment deleted successfully

**On `Failure`**: `error` is <code>[DeleteCommentErrorBody](facebook_business_manager/errors/delete_comment_error.py)</code>

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
<summary><code>def get_post_comments(post_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filter_: FilterOrStr | None = None, order: OrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentList, GetPostCommentsErrorBody]</code></summary>

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
result = client.comments_api.with_raw_response.get_post_comments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPostCommentsErrorBody
```

**Async**

```python
result = await async_client.comments_api.with_raw_response.get_post_comments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPostCommentsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CommentList](facebook_business_manager/models/comment_list.py), [GetPostCommentsErrorBody](facebook_business_manager/errors/get_post_comments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentList](facebook_business_manager/models/comment_list.py)</code> -- Successfully retrieved comments

**On `Failure`**: `error` is <code>[GetPostCommentsErrorBody](facebook_business_manager/errors/get_post_comments_error.py)</code>

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
<summary><code>def create_custom_audience(ad_account_id: str, body: CustomAudienceCreate | CustomAudienceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreateCustomAudienceErrorBody]</code></summary>

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
result = client.custom_audiences.with_raw_response.create_custom_audience(
    "some example string", CustomAudienceCreate(name="some example string", subtype=Subtype1.CUSTOM)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomAudienceErrorBody
```

**Async**

```python
result = await async_client.custom_audiences.with_raw_response.create_custom_audience(
    "some example string", CustomAudienceCreate(name="some example string", subtype=Subtype1.CUSTOM)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomAudienceErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreateCustomAudienceErrorBody](facebook_business_manager/errors/create_custom_audience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Custom audience created successfully

**On `Failure`**: `error` is <code>[CreateCustomAudienceErrorBody](facebook_business_manager/errors/create_custom_audience_error.py)</code>

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
<summary><code>def list_custom_audiences(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomAudienceList, ListCustomAudiencesErrorBody]</code></summary>

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
result = client.custom_audiences.with_raw_response.list_custom_audiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomAudienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomAudiencesErrorBody
```

**Async**

```python
result = await async_client.custom_audiences.with_raw_response.list_custom_audiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomAudienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomAudiencesErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CustomAudienceList](facebook_business_manager/models/custom_audience_list.py), [ListCustomAudiencesErrorBody](facebook_business_manager/errors/list_custom_audiences_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomAudienceList](facebook_business_manager/models/custom_audience_list.py)</code> -- Successfully retrieved list of custom audiences

**On `Failure`**: `error` is <code>[ListCustomAudiencesErrorBody](facebook_business_manager/errors/list_custom_audiences_error.py)</code>

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
<summary><code>def get_ad_account_insights(ad_account_id: str, *, fields: str | None = None, time_range: str | None = None, breakdowns: str | None = None, level: LevelOrStr | None = None, time_increment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsResponse, GetAdAccountInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_ad_account_insights("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdAccountInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_ad_account_insights("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAdAccountInsightsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[InsightsResponse](facebook_business_manager/models/insights_response.py), [GetAdAccountInsightsErrorBody](facebook_business_manager/errors/get_ad_account_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsResponse](facebook_business_manager/models/insights_response.py)</code> -- Successfully retrieved insights data

**On `Failure`**: `error` is <code>[GetAdAccountInsightsErrorBody](facebook_business_manager/errors/get_ad_account_insights_error.py)</code>

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
<summary><code>def get_campaign_insights(campaign_id: str, *, fields: str | None = None, time_range: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsResponse, GetCampaignInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_campaign_insights("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_campaign_insights("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCampaignInsightsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[InsightsResponse](facebook_business_manager/models/insights_response.py), [GetCampaignInsightsErrorBody](facebook_business_manager/errors/get_campaign_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsResponse](facebook_business_manager/models/insights_response.py)</code> -- Successfully retrieved campaign insights

**On `Failure`**: `error` is <code>[GetCampaignInsightsErrorBody](facebook_business_manager/errors/get_campaign_insights_error.py)</code>

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
<summary><code>def get_page_insights(page_id: str, metric: str, *, period: PeriodOrStr | None = None, since: str | None = None, until: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageInsightsResponse, GetPageInsightsErrorBody]</code></summary>

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
result = client.page_insights.with_raw_response.get_page_insights("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageInsightsErrorBody
```

**Async**

```python
result = await async_client.page_insights.with_raw_response.get_page_insights(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageInsightsErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[PageInsightsResponse](facebook_business_manager/models/page_insights_response.py), [GetPageInsightsErrorBody](facebook_business_manager/errors/get_page_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageInsightsResponse](facebook_business_manager/models/page_insights_response.py)</code> -- Successfully retrieved page insights

**On `Failure`**: `error` is <code>[GetPageInsightsErrorBody](facebook_business_manager/errors/get_page_insights_error.py)</code>

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
<summary><code>def get_page(page_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Page, GetPageErrorBody]</code></summary>

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
result = client.pages.with_raw_response.get_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Page
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageErrorBody
```

**Async**

```python
result = await async_client.pages.with_raw_response.get_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Page
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[Page](facebook_business_manager/models/page.py), [GetPageErrorBody](facebook_business_manager/errors/get_page_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Page](facebook_business_manager/models/page.py)</code> -- Successfully retrieved page details

**On `Failure`**: `error` is <code>[GetPageErrorBody](facebook_business_manager/errors/get_page_error.py)</code>

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
<summary><code>def subscribe_page_app(page_id: str, body: SubscribedAppsRequest | SubscribedAppsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, SubscribePageAppErrorBody]</code></summary>

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
result = client.pages.with_raw_response.subscribe_page_app(
    "some example string", SubscribedAppsRequest(subscribed_fields=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribePageAppErrorBody
```

**Async**

```python
result = await async_client.pages.with_raw_response.subscribe_page_app(
    "some example string", SubscribedAppsRequest(subscribed_fields=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribePageAppErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py), [SubscribePageAppErrorBody](facebook_business_manager/errors/subscribe_page_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- App subscribed to page successfully

**On `Failure`**: `error` is <code>[SubscribePageAppErrorBody](facebook_business_manager/errors/subscribe_page_app_error.py)</code>

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
<summary><code>def upload_page_photo(page_id: str, body: PhotosRequest | PhotosRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, UploadPagePhotoErrorBody]</code></summary>

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
result = client.photos.with_raw_response.upload_page_photo("some example string", PhotosRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadPagePhotoErrorBody
```

**Async**

```python
result = await async_client.photos.with_raw_response.upload_page_photo("some example string", PhotosRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadPagePhotoErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [UploadPagePhotoErrorBody](facebook_business_manager/errors/upload_page_photo_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Photo uploaded successfully

**On `Failure`**: `error` is <code>[UploadPagePhotoErrorBody](facebook_business_manager/errors/upload_page_photo_error.py)</code>

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
<summary><code>def create_page_post(page_id: str, body: PostCreate | PostCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, CreatePagePostErrorBody]</code></summary>

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
result = client.posts.with_raw_response.create_page_post("some example string", PostCreate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePagePostErrorBody
```

**Async**

```python
result = await async_client.posts.with_raw_response.create_page_post("some example string", PostCreate())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePagePostErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [CreatePagePostErrorBody](facebook_business_manager/errors/create_page_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Post created successfully

**On `Failure`**: `error` is <code>[CreatePagePostErrorBody](facebook_business_manager/errors/create_page_post_error.py)</code>

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
<summary><code>def delete_post(post_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeletePostErrorBody]</code></summary>

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
result = client.posts.with_raw_response.delete_post("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePostErrorBody
```

**Async**

```python
result = await async_client.posts.with_raw_response.delete_post("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePostErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py), [DeletePostErrorBody](facebook_business_manager/errors/delete_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Post deleted successfully

**On `Failure`**: `error` is <code>[DeletePostErrorBody](facebook_business_manager/errors/delete_post_error.py)</code>

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
<summary><code>def get_page_feed(page_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PostList, GetPageFeedErrorBody]</code></summary>

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
result = client.posts.with_raw_response.get_page_feed("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PostList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageFeedErrorBody
```

**Async**

```python
result = await async_client.posts.with_raw_response.get_page_feed("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PostList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPageFeedErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[PostList](facebook_business_manager/models/post_list.py), [GetPageFeedErrorBody](facebook_business_manager/errors/get_page_feed_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PostList](facebook_business_manager/models/post_list.py)</code> -- Successfully retrieved page feed

**On `Failure`**: `error` is <code>[GetPageFeedErrorBody](facebook_business_manager/errors/get_page_feed_error.py)</code>

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
<summary><code>def get_post(post_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Post, GetPostErrorBody]</code></summary>

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
result = client.posts.with_raw_response.get_post("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Post
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPostErrorBody
```

**Async**

```python
result = await async_client.posts.with_raw_response.get_post("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Post
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPostErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[Post](facebook_business_manager/models/post.py), [GetPostErrorBody](facebook_business_manager/errors/get_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Post](facebook_business_manager/models/post.py)</code> -- Successfully retrieved post details

**On `Failure`**: `error` is <code>[GetPostErrorBody](facebook_business_manager/errors/get_post_error.py)</code>

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
<summary><code>def update_post(post_id: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, UpdatePostErrorBody]</code></summary>

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
result = client.posts.with_raw_response.update_post("some example string", Request())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePostErrorBody
```

**Async**

```python
result = await async_client.posts.with_raw_response.update_post("some example string", Request())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePostErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py), [UpdatePostErrorBody](facebook_business_manager/errors/update_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py)</code> -- Post updated successfully

**On `Failure`**: `error` is <code>[UpdatePostErrorBody](facebook_business_manager/errors/update_post_error.py)</code>

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
<summary><code>def upload_page_video(page_id: str, body: VideosRequest | VideosRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResponse, UploadPageVideoErrorBody]</code></summary>

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
result = client.videos.with_raw_response.upload_page_video("some example string", VideosRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadPageVideoErrorBody
```

**Async**

```python
result = await async_client.videos.with_raw_response.upload_page_video("some example string", VideosRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadPageVideoErrorBody
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

**Returns**: <code>[ApiResult](facebook_business_manager/core/results.py)&#91;[CreateResponse](facebook_business_manager/models/create_response.py), [UploadPageVideoErrorBody](facebook_business_manager/errors/upload_page_video_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResponse](facebook_business_manager/models/create_response.py)</code> -- Video uploaded successfully

**On `Failure`**: `error` is <code>[UploadPageVideoErrorBody](facebook_business_manager/errors/upload_page_video_error.py)</code>

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

