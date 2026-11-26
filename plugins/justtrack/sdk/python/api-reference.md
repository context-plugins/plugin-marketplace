# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [JusttrackClient](justtrack/client.py)

## AppEvents

> Source: [AppEvents](justtrack/apis/app_events.py)

<details>
<summary><code>def post_app_event_batch(body: list[AppEventBatch | AppEventBatchDict], *, request_options: RequestOptionsOrDict | None = None) -> list[BatchErrorResponse]</code></summary>

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
try:
    response = client.app_events.post_app_event_batch(
        [
            AppEventBatch(
                batch_id=UUID("00000000-0000-0000-0000-000000000000"),
                app=App(store_id="some example string"),
                user=User(id="some example string"),
                events=[AppEvent(unit=Unit.COUNT)],
            ),
        ],
    )
    # TODO: Handle 'response' of type list[BatchErrorResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAppEventBatchErrorBody
```

**Async**

```python
try:
    response = await async_client.app_events.post_app_event_batch(
        [
            AppEventBatch(
                batch_id=UUID("00000000-0000-0000-0000-000000000000"),
                app=App(store_id="some example string"),
                user=User(id="some example string"),
                events=[AppEvent(unit=Unit.COUNT)],
            ),
        ],
    )
    # TODO: Handle 'response' of type list[BatchErrorResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAppEventBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[AppEventBatch](justtrack/models/app_event_batch.py) \| [AppEventBatchDict](justtrack/models/app_event_batch.py)&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[BatchErrorResponse](justtrack/models/batch_error_response.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostAppEventBatchErrorBody](justtrack/errors/post_app_event_batch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 502 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AppPartnerConnectionApi

> Source: [AppPartnerConnectionApi](justtrack/apis/app_partner_connection_api.py)

<details>
<summary><code>def get_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, request_options: RequestOptionsOrDict | None = None) -> AppPartnerConnection</code></summary>

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
try:
    response = client.app_partner_connection_api.get_management_v1_app_by_app_id_connection_by_partner_id(1, 1)
    # TODO: Handle 'response' of type AppPartnerConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

**Async**

```python
try:
    response = await async_client.app_partner_connection_api.get_management_v1_app_by_app_id_connection_by_partner_id(
        1, 1
    )
    # TODO: Handle 'response' of type AppPartnerConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppPartnerConnection](justtrack/models/app_partner_connection.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody](justtrack/errors/get_management_v1_app_by_app_id_connection_by_partner_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401, 404 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, body: AppPartnerConnection | AppPartnerConnectionDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AppPartnerConnection</code></summary>

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
try:
    response = client.app_partner_connection_api.put_management_v1_app_by_app_id_connection_by_partner_id(1, 1)
    # TODO: Handle 'response' of type AppPartnerConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody
```

**Async**

```python
try:
    response = await async_client.app_partner_connection_api.put_management_v1_app_by_app_id_connection_by_partner_id(
        1, 1
    )
    # TODO: Handle 'response' of type AppPartnerConnection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody
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
| <code>body</code> | <code>[AppPartnerConnection](justtrack/models/app_partner_connection.py) \| [AppPartnerConnectionDict](justtrack/models/app_partner_connection.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppPartnerConnection](justtrack/models/app_partner_connection.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody](justtrack/errors/put_management_v1_app_by_app_id_connection_by_partner_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Apps

> Source: [Apps](justtrack/apis/apps.py)

<details>
<summary><code>def post_management_v1_app(*, body: CreateAppRequest | CreateAppRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AppOutput</code></summary>

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
try:
    response = client.apps.post_management_v1_app()
    # TODO: Handle 'response' of type AppOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1AppErrorBody
```

**Async**

```python
try:
    response = await async_client.apps.post_management_v1_app()
    # TODO: Handle 'response' of type AppOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1AppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAppRequest](justtrack/models/create_app_request.py) \| [CreateAppRequestDict](justtrack/models/create_app_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppOutput](justtrack/models/app_output.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1AppErrorBody](justtrack/errors/post_management_v1_app_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_apps(*, body: ListAppsRequest | ListAppsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAppsResponse</code></summary>

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
try:
    response = client.apps.post_management_v1_apps()
    # TODO: Handle 'response' of type ListAppsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1AppsErrorBody
```

**Async**

```python
try:
    response = await async_client.apps.post_management_v1_apps()
    # TODO: Handle 'response' of type ListAppsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1AppsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListAppsRequest](justtrack/models/list_apps_request.py) \| [ListAppsRequestDict](justtrack/models/list_apps_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAppsResponse](justtrack/models/list_apps_response.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1AppsErrorBody](justtrack/errors/post_management_v1_apps_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Bids

> Source: [Bids](justtrack/apis/bids.py)

<details>
<summary><code>def post_management_v1_bids(*, body: ListBidsRequest | ListBidsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBidsResponse</code></summary>

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
try:
    response = client.bids.post_management_v1_bids()
    # TODO: Handle 'response' of type ListBidsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1BidsErrorBody
```

**Async**

