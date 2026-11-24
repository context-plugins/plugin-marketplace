# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleAnalyticsClient](google_analytics/client.py)

## AccountSummaries

> Source: [AccountSummaries](google_analytics/apis/account_summaries.py)

<details>
<summary><code>def analyticsadmin_account_summaries_list(*, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AnalyticsadminAccountSummariesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summaries of all accounts accessible by the caller.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account_summaries.with_raw_response.analyticsadmin_account_summaries_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountSummariesListErrorBody
```

**Async**

```python
result = await async_client.account_summaries.with_raw_response.analyticsadmin_account_summaries_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountSummariesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse](google_analytics/models/google_analytics_admin_v1_beta_list_account_summaries_response.py), [AnalyticsadminAccountSummariesListErrorBody](google_analytics/errors/analyticsadmin_account_summaries_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse](google_analytics/models/google_analytics_admin_v1_beta_list_account_summaries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountSummariesListErrorBody](google_analytics/errors/analyticsadmin_account_summaries_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](google_analytics/apis/accounts.py)

<details>
<summary><code>def analyticsadmin_accounts_delete(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminAccountsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_delete("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsDeleteErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_delete("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminAccountsDeleteErrorBody](google_analytics/errors/analyticsadmin_accounts_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsDeleteErrorBody](google_analytics/errors/analyticsadmin_accounts_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_get(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single Account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsGetErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaAccount](google_analytics/models/google_analytics_admin_v1_beta_account.py), [AnalyticsadminAccountsGetErrorBody](google_analytics/errors/analyticsadmin_accounts_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaAccount](google_analytics/models/google_analytics_admin_v1_beta_account.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsGetErrorBody](google_analytics/errors/analyticsadmin_accounts_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_get_data_sharing_settings(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataSharingSettings, AnalyticsadminAccountsGetDataSharingSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data sharing settings on an account. Data sharing settings are singletons.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_get_data_sharing_settings("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataSharingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsGetDataSharingSettingsErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_get_data_sharing_settings(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataSharingSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsGetDataSharingSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataSharingSettings](google_analytics/models/google_analytics_admin_v1_beta_data_sharing_settings.py), [AnalyticsadminAccountsGetDataSharingSettingsErrorBody](google_analytics/errors/analyticsadmin_accounts_get_data_sharing_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataSharingSettings](google_analytics/models/google_analytics_admin_v1_beta_data_sharing_settings.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsGetDataSharingSettingsErrorBody](google_analytics/errors/analyticsadmin_accounts_get_data_sharing_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_list(*, page_size: int | None = None, page_token: str | None = None, show_deleted: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountsResponse, AnalyticsadminAccountsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using `ListAccountSummaries`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsListErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>show_deleted</code> | <code>bool \| None</code> | Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListAccountsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_accounts_response.py), [AnalyticsadminAccountsListErrorBody](google_analytics/errors/analyticsadmin_accounts_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListAccountsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_accounts_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsListErrorBody](google_analytics/errors/analyticsadmin_accounts_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_patch(accounts_id: str, body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_patch(
    "some example string", GoogleAnalyticsAdminV1BetaAccount()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsPatchErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_patch(
    "some example string", GoogleAnalyticsAdminV1BetaAccount()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaAccount](google_analytics/models/google_analytics_admin_v1_beta_account.py) \| [GoogleAnalyticsAdminV1BetaAccountDict](google_analytics/models/google_analytics_admin_v1_beta_account.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaAccount](google_analytics/models/google_analytics_admin_v1_beta_account.py), [AnalyticsadminAccountsPatchErrorBody](google_analytics/errors/analyticsadmin_accounts_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaAccount](google_analytics/models/google_analytics_admin_v1_beta_account.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsPatchErrorBody](google_analytics/errors/analyticsadmin_accounts_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_provision_account_ticket(body: GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, AnalyticsadminAccountsProvisionAccountTicketErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a ticket for creating an account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_provision_account_ticket(
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsProvisionAccountTicketErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_provision_account_ticket(
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsProvisionAccountTicketErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest](google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_request.py) \| [GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict](google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse](google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_response.py), [AnalyticsadminAccountsProvisionAccountTicketErrorBody](google_analytics/errors/analyticsadmin_accounts_provision_account_ticket_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse](google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsProvisionAccountTicketErrorBody](google_analytics/errors/analyticsadmin_accounts_provision_account_ticket_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_run_access_report(accounts_id: str, body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminAccountsRunAccessReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_run_access_report(
    "some example string", GoogleAnalyticsAdminV1BetaRunAccessReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsRunAccessReportErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_run_access_report(
    "some example string", GoogleAnalyticsAdminV1BetaRunAccessReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsRunAccessReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaRunAccessReportRequest](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py) \| [GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py), [AnalyticsadminAccountsRunAccessReportErrorBody](google_analytics/errors/analyticsadmin_accounts_run_access_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsRunAccessReportErrorBody](google_analytics/errors/analyticsadmin_accounts_run_access_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_accounts_search_change_history_events(accounts_id: str, body: GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse, AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.analyticsadmin_accounts_search_change_history_events(
    "some example string", GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.analyticsadmin_accounts_search_change_history_events(
    "some example string", GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accounts_id</code> | <code>str</code> | Resource name segment (accountsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest](google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_request.py) \| [GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict](google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_response.py), [AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody](google_analytics/errors/analyticsadmin_accounts_search_change_history_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody](google_analytics/errors/analyticsadmin_accounts_search_change_history_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](google_analytics/apis/properties.py)

<details>
<summary><code>def analyticsadmin_properties_acknowledge_user_data_collection(properties_id: str, body: GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_acknowledge_user_data_collection(
    "some example string", GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_acknowledge_user_data_collection(
    "some example string", GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest](google_analytics/models/google_analytics_admin_v1_beta_acknowledge_user_data_collection_request.py) \| [GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict](google_analytics/models/google_analytics_admin_v1_beta_acknowledge_user_data_collection_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody](google_analytics/errors/analyticsadmin_properties_acknowledge_user_data_collection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody](google_analytics/errors/analyticsadmin_properties_acknowledge_user_data_collection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_conversion_events_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_conversion_events_create(
    "some example string", GoogleAnalyticsAdminV1BetaConversionEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_conversion_events_create(
    "some example string", GoogleAnalyticsAdminV1BetaConversionEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py) \| [GoogleAnalyticsAdminV1BetaConversionEventDict](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py), [AnalyticsadminPropertiesConversionEventsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesConversionEventsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_conversion_events_delete(properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesConversionEventsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_conversion_events_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_conversion_events_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>conversion_events_id</code> | <code>str</code> | Resource name segment (conversionEventsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesConversionEventsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesConversionEventsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_conversion_events_get(properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_conversion_events_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_conversion_events_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>conversion_events_id</code> | <code>str</code> | Resource name segment (conversionEventsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py), [AnalyticsadminPropertiesConversionEventsGetErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesConversionEventsGetErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_conversion_events_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListConversionEventsResponse, AnalyticsadminPropertiesConversionEventsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_conversion_events_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListConversionEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_conversion_events_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListConversionEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListConversionEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_conversion_events_response.py), [AnalyticsadminPropertiesConversionEventsListErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListConversionEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_conversion_events_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesConversionEventsListErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_conversion_events_patch(properties_id: str, conversion_events_id: str, body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_conversion_events_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaConversionEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_conversion_events_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaConversionEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaConversionEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesConversionEventsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>conversion_events_id</code> | <code>str</code> | Resource name segment (conversionEventsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py) \| [GoogleAnalyticsAdminV1BetaConversionEventDict](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py), [AnalyticsadminPropertiesConversionEventsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaConversionEvent](google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesConversionEventsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_conversion_events_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_create(body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Google Analytics property with the specified location and attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_create(GoogleAnalyticsAdminV1BetaProperty())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_create(
    GoogleAnalyticsAdminV1BetaProperty()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py) \| [GoogleAnalyticsAdminV1BetaPropertyDict](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py), [AnalyticsadminPropertiesCreateErrorBody](google_analytics/errors/analyticsadmin_properties_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCreateErrorBody](google_analytics/errors/analyticsadmin_properties_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_dimensions_archive(properties_id: str, custom_dimensions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a CustomDimension on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_archive(
    "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_archive(
    "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_dimensions_id</code> | <code>str</code> | Resource name segment (customDimensionsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_archive_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_archive_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_dimensions_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_create(
    "some example string", GoogleAnalyticsAdminV1BetaCustomDimension()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_create(
    "some example string", GoogleAnalyticsAdminV1BetaCustomDimension()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py) \| [GoogleAnalyticsAdminV1BetaCustomDimensionDict](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py), [AnalyticsadminPropertiesCustomDimensionsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomDimensionsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_dimensions_get(properties_id: str, custom_dimensions_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single CustomDimension.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_dimensions_id</code> | <code>str</code> | Resource name segment (customDimensionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py), [AnalyticsadminPropertiesCustomDimensionsGetErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomDimensionsGetErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_dimensions_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, AnalyticsadminPropertiesCustomDimensionsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists CustomDimensions on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_custom_dimensions_response.py), [AnalyticsadminPropertiesCustomDimensionsListErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_custom_dimensions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomDimensionsListErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_dimensions_patch(properties_id: str, custom_dimensions_id: str, body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a CustomDimension on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaCustomDimension()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_dimensions_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaCustomDimension()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomDimension
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomDimensionsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_dimensions_id</code> | <code>str</code> | Resource name segment (customDimensionsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py) \| [GoogleAnalyticsAdminV1BetaCustomDimensionDict](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py), [AnalyticsadminPropertiesCustomDimensionsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomDimension](google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomDimensionsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_custom_dimensions_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_metrics_archive(properties_id: str, custom_metrics_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesCustomMetricsArchiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a CustomMetric on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_archive(
    "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsArchiveErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_archive(
    "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsArchiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_metrics_id</code> | <code>str</code> | Resource name segment (customMetricsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesCustomMetricsArchiveErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_archive_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomMetricsArchiveErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_archive_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_metrics_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a CustomMetric.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_create(
    "some example string", GoogleAnalyticsAdminV1BetaCustomMetric()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_create(
    "some example string", GoogleAnalyticsAdminV1BetaCustomMetric()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py) \| [GoogleAnalyticsAdminV1BetaCustomMetricDict](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py), [AnalyticsadminPropertiesCustomMetricsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomMetricsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_metrics_get(properties_id: str, custom_metrics_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single CustomMetric.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_metrics_id</code> | <code>str</code> | Resource name segment (customMetricsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py), [AnalyticsadminPropertiesCustomMetricsGetErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomMetricsGetErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_metrics_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, AnalyticsadminPropertiesCustomMetricsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists CustomMetrics on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_custom_metrics_response.py), [AnalyticsadminPropertiesCustomMetricsListErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_custom_metrics_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomMetricsListErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_custom_metrics_patch(properties_id: str, custom_metrics_id: str, body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a CustomMetric on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaCustomMetric()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_custom_metrics_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaCustomMetric()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaCustomMetric
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesCustomMetricsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>custom_metrics_id</code> | <code>str</code> | Resource name segment (customMetricsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py) \| [GoogleAnalyticsAdminV1BetaCustomMetricDict](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py), [AnalyticsadminPropertiesCustomMetricsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaCustomMetric](google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesCustomMetricsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_custom_metrics_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DataStream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_create(
    "some example string", GoogleAnalyticsAdminV1BetaDataStream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_create(
    "some example string", GoogleAnalyticsAdminV1BetaDataStream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py) \| [GoogleAnalyticsAdminV1BetaDataStreamDict](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py), [AnalyticsadminPropertiesDataStreamsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_delete(properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a DataStream on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesDataStreamsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_get(properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single DataStream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py), [AnalyticsadminPropertiesDataStreamsGetErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsGetErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListDataStreamsResponse, AnalyticsadminPropertiesDataStreamsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists DataStreams on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListDataStreamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListDataStreamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListDataStreamsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_data_streams_response.py), [AnalyticsadminPropertiesDataStreamsListErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListDataStreamsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_data_streams_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsListErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(properties_id: str, data_streams_id: str, body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a measurement protocol secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py) \| [GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py), [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes target MeasurementProtocolSecret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>measurement_protocol_secrets_id</code> | <code>str</code> | Resource name segment (measurementProtocolSecretsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single MeasurementProtocolSecret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>measurement_protocol_secrets_id</code> | <code>str</code> | Resource name segment (measurementProtocolSecretsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py), [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(properties_id: str, data_streams_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns child MeasurementProtocolSecrets under the specified parent Property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_measurement_protocol_secrets_response.py), [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_measurement_protocol_secrets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a measurement protocol secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
    "some example string",
    "some example string",
    "some example string",
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
    "some example string",
    "some example string",
    "some example string",
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>measurement_protocol_secrets_id</code> | <code>str</code> | Resource name segment (measurementProtocolSecretsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py) \| [GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Omitted fields will not be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py), [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_data_streams_patch(properties_id: str, data_streams_id: str, body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a DataStream on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_data_streams_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaDataStream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_data_streams_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaDataStream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataStream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDataStreamsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>data_streams_id</code> | <code>str</code> | Resource name segment (dataStreamsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py) \| [GoogleAnalyticsAdminV1BetaDataStreamDict](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py), [AnalyticsadminPropertiesDataStreamsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataStream](google_analytics/models/google_analytics_admin_v1_beta_data_stream.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDataStreamsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_data_streams_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_delete(properties_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_delete("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_delete("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py), [AnalyticsadminPropertiesDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_firebase_links_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaFirebaseLink, AnalyticsadminPropertiesFirebaseLinksCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_firebase_links_create(
    "some example string", GoogleAnalyticsAdminV1BetaFirebaseLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaFirebaseLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_firebase_links_create(
    "some example string", GoogleAnalyticsAdminV1BetaFirebaseLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaFirebaseLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py) \| [GoogleAnalyticsAdminV1BetaFirebaseLinkDict](google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaFirebaseLink](google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py), [AnalyticsadminPropertiesFirebaseLinksCreateErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesFirebaseLinksCreateErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_firebase_links_delete(properties_id: str, firebase_links_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a FirebaseLink on a property

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_firebase_links_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_firebase_links_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>firebase_links_id</code> | <code>str</code> | Resource name segment (firebaseLinksId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_firebase_links_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, AnalyticsadminPropertiesFirebaseLinksListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_firebase_links_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_firebase_links_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesFirebaseLinksListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse](google_analytics/models/google_analytics_admin_v1_beta_list_firebase_links_response.py), [AnalyticsadminPropertiesFirebaseLinksListErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse](google_analytics/models/google_analytics_admin_v1_beta_list_firebase_links_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesFirebaseLinksListErrorBody](google_analytics/errors/analyticsadmin_properties_firebase_links_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_get(properties_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single GA Property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py), [AnalyticsadminPropertiesGetErrorBody](google_analytics/errors/analyticsadmin_properties_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGetErrorBody](google_analytics/errors/analyticsadmin_properties_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_get_data_retention_settings(properties_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the singleton data retention settings for this property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_get_data_retention_settings(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_get_data_retention_settings(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataRetentionSettings](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py), [AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody](google_analytics/errors/analyticsadmin_properties_get_data_retention_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody](google_analytics/errors/analyticsadmin_properties_get_data_retention_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_google_ads_links_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GoogleAdsLink.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_create(
    "some example string", GoogleAnalyticsAdminV1BetaGoogleAdsLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_create(
    "some example string", GoogleAnalyticsAdminV1BetaGoogleAdsLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py) \| [GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py), [AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_google_ads_links_delete(properties_id: str, google_ads_links_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GoogleAdsLink on a property

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>google_ads_links_id</code> | <code>str</code> | Resource name segment (googleAdsLinksId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_google_ads_links_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, AnalyticsadminPropertiesGoogleAdsLinksListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists GoogleAdsLinks on a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse](google_analytics/models/google_analytics_admin_v1_beta_list_google_ads_links_response.py), [AnalyticsadminPropertiesGoogleAdsLinksListErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse](google_analytics/models/google_analytics_admin_v1_beta_list_google_ads_links_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGoogleAdsLinksListErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_google_ads_links_patch(properties_id: str, google_ads_links_id: str, body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GoogleAdsLink on a property

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaGoogleAdsLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_google_ads_links_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaGoogleAdsLink()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>google_ads_links_id</code> | <code>str</code> | Resource name segment (googleAdsLinksId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py) \| [GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py), [AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody](google_analytics/errors/analyticsadmin_properties_google_ads_links_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_key_events_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Key Event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_key_events_create(
    "some example string", GoogleAnalyticsAdminV1BetaKeyEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_key_events_create(
    "some example string", GoogleAnalyticsAdminV1BetaKeyEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py) \| [GoogleAnalyticsAdminV1BetaKeyEventDict](google_analytics/models/google_analytics_admin_v1_beta_key_event.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py), [AnalyticsadminPropertiesKeyEventsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesKeyEventsCreateErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_key_events_delete(properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, AnalyticsadminPropertiesKeyEventsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Key Event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_key_events_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsDeleteErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_key_events_delete(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>key_events_id</code> | <code>str</code> | Resource name segment (keyEventsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;Any, [AnalyticsadminPropertiesKeyEventsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesKeyEventsDeleteErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_key_events_get(properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single Key Event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_key_events_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_key_events_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>key_events_id</code> | <code>str</code> | Resource name segment (keyEventsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py), [AnalyticsadminPropertiesKeyEventsGetErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesKeyEventsGetErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_key_events_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListKeyEventsResponse, AnalyticsadminPropertiesKeyEventsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_key_events_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListKeyEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_key_events_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListKeyEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListKeyEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_key_events_response.py), [AnalyticsadminPropertiesKeyEventsListErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListKeyEventsResponse](google_analytics/models/google_analytics_admin_v1_beta_list_key_events_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesKeyEventsListErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_key_events_patch(properties_id: str, key_events_id: str, body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Key Event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_key_events_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaKeyEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_key_events_patch(
    "some example string", "some example string", GoogleAnalyticsAdminV1BetaKeyEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaKeyEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesKeyEventsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>key_events_id</code> | <code>str</code> | Resource name segment (keyEventsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py) \| [GoogleAnalyticsAdminV1BetaKeyEventDict](google_analytics/models/google_analytics_admin_v1_beta_key_event.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py), [AnalyticsadminPropertiesKeyEventsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaKeyEvent](google_analytics/models/google_analytics_admin_v1_beta_key_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesKeyEventsPatchErrorBody](google_analytics/errors/analyticsadmin_properties_key_events_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_list(*, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, show_deleted: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaListPropertiesResponse, AnalyticsadminPropertiesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListPropertiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaListPropertiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: `` \| Filter \| Description \| \|-----------------------------\|-------------------------------------------\| \| parent:accounts/123 \| The account with account id: 123. \| \| parent:properties/123 \| The property with property id: 123. \| \| ancestor:accounts/123 \| The account with account id: 123. \| \| firebase_project:project-id \| The firebase project with id: project-id. \| \| firebase_project:123 \| The firebase project with number: 123. \| ``<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>show_deleted</code> | <code>bool \| None</code> | Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaListPropertiesResponse](google_analytics/models/google_analytics_admin_v1_beta_list_properties_response.py), [AnalyticsadminPropertiesListErrorBody](google_analytics/errors/analyticsadmin_properties_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaListPropertiesResponse](google_analytics/models/google_analytics_admin_v1_beta_list_properties_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesListErrorBody](google_analytics/errors/analyticsadmin_properties_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_patch(properties_id: str, body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_patch(
    "some example string", GoogleAnalyticsAdminV1BetaProperty()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesPatchErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_patch(
    "some example string", GoogleAnalyticsAdminV1BetaProperty()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaProperty
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py) \| [GoogleAnalyticsAdminV1BetaPropertyDict](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py), [AnalyticsadminPropertiesPatchErrorBody](google_analytics/errors/analyticsadmin_properties_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaProperty](google_analytics/models/google_analytics_admin_v1_beta_property.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesPatchErrorBody](google_analytics/errors/analyticsadmin_properties_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_run_access_report(properties_id: str, body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminPropertiesRunAccessReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_run_access_report(
    "some example string", GoogleAnalyticsAdminV1BetaRunAccessReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesRunAccessReportErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_run_access_report(
    "some example string", GoogleAnalyticsAdminV1BetaRunAccessReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesRunAccessReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaRunAccessReportRequest](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py) \| [GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py), [AnalyticsadminPropertiesRunAccessReportErrorBody](google_analytics/errors/analyticsadmin_properties_run_access_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesRunAccessReportErrorBody](google_analytics/errors/analyticsadmin_properties_run_access_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsadmin_properties_update_data_retention_settings(properties_id: str, body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the singleton data retention settings for this property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsadmin_properties_update_data_retention_settings(
    "some example string", GoogleAnalyticsAdminV1BetaDataRetentionSettings()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsadmin_properties_update_data_retention_settings(
    "some example string", GoogleAnalyticsAdminV1BetaDataRetentionSettings()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py) \| [GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[GoogleAnalyticsAdminV1BetaDataRetentionSettings](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py), [AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody](google_analytics/errors/analyticsadmin_properties_update_data_retention_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody](google_analytics/errors/analyticsadmin_properties_update_data_retention_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_audience_exports_create(properties_id: str, body: AudienceExport | AudienceExportDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OperationGoogleAnalyticsPropertiesApi, AnalyticsdataPropertiesAudienceExportsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the `QueryAudienceExport` method. See Creating an Audience Export for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_audience_exports_create(
    "some example string", AudienceExport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OperationGoogleAnalyticsPropertiesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsCreateErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_audience_exports_create(
    "some example string", AudienceExport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OperationGoogleAnalyticsPropertiesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[AudienceExport](google_analytics/models/audience_export.py) \| [AudienceExportDict](google_analytics/models/audience_export.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[OperationGoogleAnalyticsPropertiesApi](google_analytics/models/operation_google_analytics_properties_api.py), [AnalyticsdataPropertiesAudienceExportsCreateErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OperationGoogleAnalyticsPropertiesApi](google_analytics/models/operation_google_analytics_properties_api.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesAudienceExportsCreateErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_audience_exports_get(properties_id: str, audience_exports_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AudienceExport, AnalyticsdataPropertiesAudienceExportsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_audience_exports_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceExport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsGetErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_audience_exports_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceExport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>audience_exports_id</code> | <code>str</code> | Resource name segment (audienceExportsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[AudienceExport](google_analytics/models/audience_export.py), [AnalyticsdataPropertiesAudienceExportsGetErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AudienceExport](google_analytics/models/audience_export.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesAudienceExportsGetErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_audience_exports_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAudienceExportsResponse, AnalyticsdataPropertiesAudienceExportsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_audience_exports_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAudienceExportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsListErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_audience_exports_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAudienceExportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[ListAudienceExportsResponse](google_analytics/models/list_audience_exports_response.py), [AnalyticsdataPropertiesAudienceExportsListErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAudienceExportsResponse](google_analytics/models/list_audience_exports_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesAudienceExportsListErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_audience_exports_query(properties_id: str, audience_exports_id: str, body: QueryAudienceExportRequest | QueryAudienceExportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QueryAudienceExportResponse, AnalyticsdataPropertiesAudienceExportsQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See Creating an Audience Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_audience_exports_query(
    "some example string", "some example string", QueryAudienceExportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueryAudienceExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsQueryErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_audience_exports_query(
    "some example string", "some example string", QueryAudienceExportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueryAudienceExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesAudienceExportsQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>audience_exports_id</code> | <code>str</code> | Resource name segment (audienceExportsId). |
| <code>body</code> | <code>[QueryAudienceExportRequest](google_analytics/models/query_audience_export_request.py) \| [QueryAudienceExportRequestDict](google_analytics/models/query_audience_export_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[QueryAudienceExportResponse](google_analytics/models/query_audience_export_response.py), [AnalyticsdataPropertiesAudienceExportsQueryErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QueryAudienceExportResponse](google_analytics/models/query_audience_export_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesAudienceExportsQueryErrorBody](google_analytics/errors/analyticsdata_properties_audience_exports_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_batch_run_pivot_reports(properties_id: str, body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchRunPivotReportsResponse, AnalyticsdataPropertiesBatchRunPivotReportsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_batch_run_pivot_reports(
    "some example string", BatchRunPivotReportsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchRunPivotReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesBatchRunPivotReportsErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_batch_run_pivot_reports(
    "some example string", BatchRunPivotReportsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchRunPivotReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesBatchRunPivotReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[BatchRunPivotReportsRequest](google_analytics/models/batch_run_pivot_reports_request.py) \| [BatchRunPivotReportsRequestDict](google_analytics/models/batch_run_pivot_reports_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[BatchRunPivotReportsResponse](google_analytics/models/batch_run_pivot_reports_response.py), [AnalyticsdataPropertiesBatchRunPivotReportsErrorBody](google_analytics/errors/analyticsdata_properties_batch_run_pivot_reports_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchRunPivotReportsResponse](google_analytics/models/batch_run_pivot_reports_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesBatchRunPivotReportsErrorBody](google_analytics/errors/analyticsdata_properties_batch_run_pivot_reports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_batch_run_reports(properties_id: str, body: BatchRunReportsRequest | BatchRunReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchRunReportsResponse, AnalyticsdataPropertiesBatchRunReportsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_batch_run_reports(
    "some example string", BatchRunReportsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchRunReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesBatchRunReportsErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_batch_run_reports(
    "some example string", BatchRunReportsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchRunReportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesBatchRunReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[BatchRunReportsRequest](google_analytics/models/batch_run_reports_request.py) \| [BatchRunReportsRequestDict](google_analytics/models/batch_run_reports_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[BatchRunReportsResponse](google_analytics/models/batch_run_reports_response.py), [AnalyticsdataPropertiesBatchRunReportsErrorBody](google_analytics/errors/analyticsdata_properties_batch_run_reports_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchRunReportsResponse](google_analytics/models/batch_run_reports_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesBatchRunReportsErrorBody](google_analytics/errors/analyticsdata_properties_batch_run_reports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_check_compatibility(properties_id: str, body: CheckCompatibilityRequest | CheckCompatibilityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckCompatibilityResponse, AnalyticsdataPropertiesCheckCompatibilityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_check_compatibility(
    "some example string", CheckCompatibilityRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckCompatibilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesCheckCompatibilityErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_check_compatibility(
    "some example string", CheckCompatibilityRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckCompatibilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesCheckCompatibilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[CheckCompatibilityRequest](google_analytics/models/check_compatibility_request.py) \| [CheckCompatibilityRequestDict](google_analytics/models/check_compatibility_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[CheckCompatibilityResponse](google_analytics/models/check_compatibility_response.py), [AnalyticsdataPropertiesCheckCompatibilityErrorBody](google_analytics/errors/analyticsdata_properties_check_compatibility_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckCompatibilityResponse](google_analytics/models/check_compatibility_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesCheckCompatibilityErrorBody](google_analytics/errors/analyticsdata_properties_check_compatibility_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_get_metadata(properties_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Metadata, AnalyticsdataPropertiesGetMetadataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics property identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_get_metadata("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metadata
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesGetMetadataErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_get_metadata("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Metadata
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesGetMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[Metadata](google_analytics/models/metadata.py), [AnalyticsdataPropertiesGetMetadataErrorBody](google_analytics/errors/analyticsdata_properties_get_metadata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Metadata](google_analytics/models/metadata.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesGetMetadataErrorBody](google_analytics/errors/analyticsdata_properties_get_metadata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_run_pivot_report(properties_id: str, body: RunPivotReportRequest | RunPivotReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunPivotReportResponse, AnalyticsdataPropertiesRunPivotReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_run_pivot_report(
    "some example string", RunPivotReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunPivotReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunPivotReportErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_run_pivot_report(
    "some example string", RunPivotReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunPivotReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunPivotReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunPivotReportRequest](google_analytics/models/run_pivot_report_request.py) \| [RunPivotReportRequestDict](google_analytics/models/run_pivot_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[RunPivotReportResponse](google_analytics/models/run_pivot_report_response.py), [AnalyticsdataPropertiesRunPivotReportErrorBody](google_analytics/errors/analyticsdata_properties_run_pivot_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunPivotReportResponse](google_analytics/models/run_pivot_report_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesRunPivotReportErrorBody](google_analytics/errors/analyticsdata_properties_run_pivot_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_run_realtime_report(properties_id: str, body: RunRealtimeReportRequest | RunRealtimeReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunRealtimeReportResponse, AnalyticsdataPropertiesRunRealtimeReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime Report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_run_realtime_report(
    "some example string", RunRealtimeReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunRealtimeReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunRealtimeReportErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_run_realtime_report(
    "some example string", RunRealtimeReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunRealtimeReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunRealtimeReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunRealtimeReportRequest](google_analytics/models/run_realtime_report_request.py) \| [RunRealtimeReportRequestDict](google_analytics/models/run_realtime_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[RunRealtimeReportResponse](google_analytics/models/run_realtime_report_response.py), [AnalyticsdataPropertiesRunRealtimeReportErrorBody](google_analytics/errors/analyticsdata_properties_run_realtime_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunRealtimeReportResponse](google_analytics/models/run_realtime_report_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesRunRealtimeReportErrorBody](google_analytics/errors/analyticsdata_properties_run_realtime_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def analyticsdata_properties_run_report(properties_id: str, body: RunReportRequest | RunReportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunReportResponse, AnalyticsdataPropertiesRunReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.properties.with_raw_response.analyticsdata_properties_run_report(
    "some example string", RunReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunReportErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.analyticsdata_properties_run_report(
    "some example string", RunReportRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunReportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnalyticsdataPropertiesRunReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>properties_id</code> | <code>str</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunReportRequest](google_analytics/models/run_report_request.py) \| [RunReportRequestDict](google_analytics/models/run_report_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_analytics/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_analytics/core/results.py)&#91;[RunReportResponse](google_analytics/models/run_report_response.py), [AnalyticsdataPropertiesRunReportErrorBody](google_analytics/errors/analyticsdata_properties_run_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunReportResponse](google_analytics/models/run_report_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AnalyticsdataPropertiesRunReportErrorBody](google_analytics/errors/analyticsdata_properties_run_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_analytics/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_analytics/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

