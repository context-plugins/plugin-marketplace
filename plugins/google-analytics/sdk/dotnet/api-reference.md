# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleAnalyticsClient](src/GoogleAnalytics/GoogleAnalyticsClient.cs)

## AccountSummaries

> Source: [AccountSummaries](src/GoogleAnalytics/Api/AccountSummaries.cs)

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListAccountSummariesResponse&gt; AnalyticsadminAccountSummariesList(AnalyticsadminAccountSummariesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AccountSummaries.AnalyticsadminAccountSummariesList(
        new AnalyticsadminAccountSummariesListRequest());
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse
}
catch (ApiException<AnalyticsadminAccountSummariesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountSummariesListRequest](src/GoogleAnalytics/Requests/AccountSummaries/AnalyticsadminAccountSummariesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListAccountSummariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountSummariesListError](src/GoogleAnalytics/Errors/AnalyticsadminAccountSummariesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/GoogleAnalytics/Api/Accounts.cs)

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminAccountsDelete(AnalyticsadminAccountsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsDelete(new AnalyticsadminAccountsDeleteRequest
    {
        AccountsId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminAccountsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsDeleteRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaAccount&gt; AnalyticsadminAccountsGet(AnalyticsadminAccountsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsGet(new AnalyticsadminAccountsGetRequest
    {
        AccountsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaAccount
}
catch (ApiException<AnalyticsadminAccountsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsGetRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaAccount](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaAccount.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsGetError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataSharingSettings&gt; AnalyticsadminAccountsGetDataSharingSettings(AnalyticsadminAccountsGetDataSharingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsGetDataSharingSettings(
        new AnalyticsadminAccountsGetDataSharingSettingsRequest { AccountsId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataSharingSettings
}
catch (ApiException<AnalyticsadminAccountsGetDataSharingSettingsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsGetDataSharingSettingsRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsGetDataSharingSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataSharingSettings](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataSharingSettings.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsGetDataSharingSettingsError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsGetDataSharingSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListAccountsResponse&gt; AnalyticsadminAccountsList(AnalyticsadminAccountsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsList(new AnalyticsadminAccountsListRequest());
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListAccountsResponse
}
catch (ApiException<AnalyticsadminAccountsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsListRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListAccountsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsListError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaAccount&gt; AnalyticsadminAccountsPatch(AnalyticsadminAccountsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsPatch(new AnalyticsadminAccountsPatchRequest
    {
        AccountsId = "some example string",
        Body = new GoogleAnalyticsAdminV1BetaAccount(),
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaAccount
}
catch (ApiException<AnalyticsadminAccountsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsPatchRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaAccount](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaAccount.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse&gt; AnalyticsadminAccountsProvisionAccountTicket(AnalyticsadminAccountsProvisionAccountTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsProvisionAccountTicket(
        new AnalyticsadminAccountsProvisionAccountTicketRequest
        {
            Body = new GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
}
catch (ApiException<AnalyticsadminAccountsProvisionAccountTicketError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsProvisionAccountTicketRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsProvisionAccountTicketRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsProvisionAccountTicketError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsProvisionAccountTicketError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse&gt; AnalyticsadminAccountsRunAccessReport(AnalyticsadminAccountsRunAccessReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsRunAccessReport(
        new AnalyticsadminAccountsRunAccessReportRequest
        {
            AccountsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaRunAccessReportRequest(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
}
catch (ApiException<AnalyticsadminAccountsRunAccessReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsRunAccessReportRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsRunAccessReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsRunAccessReportError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsRunAccessReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse&gt; AnalyticsadminAccountsSearchChangeHistoryEvents(AnalyticsadminAccountsSearchChangeHistoryEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.AnalyticsadminAccountsSearchChangeHistoryEvents(
        new AnalyticsadminAccountsSearchChangeHistoryEventsRequest
        {
            AccountsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse
}
catch (ApiException<AnalyticsadminAccountsSearchChangeHistoryEventsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminAccountsSearchChangeHistoryEventsRequest](src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsSearchChangeHistoryEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminAccountsSearchChangeHistoryEventsError](src/GoogleAnalytics/Errors/AnalyticsadminAccountsSearchChangeHistoryEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](src/GoogleAnalytics/Api/Properties.cs)

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesAcknowledgeUserDataCollection(AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollection(
        new AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesAcknowledgeUserDataCollectionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesAcknowledgeUserDataCollectionError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesAcknowledgeUserDataCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaConversionEvent&gt; AnalyticsadminPropertiesConversionEventsCreate(AnalyticsadminPropertiesConversionEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesConversionEventsCreate(
        new AnalyticsadminPropertiesConversionEventsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaConversionEvent(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
}
catch (ApiException<AnalyticsadminPropertiesConversionEventsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesConversionEventsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesConversionEventsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesConversionEventsDelete(AnalyticsadminPropertiesConversionEventsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesConversionEventsDelete(
        new AnalyticsadminPropertiesConversionEventsDeleteRequest
        {
            PropertiesId = "some example string",
            ConversionEventsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesConversionEventsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesConversionEventsDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesConversionEventsDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaConversionEvent&gt; AnalyticsadminPropertiesConversionEventsGet(AnalyticsadminPropertiesConversionEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesConversionEventsGet(
        new AnalyticsadminPropertiesConversionEventsGetRequest
        {
            PropertiesId = "some example string",
            ConversionEventsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
}
catch (ApiException<AnalyticsadminPropertiesConversionEventsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesConversionEventsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesConversionEventsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListConversionEventsResponse&gt; AnalyticsadminPropertiesConversionEventsList(AnalyticsadminPropertiesConversionEventsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesConversionEventsList(
        new AnalyticsadminPropertiesConversionEventsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListConversionEventsResponse
}
catch (ApiException<AnalyticsadminPropertiesConversionEventsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesConversionEventsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListConversionEventsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListConversionEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesConversionEventsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaConversionEvent&gt; AnalyticsadminPropertiesConversionEventsPatch(AnalyticsadminPropertiesConversionEventsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesConversionEventsPatch(
        new AnalyticsadminPropertiesConversionEventsPatchRequest
        {
            PropertiesId = "some example string",
            ConversionEventsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaConversionEvent(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaConversionEvent
}
catch (ApiException<AnalyticsadminPropertiesConversionEventsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesConversionEventsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaConversionEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesConversionEventsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaProperty&gt; AnalyticsadminPropertiesCreate(AnalyticsadminPropertiesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCreate(new AnalyticsadminPropertiesCreateRequest
    {
        Body = new GoogleAnalyticsAdminV1BetaProperty(),
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
}
catch (ApiException<AnalyticsadminPropertiesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesCustomDimensionsArchive(AnalyticsadminPropertiesCustomDimensionsArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomDimensionsArchive(
        new AnalyticsadminPropertiesCustomDimensionsArchiveRequest
        {
            PropertiesId = "some example string",
            CustomDimensionsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesCustomDimensionsArchiveError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomDimensionsArchiveRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomDimensionsArchiveError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsArchiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomDimension&gt; AnalyticsadminPropertiesCustomDimensionsCreate(AnalyticsadminPropertiesCustomDimensionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomDimensionsCreate(
        new AnalyticsadminPropertiesCustomDimensionsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaCustomDimension(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
}
catch (ApiException<AnalyticsadminPropertiesCustomDimensionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomDimensionsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomDimensionsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomDimension&gt; AnalyticsadminPropertiesCustomDimensionsGet(AnalyticsadminPropertiesCustomDimensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomDimensionsGet(
        new AnalyticsadminPropertiesCustomDimensionsGetRequest
        {
            PropertiesId = "some example string",
            CustomDimensionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
}
catch (ApiException<AnalyticsadminPropertiesCustomDimensionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomDimensionsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomDimensionsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse&gt; AnalyticsadminPropertiesCustomDimensionsList(AnalyticsadminPropertiesCustomDimensionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomDimensionsList(
        new AnalyticsadminPropertiesCustomDimensionsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse
}
catch (ApiException<AnalyticsadminPropertiesCustomDimensionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomDimensionsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomDimensionsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomDimension&gt; AnalyticsadminPropertiesCustomDimensionsPatch(AnalyticsadminPropertiesCustomDimensionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomDimensionsPatch(
        new AnalyticsadminPropertiesCustomDimensionsPatchRequest
        {
            PropertiesId = "some example string",
            CustomDimensionsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaCustomDimension(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomDimension
}
catch (ApiException<AnalyticsadminPropertiesCustomDimensionsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomDimensionsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomDimension](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomDimensionsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesCustomMetricsArchive(AnalyticsadminPropertiesCustomMetricsArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomMetricsArchive(
        new AnalyticsadminPropertiesCustomMetricsArchiveRequest
        {
            PropertiesId = "some example string",
            CustomMetricsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesCustomMetricsArchiveError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomMetricsArchiveRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomMetricsArchiveError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsArchiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomMetric&gt; AnalyticsadminPropertiesCustomMetricsCreate(AnalyticsadminPropertiesCustomMetricsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomMetricsCreate(
        new AnalyticsadminPropertiesCustomMetricsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaCustomMetric(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
}
catch (ApiException<AnalyticsadminPropertiesCustomMetricsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomMetricsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomMetricsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomMetric&gt; AnalyticsadminPropertiesCustomMetricsGet(AnalyticsadminPropertiesCustomMetricsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomMetricsGet(
        new AnalyticsadminPropertiesCustomMetricsGetRequest
        {
            PropertiesId = "some example string",
            CustomMetricsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
}
catch (ApiException<AnalyticsadminPropertiesCustomMetricsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomMetricsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomMetricsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListCustomMetricsResponse&gt; AnalyticsadminPropertiesCustomMetricsList(AnalyticsadminPropertiesCustomMetricsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomMetricsList(
        new AnalyticsadminPropertiesCustomMetricsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
}
catch (ApiException<AnalyticsadminPropertiesCustomMetricsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomMetricsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListCustomMetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomMetricsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaCustomMetric&gt; AnalyticsadminPropertiesCustomMetricsPatch(AnalyticsadminPropertiesCustomMetricsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesCustomMetricsPatch(
        new AnalyticsadminPropertiesCustomMetricsPatchRequest
        {
            PropertiesId = "some example string",
            CustomMetricsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaCustomMetric(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaCustomMetric
}
catch (ApiException<AnalyticsadminPropertiesCustomMetricsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesCustomMetricsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaCustomMetric](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesCustomMetricsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataStream&gt; AnalyticsadminPropertiesDataStreamsCreate(AnalyticsadminPropertiesDataStreamsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsCreate(
        new AnalyticsadminPropertiesDataStreamsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaDataStream(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesDataStreamsDelete(AnalyticsadminPropertiesDataStreamsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsDelete(
        new AnalyticsadminPropertiesDataStreamsDeleteRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataStream&gt; AnalyticsadminPropertiesDataStreamsGet(AnalyticsadminPropertiesDataStreamsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsGet(
        new AnalyticsadminPropertiesDataStreamsGetRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListDataStreamsResponse&gt; AnalyticsadminPropertiesDataStreamsList(AnalyticsadminPropertiesDataStreamsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsList(
        new AnalyticsadminPropertiesDataStreamsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListDataStreamsResponse
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListDataStreamsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListDataStreamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret&gt; AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(
        new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(
        new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
            MeasurementProtocolSecretsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret&gt; AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(
        new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
            MeasurementProtocolSecretsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse&gt; AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(
        new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret&gt; AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(
        new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
            MeasurementProtocolSecretsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataStream&gt; AnalyticsadminPropertiesDataStreamsPatch(AnalyticsadminPropertiesDataStreamsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDataStreamsPatch(
        new AnalyticsadminPropertiesDataStreamsPatchRequest
        {
            PropertiesId = "some example string",
            DataStreamsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaDataStream(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataStream
}
catch (ApiException<AnalyticsadminPropertiesDataStreamsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDataStreamsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataStream](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDataStreamsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaProperty&gt; AnalyticsadminPropertiesDelete(AnalyticsadminPropertiesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesDelete(new AnalyticsadminPropertiesDeleteRequest
    {
        PropertiesId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
}
catch (ApiException<AnalyticsadminPropertiesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaFirebaseLink&gt; AnalyticsadminPropertiesFirebaseLinksCreate(AnalyticsadminPropertiesFirebaseLinksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesFirebaseLinksCreate(
        new AnalyticsadminPropertiesFirebaseLinksCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaFirebaseLink(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaFirebaseLink
}
catch (ApiException<AnalyticsadminPropertiesFirebaseLinksCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesFirebaseLinksCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaFirebaseLink](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaFirebaseLink.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesFirebaseLinksCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesFirebaseLinksDelete(AnalyticsadminPropertiesFirebaseLinksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesFirebaseLinksDelete(
        new AnalyticsadminPropertiesFirebaseLinksDeleteRequest
        {
            PropertiesId = "some example string",
            FirebaseLinksId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesFirebaseLinksDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesFirebaseLinksDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesFirebaseLinksDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse&gt; AnalyticsadminPropertiesFirebaseLinksList(AnalyticsadminPropertiesFirebaseLinksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesFirebaseLinksList(
        new AnalyticsadminPropertiesFirebaseLinksListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse
}
catch (ApiException<AnalyticsadminPropertiesFirebaseLinksListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesFirebaseLinksListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesFirebaseLinksListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaProperty&gt; AnalyticsadminPropertiesGet(AnalyticsadminPropertiesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGet(new AnalyticsadminPropertiesGetRequest
    {
        PropertiesId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
}
catch (ApiException<AnalyticsadminPropertiesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings&gt; AnalyticsadminPropertiesGetDataRetentionSettings(AnalyticsadminPropertiesGetDataRetentionSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGetDataRetentionSettings(
        new AnalyticsadminPropertiesGetDataRetentionSettingsRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
}
catch (ApiException<AnalyticsadminPropertiesGetDataRetentionSettingsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGetDataRetentionSettingsRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGetDataRetentionSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataRetentionSettings.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGetDataRetentionSettingsError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGetDataRetentionSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink&gt; AnalyticsadminPropertiesGoogleAdsLinksCreate(AnalyticsadminPropertiesGoogleAdsLinksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGoogleAdsLinksCreate(
        new AnalyticsadminPropertiesGoogleAdsLinksCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaGoogleAdsLink(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
}
catch (ApiException<AnalyticsadminPropertiesGoogleAdsLinksCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGoogleAdsLinksCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaGoogleAdsLink.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGoogleAdsLinksCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesGoogleAdsLinksDelete(AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGoogleAdsLinksDelete(
        new AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest
        {
            PropertiesId = "some example string",
            GoogleAdsLinksId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesGoogleAdsLinksDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGoogleAdsLinksDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse&gt; AnalyticsadminPropertiesGoogleAdsLinksList(AnalyticsadminPropertiesGoogleAdsLinksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGoogleAdsLinksList(
        new AnalyticsadminPropertiesGoogleAdsLinksListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse
}
catch (ApiException<AnalyticsadminPropertiesGoogleAdsLinksListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGoogleAdsLinksListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGoogleAdsLinksListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaGoogleAdsLink&gt; AnalyticsadminPropertiesGoogleAdsLinksPatch(AnalyticsadminPropertiesGoogleAdsLinksPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesGoogleAdsLinksPatch(
        new AnalyticsadminPropertiesGoogleAdsLinksPatchRequest
        {
            PropertiesId = "some example string",
            GoogleAdsLinksId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaGoogleAdsLink(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaGoogleAdsLink
}
catch (ApiException<AnalyticsadminPropertiesGoogleAdsLinksPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesGoogleAdsLinksPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaGoogleAdsLink](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaGoogleAdsLink.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesGoogleAdsLinksPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaKeyEvent&gt; AnalyticsadminPropertiesKeyEventsCreate(AnalyticsadminPropertiesKeyEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesKeyEventsCreate(
        new AnalyticsadminPropertiesKeyEventsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaKeyEvent(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
}
catch (ApiException<AnalyticsadminPropertiesKeyEventsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesKeyEventsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesKeyEventsCreateError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AnalyticsadminPropertiesKeyEventsDelete(AnalyticsadminPropertiesKeyEventsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesKeyEventsDelete(
        new AnalyticsadminPropertiesKeyEventsDeleteRequest
        {
            PropertiesId = "some example string",
            KeyEventsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AnalyticsadminPropertiesKeyEventsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesKeyEventsDeleteRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesKeyEventsDeleteError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaKeyEvent&gt; AnalyticsadminPropertiesKeyEventsGet(AnalyticsadminPropertiesKeyEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesKeyEventsGet(
        new AnalyticsadminPropertiesKeyEventsGetRequest
        {
            PropertiesId = "some example string",
            KeyEventsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
}
catch (ApiException<AnalyticsadminPropertiesKeyEventsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesKeyEventsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesKeyEventsGetError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListKeyEventsResponse&gt; AnalyticsadminPropertiesKeyEventsList(AnalyticsadminPropertiesKeyEventsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesKeyEventsList(
        new AnalyticsadminPropertiesKeyEventsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListKeyEventsResponse
}
catch (ApiException<AnalyticsadminPropertiesKeyEventsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesKeyEventsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListKeyEventsResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListKeyEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesKeyEventsListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaKeyEvent&gt; AnalyticsadminPropertiesKeyEventsPatch(AnalyticsadminPropertiesKeyEventsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesKeyEventsPatch(
        new AnalyticsadminPropertiesKeyEventsPatchRequest
        {
            PropertiesId = "some example string",
            KeyEventsId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaKeyEvent(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaKeyEvent
}
catch (ApiException<AnalyticsadminPropertiesKeyEventsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesKeyEventsPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaKeyEvent](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesKeyEventsPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaListPropertiesResponse&gt; AnalyticsadminPropertiesList(AnalyticsadminPropertiesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesList(new AnalyticsadminPropertiesListRequest());
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaListPropertiesResponse
}
catch (ApiException<AnalyticsadminPropertiesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaListPropertiesResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListPropertiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesListError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaProperty&gt; AnalyticsadminPropertiesPatch(AnalyticsadminPropertiesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesPatch(new AnalyticsadminPropertiesPatchRequest
    {
        PropertiesId = "some example string",
        Body = new GoogleAnalyticsAdminV1BetaProperty(),
    });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaProperty
}
catch (ApiException<AnalyticsadminPropertiesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesPatchRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaProperty](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesPatchError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaRunAccessReportResponse&gt; AnalyticsadminPropertiesRunAccessReport(AnalyticsadminPropertiesRunAccessReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesRunAccessReport(
        new AnalyticsadminPropertiesRunAccessReportRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaRunAccessReportRequest(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaRunAccessReportResponse
}
catch (ApiException<AnalyticsadminPropertiesRunAccessReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesRunAccessReportRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesRunAccessReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaRunAccessReportResponse](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesRunAccessReportError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesRunAccessReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleAnalyticsAdminV1BetaDataRetentionSettings&gt; AnalyticsadminPropertiesUpdateDataRetentionSettings(AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsadminPropertiesUpdateDataRetentionSettings(
        new AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest
        {
            PropertiesId = "some example string",
            Body = new GoogleAnalyticsAdminV1BetaDataRetentionSettings(),
        });
    // TODO: Handle 'response' of type GoogleAnalyticsAdminV1BetaDataRetentionSettings
}
catch (ApiException<AnalyticsadminPropertiesUpdateDataRetentionSettingsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleAnalyticsAdminV1BetaDataRetentionSettings](src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataRetentionSettings.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsadminPropertiesUpdateDataRetentionSettingsError](src/GoogleAnalytics/Errors/AnalyticsadminPropertiesUpdateDataRetentionSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OperationGoogleAnalyticsPropertiesApi&gt; AnalyticsdataPropertiesAudienceExportsCreate(AnalyticsdataPropertiesAudienceExportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesAudienceExportsCreate(
        new AnalyticsdataPropertiesAudienceExportsCreateRequest
        {
            PropertiesId = "some example string",
            Body = new AudienceExport(),
        });
    // TODO: Handle 'response' of type OperationGoogleAnalyticsPropertiesApi
}
catch (ApiException<AnalyticsdataPropertiesAudienceExportsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesAudienceExportsCreateRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OperationGoogleAnalyticsPropertiesApi](src/GoogleAnalytics/Models/OperationGoogleAnalyticsPropertiesApi.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesAudienceExportsCreateError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudienceExport&gt; AnalyticsdataPropertiesAudienceExportsGet(AnalyticsdataPropertiesAudienceExportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesAudienceExportsGet(
        new AnalyticsdataPropertiesAudienceExportsGetRequest
        {
            PropertiesId = "some example string",
            AudienceExportsId = "some example string",
        });
    // TODO: Handle 'response' of type AudienceExport
}
catch (ApiException<AnalyticsdataPropertiesAudienceExportsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesAudienceExportsGetRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudienceExport](src/GoogleAnalytics/Models/AudienceExport.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesAudienceExportsGetError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAudienceExportsResponse&gt; AnalyticsdataPropertiesAudienceExportsList(AnalyticsdataPropertiesAudienceExportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesAudienceExportsList(
        new AnalyticsdataPropertiesAudienceExportsListRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type ListAudienceExportsResponse
}
catch (ApiException<AnalyticsdataPropertiesAudienceExportsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesAudienceExportsListRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAudienceExportsResponse](src/GoogleAnalytics/Models/ListAudienceExportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesAudienceExportsListError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueryAudienceExportResponse&gt; AnalyticsdataPropertiesAudienceExportsQuery(AnalyticsdataPropertiesAudienceExportsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesAudienceExportsQuery(
        new AnalyticsdataPropertiesAudienceExportsQueryRequest
        {
            PropertiesId = "some example string",
            AudienceExportsId = "some example string",
            Body = new QueryAudienceExportRequest(),
        });
    // TODO: Handle 'response' of type QueryAudienceExportResponse
}
catch (ApiException<AnalyticsdataPropertiesAudienceExportsQueryError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesAudienceExportsQueryRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueryAudienceExportResponse](src/GoogleAnalytics/Models/QueryAudienceExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesAudienceExportsQueryError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchRunPivotReportsResponse&gt; AnalyticsdataPropertiesBatchRunPivotReports(AnalyticsdataPropertiesBatchRunPivotReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesBatchRunPivotReports(
        new AnalyticsdataPropertiesBatchRunPivotReportsRequest
        {
            PropertiesId = "some example string",
            Body = new BatchRunPivotReportsRequest(),
        });
    // TODO: Handle 'response' of type BatchRunPivotReportsResponse
}
catch (ApiException<AnalyticsdataPropertiesBatchRunPivotReportsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesBatchRunPivotReportsRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesBatchRunPivotReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchRunPivotReportsResponse](src/GoogleAnalytics/Models/BatchRunPivotReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesBatchRunPivotReportsError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesBatchRunPivotReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchRunReportsResponse&gt; AnalyticsdataPropertiesBatchRunReports(AnalyticsdataPropertiesBatchRunReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesBatchRunReports(
        new AnalyticsdataPropertiesBatchRunReportsRequest
        {
            PropertiesId = "some example string",
            Body = new BatchRunReportsRequest(),
        });
    // TODO: Handle 'response' of type BatchRunReportsResponse
}
catch (ApiException<AnalyticsdataPropertiesBatchRunReportsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesBatchRunReportsRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesBatchRunReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchRunReportsResponse](src/GoogleAnalytics/Models/BatchRunReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesBatchRunReportsError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesBatchRunReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckCompatibilityResponse&gt; AnalyticsdataPropertiesCheckCompatibility(AnalyticsdataPropertiesCheckCompatibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesCheckCompatibility(
        new AnalyticsdataPropertiesCheckCompatibilityRequest
        {
            PropertiesId = "some example string",
            Body = new CheckCompatibilityRequest(),
        });
    // TODO: Handle 'response' of type CheckCompatibilityResponse
}
catch (ApiException<AnalyticsdataPropertiesCheckCompatibilityError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesCheckCompatibilityRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesCheckCompatibilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckCompatibilityResponse](src/GoogleAnalytics/Models/CheckCompatibilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesCheckCompatibilityError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesCheckCompatibilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Metadata&gt; AnalyticsdataPropertiesGetMetadata(AnalyticsdataPropertiesGetMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesGetMetadata(
        new AnalyticsdataPropertiesGetMetadataRequest { PropertiesId = "some example string" });
    // TODO: Handle 'response' of type Metadata
}
catch (ApiException<AnalyticsdataPropertiesGetMetadataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesGetMetadataRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesGetMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metadata](src/GoogleAnalytics/Models/Metadata.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesGetMetadataError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesGetMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunPivotReportResponse&gt; AnalyticsdataPropertiesRunPivotReport(AnalyticsdataPropertiesRunPivotReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesRunPivotReport(
        new AnalyticsdataPropertiesRunPivotReportRequest
        {
            PropertiesId = "some example string",
            Body = new RunPivotReportRequest(),
        });
    // TODO: Handle 'response' of type RunPivotReportResponse
}
catch (ApiException<AnalyticsdataPropertiesRunPivotReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesRunPivotReportRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunPivotReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunPivotReportResponse](src/GoogleAnalytics/Models/RunPivotReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesRunPivotReportError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunPivotReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunRealtimeReportResponse&gt; AnalyticsdataPropertiesRunRealtimeReport(AnalyticsdataPropertiesRunRealtimeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesRunRealtimeReport(
        new AnalyticsdataPropertiesRunRealtimeReportRequest
        {
            PropertiesId = "some example string",
            Body = new RunRealtimeReportRequest(),
        });
    // TODO: Handle 'response' of type RunRealtimeReportResponse
}
catch (ApiException<AnalyticsdataPropertiesRunRealtimeReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesRunRealtimeReportRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunRealtimeReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunRealtimeReportResponse](src/GoogleAnalytics/Models/RunRealtimeReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesRunRealtimeReportError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunRealtimeReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunReportResponse&gt; AnalyticsdataPropertiesRunReport(AnalyticsdataPropertiesRunReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Properties.AnalyticsdataPropertiesRunReport(new AnalyticsdataPropertiesRunReportRequest
    {
        PropertiesId = "some example string",
        Body = new RunReportRequest(),
    });
    // TODO: Handle 'response' of type RunReportResponse
}
catch (ApiException<AnalyticsdataPropertiesRunReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsdataPropertiesRunReportRequest](src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunReportResponse](src/GoogleAnalytics/Models/RunReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleAnalytics/Core/Exceptions/ApiException.cs)&lt;[AnalyticsdataPropertiesRunReportError](src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

