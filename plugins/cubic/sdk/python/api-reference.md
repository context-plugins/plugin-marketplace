# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CubicClient](cubic/client.py)

## Analytics

> Source: [Analytics](cubic/apis/analytics.py)

<details>
<summary><code>def list_pull_request_analytics(org: str, *, repo: str | None = None, start_date: str | None = None, end_date: str | None = None, per_page: int | None = 100, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsPrPage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export metrics for merged pull requests reviewed by cubic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analytics.list_pull_request_analytics("some example string")
    # TODO: Handle 'response' of type AnalyticsPrPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPullRequestAnalyticsErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics.list_pull_request_analytics("some example string")
    # TODO: Handle 'response' of type AnalyticsPrPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPullRequestAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org</code> | <code>str</code> | GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is trimmed before validation. |
| <code>repo</code> | <code>str \| None</code> | Filter to one repository under the selected owner. Surrounding whitespace is trimmed before validation; blank values are ignored.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as 2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's available history.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z. Surrounding whitespace is trimmed before validation; blank values are ignored.<br>**Default**: <code>None</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of results per page, from 1 to 100. Values outside this range return 400.<br>**Default**: <code>100</code> |
| <code>cursor</code> | <code>str \| None</code> | Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cubic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsPrPage](cubic/models/analytics_pr_page.py)</code> -- A page of pull request analytics. nextCursor is null on the last page. Recent updates may take a short time to appear due to read-replica lag.

**OnError**: <code>[ApiError](cubic/core/exceptions.py)&#91;[ListPullRequestAnalyticsErrorBody](cubic/errors/list_pull_request_analytics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[AnalyticsError](cubic/models/analytics_error.py)</code> |
| anything unmapped | <code>[RawError](cubic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](cubic/apis/organizations.py)

<details>
<summary><code>def get_member(org: str, github_user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrganizationMember</code></summary>

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
    response = client.organizations.get_member("some example string", "some example string")
    # TODO: Handle 'response' of type OrganizationMember
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMemberErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_member("some example string", "some example string")
    # TODO: Handle 'response' of type OrganizationMember
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org</code> | <code>str</code> | GitHub organization login, such as acme. |
| <code>github_user_id</code> | <code>str</code> | Numeric GitHub user ID of the member. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cubic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationMember](cubic/models/organization_member.py)</code> -- OK

**OnError**: <code>[ApiError](cubic/core/exceptions.py)&#91;[GetMemberErrorBody](cubic/errors/get_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Error](cubic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cubic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_members(org: str, *, search: str | None = None, role: RoleOrStr | None = None, seat: SeatOrStr | None = None, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> MemberList</code></summary>

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
    response = client.organizations.list_members("some example string")
    # TODO: Handle 'response' of type MemberList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.list_members("some example string")
    # TODO: Handle 'response' of type MemberList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org</code> | <code>str</code> | GitHub organization login, such as acme. |
| <code>search</code> | <code>str \| None</code> | Match part of a GitHub login.<br>**Default**: <code>None</code> |
| <code>role</code> | <code>[RoleOrStr](cubic/models/enums/role.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>seat</code> | <code>[SeatOrStr](cubic/models/enums/seat.py) \| None</code> | true for members with a seat, false for members without one.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | The nextCursor from the previous page.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cubic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberList](cubic/models/member_list.py)</code> -- OK

**OnError**: <code>[ApiError](cubic/core/exceptions.py)&#91;[ListMembersErrorBody](cubic/errors/list_members_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Error](cubic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cubic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organizations(*, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> OrganizationList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An organization API key lists only its own organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.list_organizations()
    # TODO: Handle 'response' of type OrganizationList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.list_organizations()
    # TODO: Handle 'response' of type OrganizationList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | The nextCursor from the previous page.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cubic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationList](cubic/models/organization_list.py)</code> -- OK

**OnError**: <code>[ApiError](cubic/core/exceptions.py)&#91;[ListOrganizationsErrorBody](cubic/errors/list_organizations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500, 503 | <code>[Error](cubic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cubic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_member(org: str, github_user_id: str, body: MemberUpdate | MemberUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> MemberUpdateResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the GitHub organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.update_member("some example string", "some example string", MemberUpdate())
    # TODO: Handle 'response' of type MemberUpdateResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMemberErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.update_member(
        "some example string", "some example string", MemberUpdate()
    )
    # TODO: Handle 'response' of type MemberUpdateResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org</code> | <code>str</code> | GitHub organization login, such as acme. |
| <code>github_user_id</code> | <code>str</code> | Numeric GitHub user ID of the member. |
| <code>body</code> | <code>[MemberUpdate](cubic/models/member_update.py) \| [MemberUpdateDict](cubic/models/member_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cubic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberUpdateResult](cubic/models/member_update_result.py)</code> -- OK

**OnError**: <code>[ApiError](cubic/core/exceptions.py)&#91;[UpdateMemberErrorBody](cubic/errors/update_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 422, 429, 500, 503 | <code>[Error](cubic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cubic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

