# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [DevCycleClient](dev_cycle/client.py)

## Audiences

> Source: [Audiences](dev_cycle/apis/audiences.py)

<details>
<summary><code>def audiences_controller_create(project: str, body: CreateAudienceDto | CreateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Audience, AudiencesControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Audience

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.audiences_controller_create(
    "some example string", CreateAudienceDto(filters=AudienceOperator(filters=[AllFilter()], operator=Operator.AND))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerCreateErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_create(
    "some example string", CreateAudienceDto(filters=AudienceOperator(filters=[AllFilter()], operator=Operator.AND))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateAudienceDto](dev_cycle/models/create_audience_dto.py) \| [CreateAudienceDtoDict](dev_cycle/models/create_audience_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Audience](dev_cycle/models/audience.py), [AudiencesControllerCreateErrorBody](dev_cycle/errors/audiences_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Audience](dev_cycle/models/audience.py)</code>

**On `Failure`**: `error` is <code>[AudiencesControllerCreateErrorBody](dev_cycle/errors/audiences_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def audiences_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Audience], AudiencesControllerFindAllErrorBody]</code></summary>

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
result = client.audiences.with_raw_response.audiences_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Audience]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Audience]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[Audience](dev_cycle/models/audience.py)&#93;, [AudiencesControllerFindAllErrorBody](dev_cycle/errors/audiences_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Audience](dev_cycle/models/audience.py)&#93;</code>

