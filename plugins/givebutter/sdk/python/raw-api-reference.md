# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GivebutterClient](givebutter/client.py)

## CampaignDiscountCodes

> Source: [CampaignDiscountCodes](givebutter/apis/campaign_discount_codes.py)

<details>
<summary><code>def campaigns_discount_codes_destroy(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CampaignsDiscountCodesDestroyErrorBody]</code></summary>

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
result = client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesDestroyErrorBody
```

**Async**

```python
result = await async_client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [CampaignsDiscountCodesDestroyErrorBody](givebutter/errors/campaigns_discount_codes_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CampaignsDiscountCodesDestroyErrorBody](givebutter/errors/campaigns_discount_codes_destroy_error.py)</code>

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
<summary><code>def campaigns_discount_codes_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CampaignsDiscountCodesResponse, CampaignsDiscountCodesIndexErrorBody]</code></summary>

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
result = client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsDiscountCodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesIndexErrorBody
```

**Async**

```python
result = await async_client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsDiscountCodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1CampaignsDiscountCodesResponse](givebutter/models/v1_campaigns_discount_codes_response.py), [CampaignsDiscountCodesIndexErrorBody](givebutter/errors/campaigns_discount_codes_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CampaignsDiscountCodesResponse](givebutter/models/v1_campaigns_discount_codes_response.py)</code> -- Paginated set of `CampaignDiscountCodeResource`

