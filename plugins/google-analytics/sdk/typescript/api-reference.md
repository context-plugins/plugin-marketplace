# Reference

> Source: [GoogleAnalyticsClient](src/client.ts)

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>analyticsadminAccountsDelete(request: Accounts.AnalyticsadminAccountsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Accounts.AnalyticsadminAccountsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsDelete({ accountsId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsDelete({ accountsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsDeleteError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Accounts.AnalyticsadminAccountsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsGet(request: Accounts.AnalyticsadminAccountsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsGet({ accountsId: "some example string" });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaAccount
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsGet({ accountsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaAccount](src/models/google-analytics-admin-v1-beta-account.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsGetError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaAccount](src/models/google-analytics-admin-v1-beta-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsGetDataSharingSettings(request: Accounts.AnalyticsadminAccountsGetDataSharingSettingsRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataSharingSettings, Accounts.AnalyticsadminAccountsGetDataSharingSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data sharing settings on an account. Data sharing settings are singletons.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsGetDataSharingSettings({
    accountsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataSharingSettings
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsGetDataSharingSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsGetDataSharingSettings({ accountsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataSharingSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsGetDataSharingSettings(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataSharingSettings](src/models/google-analytics-admin-v1-beta-data-sharing-settings.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsGetDataSharingSettingsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsGetDataSharingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataSharingSettings, Accounts.AnalyticsadminAccountsGetDataSharingSettingsError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataSharingSettings](src/models/google-analytics-admin-v1-beta-data-sharing-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsList(request?: Accounts.AnalyticsadminAccountsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListAccountsResponse, Accounts.AnalyticsadminAccountsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using `ListAccountSummaries`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsList();
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.analyticsadminAccountsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListAccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token. |
| <code>showDeleted?</code> | <code>boolean</code> | Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListAccountsResponse](src/models/google-analytics-admin-v1-beta-list-accounts-response.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsListError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListAccountsResponse, Accounts.AnalyticsadminAccountsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListAccountsResponse](src/models/google-analytics-admin-v1-beta-list-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsPatch(request: Accounts.AnalyticsadminAccountsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsPatch({
    accountsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaAccount
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsPatch({ accountsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaAccount](src/models/google-analytics-admin-v1-beta-account.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaAccount](src/models/google-analytics-admin-v1-beta-account.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsPatchError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaAccount](src/models/google-analytics-admin-v1-beta-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsProvisionAccountTicket(request: Accounts.AnalyticsadminAccountsProvisionAccountTicketRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, Accounts.AnalyticsadminAccountsProvisionAccountTicketError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a ticket for creating an account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsProvisionAccountTicket({ body: {} });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsProvisionAccountTicketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.analyticsadminAccountsProvisionAccountTicket({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest](src/models/google-analytics-admin-v1-beta-provision-account-ticket-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsProvisionAccountTicket(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse](src/models/google-analytics-admin-v1-beta-provision-account-ticket-response.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsProvisionAccountTicketError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsProvisionAccountTicket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, Accounts.AnalyticsadminAccountsProvisionAccountTicketError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse](src/models/google-analytics-admin-v1-beta-provision-account-ticket-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsRunAccessReport(request: Accounts.AnalyticsadminAccountsRunAccessReportRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Accounts.AnalyticsadminAccountsRunAccessReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsRunAccessReport({
    accountsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsRunAccessReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsRunAccessReport({ accountsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaRunAccessReportRequest](src/models/google-analytics-admin-v1-beta-run-access-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsRunAccessReport(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/models/google-analytics-admin-v1-beta-run-access-report-response.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsRunAccessReportError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsRunAccessReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Accounts.AnalyticsadminAccountsRunAccessReportError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/models/google-analytics-admin-v1-beta-run-access-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminAccountsSearchChangeHistoryEvents(request: Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse, Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.analyticsadminAccountsSearchChangeHistoryEvents({
    accountsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .analyticsadminAccountsSearchChangeHistoryEvents({ accountsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountsId</code> | <code>string</code> | Resource name segment (accountsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest](src/models/google-analytics-admin-v1-beta-search-change-history-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.analyticsadminAccountsSearchChangeHistoryEvents(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse](src/models/google-analytics-admin-v1-beta-search-change-history-events-response.ts)</code>
- **OnError**: throws <code>[Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.analyticsadminAccountsSearchChangeHistoryEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse, Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse](src/models/google-analytics-admin-v1-beta-search-change-history-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AccountSummaries

> Source: [AccountSummaries](src/resources/account-summaries.ts)

<details>
<summary><code>analyticsadminAccountSummariesList(request?: AccountSummaries.AnalyticsadminAccountSummariesListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AccountSummaries.AnalyticsadminAccountSummariesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summaries of all accounts accessible by the caller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountSummaries.analyticsadminAccountSummariesList();
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse
} catch (err) {
  // TODO: Handle 'err' of type AccountSummaries.AnalyticsadminAccountSummariesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountSummaries.analyticsadminAccountSummariesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountSummaries.analyticsadminAccountSummariesList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse](src/models/google-analytics-admin-v1-beta-list-account-summaries-response.ts)</code>
- **OnError**: throws <code>[AccountSummaries.AnalyticsadminAccountSummariesListError](src/resources/account-summaries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountSummaries.analyticsadminAccountSummariesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AccountSummaries.AnalyticsadminAccountSummariesListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse](src/models/google-analytics-admin-v1-beta-list-account-summaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](src/resources/properties.ts)

<details>
<summary><code>analyticsadminPropertiesAcknowledgeUserDataCollection(request: Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesAcknowledgeUserDataCollection({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesAcknowledgeUserDataCollection({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest](src/models/google-analytics-admin-v1-beta-acknowledge-user-data-collection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesAcknowledgeUserDataCollection(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesAcknowledgeUserDataCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesConversionEventsCreate(request: Properties.AnalyticsadminPropertiesConversionEventsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesConversionEventsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesConversionEventsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesConversionEventsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaConversionEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesConversionEventsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesConversionEventsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesConversionEventsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesConversionEventsDelete(request: Properties.AnalyticsadminPropertiesConversionEventsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesConversionEventsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesConversionEventsDelete({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesConversionEventsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesConversionEventsDelete({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>conversionEventsId</code> | <code>string</code> | Resource name segment (conversionEventsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesConversionEventsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesConversionEventsDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesConversionEventsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesConversionEventsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesConversionEventsGet(request: Properties.AnalyticsadminPropertiesConversionEventsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesConversionEventsGet({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesConversionEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesConversionEventsGet({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaConversionEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>conversionEventsId</code> | <code>string</code> | Resource name segment (conversionEventsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesConversionEventsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesConversionEventsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesConversionEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesConversionEventsList(request: Properties.AnalyticsadminPropertiesConversionEventsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListConversionEventsResponse, Properties.AnalyticsadminPropertiesConversionEventsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesConversionEventsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListConversionEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesConversionEventsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesConversionEventsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListConversionEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesConversionEventsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListConversionEventsResponse](src/models/google-analytics-admin-v1-beta-list-conversion-events-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesConversionEventsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesConversionEventsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListConversionEventsResponse, Properties.AnalyticsadminPropertiesConversionEventsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListConversionEventsResponse](src/models/google-analytics-admin-v1-beta-list-conversion-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesConversionEventsPatch(request: Properties.AnalyticsadminPropertiesConversionEventsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesConversionEventsPatch({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesConversionEventsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesConversionEventsPatch({
    propertiesId: "some example string",
    conversionEventsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaConversionEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>conversionEventsId</code> | <code>string</code> | Resource name segment (conversionEventsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesConversionEventsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesConversionEventsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesConversionEventsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/models/google-analytics-admin-v1-beta-conversion-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCreate(request: Properties.AnalyticsadminPropertiesCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Google Analytics property with the specified location and attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCreate({ body: {} });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.analyticsadminPropertiesCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomDimensionsArchive(request: Properties.AnalyticsadminPropertiesCustomDimensionsArchiveRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a CustomDimension on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomDimensionsArchive({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomDimensionsArchive({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customDimensionsId</code> | <code>string</code> | Resource name segment (customDimensionsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomDimensionsArchive(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomDimensionsArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomDimensionsCreate(request: Properties.AnalyticsadminPropertiesCustomDimensionsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomDimensionsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomDimensionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomDimensionsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomDimension
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomDimensionsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomDimensionsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomDimensionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomDimensionsGet(request: Properties.AnalyticsadminPropertiesCustomDimensionsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single CustomDimension.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomDimensionsGet({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomDimensionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomDimensionsGet({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomDimension
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customDimensionsId</code> | <code>string</code> | Resource name segment (customDimensionsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomDimensionsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomDimensionsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomDimensionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomDimensionsList(request: Properties.AnalyticsadminPropertiesCustomDimensionsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, Properties.AnalyticsadminPropertiesCustomDimensionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists CustomDimensions on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomDimensionsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomDimensionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomDimensionsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomDimensionsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse](src/models/google-analytics-admin-v1-beta-list-custom-dimensions-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomDimensionsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomDimensionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, Properties.AnalyticsadminPropertiesCustomDimensionsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse](src/models/google-analytics-admin-v1-beta-list-custom-dimensions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomDimensionsPatch(request: Properties.AnalyticsadminPropertiesCustomDimensionsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a CustomDimension on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomDimensionsPatch({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomDimensionsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomDimensionsPatch({
    propertiesId: "some example string",
    customDimensionsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomDimension
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customDimensionsId</code> | <code>string</code> | Resource name segment (customDimensionsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomDimensionsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomDimensionsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomDimensionsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/models/google-analytics-admin-v1-beta-custom-dimension.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomMetricsArchive(request: Properties.AnalyticsadminPropertiesCustomMetricsArchiveRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesCustomMetricsArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a CustomMetric on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomMetricsArchive({
    propertiesId: "some example string",
    customMetricsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomMetricsArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomMetricsArchive({
    propertiesId: "some example string",
    customMetricsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customMetricsId</code> | <code>string</code> | Resource name segment (customMetricsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomMetricsArchive(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomMetricsArchiveError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomMetricsArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesCustomMetricsArchiveError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomMetricsCreate(request: Properties.AnalyticsadminPropertiesCustomMetricsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a CustomMetric.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomMetricsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomMetricsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomMetricsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomMetricsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomMetricsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomMetricsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomMetricsGet(request: Properties.AnalyticsadminPropertiesCustomMetricsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single CustomMetric.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomMetricsGet({
    propertiesId: "some example string",
    customMetricsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomMetricsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomMetricsGet({
    propertiesId: "some example string",
    customMetricsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customMetricsId</code> | <code>string</code> | Resource name segment (customMetricsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomMetricsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomMetricsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomMetricsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomMetricsList(request: Properties.AnalyticsadminPropertiesCustomMetricsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, Properties.AnalyticsadminPropertiesCustomMetricsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists CustomMetrics on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomMetricsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomMetricsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomMetricsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| <code>pageToken?</code> | <code>string</code> | A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomMetricsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse](src/models/google-analytics-admin-v1-beta-list-custom-metrics-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomMetricsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomMetricsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, Properties.AnalyticsadminPropertiesCustomMetricsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse](src/models/google-analytics-admin-v1-beta-list-custom-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesCustomMetricsPatch(request: Properties.AnalyticsadminPropertiesCustomMetricsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a CustomMetric on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesCustomMetricsPatch({
    propertiesId: "some example string",
    customMetricsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesCustomMetricsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesCustomMetricsPatch({
    propertiesId: "some example string",
    customMetricsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaCustomMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>customMetricsId</code> | <code>string</code> | Resource name segment (customMetricsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesCustomMetricsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesCustomMetricsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesCustomMetricsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/models/google-analytics-admin-v1-beta-custom-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsCreate(request: Properties.AnalyticsadminPropertiesDataStreamsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DataStream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataStream
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsDelete(request: Properties.AnalyticsadminPropertiesDataStreamsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesDataStreamsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a DataStream on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsDelete({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsDelete({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesDataStreamsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsGet(request: Properties.AnalyticsadminPropertiesDataStreamsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single DataStream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsGet({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsGet({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataStream
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsList(request: Properties.AnalyticsadminPropertiesDataStreamsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListDataStreamsResponse, Properties.AnalyticsadminPropertiesDataStreamsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists DataStreams on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListDataStreamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListDataStreamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| <code>pageToken?</code> | <code>string</code> | A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListDataStreamsResponse](src/models/google-analytics-admin-v1-beta-list-data-streams-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListDataStreamsResponse, Properties.AnalyticsadminPropertiesDataStreamsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListDataStreamsResponse](src/models/google-analytics-admin-v1-beta-list-data-streams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a measurement protocol secret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate({
      propertiesId: "some example string",
      dataStreamsId: "some example string",
      body: {},
    });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes target MeasurementProtocolSecret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete({
      propertiesId: "some example string",
      dataStreamsId: "some example string",
      measurementProtocolSecretsId: "some example string",
    });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    measurementProtocolSecretsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>measurementProtocolSecretsId</code> | <code>string</code> | Resource name segment (measurementProtocolSecretsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single MeasurementProtocolSecret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    measurementProtocolSecretsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    measurementProtocolSecretsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>measurementProtocolSecretsId</code> | <code>string</code> | Resource name segment (measurementProtocolSecretsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns child MeasurementProtocolSecrets under the specified parent Property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum. |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse](src/models/google-analytics-admin-v1-beta-list-measurement-protocol-secrets-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse](src/models/google-analytics-admin-v1-beta-list-measurement-protocol-secrets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a measurement protocol secret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(
    {
      propertiesId: "some example string",
      dataStreamsId: "some example string",
      measurementProtocolSecretsId: "some example string",
      body: {},
    },
  );
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    measurementProtocolSecretsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>measurementProtocolSecretsId</code> | <code>string</code> | Resource name segment (measurementProtocolSecretsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Omitted fields will not be updated. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDataStreamsPatch(request: Properties.AnalyticsadminPropertiesDataStreamsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a DataStream on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDataStreamsPatch({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDataStreamsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDataStreamsPatch({
    propertiesId: "some example string",
    dataStreamsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataStream
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>dataStreamsId</code> | <code>string</code> | Resource name segment (dataStreamsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDataStreamsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDataStreamsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDataStreamsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataStream](src/models/google-analytics-admin-v1-beta-data-stream.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesDelete(request: Properties.AnalyticsadminPropertiesDeleteRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesDelete({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesDelete({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesDelete(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesDeleteError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesFirebaseLinksCreate(request: Properties.AnalyticsadminPropertiesFirebaseLinksCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaFirebaseLink, Properties.AnalyticsadminPropertiesFirebaseLinksCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesFirebaseLinksCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaFirebaseLink
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesFirebaseLinksCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesFirebaseLinksCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaFirebaseLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](src/models/google-analytics-admin-v1-beta-firebase-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesFirebaseLinksCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](src/models/google-analytics-admin-v1-beta-firebase-link.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesFirebaseLinksCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesFirebaseLinksCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaFirebaseLink, Properties.AnalyticsadminPropertiesFirebaseLinksCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](src/models/google-analytics-admin-v1-beta-firebase-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesFirebaseLinksDelete(request: Properties.AnalyticsadminPropertiesFirebaseLinksDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a FirebaseLink on a property

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesFirebaseLinksDelete({
    propertiesId: "some example string",
    firebaseLinksId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesFirebaseLinksDelete({
    propertiesId: "some example string",
    firebaseLinksId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>firebaseLinksId</code> | <code>string</code> | Resource name segment (firebaseLinksId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesFirebaseLinksDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesFirebaseLinksDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesFirebaseLinksList(request: Properties.AnalyticsadminPropertiesFirebaseLinksListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, Properties.AnalyticsadminPropertiesFirebaseLinksListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesFirebaseLinksList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesFirebaseLinksListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesFirebaseLinksList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesFirebaseLinksList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse](src/models/google-analytics-admin-v1-beta-list-firebase-links-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesFirebaseLinksListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesFirebaseLinksList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, Properties.AnalyticsadminPropertiesFirebaseLinksListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse](src/models/google-analytics-admin-v1-beta-list-firebase-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGet(request: Properties.AnalyticsadminPropertiesGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup for a single GA Property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGet({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGet({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGetDataRetentionSettings(request: Properties.AnalyticsadminPropertiesGetDataRetentionSettingsRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the singleton data retention settings for this property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGetDataRetentionSettings({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGetDataRetentionSettings({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGetDataRetentionSettings(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/models/google-analytics-admin-v1-beta-data-retention-settings.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGetDataRetentionSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/models/google-analytics-admin-v1-beta-data-retention-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGoogleAdsLinksCreate(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GoogleAdsLink.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGoogleAdsLinksCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGoogleAdsLinksCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGoogleAdsLinksDelete(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GoogleAdsLink on a property

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGoogleAdsLinksDelete({
    propertiesId: "some example string",
    googleAdsLinksId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGoogleAdsLinksDelete({
    propertiesId: "some example string",
    googleAdsLinksId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>googleAdsLinksId</code> | <code>string</code> | Resource name segment (googleAdsLinksId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGoogleAdsLinksList(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, Properties.AnalyticsadminPropertiesGoogleAdsLinksListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists GoogleAdsLinks on a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGoogleAdsLinksList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGoogleAdsLinksListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGoogleAdsLinksList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse](src/models/google-analytics-admin-v1-beta-list-google-ads-links-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGoogleAdsLinksListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, Properties.AnalyticsadminPropertiesGoogleAdsLinksListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse](src/models/google-analytics-admin-v1-beta-list-google-ads-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesGoogleAdsLinksPatch(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GoogleAdsLink on a property

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesGoogleAdsLinksPatch({
    propertiesId: "some example string",
    googleAdsLinksId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesGoogleAdsLinksPatch({
    propertiesId: "some example string",
    googleAdsLinksId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>googleAdsLinksId</code> | <code>string</code> | Resource name segment (googleAdsLinksId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesGoogleAdsLinksPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/models/google-analytics-admin-v1-beta-google-ads-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesKeyEventsCreate(request: Properties.AnalyticsadminPropertiesKeyEventsCreateRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Key Event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesKeyEventsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesKeyEventsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesKeyEventsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaKeyEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesKeyEventsCreate(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesKeyEventsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesKeyEventsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsCreateError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesKeyEventsDelete(request: Properties.AnalyticsadminPropertiesKeyEventsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesKeyEventsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Key Event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesKeyEventsDelete({
    propertiesId: "some example string",
    keyEventsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesKeyEventsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesKeyEventsDelete({
    propertiesId: "some example string",
    keyEventsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>keyEventsId</code> | <code>string</code> | Resource name segment (keyEventsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesKeyEventsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesKeyEventsDeleteError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesKeyEventsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Properties.AnalyticsadminPropertiesKeyEventsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesKeyEventsGet(request: Properties.AnalyticsadminPropertiesKeyEventsGetRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single Key Event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesKeyEventsGet({
    propertiesId: "some example string",
    keyEventsId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesKeyEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesKeyEventsGet({
    propertiesId: "some example string",
    keyEventsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaKeyEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>keyEventsId</code> | <code>string</code> | Resource name segment (keyEventsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesKeyEventsGet(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesKeyEventsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesKeyEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsGetError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesKeyEventsList(request: Properties.AnalyticsadminPropertiesKeyEventsListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListKeyEventsResponse, Properties.AnalyticsadminPropertiesKeyEventsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesKeyEventsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListKeyEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesKeyEventsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesKeyEventsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListKeyEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesKeyEventsList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListKeyEventsResponse](src/models/google-analytics-admin-v1-beta-list-key-events-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesKeyEventsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesKeyEventsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListKeyEventsResponse, Properties.AnalyticsadminPropertiesKeyEventsListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListKeyEventsResponse](src/models/google-analytics-admin-v1-beta-list-key-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesKeyEventsPatch(request: Properties.AnalyticsadminPropertiesKeyEventsPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Key Event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesKeyEventsPatch({
    propertiesId: "some example string",
    keyEventsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesKeyEventsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesKeyEventsPatch({
    propertiesId: "some example string",
    keyEventsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaKeyEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>keyEventsId</code> | <code>string</code> | Resource name segment (keyEventsId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesKeyEventsPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesKeyEventsPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesKeyEventsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/models/google-analytics-admin-v1-beta-key-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesList(request?: Properties.AnalyticsadminPropertiesListRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaListPropertiesResponse, Properties.AnalyticsadminPropertiesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesList();
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListPropertiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.analyticsadminPropertiesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaListPropertiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` \| Filter \| Description \| \|-----------------------------\|-------------------------------------------\| \| parent:accounts/123 \| The account with account id: 123. \| \| parent:properties/123 \| The property with property id: 123. \| \| ancestor:accounts/123 \| The account with account id: 123. \| \| firebase_project:project-id \| The firebase project with id: project-id. \| \| firebase_project:123 \| The firebase project with number: 123. \| ``` |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token. |
| <code>showDeleted?</code> | <code>boolean</code> | Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesList(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListPropertiesResponse](src/models/google-analytics-admin-v1-beta-list-properties-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaListPropertiesResponse, Properties.AnalyticsadminPropertiesListError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaListPropertiesResponse](src/models/google-analytics-admin-v1-beta-list-properties-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesPatch(request: Properties.AnalyticsadminPropertiesPatchRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesPatch({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesPatch({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesPatch(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesPatchError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesPatchError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaProperty](src/models/google-analytics-admin-v1-beta-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesRunAccessReport(request: Properties.AnalyticsadminPropertiesRunAccessReportRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Properties.AnalyticsadminPropertiesRunAccessReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesRunAccessReport({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesRunAccessReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesRunAccessReport({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaRunAccessReportRequest](src/models/google-analytics-admin-v1-beta-run-access-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesRunAccessReport(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/models/google-analytics-admin-v1-beta-run-access-report-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesRunAccessReportError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesRunAccessReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Properties.AnalyticsadminPropertiesRunAccessReportError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/models/google-analytics-admin-v1-beta-run-access-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsadminPropertiesUpdateDataRetentionSettings(request: Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest, options?: RequestOptions): ApiPromise&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the singleton data retention settings for this property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsadminPropertiesUpdateDataRetentionSettings({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsadminPropertiesUpdateDataRetentionSettings({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>updateMask?</code> | <code>string</code> | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| <code>body</code> | <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/models/google-analytics-admin-v1-beta-data-retention-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsadminPropertiesUpdateDataRetentionSettings(request)`

- **OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/models/google-analytics-admin-v1-beta-data-retention-settings.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsadminPropertiesUpdateDataRetentionSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError&gt;</code>, with `result.value` of type <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/models/google-analytics-admin-v1-beta-data-retention-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesAudienceExportsCreate(request: Properties.AnalyticsdataPropertiesAudienceExportsCreateRequest, options?: RequestOptions): ApiPromise&lt;OperationGoogleAnalyticsPropertiesApi, Properties.AnalyticsdataPropertiesAudienceExportsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the `QueryAudienceExport` method. See Creating an Audience Export for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesAudienceExportsCreate({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type OperationGoogleAnalyticsPropertiesApi
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesAudienceExportsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesAudienceExportsCreate({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OperationGoogleAnalyticsPropertiesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[AudienceExport](src/models/audience-export.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesAudienceExportsCreate(request)`

- **OnSuccess**: <code>[OperationGoogleAnalyticsPropertiesApi](src/models/operation-google-analytics-properties-api.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesAudienceExportsCreateError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesAudienceExportsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OperationGoogleAnalyticsPropertiesApi, Properties.AnalyticsdataPropertiesAudienceExportsCreateError&gt;</code>, with `result.value` of type <code>[OperationGoogleAnalyticsPropertiesApi](src/models/operation-google-analytics-properties-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesAudienceExportsGet(request: Properties.AnalyticsdataPropertiesAudienceExportsGetRequest, options?: RequestOptions): ApiPromise&lt;AudienceExport, Properties.AnalyticsdataPropertiesAudienceExportsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesAudienceExportsGet({
    propertiesId: "some example string",
    audienceExportsId: "some example string",
  });
  // TODO: Handle 'response' of type AudienceExport
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesAudienceExportsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesAudienceExportsGet({
    propertiesId: "some example string",
    audienceExportsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudienceExport
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>audienceExportsId</code> | <code>string</code> | Resource name segment (audienceExportsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesAudienceExportsGet(request)`

- **OnSuccess**: <code>[AudienceExport](src/models/audience-export.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesAudienceExportsGetError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesAudienceExportsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudienceExport, Properties.AnalyticsdataPropertiesAudienceExportsGetError&gt;</code>, with `result.value` of type <code>[AudienceExport](src/models/audience-export.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesAudienceExportsList(request: Properties.AnalyticsdataPropertiesAudienceExportsListRequest, options?: RequestOptions): ApiPromise&lt;ListAudienceExportsResponse, Properties.AnalyticsdataPropertiesAudienceExportsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesAudienceExportsList({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type ListAudienceExportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesAudienceExportsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesAudienceExportsList({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAudienceExportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum). |
| <code>pageToken?</code> | <code>string</code> | Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesAudienceExportsList(request)`

- **OnSuccess**: <code>[ListAudienceExportsResponse](src/models/list-audience-exports-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesAudienceExportsListError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesAudienceExportsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAudienceExportsResponse, Properties.AnalyticsdataPropertiesAudienceExportsListError&gt;</code>, with `result.value` of type <code>[ListAudienceExportsResponse](src/models/list-audience-exports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesAudienceExportsQuery(request: Properties.AnalyticsdataPropertiesAudienceExportsQueryRequest, options?: RequestOptions): ApiPromise&lt;QueryAudienceExportResponse, Properties.AnalyticsdataPropertiesAudienceExportsQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See Creating an Audience Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesAudienceExportsQuery({
    propertiesId: "some example string",
    audienceExportsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type QueryAudienceExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesAudienceExportsQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesAudienceExportsQuery({
    propertiesId: "some example string",
    audienceExportsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueryAudienceExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>audienceExportsId</code> | <code>string</code> | Resource name segment (audienceExportsId). |
| <code>body</code> | <code>[QueryAudienceExportRequest](src/models/query-audience-export-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesAudienceExportsQuery(request)`

- **OnSuccess**: <code>[QueryAudienceExportResponse](src/models/query-audience-export-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesAudienceExportsQueryError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesAudienceExportsQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueryAudienceExportResponse, Properties.AnalyticsdataPropertiesAudienceExportsQueryError&gt;</code>, with `result.value` of type <code>[QueryAudienceExportResponse](src/models/query-audience-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesBatchRunPivotReports(request: Properties.AnalyticsdataPropertiesBatchRunPivotReportsRequest, options?: RequestOptions): ApiPromise&lt;BatchRunPivotReportsResponse, Properties.AnalyticsdataPropertiesBatchRunPivotReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesBatchRunPivotReports({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type BatchRunPivotReportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesBatchRunPivotReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesBatchRunPivotReports({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRunPivotReportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[BatchRunPivotReportsRequest](src/models/batch-run-pivot-reports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesBatchRunPivotReports(request)`

- **OnSuccess**: <code>[BatchRunPivotReportsResponse](src/models/batch-run-pivot-reports-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesBatchRunPivotReportsError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesBatchRunPivotReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRunPivotReportsResponse, Properties.AnalyticsdataPropertiesBatchRunPivotReportsError&gt;</code>, with `result.value` of type <code>[BatchRunPivotReportsResponse](src/models/batch-run-pivot-reports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesBatchRunReports(request: Properties.AnalyticsdataPropertiesBatchRunReportsRequest, options?: RequestOptions): ApiPromise&lt;BatchRunReportsResponse, Properties.AnalyticsdataPropertiesBatchRunReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesBatchRunReports({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type BatchRunReportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesBatchRunReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesBatchRunReports({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRunReportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[BatchRunReportsRequest](src/models/batch-run-reports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesBatchRunReports(request)`

- **OnSuccess**: <code>[BatchRunReportsResponse](src/models/batch-run-reports-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesBatchRunReportsError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesBatchRunReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRunReportsResponse, Properties.AnalyticsdataPropertiesBatchRunReportsError&gt;</code>, with `result.value` of type <code>[BatchRunReportsResponse](src/models/batch-run-reports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesCheckCompatibility(request: Properties.AnalyticsdataPropertiesCheckCompatibilityRequest, options?: RequestOptions): ApiPromise&lt;CheckCompatibilityResponse, Properties.AnalyticsdataPropertiesCheckCompatibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesCheckCompatibility({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CheckCompatibilityResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesCheckCompatibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesCheckCompatibility({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckCompatibilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[CheckCompatibilityRequest](src/models/check-compatibility-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesCheckCompatibility(request)`

- **OnSuccess**: <code>[CheckCompatibilityResponse](src/models/check-compatibility-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesCheckCompatibilityError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesCheckCompatibility(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckCompatibilityResponse, Properties.AnalyticsdataPropertiesCheckCompatibilityError&gt;</code>, with `result.value` of type <code>[CheckCompatibilityResponse](src/models/check-compatibility-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesGetMetadata(request: Properties.AnalyticsdataPropertiesGetMetadataRequest, options?: RequestOptions): ApiPromise&lt;Metadata, Properties.AnalyticsdataPropertiesGetMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics property identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesGetMetadata({
    propertiesId: "some example string",
  });
  // TODO: Handle 'response' of type Metadata
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesGetMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesGetMetadata({ propertiesId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Metadata
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesGetMetadata(request)`

- **OnSuccess**: <code>[Metadata](src/models/metadata.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesGetMetadataError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesGetMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Metadata, Properties.AnalyticsdataPropertiesGetMetadataError&gt;</code>, with `result.value` of type <code>[Metadata](src/models/metadata.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesRunPivotReport(request: Properties.AnalyticsdataPropertiesRunPivotReportRequest, options?: RequestOptions): ApiPromise&lt;RunPivotReportResponse, Properties.AnalyticsdataPropertiesRunPivotReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesRunPivotReport({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RunPivotReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesRunPivotReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesRunPivotReport({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunPivotReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunPivotReportRequest](src/models/run-pivot-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesRunPivotReport(request)`

- **OnSuccess**: <code>[RunPivotReportResponse](src/models/run-pivot-report-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesRunPivotReportError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesRunPivotReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunPivotReportResponse, Properties.AnalyticsdataPropertiesRunPivotReportError&gt;</code>, with `result.value` of type <code>[RunPivotReportResponse](src/models/run-pivot-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesRunRealtimeReport(request: Properties.AnalyticsdataPropertiesRunRealtimeReportRequest, options?: RequestOptions): ApiPromise&lt;RunRealtimeReportResponse, Properties.AnalyticsdataPropertiesRunRealtimeReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime Report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesRunRealtimeReport({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RunRealtimeReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesRunRealtimeReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesRunRealtimeReport({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunRealtimeReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunRealtimeReportRequest](src/models/run-realtime-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesRunRealtimeReport(request)`

- **OnSuccess**: <code>[RunRealtimeReportResponse](src/models/run-realtime-report-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesRunRealtimeReportError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesRunRealtimeReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunRealtimeReportResponse, Properties.AnalyticsdataPropertiesRunRealtimeReportError&gt;</code>, with `result.value` of type <code>[RunRealtimeReportResponse](src/models/run-realtime-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsdataPropertiesRunReport(request: Properties.AnalyticsdataPropertiesRunReportRequest, options?: RequestOptions): ApiPromise&lt;RunReportResponse, Properties.AnalyticsdataPropertiesRunReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.analyticsdataPropertiesRunReport({
    propertiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RunReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Properties.AnalyticsdataPropertiesRunReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties
  .analyticsdataPropertiesRunReport({ propertiesId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>propertiesId</code> | <code>string</code> | Resource name segment (propertiesId). |
| <code>body</code> | <code>[RunReportRequest](src/models/run-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.analyticsdataPropertiesRunReport(request)`

- **OnSuccess**: <code>[RunReportResponse](src/models/run-report-response.ts)</code>
- **OnError**: throws <code>[Properties.AnalyticsdataPropertiesRunReportError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.analyticsdataPropertiesRunReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunReportResponse, Properties.AnalyticsdataPropertiesRunReportError&gt;</code>, with `result.value` of type <code>[RunReportResponse](src/models/run-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleAnalyticsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

