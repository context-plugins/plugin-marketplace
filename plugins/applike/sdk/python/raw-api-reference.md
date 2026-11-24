# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ApplikeClient](applike/client.py)

## AppEvents

> Source: [AppEvents](applike/apis/app_events.py)

<details>
<summary><code>def post_app_event_batch(body: list[AppEventBatch | AppEventBatchDict], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[BatchErrorResponse], PostAppEventBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends batches of batches of events where each inner batch is for a single app and user.
Follows a bulk processing paradigm where individual AppEventBatches in the InputBatch are processed
independently from each other. If an AppEventBatch fails to be processed, this does not affect the processing
of the other AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is
set for its batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing".
After acceptance of a batch, there is delayed processing of it in subsequent components where additional validation happens.
This means that even though a batch was successfully accepted, not necessarily all events will pass processing.
This subsequent processing includes but is not limited to:
- deduplication
- additional semantic validation
- user identity resolution
User Identity is determined once for the whole batch for an app user combination, using the newest information which predates the newest event in the batch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_events.with_raw_response.post_app_event_batch(
    [
        AppEventBatch(
            batch_id=UUID("00000000-0000-0000-0000-000000000000"),
            app=App(store_id="some example string"),
            user=User(id="some example string"),
            events=[AppEvent(unit=Unit.COUNT)],
        ),
    ],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[BatchErrorResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAppEventBatchErrorBody
```

**Async**

```python
result = await async_client.app_events.with_raw_response.post_app_event_batch(
    [
        AppEventBatch(
            batch_id=UUID("00000000-0000-0000-0000-000000000000"),
            app=App(store_id="some example string"),
            user=User(id="some example string"),
            events=[AppEvent(unit=Unit.COUNT)],
        ),
    ],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[BatchErrorResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAppEventBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[AppEventBatch](applike/models/app_event_batch.py) \| [AppEventBatchDict](applike/models/app_event_batch.py)&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;list&#91;[BatchErrorResponse](applike/models/batch_error_response.py)&#93;, [PostAppEventBatchErrorBody](applike/errors/post_app_event_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[BatchErrorResponse](applike/models/batch_error_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[PostAppEventBatchErrorBody](applike/errors/post_app_event_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 502 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AppPartnerConnectionApi

> Source: [AppPartnerConnectionApi](applike/apis/app_partner_connection_api.py)

<details>
<summary><code>def get_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppPartnerConnection, GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data for existing app partner connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_partner_connection_api.with_raw_response.get_management_v1_app_by_app_id_connection_by_partner_id(
    1, 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppPartnerConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

**Async**

```python
result = await async_client.app_partner_connection_api.with_raw_response.get_management_v1_app_by_app_id_connection_by_partner_id(
    1, 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppPartnerConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app_id</code> | <code>int</code> | justtrack's identifier for the app |
| <code>partner_id</code> | <code>int</code> | justtrack's identifier for the advertising partner |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[AppPartnerConnection](applike/models/app_partner_connection.py), [GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody](applike/errors/get_management_v1_app_by_app_id_connection_by_partner_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppPartnerConnection](applike/models/app_partner_connection.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody](applike/errors/get_management_v1_app_by_app_id_connection_by_partner_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401, 404 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, body: AppPartnerConnection | AppPartnerConnectionDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppPartnerConnection, PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connect your app to a partner. If this app-partner connection already exists, update the connection details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_partner_connection_api.with_raw_response.put_management_v1_app_by_app_id_connection_by_partner_id(
    1, 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppPartnerConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

**Async**

```python
result = await async_client.app_partner_connection_api.with_raw_response.put_management_v1_app_by_app_id_connection_by_partner_id(
    1, 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppPartnerConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>app_id</code> | <code>int</code> | justtrack's identifier for the app |
| <code>partner_id</code> | <code>int</code> | justtrack's identifier for the advertising partner |
| <code>body</code> | <code>[AppPartnerConnection](applike/models/app_partner_connection.py) \| [AppPartnerConnectionDict](applike/models/app_partner_connection.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[AppPartnerConnection](applike/models/app_partner_connection.py), [PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody](applike/errors/put_management_v1_app_by_app_id_connection_by_partner_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppPartnerConnection](applike/models/app_partner_connection.py)</code> -- OK

**On `Failure`**: `error` is <code>[PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody](applike/errors/put_management_v1_app_by_app_id_connection_by_partner_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Apps

> Source: [Apps](applike/apis/apps.py)

<details>
<summary><code>def post_management_v1_app(*, body: CreateAppRequest | CreateAppRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppOutput, PostManagementV1AppErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an app.

:::info

We validate the following constraints when creating an app:

- The bundle ID must be unique to your organization, though multiple apps within your organization can have the same bundle ID if the platform is different.
- A (bundle ID, platform) pair must be unique within your organization.
- A (name, platform) pair must be unique within your organization.
- The store ID must be unique across all organizations.

:::

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apps.with_raw_response.post_management_v1_app()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1AppErrorBody
```

**Async**

```python
result = await async_client.apps.with_raw_response.post_management_v1_app()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1AppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAppRequest](applike/models/create_app_request.py) \| [CreateAppRequestDict](applike/models/create_app_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[AppOutput](applike/models/app_output.py), [PostManagementV1AppErrorBody](applike/errors/post_management_v1_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppOutput](applike/models/app_output.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1AppErrorBody](applike/errors/post_management_v1_app_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_apps(*, body: ListAppsRequest | ListAppsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAppsResponse, PostManagementV1AppsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of your organization's apps.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apps.with_raw_response.post_management_v1_apps()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAppsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1AppsErrorBody
```

**Async**

```python
result = await async_client.apps.with_raw_response.post_management_v1_apps()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAppsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1AppsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListAppsRequest](applike/models/list_apps_request.py) \| [ListAppsRequestDict](applike/models/list_apps_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[ListAppsResponse](applike/models/list_apps_response.py), [PostManagementV1AppsErrorBody](applike/errors/post_management_v1_apps_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAppsResponse](applike/models/list_apps_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1AppsErrorBody](applike/errors/post_management_v1_apps_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Bids

> Source: [Bids](applike/apis/bids.py)

<details>
<summary><code>def post_management_v1_bids(*, body: ListBidsRequest | ListBidsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListBidsResponse, PostManagementV1BidsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation associated with the bid.
The following filter combinations are eligible:
- networkId + campaignId
- networkId + campaignId + countryCode
- networkId + campaignId + countryCode + sourceId
- networkId + adSetId
- networkId + adSetId + countryCode
- networkId + adSetId + countryCode + sourceId

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bids.with_raw_response.post_management_v1_bids()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBidsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1BidsErrorBody
```

**Async**

```python
result = await async_client.bids.with_raw_response.post_management_v1_bids()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBidsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1BidsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListBidsRequest](applike/models/list_bids_request.py) \| [ListBidsRequestDict](applike/models/list_bids_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[ListBidsResponse](applike/models/list_bids_response.py), [PostManagementV1BidsErrorBody](applike/errors/post_management_v1_bids_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListBidsResponse](applike/models/list_bids_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1BidsErrorBody](applike/errors/post_management_v1_bids_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_bids_upload(*, body: list[UploadBidInput | UploadBidInputDict] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, PostManagementV1BidsUploadErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and limitations apply.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bids.with_raw_response.post_management_v1_bids_upload()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1BidsUploadErrorBody
```

**Async**

```python
result = await async_client.bids.with_raw_response.post_management_v1_bids_upload()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1BidsUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UploadBidInput](applike/models/upload_bid_input.py) \| [UploadBidInputDict](applike/models/upload_bid_input.py)&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;Any, [PostManagementV1BidsUploadErrorBody](applike/errors/post_management_v1_bids_upload_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Bids are accepted and will be processed asynchronously

**On `Failure`**: `error` is <code>[PostManagementV1BidsUploadErrorBody](applike/errors/post_management_v1_bids_upload_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UploadBidsInvalidBidResponse](applike/models/upload_bids_invalid_bid_response.py)</code> |
| 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](applike/apis/campaigns.py)

<details>
<summary><code>def post_management_v1_campaign(*, body: CreateCampaignRequest | CreateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignOutput, PostManagementV1CampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Typically, we automatically track campaigns in justtrack when we receive the first click or impression. However, you can also use this API to create a campaign manually.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns.with_raw_response.post_management_v1_campaign()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1CampaignErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.post_management_v1_campaign()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1CampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCampaignRequest](applike/models/create_campaign_request.py) \| [CreateCampaignRequestDict](applike/models/create_campaign_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[CampaignOutput](applike/models/campaign_output.py), [PostManagementV1CampaignErrorBody](applike/errors/post_management_v1_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignOutput](applike/models/campaign_output.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1CampaignErrorBody](applike/errors/post_management_v1_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_campaigns(*, body: ListCampaignsRequest | ListCampaignsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignOutput, PostManagementV1CampaignsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of campaigns for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.campaigns.with_raw_response.post_management_v1_campaigns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1CampaignsErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.post_management_v1_campaigns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignOutput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1CampaignsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListCampaignsRequest](applike/models/list_campaigns_request.py) \| [ListCampaignsRequestDict](applike/models/list_campaigns_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[CampaignOutput](applike/models/campaign_output.py), [PostManagementV1CampaignsErrorBody](applike/errors/post_management_v1_campaigns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignOutput](applike/models/campaign_output.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1CampaignsErrorBody](applike/errors/post_management_v1_campaigns_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerConfigurations

> Source: [PartnerConfigurations](applike/apis/partner_configurations.py)

<details>
<summary><code>def post_management_v1_partner_configuration_by_feature(feature: str, *, body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPartnerConfigurationFeaturesResponse, PostManagementV1PartnerConfigurationByFeatureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of configured features for a given app and partner.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_configurations.with_raw_response.post_management_v1_partner_configuration_by_feature(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnerConfigurationFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnerConfigurationByFeatureErrorBody
```

**Async**

```python
result = await async_client.partner_configurations.with_raw_response.post_management_v1_partner_configuration_by_feature(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnerConfigurationFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnerConfigurationByFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListPartnerConfigurationFeaturesRequest](applike/models/list_partner_configuration_features_request.py) \| [ListPartnerConfigurationFeaturesRequestDict](applike/models/list_partner_configuration_features_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[ListPartnerConfigurationFeaturesResponse](applike/models/list_partner_configuration_features_response.py), [PostManagementV1PartnerConfigurationByFeatureErrorBody](applike/errors/post_management_v1_partner_configuration_by_feature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPartnerConfigurationFeaturesResponse](applike/models/list_partner_configuration_features_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1PartnerConfigurationByFeatureErrorBody](applike/errors/post_management_v1_partner_configuration_by_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_partner_configurations(*, body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPartnerConfigurationsResponse, PostManagementV1PartnerConfigurationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of keys used to configure features for the partners that are available to your organization. You configure the values for each of these keys with the Update configurations API.

:::warning

When you configure a partner feature, you must provide values for all keys associated with that feature from this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

:::

A configuration key may appear for multiple features. **You must provide a value for each feature.**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_configurations.with_raw_response.post_management_v1_partner_configurations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnerConfigurationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnerConfigurationsErrorBody
```

**Async**

```python
result = await async_client.partner_configurations.with_raw_response.post_management_v1_partner_configurations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnerConfigurationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnerConfigurationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListPartnerConfigurationsRequest](applike/models/list_partner_configurations_request.py) \| [ListPartnerConfigurationsRequestDict](applike/models/list_partner_configurations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[ListPartnerConfigurationsResponse](applike/models/list_partner_configurations_response.py), [PostManagementV1PartnerConfigurationsErrorBody](applike/errors/post_management_v1_partner_configurations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPartnerConfigurationsResponse](applike/models/list_partner_configurations_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1PartnerConfigurationsErrorBody](applike/errors/post_management_v1_partner_configurations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_management_v1_partner_configuration_by_feature(feature: str, *, body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PartnerConfigurationFeatureOutput], PutManagementV1PartnerConfigurationByFeatureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configure a feature for a given app and partner.

:::warning

You must provide values for all keys listed by List partner configurations.

:::

:::info

For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. `P1DT0H0M`

:::

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_configurations.with_raw_response.put_management_v1_partner_configuration_by_feature(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PartnerConfigurationFeatureOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutManagementV1PartnerConfigurationByFeatureErrorBody
```

**Async**

```python
result = await async_client.partner_configurations.with_raw_response.put_management_v1_partner_configuration_by_feature(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PartnerConfigurationFeatureOutput]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutManagementV1PartnerConfigurationByFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpsertPartnerConfigurationFeaturesRequest](applike/models/upsert_partner_configuration_features_request.py) \| [UpsertPartnerConfigurationFeaturesRequestDict](applike/models/upsert_partner_configuration_features_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;list&#91;[PartnerConfigurationFeatureOutput](applike/models/partner_configuration_feature_output.py)&#93;, [PutManagementV1PartnerConfigurationByFeatureErrorBody](applike/errors/put_management_v1_partner_configuration_by_feature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PartnerConfigurationFeatureOutput](applike/models/partner_configuration_feature_output.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[PutManagementV1PartnerConfigurationByFeatureErrorBody](applike/errors/put_management_v1_partner_configuration_by_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Partners

> Source: [Partners](applike/apis/partners.py)

<details>
<summary><code>def post_management_v1_partners(*, body: ListPartnersRequest | ListPartnersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPartnersResponse, PostManagementV1PartnersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of partners available to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partners.with_raw_response.post_management_v1_partners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnersErrorBody
```

**Async**

```python
result = await async_client.partners.with_raw_response.post_management_v1_partners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPartnersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostManagementV1PartnersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListPartnersRequest](applike/models/list_partners_request.py) \| [ListPartnersRequestDict](applike/models/list_partners_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](applike/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](applike/core/results.py)&#91;[ListPartnersResponse](applike/models/list_partners_response.py), [PostManagementV1PartnersErrorBody](applike/errors/post_management_v1_partners_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPartnersResponse](applike/models/list_partners_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostManagementV1PartnersErrorBody](applike/errors/post_management_v1_partners_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](applike/models/error_response.py)</code> |
| 401 | <code>[RawError](applike/core/results.py)</code> |
| anything unmapped | <code>[RawError](applike/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