**On `Failure`**: `error` is <code>[AudiencesControllerFindAllErrorBody](dev_cycle/errors/audiences_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def audiences_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Audience, AudiencesControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.audiences_controller_find_one("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Audience key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Audience](dev_cycle/models/audience.py), [AudiencesControllerFindOneErrorBody](dev_cycle/errors/audiences_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Audience](dev_cycle/models/audience.py)</code>

**On `Failure`**: `error` is <code>[AudiencesControllerFindOneErrorBody](dev_cycle/errors/audiences_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def audiences_controller_find_usages(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AudienceUsage, AudiencesControllerFindUsagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.audiences_controller_find_usages(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindUsagesErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_find_usages(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerFindUsagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Audience key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[AudienceUsage](dev_cycle/models/audience_usage.py), [AudiencesControllerFindUsagesErrorBody](dev_cycle/errors/audiences_controller_find_usages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AudienceUsage](dev_cycle/models/audience_usage.py)</code>

**On `Failure`**: `error` is <code>[AudiencesControllerFindUsagesErrorBody](dev_cycle/errors/audiences_controller_find_usages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def audiences_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AudiencesControllerRemoveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.audiences_controller_remove("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Audience key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [AudiencesControllerRemoveErrorBody](dev_cycle/errors/audiences_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AudiencesControllerRemoveErrorBody](dev_cycle/errors/audiences_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 412 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def audiences_controller_update(key: str, project: str, body: UpdateAudienceDto | UpdateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Audience, AudiencesControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.audiences_controller_update(
    "some example string", "some example string", UpdateAudienceDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.audiences_controller_update(
    "some example string", "some example string", UpdateAudienceDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AudiencesControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Audience key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateAudienceDto](dev_cycle/models/update_audience_dto.py) \| [UpdateAudienceDtoDict](dev_cycle/models/update_audience_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Audience](dev_cycle/models/audience.py), [AudiencesControllerUpdateErrorBody](dev_cycle/errors/audiences_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Audience](dev_cycle/models/audience.py)</code>

**On `Failure`**: `error` is <code>[AudiencesControllerUpdateErrorBody](dev_cycle/errors/audiences_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLog

> Source: [AuditLog](dev_cycle/apis/audit_log.py)

<details>
<summary><code>def audit_log_controller_find_all(feature: str, project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, environment: str | None = None, a0_user: str | None = None, start_date: RFC3339DateTime | None = None, end_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[AuditLogEntity], AuditLogControllerFindAllErrorBody]</code></summary>

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
result = client.audit_log.with_raw_response.audit_log_controller_find_all("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AuditLogEntity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AuditLogControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.audit_log.with_raw_response.audit_log_controller_find_all(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[AuditLogEntity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AuditLogControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>environment</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>a0_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[AuditLogEntity](dev_cycle/models/audit_log_entity.py)&#93;, [AuditLogControllerFindAllErrorBody](dev_cycle/errors/audit_log_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[AuditLogEntity](dev_cycle/models/audit_log_entity.py)&#93;</code>

**On `Failure`**: `error` is <code>[AuditLogControllerFindAllErrorBody](dev_cycle/errors/audit_log_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BucketingApi

> Source: [BucketingApi](dev_cycle/apis/bucketing_api.py)

<details>
<summary><code>def get_features(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[dict[str, Feature], GetFeaturesErrorBody]</code></summary>

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
result = client.bucketing_api.with_raw_response.get_features(
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type dict[str, Feature]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFeaturesErrorBody
```

**Async**

```python
result = await async_client.bucketing_api.with_raw_response.get_features(
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type dict[str, Feature]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFeaturesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserData](dev_cycle/models/user_data.py) \| [UserDataDict](dev_cycle/models/user_data.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;dict&#91;str, [Feature](dev_cycle/models/feature.py)&#93;, [GetFeaturesErrorBody](dev_cycle/errors/get_features_error.py)&#93;</code>

**On `Success`**: `payload` is <code>dict&#91;str, [Feature](dev_cycle/models/feature.py)&#93;</code> -- Features response (map of Feature keys to Feature objects)

**On `Failure`**: `error` is <code>[GetFeaturesErrorBody](dev_cycle/errors/get_features_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_variable_by_key(key: str, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Variable, GetVariableByKeyErrorBody]</code></summary>

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
result = client.bucketing_api.with_raw_response.get_variable_by_key(
    "my-variable-key",
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVariableByKeyErrorBody
```

**Async**

```python
result = await async_client.bucketing_api.with_raw_response.get_variable_by_key(
    "my-variable-key",
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVariableByKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Variable key |
| <code>body</code> | <code>[UserData](dev_cycle/models/user_data.py) \| [UserDataDict](dev_cycle/models/user_data.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Variable](dev_cycle/models/variable.py), [GetVariableByKeyErrorBody](dev_cycle/errors/get_variable_by_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Variable](dev_cycle/models/variable.py)</code> -- Variable response

**On `Failure`**: `error` is <code>[GetVariableByKeyErrorBody](dev_cycle/errors/get_variable_by_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_variables(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[dict[str, Variable], GetVariablesErrorBody]</code></summary>

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
result = client.bucketing_api.with_raw_response.get_variables(
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type dict[str, Variable]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVariablesErrorBody
```

**Async**

```python
result = await async_client.bucketing_api.with_raw_response.get_variables(
    UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type dict[str, Variable]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserData](dev_cycle/models/user_data.py) \| [UserDataDict](dev_cycle/models/user_data.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;dict&#91;str, [Variable](dev_cycle/models/variable.py)&#93;, [GetVariablesErrorBody](dev_cycle/errors/get_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>dict&#91;str, [Variable](dev_cycle/models/variable.py)&#93;</code> -- Variables response (map of variable keys to Variable objects)

**On `Failure`**: `error` is <code>[GetVariablesErrorBody](dev_cycle/errors/get_variables_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_events(body: UserDataAndEventsBody | UserDataAndEventsBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TrackResponse, PostEventsErrorBody]</code></summary>

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
result = client.bucketing_api.with_raw_response.post_events(
    UserDataAndEventsBody(
        events=[
            Event(type_="purchase", value=99.99, meta_data={}),
            Event(type_="feature_click", target="new-dashboard-button"),
        ],
        user=UserData(user_id="user_123456", email="user@example.com", custom_data={}),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TrackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostEventsErrorBody
```

**Async**

```python
result = await async_client.bucketing_api.with_raw_response.post_events(
    UserDataAndEventsBody(
        events=[
            Event(type_="purchase", value=99.99, meta_data={}),
            Event(type_="feature_click", target="new-dashboard-button"),
        ],
        user=UserData(user_id="user_123456", email="user@example.com", custom_data={}),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TrackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserDataAndEventsBody](dev_cycle/models/user_data_and_events_body.py) \| [UserDataAndEventsBodyDict](dev_cycle/models/user_data_and_events_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[V1TrackResponse](dev_cycle/models/v1_track_response.py), [PostEventsErrorBody](dev_cycle/errors/post_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TrackResponse](dev_cycle/models/v1_track_response.py)</code> -- Events received successfully

**On `Failure`**: `error` is <code>[PostEventsErrorBody](dev_cycle/errors/post_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomProperties

> Source: [CustomProperties](dev_cycle/apis/custom_properties.py)

<details>
<summary><code>def custom_properties_controller_create(project: str, body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomProperty, CustomPropertiesControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Custom Property

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_properties.with_raw_response.custom_properties_controller_create(
    "some example string",
    CreateCustomPropertyDto(
        name="some example string",
        key="some example string",
        type_=TypeDevCycleManagementCustomPropertiesApi.STRING,
        property_key="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerCreateErrorBody
```

**Async**

```python
result = await async_client.custom_properties.with_raw_response.custom_properties_controller_create(
    "some example string",
    CreateCustomPropertyDto(
        name="some example string",
        key="some example string",
        type_=TypeDevCycleManagementCustomPropertiesApi.STRING,
        property_key="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateCustomPropertyDto](dev_cycle/models/create_custom_property_dto.py) \| [CreateCustomPropertyDtoDict](dev_cycle/models/create_custom_property_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[CustomProperty](dev_cycle/models/custom_property.py), [CustomPropertiesControllerCreateErrorBody](dev_cycle/errors/custom_properties_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**On `Failure`**: `error` is <code>[CustomPropertiesControllerCreateErrorBody](dev_cycle/errors/custom_properties_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def custom_properties_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, type_: Type3OrStr | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CustomProperty], CustomPropertiesControllerFindAllErrorBody]</code></summary>

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
result = client.custom_properties.with_raw_response.custom_properties_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CustomProperty]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.custom_properties.with_raw_response.custom_properties_controller_find_all(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CustomProperty]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type3OrStr](dev_cycle/models/enums/type3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[CustomProperty](dev_cycle/models/custom_property.py)&#93;, [CustomPropertiesControllerFindAllErrorBody](dev_cycle/errors/custom_properties_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CustomProperty](dev_cycle/models/custom_property.py)&#93;</code>

**On `Failure`**: `error` is <code>[CustomPropertiesControllerFindAllErrorBody](dev_cycle/errors/custom_properties_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def custom_properties_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomProperty, CustomPropertiesControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_properties.with_raw_response.custom_properties_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.custom_properties.with_raw_response.custom_properties_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Custom Property key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[CustomProperty](dev_cycle/models/custom_property.py), [CustomPropertiesControllerFindOneErrorBody](dev_cycle/errors/custom_properties_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**On `Failure`**: `error` is <code>[CustomPropertiesControllerFindOneErrorBody](dev_cycle/errors/custom_properties_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def custom_properties_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CustomPropertiesControllerRemoveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_properties.with_raw_response.custom_properties_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.custom_properties.with_raw_response.custom_properties_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Custom Property key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [CustomPropertiesControllerRemoveErrorBody](dev_cycle/errors/custom_properties_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CustomPropertiesControllerRemoveErrorBody](dev_cycle/errors/custom_properties_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def custom_properties_controller_update(key: str, project: str, body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomProperty, CustomPropertiesControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_properties.with_raw_response.custom_properties_controller_update(
    "some example string", "some example string", UpdateCustomPropertyDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.custom_properties.with_raw_response.custom_properties_controller_update(
    "some example string", "some example string", UpdateCustomPropertyDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CustomPropertiesControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Custom Property key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateCustomPropertyDto](dev_cycle/models/update_custom_property_dto.py) \| [UpdateCustomPropertyDtoDict](dev_cycle/models/update_custom_property_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[CustomProperty](dev_cycle/models/custom_property.py), [CustomPropertiesControllerUpdateErrorBody](dev_cycle/errors/custom_properties_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**On `Failure`**: `error` is <code>[CustomPropertiesControllerUpdateErrorBody](dev_cycle/errors/custom_properties_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EdgeDb

> Source: [EdgeDb](dev_cycle/apis/edge_db.py)

<details>
<summary><code>def patch_v1_edgedb_by_user_id(user_id: str, body: UserDataEdgeDb | UserDataEdgeDbDict, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EdgeDbApiResponse, PatchV1EdgedbByUserIdErrorBody]</code></summary>

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
result = client.edge_db.with_raw_response.patch_v1_edgedb_by_user_id(
    "some example string", UserDataEdgeDb(user_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EdgeDbApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PatchV1EdgedbByUserIdErrorBody
```

**Async**

```python
result = await async_client.edge_db.with_raw_response.patch_v1_edgedb_by_user_id(
    "some example string", UserDataEdgeDb(user_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EdgeDbApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PatchV1EdgedbByUserIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | A unique id used to fetch and update the EdgeDB data |
| <code>body</code> | <code>[UserDataEdgeDb](dev_cycle/models/user_data_edge_db.py) \| [UserDataEdgeDbDict](dev_cycle/models/user_data_edge_db.py)</code> | User properties to update the EdgeDB data |
| <code>sdk_key</code> | <code>str \| None</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[EdgeDbApiResponse](dev_cycle/models/edge_db_api_response.py), [PatchV1EdgedbByUserIdErrorBody](dev_cycle/errors/patch_v1_edgedb_by_user_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EdgeDbApiResponse](dev_cycle/models/edge_db_api_response.py)</code> -- Client SDK API Response

**On `Failure`**: `error` is <code>[PatchV1EdgedbByUserIdErrorBody](dev_cycle/errors/patch_v1_edgedb_by_user_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](dev_cycle/apis/environments.py)

<details>
<summary><code>def environments_controller_create(project: str, body: CreateEnvironmentDto | CreateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, EnvironmentsControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new environment for a project. The environment key must be unique within the project. Multiple environments can share a type.
Creating an environment will auto-generate a set of SDK Keys for the various types of SDKs.
When permissions are enabled for the organization, the token must have Publisher permissions for the environment to be created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.environments_controller_create(
    "some example string",
    CreateEnvironmentDto(
        name="some example string", key="some example string", type_=TypeDevCycleManagementEnvironmentsApi.DEVELOPMENT
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerCreateErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.environments_controller_create(
    "some example string",
    CreateEnvironmentDto(
        name="some example string", key="some example string", type_=TypeDevCycleManagementEnvironmentsApi.DEVELOPMENT
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateEnvironmentDto](dev_cycle/models/create_environment_dto.py) \| [CreateEnvironmentDtoDict](dev_cycle/models/create_environment_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[EnvironmentModel](dev_cycle/models/environment_model.py), [EnvironmentsControllerCreateErrorBody](dev_cycle/errors/environments_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**On `Failure`**: `error` is <code>[EnvironmentsControllerCreateErrorBody](dev_cycle/errors/environments_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def environments_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EnvironmentModel], EnvironmentsControllerFindAllErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all environments for a project. If a token does not have permission to view protected environments the environments will be filtered to only show non-protected environments SDK Keys for security.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.environments_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EnvironmentModel]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.environments_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EnvironmentModel]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[EnvironmentModel](dev_cycle/models/environment_model.py)&#93;, [EnvironmentsControllerFindAllErrorBody](dev_cycle/errors/environments_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EnvironmentModel](dev_cycle/models/environment_model.py)&#93;</code>

**On `Failure`**: `error` is <code>[EnvironmentsControllerFindAllErrorBody](dev_cycle/errors/environments_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def environments_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, EnvironmentsControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the environment; if the token does not have permission to view protected environments, the environment will be filtered to only show non-protected SDK Keys for security.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.environments_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.environments_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Environment key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[EnvironmentModel](dev_cycle/models/environment_model.py), [EnvironmentsControllerFindOneErrorBody](dev_cycle/errors/environments_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**On `Failure`**: `error` is <code>[EnvironmentsControllerFindOneErrorBody](dev_cycle/errors/environments_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def environments_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, EnvironmentsControllerRemoveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Environment by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.environments_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.environments_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Environment key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [EnvironmentsControllerRemoveErrorBody](dev_cycle/errors/environments_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[EnvironmentsControllerRemoveErrorBody](dev_cycle/errors/environments_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[CannotDeleteLastItemErrorResponse](dev_cycle/models/cannot_delete_last_item_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def environments_controller_update(key: str, project: str, body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, EnvironmentsControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an environment by ID or key. The environment key (if edited) must be unique within the project. If permissions are enabled, changing a protected environment type requires Publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.environments_controller_update(
    "some example string", "some example string", UpdateEnvironmentDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.environments_controller_update(
    "some example string", "some example string", UpdateEnvironmentDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnvironmentsControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Environment key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateEnvironmentDto](dev_cycle/models/update_environment_dto.py) \| [UpdateEnvironmentDtoDict](dev_cycle/models/update_environment_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[EnvironmentModel](dev_cycle/models/environment_model.py), [EnvironmentsControllerUpdateErrorBody](dev_cycle/errors/environments_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**On `Failure`**: `error` is <code>[EnvironmentsControllerUpdateErrorBody](dev_cycle/errors/environments_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sdk_keys_controller_generate(environment: str, project: str, body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, SdkKeysControllerGenerateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys.
Generating new keys is restricted for protected environments to those with Publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.sdk_keys_controller_generate(
    "some example string", "some example string", GenerateSdkTokensDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SdkKeysControllerGenerateErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.sdk_keys_controller_generate(
    "some example string", "some example string", GenerateSdkTokensDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SdkKeysControllerGenerateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment</code> | <code>str</code> | An Environment key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[GenerateSdkTokensDto](dev_cycle/models/generate_sdk_tokens_dto.py) \| [GenerateSdkTokensDtoDict](dev_cycle/models/generate_sdk_tokens_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[EnvironmentModel](dev_cycle/models/environment_model.py), [SdkKeysControllerGenerateErrorBody](dev_cycle/errors/sdk_keys_controller_generate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**On `Failure`**: `error` is <code>[SdkKeysControllerGenerateErrorBody](dev_cycle/errors/sdk_keys_controller_generate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sdk_keys_controller_invalidate(key: str, environment: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SdkKeysControllerInvalidateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.sdk_keys_controller_invalidate(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SdkKeysControllerInvalidateErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.sdk_keys_controller_invalidate(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SdkKeysControllerInvalidateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | An SDK key |
| <code>environment</code> | <code>str</code> | An Environment key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [SdkKeysControllerInvalidateErrorBody](dev_cycle/errors/sdk_keys_controller_invalidate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SdkKeysControllerInvalidateErrorBody](dev_cycle/errors/sdk_keys_controller_invalidate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[CannotDeleteLastItemErrorResponse](dev_cycle/models/cannot_delete_last_item_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureChangeRequests

> Source: [FeatureChangeRequests](dev_cycle/apis/feature_change_requests.py)

<details>
<summary><code>def feature_change_requests_controller_apply_feature_change_request(id_: str, feature: str, project: str, body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_apply_feature_change_request(
    "some example string",
    "some example string",
    "some example string",
    ApplyFeatureChangeRequestDto(description="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_apply_feature_change_request(
    "some example string",
    "some example string",
    "some example string",
    ApplyFeatureChangeRequestDto(description="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[ApplyFeatureChangeRequestDto](dev_cycle/models/apply_feature_change_request_dto.py) \| [ApplyFeatureChangeRequestDtoDict](dev_cycle/models/apply_feature_change_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_apply_feature_change_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_apply_feature_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_cancel_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_cancel_feature_change_request(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_cancel_feature_change_request(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_cancel_feature_change_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_cancel_feature_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_create_change_request(feature: str, project: str, body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerCreateChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature Change Request

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_create_change_request(
    "some example string", "some example string", CreateFeatureChangeRequestDto(path="some example string", body={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerCreateChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_create_change_request(
    "some example string", "some example string", CreateFeatureChangeRequestDto(path="some example string", body={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerCreateChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureChangeRequestDto](dev_cycle/models/create_feature_change_request_dto.py) \| [CreateFeatureChangeRequestDtoDict](dev_cycle/models/create_feature_change_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py), [FeatureChangeRequestsControllerCreateChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_create_change_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerCreateChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_create_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 412 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_get_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_feature_change_request(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_feature_change_request(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py), [FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_feature_change_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_feature_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_get_latest_feature_change_request(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_latest_feature_change_request(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_latest_feature_change_request(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py), [FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_latest_feature_change_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_latest_feature_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_get_pending_feature_change_requests(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureChangeRequest], FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all pending Feature Change Requests for a Feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_pending_feature_change_requests(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureChangeRequest]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_get_pending_feature_change_requests(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureChangeRequest]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)&#93;, [FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody](dev_cycle/errors/feature_change_requests_controller_get_pending_feature_change_requests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody](dev_cycle/errors/feature_change_requests_controller_get_pending_feature_change_requests_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_review_feature_change_request(id_: str, feature: str, project: str, body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict, *, apply: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_review_feature_change_request(
    "some example string",
    "some example string",
    "some example string",
    ReviewFeatureChangeRequestDto(action=Action.APPROVED, comment="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_review_feature_change_request(
    "some example string",
    "some example string",
    "some example string",
    ReviewFeatureChangeRequestDto(action=Action.APPROVED, comment="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[ReviewFeatureChangeRequestDto](dev_cycle/models/review_feature_change_request_dto.py) \| [ReviewFeatureChangeRequestDtoDict](dev_cycle/models/review_feature_change_request_dto.py)</code> | The request body. |
| <code>apply</code> | <code>bool \| None</code> | Controls whether the review should also apply the change request to the feature<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_review_feature_change_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_review_feature_change_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_change_requests_controller_submit_change_request_for_review(id_: str, feature: str, project: str, body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a Feature Change Request for Review

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_change_requests.with_raw_response.feature_change_requests_controller_submit_change_request_for_review(
    "some example string",
    "some example string",
    "some example string",
    SubmitFeatureChangeRequestDto(description="some example string", reviewers=["some example string"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody
```

**Async**

```python
result = await async_client.feature_change_requests.with_raw_response.feature_change_requests_controller_submit_change_request_for_review(
    "some example string",
    "some example string",
    "some example string",
    SubmitFeatureChangeRequestDto(description="some example string", reviewers=["some example string"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureChangeRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[SubmitFeatureChangeRequestDto](dev_cycle/models/submit_feature_change_request_dto.py) \| [SubmitFeatureChangeRequestDtoDict](dev_cycle/models/submit_feature_change_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py), [FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody](dev_cycle/errors/feature_change_requests_controller_submit_change_request_for_review_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**On `Failure`**: `error` is <code>[FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody](dev_cycle/errors/feature_change_requests_controller_submit_change_request_for_review_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureConfigurations

> Source: [FeatureConfigurations](dev_cycle/apis/feature_configurations.py)

<details>
<summary><code>def feature_configs_controller_find_all(feature: str, project: str, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureConfig], FeatureConfigsControllerFindAllErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Feature configurations for all environments or by environment key or ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_configurations.with_raw_response.feature_configs_controller_find_all(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureConfig]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureConfigsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.feature_configurations.with_raw_response.feature_configs_controller_find_all(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureConfig]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureConfigsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>environment</code> | <code>str \| None</code> | A Environment key or ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureConfig](dev_cycle/models/feature_config.py)&#93;, [FeatureConfigsControllerFindAllErrorBody](dev_cycle/errors/feature_configs_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureConfig](dev_cycle/models/feature_config.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeatureConfigsControllerFindAllErrorBody](dev_cycle/errors/feature_configs_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def feature_configs_controller_update(feature: str, project: str, environment: str, body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureConfig, FeatureConfigsControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature configuration by environment key or ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_configurations.with_raw_response.feature_configs_controller_update(
    "some example string", "some example string", "some example string", UpdateFeatureConfigDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureConfigsControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.feature_configurations.with_raw_response.feature_configs_controller_update(
    "some example string", "some example string", "some example string", UpdateFeatureConfigDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeatureConfigsControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>environment</code> | <code>str</code> | A Environment key or ID |
| <code>body</code> | <code>[UpdateFeatureConfigDto](dev_cycle/models/update_feature_config_dto.py) \| [UpdateFeatureConfigDtoDict](dev_cycle/models/update_feature_config_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureConfig](dev_cycle/models/feature_config.py), [FeatureConfigsControllerUpdateErrorBody](dev_cycle/errors/feature_configs_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureConfig](dev_cycle/models/feature_config.py)</code>

**On `Failure`**: `error` is <code>[FeatureConfigsControllerUpdateErrorBody](dev_cycle/errors/feature_configs_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureOptIn

> Source: [FeatureOptIn](dev_cycle/apis/feature_opt_in.py)

<details>
<summary><code>def get_v1_opt_in_config(user_id: str, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OptInConfigResponse, GetV1OptInConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a project config to display features available for Opt-in

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feature_opt_in.with_raw_response.get_v1_opt_in_config("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OptInConfigResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1OptInConfigErrorBody
```

**Async**

```python
result = await async_client.feature_opt_in.with_raw_response.get_v1_opt_in_config("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OptInConfigResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetV1OptInConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Unique id to identify the user |
| <code>sdk_key</code> | <code>str \| None</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[OptInConfigResponse](dev_cycle/models/opt_in_config_response.py), [GetV1OptInConfigErrorBody](dev_cycle/errors/get_v1_opt_in_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OptInConfigResponse](dev_cycle/models/opt_in_config_response.py)</code> -- Opt-in Config Response

**On `Failure`**: `error` is <code>[GetV1OptInConfigErrorBody](dev_cycle/errors/get_v1_opt_in_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_v1_opt_ins_by_user_id(user_id: str, body: dict[str, bool], *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1OptInsResponse, PutV1OptInsByUserIdErrorBody]</code></summary>

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
result = client.feature_opt_in.with_raw_response.put_v1_opt_ins_by_user_id(
    "some example string", {"614ef6aa473928459060721a": True, "614ef6aa473928459060721b": False}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OptInsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutV1OptInsByUserIdErrorBody
```

**Async**

```python
result = await async_client.feature_opt_in.with_raw_response.put_v1_opt_ins_by_user_id(
    "some example string", {"614ef6aa473928459060721a": True, "614ef6aa473928459060721b": False}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OptInsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutV1OptInsByUserIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Unique user_id to identify the user |
| <code>body</code> | <code>dict&#91;str, bool&#93;</code> | A map of feature IDs to boolean values. The value should be true if the user has opted in, false otherwise |
| <code>sdk_key</code> | <code>str \| None</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[V1OptInsResponse](dev_cycle/models/v1_opt_ins_response.py), [PutV1OptInsByUserIdErrorBody](dev_cycle/errors/put_v1_opt_ins_by_user_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1OptInsResponse](dev_cycle/models/v1_opt_ins_response.py)</code> -- Opt-in update success response

**On `Failure`**: `error` is <code>[PutV1OptInsByUserIdErrorBody](dev_cycle/errors/put_v1_opt_ins_by_user_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[ErrorResponse](dev_cycle/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FeaturesV2

> Source: [FeaturesV2](dev_cycle/apis/features_v2.py)

<details>
<summary><code>def features_controller_create(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.features_v2.with_raw_response.features_controller_create(
    "some example string",
    CreateFeatureDto(
        key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_create(
    "some example string",
    CreateFeatureDto(
        key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureDto](dev_cycle/models/create_feature_dto.py) \| [CreateFeatureDtoDict](dev_cycle/models/create_feature_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerCreateErrorBody](dev_cycle/errors/features_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerCreateErrorBody](dev_cycle/errors/features_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, custom_status: list[str] | None = None, keys: list[str] | None = None, include_latest_update: bool | None = None, staleness: StalenessOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllErrorBody]</code></summary>

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
result = client.features_v2.with_raw_response.features_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type9OrStr](dev_cycle/models/enums/type9.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status5OrStr](dev_cycle/models/enums/status5.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_status</code> | <code>list&#91;str&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>keys</code> | <code>list&#91;str&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_latest_update</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>staleness</code> | <code>[StalenessOrStr](dev_cycle/models/enums/staleness.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;, [FeaturesControllerFindAllErrorBody](dev_cycle/errors/features_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindAllErrorBody](dev_cycle/errors/features_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.features_v2.with_raw_response.features_controller_find_one("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerFindOneErrorBody](dev_cycle/errors/features_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindOneErrorBody](dev_cycle/errors/features_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_static_configuration(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.features_v2.with_raw_response.features_controller_find_static_configuration(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindStaticConfigurationErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_find_static_configuration(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindStaticConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[StaticConfiguration](dev_cycle/models/static_configuration.py), [FeaturesControllerFindStaticConfigurationErrorBody](dev_cycle/errors/features_controller_find_static_configuration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindStaticConfigurationErrorBody](dev_cycle/errors/features_controller_find_static_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_get_staleness(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureStalenessEntity, FeaturesControllerGetStalenessErrorBody]</code></summary>

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
result = client.features_v2.with_raw_response.features_controller_get_staleness(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureStalenessEntity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerGetStalenessErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_get_staleness(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureStalenessEntity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerGetStalenessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py), [FeaturesControllerGetStalenessErrorBody](dev_cycle/errors/features_controller_get_staleness_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerGetStalenessErrorBody](dev_cycle/errors/features_controller_get_staleness_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.features_v2.with_raw_response.features_controller_update(
    "some example string", "some example string", UpdateFeatureDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_update(
    "some example string", "some example string", UpdateFeatureDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureDto](dev_cycle/models/update_feature_dto.py) \| [UpdateFeatureDtoDict](dev_cycle/models/update_feature_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerUpdateErrorBody](dev_cycle/errors/features_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateErrorBody](dev_cycle/errors/features_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_staleness(feature: str, project: str, body: UpdateStalenessDto | UpdateStalenessDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureStalenessEntity, FeaturesControllerUpdateStalenessErrorBody]</code></summary>

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
result = client.features_v2.with_raw_response.features_controller_update_staleness(
    "some example string", "some example string", UpdateStalenessDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureStalenessEntity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStalenessErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_update_staleness(
    "some example string", "some example string", UpdateStalenessDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureStalenessEntity
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStalenessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStalenessDto](dev_cycle/models/update_staleness_dto.py) \| [UpdateStalenessDtoDict](dev_cycle/models/update_staleness_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py), [FeaturesControllerUpdateStalenessErrorBody](dev_cycle/errors/features_controller_update_staleness_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateStalenessErrorBody](dev_cycle/errors/features_controller_update_staleness_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_static_configuration(feature: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.features_v2.with_raw_response.features_controller_update_static_configuration(
    "some example string", "some example string", UpdateStaticConfigurationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStaticConfigurationErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_update_static_configuration(
    "some example string", "some example string", UpdateStaticConfigurationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStaticConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStaticConfigurationDto](dev_cycle/models/update_static_configuration_dto.py) \| [UpdateStaticConfigurationDtoDict](dev_cycle/models/update_static_configuration_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[StaticConfiguration](dev_cycle/models/static_configuration.py), [FeaturesControllerUpdateStaticConfigurationErrorBody](dev_cycle/errors/features_controller_update_static_configuration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateStaticConfigurationErrorBody](dev_cycle/errors/features_controller_update_static_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_status(feature: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusErrorBody]</code></summary>

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
result = client.features_v2.with_raw_response.features_controller_update_status(
    "some example string", "some example string", UpdateFeatureStatusDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStatusErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_update_status(
    "some example string", "some example string", UpdateFeatureStatusDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureStatusDto](dev_cycle/models/update_feature_status_dto.py) \| [UpdateFeatureStatusDtoDict](dev_cycle/models/update_feature_status_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerUpdateStatusErrorBody](dev_cycle/errors/features_controller_update_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateStatusErrorBody](dev_cycle/errors/features_controller_update_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_summary(feature: str, project: str, body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureSummary, FeaturesControllerUpdateSummaryErrorBody]</code></summary>

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
result = client.features_v2.with_raw_response.features_controller_update_summary(
    "some example string", "some example string", UpdateFeatureSummaryDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateSummaryErrorBody
```

**Async**

```python
result = await async_client.features_v2.with_raw_response.features_controller_update_summary(
    "some example string", "some example string", UpdateFeatureSummaryDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureSummaryDto](dev_cycle/models/update_feature_summary_dto.py) \| [UpdateFeatureSummaryDtoDict](dev_cycle/models/update_feature_summary_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureSummary](dev_cycle/models/feature_summary.py), [FeaturesControllerUpdateSummaryErrorBody](dev_cycle/errors/features_controller_update_summary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureSummary](dev_cycle/models/feature_summary.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateSummaryErrorBody](dev_cycle/errors/features_controller_update_summary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsDynatrace

> Source: [IntegrationsDynatrace](dev_cycle/apis/integrations_dynatrace.py)

<details>
<summary><code>def dynatrace_integration_controller_create_integration(body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DynatraceIntegrationControllerCreateIntegrationErrorBody]</code></summary>

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
result = client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_create_integration(
    CreateDynatraceIntegrationDto(
        dynatrace_environment_id="some example string",
        access_token="some example string",
        environment_url="some example string",
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerCreateIntegrationErrorBody
```

**Async**

```python
result = await async_client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_create_integration(
    CreateDynatraceIntegrationDto(
        dynatrace_environment_id="some example string",
        access_token="some example string",
        environment_url="some example string",
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerCreateIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateDynatraceIntegrationDto](dev_cycle/models/create_dynatrace_integration_dto.py) \| [CreateDynatraceIntegrationDtoDict](dev_cycle/models/create_dynatrace_integration_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [DynatraceIntegrationControllerCreateIntegrationErrorBody](dev_cycle/errors/dynatrace_integration_controller_create_integration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DynatraceIntegrationControllerCreateIntegrationErrorBody](dev_cycle/errors/dynatrace_integration_controller_create_integration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dynatrace_integration_controller_delete_environment(dynatrace_environment_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DynatraceIntegrationControllerDeleteEnvironmentErrorBody]</code></summary>

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
result = client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_delete_environment(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerDeleteEnvironmentErrorBody
```

**Async**

```python
result = await async_client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_delete_environment(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerDeleteEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dynatrace_environment_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [DynatraceIntegrationControllerDeleteEnvironmentErrorBody](dev_cycle/errors/dynatrace_integration_controller_delete_environment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DynatraceIntegrationControllerDeleteEnvironmentErrorBody](dev_cycle/errors/dynatrace_integration_controller_delete_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dynatrace_integration_controller_get_integrations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DynatraceIntegration, DynatraceIntegrationControllerGetIntegrationsErrorBody]</code></summary>

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
result = client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_get_integrations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DynatraceIntegration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerGetIntegrationsErrorBody
```

**Async**

```python
result = await async_client.integrations_dynatrace.with_raw_response.dynatrace_integration_controller_get_integrations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DynatraceIntegration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DynatraceIntegrationControllerGetIntegrationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[DynatraceIntegration](dev_cycle/models/dynatrace_integration.py), [DynatraceIntegrationControllerGetIntegrationsErrorBody](dev_cycle/errors/dynatrace_integration_controller_get_integrations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DynatraceIntegration](dev_cycle/models/dynatrace_integration.py)</code> -- Integrations fetched successfully

**On `Failure`**: `error` is <code>[DynatraceIntegrationControllerGetIntegrationsErrorBody](dev_cycle/errors/dynatrace_integration_controller_get_integrations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsJira

> Source: [IntegrationsJira](dev_cycle/apis/integrations_jira.py)

<details>
<summary><code>def jira_integration_controller_remove(token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or /integrations/jira/project/:token instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations_jira.with_raw_response.jira_integration_controller_remove("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.integrations_jira.with_raw_response.jira_integration_controller_remove(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [RawError](dev_cycle/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](dev_cycle/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jira_integration_controller_remove_organization_connection(token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, JiraIntegrationControllerRemoveOrganizationConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the Jira integration configuration for an organization. This will remove the integration for an organization wide connection, but not project connections.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations_jira.with_raw_response.jira_integration_controller_remove_organization_connection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JiraIntegrationControllerRemoveOrganizationConnectionErrorBody
```

**Async**

```python
result = await async_client.integrations_jira.with_raw_response.jira_integration_controller_remove_organization_connection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JiraIntegrationControllerRemoveOrganizationConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [JiraIntegrationControllerRemoveOrganizationConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_organization_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[JiraIntegrationControllerRemoveOrganizationConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_organization_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jira_integration_controller_remove_project_connection(token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, JiraIntegrationControllerRemoveProjectConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations_jira.with_raw_response.jira_integration_controller_remove_project_connection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JiraIntegrationControllerRemoveProjectConnectionErrorBody
```

**Async**

```python
result = await async_client.integrations_jira.with_raw_response.jira_integration_controller_remove_project_connection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JiraIntegrationControllerRemoveProjectConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [JiraIntegrationControllerRemoveProjectConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_project_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[JiraIntegrationControllerRemoveProjectConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_project_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MetricAssociations

> Source: [MetricAssociations](dev_cycle/apis/metric_associations.py)

<details>
<summary><code>def metric_associations_controller_create(project: str, body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricAssociation, MetricAssociationsControllerCreateErrorBody]</code></summary>

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
result = client.metric_associations.with_raw_response.metric_associations_controller_create(
    "some example string", CreateMetricAssociationDto(metric="some example string", feature="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricAssociation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerCreateErrorBody
```

**Async**

```python
result = await async_client.metric_associations.with_raw_response.metric_associations_controller_create(
    "some example string", CreateMetricAssociationDto(metric="some example string", feature="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricAssociation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateMetricAssociationDto](dev_cycle/models/create_metric_association_dto.py) \| [CreateMetricAssociationDtoDict](dev_cycle/models/create_metric_association_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricAssociation](dev_cycle/models/metric_association.py), [MetricAssociationsControllerCreateErrorBody](dev_cycle/errors/metric_associations_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricAssociation](dev_cycle/models/metric_association.py)</code>

**On `Failure`**: `error` is <code>[MetricAssociationsControllerCreateErrorBody](dev_cycle/errors/metric_associations_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metric_associations_controller_find_all(project: str, *, metric: str | None = None, feature: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[MetricAssociation], MetricAssociationsControllerFindAllErrorBody]</code></summary>

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
result = client.metric_associations.with_raw_response.metric_associations_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MetricAssociation]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.metric_associations.with_raw_response.metric_associations_controller_find_all(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MetricAssociation]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>metric</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>feature</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[MetricAssociation](dev_cycle/models/metric_association.py)&#93;, [MetricAssociationsControllerFindAllErrorBody](dev_cycle/errors/metric_associations_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[MetricAssociation](dev_cycle/models/metric_association.py)&#93;</code>

**On `Failure`**: `error` is <code>[MetricAssociationsControllerFindAllErrorBody](dev_cycle/errors/metric_associations_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metric_associations_controller_remove(project: str, metric: str, feature: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, MetricAssociationsControllerRemoveErrorBody]</code></summary>

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
result = client.metric_associations.with_raw_response.metric_associations_controller_remove(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.metric_associations.with_raw_response.metric_associations_controller_remove(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricAssociationsControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>metric</code> | <code>str</code> | Value sent with the request. |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [MetricAssociationsControllerRemoveErrorBody](dev_cycle/errors/metric_associations_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[MetricAssociationsControllerRemoveErrorBody](dev_cycle/errors/metric_associations_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](dev_cycle/apis/metrics.py)

<details>
<summary><code>def metrics_controller_create(project: str, body: CreateMetricDto | CreateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Metric

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.metrics.with_raw_response.metrics_controller_create(
    "some example string",
    CreateMetricDto(
        name="some example string",
        key="some example string",
        event="some example string",
        dimension=Dimension.COUNT_PER_UNIQUE_USER,
        optimize=Optimize.INCREASE,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerCreateErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_create(
    "some example string",
    CreateMetricDto(
        name="some example string",
        key="some example string",
        event="some example string",
        dimension=Dimension.COUNT_PER_UNIQUE_USER,
        optimize=Optimize.INCREASE,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateMetricDto](dev_cycle/models/create_metric_dto.py) \| [CreateMetricDtoDict](dev_cycle/models/create_metric_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py), [MetricsControllerCreateErrorBody](dev_cycle/errors/metrics_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**On `Failure`**: `error` is <code>[MetricsControllerCreateErrorBody](dev_cycle/errors/metrics_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metrics_controller_fetch_results(key: str, project: str, feature: str, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricResult, MetricsControllerFetchResultsErrorBody]</code></summary>

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
result = client.metrics.with_raw_response.metrics_controller_fetch_results(
    "some example string",
    "some example string",
    "some example string",
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFetchResultsErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_fetch_results(
    "some example string",
    "some example string",
    "some example string",
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFetchResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>start_date</code> | <code>RFC3339DateTime</code> | Value sent with the request. |
| <code>end_date</code> | <code>RFC3339DateTime</code> | Value sent with the request. |
| <code>environment</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricResult](dev_cycle/models/metric_result.py), [MetricsControllerFetchResultsErrorBody](dev_cycle/errors/metrics_controller_fetch_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricResult](dev_cycle/models/metric_result.py)</code>

**On `Failure`**: `error` is <code>[MetricsControllerFetchResultsErrorBody](dev_cycle/errors/metrics_controller_fetch_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metrics_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, dimension: Dimension3OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[MetricDevCycleManagementMetricsApi], MetricsControllerFindAllErrorBody]</code></summary>

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
result = client.metrics.with_raw_response.metrics_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MetricDevCycleManagementMetricsApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[MetricDevCycleManagementMetricsApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dimension</code> | <code>[Dimension3OrStr](dev_cycle/models/enums/dimension3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)&#93;, [MetricsControllerFindAllErrorBody](dev_cycle/errors/metrics_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)&#93;</code>

**On `Failure`**: `error` is <code>[MetricsControllerFindAllErrorBody](dev_cycle/errors/metrics_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metrics_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerFindOneErrorBody]</code></summary>

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
result = client.metrics.with_raw_response.metrics_controller_find_one("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py), [MetricsControllerFindOneErrorBody](dev_cycle/errors/metrics_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**On `Failure`**: `error` is <code>[MetricsControllerFindOneErrorBody](dev_cycle/errors/metrics_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metrics_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, MetricsControllerRemoveErrorBody]</code></summary>

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
result = client.metrics.with_raw_response.metrics_controller_remove("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [MetricsControllerRemoveErrorBody](dev_cycle/errors/metrics_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[MetricsControllerRemoveErrorBody](dev_cycle/errors/metrics_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metrics_controller_update(key: str, project: str, body: UpdateMetricDto | UpdateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerUpdateErrorBody]</code></summary>

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
result = client.metrics.with_raw_response.metrics_controller_update(
    "some example string", "some example string", UpdateMetricDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.metrics_controller_update(
    "some example string", "some example string", UpdateMetricDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricDevCycleManagementMetricsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetricsControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateMetricDto](dev_cycle/models/update_metric_dto.py) \| [UpdateMetricDtoDict](dev_cycle/models/update_metric_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py), [MetricsControllerUpdateErrorBody](dev_cycle/errors/metrics_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**On `Failure`**: `error` is <code>[MetricsControllerUpdateErrorBody](dev_cycle/errors/metrics_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_metric_results_controller_fetch(project: str, feature: str, control: str, optimize: Optimize3OrStr, event: str, dimension: Dimension3OrStr, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetricResult, TestMetricResultsControllerFetchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch metric results with the given parameters

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.metrics.with_raw_response.test_metric_results_controller_fetch(
    "some example string",
    "some example string",
    "some example string",
    Optimize3.INCREASE,
    "some example string",
    Dimension3.COUNT_PER_UNIQUE_USER,
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestMetricResultsControllerFetchErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.test_metric_results_controller_fetch(
    "some example string",
    "some example string",
    "some example string",
    Optimize3.INCREASE,
    "some example string",
    Dimension3.COUNT_PER_UNIQUE_USER,
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetricResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestMetricResultsControllerFetchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>control</code> | <code>str</code> | Value sent with the request. |
| <code>optimize</code> | <code>[Optimize3OrStr](dev_cycle/models/enums/optimize3.py)</code> | Value sent with the request. |
| <code>event</code> | <code>str</code> | Value sent with the request. |
| <code>dimension</code> | <code>[Dimension3OrStr](dev_cycle/models/enums/dimension3.py)</code> | Value sent with the request. |
| <code>start_date</code> | <code>RFC3339DateTime</code> | Value sent with the request. |
| <code>end_date</code> | <code>RFC3339DateTime</code> | Value sent with the request. |
| <code>environment</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[MetricResult](dev_cycle/models/metric_result.py), [TestMetricResultsControllerFetchErrorBody](dev_cycle/errors/test_metric_results_controller_fetch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetricResult](dev_cycle/models/metric_result.py)</code>

**On `Failure`**: `error` is <code>[TestMetricResultsControllerFetchErrorBody](dev_cycle/errors/test_metric_results_controller_fetch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OpenFeatureRemoteEvaluationApiOfrep

> Source: [OpenFeatureRemoteEvaluationApiOfrep](dev_cycle/apis/open_feature_remote_evaluation_api_ofrep.py)

<details>
<summary><code>def post_ofrep_v1_evaluate_flags(*, if_none_match: str | None = None, body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OfrepBulkEvaluationSuccess, PostOfrepV1EvaluateFlagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return all flag values for a user context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.open_feature_remote_evaluation_api_ofrep.with_raw_response.post_ofrep_v1_evaluate_flags()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OfrepBulkEvaluationSuccess
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostOfrepV1EvaluateFlagsErrorBody
```

**Async**

```python
result = await async_client.open_feature_remote_evaluation_api_ofrep.with_raw_response.post_ofrep_v1_evaluate_flags()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OfrepBulkEvaluationSuccess
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostOfrepV1EvaluateFlagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>if_none_match</code> | <code>str \| None</code> | The request will be processed only if ETag doesn't match any of the values listed.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[OfrepBulkEvaluationRequest](dev_cycle/models/ofrep_bulk_evaluation_request.py) \| [OfrepBulkEvaluationRequestDict](dev_cycle/models/ofrep_bulk_evaluation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[OfrepBulkEvaluationSuccess](dev_cycle/models/ofrep_bulk_evaluation_success.py), [PostOfrepV1EvaluateFlagsErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OfrepBulkEvaluationSuccess](dev_cycle/models/ofrep_bulk_evaluation_success.py)</code> -- OFREP successful evaluation response

**On `Failure`**: `error` is <code>[PostOfrepV1EvaluateFlagsErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[OfrepBulkEvaluationFailure](dev_cycle/models/ofrep_bulk_evaluation_failure.py)</code> |
| 401, 403, 429 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 500 | <code>[OfrepGeneralErrorResponse](dev_cycle/models/ofrep_general_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_ofrep_v1_evaluate_flags_by_key(key: str, *, body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OfrepEvaluationSuccess, PostOfrepV1EvaluateFlagsByKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single flag for a user context

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.open_feature_remote_evaluation_api_ofrep.with_raw_response.post_ofrep_v1_evaluate_flags_by_key(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OfrepEvaluationSuccess
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostOfrepV1EvaluateFlagsByKeyErrorBody
```

**Async**

```python
result = await async_client.open_feature_remote_evaluation_api_ofrep.with_raw_response.post_ofrep_v1_evaluate_flags_by_key(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OfrepEvaluationSuccess
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostOfrepV1EvaluateFlagsByKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[OfrepEvaluationRequest](dev_cycle/models/ofrep_evaluation_request.py) \| [OfrepEvaluationRequestDict](dev_cycle/models/ofrep_evaluation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[OfrepEvaluationSuccess](dev_cycle/models/ofrep_evaluation_success.py), [PostOfrepV1EvaluateFlagsByKeyErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_by_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OfrepEvaluationSuccess](dev_cycle/models/ofrep_evaluation_success.py)</code> -- OFREP successful evaluation response

**On `Failure`**: `error` is <code>[PostOfrepV1EvaluateFlagsByKeyErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_by_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[OfrepEvaluationFailure](dev_cycle/models/ofrep_evaluation_failure.py)</code> |
| 401, 403, 429 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[OfrepFlagNotFound](dev_cycle/models/ofrep_flag_not_found.py)</code> |
| 500 | <code>[OfrepGeneralErrorResponse](dev_cycle/models/ofrep_general_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Overrides

> Source: [Overrides](dev_cycle/apis/overrides.py)

<details>
<summary><code>def overrides_controller_delete_overrides_for_feature(feature: str, project: str, environment: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, OverridesControllerDeleteOverridesForFeatureErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_delete_overrides_for_feature(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerDeleteOverridesForFeatureErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_delete_overrides_for_feature(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerDeleteOverridesForFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>environment</code> | <code>str</code> | A Environment key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [OverridesControllerDeleteOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_feature_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[OverridesControllerDeleteOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overrides_controller_delete_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, OverridesControllerDeleteOverridesForProjectErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_delete_overrides_for_project("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerDeleteOverridesForProjectErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_delete_overrides_for_project(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerDeleteOverridesForProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [OverridesControllerDeleteOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[OverridesControllerDeleteOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overrides_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OverrideResponse, OverridesControllerFindOneErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_find_one("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OverrideResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OverrideResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[OverrideResponse](dev_cycle/models/override_response.py), [OverridesControllerFindOneErrorBody](dev_cycle/errors/overrides_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OverrideResponse](dev_cycle/models/override_response.py)</code>

**On `Failure`**: `error` is <code>[OverridesControllerFindOneErrorBody](dev_cycle/errors/overrides_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overrides_controller_find_overrides_for_feature(feature: str, project: str, *, add_metadata: bool | None = None, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureOverrides, OverridesControllerFindOverridesForFeatureErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_find_overrides_for_feature(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureOverrides
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOverridesForFeatureErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_find_overrides_for_feature(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureOverrides
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOverridesForFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>add_metadata</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>environment</code> | <code>str \| None</code> | A Environment key or ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureOverrides](dev_cycle/models/feature_overrides.py), [OverridesControllerFindOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_feature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureOverrides](dev_cycle/models/feature_overrides.py)</code>

**On `Failure`**: `error` is <code>[OverridesControllerFindOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overrides_controller_find_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UserOverride], OverridesControllerFindOverridesForProjectErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_find_overrides_for_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UserOverride]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOverridesForProjectErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_find_overrides_for_project(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UserOverride]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerFindOverridesForProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[UserOverride](dev_cycle/models/user_override.py)&#93;, [OverridesControllerFindOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UserOverride](dev_cycle/models/user_override.py)&#93;</code>

**On `Failure`**: `error` is <code>[OverridesControllerFindOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overrides_controller_update_feature_override(feature: str, project: str, body: UpdateOverrideDto | UpdateOverrideDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Override, OverridesControllerUpdateFeatureOverrideErrorBody]</code></summary>

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
result = client.overrides.with_raw_response.overrides_controller_update_feature_override(
    "some example string",
    "some example string",
    UpdateOverrideDto(environment="some example string", variation="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Override
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerUpdateFeatureOverrideErrorBody
```

**Async**

```python
result = await async_client.overrides.with_raw_response.overrides_controller_update_feature_override(
    "some example string",
    "some example string",
    UpdateOverrideDto(environment="some example string", variation="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Override
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverridesControllerUpdateFeatureOverrideErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateOverrideDto](dev_cycle/models/update_override_dto.py) \| [UpdateOverrideDtoDict](dev_cycle/models/update_override_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Override](dev_cycle/models/override.py), [OverridesControllerUpdateFeatureOverrideErrorBody](dev_cycle/errors/overrides_controller_update_feature_override_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Override](dev_cycle/models/override.py)</code>

**On `Failure`**: `error` is <code>[OverridesControllerUpdateFeatureOverrideErrorBody](dev_cycle/errors/overrides_controller_update_feature_override_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectChangeRequests

> Source: [ProjectChangeRequests](dev_cycle/apis/project_change_requests.py)

<details>
<summary><code>def project_change_requests_controller_get_feature_change_requests(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None, reviewer: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureChangeRequestSummary], ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody]</code></summary>

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
result = client.project_change_requests.with_raw_response.project_change_requests_controller_get_feature_change_requests(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureChangeRequestSummary]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody
```

**Async**

```python
result = await async_client.project_change_requests.with_raw_response.project_change_requests_controller_get_feature_change_requests(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureChangeRequestSummary]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1DevCycleManagementProjectChangeRequestsApiOrStr](dev_cycle/models/enums/status1_dev_cycle_management_project_change_requests_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>reviewer</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureChangeRequestSummary](dev_cycle/models/feature_change_request_summary.py)&#93;, [ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody](dev_cycle/errors/project_change_requests_controller_get_feature_change_requests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureChangeRequestSummary](dev_cycle/models/feature_change_request_summary.py)&#93;</code>

**On `Failure`**: `error` is <code>[ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody](dev_cycle/errors/project_change_requests_controller_get_feature_change_requests_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](dev_cycle/apis/projects.py)

<details>
<summary><code>def projects_controller_create(body: CreateProjectDto | CreateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, ProjectsControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project within the authed organization.
The project key must be unique within the organization.
If this is called in an Organization that has permissions controlled via an external IdP (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only) - then no users will have permission to access this project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_create(
    CreateProjectDto(name="some example string", key="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerCreateErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_create(
    CreateProjectDto(name="some example string", key="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProjectDto](dev_cycle/models/create_project_dto.py) \| [CreateProjectDtoDict](dev_cycle/models/create_project_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Project](dev_cycle/models/project.py), [ProjectsControllerCreateErrorBody](dev_cycle/errors/projects_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](dev_cycle/models/project.py)</code> -- The project has been successfully created

**On `Failure`**: `error` is <code>[ProjectsControllerCreateErrorBody](dev_cycle/errors/projects_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_find_all(*, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Project], ProjectsControllerFindAllErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all projects that the current API Token has permission to view.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_find_all()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_find_all()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[Project](dev_cycle/models/project.py)&#93;, [ProjectsControllerFindAllErrorBody](dev_cycle/errors/projects_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Project](dev_cycle/models/project.py)&#93;</code>

**On `Failure`**: `error` is <code>[ProjectsControllerFindAllErrorBody](dev_cycle/errors/projects_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_find_one(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, ProjectsControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Project by ID or key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_find_one("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_find_one("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Project](dev_cycle/models/project.py), [ProjectsControllerFindOneErrorBody](dev_cycle/errors/projects_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](dev_cycle/models/project.py)</code>

**On `Failure`**: `error` is <code>[ProjectsControllerFindOneErrorBody](dev_cycle/errors/projects_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_get_staleness(key: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_silenced: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureStalenessEntity], ProjectsControllerGetStalenessErrorBody]</code></summary>

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
result = client.projects.with_raw_response.projects_controller_get_staleness("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureStalenessEntity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerGetStalenessErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_get_staleness("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureStalenessEntity]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerGetStalenessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_silenced</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)&#93;, [ProjectsControllerGetStalenessErrorBody](dev_cycle/errors/projects_controller_get_staleness_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)&#93;</code>

**On `Failure`**: `error` is <code>[ProjectsControllerGetStalenessErrorBody](dev_cycle/errors/projects_controller_get_staleness_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_remove(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ProjectsControllerRemoveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Project by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_remove("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_remove("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [ProjectsControllerRemoveErrorBody](dev_cycle/errors/projects_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ProjectsControllerRemoveErrorBody](dev_cycle/errors/projects_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 405 | <code>[CannotDeleteLastItemErrorResponse](dev_cycle/models/cannot_delete_last_item_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_update(key: str, body: UpdateProjectDto | UpdateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, ProjectsControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Project by ID or key. Certain facets of the project settings require additional permissions to update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_update("some example string", UpdateProjectDto())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_update(
    "some example string", UpdateProjectDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProjectDto](dev_cycle/models/update_project_dto.py) \| [UpdateProjectDtoDict](dev_cycle/models/update_project_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Project](dev_cycle/models/project.py), [ProjectsControllerUpdateErrorBody](dev_cycle/errors/projects_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](dev_cycle/models/project.py)</code>

**On `Failure`**: `error` is <code>[ProjectsControllerUpdateErrorBody](dev_cycle/errors/projects_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_update_protected_settings(key: str, body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, ProjectsControllerUpdateProtectedSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the Protect Settings for a Project by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_update_protected_settings(
    "some example string",
    UpdateProtectedProjectSettingsDto(
        settings=ProtectedProjectSettingsDto(
            feature_approval_workflow=FeatureApprovalWorkflowDto(
                enabled=True, allow_publisher_bypass=True, default_reviewers=["some example string"]
            ),
            staleness=StalenessSettingsDto(
                enabled=True,
                released=ReleasedStalenessDto(),
                unmodified_long=UnmodifiedLongStalenessDto(),
                unmodified_short=UnmodifiedShortStalenessDto(),
                unused=UnusedStalenessDto(),
                email=EmailSettingsDto(),
            ),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateProtectedSettingsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_update_protected_settings(
    "some example string",
    UpdateProtectedProjectSettingsDto(
        settings=ProtectedProjectSettingsDto(
            feature_approval_workflow=FeatureApprovalWorkflowDto(
                enabled=True, allow_publisher_bypass=True, default_reviewers=["some example string"]
            ),
            staleness=StalenessSettingsDto(
                enabled=True,
                released=ReleasedStalenessDto(),
                unmodified_long=UnmodifiedLongStalenessDto(),
                unmodified_short=UnmodifiedShortStalenessDto(),
                unused=UnusedStalenessDto(),
                email=EmailSettingsDto(),
            ),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateProtectedSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProtectedProjectSettingsDto](dev_cycle/models/update_protected_project_settings_dto.py) \| [UpdateProtectedProjectSettingsDtoDict](dev_cycle/models/update_protected_project_settings_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Project](dev_cycle/models/project.py), [ProjectsControllerUpdateProtectedSettingsErrorBody](dev_cycle/errors/projects_controller_update_protected_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](dev_cycle/models/project.py)</code>

**On `Failure`**: `error` is <code>[ProjectsControllerUpdateProtectedSettingsErrorBody](dev_cycle/errors/projects_controller_update_protected_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def projects_controller_update_settings(key: str, body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, ProjectsControllerUpdateSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a subset of settings for a Project that only requires publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.projects_controller_update_settings(
    "some example string",
    UpdateProjectSettingsDto(
        settings=ProjectSettings(
            edge_db=EdgeDbSettings(enabled=True),
            opt_in=OptInSettings(
                enabled=True,
                title="some example string",
                description="some example string",
                image_url="some example string",
                colors=ColorSettings(),
                powered_by_alignment={},
            ),
            sdk_type_visibility=SdkTypeVisibilitySettings(enabled_in_feature_settings=True),
            life_cycle=LifeCycleSettings(disable_code_ref_checks=True),
            obfuscation=ObfuscationSettings(enabled=True, required=True),
            feature_approval_workflow=FeatureApprovalWorkflowSettings(
                enabled=True, allow_publisher_bypass=True, default_reviewers=["some example string"]
            ),
            disable_passthrough_rollouts=True,
            staleness=StalenessSettings(
                enabled=True,
                released=ReleasedStalenessSettings(),
                unmodified_long=UnmodifiedLongStalenessSettings(),
                unmodified_short=UnmodifiedShortStalenessSettings(),
                unused=UnusedStalenessSettings(),
                email=StalenessEmailSettings(),
            ),
            dynatrace=DynatraceProjectSettings(enabled=True, environment_map={}),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateSettingsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.projects_controller_update_settings(
    "some example string",
    UpdateProjectSettingsDto(
        settings=ProjectSettings(
            edge_db=EdgeDbSettings(enabled=True),
            opt_in=OptInSettings(
                enabled=True,
                title="some example string",
                description="some example string",
                image_url="some example string",
                colors=ColorSettings(),
                powered_by_alignment={},
            ),
            sdk_type_visibility=SdkTypeVisibilitySettings(enabled_in_feature_settings=True),
            life_cycle=LifeCycleSettings(disable_code_ref_checks=True),
            obfuscation=ObfuscationSettings(enabled=True, required=True),
            feature_approval_workflow=FeatureApprovalWorkflowSettings(
                enabled=True, allow_publisher_bypass=True, default_reviewers=["some example string"]
            ),
            disable_passthrough_rollouts=True,
            staleness=StalenessSettings(
                enabled=True,
                released=ReleasedStalenessSettings(),
                unmodified_long=UnmodifiedLongStalenessSettings(),
                unmodified_short=UnmodifiedShortStalenessSettings(),
                unused=UnusedStalenessSettings(),
                email=StalenessEmailSettings(),
            ),
            dynatrace=DynatraceProjectSettings(enabled=True, environment_map={}),
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProjectsControllerUpdateSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProjectSettingsDto](dev_cycle/models/update_project_settings_dto.py) \| [UpdateProjectSettingsDtoDict](dev_cycle/models/update_project_settings_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Project](dev_cycle/models/project.py), [ProjectsControllerUpdateSettingsErrorBody](dev_cycle/errors/projects_controller_update_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](dev_cycle/models/project.py)</code>

**On `Failure`**: `error` is <code>[ProjectsControllerUpdateSettingsErrorBody](dev_cycle/errors/projects_controller_update_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](dev_cycle/apis/results.py)

<details>
<summary><code>def results_controller_get_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetEvaluationsPerHourByProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch unique user variable evaluations per hour for a project

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.results.with_raw_response.results_controller_get_evaluations_per_hour_by_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultProjectEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetEvaluationsPerHourByProjectErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.results_controller_get_evaluations_per_hour_by_project(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultProjectEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetEvaluationsPerHourByProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>start_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>environment</code> | <code>str \| None</code> | A Environment key or ID<br>**Default**: <code>None</code> |
| <code>period</code> | <code>[PeriodOrStr](dev_cycle/models/enums/period.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sdk_type</code> | <code>[SdkTypeDevCycleManagementResultsApiOrStr](dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py) \| None</code> | SDK type to filter evaluation results by<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py), [ResultsControllerGetEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_evaluations_per_hour_by_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py)</code>

**On `Failure`**: `error` is <code>[ResultsControllerGetEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_evaluations_per_hour_by_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def results_controller_get_total_evaluations_per_hour_by_feature(feature: str, project: str, *, start_date: float | None = None, end_date: float | None = None, platform: str | None = None, variable: str | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResultEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.results.with_raw_response.results_controller_get_total_evaluations_per_hour_by_feature(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.results_controller_get_total_evaluations_per_hour_by_feature(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>start_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>variable</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>environment</code> | <code>str \| None</code> | A Environment key or ID<br>**Default**: <code>None</code> |
| <code>period</code> | <code>[PeriodOrStr](dev_cycle/models/enums/period.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sdk_type</code> | <code>[SdkTypeDevCycleManagementResultsApiOrStr](dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py) \| None</code> | SDK type to filter evaluation results by<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[ResultEvaluationsByHourDto](dev_cycle/models/result_evaluations_by_hour_dto.py), [ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_feature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResultEvaluationsByHourDto](dev_cycle/models/result_evaluations_by_hour_dto.py)</code>

**On `Failure`**: `error` is <code>[ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def results_controller_get_total_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a project

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.results.with_raw_response.results_controller_get_total_evaluations_per_hour_by_project(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultProjectEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.results_controller_get_total_evaluations_per_hour_by_project(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResultProjectEvaluationsByHourDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>start_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>environment</code> | <code>str \| None</code> | A Environment key or ID<br>**Default**: <code>None</code> |
| <code>period</code> | <code>[PeriodOrStr](dev_cycle/models/enums/period.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sdk_type</code> | <code>[SdkTypeDevCycleManagementResultsApiOrStr](dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py) \| None</code> | SDK type to filter evaluation results by<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py), [ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py)</code>

**On `Failure`**: `error` is <code>[ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserProfiles

> Source: [UserProfiles](dev_cycle/apis/user_profiles.py)

<details>
<summary><code>def user_profiles_controller_create_or_update(project: str, body: UpdateUserProfileDto | UpdateUserProfileDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectUserProfile, UserProfilesControllerCreateOrUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or Update a User Profile for Overrides

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_profiles.with_raw_response.user_profiles_controller_create_or_update(
    "some example string", UpdateUserProfileDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUserProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UserProfilesControllerCreateOrUpdateErrorBody
```

**Async**

```python
result = await async_client.user_profiles.with_raw_response.user_profiles_controller_create_or_update(
    "some example string", UpdateUserProfileDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUserProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UserProfilesControllerCreateOrUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateUserProfileDto](dev_cycle/models/update_user_profile_dto.py) \| [UpdateUserProfileDtoDict](dev_cycle/models/update_user_profile_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[ProjectUserProfile](dev_cycle/models/project_user_profile.py), [UserProfilesControllerCreateOrUpdateErrorBody](dev_cycle/errors/user_profiles_controller_create_or_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectUserProfile](dev_cycle/models/project_user_profile.py)</code>

**On `Failure`**: `error` is <code>[UserProfilesControllerCreateOrUpdateErrorBody](dev_cycle/errors/user_profiles_controller_create_or_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def user_profiles_controller_find_all(project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectUserProfile, UserProfilesControllerFindAllErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get User Profile for the authenticated User in the specified Project

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_profiles.with_raw_response.user_profiles_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUserProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UserProfilesControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.user_profiles.with_raw_response.user_profiles_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUserProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UserProfilesControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[ProjectUserProfile](dev_cycle/models/project_user_profile.py), [UserProfilesControllerFindAllErrorBody](dev_cycle/errors/user_profiles_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectUserProfile](dev_cycle/models/project_user_profile.py)</code>

**On `Failure`**: `error` is <code>[UserProfilesControllerFindAllErrorBody](dev_cycle/errors/user_profiles_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VariablesApi

> Source: [VariablesApi](dev_cycle/apis/variables_api.py)

<details>
<summary><code>def variables_controller_create(project: str, body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerCreateErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_create(
    "some example string",
    CreateVariableDtoDevCycleManagementVariablesApi(
        key="some example string", type_=TypeDevCycleManagementVariablesApi.STRING
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerCreateErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_create(
    "some example string",
    CreateVariableDtoDevCycleManagementVariablesApi(
        key="some example string", type_=TypeDevCycleManagementVariablesApi.STRING
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateVariableDtoDevCycleManagementVariablesApi](dev_cycle/models/create_variable_dto_dev_cycle_management_variables_api.py) \| [CreateVariableDtoDevCycleManagementVariablesApiDict](dev_cycle/models/create_variable_dto_dev_cycle_management_variables_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py), [VariablesControllerCreateErrorBody](dev_cycle/errors/variables_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**On `Failure`**: `error` is <code>[VariablesControllerCreateErrorBody](dev_cycle/errors/variables_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variables_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, feature: str | None = None, type_: Type3DevCycleManagementVariablesApiOrStr | None = None, status: Status2DevCycleManagementVariablesApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[VariableDevCycleManagementVariablesApi], VariablesControllerFindAllErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[VariableDevCycleManagementVariablesApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[VariableDevCycleManagementVariablesApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>feature</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type3DevCycleManagementVariablesApiOrStr](dev_cycle/models/enums/type3_dev_cycle_management_variables_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status2DevCycleManagementVariablesApiOrStr](dev_cycle/models/enums/status2_dev_cycle_management_variables_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)&#93;, [VariablesControllerFindAllErrorBody](dev_cycle/errors/variables_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)&#93;</code>

**On `Failure`**: `error` is <code>[VariablesControllerFindAllErrorBody](dev_cycle/errors/variables_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variables_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerFindOneErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Variable key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py), [VariablesControllerFindOneErrorBody](dev_cycle/errors/variables_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**On `Failure`**: `error` is <code>[VariablesControllerFindOneErrorBody](dev_cycle/errors/variables_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variables_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, VariablesControllerRemoveErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Variable key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [VariablesControllerRemoveErrorBody](dev_cycle/errors/variables_controller_remove_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[VariablesControllerRemoveErrorBody](dev_cycle/errors/variables_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variables_controller_update(key: str, project: str, body: UpdateVariableDto | UpdateVariableDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_update(
    "some example string", "some example string", UpdateVariableDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_update(
    "some example string", "some example string", UpdateVariableDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Variable key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateVariableDto](dev_cycle/models/update_variable_dto.py) \| [UpdateVariableDtoDict](dev_cycle/models/update_variable_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py), [VariablesControllerUpdateErrorBody](dev_cycle/errors/variables_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**On `Failure`**: `error` is <code>[VariablesControllerUpdateErrorBody](dev_cycle/errors/variables_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variables_controller_update_status(key: str, project: str, body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateStatusErrorBody]</code></summary>

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
result = client.variables_api.with_raw_response.variables_controller_update_status(
    "some example string",
    "some example string",
    UpdateVariableStatusDto(status=Status1DevCycleManagementVariablesApi.ACTIVE),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerUpdateStatusErrorBody
```

**Async**

```python
result = await async_client.variables_api.with_raw_response.variables_controller_update_status(
    "some example string",
    "some example string",
    UpdateVariableStatusDto(status=Status1DevCycleManagementVariablesApi.ACTIVE),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableDevCycleManagementVariablesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablesControllerUpdateStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Variable key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateVariableStatusDto](dev_cycle/models/update_variable_status_dto.py) \| [UpdateVariableStatusDtoDict](dev_cycle/models/update_variable_status_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py), [VariablesControllerUpdateStatusErrorBody](dev_cycle/errors/variables_controller_update_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**On `Failure`**: `error` is <code>[VariablesControllerUpdateStatusErrorBody](dev_cycle/errors/variables_controller_update_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Variations

> Source: [Variations](dev_cycle/apis/variations.py)

<details>
<summary><code>def variations_controller_create(project: str, feature: str, body: FeatureVariationDto | FeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new variation within a Feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variations.with_raw_response.variations_controller_create(
    "some example string",
    "some example string",
    FeatureVariationDto(key="some example string", name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementMetricAssociationsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerCreateErrorBody
```

**Async**

```python
result = await async_client.variations.with_raw_response.variations_controller_create(
    "some example string",
    "some example string",
    FeatureVariationDto(key="some example string", name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementMetricAssociationsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>body</code> | <code>[FeatureVariationDto](dev_cycle/models/feature_variation_dto.py) \| [FeatureVariationDtoDict](dev_cycle/models/feature_variation_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py), [VariationsControllerCreateErrorBody](dev_cycle/errors/variations_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py)</code>

**On `Failure`**: `error` is <code>[VariationsControllerCreateErrorBody](dev_cycle/errors/variations_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variations_controller_find_all(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Variation], VariationsControllerFindAllErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of variations for a feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variations.with_raw_response.variations_controller_find_all(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Variation]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.variations.with_raw_response.variations_controller_find_all(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Variation]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[Variation](dev_cycle/models/variation.py)&#93;, [VariationsControllerFindAllErrorBody](dev_cycle/errors/variations_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Variation](dev_cycle/models/variation.py)&#93;</code>

**On `Failure`**: `error` is <code>[VariationsControllerFindAllErrorBody](dev_cycle/errors/variations_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variations_controller_find_one(key: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Variation, VariationsControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a variation by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variations.with_raw_response.variations_controller_find_one(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.variations.with_raw_response.variations_controller_find_one(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Variation key or ID |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Variation](dev_cycle/models/variation.py), [VariationsControllerFindOneErrorBody](dev_cycle/errors/variations_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Variation](dev_cycle/models/variation.py)</code>

**On `Failure`**: `error` is <code>[VariationsControllerFindOneErrorBody](dev_cycle/errors/variations_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variations_controller_update(key: str, feature: str, project: str, body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a variation by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variations.with_raw_response.variations_controller_update(
    "some example string", "some example string", "some example string", UpdateFeatureVariationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementMetricAssociationsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.variations.with_raw_response.variations_controller_update(
    "some example string", "some example string", "some example string", UpdateFeatureVariationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementMetricAssociationsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariationsControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureVariationDto](dev_cycle/models/update_feature_variation_dto.py) \| [UpdateFeatureVariationDtoDict](dev_cycle/models/update_feature_variation_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py), [VariationsControllerUpdateErrorBody](dev_cycle/errors/variations_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py)</code>

**On `Failure`**: `error` is <code>[VariationsControllerUpdateErrorBody](dev_cycle/errors/variations_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](dev_cycle/apis/webhooks_api.py)

<details>
<summary><code>def webhooks_controller_create(project: str, body: CreateWebhookDto | CreateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, WebhooksControllerCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Webhook

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.webhooks_controller_create(
    "some example string",
    CreateWebhookDto(name="some example string", events=["some example string"], url="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerCreateErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_controller_create(
    "some example string",
    CreateWebhookDto(name="some example string", events=["some example string"], url="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateWebhookDto](dev_cycle/models/create_webhook_dto.py) \| [CreateWebhookDtoDict](dev_cycle/models/create_webhook_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Webhook](dev_cycle/models/webhook.py), [WebhooksControllerCreateErrorBody](dev_cycle/errors/webhooks_controller_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](dev_cycle/models/webhook.py)</code>

**On `Failure`**: `error` is <code>[WebhooksControllerCreateErrorBody](dev_cycle/errors/webhooks_controller_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Webhook], WebhooksControllerFindAllErrorBody]</code></summary>

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
result = client.webhooks_api.with_raw_response.webhooks_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Webhook]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerFindAllErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_controller_find_all("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Webhook]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerFindAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[Webhook](dev_cycle/models/webhook.py)&#93;, [WebhooksControllerFindAllErrorBody](dev_cycle/errors/webhooks_controller_find_all_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Webhook](dev_cycle/models/webhook.py)&#93;</code>

**On `Failure`**: `error` is <code>[WebhooksControllerFindAllErrorBody](dev_cycle/errors/webhooks_controller_find_all_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_controller_find_one(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, WebhooksControllerFindOneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a webhook by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.webhooks_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerFindOneErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_controller_find_one(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerFindOneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Webhook](dev_cycle/models/webhook.py), [WebhooksControllerFindOneErrorBody](dev_cycle/errors/webhooks_controller_find_one_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](dev_cycle/models/webhook.py)</code>

**On `Failure`**: `error` is <code>[WebhooksControllerFindOneErrorBody](dev_cycle/errors/webhooks_controller_find_one_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_controller_remove(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, WebhooksControllerRemoveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.webhooks_controller_remove("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerRemoveErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_controller_remove(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerRemoveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Webhook](dev_cycle/models/webhook.py), [WebhooksControllerRemoveErrorBody](dev_cycle/errors/webhooks_controller_remove_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](dev_cycle/models/webhook.py)</code>

**On `Failure`**: `error` is <code>[WebhooksControllerRemoveErrorBody](dev_cycle/errors/webhooks_controller_remove_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webhooks_controller_update(id_: str, project: str, body: UpdateWebhookDto | UpdateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, WebhooksControllerUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Webhook

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.webhooks_controller_update(
    "some example string",
    "some example string",
    UpdateWebhookDto(feature="some example string", environments=["some example string"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerUpdateErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.webhooks_controller_update(
    "some example string",
    "some example string",
    UpdateWebhookDto(feature="some example string", environments=["some example string"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebhooksControllerUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateWebhookDto](dev_cycle/models/update_webhook_dto.py) \| [UpdateWebhookDtoDict](dev_cycle/models/update_webhook_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[Webhook](dev_cycle/models/webhook.py), [WebhooksControllerUpdateErrorBody](dev_cycle/errors/webhooks_controller_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](dev_cycle/models/webhook.py)</code>

**On `Failure`**: `error` is <code>[WebhooksControllerUpdateErrorBody](dev_cycle/errors/webhooks_controller_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BetaSemanticPatch

> Source: [BetaSemanticPatch](dev_cycle/apis/beta_semantic_patch.py)

<details>
<summary><code>def semantic_patch_controller_semantic_update(key: str, project: str, body: AudiencePatchDto | AudiencePatchDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SemanticPatchControllerSemanticUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Semantic Patch Update an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.beta_semantic_patch.with_raw_response.semantic_patch_controller_semantic_update(
    "some example string",
    "some example string",
    AudiencePatchDto(
        instructions=[
            AudiencePatchInstructionsDto(
                op=Op.ADD_FILTER_VALUES, action=AudiencePatchAction(values={}, filter_index="some example string")
            ),
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SemanticPatchControllerSemanticUpdateErrorBody
```

**Async**

```python
result = await async_client.beta_semantic_patch.with_raw_response.semantic_patch_controller_semantic_update(
    "some example string",
    "some example string",
    AudiencePatchDto(
        instructions=[
            AudiencePatchInstructionsDto(
                op=Op.ADD_FILTER_VALUES, action=AudiencePatchAction(values={}, filter_index="some example string")
            ),
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SemanticPatchControllerSemanticUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | A Audience key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[AudiencePatchDto](dev_cycle/models/audience_patch_dto.py) \| [AudiencePatchDtoDict](dev_cycle/models/audience_patch_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [SemanticPatchControllerSemanticUpdateErrorBody](dev_cycle/errors/semantic_patch_controller_semantic_update_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SemanticPatchControllerSemanticUpdateErrorBody](dev_cycle/errors/semantic_patch_controller_semantic_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DeprecatedFeaturesV1

> Source: [DeprecatedFeaturesV1](dev_cycle/apis/deprecated_features_v1.py)

<details>
<summary><code>def features_controller_create_multiple_v1(project: str, body: list[str], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerCreateMultipleV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple new Features

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_create_multiple_v1(
    "some example string", ["some example string"]
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateMultipleV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_create_multiple_v1(
    "some example string", ["some example string"]
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateMultipleV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;, [FeaturesControllerCreateMultipleV1ErrorBody](dev_cycle/errors/features_controller_create_multiple_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeaturesControllerCreateMultipleV1ErrorBody](dev_cycle/errors/features_controller_create_multiple_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_create_v1(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_create_v1(
    "some example string",
    CreateFeatureDto(
        key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_create_v1(
    "some example string",
    CreateFeatureDto(
        key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerCreateV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureDto](dev_cycle/models/create_feature_dto.py) \| [CreateFeatureDtoDict](dev_cycle/models/create_feature_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerCreateV1ErrorBody](dev_cycle/errors/features_controller_create_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerCreateV1ErrorBody](dev_cycle/errors/features_controller_create_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_all_linked_issues_v1(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[JiraIssueLink], FeaturesControllerFindAllLinkedIssuesV1ErrorBody]</code></summary>

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
result = client.deprecated_features_v1.with_raw_response.features_controller_find_all_linked_issues_v1(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[JiraIssueLink]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllLinkedIssuesV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_find_all_linked_issues_v1(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[JiraIssueLink]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllLinkedIssuesV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[JiraIssueLink](dev_cycle/models/jira_issue_link.py)&#93;, [FeaturesControllerFindAllLinkedIssuesV1ErrorBody](dev_cycle/errors/features_controller_find_all_linked_issues_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[JiraIssueLink](dev_cycle/models/jira_issue_link.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindAllLinkedIssuesV1ErrorBody](dev_cycle/errors/features_controller_find_all_linked_issues_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_all_v1(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllV1ErrorBody]</code></summary>

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
result = client.deprecated_features_v1.with_raw_response.features_controller_find_all_v1("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_find_all_v1(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindAllV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>per_page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>sort_by</code> | <code>[SortByOrStr](dev_cycle/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.CREATED_AT</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](dev_cycle/models/enums/sort_order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortOrder.DESC</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type9OrStr](dev_cycle/models/enums/type9.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status5OrStr](dev_cycle/models/enums/status5.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;, [FeaturesControllerFindAllV1ErrorBody](dev_cycle/errors/features_controller_find_all_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindAllV1ErrorBody](dev_cycle/errors/features_controller_find_all_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_one_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_find_one_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindOneV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_find_one_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindOneV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerFindOneV1ErrorBody](dev_cycle/errors/features_controller_find_one_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindOneV1ErrorBody](dev_cycle/errors/features_controller_find_one_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_find_static_configuration_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_find_static_configuration_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindStaticConfigurationV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_find_static_configuration_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerFindStaticConfigurationV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[StaticConfiguration](dev_cycle/models/static_configuration.py), [FeaturesControllerFindStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_find_static_configuration_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerFindStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_find_static_configuration_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_link_issue_v1(feature: str, project: str, body: LinkJiraIssueDto | LinkJiraIssueDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JiraIssueLink, FeaturesControllerLinkIssueV1ErrorBody]</code></summary>

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
result = client.deprecated_features_v1.with_raw_response.features_controller_link_issue_v1(
    "some example string", "some example string", LinkJiraIssueDto(issue_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JiraIssueLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerLinkIssueV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_link_issue_v1(
    "some example string", "some example string", LinkJiraIssueDto(issue_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JiraIssueLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerLinkIssueV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[LinkJiraIssueDto](dev_cycle/models/link_jira_issue_dto.py) \| [LinkJiraIssueDtoDict](dev_cycle/models/link_jira_issue_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[JiraIssueLink](dev_cycle/models/jira_issue_link.py), [FeaturesControllerLinkIssueV1ErrorBody](dev_cycle/errors/features_controller_link_issue_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JiraIssueLink](dev_cycle/models/jira_issue_link.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerLinkIssueV1ErrorBody](dev_cycle/errors/features_controller_link_issue_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_remove_linked_issue_v1(feature: str, issue_id: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FeaturesControllerRemoveLinkedIssueV1ErrorBody]</code></summary>

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
result = client.deprecated_features_v1.with_raw_response.features_controller_remove_linked_issue_v1(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerRemoveLinkedIssueV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_remove_linked_issue_v1(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerRemoveLinkedIssueV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>issue_id</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [FeaturesControllerRemoveLinkedIssueV1ErrorBody](dev_cycle/errors/features_controller_remove_linked_issue_v1_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FeaturesControllerRemoveLinkedIssueV1ErrorBody](dev_cycle/errors/features_controller_remove_linked_issue_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_remove_v1(feature: str, key: str, project: str, *, delete_variables: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FeaturesControllerRemoveV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_remove_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerRemoveV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_remove_v1(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerRemoveV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>delete_variables</code> | <code>bool \| None</code> | Controls whether the feature's associated variables should also be deleted<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;None, [FeaturesControllerRemoveV1ErrorBody](dev_cycle/errors/features_controller_remove_v1_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FeaturesControllerRemoveV1ErrorBody](dev_cycle/errors/features_controller_remove_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_static_configuration_v1(feature: str, key: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_update_static_configuration_v1(
    "some example string", "some example string", "some example string", UpdateStaticConfigurationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStaticConfigurationV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_update_static_configuration_v1(
    "some example string", "some example string", "some example string", UpdateStaticConfigurationDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StaticConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStaticConfigurationV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStaticConfigurationDto](dev_cycle/models/update_static_configuration_dto.py) \| [UpdateStaticConfigurationDtoDict](dev_cycle/models/update_static_configuration_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[StaticConfiguration](dev_cycle/models/static_configuration.py), [FeaturesControllerUpdateStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_update_static_configuration_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_update_static_configuration_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_status_v1(feature: str, key: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature's status by key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_update_status_v1(
    "some example string", "some example string", "some example string", UpdateFeatureStatusDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStatusV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_update_status_v1(
    "some example string", "some example string", "some example string", UpdateFeatureStatusDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateStatusV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureStatusDto](dev_cycle/models/update_feature_status_dto.py) \| [UpdateFeatureStatusDtoDict](dev_cycle/models/update_feature_status_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerUpdateStatusV1ErrorBody](dev_cycle/errors/features_controller_update_status_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateStatusV1ErrorBody](dev_cycle/errors/features_controller_update_status_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def features_controller_update_v1(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateV1ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deprecated_features_v1.with_raw_response.features_controller_update_v1(
    "some example string", "some example string", UpdateFeatureDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateV1ErrorBody
```

**Async**

```python
result = await async_client.deprecated_features_v1.with_raw_response.features_controller_update_v1(
    "some example string", "some example string", UpdateFeatureDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeaturesControllerUpdateV1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>str</code> | A Feature key or ID |
| <code>project</code> | <code>str</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureDto](dev_cycle/models/update_feature_dto.py) \| [UpdateFeatureDtoDict](dev_cycle/models/update_feature_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dev_cycle/core/results.py)&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py), [FeaturesControllerUpdateV1ErrorBody](dev_cycle/errors/features_controller_update_v1_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**On `Failure`**: `error` is <code>[FeaturesControllerUpdateV1ErrorBody](dev_cycle/errors/features_controller_update_v1_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestErrorResponse](dev_cycle/models/bad_request_error_response.py)</code> |
| 401, 403 | <code>[RawError](dev_cycle/core/results.py)</code> |
| 404 | <code>[NotFoundErrorResponse](dev_cycle/models/not_found_error_response.py)</code> |
| 409 | <code>[ConflictErrorResponse](dev_cycle/models/conflict_error_response.py)</code> |
| 412 | <code>[PreconditionFailedErrorResponse](dev_cycle/models/precondition_failed_error_response.py)</code> |
| anything unmapped | <code>[RawError](dev_cycle/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

