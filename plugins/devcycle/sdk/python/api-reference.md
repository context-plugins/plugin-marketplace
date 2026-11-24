# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DevCycleClient](dev_cycle/client.py)

## Audiences

> Source: [Audiences](dev_cycle/apis/audiences.py)

<details>
<summary><code>def audiences_controller_create(project: str, body: CreateAudienceDto | CreateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Audience</code></summary>

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
try:
    response = client.audiences.audiences_controller_create(
        "some example string", CreateAudienceDto(filters=AudienceOperator(filters=[AllFilter()], operator=Operator.AND))
    )
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.audiences.audiences_controller_create(
        "some example string", CreateAudienceDto(filters=AudienceOperator(filters=[AllFilter()], operator=Operator.AND))
    )
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerCreateErrorBody
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

**OnSuccess**: <code>[Audience](dev_cycle/models/audience.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerCreateErrorBody](dev_cycle/errors/audiences_controller_create_error.py)&#93;</code>

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
<summary><code>def audiences_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Audience]</code></summary>

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
    response = client.audiences.audiences_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[Audience]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.audiences.audiences_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[Audience]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[Audience](dev_cycle/models/audience.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerFindAllErrorBody](dev_cycle/errors/audiences_controller_find_all_error.py)&#93;</code>

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
<summary><code>def audiences_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> Audience</code></summary>

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
try:
    response = client.audiences.audiences_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.audiences.audiences_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindOneErrorBody
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