**On `Failure`**: `error` is <code>[CampaignsDiscountCodesIndexErrorBody](givebutter/errors/campaigns_discount_codes_index_error.py)</code>

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
<summary><code>def campaigns_discount_codes_show(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesShowErrorBody]</code></summary>

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
result = client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesShowErrorBody
```

**Async**

```python
result = await async_client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py), [CampaignsDiscountCodesShowErrorBody](givebutter/errors/campaigns_discount_codes_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**On `Failure`**: `error` is <code>[CampaignsDiscountCodesShowErrorBody](givebutter/errors/campaigns_discount_codes_show_error.py)</code>

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
<summary><code>def campaigns_discount_codes_store(campaign: int, body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesStoreErrorBody]</code></summary>

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
result = client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_store(
    1,
    StoreCampaignDiscountCodeRequest(
        type_=DiscountCodeType.PERCENTAGE, active=True, amount=1.5, code="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesStoreErrorBody
```

**Async**

```python
result = await async_client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_store(
    1,
    StoreCampaignDiscountCodeRequest(
        type_=DiscountCodeType.PERCENTAGE, active=True, amount=1.5, code="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py), [CampaignsDiscountCodesStoreErrorBody](givebutter/errors/campaigns_discount_codes_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**On `Failure`**: `error` is <code>[CampaignsDiscountCodesStoreErrorBody](givebutter/errors/campaigns_discount_codes_store_error.py)</code>

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
<summary><code>def campaigns_discount_codes_update(campaign: int, discount_code: int, body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesUpdateErrorBody]</code></summary>

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
result = client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_update(
    1, 1, UpdateCampaignDiscountCodeRequest(amount=1.5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesUpdateErrorBody
```

**Async**

```python
result = await async_client.campaign_discount_codes.with_raw_response.campaigns_discount_codes_update(
    1, 1, UpdateCampaignDiscountCodeRequest(amount=1.5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignDiscountCodeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDiscountCodesUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py), [CampaignsDiscountCodesUpdateErrorBody](givebutter/errors/campaigns_discount_codes_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignDiscountCodeResource](givebutter/models/campaign_discount_code_resource.py)</code> -- `CampaignDiscountCodeResource`

**On `Failure`**: `error` is <code>[CampaignsDiscountCodesUpdateErrorBody](givebutter/errors/campaigns_discount_codes_update_error.py)</code>

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
<summary><code>def campaigns_members_destroy(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, CampaignsMembersDestroyErrorBody]</code></summary>

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
result = client.campaign_members.with_raw_response.campaigns_members_destroy(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersDestroyErrorBody
```

**Async**

```python
result = await async_client.campaign_members.with_raw_response.campaigns_members_destroy(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;Any, [CampaignsMembersDestroyErrorBody](givebutter/errors/campaigns_members_destroy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code>

**On `Failure`**: `error` is <code>[CampaignsMembersDestroyErrorBody](givebutter/errors/campaigns_members_destroy_error.py)</code>

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
<summary><code>def campaigns_members_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CampaignsMembersResponse, CampaignsMembersIndexErrorBody]</code></summary>

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
result = client.campaign_members.with_raw_response.campaigns_members_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersIndexErrorBody
```

**Async**

```python
result = await async_client.campaign_members.with_raw_response.campaigns_members_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1CampaignsMembersResponse](givebutter/models/v1_campaigns_members_response.py), [CampaignsMembersIndexErrorBody](givebutter/errors/campaigns_members_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CampaignsMembersResponse](givebutter/models/v1_campaigns_members_response.py)</code> -- Paginated set of `CampaignMemberResource`

**On `Failure`**: `error` is <code>[CampaignsMembersIndexErrorBody](givebutter/errors/campaigns_members_index_error.py)</code>

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
<summary><code>def campaigns_members_show(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignMemberResource, CampaignsMembersShowErrorBody]</code></summary>

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
result = client.campaign_members.with_raw_response.campaigns_members_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignMemberResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersShowErrorBody
```

**Async**

```python
result = await async_client.campaign_members.with_raw_response.campaigns_members_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignMemberResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsMembersShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignMemberResource](givebutter/models/campaign_member_resource.py), [CampaignsMembersShowErrorBody](givebutter/errors/campaigns_members_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignMemberResource](givebutter/models/campaign_member_resource.py)</code> -- `CampaignMemberResource`

**On `Failure`**: `error` is <code>[CampaignsMembersShowErrorBody](givebutter/errors/campaigns_members_show_error.py)</code>

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
<summary><code>def campaigns_teams_destroy(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CampaignsTeamsDestroyErrorBody]</code></summary>

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
result = client.campaign_teams.with_raw_response.campaigns_teams_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsDestroyErrorBody
```

**Async**

```python
result = await async_client.campaign_teams.with_raw_response.campaigns_teams_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [CampaignsTeamsDestroyErrorBody](givebutter/errors/campaigns_teams_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CampaignsTeamsDestroyErrorBody](givebutter/errors/campaigns_teams_destroy_error.py)</code>

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
<summary><code>def campaigns_teams_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CampaignsTeamsResponse, CampaignsTeamsIndexErrorBody]</code></summary>

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
result = client.campaign_teams.with_raw_response.campaigns_teams_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsTeamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsIndexErrorBody
```

**Async**

```python
result = await async_client.campaign_teams.with_raw_response.campaigns_teams_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsTeamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1CampaignsTeamsResponse](givebutter/models/v1_campaigns_teams_response.py), [CampaignsTeamsIndexErrorBody](givebutter/errors/campaigns_teams_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CampaignsTeamsResponse](givebutter/models/v1_campaigns_teams_response.py)</code> -- Paginated set of `CampaignTeamResource`

**On `Failure`**: `error` is <code>[CampaignsTeamsIndexErrorBody](givebutter/errors/campaigns_teams_index_error.py)</code>

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
<summary><code>def campaigns_teams_show(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignTeamResource, CampaignsTeamsShowErrorBody]</code></summary>

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
result = client.campaign_teams.with_raw_response.campaigns_teams_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignTeamResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsShowErrorBody
```

**Async**

```python
result = await async_client.campaign_teams.with_raw_response.campaigns_teams_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignTeamResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsTeamsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignTeamResource](givebutter/models/campaign_team_resource.py), [CampaignsTeamsShowErrorBody](givebutter/errors/campaigns_teams_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignTeamResource](givebutter/models/campaign_team_resource.py)</code> -- `CampaignTeamResource`

**On `Failure`**: `error` is <code>[CampaignsTeamsShowErrorBody](givebutter/errors/campaigns_teams_show_error.py)</code>

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
<summary><code>def campaigns_items_tickets_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CampaignsItemsTicketsResponse, CampaignsItemsTicketsIndexErrorBody]</code></summary>

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
result = client.campaign_tickets.with_raw_response.campaigns_items_tickets_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsItemsTicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsIndexErrorBody
```

**Async**

```python
result = await async_client.campaign_tickets.with_raw_response.campaigns_items_tickets_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsItemsTicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1CampaignsItemsTicketsResponse](givebutter/models/v1_campaigns_items_tickets_response.py), [CampaignsItemsTicketsIndexErrorBody](givebutter/errors/campaigns_items_tickets_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CampaignsItemsTicketsResponse](givebutter/models/v1_campaigns_items_tickets_response.py)</code> -- Paginated set of `CampaignItemTicketResource`

**On `Failure`**: `error` is <code>[CampaignsItemsTicketsIndexErrorBody](givebutter/errors/campaigns_items_tickets_index_error.py)</code>

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
<summary><code>def campaigns_items_tickets_show(campaign: int, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsShowErrorBody]</code></summary>

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
result = client.campaign_tickets.with_raw_response.campaigns_items_tickets_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignItemTicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsShowErrorBody
```

**Async**

```python
result = await async_client.campaign_tickets.with_raw_response.campaigns_items_tickets_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignItemTicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py), [CampaignsItemsTicketsShowErrorBody](givebutter/errors/campaigns_items_tickets_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py)</code> -- `CampaignItemTicketResource`

**On `Failure`**: `error` is <code>[CampaignsItemsTicketsShowErrorBody](givebutter/errors/campaigns_items_tickets_show_error.py)</code>

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
<summary><code>def campaigns_items_tickets_store(campaign: int, body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsStoreErrorBody]</code></summary>

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
result = client.campaign_tickets.with_raw_response.campaigns_items_tickets_store(
    1, StoreCampaignItemTicketRequest(name="some example string", price=1.5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignItemTicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsStoreErrorBody
```

**Async**

```python
result = await async_client.campaign_tickets.with_raw_response.campaigns_items_tickets_store(
    1, StoreCampaignItemTicketRequest(name="some example string", price=1.5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignItemTicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsItemsTicketsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py), [CampaignsItemsTicketsStoreErrorBody](givebutter/errors/campaigns_items_tickets_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignItemTicketResource](givebutter/models/campaign_item_ticket_resource.py)</code> -- `CampaignItemTicketResource`

**On `Failure`**: `error` is <code>[CampaignsItemsTicketsStoreErrorBody](givebutter/errors/campaigns_items_tickets_store_error.py)</code>

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
<summary><code>def campaigns_destroy(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CampaignsDestroyErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.campaigns_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDestroyErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.campaigns_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [CampaignsDestroyErrorBody](givebutter/errors/campaigns_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CampaignsDestroyErrorBody](givebutter/errors/campaigns_destroy_error.py)</code>

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
<summary><code>def campaigns_index(*, scope: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CampaignsResponse, RawError]</code></summary>

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
result = client.campaigns.with_raw_response.campaigns_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.campaigns_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CampaignsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1CampaignsResponse](givebutter/models/v1_campaigns_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CampaignsResponse](givebutter/models/v1_campaigns_response.py)</code> -- Paginated set of `CampaignResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignResource, CampaignsShowErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.campaigns_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsShowErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.campaigns_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignResource](givebutter/models/campaign_resource.py), [CampaignsShowErrorBody](givebutter/errors/campaigns_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**On `Failure`**: `error` is <code>[CampaignsShowErrorBody](givebutter/errors/campaigns_show_error.py)</code>

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
<summary><code>def campaigns_store(body: StoreCampaignRequest | StoreCampaignRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignResource, CampaignsStoreErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.campaigns_store(
    StoreCampaignRequest(type_=Type.GENERAL, title="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsStoreErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.campaigns_store(
    StoreCampaignRequest(type_=Type.GENERAL, title="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignResource](givebutter/models/campaign_resource.py), [CampaignsStoreErrorBody](givebutter/errors/campaigns_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**On `Failure`**: `error` is <code>[CampaignsStoreErrorBody](givebutter/errors/campaigns_store_error.py)</code>

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
<summary><code>def campaigns_update(campaign: int, *, body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignResource, CampaignsUpdateErrorBody]</code></summary>

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
result = client.campaigns.with_raw_response.campaigns_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsUpdateErrorBody
```

**Async**

```python
result = await async_client.campaigns.with_raw_response.campaigns_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CampaignsUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignResource](givebutter/models/campaign_resource.py), [CampaignsUpdateErrorBody](givebutter/errors/campaigns_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**On `Failure`**: `error` is <code>[CampaignsUpdateErrorBody](givebutter/errors/campaigns_update_error.py)</code>

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
<summary><code>def contacts_activities_destroy(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ContactsActivitiesDestroyErrorBody]</code></summary>

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
result = client.contact_activities.with_raw_response.contacts_activities_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesDestroyErrorBody
```

**Async**

```python
result = await async_client.contact_activities.with_raw_response.contacts_activities_destroy(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [ContactsActivitiesDestroyErrorBody](givebutter/errors/contacts_activities_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ContactsActivitiesDestroyErrorBody](givebutter/errors/contacts_activities_destroy_error.py)</code>

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
<summary><code>def contacts_activities_index(contact: int, *, type_: ContactActivityTypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ContactsActivitiesResponse, ContactsActivitiesIndexErrorBody]</code></summary>

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
result = client.contact_activities.with_raw_response.contacts_activities_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactsActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesIndexErrorBody
```

**Async**

```python
result = await async_client.contact_activities.with_raw_response.contacts_activities_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactsActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1ContactsActivitiesResponse](givebutter/models/v1_contacts_activities_response.py), [ContactsActivitiesIndexErrorBody](givebutter/errors/contacts_activities_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ContactsActivitiesResponse](givebutter/models/v1_contacts_activities_response.py)</code> -- Paginated set of `ContactActivityResource`

**On `Failure`**: `error` is <code>[ContactsActivitiesIndexErrorBody](givebutter/errors/contacts_activities_index_error.py)</code>

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
<summary><code>def contacts_activities_show(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactActivityResource, ContactsActivitiesShowErrorBody]</code></summary>

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
result = client.contact_activities.with_raw_response.contacts_activities_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesShowErrorBody
```

**Async**

```python
result = await async_client.contact_activities.with_raw_response.contacts_activities_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactActivityResource](givebutter/models/contact_activity_resource.py), [ContactsActivitiesShowErrorBody](givebutter/errors/contacts_activities_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**On `Failure`**: `error` is <code>[ContactsActivitiesShowErrorBody](givebutter/errors/contacts_activities_show_error.py)</code>

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
<summary><code>def contacts_activities_store(contact: int, body: StoreContactActivityRequest | StoreContactActivityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactActivityResource, ContactsActivitiesStoreErrorBody]</code></summary>

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
result = client.contact_activities.with_raw_response.contacts_activities_store(
    1, StoreContactActivityRequest(type_=TypeGivebutterApiDocumentationContactActivitiesApi.EMAIL)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesStoreErrorBody
```

**Async**

```python
result = await async_client.contact_activities.with_raw_response.contacts_activities_store(
    1, StoreContactActivityRequest(type_=TypeGivebutterApiDocumentationContactActivitiesApi.EMAIL)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactActivityResource](givebutter/models/contact_activity_resource.py), [ContactsActivitiesStoreErrorBody](givebutter/errors/contacts_activities_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**On `Failure`**: `error` is <code>[ContactsActivitiesStoreErrorBody](givebutter/errors/contacts_activities_store_error.py)</code>

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
<summary><code>def contacts_activities_update(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactActivityResource, ContactsActivitiesUpdateErrorBody]</code></summary>

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
result = client.contact_activities.with_raw_response.contacts_activities_update(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesUpdateErrorBody
```

**Async**

```python
result = await async_client.contact_activities.with_raw_response.contacts_activities_update(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsActivitiesUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactActivityResource](givebutter/models/contact_activity_resource.py), [ContactsActivitiesUpdateErrorBody](givebutter/errors/contacts_activities_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactActivityResource](givebutter/models/contact_activity_resource.py)</code> -- `ContactActivityResource`

**On `Failure`**: `error` is <code>[ContactsActivitiesUpdateErrorBody](givebutter/errors/contacts_activities_update_error.py)</code>

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
<summary><code>def contact_tag_destroy(contact: int, body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactTagDestroyErrorBody]</code></summary>

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
result = client.contact_tags.with_raw_response.contact_tag_destroy(
    1, V1ContactsTagsRemoveRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagDestroyErrorBody
```

**Async**

```python
result = await async_client.contact_tags.with_raw_response.contact_tag_destroy(
    1, V1ContactsTagsRemoveRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactTagDestroyErrorBody](givebutter/errors/contact_tag_destroy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactTagDestroyErrorBody](givebutter/errors/contact_tag_destroy_error.py)</code>

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
<summary><code>def contact_tag_store(contact: int, body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactTagStoreErrorBody]</code></summary>

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
result = client.contact_tags.with_raw_response.contact_tag_store(
    1, V1ContactsTagsAddRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagStoreErrorBody
```

**Async**

```python
result = await async_client.contact_tags.with_raw_response.contact_tag_store(
    1, V1ContactsTagsAddRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactTagStoreErrorBody](givebutter/errors/contact_tag_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactTagStoreErrorBody](givebutter/errors/contact_tag_store_error.py)</code>

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
<summary><code>def contact_tag_sync(contact: int, body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactTagSyncErrorBody]</code></summary>

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
result = client.contact_tags.with_raw_response.contact_tag_sync(
    1, V1ContactsTagsSyncRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagSyncErrorBody
```

**Async**

```python
result = await async_client.contact_tags.with_raw_response.contact_tag_sync(
    1, V1ContactsTagsSyncRequest(tags=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactTagSyncErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactTagSyncErrorBody](givebutter/errors/contact_tag_sync_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactTagSyncErrorBody](givebutter/errors/contact_tag_sync_error.py)</code>

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
<summary><code>def contact_restore(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactRestoreErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contact_restore(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactRestoreErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contact_restore(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactRestoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactRestoreErrorBody](givebutter/errors/contact_restore_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactRestoreErrorBody](givebutter/errors/contact_restore_error.py)</code>

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
<summary><code>def contacts_destroy(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ContactsDestroyErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contacts_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsDestroyErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contacts_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [ContactsDestroyErrorBody](givebutter/errors/contacts_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ContactsDestroyErrorBody](givebutter/errors/contacts_destroy_error.py)</code>

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
<summary><code>def contacts_index(*, type_: ContactTypeOrStr | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, total_contributions_min: float | None = None, total_contributions_max: float | None = None, recurring_contributions_min: float | None = None, recurring_contributions_max: float | None = None, tags: str | None = None, sort_by: SortByOrStr | None = None, sort_by_desc: SortByDescOrStr | None = None, email: str | None = None, primary_email: str | None = None, first_name: str | None = None, last_name: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ContactsResponse, ContactsIndexErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contacts_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsIndexErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contacts_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1ContactsResponse](givebutter/models/v1_contacts_response.py), [ContactsIndexErrorBody](givebutter/errors/contacts_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ContactsResponse](givebutter/models/v1_contacts_response.py)</code> -- Paginated set of `ContactResource`

**On `Failure`**: `error` is <code>[ContactsIndexErrorBody](givebutter/errors/contacts_index_error.py)</code>

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
<summary><code>def contacts_show(contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactsShowErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contacts_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsShowErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contacts_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactsShowErrorBody](givebutter/errors/contacts_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactsShowErrorBody](givebutter/errors/contacts_show_error.py)</code>

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
<summary><code>def contacts_store(*, body: V1ContactsRequest | V1ContactsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactsStoreErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contacts_store()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsStoreErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contacts_store()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactsStoreErrorBody](givebutter/errors/contacts_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactsStoreErrorBody](givebutter/errors/contacts_store_error.py)</code>

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
<summary><code>def contacts_update(contact: int, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, ContactsUpdateErrorBody]</code></summary>

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
result = client.contacts.with_raw_response.contacts_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsUpdateErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.contacts_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactsUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [ContactsUpdateErrorBody](givebutter/errors/contacts_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[ContactsUpdateErrorBody](givebutter/errors/contacts_update_error.py)</code>

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
<summary><code>def funds_destroy(fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FundsDestroyErrorBody]</code></summary>

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
result = client.funds.with_raw_response.funds_destroy("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsDestroyErrorBody
```

**Async**

```python
result = await async_client.funds.with_raw_response.funds_destroy("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [FundsDestroyErrorBody](givebutter/errors/funds_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FundsDestroyErrorBody](givebutter/errors/funds_destroy_error.py)</code>

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
<summary><code>def funds_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FundsResponse, RawError]</code></summary>

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
result = client.funds.with_raw_response.funds_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.funds.with_raw_response.funds_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1FundsResponse](givebutter/models/v1_funds_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FundsResponse](givebutter/models/v1_funds_response.py)</code> -- Paginated set of `FundResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def funds_show(fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundResource, FundsShowErrorBody]</code></summary>

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
result = client.funds.with_raw_response.funds_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsShowErrorBody
```

**Async**

```python
result = await async_client.funds.with_raw_response.funds_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[FundResource](givebutter/models/fund_resource.py), [FundsShowErrorBody](givebutter/errors/funds_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**On `Failure`**: `error` is <code>[FundsShowErrorBody](givebutter/errors/funds_show_error.py)</code>

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
<summary><code>def funds_store(body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundResource, FundsStoreErrorBody]</code></summary>

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
result = client.funds.with_raw_response.funds_store(V1FundsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsStoreErrorBody
```

**Async**

```python
result = await async_client.funds.with_raw_response.funds_store(V1FundsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[FundResource](givebutter/models/fund_resource.py), [FundsStoreErrorBody](givebutter/errors/funds_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**On `Failure`**: `error` is <code>[FundsStoreErrorBody](givebutter/errors/funds_store_error.py)</code>

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
<summary><code>def funds_update(fund: str | None, body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FundResource, FundsUpdateErrorBody]</code></summary>

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
result = client.funds.with_raw_response.funds_update("some example string", V1FundsRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsUpdateErrorBody
```

**Async**

```python
result = await async_client.funds.with_raw_response.funds_update(
    "some example string", V1FundsRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FundResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FundsUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[FundResource](givebutter/models/fund_resource.py), [FundsUpdateErrorBody](givebutter/errors/funds_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FundResource](givebutter/models/fund_resource.py)</code> -- `FundResource`

**On `Failure`**: `error` is <code>[FundsUpdateErrorBody](givebutter/errors/funds_update_error.py)</code>

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
<summary><code>def households_contacts_destroy(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsDestroyErrorBody]</code></summary>

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
result = client.household_contacts.with_raw_response.households_contacts_destroy(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsDestroyErrorBody
```

**Async**

```python
result = await async_client.household_contacts.with_raw_response.households_contacts_destroy(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py), [HouseholdsContactsDestroyErrorBody](givebutter/errors/households_contacts_destroy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsContactsDestroyErrorBody](givebutter/errors/households_contacts_destroy_error.py)</code>

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
<summary><code>def households_contacts_index(household: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HouseholdsContactsResponse, HouseholdsContactsIndexErrorBody]</code></summary>

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
result = client.household_contacts.with_raw_response.households_contacts_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HouseholdsContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsIndexErrorBody
```

**Async**

```python
result = await async_client.household_contacts.with_raw_response.households_contacts_index(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HouseholdsContactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1HouseholdsContactsResponse](givebutter/models/v1_households_contacts_response.py), [HouseholdsContactsIndexErrorBody](givebutter/errors/households_contacts_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HouseholdsContactsResponse](givebutter/models/v1_households_contacts_response.py)</code> -- Paginated set of `ContactResource`

**On `Failure`**: `error` is <code>[HouseholdsContactsIndexErrorBody](givebutter/errors/households_contacts_index_error.py)</code>

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
<summary><code>def households_contacts_show(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactResource, HouseholdsContactsShowErrorBody]</code></summary>

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
result = client.household_contacts.with_raw_response.households_contacts_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsShowErrorBody
```

**Async**

```python
result = await async_client.household_contacts.with_raw_response.households_contacts_show(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[ContactResource](givebutter/models/contact_resource.py), [HouseholdsContactsShowErrorBody](givebutter/errors/households_contacts_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactResource](givebutter/models/contact_resource.py)</code> -- `ContactResource`

**On `Failure`**: `error` is <code>[HouseholdsContactsShowErrorBody](givebutter/errors/households_contacts_show_error.py)</code>

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
<summary><code>def households_contacts_store(household: int, body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsStoreErrorBody]</code></summary>

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
result = client.household_contacts.with_raw_response.households_contacts_store(
    1, V1HouseholdsContactsRequest(contact_id=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsStoreErrorBody
```

**Async**

```python
result = await async_client.household_contacts.with_raw_response.households_contacts_store(
    1, V1HouseholdsContactsRequest(contact_id=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsContactsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py), [HouseholdsContactsStoreErrorBody](givebutter/errors/households_contacts_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsContactsStoreErrorBody](givebutter/errors/households_contacts_store_error.py)</code>

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
<summary><code>def households_destroy(household: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, HouseholdsDestroyErrorBody]</code></summary>

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
result = client.households.with_raw_response.households_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsDestroyErrorBody
```

**Async**

```python
result = await async_client.households.with_raw_response.households_destroy(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [HouseholdsDestroyErrorBody](givebutter/errors/households_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[HouseholdsDestroyErrorBody](givebutter/errors/households_destroy_error.py)</code>

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
<summary><code>def households_index(*, head_contact_id: str | None = None, contacts: str | None = None, query: str | None = None, sort_by: str | None = None, sort_by_desc: str | None = None, page: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[HouseholdResource], HouseholdsIndexErrorBody]</code></summary>

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
result = client.households.with_raw_response.households_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[HouseholdResource]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsIndexErrorBody
```

**Async**

```python
result = await async_client.households.with_raw_response.households_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[HouseholdResource]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;list&#91;[HouseholdResource](givebutter/models/household_resource.py)&#93;, [HouseholdsIndexErrorBody](givebutter/errors/households_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[HouseholdResource](givebutter/models/household_resource.py)&#93;</code> -- Array of `HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsIndexErrorBody](givebutter/errors/households_index_error.py)</code>

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
<summary><code>def households_show(household: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsShowErrorBody]</code></summary>

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
result = client.households.with_raw_response.households_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsShowErrorBody
```

**Async**

```python
result = await async_client.households.with_raw_response.households_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py), [HouseholdsShowErrorBody](givebutter/errors/households_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsShowErrorBody](givebutter/errors/households_show_error.py)</code>

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
<summary><code>def households_store(body: HouseholdStoreRequest | HouseholdStoreRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsStoreErrorBody]</code></summary>

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
result = client.households.with_raw_response.households_store(HouseholdStoreRequest(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsStoreErrorBody
```

**Async**

```python
result = await async_client.households.with_raw_response.households_store(
    HouseholdStoreRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py), [HouseholdsStoreErrorBody](givebutter/errors/households_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsStoreErrorBody](givebutter/errors/households_store_error.py)</code>

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
<summary><code>def households_update(household: int, *, body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsUpdateErrorBody]</code></summary>

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
result = client.households.with_raw_response.households_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsUpdateErrorBody
```

**Async**

```python
result = await async_client.households.with_raw_response.households_update(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppHttpResourcesApiHouseholdResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HouseholdsUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py), [HouseholdsUpdateErrorBody](givebutter/errors/households_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppHttpResourcesApiHouseholdResource](givebutter/models/app_http_resources_api_household_resource.py)</code> -- `App.Http.Resources.API.HouseholdResource`

**On `Failure`**: `error` is <code>[HouseholdsUpdateErrorBody](givebutter/errors/households_update_error.py)</code>

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
<summary><code>def messages_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MessagesResponse, RawError]</code></summary>

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
result = client.messages.with_raw_response.messages_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.messages.with_raw_response.messages_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1MessagesResponse](givebutter/models/v1_messages_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MessagesResponse](givebutter/models/v1_messages_response.py)</code> -- Paginated set of `MessageResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def messages_show(message: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResource, MessagesShowErrorBody]</code></summary>

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
result = client.messages.with_raw_response.messages_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MessagesShowErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.messages_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MessagesShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[MessageResource](givebutter/models/message_resource.py), [MessagesShowErrorBody](givebutter/errors/messages_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResource](givebutter/models/message_resource.py)</code> -- `MessageResource`

**On `Failure`**: `error` is <code>[MessagesShowErrorBody](givebutter/errors/messages_show_error.py)</code>

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
<summary><code>def payouts_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PayoutsResponse, RawError]</code></summary>

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
result = client.payouts.with_raw_response.payouts_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PayoutsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.payouts.with_raw_response.payouts_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PayoutsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1PayoutsResponse](givebutter/models/v1_payouts_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PayoutsResponse](givebutter/models/v1_payouts_response.py)</code> -- Paginated set of `PayoutResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def payouts_show(payout: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PayoutResource, PayoutsShowErrorBody]</code></summary>

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
result = client.payouts.with_raw_response.payouts_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PayoutsShowErrorBody
```

**Async**

```python
result = await async_client.payouts.with_raw_response.payouts_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PayoutResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PayoutsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[PayoutResource](givebutter/models/payout_resource.py), [PayoutsShowErrorBody](givebutter/errors/payouts_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PayoutResource](givebutter/models/payout_resource.py)</code> -- `PayoutResource`

**On `Failure`**: `error` is <code>[PayoutsShowErrorBody](givebutter/errors/payouts_show_error.py)</code>

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
<summary><code>def pledges_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PledgesResponse, RawError]</code></summary>

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
result = client.pledges.with_raw_response.pledges_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PledgesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pledges.with_raw_response.pledges_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PledgesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1PledgesResponse](givebutter/models/v1_pledges_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PledgesResponse](givebutter/models/v1_pledges_response.py)</code> -- Paginated set of `PledgeResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pledges_show(pledge: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PledgeResource, PledgesShowErrorBody]</code></summary>

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
result = client.pledges.with_raw_response.pledges_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PledgeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PledgesShowErrorBody
```

**Async**

```python
result = await async_client.pledges.with_raw_response.pledges_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PledgeResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PledgesShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[PledgeResource](givebutter/models/pledge_resource.py), [PledgesShowErrorBody](givebutter/errors/pledges_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PledgeResource](givebutter/models/pledge_resource.py)</code> -- `PledgeResource`

**On `Failure`**: `error` is <code>[PledgesShowErrorBody](givebutter/errors/pledges_show_error.py)</code>

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
<summary><code>def plans_index(*, contacts: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PlansResponse, PlansIndexErrorBody]</code></summary>

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
result = client.recurring_plans.with_raw_response.plans_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlansIndexErrorBody
```

**Async**

```python
result = await async_client.recurring_plans.with_raw_response.plans_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlansResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlansIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1PlansResponse](givebutter/models/v1_plans_response.py), [PlansIndexErrorBody](givebutter/errors/plans_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PlansResponse](givebutter/models/v1_plans_response.py)</code> -- Paginated set of `RecurringPlanResource`

**On `Failure`**: `error` is <code>[PlansIndexErrorBody](givebutter/errors/plans_index_error.py)</code>

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
<summary><code>def plans_show(plan: str | None, *, first_name: str | None = None, last_name: str | None = None, email: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecurringPlanResource, PlansShowErrorBody]</code></summary>

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
result = client.recurring_plans.with_raw_response.plans_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecurringPlanResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlansShowErrorBody
```

**Async**

```python
result = await async_client.recurring_plans.with_raw_response.plans_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecurringPlanResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlansShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[RecurringPlanResource](givebutter/models/recurring_plan_resource.py), [PlansShowErrorBody](givebutter/errors/plans_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecurringPlanResource](givebutter/models/recurring_plan_resource.py)</code> -- `RecurringPlanResource`

**On `Failure`**: `error` is <code>[PlansShowErrorBody](givebutter/errors/plans_show_error.py)</code>

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
<summary><code>def sso_account(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SsoAccountResource, SsoAccountErrorBody]</code></summary>

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
result = client.sso_accounts.with_raw_response.sso_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SsoAccountResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SsoAccountErrorBody
```

**Async**

```python
result = await async_client.sso_accounts.with_raw_response.sso_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SsoAccountResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SsoAccountErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[SsoAccountResource](givebutter/models/sso_account_resource.py), [SsoAccountErrorBody](givebutter/errors/sso_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SsoAccountResource](givebutter/models/sso_account_resource.py)</code> -- `SsoAccountResource`

**On `Failure`**: `error` is <code>[SsoAccountErrorBody](givebutter/errors/sso_account_error.py)</code>

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
<summary><code>def sso_campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CampaignResource, SsoCampaignsShowErrorBody]</code></summary>

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
result = client.sso_campaigns.with_raw_response.sso_campaigns_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SsoCampaignsShowErrorBody
```

**Async**

```python
result = await async_client.sso_campaigns.with_raw_response.sso_campaigns_show(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CampaignResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SsoCampaignsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[CampaignResource](givebutter/models/campaign_resource.py), [SsoCampaignsShowErrorBody](givebutter/errors/sso_campaigns_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CampaignResource](givebutter/models/campaign_resource.py)</code> -- `CampaignResource`

**On `Failure`**: `error` is <code>[SsoCampaignsShowErrorBody](givebutter/errors/sso_campaigns_show_error.py)</code>

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
<summary><code>def tickets_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TicketsResponse, RawError]</code></summary>

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
result = client.tickets.with_raw_response.tickets_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tickets.with_raw_response.tickets_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TicketsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1TicketsResponse](givebutter/models/v1_tickets_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TicketsResponse](givebutter/models/v1_tickets_response.py)</code> -- Paginated set of `TicketResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tickets_show(ticket: str | None, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TicketResource, TicketsShowErrorBody]</code></summary>

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
result = client.tickets.with_raw_response.tickets_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TicketsShowErrorBody
```

**Async**

```python
result = await async_client.tickets.with_raw_response.tickets_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TicketResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TicketsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[TicketResource](givebutter/models/ticket_resource.py), [TicketsShowErrorBody](givebutter/errors/tickets_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TicketResource](givebutter/models/ticket_resource.py)</code> -- `TicketResource`

**On `Failure`**: `error` is <code>[TicketsShowErrorBody](givebutter/errors/tickets_show_error.py)</code>

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
<summary><code>def transactions_index(*, transacted_after: RFC3339DateTime | None = None, transacted_before: RFC3339DateTime | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, check_deposited_after: RFC3339DateTime | None = None, check_deposited_before: RFC3339DateTime | None = None, contacts: str | None = None, method: str | None = None, scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TransactionsResponse, TransactionsIndexErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.transactions_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsIndexErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.transactions_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TransactionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1TransactionsResponse](givebutter/models/v1_transactions_response.py), [TransactionsIndexErrorBody](givebutter/errors/transactions_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TransactionsResponse](givebutter/models/v1_transactions_response.py)</code> -- Paginated set of `TransactionResource`

**On `Failure`**: `error` is <code>[TransactionsIndexErrorBody](givebutter/errors/transactions_index_error.py)</code>

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
<summary><code>def transactions_show(transaction: str | None, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionResource2, TransactionsShowErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.transactions_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsShowErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.transactions_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[TransactionResource2](givebutter/models/unions/transaction_resource2.py), [TransactionsShowErrorBody](givebutter/errors/transactions_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**On `Failure`**: `error` is <code>[TransactionsShowErrorBody](givebutter/errors/transactions_show_error.py)</code>

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
<summary><code>def transactions_store(body: StoreTransactionRequest | StoreTransactionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionResource2, TransactionsStoreErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.transactions_store(
    StoreTransactionRequest(
        method=PaymentMethodEnum.ACH,
        transacted_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        amount="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsStoreErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.transactions_store(
    StoreTransactionRequest(
        method=PaymentMethodEnum.ACH,
        transacted_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        amount="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[TransactionResource2](givebutter/models/unions/transaction_resource2.py), [TransactionsStoreErrorBody](givebutter/errors/transactions_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**On `Failure`**: `error` is <code>[TransactionsStoreErrorBody](givebutter/errors/transactions_store_error.py)</code>

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
<summary><code>def transactions_update(transaction: str | None, *, body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TransactionResource2, TransactionsUpdateErrorBody]</code></summary>

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
result = client.transactions.with_raw_response.transactions_update("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsUpdateErrorBody
```

**Async**

```python
result = await async_client.transactions.with_raw_response.transactions_update("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TransactionResource2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransactionsUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[TransactionResource2](givebutter/models/unions/transaction_resource2.py), [TransactionsUpdateErrorBody](givebutter/errors/transactions_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TransactionResource2](givebutter/models/unions/transaction_resource2.py)</code> -- `TransactionResource`

**On `Failure`**: `error` is <code>[TransactionsUpdateErrorBody](givebutter/errors/transactions_update_error.py)</code>

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
<summary><code>def webhooks_activities_index(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebhooksActivitiesResponse, WebhooksActivitiesIndexErrorBody]</code></summary>

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
result = client.webhook_activities.with_raw_response.webhooks_activities_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksActivitiesIndexErrorBody
```

**Async**

```python
result = await async_client.webhook_activities.with_raw_response.webhooks_activities_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksActivitiesIndexErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1WebhooksActivitiesResponse](givebutter/models/v1_webhooks_activities_response.py), [WebhooksActivitiesIndexErrorBody](givebutter/errors/webhooks_activities_index_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebhooksActivitiesResponse](givebutter/models/v1_webhooks_activities_response.py)</code> -- Paginated set of `WebhookActivityResource`

**On `Failure`**: `error` is <code>[WebhooksActivitiesIndexErrorBody](givebutter/errors/webhooks_activities_index_error.py)</code>

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
<summary><code>def webhooks_activities_show(webhook: str, activity: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookActivityResource, WebhooksActivitiesShowErrorBody]</code></summary>

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
result = client.webhook_activities.with_raw_response.webhooks_activities_show(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksActivitiesShowErrorBody
```

**Async**

```python
result = await async_client.webhook_activities.with_raw_response.webhooks_activities_show(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookActivityResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksActivitiesShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[WebhookActivityResource](givebutter/models/webhook_activity_resource.py), [WebhooksActivitiesShowErrorBody](givebutter/errors/webhooks_activities_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookActivityResource](givebutter/models/webhook_activity_resource.py)</code> -- `WebhookActivityResource`

**On `Failure`**: `error` is <code>[WebhooksActivitiesShowErrorBody](givebutter/errors/webhooks_activities_show_error.py)</code>

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
<summary><code>def webhooks_destroy(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, WebhooksDestroyErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_destroy("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksDestroyErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_destroy("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksDestroyErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;None, [WebhooksDestroyErrorBody](givebutter/errors/webhooks_destroy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[WebhooksDestroyErrorBody](givebutter/errors/webhooks_destroy_error.py)</code>

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
<summary><code>def webhooks_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebhooksResponse, RawError]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_index()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[V1WebhooksResponse](givebutter/models/v1_webhooks_response.py), [RawError](givebutter/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebhooksResponse](givebutter/models/v1_webhooks_response.py)</code> -- Paginated set of `WebhookResource`

**On `Failure`**: `error` is <code>[RawError](givebutter/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_show(webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookResource, WebhooksShowErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksShowErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_show("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksShowErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[WebhookResource](givebutter/models/webhook_resource.py), [WebhooksShowErrorBody](givebutter/errors/webhooks_show_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**On `Failure`**: `error` is <code>[WebhooksShowErrorBody](givebutter/errors/webhooks_show_error.py)</code>

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
<summary><code>def webhooks_store(body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookResource, WebhooksStoreErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_store(V1WebhooksRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksStoreErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_store(V1WebhooksRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksStoreErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[WebhookResource](givebutter/models/webhook_resource.py), [WebhooksStoreErrorBody](givebutter/errors/webhooks_store_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**On `Failure`**: `error` is <code>[WebhooksStoreErrorBody](givebutter/errors/webhooks_store_error.py)</code>

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
<summary><code>def webhooks_update(webhook: str, body: V1WebhooksRequest1 | V1WebhooksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookResource, WebhooksUpdateErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_update(
    "some example string", V1WebhooksRequest1(url="https://example.com", events=[Event.CAMPAIGN_CREATED])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksUpdateErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_update(
    "some example string", V1WebhooksRequest1(url="https://example.com", events=[Event.CAMPAIGN_CREATED])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksUpdateErrorBody
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

**Returns**: <code>[ApiResult](givebutter/core/results.py)&#91;[WebhookResource](givebutter/models/webhook_resource.py), [WebhooksUpdateErrorBody](givebutter/errors/webhooks_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookResource](givebutter/models/webhook_resource.py)</code> -- `WebhookResource`

**On `Failure`**: `error` is <code>[WebhooksUpdateErrorBody](givebutter/errors/webhooks_update_error.py)</code>

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

