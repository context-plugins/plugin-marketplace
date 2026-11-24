# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GivebutterClient](givebutter/client.py)

## CampaignDiscountCodes

> Source: [CampaignDiscountCodes](givebutter/apis/campaign_discount_codes.py)

<details>
<summary><code>def campaigns_discount_codes_destroy(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.campaign_discount_codes.campaigns_discount_codes_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesDestroyErrorBody
```

**Async**

```python
try:
    await async_client.campaign_discount_codes.campaigns_discount_codes_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>discount_code</code> | <code>int</code> | The discount code ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDiscountCodesDestroyErrorBody](givebutter/errors/campaigns_discount_codes_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[V1CampaignsDiscountCodes422Error1](givebutter/models/v1_campaigns_discount_codes422_error1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_discount_codes_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> V1CampaignsDiscountCodesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_discount_codes.campaigns_discount_codes_index(1)
    # TODO: Handle 'response' of type V1CampaignsDiscountCodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_discount_codes.campaigns_discount_codes_index(1)
    # TODO: Handle 'response' of type V1CampaignsDiscountCodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsDiscountCodesResponse](givebutter/models/v1_campaigns_discount_codes_response.py)</code> -- Paginated set of `CampaignDiscountCodeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDiscountCodesIndexErrorBody](givebutter/errors/campaigns_discount_codes_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_discount_codes_show(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignDiscountCodeResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_discount_codes.campaigns_discount_codes_show(1, 1)
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_discount_codes.campaigns_discount_codes_show(1, 1)
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>discount_code</code> | <code>int</code> | The discount code ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDiscountCodesShowErrorBody](givebutter/errors/campaigns_discount_codes_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_discount_codes_store(campaign: int, body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CampaignDiscountCodeResource</code></summary>

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
    response = client.campaign_discount_codes.campaigns_discount_codes_store(
        1,
        StoreCampaignDiscountCodeRequest(
            type_=DiscountCodeType.PERCENTAGE, active=True, amount=1.5, code="some example string"
        ),
    )
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_discount_codes.campaigns_discount_codes_store(
        1,
        StoreCampaignDiscountCodeRequest(
            type_=DiscountCodeType.PERCENTAGE, active=True, amount=1.5, code="some example string"
        ),
    )
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>body</code> | <code>[StoreCampaignDiscountCodeRequest](givebutter/models/store_campaign_discount_code_request.py) \| [StoreCampaignDiscountCodeRequestDict](givebutter/models/store_campaign_discount_code_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDiscountCodesStoreErrorBody](givebutter/errors/campaigns_discount_codes_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_discount_codes_update(campaign: int, discount_code: int, body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CampaignDiscountCodeResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_discount_codes.campaigns_discount_codes_update(
        1, 1, UpdateCampaignDiscountCodeRequest(amount=1.5)
    )
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_discount_codes.campaigns_discount_codes_update(
        1, 1, UpdateCampaignDiscountCodeRequest(amount=1.5)
    )
    # TODO: Handle 'response' of type CampaignDiscountCodeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDiscountCodesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>discount_code</code> | <code>int</code> | The discount code ID |
| <code>body</code> | <code>[UpdateCampaignDiscountCodeRequest](givebutter/models/update_campaign_discount_code_request.py) \| [UpdateCampaignDiscountCodeRequestDict](givebutter/models/update_campaign_discount_code_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDiscountCodesUpdateErrorBody](givebutter/errors/campaigns_discount_codes_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignMembers

> Source: [CampaignMembers](givebutter/apis/campaign_members.py)

<details>
<summary><code>def campaigns_members_destroy(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_members.campaigns_members_destroy(1, 1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersDestroyErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_members.campaigns_members_destroy(1, 1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>member</code> | <code>int</code> | The member ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code>

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsMembersDestroyErrorBody](givebutter/errors/campaigns_members_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_members_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> V1CampaignsMembersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_members.campaigns_members_index(1)
    # TODO: Handle 'response' of type V1CampaignsMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_members.campaigns_members_index(1)
    # TODO: Handle 'response' of type V1CampaignsMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsMembersResponse](givebutter/models/v1_campaigns_members_response.py)</code> -- Paginated set of `CampaignMemberResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsMembersIndexErrorBody](givebutter/errors/campaigns_members_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_members_show(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignMemberResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_members.campaigns_members_show(1, 1)
    # TODO: Handle 'response' of type CampaignMemberResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersShowErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_members.campaigns_members_show(1, 1)
    # TODO: Handle 'response' of type CampaignMemberResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsMembersShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>member</code> | <code>int</code> | The member ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignMemberResource](givebutter/models/campaign_member_resource.py)</code> -- `CampaignMemberResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsMembersShowErrorBody](givebutter/errors/campaigns_members_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTeams

> Source: [CampaignTeams](givebutter/apis/campaign_teams.py)

<details>
<summary><code>def campaigns_teams_destroy(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.campaign_teams.campaigns_teams_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.campaign_teams.campaigns_teams_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>team</code> | <code>int</code> | The team ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsTeamsDestroyErrorBody](givebutter/errors/campaigns_teams_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_teams_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> V1CampaignsTeamsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_teams.campaigns_teams_index(1)
    # TODO: Handle 'response' of type V1CampaignsTeamsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_teams.campaigns_teams_index(1)
    # TODO: Handle 'response' of type V1CampaignsTeamsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsTeamsResponse](givebutter/models/v1_campaigns_teams_response.py)</code> -- Paginated set of `CampaignTeamResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsTeamsIndexErrorBody](givebutter/errors/campaigns_teams_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_teams_show(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignTeamResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_teams.campaigns_teams_show(1, 1)
    # TODO: Handle 'response' of type CampaignTeamResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_teams.campaigns_teams_show(1, 1)
    # TODO: Handle 'response' of type CampaignTeamResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsTeamsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>team</code> | <code>int</code> | The team ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignTeamResource](givebutter/models/campaign_team_resource.py)</code> -- `CampaignTeamResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsTeamsShowErrorBody](givebutter/errors/campaigns_teams_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTickets

> Source: [CampaignTickets](givebutter/apis/campaign_tickets.py)

<details>
<summary><code>def campaigns_items_tickets_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> V1CampaignsItemsTicketsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_tickets.campaigns_items_tickets_index(1)
    # TODO: Handle 'response' of type V1CampaignsItemsTicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_tickets.campaigns_items_tickets_index(1)
    # TODO: Handle 'response' of type V1CampaignsItemsTicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsItemsTicketsResponse](givebutter/models/v1_campaigns_items_tickets_response.py)</code> -- Paginated set of `CampaignItemTicketResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsItemsTicketsIndexErrorBody](givebutter/errors/campaigns_items_tickets_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_items_tickets_show(campaign: int, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignItemTicketResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaign_tickets.campaigns_items_tickets_show(1, 1)
    # TODO: Handle 'response' of type CampaignItemTicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_tickets.campaigns_items_tickets_show(1, 1)
    # TODO: Handle 'response' of type CampaignItemTicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>ticket_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py)</code> -- `CampaignItemTicketResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsItemsTicketsShowErrorBody](givebutter/errors/campaigns_items_tickets_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_items_tickets_store(campaign: int, body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CampaignItemTicketResource</code></summary>

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
    response = client.campaign_tickets.campaigns_items_tickets_store(
        1, StoreCampaignItemTicketRequest(name="some example string", price=1.5)
    )
    # TODO: Handle 'response' of type CampaignItemTicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.campaign_tickets.campaigns_items_tickets_store(
        1, StoreCampaignItemTicketRequest(name="some example string", price=1.5)
    )
    # TODO: Handle 'response' of type CampaignItemTicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsItemsTicketsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>body</code> | <code>[StoreCampaignItemTicketRequest](givebutter/models/store_campaign_item_ticket_request.py) \| [StoreCampaignItemTicketRequestDict](givebutter/models/store_campaign_item_ticket_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py)</code> -- `CampaignItemTicketResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsItemsTicketsStoreErrorBody](givebutter/errors/campaigns_items_tickets_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](givebutter/apis/campaigns.py)

<details>
<summary><code>def campaigns_destroy(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.campaigns.campaigns_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.campaigns.campaigns_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsDestroyErrorBody](givebutter/errors/campaigns_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 409 | <code>[V1Campaigns409Error1](givebutter/models/v1_campaigns409_error1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_index(*, scope: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CampaignsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.campaigns_index()
    # TODO: Handle 'response' of type V1CampaignsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.campaigns.campaigns_index()
    # TODO: Handle 'response' of type V1CampaignsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsResponse](givebutter/models/v1_campaigns_response.py)</code> -- Paginated set of `CampaignResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.campaigns_show(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.campaigns_show(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsShowErrorBody](givebutter/errors/campaigns_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_store(body: StoreCampaignRequest | StoreCampaignRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CampaignResource</code></summary>

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
    response = client.campaigns.campaigns_store(StoreCampaignRequest(type_=Type.GENERAL, title="some example string"))
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.campaigns_store(
        StoreCampaignRequest(type_=Type.GENERAL, title="some example string")
    )
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StoreCampaignRequest](givebutter/models/store_campaign_request.py) \| [StoreCampaignRequestDict](givebutter/models/store_campaign_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsStoreErrorBody](givebutter/errors/campaigns_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_update(campaign: int, *, body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CampaignResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.campaigns.campaigns_update(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.campaigns.campaigns_update(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CampaignsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | The campaign ID |
| <code>body</code> | <code>[UpdateCampaignRequest](givebutter/models/update_campaign_request.py) \| [UpdateCampaignRequestDict](givebutter/models/update_campaign_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[CampaignsUpdateErrorBody](givebutter/errors/campaigns_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContactActivities

> Source: [ContactActivities](givebutter/apis/contact_activities.py)

<details>
<summary><code>def contacts_activities_destroy(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.contact_activities.contacts_activities_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesDestroyErrorBody
```

**Async**

```python
try:
    await async_client.contact_activities.contacts_activities_destroy(1, 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>activity</code> | <code>int</code> | The activity ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsActivitiesDestroyErrorBody](givebutter/errors/contacts_activities_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_activities_index(contact: int, *, type_: ContactActivityTypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ContactsActivitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_activities.contacts_activities_index(1)
    # TODO: Handle 'response' of type V1ContactsActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_activities.contacts_activities_index(1)
    # TODO: Handle 'response' of type V1ContactsActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>type_</code> | <code>[ContactActivityTypeEnumOrStr](givebutter/models/enums/contact_activity_type_enum.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactsActivitiesResponse](givebutter/models/v1_contacts_activities_response.py)</code> -- Paginated set of `ContactActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsActivitiesIndexErrorBody](givebutter/errors/contacts_activities_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_activities_show(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactActivityResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_activities.contacts_activities_show(1, 1)
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_activities.contacts_activities_show(1, 1)
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>activity</code> | <code>int</code> | The activity ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsActivitiesShowErrorBody](givebutter/errors/contacts_activities_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_activities_store(contact: int, body: StoreContactActivityRequest | StoreContactActivityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactActivityResource</code></summary>

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
    response = client.contact_activities.contacts_activities_store(
        1, StoreContactActivityRequest(type_=TypeGivebutterApiDocumentationContactActivitiesApi.EMAIL)
    )
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_activities.contacts_activities_store(
        1, StoreContactActivityRequest(type_=TypeGivebutterApiDocumentationContactActivitiesApi.EMAIL)
    )
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>body</code> | <code>[StoreContactActivityRequest](givebutter/models/store_contact_activity_request.py) \| [StoreContactActivityRequestDict](givebutter/models/store_contact_activity_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsActivitiesStoreErrorBody](givebutter/errors/contacts_activities_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_activities_update(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactActivityResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_activities.contacts_activities_update(1, 1)
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_activities.contacts_activities_update(1, 1)
    # TODO: Handle 'response' of type ContactActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsActivitiesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>activity</code> | <code>int</code> | The activity ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsActivitiesUpdateErrorBody](givebutter/errors/contacts_activities_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContactTags

> Source: [ContactTags](givebutter/apis/contact_tags.py)

<details>
<summary><code>def contact_tag_destroy(contact: int, body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

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
    response = client.contact_tags.contact_tag_destroy(1, V1ContactsTagsRemoveRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagDestroyErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_tags.contact_tag_destroy(
        1, V1ContactsTagsRemoveRequest(tags=["some example string"])
    )
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsRemoveRequest](givebutter/models/v1_contacts_tags_remove_request.py) \| [V1ContactsTagsRemoveRequestDict](givebutter/models/v1_contacts_tags_remove_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactTagDestroyErrorBody](givebutter/errors/contact_tag_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_tag_store(contact: int, body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

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
    response = client.contact_tags.contact_tag_store(1, V1ContactsTagsAddRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_tags.contact_tag_store(
        1, V1ContactsTagsAddRequest(tags=["some example string"])
    )
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsAddRequest](givebutter/models/v1_contacts_tags_add_request.py) \| [V1ContactsTagsAddRequestDict](givebutter/models/v1_contacts_tags_add_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactTagStoreErrorBody](givebutter/errors/contact_tag_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_tag_sync(contact: int, body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

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
    response = client.contact_tags.contact_tag_sync(1, V1ContactsTagsSyncRequest(tags=["some example string"]))
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagSyncErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_tags.contact_tag_sync(
        1, V1ContactsTagsSyncRequest(tags=["some example string"])
    )
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactTagSyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>body</code> | <code>[V1ContactsTagsSyncRequest](givebutter/models/v1_contacts_tags_sync_request.py) \| [V1ContactsTagsSyncRequestDict](givebutter/models/v1_contacts_tags_sync_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactTagSyncErrorBody](givebutter/errors/contact_tag_sync_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](givebutter/apis/contacts.py)

<details>
<summary><code>def contact_restore(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PATCH` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts.contact_restore(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactRestoreErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.contact_restore(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactRestoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactRestoreErrorBody](givebutter/errors/contact_restore_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_destroy(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.contacts.contacts_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.contacts.contacts_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsDestroyErrorBody](givebutter/errors/contacts_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_index(*, type_: ContactTypeOrStr | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, total_contributions_min: float | None = None, total_contributions_max: float | None = None, recurring_contributions_min: float | None = None, recurring_contributions_max: float | None = None, tags: str | None = None, sort_by: SortByOrStr | None = None, sort_by_desc: SortByDescOrStr | None = None, email: str | None = None, primary_email: str | None = None, first_name: str | None = None, last_name: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ContactsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts.contacts_index()
    # TODO: Handle 'response' of type V1ContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.contacts_index()
    # TODO: Handle 'response' of type V1ContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[ContactTypeOrStr](givebutter/models/enums/contact_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_contributions_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_contributions_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recurring_contributions_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recurring_contributions_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>tags</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByOrStr](givebutter/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by_desc</code> | <code>[SortByDescOrStr](givebutter/models/enums/sort_by_desc.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>primary_email</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>first_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>last_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactsResponse](givebutter/models/v1_contacts_response.py)</code> -- Paginated set of `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsIndexErrorBody](givebutter/errors/contacts_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_show(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts.contacts_show(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.contacts_show(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsShowErrorBody](givebutter/errors/contacts_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_store(*, body: V1ContactsRequest | V1ContactsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

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
    response = client.contacts.contacts_store()
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.contacts_store()
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ContactsRequest](givebutter/models/v1_contacts_request.py) \| [V1ContactsRequestDict](givebutter/models/v1_contacts_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsStoreErrorBody](givebutter/errors/contacts_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contacts_update(contact: int, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts.contacts_update(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.contacts_update(1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>body</code> | <code>[UpdateContactRequest](givebutter/models/update_contact_request.py) \| [UpdateContactRequestDict](givebutter/models/update_contact_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[ContactsUpdateErrorBody](givebutter/errors/contacts_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Funds

> Source: [Funds](givebutter/apis/funds.py)

<details>
<summary><code>def funds_destroy(fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.funds.funds_destroy("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.funds.funds_destroy("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fund</code> | <code>str \| None</code> | The fund fid |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[FundsDestroyErrorBody](givebutter/errors/funds_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def funds_index(*, request_options: RequestOptionsOrDict | None = None) -> V1FundsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funds.funds_index()
    # TODO: Handle 'response' of type V1FundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.funds.funds_index()
    # TODO: Handle 'response' of type V1FundsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FundsResponse](givebutter/models/v1_funds_response.py)</code> -- Paginated set of `FundResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def funds_show(fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> FundResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funds.funds_show("some example string")
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.funds.funds_show("some example string")
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fund</code> | <code>str \| None</code> | The fund fid |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[FundsShowErrorBody](givebutter/errors/funds_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def funds_store(body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FundResource</code></summary>

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
    response = client.funds.funds_store(V1FundsRequest(name="some example string"))
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.funds.funds_store(V1FundsRequest(name="some example string"))
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1FundsRequest](givebutter/models/v1_funds_request.py) \| [V1FundsRequestDict](givebutter/models/v1_funds_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[FundsStoreErrorBody](givebutter/errors/funds_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def funds_update(fund: str | None, body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FundResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funds.funds_update("some example string", V1FundsRequest(name="some example string"))
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.funds.funds_update("some example string", V1FundsRequest(name="some example string"))
    # TODO: Handle 'response' of type FundResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FundsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fund</code> | <code>str \| None</code> | The fund fid |
| <code>body</code> | <code>[V1FundsRequest](givebutter/models/v1_funds_request.py) \| [V1FundsRequestDict](givebutter/models/v1_funds_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[FundsUpdateErrorBody](givebutter/errors/funds_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HouseholdContacts

> Source: [HouseholdContacts](givebutter/apis/household_contacts.py)

<details>
<summary><code>def households_contacts_destroy(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> AppHttpResourcesApiHouseholdResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.household_contacts.households_contacts_destroy(1, 1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsDestroyErrorBody
```

**Async**

```python
try:
    response = await async_client.household_contacts.households_contacts_destroy(1, 1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsContactsDestroyErrorBody](givebutter/errors/households_contacts_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_contacts_index(household: int, *, request_options: RequestOptionsOrDict | None = None) -> V1HouseholdsContactsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.household_contacts.households_contacts_index(1)
    # TODO: Handle 'response' of type V1HouseholdsContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.household_contacts.households_contacts_index(1)
    # TODO: Handle 'response' of type V1HouseholdsContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HouseholdsContactsResponse](givebutter/models/v1_households_contacts_response.py)</code> -- Paginated set of `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsContactsIndexErrorBody](givebutter/errors/households_contacts_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_contacts_show(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.household_contacts.households_contacts_show(1, 1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.household_contacts.households_contacts_show(1, 1)
    # TODO: Handle 'response' of type ContactResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>contact</code> | <code>int</code> | The contact ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsContactsShowErrorBody](givebutter/errors/households_contacts_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_contacts_store(household: int, body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AppHttpResourcesApiHouseholdResource</code></summary>

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
    response = client.household_contacts.households_contacts_store(1, V1HouseholdsContactsRequest(contact_id=1))
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.household_contacts.households_contacts_store(
        1, V1HouseholdsContactsRequest(contact_id=1)
    )
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsContactsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>body</code> | <code>[V1HouseholdsContactsRequest](givebutter/models/v1_households_contacts_request.py) \| [V1HouseholdsContactsRequestDict](givebutter/models/v1_households_contacts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsContactsStoreErrorBody](givebutter/errors/households_contacts_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Households

> Source: [Households](givebutter/apis/households.py)

<details>
<summary><code>def households_destroy(household: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.households.households_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.households.households_destroy(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsDestroyErrorBody](givebutter/errors/households_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_index(*, head_contact_id: str | None = None, contacts: str | None = None, query: str | None = None, sort_by: str | None = None, sort_by_desc: str | None = None, page: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> list[HouseholdResource]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.households.households_index()
    # TODO: Handle 'response' of type list[HouseholdResource]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.households.households_index()
    # TODO: Handle 'response' of type list[HouseholdResource]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>head_contact_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>contacts</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by_desc</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[HouseholdResource](givebutter/models/household_resource.py)&#93;</code> -- Array of `HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsIndexErrorBody](givebutter/errors/households_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_show(household: int, *, request_options: RequestOptionsOrDict | None = None) -> AppHttpResourcesApiHouseholdResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.households.households_show(1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.households.households_show(1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsShowErrorBody](givebutter/errors/households_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_store(body: HouseholdStoreRequest | HouseholdStoreRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AppHttpResourcesApiHouseholdResource</code></summary>

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
    response = client.households.households_store(HouseholdStoreRequest(name="some example string"))
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.households.households_store(HouseholdStoreRequest(name="some example string"))
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[HouseholdStoreRequest](givebutter/models/household_store_request.py) \| [HouseholdStoreRequestDict](givebutter/models/household_store_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsStoreErrorBody](givebutter/errors/households_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def households_update(household: int, *, body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AppHttpResourcesApiHouseholdResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.households.households_update(1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.households.households_update(1)
    # TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HouseholdsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>household</code> | <code>int</code> | The household ID |
| <code>body</code> | <code>[HouseholdUpdateRequest](givebutter/models/household_update_request.py) \| [HouseholdUpdateRequestDict](givebutter/models/household_update_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[HouseholdsUpdateErrorBody](givebutter/errors/households_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](givebutter/apis/messages.py)

<details>
<summary><code>def messages_index(*, request_options: RequestOptionsOrDict | None = None) -> V1MessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messages.messages_index()
    # TODO: Handle 'response' of type V1MessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.messages.messages_index()
    # TODO: Handle 'response' of type V1MessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MessagesResponse](givebutter/models/v1_messages_response.py)</code> -- Paginated set of `MessageResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def messages_show(message: int, *, request_options: RequestOptionsOrDict | None = None) -> MessageResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messages.messages_show(1)
    # TODO: Handle 'response' of type MessageResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MessagesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.messages.messages_show(1)
    # TODO: Handle 'response' of type MessageResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MessagesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>message</code> | <code>int</code> | The message ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResource](givebutter/models/message_resource.py)</code> -- `MessageResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[MessagesShowErrorBody](givebutter/errors/messages_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](givebutter/apis/payouts.py)

<details>
<summary><code>def payouts_index(*, request_options: RequestOptionsOrDict | None = None) -> V1PayoutsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payouts.payouts_index()
    # TODO: Handle 'response' of type V1PayoutsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.payouts.payouts_index()
    # TODO: Handle 'response' of type V1PayoutsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PayoutsResponse](givebutter/models/v1_payouts_response.py)</code> -- Paginated set of `PayoutResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def payouts_show(payout: str, *, request_options: RequestOptionsOrDict | None = None) -> PayoutResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payouts.payouts_show("some example string")
    # TODO: Handle 'response' of type PayoutResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PayoutsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.payouts.payouts_show("some example string")
    # TODO: Handle 'response' of type PayoutResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PayoutsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payout</code> | <code>str</code> | The payout number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutResource](givebutter/models/payout_resource.py)</code> -- `PayoutResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[PayoutsShowErrorBody](givebutter/errors/payouts_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pledges

> Source: [Pledges](givebutter/apis/pledges.py)

<details>
<summary><code>def pledges_index(*, request_options: RequestOptionsOrDict | None = None) -> V1PledgesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pledges.pledges_index()
    # TODO: Handle 'response' of type V1PledgesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pledges.pledges_index()
    # TODO: Handle 'response' of type V1PledgesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PledgesResponse](givebutter/models/v1_pledges_response.py)</code> -- Paginated set of `PledgeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pledges_show(pledge: int, *, request_options: RequestOptionsOrDict | None = None) -> PledgeResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pledges.pledges_show(1)
    # TODO: Handle 'response' of type PledgeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PledgesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.pledges.pledges_show(1)
    # TODO: Handle 'response' of type PledgeResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PledgesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pledge</code> | <code>int</code> | The pledge ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PledgeResource](givebutter/models/pledge_resource.py)</code> -- `PledgeResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[PledgesShowErrorBody](givebutter/errors/pledges_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringPlans

> Source: [RecurringPlans](givebutter/apis/recurring_plans.py)

<details>
<summary><code>def plans_index(*, contacts: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PlansResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_plans.plans_index()
    # TODO: Handle 'response' of type V1PlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlansIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_plans.plans_index()
    # TODO: Handle 'response' of type V1PlansResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlansIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contacts</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlansResponse](givebutter/models/v1_plans_response.py)</code> -- Paginated set of `RecurringPlanResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[PlansIndexErrorBody](givebutter/errors/plans_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def plans_show(plan: str | None, *, first_name: str | None = None, last_name: str | None = None, email: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringPlanResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_plans.plans_show("some example string")
    # TODO: Handle 'response' of type RecurringPlanResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlansShowErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_plans.plans_show("some example string")
    # TODO: Handle 'response' of type RecurringPlanResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlansShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan</code> | <code>str \| None</code> | The plan uid |
| <code>first_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>last_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>amount</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringPlanResource](givebutter/models/recurring_plan_resource.py)</code> -- `RecurringPlanResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[PlansShowErrorBody](givebutter/errors/plans_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SsoAccounts

> Source: [SsoAccounts](givebutter/apis/sso_accounts.py)

<details>
<summary><code>def sso_account(*, request_options: RequestOptionsOrDict | None = None) -> SsoAccountResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sso_accounts.sso_account()
    # TODO: Handle 'response' of type SsoAccountResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SsoAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.sso_accounts.sso_account()
    # TODO: Handle 'response' of type SsoAccountResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SsoAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SsoAccountResource](givebutter/models/sso_account_resource.py)</code> -- `SsoAccountResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[SsoAccountErrorBody](givebutter/errors/sso_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationException1](givebutter/models/authentication_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SsoCampaigns

> Source: [SsoCampaigns](givebutter/apis/sso_campaigns.py)

<details>
<summary><code>def sso_campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sso_campaigns.sso_campaigns_show(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SsoCampaignsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.sso_campaigns.sso_campaigns_show(1)
    # TODO: Handle 'response' of type CampaignResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SsoCampaignsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[SsoCampaignsShowErrorBody](givebutter/errors/sso_campaigns_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationException1](givebutter/models/authentication_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tickets

> Source: [Tickets](givebutter/apis/tickets.py)

<details>
<summary><code>def tickets_index(*, request_options: RequestOptionsOrDict | None = None) -> V1TicketsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tickets.tickets_index()
    # TODO: Handle 'response' of type V1TicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.tickets.tickets_index()
    # TODO: Handle 'response' of type V1TicketsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TicketsResponse](givebutter/models/v1_tickets_response.py)</code> -- Paginated set of `TicketResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tickets_show(ticket: str | None, *, request_options: RequestOptionsOrDict | None = None) -> TicketResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tickets.tickets_show("some example string")
    # TODO: Handle 'response' of type TicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TicketsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.tickets.tickets_show("some example string")
    # TODO: Handle 'response' of type TicketResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TicketsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticket</code> | <code>str \| None</code> | The ticket uid |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TicketResource](givebutter/models/ticket_resource.py)</code> -- `TicketResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[TicketsShowErrorBody](givebutter/errors/tickets_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](givebutter/apis/transactions.py)

<details>
<summary><code>def transactions_index(*, transacted_after: RFC3339DateTime | None = None, transacted_before: RFC3339DateTime | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, check_deposited_after: RFC3339DateTime | None = None, check_deposited_before: RFC3339DateTime | None = None, contacts: str | None = None, method: str | None = None, scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TransactionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.transactions_index()
    # TODO: Handle 'response' of type V1TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.transactions_index()
    # TODO: Handle 'response' of type V1TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transacted_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>transacted_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>updated_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>check_deposited_after</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>check_deposited_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>contacts</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>method</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>scope</code> | <code>[ScopeGivebutterApiDocumentationTransactionsApiOrStr](givebutter/models/enums/scope_givebutter_api_documentation_transactions_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByGivebutterApiDocumentationTransactionsApiOrStr](givebutter/models/enums/sort_by_givebutter_api_documentation_transactions_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by_desc</code> | <code>[SortByDescGivebutterApiDocumentationTransactionsApiOrStr](givebutter/models/enums/sort_by_desc_givebutter_api_documentation_transactions_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TransactionsResponse](givebutter/models/v1_transactions_response.py)</code> -- Paginated set of `TransactionResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[TransactionsIndexErrorBody](givebutter/errors/transactions_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transactions_show(transaction: str | None, *, request_options: RequestOptionsOrDict | None = None) -> TransactionResource2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.transactions_show("some example string")
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.transactions_show("some example string")
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction</code> | <code>str \| None</code> | The transaction tid |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[TransactionsShowErrorBody](givebutter/errors/transactions_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transactions_store(body: StoreTransactionRequest | StoreTransactionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TransactionResource2</code></summary>

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
    response = client.transactions.transactions_store(
        StoreTransactionRequest(
            method=PaymentMethodEnum.ACH,
            transacted_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            amount="some example string",
        ),
    )
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.transactions_store(
        StoreTransactionRequest(
            method=PaymentMethodEnum.ACH,
            transacted_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            amount="some example string",
        ),
    )
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StoreTransactionRequest](givebutter/models/store_transaction_request.py) \| [StoreTransactionRequestDict](givebutter/models/store_transaction_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[TransactionsStoreErrorBody](givebutter/errors/transactions_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[NotFoundHttpException1](givebutter/models/not_found_http_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transactions_update(transaction: str | None, *, body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionResource2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.transactions_update("some example string")
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.transactions_update("some example string")
    # TODO: Handle 'response' of type TransactionResource2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction</code> | <code>str \| None</code> | The transaction tid |
| <code>body</code> | <code>[UpdateTransactionRequest](givebutter/models/update_transaction_request.py) \| [UpdateTransactionRequestDict](givebutter/models/update_transaction_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[TransactionsUpdateErrorBody](givebutter/errors/transactions_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookActivities

> Source: [WebhookActivities](givebutter/apis/webhook_activities.py)

<details>
<summary><code>def webhooks_activities_index(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WebhooksActivitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_activities.webhooks_activities_index("some example string")
    # TODO: Handle 'response' of type V1WebhooksActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksActivitiesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_activities.webhooks_activities_index("some example string")
    # TODO: Handle 'response' of type V1WebhooksActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksActivitiesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook</code> | <code>str</code> | The webhook ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksActivitiesResponse](givebutter/models/v1_webhooks_activities_response.py)</code> -- Paginated set of `WebhookActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksActivitiesIndexErrorBody](givebutter/errors/webhooks_activities_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_activities_show(webhook: str, activity: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookActivityResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook_activities.webhooks_activities_show("some example string", "some example string")
    # TODO: Handle 'response' of type WebhookActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksActivitiesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook_activities.webhooks_activities_show(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookActivityResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksActivitiesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook</code> | <code>str</code> | The webhook ID |
| <code>activity</code> | <code>str</code> | The activity ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookActivityResource](givebutter/models/webhook_activity_resource.py)</code> -- `WebhookActivityResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksActivitiesShowErrorBody](givebutter/errors/webhooks_activities_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](givebutter/apis/webhooks_api.py)

<details>
<summary><code>def webhooks_destroy(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.webhooks_api.webhooks_destroy("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksDestroyErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.webhooks_destroy("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook</code> | <code>str</code> | The webhook ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksDestroyErrorBody](givebutter/errors/webhooks_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_index(*, request_options: RequestOptionsOrDict | None = None) -> V1WebhooksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.webhooks_index()
    # TODO: Handle 'response' of type V1WebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_index()
    # TODO: Handle 'response' of type V1WebhooksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksResponse](givebutter/models/v1_webhooks_response.py)</code> -- Paginated set of `WebhookResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[RawError](givebutter/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_show(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.webhooks_show("some example string")
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksShowErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_show("some example string")
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook</code> | <code>str</code> | The webhook ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksShowErrorBody](givebutter/errors/webhooks_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[AuthorizationException1](givebutter/models/authorization_exception1.py)</code> |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_store(body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResource</code></summary>

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
    response = client.webhooks_api.webhooks_store(V1WebhooksRequest(url="https://example.com"))
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksStoreErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_store(V1WebhooksRequest(url="https://example.com"))
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksStoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebhooksRequest](givebutter/models/v1_webhooks_request.py) \| [V1WebhooksRequestDict](givebutter/models/v1_webhooks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksStoreErrorBody](givebutter/errors/webhooks_store_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_update(webhook: str, body: V1WebhooksRequest1 | V1WebhooksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResource</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.webhooks_update(
        "some example string", V1WebhooksRequest1(url="https://example.com", events=[Event.CAMPAIGN_CREATED])
    )
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_update(
        "some example string", V1WebhooksRequest1(url="https://example.com", events=[Event.CAMPAIGN_CREATED])
    )
    # TODO: Handle 'response' of type WebhookResource
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook</code> | <code>str</code> | The webhook ID |
| <code>body</code> | <code>[V1WebhooksRequest1](givebutter/models/v1_webhooks_request1.py) \| [V1WebhooksRequest1Dict](givebutter/models/v1_webhooks_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](givebutter/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**OnError**: <code>[ApiError](givebutter/core/exceptions.py)&#91;[WebhooksUpdateErrorBody](givebutter/errors/webhooks_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ModelNotFoundException1](givebutter/models/model_not_found_exception1.py)</code> |
| 422 | <code>[ValidationException1](givebutter/models/validation_exception1.py)</code> |
| anything unmapped | <code>[RawError](givebutter/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