**OnSuccess**: <code>[Audience](dev_cycle/models/audience.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerFindOneErrorBody](dev_cycle/errors/audiences_controller_find_one_error.py)&#93;</code>

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
<summary><code>def audiences_controller_find_usages(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> AudienceUsage</code></summary>

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
try:
    response = client.audiences.audiences_controller_find_usages("some example string", "some example string")
    # TODO: Handle 'response' of type AudienceUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindUsagesErrorBody
```

**Async**

```python
try:
    response = await async_client.audiences.audiences_controller_find_usages(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AudienceUsage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerFindUsagesErrorBody
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

**OnSuccess**: <code>[AudienceUsage](dev_cycle/models/audience_usage.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerFindUsagesErrorBody](dev_cycle/errors/audiences_controller_find_usages_error.py)&#93;</code>

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
<summary><code>def audiences_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.audiences.audiences_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.audiences.audiences_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerRemoveErrorBody](dev_cycle/errors/audiences_controller_remove_error.py)&#93;</code>

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
<summary><code>def audiences_controller_update(key: str, project: str, body: UpdateAudienceDto | UpdateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Audience</code></summary>

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
try:
    response = client.audiences.audiences_controller_update(
        "some example string", "some example string", UpdateAudienceDto()
    )
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.audiences.audiences_controller_update(
        "some example string", "some example string", UpdateAudienceDto()
    )
    # TODO: Handle 'response' of type Audience
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AudiencesControllerUpdateErrorBody
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

**OnSuccess**: <code>[Audience](dev_cycle/models/audience.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AudiencesControllerUpdateErrorBody](dev_cycle/errors/audiences_controller_update_error.py)&#93;</code>

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
<summary><code>def audit_log_controller_find_all(feature: str, project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, environment: str | None = None, a0_user: str | None = None, start_date: RFC3339DateTime | None = None, end_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> list[AuditLogEntity]</code></summary>

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
    response = client.audit_log.audit_log_controller_find_all("some example string", "some example string")
    # TODO: Handle 'response' of type list[AuditLogEntity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuditLogControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.audit_log.audit_log_controller_find_all("some example string", "some example string")
    # TODO: Handle 'response' of type list[AuditLogEntity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuditLogControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[AuditLogEntity](dev_cycle/models/audit_log_entity.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[AuditLogControllerFindAllErrorBody](dev_cycle/errors/audit_log_controller_find_all_error.py)&#93;</code>

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
<summary><code>def get_features(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Feature]</code></summary>

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
    response = client.bucketing_api.get_features(
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
    )
    # TODO: Handle 'response' of type dict[str, Feature]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFeaturesErrorBody
```

**Async**

```python
try:
    response = await async_client.bucketing_api.get_features(
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
    )
    # TODO: Handle 'response' of type dict[str, Feature]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFeaturesErrorBody
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

**OnSuccess**: <code>dict&#91;str, [Feature](dev_cycle/models/feature.py)&#93;</code> -- Features response (map of Feature keys to Feature objects)

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[GetFeaturesErrorBody](dev_cycle/errors/get_features_error.py)&#93;</code>

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
<summary><code>def get_variable_by_key(key: str, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> Variable</code></summary>

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
    response = client.bucketing_api.get_variable_by_key(
        "my-variable-key",
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={}),
    )
    # TODO: Handle 'response' of type Variable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVariableByKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.bucketing_api.get_variable_by_key(
        "my-variable-key",
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={}),
    )
    # TODO: Handle 'response' of type Variable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVariableByKeyErrorBody
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

**OnSuccess**: <code>[Variable](dev_cycle/models/variable.py)</code> -- Variable response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[GetVariableByKeyErrorBody](dev_cycle/errors/get_variable_by_key_error.py)&#93;</code>

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
<summary><code>def get_variables(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Variable]</code></summary>

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
    response = client.bucketing_api.get_variables(
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
    )
    # TODO: Handle 'response' of type dict[str, Variable]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVariablesErrorBody
```

**Async**

```python
try:
    response = await async_client.bucketing_api.get_variables(
        UserData(user_id="user_123456", email="user@example.com", name="John Doe", country="US", custom_data={})
    )
    # TODO: Handle 'response' of type dict[str, Variable]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVariablesErrorBody
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

**OnSuccess**: <code>dict&#91;str, [Variable](dev_cycle/models/variable.py)&#93;</code> -- Variables response (map of variable keys to Variable objects)

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[GetVariablesErrorBody](dev_cycle/errors/get_variables_error.py)&#93;</code>

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
<summary><code>def post_events(body: UserDataAndEventsBody | UserDataAndEventsBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TrackResponse</code></summary>

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
    response = client.bucketing_api.post_events(
        UserDataAndEventsBody(
            events=[
                Event(type_="purchase", value=99.99, meta_data={}),
                Event(type_="feature_click", target="new-dashboard-button"),
            ],
            user=UserData(user_id="user_123456", email="user@example.com", custom_data={}),
        ),
    )
    # TODO: Handle 'response' of type V1TrackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.bucketing_api.post_events(
        UserDataAndEventsBody(
            events=[
                Event(type_="purchase", value=99.99, meta_data={}),
                Event(type_="feature_click", target="new-dashboard-button"),
            ],
            user=UserData(user_id="user_123456", email="user@example.com", custom_data={}),
        ),
    )
    # TODO: Handle 'response' of type V1TrackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostEventsErrorBody
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

**OnSuccess**: <code>[V1TrackResponse](dev_cycle/models/v1_track_response.py)</code> -- Events received successfully

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[PostEventsErrorBody](dev_cycle/errors/post_events_error.py)&#93;</code>

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
<summary><code>def custom_properties_controller_create(project: str, body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomProperty</code></summary>

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
try:
    response = client.custom_properties.custom_properties_controller_create(
        "some example string",
        CreateCustomPropertyDto(
            name="some example string",
            key="some example string",
            type_=TypeDevCycleManagementCustomPropertiesApi.STRING,
            property_key="some example string",
        ),
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_properties.custom_properties_controller_create(
        "some example string",
        CreateCustomPropertyDto(
            name="some example string",
            key="some example string",
            type_=TypeDevCycleManagementCustomPropertiesApi.STRING,
            property_key="some example string",
        ),
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerCreateErrorBody
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

**OnSuccess**: <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[CustomPropertiesControllerCreateErrorBody](dev_cycle/errors/custom_properties_controller_create_error.py)&#93;</code>

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
<summary><code>def custom_properties_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, type_: Type3OrStr | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CustomProperty]</code></summary>

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
    response = client.custom_properties.custom_properties_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[CustomProperty]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_properties.custom_properties_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[CustomProperty]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[CustomProperty](dev_cycle/models/custom_property.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[CustomPropertiesControllerFindAllErrorBody](dev_cycle/errors/custom_properties_controller_find_all_error.py)&#93;</code>

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
<summary><code>def custom_properties_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomProperty</code></summary>

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
try:
    response = client.custom_properties.custom_properties_controller_find_one(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_properties.custom_properties_controller_find_one(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerFindOneErrorBody
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

**OnSuccess**: <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[CustomPropertiesControllerFindOneErrorBody](dev_cycle/errors/custom_properties_controller_find_one_error.py)&#93;</code>

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
<summary><code>def custom_properties_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.custom_properties.custom_properties_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.custom_properties.custom_properties_controller_remove(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[CustomPropertiesControllerRemoveErrorBody](dev_cycle/errors/custom_properties_controller_remove_error.py)&#93;</code>

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
<summary><code>def custom_properties_controller_update(key: str, project: str, body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomProperty</code></summary>

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
try:
    response = client.custom_properties.custom_properties_controller_update(
        "some example string", "some example string", UpdateCustomPropertyDto()
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_properties.custom_properties_controller_update(
        "some example string", "some example string", UpdateCustomPropertyDto()
    )
    # TODO: Handle 'response' of type CustomProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CustomPropertiesControllerUpdateErrorBody
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

**OnSuccess**: <code>[CustomProperty](dev_cycle/models/custom_property.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[CustomPropertiesControllerUpdateErrorBody](dev_cycle/errors/custom_properties_controller_update_error.py)&#93;</code>

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
<summary><code>def patch_v1_edgedb_by_user_id(user_id: str, body: UserDataEdgeDb | UserDataEdgeDbDict, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EdgeDbApiResponse</code></summary>

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
    response = client.edge_db.patch_v1_edgedb_by_user_id(
        "some example string", UserDataEdgeDb(user_id="some example string")
    )
    # TODO: Handle 'response' of type EdgeDbApiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchV1EdgedbByUserIdErrorBody
```

**Async**

```python
try:
    response = await async_client.edge_db.patch_v1_edgedb_by_user_id(
        "some example string", UserDataEdgeDb(user_id="some example string")
    )
    # TODO: Handle 'response' of type EdgeDbApiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PatchV1EdgedbByUserIdErrorBody
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

**OnSuccess**: <code>[EdgeDbApiResponse](dev_cycle/models/edge_db_api_response.py)</code> -- Client SDK API Response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[PatchV1EdgedbByUserIdErrorBody](dev_cycle/errors/patch_v1_edgedb_by_user_id_error.py)&#93;</code>

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
<summary><code>def environments_controller_create(project: str, body: CreateEnvironmentDto | CreateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.environments_controller_create(
        "some example string",
        CreateEnvironmentDto(
            name="some example string",
            key="some example string",
            type_=TypeDevCycleManagementEnvironmentsApi.DEVELOPMENT,
        ),
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.environments_controller_create(
        "some example string",
        CreateEnvironmentDto(
            name="some example string",
            key="some example string",
            type_=TypeDevCycleManagementEnvironmentsApi.DEVELOPMENT,
        ),
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerCreateErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[EnvironmentsControllerCreateErrorBody](dev_cycle/errors/environments_controller_create_error.py)&#93;</code>

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
<summary><code>def environments_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[EnvironmentModel]</code></summary>

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
try:
    response = client.environments.environments_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[EnvironmentModel]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.environments_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[EnvironmentModel]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[EnvironmentModel](dev_cycle/models/environment_model.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[EnvironmentsControllerFindAllErrorBody](dev_cycle/errors/environments_controller_find_all_error.py)&#93;</code>

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
<summary><code>def environments_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.environments_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.environments_controller_find_one(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerFindOneErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[EnvironmentsControllerFindOneErrorBody](dev_cycle/errors/environments_controller_find_one_error.py)&#93;</code>

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
<summary><code>def environments_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.environments.environments_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.environments.environments_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[EnvironmentsControllerRemoveErrorBody](dev_cycle/errors/environments_controller_remove_error.py)&#93;</code>

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
<summary><code>def environments_controller_update(key: str, project: str, body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.environments_controller_update(
        "some example string", "some example string", UpdateEnvironmentDto()
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.environments_controller_update(
        "some example string", "some example string", UpdateEnvironmentDto()
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnvironmentsControllerUpdateErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[EnvironmentsControllerUpdateErrorBody](dev_cycle/errors/environments_controller_update_error.py)&#93;</code>

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
<summary><code>def sdk_keys_controller_generate(environment: str, project: str, body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.sdk_keys_controller_generate(
        "some example string", "some example string", GenerateSdkTokensDto()
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SdkKeysControllerGenerateErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.sdk_keys_controller_generate(
        "some example string", "some example string", GenerateSdkTokensDto()
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SdkKeysControllerGenerateErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](dev_cycle/models/environment_model.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[SdkKeysControllerGenerateErrorBody](dev_cycle/errors/sdk_keys_controller_generate_error.py)&#93;</code>

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
<summary><code>def sdk_keys_controller_invalidate(key: str, environment: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.environments.sdk_keys_controller_invalidate(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SdkKeysControllerInvalidateErrorBody
```

**Async**

```python
try:
    await async_client.environments.sdk_keys_controller_invalidate(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SdkKeysControllerInvalidateErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[SdkKeysControllerInvalidateErrorBody](dev_cycle/errors/sdk_keys_controller_invalidate_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_apply_feature_change_request(id_: str, feature: str, project: str, body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.feature_change_requests.feature_change_requests_controller_apply_feature_change_request(
        "some example string",
        "some example string",
        "some example string",
        ApplyFeatureChangeRequestDto(description="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody
```

**Async**

```python
try:
    await async_client.feature_change_requests.feature_change_requests_controller_apply_feature_change_request(
        "some example string",
        "some example string",
        "some example string",
        ApplyFeatureChangeRequestDto(description="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_apply_feature_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_cancel_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.feature_change_requests.feature_change_requests_controller_cancel_feature_change_request(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody
```

**Async**

```python
try:
    await async_client.feature_change_requests.feature_change_requests_controller_cancel_feature_change_request(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_cancel_feature_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_create_change_request(feature: str, project: str, body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureChangeRequest</code></summary>

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
try:
    response = client.feature_change_requests.feature_change_requests_controller_create_change_request(
        "some example string", "some example string", CreateFeatureChangeRequestDto(path="some example string", body={})
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerCreateChangeRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_change_requests.feature_change_requests_controller_create_change_request(
        "some example string", "some example string", CreateFeatureChangeRequestDto(path="some example string", body={})
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerCreateChangeRequestErrorBody
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

**OnSuccess**: <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerCreateChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_create_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_get_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> FeatureChangeRequest</code></summary>

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
try:
    response = client.feature_change_requests.feature_change_requests_controller_get_feature_change_request(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_change_requests.feature_change_requests_controller_get_feature_change_request(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody
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

**OnSuccess**: <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_feature_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_get_latest_feature_change_request(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> FeatureChangeRequest</code></summary>

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
try:
    response = client.feature_change_requests.feature_change_requests_controller_get_latest_feature_change_request(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_change_requests.feature_change_requests_controller_get_latest_feature_change_request(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody
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

**OnSuccess**: <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_get_latest_feature_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_get_pending_feature_change_requests(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> list[FeatureChangeRequest]</code></summary>

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
try:
    response = client.feature_change_requests.feature_change_requests_controller_get_pending_feature_change_requests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureChangeRequest]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_change_requests.feature_change_requests_controller_get_pending_feature_change_requests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureChangeRequest]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody](dev_cycle/errors/feature_change_requests_controller_get_pending_feature_change_requests_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_review_feature_change_request(id_: str, feature: str, project: str, body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict, *, apply: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.feature_change_requests.feature_change_requests_controller_review_feature_change_request(
        "some example string",
        "some example string",
        "some example string",
        ReviewFeatureChangeRequestDto(action=Action.APPROVED, comment="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody
```

**Async**

```python
try:
    await async_client.feature_change_requests.feature_change_requests_controller_review_feature_change_request(
        "some example string",
        "some example string",
        "some example string",
        ReviewFeatureChangeRequestDto(action=Action.APPROVED, comment="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody](dev_cycle/errors/feature_change_requests_controller_review_feature_change_request_error.py)&#93;</code>

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
<summary><code>def feature_change_requests_controller_submit_change_request_for_review(id_: str, feature: str, project: str, body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureChangeRequest</code></summary>

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
try:
    response = client.feature_change_requests.feature_change_requests_controller_submit_change_request_for_review(
        "some example string",
        "some example string",
        "some example string",
        SubmitFeatureChangeRequestDto(description="some example string", reviewers=["some example string"]),
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_change_requests.feature_change_requests_controller_submit_change_request_for_review(
        "some example string",
        "some example string",
        "some example string",
        SubmitFeatureChangeRequestDto(description="some example string", reviewers=["some example string"]),
    )
    # TODO: Handle 'response' of type FeatureChangeRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody
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

**OnSuccess**: <code>[FeatureChangeRequest](dev_cycle/models/feature_change_request.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody](dev_cycle/errors/feature_change_requests_controller_submit_change_request_for_review_error.py)&#93;</code>

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
<summary><code>def feature_configs_controller_find_all(feature: str, project: str, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[FeatureConfig]</code></summary>

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
try:
    response = client.feature_configurations.feature_configs_controller_find_all(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureConfig]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureConfigsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_configurations.feature_configs_controller_find_all(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureConfig]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureConfigsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureConfig](dev_cycle/models/feature_config.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureConfigsControllerFindAllErrorBody](dev_cycle/errors/feature_configs_controller_find_all_error.py)&#93;</code>

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
<summary><code>def feature_configs_controller_update(feature: str, project: str, environment: str, body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureConfig</code></summary>

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
try:
    response = client.feature_configurations.feature_configs_controller_update(
        "some example string", "some example string", "some example string", UpdateFeatureConfigDto()
    )
    # TODO: Handle 'response' of type FeatureConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureConfigsControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_configurations.feature_configs_controller_update(
        "some example string", "some example string", "some example string", UpdateFeatureConfigDto()
    )
    # TODO: Handle 'response' of type FeatureConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeatureConfigsControllerUpdateErrorBody
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

**OnSuccess**: <code>[FeatureConfig](dev_cycle/models/feature_config.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeatureConfigsControllerUpdateErrorBody](dev_cycle/errors/feature_configs_controller_update_error.py)&#93;</code>

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
<summary><code>def get_v1_opt_in_config(user_id: str, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OptInConfigResponse</code></summary>

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
try:
    response = client.feature_opt_in.get_v1_opt_in_config("some example string")
    # TODO: Handle 'response' of type OptInConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetV1OptInConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_opt_in.get_v1_opt_in_config("some example string")
    # TODO: Handle 'response' of type OptInConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetV1OptInConfigErrorBody
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

**OnSuccess**: <code>[OptInConfigResponse](dev_cycle/models/opt_in_config_response.py)</code> -- Opt-in Config Response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[GetV1OptInConfigErrorBody](dev_cycle/errors/get_v1_opt_in_config_error.py)&#93;</code>

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
<summary><code>def put_v1_opt_ins_by_user_id(user_id: str, body: dict[str, bool], *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1OptInsResponse</code></summary>

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
    response = client.feature_opt_in.put_v1_opt_ins_by_user_id(
        "some example string", {"614ef6aa473928459060721a": True, "614ef6aa473928459060721b": False}
    )
    # TODO: Handle 'response' of type V1OptInsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutV1OptInsByUserIdErrorBody
```

**Async**

```python
try:
    response = await async_client.feature_opt_in.put_v1_opt_ins_by_user_id(
        "some example string", {"614ef6aa473928459060721a": True, "614ef6aa473928459060721b": False}
    )
    # TODO: Handle 'response' of type V1OptInsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutV1OptInsByUserIdErrorBody
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

**OnSuccess**: <code>[V1OptInsResponse](dev_cycle/models/v1_opt_ins_response.py)</code> -- Opt-in update success response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[PutV1OptInsByUserIdErrorBody](dev_cycle/errors/put_v1_opt_ins_by_user_id_error.py)&#93;</code>

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
<summary><code>def features_controller_create(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.features_v2.features_controller_create(
        "some example string",
        CreateFeatureDto(
            key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
        ),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_create(
        "some example string",
        CreateFeatureDto(
            key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
        ),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerCreateErrorBody](dev_cycle/errors/features_controller_create_error.py)&#93;</code>

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
<summary><code>def features_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, custom_status: list[str] | None = None, keys: list[str] | None = None, include_latest_update: bool | None = None, staleness: StalenessOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]</code></summary>

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
    response = client.features_v2.features_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindAllErrorBody](dev_cycle/errors/features_controller_find_all_error.py)&#93;</code>

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
<summary><code>def features_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.features_v2.features_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindOneErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindOneErrorBody](dev_cycle/errors/features_controller_find_one_error.py)&#93;</code>

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
<summary><code>def features_controller_find_static_configuration(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> StaticConfiguration</code></summary>

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
try:
    response = client.features_v2.features_controller_find_static_configuration(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindStaticConfigurationErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_find_static_configuration(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindStaticConfigurationErrorBody
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

**OnSuccess**: <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindStaticConfigurationErrorBody](dev_cycle/errors/features_controller_find_static_configuration_error.py)&#93;</code>

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
<summary><code>def features_controller_get_staleness(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> FeatureStalenessEntity</code></summary>

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
    response = client.features_v2.features_controller_get_staleness("some example string", "some example string")
    # TODO: Handle 'response' of type FeatureStalenessEntity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerGetStalenessErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_get_staleness(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureStalenessEntity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerGetStalenessErrorBody
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

**OnSuccess**: <code>[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerGetStalenessErrorBody](dev_cycle/errors/features_controller_get_staleness_error.py)&#93;</code>

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
<summary><code>def features_controller_update(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.features_v2.features_controller_update(
        "some example string", "some example string", UpdateFeatureDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_update(
        "some example string", "some example string", UpdateFeatureDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateErrorBody](dev_cycle/errors/features_controller_update_error.py)&#93;</code>

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
<summary><code>def features_controller_update_staleness(feature: str, project: str, body: UpdateStalenessDto | UpdateStalenessDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureStalenessEntity</code></summary>

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
    response = client.features_v2.features_controller_update_staleness(
        "some example string", "some example string", UpdateStalenessDto()
    )
    # TODO: Handle 'response' of type FeatureStalenessEntity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStalenessErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_update_staleness(
        "some example string", "some example string", UpdateStalenessDto()
    )
    # TODO: Handle 'response' of type FeatureStalenessEntity
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStalenessErrorBody
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

**OnSuccess**: <code>[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateStalenessErrorBody](dev_cycle/errors/features_controller_update_staleness_error.py)&#93;</code>

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
<summary><code>def features_controller_update_static_configuration(feature: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> StaticConfiguration</code></summary>

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
try:
    response = client.features_v2.features_controller_update_static_configuration(
        "some example string", "some example string", UpdateStaticConfigurationDto()
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStaticConfigurationErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_update_static_configuration(
        "some example string", "some example string", UpdateStaticConfigurationDto()
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStaticConfigurationErrorBody
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

**OnSuccess**: <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateStaticConfigurationErrorBody](dev_cycle/errors/features_controller_update_static_configuration_error.py)&#93;</code>

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
<summary><code>def features_controller_update_status(feature: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
    response = client.features_v2.features_controller_update_status(
        "some example string", "some example string", UpdateFeatureStatusDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_update_status(
        "some example string", "some example string", UpdateFeatureStatusDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStatusErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateStatusErrorBody](dev_cycle/errors/features_controller_update_status_error.py)&#93;</code>

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
<summary><code>def features_controller_update_summary(feature: str, project: str, body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureSummary</code></summary>

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
    response = client.features_v2.features_controller_update_summary(
        "some example string", "some example string", UpdateFeatureSummaryDto()
    )
    # TODO: Handle 'response' of type FeatureSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.features_v2.features_controller_update_summary(
        "some example string", "some example string", UpdateFeatureSummaryDto()
    )
    # TODO: Handle 'response' of type FeatureSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateSummaryErrorBody
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

**OnSuccess**: <code>[FeatureSummary](dev_cycle/models/feature_summary.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateSummaryErrorBody](dev_cycle/errors/features_controller_update_summary_error.py)&#93;</code>

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
<summary><code>def dynatrace_integration_controller_create_integration(body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.integrations_dynatrace.dynatrace_integration_controller_create_integration(
        CreateDynatraceIntegrationDto(
            dynatrace_environment_id="some example string",
            access_token="some example string",
            environment_url="some example string",
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerCreateIntegrationErrorBody
```

**Async**

```python
try:
    await async_client.integrations_dynatrace.dynatrace_integration_controller_create_integration(
        CreateDynatraceIntegrationDto(
            dynatrace_environment_id="some example string",
            access_token="some example string",
            environment_url="some example string",
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerCreateIntegrationErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[DynatraceIntegrationControllerCreateIntegrationErrorBody](dev_cycle/errors/dynatrace_integration_controller_create_integration_error.py)&#93;</code>

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
<summary><code>def dynatrace_integration_controller_delete_environment(dynatrace_environment_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.integrations_dynatrace.dynatrace_integration_controller_delete_environment("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerDeleteEnvironmentErrorBody
```

**Async**

```python
try:
    await async_client.integrations_dynatrace.dynatrace_integration_controller_delete_environment("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerDeleteEnvironmentErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[DynatraceIntegrationControllerDeleteEnvironmentErrorBody](dev_cycle/errors/dynatrace_integration_controller_delete_environment_error.py)&#93;</code>

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
<summary><code>def dynatrace_integration_controller_get_integrations(*, request_options: RequestOptionsOrDict | None = None) -> DynatraceIntegration</code></summary>

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
    response = client.integrations_dynatrace.dynatrace_integration_controller_get_integrations()
    # TODO: Handle 'response' of type DynatraceIntegration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerGetIntegrationsErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations_dynatrace.dynatrace_integration_controller_get_integrations()
    # TODO: Handle 'response' of type DynatraceIntegration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DynatraceIntegrationControllerGetIntegrationsErrorBody
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

**OnSuccess**: <code>[DynatraceIntegration](dev_cycle/models/dynatrace_integration.py)</code> -- Integrations fetched successfully

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[DynatraceIntegrationControllerGetIntegrationsErrorBody](dev_cycle/errors/dynatrace_integration_controller_get_integrations_error.py)&#93;</code>

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
<summary><code>def jira_integration_controller_remove(token: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.integrations_jira.jira_integration_controller_remove("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.integrations_jira.jira_integration_controller_remove("some example string")
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
| <code>token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dev_cycle/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[RawError](dev_cycle/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jira_integration_controller_remove_organization_connection(token: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.integrations_jira.jira_integration_controller_remove_organization_connection("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JiraIntegrationControllerRemoveOrganizationConnectionErrorBody
```

**Async**

```python
try:
    await async_client.integrations_jira.jira_integration_controller_remove_organization_connection(
        "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JiraIntegrationControllerRemoveOrganizationConnectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[JiraIntegrationControllerRemoveOrganizationConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_organization_connection_error.py)&#93;</code>

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
<summary><code>def jira_integration_controller_remove_project_connection(token: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.integrations_jira.jira_integration_controller_remove_project_connection("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JiraIntegrationControllerRemoveProjectConnectionErrorBody
```

**Async**

```python
try:
    await async_client.integrations_jira.jira_integration_controller_remove_project_connection("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JiraIntegrationControllerRemoveProjectConnectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[JiraIntegrationControllerRemoveProjectConnectionErrorBody](dev_cycle/errors/jira_integration_controller_remove_project_connection_error.py)&#93;</code>

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
<summary><code>def metric_associations_controller_create(project: str, body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> MetricAssociation</code></summary>

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
    response = client.metric_associations.metric_associations_controller_create(
        "some example string", CreateMetricAssociationDto(metric="some example string", feature="some example string")
    )
    # TODO: Handle 'response' of type MetricAssociation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metric_associations.metric_associations_controller_create(
        "some example string", CreateMetricAssociationDto(metric="some example string", feature="some example string")
    )
    # TODO: Handle 'response' of type MetricAssociation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerCreateErrorBody
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

**OnSuccess**: <code>[MetricAssociation](dev_cycle/models/metric_association.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricAssociationsControllerCreateErrorBody](dev_cycle/errors/metric_associations_controller_create_error.py)&#93;</code>

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
<summary><code>def metric_associations_controller_find_all(project: str, *, metric: str | None = None, feature: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[MetricAssociation]</code></summary>

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
    response = client.metric_associations.metric_associations_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[MetricAssociation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.metric_associations.metric_associations_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[MetricAssociation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[MetricAssociation](dev_cycle/models/metric_association.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricAssociationsControllerFindAllErrorBody](dev_cycle/errors/metric_associations_controller_find_all_error.py)&#93;</code>

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
<summary><code>def metric_associations_controller_remove(project: str, metric: str, feature: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.metric_associations.metric_associations_controller_remove(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.metric_associations.metric_associations_controller_remove(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricAssociationsControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricAssociationsControllerRemoveErrorBody](dev_cycle/errors/metric_associations_controller_remove_error.py)&#93;</code>

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
<summary><code>def metrics_controller_create(project: str, body: CreateMetricDto | CreateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> MetricDevCycleManagementMetricsApi</code></summary>

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
try:
    response = client.metrics.metrics_controller_create(
        "some example string",
        CreateMetricDto(
            name="some example string",
            key="some example string",
            event="some example string",
            dimension=Dimension.COUNT_PER_UNIQUE_USER,
            optimize=Optimize.INCREASE,
        ),
    )
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.metrics_controller_create(
        "some example string",
        CreateMetricDto(
            name="some example string",
            key="some example string",
            event="some example string",
            dimension=Dimension.COUNT_PER_UNIQUE_USER,
            optimize=Optimize.INCREASE,
        ),
    )
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerCreateErrorBody
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

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerCreateErrorBody](dev_cycle/errors/metrics_controller_create_error.py)&#93;</code>

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
<summary><code>def metrics_controller_fetch_results(key: str, project: str, feature: str, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MetricResult</code></summary>

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
    response = client.metrics.metrics_controller_fetch_results(
        "some example string",
        "some example string",
        "some example string",
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type MetricResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFetchResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.metrics_controller_fetch_results(
        "some example string",
        "some example string",
        "some example string",
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type MetricResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFetchResultsErrorBody
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

**OnSuccess**: <code>[MetricResult](dev_cycle/models/metric_result.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerFetchResultsErrorBody](dev_cycle/errors/metrics_controller_fetch_results_error.py)&#93;</code>

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
<summary><code>def metrics_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, dimension: Dimension3OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[MetricDevCycleManagementMetricsApi]</code></summary>

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
    response = client.metrics.metrics_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[MetricDevCycleManagementMetricsApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.metrics_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[MetricDevCycleManagementMetricsApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerFindAllErrorBody](dev_cycle/errors/metrics_controller_find_all_error.py)&#93;</code>

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
<summary><code>def metrics_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> MetricDevCycleManagementMetricsApi</code></summary>

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
    response = client.metrics.metrics_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.metrics_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerFindOneErrorBody
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

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerFindOneErrorBody](dev_cycle/errors/metrics_controller_find_one_error.py)&#93;</code>

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
<summary><code>def metrics_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.metrics.metrics_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.metrics.metrics_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerRemoveErrorBody](dev_cycle/errors/metrics_controller_remove_error.py)&#93;</code>

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
<summary><code>def metrics_controller_update(key: str, project: str, body: UpdateMetricDto | UpdateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> MetricDevCycleManagementMetricsApi</code></summary>

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
    response = client.metrics.metrics_controller_update("some example string", "some example string", UpdateMetricDto())
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.metrics_controller_update(
        "some example string", "some example string", UpdateMetricDto()
    )
    # TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetricsControllerUpdateErrorBody
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

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](dev_cycle/models/metric_dev_cycle_management_metrics_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[MetricsControllerUpdateErrorBody](dev_cycle/errors/metrics_controller_update_error.py)&#93;</code>

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
<summary><code>def test_metric_results_controller_fetch(project: str, feature: str, control: str, optimize: Optimize3OrStr, event: str, dimension: Dimension3OrStr, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MetricResult</code></summary>

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
try:
    response = client.metrics.test_metric_results_controller_fetch(
        "some example string",
        "some example string",
        "some example string",
        Optimize3.INCREASE,
        "some example string",
        Dimension3.COUNT_PER_UNIQUE_USER,
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type MetricResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestMetricResultsControllerFetchErrorBody
```

**Async**

```python
try:
    response = await async_client.metrics.test_metric_results_controller_fetch(
        "some example string",
        "some example string",
        "some example string",
        Optimize3.INCREASE,
        "some example string",
        Dimension3.COUNT_PER_UNIQUE_USER,
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
        datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type MetricResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestMetricResultsControllerFetchErrorBody
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

**OnSuccess**: <code>[MetricResult](dev_cycle/models/metric_result.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[TestMetricResultsControllerFetchErrorBody](dev_cycle/errors/test_metric_results_controller_fetch_error.py)&#93;</code>

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
<summary><code>def post_ofrep_v1_evaluate_flags(*, if_none_match: str | None = None, body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> OfrepBulkEvaluationSuccess</code></summary>

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
try:
    response = client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags()
    # TODO: Handle 'response' of type OfrepBulkEvaluationSuccess
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostOfrepV1EvaluateFlagsErrorBody
```

**Async**

```python
try:
    response = await async_client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags()
    # TODO: Handle 'response' of type OfrepBulkEvaluationSuccess
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostOfrepV1EvaluateFlagsErrorBody
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

**OnSuccess**: <code>[OfrepBulkEvaluationSuccess](dev_cycle/models/ofrep_bulk_evaluation_success.py)</code> -- OFREP successful evaluation response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[PostOfrepV1EvaluateFlagsErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_error.py)&#93;</code>

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
<summary><code>def post_ofrep_v1_evaluate_flags_by_key(key: str, *, body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> OfrepEvaluationSuccess</code></summary>

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
try:
    response = client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags_by_key(
        "some example string"
    )
    # TODO: Handle 'response' of type OfrepEvaluationSuccess
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostOfrepV1EvaluateFlagsByKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags_by_key(
        "some example string"
    )
    # TODO: Handle 'response' of type OfrepEvaluationSuccess
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostOfrepV1EvaluateFlagsByKeyErrorBody
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

**OnSuccess**: <code>[OfrepEvaluationSuccess](dev_cycle/models/ofrep_evaluation_success.py)</code> -- OFREP successful evaluation response

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[PostOfrepV1EvaluateFlagsByKeyErrorBody](dev_cycle/errors/post_ofrep_v1_evaluate_flags_by_key_error.py)&#93;</code>

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
<summary><code>def overrides_controller_delete_overrides_for_feature(feature: str, project: str, environment: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.overrides.overrides_controller_delete_overrides_for_feature(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerDeleteOverridesForFeatureErrorBody
```

**Async**

```python
try:
    await async_client.overrides.overrides_controller_delete_overrides_for_feature(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerDeleteOverridesForFeatureErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerDeleteOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_feature_error.py)&#93;</code>

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
<summary><code>def overrides_controller_delete_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.overrides.overrides_controller_delete_overrides_for_project("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerDeleteOverridesForProjectErrorBody
```

**Async**

```python
try:
    await async_client.overrides.overrides_controller_delete_overrides_for_project("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerDeleteOverridesForProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerDeleteOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_delete_overrides_for_project_error.py)&#93;</code>

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
<summary><code>def overrides_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> OverrideResponse</code></summary>

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
    response = client.overrides.overrides_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type OverrideResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.overrides.overrides_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type OverrideResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOneErrorBody
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

**OnSuccess**: <code>[OverrideResponse](dev_cycle/models/override_response.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerFindOneErrorBody](dev_cycle/errors/overrides_controller_find_one_error.py)&#93;</code>

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
<summary><code>def overrides_controller_find_overrides_for_feature(feature: str, project: str, *, add_metadata: bool | None = None, environment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FeatureOverrides</code></summary>

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
    response = client.overrides.overrides_controller_find_overrides_for_feature(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureOverrides
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOverridesForFeatureErrorBody
```

**Async**

```python
try:
    response = await async_client.overrides.overrides_controller_find_overrides_for_feature(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureOverrides
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOverridesForFeatureErrorBody
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

**OnSuccess**: <code>[FeatureOverrides](dev_cycle/models/feature_overrides.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerFindOverridesForFeatureErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_feature_error.py)&#93;</code>

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
<summary><code>def overrides_controller_find_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None) -> list[UserOverride]</code></summary>

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
    response = client.overrides.overrides_controller_find_overrides_for_project("some example string")
    # TODO: Handle 'response' of type list[UserOverride]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOverridesForProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.overrides.overrides_controller_find_overrides_for_project("some example string")
    # TODO: Handle 'response' of type list[UserOverride]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerFindOverridesForProjectErrorBody
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

**OnSuccess**: <code>list&#91;[UserOverride](dev_cycle/models/user_override.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerFindOverridesForProjectErrorBody](dev_cycle/errors/overrides_controller_find_overrides_for_project_error.py)&#93;</code>

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
<summary><code>def overrides_controller_update_feature_override(feature: str, project: str, body: UpdateOverrideDto | UpdateOverrideDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Override</code></summary>

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
    response = client.overrides.overrides_controller_update_feature_override(
        "some example string",
        "some example string",
        UpdateOverrideDto(environment="some example string", variation="some example string"),
    )
    # TODO: Handle 'response' of type Override
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerUpdateFeatureOverrideErrorBody
```

**Async**

```python
try:
    response = await async_client.overrides.overrides_controller_update_feature_override(
        "some example string",
        "some example string",
        UpdateOverrideDto(environment="some example string", variation="some example string"),
    )
    # TODO: Handle 'response' of type Override
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OverridesControllerUpdateFeatureOverrideErrorBody
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

**OnSuccess**: <code>[Override](dev_cycle/models/override.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[OverridesControllerUpdateFeatureOverrideErrorBody](dev_cycle/errors/overrides_controller_update_feature_override_error.py)&#93;</code>

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
<summary><code>def project_change_requests_controller_get_feature_change_requests(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None, reviewer: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[FeatureChangeRequestSummary]</code></summary>

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
    response = client.project_change_requests.project_change_requests_controller_get_feature_change_requests(
        "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureChangeRequestSummary]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody
```

**Async**

```python
try:
    response = await async_client.project_change_requests.project_change_requests_controller_get_feature_change_requests(
        "some example string"
    )
    # TODO: Handle 'response' of type list[FeatureChangeRequestSummary]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureChangeRequestSummary](dev_cycle/models/feature_change_request_summary.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody](dev_cycle/errors/project_change_requests_controller_get_feature_change_requests_error.py)&#93;</code>

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
<summary><code>def projects_controller_create(body: CreateProjectDto | CreateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
try:
    response = client.projects.projects_controller_create(
        CreateProjectDto(name="some example string", key="some example string")
    )
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_create(
        CreateProjectDto(name="some example string", key="some example string")
    )
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerCreateErrorBody
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

**OnSuccess**: <code>[Project](dev_cycle/models/project.py)</code> -- The project has been successfully created

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerCreateErrorBody](dev_cycle/errors/projects_controller_create_error.py)&#93;</code>

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
<summary><code>def projects_controller_find_all(*, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Project]</code></summary>

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
try:
    response = client.projects.projects_controller_find_all()
    # TODO: Handle 'response' of type list[Project]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_find_all()
    # TODO: Handle 'response' of type list[Project]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[Project](dev_cycle/models/project.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerFindAllErrorBody](dev_cycle/errors/projects_controller_find_all_error.py)&#93;</code>

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
<summary><code>def projects_controller_find_one(key: str, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
try:
    response = client.projects.projects_controller_find_one("some example string")
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_find_one("some example string")
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerFindOneErrorBody
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

**OnSuccess**: <code>[Project](dev_cycle/models/project.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerFindOneErrorBody](dev_cycle/errors/projects_controller_find_one_error.py)&#93;</code>

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
<summary><code>def projects_controller_get_staleness(key: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_silenced: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> list[FeatureStalenessEntity]</code></summary>

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
    response = client.projects.projects_controller_get_staleness("some example string")
    # TODO: Handle 'response' of type list[FeatureStalenessEntity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerGetStalenessErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_get_staleness("some example string")
    # TODO: Handle 'response' of type list[FeatureStalenessEntity]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerGetStalenessErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureStalenessEntity](dev_cycle/models/feature_staleness_entity.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerGetStalenessErrorBody](dev_cycle/errors/projects_controller_get_staleness_error.py)&#93;</code>

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
<summary><code>def projects_controller_remove(key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.projects_controller_remove("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.projects.projects_controller_remove("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerRemoveErrorBody](dev_cycle/errors/projects_controller_remove_error.py)&#93;</code>

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
<summary><code>def projects_controller_update(key: str, body: UpdateProjectDto | UpdateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
try:
    response = client.projects.projects_controller_update("some example string", UpdateProjectDto())
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_update("some example string", UpdateProjectDto())
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateErrorBody
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

**OnSuccess**: <code>[Project](dev_cycle/models/project.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerUpdateErrorBody](dev_cycle/errors/projects_controller_update_error.py)&#93;</code>

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
<summary><code>def projects_controller_update_protected_settings(key: str, body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
try:
    response = client.projects.projects_controller_update_protected_settings(
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
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateProtectedSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_update_protected_settings(
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
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateProtectedSettingsErrorBody
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

**OnSuccess**: <code>[Project](dev_cycle/models/project.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerUpdateProtectedSettingsErrorBody](dev_cycle/errors/projects_controller_update_protected_settings_error.py)&#93;</code>

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
<summary><code>def projects_controller_update_settings(key: str, body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Project</code></summary>

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
try:
    response = client.projects.projects_controller_update_settings(
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
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.projects_controller_update_settings(
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
    # TODO: Handle 'response' of type Project
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProjectsControllerUpdateSettingsErrorBody
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

**OnSuccess**: <code>[Project](dev_cycle/models/project.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ProjectsControllerUpdateSettingsErrorBody](dev_cycle/errors/projects_controller_update_settings_error.py)&#93;</code>

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
<summary><code>def results_controller_get_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ResultProjectEvaluationsByHourDto</code></summary>

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
try:
    response = client.results.results_controller_get_evaluations_per_hour_by_project("some example string")
    # TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetEvaluationsPerHourByProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.results.results_controller_get_evaluations_per_hour_by_project("some example string")
    # TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetEvaluationsPerHourByProjectErrorBody
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

**OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ResultsControllerGetEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_evaluations_per_hour_by_project_error.py)&#93;</code>

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
<summary><code>def results_controller_get_total_evaluations_per_hour_by_feature(feature: str, project: str, *, start_date: float | None = None, end_date: float | None = None, platform: str | None = None, variable: str | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ResultEvaluationsByHourDto</code></summary>

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
try:
    response = client.results.results_controller_get_total_evaluations_per_hour_by_feature(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ResultEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody
```

**Async**

```python
try:
    response = await async_client.results.results_controller_get_total_evaluations_per_hour_by_feature(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ResultEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody
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

**OnSuccess**: <code>[ResultEvaluationsByHourDto](dev_cycle/models/result_evaluations_by_hour_dto.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_feature_error.py)&#93;</code>

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
<summary><code>def results_controller_get_total_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ResultProjectEvaluationsByHourDto</code></summary>

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
try:
    response = client.results.results_controller_get_total_evaluations_per_hour_by_project("some example string")
    # TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.results.results_controller_get_total_evaluations_per_hour_by_project(
        "some example string"
    )
    # TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody
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

**OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](dev_cycle/models/result_project_evaluations_by_hour_dto.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody](dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_project_error.py)&#93;</code>

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
<summary><code>def user_profiles_controller_create_or_update(project: str, body: UpdateUserProfileDto | UpdateUserProfileDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUserProfile</code></summary>

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
try:
    response = client.user_profiles.user_profiles_controller_create_or_update(
        "some example string", UpdateUserProfileDto()
    )
    # TODO: Handle 'response' of type ProjectUserProfile
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UserProfilesControllerCreateOrUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.user_profiles.user_profiles_controller_create_or_update(
        "some example string", UpdateUserProfileDto()
    )
    # TODO: Handle 'response' of type ProjectUserProfile
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UserProfilesControllerCreateOrUpdateErrorBody
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

**OnSuccess**: <code>[ProjectUserProfile](dev_cycle/models/project_user_profile.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[UserProfilesControllerCreateOrUpdateErrorBody](dev_cycle/errors/user_profiles_controller_create_or_update_error.py)&#93;</code>

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
<summary><code>def user_profiles_controller_find_all(project: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUserProfile</code></summary>

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
try:
    response = client.user_profiles.user_profiles_controller_find_all("some example string")
    # TODO: Handle 'response' of type ProjectUserProfile
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UserProfilesControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.user_profiles.user_profiles_controller_find_all("some example string")
    # TODO: Handle 'response' of type ProjectUserProfile
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UserProfilesControllerFindAllErrorBody
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

**OnSuccess**: <code>[ProjectUserProfile](dev_cycle/models/project_user_profile.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[UserProfilesControllerFindAllErrorBody](dev_cycle/errors/user_profiles_controller_find_all_error.py)&#93;</code>

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
<summary><code>def variables_controller_create(project: str, body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict, *, request_options: RequestOptionsOrDict | None = None) -> VariableDevCycleManagementVariablesApi</code></summary>

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
    response = client.variables_api.variables_controller_create(
        "some example string",
        CreateVariableDtoDevCycleManagementVariablesApi(
            key="some example string", type_=TypeDevCycleManagementVariablesApi.STRING
        ),
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.variables_api.variables_controller_create(
        "some example string",
        CreateVariableDtoDevCycleManagementVariablesApi(
            key="some example string", type_=TypeDevCycleManagementVariablesApi.STRING
        ),
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerCreateErrorBody
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

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerCreateErrorBody](dev_cycle/errors/variables_controller_create_error.py)&#93;</code>

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
<summary><code>def variables_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, feature: str | None = None, type_: Type3DevCycleManagementVariablesApiOrStr | None = None, status: Status2DevCycleManagementVariablesApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[VariableDevCycleManagementVariablesApi]</code></summary>

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
    response = client.variables_api.variables_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[VariableDevCycleManagementVariablesApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.variables_api.variables_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[VariableDevCycleManagementVariablesApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerFindAllErrorBody](dev_cycle/errors/variables_controller_find_all_error.py)&#93;</code>

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
<summary><code>def variables_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> VariableDevCycleManagementVariablesApi</code></summary>

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
    response = client.variables_api.variables_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.variables_api.variables_controller_find_one(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerFindOneErrorBody
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

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerFindOneErrorBody](dev_cycle/errors/variables_controller_find_one_error.py)&#93;</code>

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
<summary><code>def variables_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.variables_api.variables_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerRemoveErrorBody
```

**Async**

```python
try:
    await async_client.variables_api.variables_controller_remove("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerRemoveErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerRemoveErrorBody](dev_cycle/errors/variables_controller_remove_error.py)&#93;</code>

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
<summary><code>def variables_controller_update(key: str, project: str, body: UpdateVariableDto | UpdateVariableDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> VariableDevCycleManagementVariablesApi</code></summary>

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
    response = client.variables_api.variables_controller_update(
        "some example string", "some example string", UpdateVariableDto()
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.variables_api.variables_controller_update(
        "some example string", "some example string", UpdateVariableDto()
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerUpdateErrorBody
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

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerUpdateErrorBody](dev_cycle/errors/variables_controller_update_error.py)&#93;</code>

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
<summary><code>def variables_controller_update_status(key: str, project: str, body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> VariableDevCycleManagementVariablesApi</code></summary>

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
    response = client.variables_api.variables_controller_update_status(
        "some example string",
        "some example string",
        UpdateVariableStatusDto(status=Status1DevCycleManagementVariablesApi.ACTIVE),
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerUpdateStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.variables_api.variables_controller_update_status(
        "some example string",
        "some example string",
        UpdateVariableStatusDto(status=Status1DevCycleManagementVariablesApi.ACTIVE),
    )
    # TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablesControllerUpdateStatusErrorBody
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

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](dev_cycle/models/variable_dev_cycle_management_variables_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariablesControllerUpdateStatusErrorBody](dev_cycle/errors/variables_controller_update_status_error.py)&#93;</code>

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
<summary><code>def variations_controller_create(project: str, feature: str, body: FeatureVariationDto | FeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementMetricAssociationsApi</code></summary>

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
try:
    response = client.variations.variations_controller_create(
        "some example string",
        "some example string",
        FeatureVariationDto(key="some example string", name="some example string"),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.variations.variations_controller_create(
        "some example string",
        "some example string",
        FeatureVariationDto(key="some example string", name="some example string"),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerCreateErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariationsControllerCreateErrorBody](dev_cycle/errors/variations_controller_create_error.py)&#93;</code>

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
<summary><code>def variations_controller_find_all(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Variation]</code></summary>

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
try:
    response = client.variations.variations_controller_find_all("some example string", "some example string")
    # TODO: Handle 'response' of type list[Variation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.variations.variations_controller_find_all(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[Variation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[Variation](dev_cycle/models/variation.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariationsControllerFindAllErrorBody](dev_cycle/errors/variations_controller_find_all_error.py)&#93;</code>

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
<summary><code>def variations_controller_find_one(key: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> Variation</code></summary>

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
try:
    response = client.variations.variations_controller_find_one(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Variation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.variations.variations_controller_find_one(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Variation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerFindOneErrorBody
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

**OnSuccess**: <code>[Variation](dev_cycle/models/variation.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariationsControllerFindOneErrorBody](dev_cycle/errors/variations_controller_find_one_error.py)&#93;</code>

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
<summary><code>def variations_controller_update(key: str, feature: str, project: str, body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementMetricAssociationsApi</code></summary>

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
try:
    response = client.variations.variations_controller_update(
        "some example string", "some example string", "some example string", UpdateFeatureVariationDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.variations.variations_controller_update(
        "some example string", "some example string", "some example string", UpdateFeatureVariationDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariationsControllerUpdateErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[VariationsControllerUpdateErrorBody](dev_cycle/errors/variations_controller_update_error.py)&#93;</code>

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
<summary><code>def webhooks_controller_create(project: str, body: CreateWebhookDto | CreateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.webhooks_controller_create(
        "some example string",
        CreateWebhookDto(name="some example string", events=["some example string"], url="some example string"),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_controller_create(
        "some example string",
        CreateWebhookDto(name="some example string", events=["some example string"], url="some example string"),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerCreateErrorBody
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

**OnSuccess**: <code>[Webhook](dev_cycle/models/webhook.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[WebhooksControllerCreateErrorBody](dev_cycle/errors/webhooks_controller_create_error.py)&#93;</code>

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
<summary><code>def webhooks_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Webhook]</code></summary>

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
    response = client.webhooks_api.webhooks_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[Webhook]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerFindAllErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_controller_find_all("some example string")
    # TODO: Handle 'response' of type list[Webhook]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerFindAllErrorBody
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

**OnSuccess**: <code>list&#91;[Webhook](dev_cycle/models/webhook.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[WebhooksControllerFindAllErrorBody](dev_cycle/errors/webhooks_controller_find_all_error.py)&#93;</code>

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
<summary><code>def webhooks_controller_find_one(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.webhooks_controller_find_one("some example string", "some example string")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerFindOneErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_controller_find_one(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerFindOneErrorBody
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

**OnSuccess**: <code>[Webhook](dev_cycle/models/webhook.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[WebhooksControllerFindOneErrorBody](dev_cycle/errors/webhooks_controller_find_one_error.py)&#93;</code>

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
<summary><code>def webhooks_controller_remove(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.webhooks_controller_remove("some example string", "some example string")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerRemoveErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_controller_remove("some example string", "some example string")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerRemoveErrorBody
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

**OnSuccess**: <code>[Webhook](dev_cycle/models/webhook.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[WebhooksControllerRemoveErrorBody](dev_cycle/errors/webhooks_controller_remove_error.py)&#93;</code>

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
<summary><code>def webhooks_controller_update(id_: str, project: str, body: UpdateWebhookDto | UpdateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.webhooks_controller_update(
        "some example string",
        "some example string",
        UpdateWebhookDto(feature="some example string", environments=["some example string"]),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.webhooks_controller_update(
        "some example string",
        "some example string",
        UpdateWebhookDto(feature="some example string", environments=["some example string"]),
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebhooksControllerUpdateErrorBody
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

**OnSuccess**: <code>[Webhook](dev_cycle/models/webhook.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[WebhooksControllerUpdateErrorBody](dev_cycle/errors/webhooks_controller_update_error.py)&#93;</code>

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
<summary><code>def semantic_patch_controller_semantic_update(key: str, project: str, body: AudiencePatchDto | AudiencePatchDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.beta_semantic_patch.semantic_patch_controller_semantic_update(
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
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SemanticPatchControllerSemanticUpdateErrorBody
```

**Async**

```python
try:
    await async_client.beta_semantic_patch.semantic_patch_controller_semantic_update(
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
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SemanticPatchControllerSemanticUpdateErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[SemanticPatchControllerSemanticUpdateErrorBody](dev_cycle/errors/semantic_patch_controller_semantic_update_error.py)&#93;</code>

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
<summary><code>def features_controller_create_multiple_v1(project: str, body: list[str], *, request_options: RequestOptionsOrDict | None = None) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_create_multiple_v1(
        "some example string", ["some example string"]
    )
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateMultipleV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_create_multiple_v1(
        "some example string", ["some example string"]
    )
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateMultipleV1ErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerCreateMultipleV1ErrorBody](dev_cycle/errors/features_controller_create_multiple_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_create_v1(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_create_v1(
        "some example string",
        CreateFeatureDto(
            key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
        ),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_create_v1(
        "some example string",
        CreateFeatureDto(
            key="some example string", name="some example string", configurations={"key": UpdateFeatureConfigDto()}
        ),
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerCreateV1ErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerCreateV1ErrorBody](dev_cycle/errors/features_controller_create_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_find_all_linked_issues_v1(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> list[JiraIssueLink]</code></summary>

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
    response = client.deprecated_features_v1.features_controller_find_all_linked_issues_v1(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[JiraIssueLink]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllLinkedIssuesV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_find_all_linked_issues_v1(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[JiraIssueLink]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllLinkedIssuesV1ErrorBody
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

**OnSuccess**: <code>list&#91;[JiraIssueLink](dev_cycle/models/jira_issue_link.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindAllLinkedIssuesV1ErrorBody](dev_cycle/errors/features_controller_find_all_linked_issues_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_find_all_v1(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]</code></summary>

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
    response = client.deprecated_features_v1.features_controller_find_all_v1("some example string")
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_find_all_v1("some example string")
    # TODO: Handle 'response' of type list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindAllV1ErrorBody
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

**OnSuccess**: <code>list&#91;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)&#93;</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindAllV1ErrorBody](dev_cycle/errors/features_controller_find_all_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_find_one_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_find_one_v1(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindOneV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_find_one_v1(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindOneV1ErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindOneV1ErrorBody](dev_cycle/errors/features_controller_find_one_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_find_static_configuration_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> StaticConfiguration</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_find_static_configuration_v1(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindStaticConfigurationV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_find_static_configuration_v1(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerFindStaticConfigurationV1ErrorBody
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

**OnSuccess**: <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerFindStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_find_static_configuration_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_link_issue_v1(feature: str, project: str, body: LinkJiraIssueDto | LinkJiraIssueDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> JiraIssueLink</code></summary>

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
    response = client.deprecated_features_v1.features_controller_link_issue_v1(
        "some example string", "some example string", LinkJiraIssueDto(issue_id="some example string")
    )
    # TODO: Handle 'response' of type JiraIssueLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerLinkIssueV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_link_issue_v1(
        "some example string", "some example string", LinkJiraIssueDto(issue_id="some example string")
    )
    # TODO: Handle 'response' of type JiraIssueLink
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerLinkIssueV1ErrorBody
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

**OnSuccess**: <code>[JiraIssueLink](dev_cycle/models/jira_issue_link.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerLinkIssueV1ErrorBody](dev_cycle/errors/features_controller_link_issue_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_remove_linked_issue_v1(feature: str, issue_id: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.deprecated_features_v1.features_controller_remove_linked_issue_v1(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerRemoveLinkedIssueV1ErrorBody
```

**Async**

```python
try:
    await async_client.deprecated_features_v1.features_controller_remove_linked_issue_v1(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerRemoveLinkedIssueV1ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerRemoveLinkedIssueV1ErrorBody](dev_cycle/errors/features_controller_remove_linked_issue_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_remove_v1(feature: str, key: str, project: str, *, delete_variables: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.deprecated_features_v1.features_controller_remove_v1(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerRemoveV1ErrorBody
```

**Async**

```python
try:
    await async_client.deprecated_features_v1.features_controller_remove_v1(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerRemoveV1ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerRemoveV1ErrorBody](dev_cycle/errors/features_controller_remove_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_update_static_configuration_v1(feature: str, key: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> StaticConfiguration</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_update_static_configuration_v1(
        "some example string", "some example string", "some example string", UpdateStaticConfigurationDto()
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStaticConfigurationV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_update_static_configuration_v1(
        "some example string", "some example string", "some example string", UpdateStaticConfigurationDto()
    )
    # TODO: Handle 'response' of type StaticConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStaticConfigurationV1ErrorBody
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

**OnSuccess**: <code>[StaticConfiguration](dev_cycle/models/static_configuration.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateStaticConfigurationV1ErrorBody](dev_cycle/errors/features_controller_update_static_configuration_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_update_status_v1(feature: str, key: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_update_status_v1(
        "some example string", "some example string", "some example string", UpdateFeatureStatusDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStatusV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_update_status_v1(
        "some example string", "some example string", "some example string", UpdateFeatureStatusDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateStatusV1ErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateStatusV1ErrorBody](dev_cycle/errors/features_controller_update_status_v1_error.py)&#93;</code>

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
<summary><code>def features_controller_update_v1(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api</code></summary>

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
try:
    response = client.deprecated_features_v1.features_controller_update_v1(
        "some example string", "some example string", UpdateFeatureDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateV1ErrorBody
```

**Async**

```python
try:
    response = await async_client.deprecated_features_v1.features_controller_update_v1(
        "some example string", "some example string", UpdateFeatureDto()
    )
    # TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeaturesControllerUpdateV1ErrorBody
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

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py)</code>

**OnError**: <code>[ApiError](dev_cycle/core/exceptions.py)&#91;[FeaturesControllerUpdateV1ErrorBody](dev_cycle/errors/features_controller_update_v1_error.py)&#93;</code>

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

