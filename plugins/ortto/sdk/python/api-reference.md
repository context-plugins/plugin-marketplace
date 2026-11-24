# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [OrttoClient](ortto/client.py)

## Accounts

> Source: [Accounts](ortto/apis/accounts.py)

<details>
<summary><code>def merge_accounts(body: AccountsMergeRequest | AccountsMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates accounts (previously called organizations) using the same merge semantics as people.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.accounts.merge_accounts(AccountsMergeRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MergeAccountsErrorBody
```

**Async**

```python
try:
    await async_client.accounts.merge_accounts(AccountsMergeRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MergeAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountsMergeRequest](ortto/models/accounts_merge_request.py) \| [AccountsMergeRequestDict](ortto/models/accounts_merge_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[MergeAccountsErrorBody](ortto/errors/merge_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Activities

> Source: [Activities](ortto/apis/activities.py)

<details>
<summary><code>def create_activities(body: ActivitiesCreateRequest | ActivitiesCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom activity definition and may create or update the associated person via merge_by or person_id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.activities.create_activities(ActivitiesCreateRequest(activities=[Activity()]))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateActivitiesErrorBody
```

**Async**

```python
try:
    await async_client.activities.create_activities(ActivitiesCreateRequest(activities=[Activity()]))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateActivitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ActivitiesCreateRequest](ortto/models/activities_create_request.py) \| [ActivitiesCreateRequestDict](ortto/models/activities_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[CreateActivitiesErrorBody](ortto/errors/create_activities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](ortto/apis/campaigns.py)

<details>
<summary><code>def get_campaign_calendar(body: CampaignCalendarRequest | CampaignCalendarRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.campaigns.get_campaign_calendar(CampaignCalendarRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignCalendarErrorBody
```

**Async**

```python
try:
    await async_client.campaigns.get_campaign_calendar(CampaignCalendarRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignCalendarErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CampaignCalendarRequest](ortto/models/campaign_calendar_request.py) \| [CampaignCalendarRequestDict](ortto/models/campaign_calendar_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[GetCampaignCalendarErrorBody](ortto/errors/get_campaign_calendar_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_campaign_report(body: CampaignReportsGetRequest | CampaignReportsGetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.campaigns.get_campaign_report(CampaignReportsGetRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignReportErrorBody
```

**Async**

```python
try:
    await async_client.campaigns.get_campaign_report(CampaignReportsGetRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCampaignReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CampaignReportsGetRequest](ortto/models/campaign_reports_get_request.py) \| [CampaignReportsGetRequestDict](ortto/models/campaign_reports_get_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[GetCampaignReportErrorBody](ortto/errors/get_campaign_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](ortto/apis/people.py)

<details>
<summary><code>def delete_people(body: PersonDeleteRequest | PersonDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.people.delete_people(PersonDeleteRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePeopleErrorBody
```

**Async**

```python
try:
    await async_client.people.delete_people(PersonDeleteRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PersonDeleteRequest](ortto/models/person_delete_request.py) \| [PersonDeleteRequestDict](ortto/models/person_delete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[DeletePeopleErrorBody](ortto/errors/delete_people_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_people(body: PersonGetRequest | PersonGetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PersonGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.people.get_people(PersonGetRequest())
    # TODO: Handle 'response' of type PersonGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPeopleErrorBody
```

**Async**

```python
try:
    response = await async_client.people.get_people(PersonGetRequest())
    # TODO: Handle 'response' of type PersonGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PersonGetRequest](ortto/models/person_get_request.py) \| [PersonGetRequestDict](ortto/models/person_get_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonGetResponse](ortto/models/person_get_response.py)</code> -- Matching people.

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[GetPeopleErrorBody](ortto/errors/get_people_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_people_by_ids(body: PersonGetByIdsRequest | PersonGetByIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PersonGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.people.get_people_by_ids(PersonGetByIdsRequest())
    # TODO: Handle 'response' of type PersonGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPeopleByIdsErrorBody
```

**Async**

```python
try:
    response = await async_client.people.get_people_by_ids(PersonGetByIdsRequest())
    # TODO: Handle 'response' of type PersonGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPeopleByIdsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PersonGetByIdsRequest](ortto/models/person_get_by_ids_request.py) \| [PersonGetByIdsRequestDict](ortto/models/person_get_by_ids_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonGetResponse](ortto/models/person_get_response.py)</code> -- Matching people.

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[GetPeopleByIdsErrorBody](ortto/errors/get_people_by_ids_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def merge_people(body: PersonMergeRequest | PersonMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PersonMergeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates up to 100 people in a single request. Matching of existing records is controlled with merge_by, merge_strategy, and find_strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.people.merge_people(PersonMergeRequest(people=[PersonInput()], merge_by=["some example string"]))
    # TODO: Handle 'response' of type PersonMergeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MergePeopleErrorBody
```

**Async**

```python
try:
    response = await async_client.people.merge_people(
        PersonMergeRequest(people=[PersonInput()], merge_by=["some example string"])
    )
    # TODO: Handle 'response' of type PersonMergeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MergePeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PersonMergeRequest](ortto/models/person_merge_request.py) \| [PersonMergeRequestDict](ortto/models/person_merge_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonMergeResponse](ortto/models/person_merge_response.py)</code> -- People created or updated.

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[MergePeopleErrorBody](ortto/errors/merge_people_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](ortto/apis/tags.py)

<details>
<summary><code>def get_tags(*, body: TagsGetRequest | TagsGetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> TagsGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters the result.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.get_tags()
    # TODO: Handle 'response' of type TagsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.get_tags()
    # TODO: Handle 'response' of type TagsGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TagsGetRequest](ortto/models/tags_get_request.py) \| [TagsGetRequestDict](ortto/models/tags_get_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsGetResponse](ortto/models/tags_get_response.py)</code> -- List of tags.

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[GetTagsErrorBody](ortto/errors/get_tags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transactional

> Source: [Transactional](ortto/apis/transactional.py)

<details>
<summary><code>def send_transactional_email(body: TransactionalSendRequest | TransactionalSendRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5 base64-encoded attachments are supported. A successful request returns a 202 Accepted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.transactional.send_transactional_email(TransactionalSendRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTransactionalEmailErrorBody
```

**Async**

```python
try:
    await async_client.transactional.send_transactional_email(TransactionalSendRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTransactionalEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionalSendRequest](ortto/models/transactional_send_request.py) \| [TransactionalSendRequestDict](ortto/models/transactional_send_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[SendTransactionalEmailErrorBody](ortto/errors/send_transactional_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_transactional_sms(body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.transactional.send_transactional_sms(TransactionalSendSmsRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTransactionalSmsErrorBody
```

**Async**

```python
try:
    await async_client.transactional.send_transactional_sms(TransactionalSendSmsRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTransactionalSmsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionalSendSmsRequest](ortto/models/transactional_send_sms_request.py) \| [TransactionalSendSmsRequestDict](ortto/models/transactional_send_sms_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ortto/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](ortto/core/exceptions.py)&#91;[SendTransactionalSmsErrorBody](ortto/errors/send_transactional_sms_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](ortto/models/error.py)</code> |
| anything unmapped | <code>[RawError](ortto/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