```python
try:
    response = await async_client.bids.post_management_v1_bids()
    # TODO: Handle 'response' of type ListBidsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1BidsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListBidsRequest](justtrack/models/list_bids_request.py) \| [ListBidsRequestDict](justtrack/models/list_bids_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBidsResponse](justtrack/models/list_bids_response.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1BidsErrorBody](justtrack/errors/post_management_v1_bids_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_bids_upload(*, body: list[UploadBidInput | UploadBidInputDict] | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.bids.post_management_v1_bids_upload()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1BidsUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.bids.post_management_v1_bids_upload()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1BidsUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UploadBidInput](justtrack/models/upload_bid_input.py) \| [UploadBidInputDict](justtrack/models/upload_bid_input.py)&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Bids are accepted and will be processed asynchronously

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1BidsUploadErrorBody](justtrack/errors/post_management_v1_bids_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[UploadBidsInvalidBidResponse](justtrack/models/upload_bids_invalid_bid_response.py)</code> |
| 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](justtrack/apis/campaigns.py)

<details>
<summary><code>def post_management_v1_campaign(*, body: CreateCampaignRequest | CreateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CampaignOutput</code></summary>

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
try:
    response = client.campaigns.post_management_v1_campaign()
    # TODO: Handle 'response' of type CampaignOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1CampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.post_management_v1_campaign()
    # TODO: Handle 'response' of type CampaignOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1CampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCampaignRequest](justtrack/models/create_campaign_request.py) \| [CreateCampaignRequestDict](justtrack/models/create_campaign_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignOutput](justtrack/models/campaign_output.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1CampaignErrorBody](justtrack/errors/post_management_v1_campaign_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_campaigns(*, body: ListCampaignsRequest | ListCampaignsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CampaignOutput</code></summary>

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
try:
    response = client.campaigns.post_management_v1_campaigns()
    # TODO: Handle 'response' of type CampaignOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1CampaignsErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.post_management_v1_campaigns()
    # TODO: Handle 'response' of type CampaignOutput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1CampaignsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListCampaignsRequest](justtrack/models/list_campaigns_request.py) \| [ListCampaignsRequestDict](justtrack/models/list_campaigns_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignOutput](justtrack/models/campaign_output.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1CampaignsErrorBody](justtrack/errors/post_management_v1_campaigns_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerConfigurations

> Source: [PartnerConfigurations](justtrack/apis/partner_configurations.py)

<details>
<summary><code>def post_management_v1_partner_configuration_by_feature(feature: str, *, body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPartnerConfigurationFeaturesResponse</code></summary>

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
try:
    response = client.partner_configurations.post_management_v1_partner_configuration_by_feature("some example string")
    # TODO: Handle 'response' of type ListPartnerConfigurationFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnerConfigurationByFeatureErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_configurations.post_management_v1_partner_configuration_by_feature(
        "some example string"
    )
    # TODO: Handle 'response' of type ListPartnerConfigurationFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnerConfigurationByFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListPartnerConfigurationFeaturesRequest](justtrack/models/list_partner_configuration_features_request.py) \| [ListPartnerConfigurationFeaturesRequestDict](justtrack/models/list_partner_configuration_features_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnerConfigurationFeaturesResponse](justtrack/models/list_partner_configuration_features_response.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1PartnerConfigurationByFeatureErrorBody](justtrack/errors/post_management_v1_partner_configuration_by_feature_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_management_v1_partner_configurations(*, body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPartnerConfigurationsResponse</code></summary>

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
try:
    response = client.partner_configurations.post_management_v1_partner_configurations()
    # TODO: Handle 'response' of type ListPartnerConfigurationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnerConfigurationsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_configurations.post_management_v1_partner_configurations()
    # TODO: Handle 'response' of type ListPartnerConfigurationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnerConfigurationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListPartnerConfigurationsRequest](justtrack/models/list_partner_configurations_request.py) \| [ListPartnerConfigurationsRequestDict](justtrack/models/list_partner_configurations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnerConfigurationsResponse](justtrack/models/list_partner_configurations_response.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1PartnerConfigurationsErrorBody](justtrack/errors/post_management_v1_partner_configurations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_management_v1_partner_configuration_by_feature(feature: str, *, body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> list[PartnerConfigurationFeatureOutput]</code></summary>

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
try:
    response = client.partner_configurations.put_management_v1_partner_configuration_by_feature("some example string")
    # TODO: Handle 'response' of type list[PartnerConfigurationFeatureOutput]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutManagementV1PartnerConfigurationByFeatureErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_configurations.put_management_v1_partner_configuration_by_feature(
        "some example string"
    )
    # TODO: Handle 'response' of type list[PartnerConfigurationFeatureOutput]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutManagementV1PartnerConfigurationByFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpsertPartnerConfigurationFeaturesRequest](justtrack/models/upsert_partner_configuration_features_request.py) \| [UpsertPartnerConfigurationFeaturesRequestDict](justtrack/models/upsert_partner_configuration_features_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[PartnerConfigurationFeatureOutput](justtrack/models/partner_configuration_feature_output.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PutManagementV1PartnerConfigurationByFeatureErrorBody](justtrack/errors/put_management_v1_partner_configuration_by_feature_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401, 403 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Partners

> Source: [Partners](justtrack/apis/partners.py)

<details>
<summary><code>def post_management_v1_partners(*, body: ListPartnersRequest | ListPartnersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPartnersResponse</code></summary>

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
try:
    response = client.partners.post_management_v1_partners()
    # TODO: Handle 'response' of type ListPartnersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnersErrorBody
```

**Async**

```python
try:
    response = await async_client.partners.post_management_v1_partners()
    # TODO: Handle 'response' of type ListPartnersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostManagementV1PartnersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListPartnersRequest](justtrack/models/list_partners_request.py) \| [ListPartnersRequestDict](justtrack/models/list_partners_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](justtrack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnersResponse](justtrack/models/list_partners_response.py)</code> -- OK

**OnError**: <code>[ApiError](justtrack/core/exceptions.py)&#91;[PostManagementV1PartnersErrorBody](justtrack/errors/post_management_v1_partners_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](justtrack/models/error_response.py)</code> |
| 401 | <code>[RawError](justtrack/core/results.py)</code> |
| anything unmapped | <code>[RawError](justtrack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

