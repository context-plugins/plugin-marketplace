# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FinixApiReferenceClient](src/FinixApiReference/FinixApiReferenceClient.cs)

<details>
<summary><code>Task CreateIdentityVerification(CreateIdentityVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify an `Identity`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CreateIdentityVerification(new CreateIdentityVerificationRequest
    {
        IdentityId = "some example string",
        FinixVersion = "2022-02-01",
        Body = body,
    });
}
catch (ApiException<CreateIdentityVerificationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateIdentityVerificationRequest](src/FinixApiReference/Requests/CreateIdentityVerificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateIdentityVerificationError](src/FinixApiReference/Errors/CreateIdentityVerificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DSecureSessions3

> Source: [DSecureSessions3](src/FinixApiReference/Api/DSecureSessions3.cs)

<details>
<summary><code>Task&lt;DSecureSession3&gt; Create3DSecureSession(Create3DSecureSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `3D Secure Session` to authenticate a buyer before you charge their card.

Create the session from a `payment_instrument_id` for the redirect flow or standalone `Finix.ThreeDSecure`, or from a `token_id` for the `ThreeDSecure` payment form option. For redirect flows, pass the session ID after `state` reaches `SUCCEEDED`. With Finix.js, pass it when the `succeeded` callback fires, even if the session resource still reads `PENDING`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DSecureSessions3.Create3DSecureSession(new Create3DSecureSessionRequest
    {
        FinixVersion = "2022-02-01",
        Body = new DSecureSessionPaymentInstrument3
        {
            Amount = 92169L,
            Currency = Currency.Usd,
            MerchantId = "MUmfEGv5bMpSJ9k5TFRUjkmm",
            PaymentInstrumentId = "PI6iQcTtJNCS8GZAVKYi5Ueb",
            RedirectUrl = "https://example.com/3d-secure/return",
        },
    });
    // TODO: Handle 'response' of type DSecureSession3
}
catch (ApiException<Create3DSecureSessionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[Create3DSecureSessionRequest](src/FinixApiReference/Requests/DSecureSessions3/Create3DSecureSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DSecureSession3](src/FinixApiReference/Models/DSecureSession3.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[Create3DSecureSessionError](src/FinixApiReference/Errors/Create3DSecureSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DSecureSession3&gt; Get3DSecureSession(Get3DSecureSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a `3D Secure Session` to check the state of the authentication and read the values the card network returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DSecureSessions3.Get3DSecureSession(new Get3DSecureSessionRequest
    {
        DSecureSessionId3 = "3d_secure_session_wUCqan1LqeEHbYSwozMcFT",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type DSecureSession3
}
catch (ApiException<Get3DSecureSessionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[Get3DSecureSessionRequest](src/FinixApiReference/Requests/DSecureSessions3/Get3DSecureSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DSecureSession3](src/FinixApiReference/Models/DSecureSession3.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[Get3DSecureSessionError](src/FinixApiReference/Errors/Get3DSecureSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthorizationsApi

> Source: [AuthorizationsApi](src/FinixApiReference/Api/AuthorizationsApi.cs)

<details>
<summary><code>Task&lt;Authorization&gt; CaptureAuthorization(CaptureAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use a PUT request to capture an `Authorization`. If captured successfully, the `transfer` field of the `Authorization` will contain the ID of the `Transfer` resource that moves funds.

Related Guides: [Creating and Capturing an Authorization](/guides/online-payments/payment-features/auth-and-captures/), [Level 2 and 3 Processing](/guides/online-payments/payment-features/level-2-level-3-processing), [POS Integration](/guides/in-person-payments/building-your-integration/pos-integration), [Buyer Charges](/guides/online-payments/payment-features/buyer-charges)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthorizationsApi.CaptureAuthorization(new CaptureAuthorizationRequest
    {
        AuthorizationId = "AUrEnGqdBi5oJs68ChNRcHJ3",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Authorization
}
catch (ApiException<CaptureAuthorizationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CaptureAuthorizationRequest](src/FinixApiReference/Requests/AuthorizationsApi/CaptureAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Authorization](src/FinixApiReference/Models/Authorization.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CaptureAuthorizationError](src/FinixApiReference/Errors/CaptureAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Authorization&gt; CreateAuthorization(CreateAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an `Authorization` to process a transaction.

Related Guides: [Creating and Capturing an Authorization](/guides/online-payments/payment-features/auth-and-captures/), [Level 2 and 3 Processing](/guides/online-payments/payment-features/level-2-level-3-processing), [POS Integration](/guides/in-person-payments/building-your-integration/pos-integration), [Buyer Charges](/guides/online-payments/payment-features/buyer-charges)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthorizationsApi.CreateAuthorization(new CreateAuthorizationRequest
    {
        FinixVersion = "2022-02-01",
        Body = new AuthorizationMinimalFields
        {
            Amount = 10000L,
            Currency = Currency.Usd,
            Merchant = "MUmfEGv5bMpSJ9k5TFRUjkmm",
            Source = "PIkxmtueemLD6dN9ZoWGHT44",
        },
    });
    // TODO: Handle 'response' of type Authorization
}
catch (ApiException<CreateAuthorizationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAuthorizationRequest](src/FinixApiReference/Requests/AuthorizationsApi/CreateAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Authorization](src/FinixApiReference/Models/Authorization.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateAuthorizationError](src/FinixApiReference/Errors/CreateAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Authorization&gt; GetAuthorization(GetAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a previously created `Authorization`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthorizationsApi.GetAuthorization(new GetAuthorizationRequest
    {
        AuthorizationId = "AUrEnGqdBi5oJs68ChNRcHJ3",
    });
    // TODO: Handle 'response' of type Authorization
}
catch (ApiException<GetAuthorizationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAuthorizationRequest](src/FinixApiReference/Requests/AuthorizationsApi/GetAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Authorization](src/FinixApiReference/Models/Authorization.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetAuthorizationError](src/FinixApiReference/Errors/GetAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAuthorizations&gt; ListAuthorizations(ListAuthorizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Authorizations`.

For details on how to query endpoints using the available parameters, see [Query Parameters.](/api/section/query-parameters)

{% admonition type="info" %}
If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthorizationsApi.ListAuthorizations(new ListAuthorizationsRequest
    {
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        Amount = 100,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Currency = "USD",
        Device = "DVsEanpBtsAVvCHbNXkFaH6f",
        IdempotencyId = "15d32948-c766-4033-8d87-dfbdcabcbc5c",
        InstrumentAccountLast4 = "9444",
        InstrumentBin = "411111",
        InstrumentBrandType = "VISA",
        InstrumentCardLast4 = "1111",
        InstrumentName = "Alice",
        Limit = 10,
        Merchant = "MUeDVrf2ahuKc9Eg5TeZugvs",
        MerchantIdentityName = "John",
        MerchantMid = "FNXrzKj8xCLBwB8FdxjfU9txe",
        State = State21.Succeeded,
        TagsKey = "card_type",
        TagsValue = "business_card",
        TraceId = "021fc4ed-f0a8-4932-820c-b22b542526f8",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListAuthorizations
}
catch (ApiException<ListAuthorizationsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAuthorizationsRequest](src/FinixApiReference/Requests/AuthorizationsApi/ListAuthorizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAuthorizations](src/FinixApiReference/Models/ListAuthorizations.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListAuthorizationsError](src/FinixApiReference/Errors/ListAuthorizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Authorization&gt; VoidAuthorization(VoidAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use a PUT request to void an `Authorization`. If voided successfully, funds get released, and the transaction is incomplete. Additionally, a voided `Authorization` can no longer be captured. Depending on the cardholder’s issuing bank, voids can take up to seven days to remove the `Authorization` hold.

Related Guides: [Creating and Capturing an Authorization](/guides/online-payments/payment-features/auth-and-captures/), [Level 2 and 3 Processing](/guides/online-payments/payment-features/level-2-level-3-processing), [POS Integration](/guides/in-person-payments/building-your-integration/pos-integration), [Buyer Charges](/guides/online-payments/payment-features/buyer-charges)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthorizationsApi.VoidAuthorization(new VoidAuthorizationRequest
    {
        AuthorizationIdVoidTo = "some example string",
        FinixVersion = "2022-02-01",
        Body = new VoidAnAuthorization { VoidMe = true },
    });
    // TODO: Handle 'response' of type Authorization
}
catch (ApiException<VoidAuthorizationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VoidAuthorizationRequest](src/FinixApiReference/Requests/AuthorizationsApi/VoidAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Authorization](src/FinixApiReference/Models/Authorization.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[VoidAuthorizationError](src/FinixApiReference/Errors/VoidAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BalanceAdjustments

> Source: [BalanceAdjustments](src/FinixApiReference/Api/BalanceAdjustments.cs)

<details>
<summary><code>Task&lt;BalanceAdjustment&gt; CreateBalanceAdjustment(CreateBalanceAdjustmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Balance Adjustment` to increase (i.e., 'Top-up') or decrease your account balance for Payouts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BalanceAdjustments.CreateBalanceAdjustment(new CreateBalanceAdjustmentRequest
    {
        FinixVersion = "2022-02-01",
        Body = new CreateBalanceAdjustment
        {
            Amount = 10000L,
            Description = "Sample balance adjustment",
            InstrumentId = "PI4Ppf8rxWYapuEqQr3u6efi",
            Type = Type6.TopUp,
        },
    });
    // TODO: Handle 'response' of type BalanceAdjustment
}
catch (ApiException<CreateBalanceAdjustmentError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBalanceAdjustmentRequest](src/FinixApiReference/Requests/BalanceAdjustments/CreateBalanceAdjustmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAdjustment](src/FinixApiReference/Models/BalanceAdjustment.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateBalanceAdjustmentError](src/FinixApiReference/Errors/CreateBalanceAdjustmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBalanceAdjustments&gt; ListBalanceAdjustments(ListBalanceAdjustmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Balance Adjustment` resources for an `Application`.

Only `ROLE_PARTNER` or `ROLE_PLATFORM` credentials can be used to retrieve `Balance Adjustment` objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BalanceAdjustments.ListBalanceAdjustments(new ListBalanceAdjustmentsRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListBalanceAdjustments
}
catch (ApiException<ListBalanceAdjustmentsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBalanceAdjustmentsRequest](src/FinixApiReference/Requests/BalanceAdjustments/ListBalanceAdjustmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBalanceAdjustments](src/FinixApiReference/Models/ListBalanceAdjustments.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListBalanceAdjustmentsError](src/FinixApiReference/Errors/ListBalanceAdjustmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Balances

> Source: [Balances](src/FinixApiReference/Api/Balances.cs)

<details>
<summary><code>Task&lt;Balance&gt; GetBalance(GetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Balance`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Balances.GetBalance(new GetBalanceRequest
    {
        BalanceId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Balance
}
catch (ApiException<GetBalanceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBalanceRequest](src/FinixApiReference/Requests/Balances/GetBalanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Balance](src/FinixApiReference/Models/Balance.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetBalanceError](src/FinixApiReference/Errors/GetBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BalanceEntry&gt; GetBalanceEntry(GetBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a specific `Balance Entry`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Balances.GetBalanceEntry(new GetBalanceEntryRequest
    {
        BalanceEntryId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type BalanceEntry
}
catch (ApiException<GetBalanceEntryError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBalanceEntryRequest](src/FinixApiReference/Requests/Balances/GetBalanceEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceEntry](src/FinixApiReference/Models/BalanceEntry.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetBalanceEntryError](src/FinixApiReference/Errors/GetBalanceEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBalances&gt; ListBalanceEntries(ListBalanceEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A `Balance Entry` reflects a change to an application's `Balance` due to a `Transfer` or a `Balance Adjustment` (i.e., "top-up").

You can use this endpoint to obtain a list of `Balance Entry` objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Balances.ListBalanceEntries(new ListBalanceEntriesRequest
    {
        BalanceId = "some example string",
        Amount = 100,
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        EntityId = "TR2vw93rwm6LkH1MES6T9uYe",
        Id = "balance_entry_7s6EstknMq5KekMooedkES",
        Limit = 10,
        ParentBalanceEntryId = "balance_entry_xxx",
        PostedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        PostedAtLte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        State = State22.Succeeded,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListBalances
}
catch (ApiException<ListBalanceEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBalanceEntriesRequest](src/FinixApiReference/Requests/Balances/ListBalanceEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBalances](src/FinixApiReference/Models/ListBalances.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListBalanceEntriesError](src/FinixApiReference/Errors/ListBalanceEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBalances&gt; ListBalances(ListBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Balance` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Balances.ListBalances(new ListBalancesRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListBalances
}
catch (ApiException<ListBalancesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBalancesRequest](src/FinixApiReference/Requests/Balances/ListBalancesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBalances](src/FinixApiReference/Models/ListBalances.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListBalancesError](src/FinixApiReference/Errors/ListBalancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ComplianceForms

> Source: [ComplianceForms](src/FinixApiReference/Api/ComplianceForms.cs)

<details>
<summary><code>Task&lt;ComplianceForm&gt; GetComplianceForm(GetComplianceFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finix sends a [webhook](/additional-resources/developers/webhooks/webhook-events#compliance-form-created) whenever a new `Compliance Form` is created for your Merchant. Using the ID, you can retrieve the `Compliance Form`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComplianceForms.GetComplianceForm(new GetComplianceFormRequest
    {
        ComplianceFormId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ComplianceForm
}
catch (ApiException<GetComplianceFormError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetComplianceFormRequest](src/FinixApiReference/Requests/ComplianceForms/GetComplianceFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplianceForm](src/FinixApiReference/Models/ComplianceForm.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetComplianceFormError](src/FinixApiReference/Errors/GetComplianceFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListComplianceForms&gt; ListComplianceForms(ListComplianceFormsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of Compliance Form resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComplianceForms.ListComplianceForms(new ListComplianceFormsRequest
    {
        LinkedTo = "MUwfZPNW3r4EqLMzwgr6txw4",
        State = State26.Complete,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListComplianceForms
}
catch (ApiException<ListComplianceFormsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListComplianceFormsRequest](src/FinixApiReference/Requests/ComplianceForms/ListComplianceFormsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListComplianceForms](src/FinixApiReference/Models/ListComplianceForms.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListComplianceFormsError](src/FinixApiReference/Errors/ListComplianceFormsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ComplianceForm&gt; UpdateComplianceForm(UpdateComplianceFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

As part of onboarding, your Merchants need to review and agree to their `Compliance Form`. Afterward, you need to update their `Compliance Form` with details about their digital signature. Finix will update their `Compliance Form` with those details, along with a reference to the new `signed_file` with their digital signature.

For more information, see [Managing Compliance Forms](/guides/managing-operations/security-compliance/managing-pci-compliance#completing-compliance-forms).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComplianceForms.UpdateComplianceForm(new UpdateComplianceFormRequest
    {
        ComplianceFormId = "some example string",
        Body = new CompleteComplianceForm
        {
            PciSaqA = new PciSaqA1
            {
                IpAddress = "42.1.1.113",
                Name = "John Doe",
                SignedAt = "2022-03-18T16:42:55Z",
                Title = "CTO",
                UserAgent = "Mozilla 5.0(Macintosh; IntelMac OS X 10 _14_6)",
            },
        },
    });
    // TODO: Handle 'response' of type ComplianceForm
}
catch (ApiException<UpdateComplianceFormError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateComplianceFormRequest](src/FinixApiReference/Requests/ComplianceForms/UpdateComplianceFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplianceForm](src/FinixApiReference/Models/ComplianceForm.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateComplianceFormError](src/FinixApiReference/Errors/UpdateComplianceFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Devices

> Source: [Devices](src/FinixApiReference/Api/Devices.cs)

<details>
<summary><code>Task&lt;Device&gt; CreateMerchantDevice(CreateMerchantDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Device` under a `Merchant`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.CreateMerchantDevice(new CreateMerchantDeviceRequest
    {
        MerchantId = "some example string",
        FinixVersion = "2022-02-01",
        Body = new CreateMerchantDevice
        {
            AppBundleId = "com.finix.FinixCheckout",
            Description = "iOS Tap to Pay device",
            Model = Model.IosTapToPay,
            Name = "iPhone Tap to Pay - Michael Johnson",
            SerialNumber = "cdb7ac638cb455f6d85e791115c0a4fd3cf6cbcdb874cbf30c871bc312zy3abc",
        },
    });
    // TODO: Handle 'response' of type Device
}
catch (ApiException<CreateMerchantDeviceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMerchantDeviceRequest](src/FinixApiReference/Requests/Devices/CreateMerchantDeviceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Device](src/FinixApiReference/Models/Device.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateMerchantDeviceError](src/FinixApiReference/Errors/CreateMerchantDeviceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Device&gt; GetDevice(GetDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Device`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.GetDevice(new GetDeviceRequest
    {
        DeviceId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Device
}
catch (ApiException<GetDeviceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeviceRequest](src/FinixApiReference/Requests/Devices/GetDeviceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Device](src/FinixApiReference/Models/Device.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetDeviceError](src/FinixApiReference/Errors/GetDeviceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Device&gt; GetDeviceConnection(GetDeviceConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To check the connection of the `Device`, include `?include_connection=true` at the end of the request endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.GetDeviceConnection(new GetDeviceConnectionRequest
    {
        DeviceIdConnection = "some example string",
        IncludeConnection = true,
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Device
}
catch (ApiException<GetDeviceConnectionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeviceConnectionRequest](src/FinixApiReference/Requests/Devices/GetDeviceConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Device](src/FinixApiReference/Models/Device.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetDeviceConnectionError](src/FinixApiReference/Errors/GetDeviceConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDevices&gt; ListDeviceMetrics(ListDeviceMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finix collects and analyzes data from payment devices and terminals to generate logs, known as `Device Metric` objects. Each `Device Metric` log provides insights into device health, network connectivity, and payment processing performance.

Use this endpoint to retrieve a device's `Device Metric` logs.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.ListDeviceMetrics(new ListDeviceMetricsRequest
    {
        DeviceId = "some example string",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Connection = Connection.Open,
        ConnectivityNetworkType = ConnectivityNetworkType.Wifi,
        ConnectivitySignalStrength = ConnectivitySignalStrength.Poor,
        EventType = EventType.ScheduledInterval,
        Limit = 10,
        PaymentAppState = PaymentAppState.Background,
        PaymentAppVersion = "3.2.1",
        PaymentAppVersionGte = "3.2.1",
        PaymentAppVersionLte = "3.2.1",
        PowerBatteryLevelPercent = 75,
        PowerBatteryLevelPercentGte = 75,
        PowerBatteryLevelPercentLte = 75,
        PowerBatteryTemperatureCelsius = 32.5d,
        PowerBatteryTemperatureCelsiusGte = 32.5d,
        PowerBatteryTemperatureCelsiusLte = 32.5d,
        PowerBatteryTemperatureFahrenheit = 32.5d,
        PowerBatteryTemperatureFahrenheitGte = 32.5d,
        PowerBatteryTemperatureFahrenheitLte = 32.5d,
        PowerIsCharging = true,
        SystemAndroidVersion = "12",
        SystemAndroidVersionGte = "12",
        SystemAndroidVersionLte = "12",
        SystemFirmwareVersion = "2.1.0",
        SystemFirmwareVersionGte = "2.1.0",
        SystemFirmwareVersionLte = "2.1.0",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDevices
}
catch (ApiException<ListDeviceMetricsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDeviceMetricsRequest](src/FinixApiReference/Requests/Devices/ListDeviceMetricsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDevices](src/FinixApiReference/Models/ListDevices.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDeviceMetricsError](src/FinixApiReference/Errors/ListDeviceMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDevices&gt; ListDevices(ListDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Devices`.

For details on how to query endpoints using the available parameters, see [Query Parameters.](/api/section/query-parameters)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.ListDevices(new ListDevicesRequest
    {
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Enabled = true,
        Limit = 10,
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        MerchantIdentityId = "IDtEnKsZyJNUGK83ZTx4C45S",
        Name = "john%%20smith",
        Model = "PAX_A800",
        TagsKey = "card_type",
        TagsValue = "business_card",
        SerialNumber = "2210074802",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDevices
}
catch (ApiException<ListDevicesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDevicesRequest](src/FinixApiReference/Requests/Devices/ListDevicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDevices](src/FinixApiReference/Models/ListDevices.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDevicesError](src/FinixApiReference/Errors/ListDevicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Device&gt; UpdateDevice(UpdateDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can either update the configuration of a device or take an action on the device

Terminals must be online and connected to the network in order for the request to be successful.

You can initiate an action on a `Device`. Actions supported vary by gateway.

FINIX_V1 and DUMMY_V1 terminals support the following actions:
- `ACTIVATE` - Activate the device to enable processing
- `DEACTIVATE` - Deactivate the device to disable processing
- `CANCEL` - Cancel any active transaction and return to the idle screen

For processors other than `FINIX_V1` and `DUMMY_V1`, contact your Finix point of contact or email [Finix Support](/guides/getting-started/support-at-finix/) for device update instructions.

You can also use a PUT request to update the `configuration`, `description`, `name`, and `serial_number` of the `Device`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Devices.UpdateDevice(new UpdateDeviceRequest
    {
        DeviceId = "some example string",
        Body = new DeviceActivate(),
    });
    // TODO: Handle 'response' of type Device
}
catch (ApiException<UpdateDeviceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDeviceRequest](src/FinixApiReference/Requests/Devices/UpdateDeviceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Device](src/FinixApiReference/Models/Device.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateDeviceError](src/FinixApiReference/Errors/UpdateDeviceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DisbursementRules

> Source: [DisbursementRules](src/FinixApiReference/Api/DisbursementRules.cs)

<details>
<summary><code>Task&lt;ListCurrentUsages&gt; ListCurrentUsages(ListCurrentUsagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current usage for disbursements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisbursementRules.ListCurrentUsages(new ListCurrentUsagesRequest
    {
        LinkedTo = "APc9vhYcPsRuTSpKD9KpMtPe",
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListCurrentUsages
}
catch (ApiException<ListCurrentUsagesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCurrentUsagesRequest](src/FinixApiReference/Requests/DisbursementRules/ListCurrentUsagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCurrentUsages](src/FinixApiReference/Models/ListCurrentUsages.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListCurrentUsagesError](src/FinixApiReference/Errors/ListCurrentUsagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDisbursementRules&gt; ListDisbursementRules(ListDisbursementRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Disbursement Rule` resources linked to an `Application` / `Platform`. Currently, there is only one `Disbursement Rule` object per application / platform.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/overview/#section/Query-Parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisbursementRules.ListDisbursementRules(new ListDisbursementRulesRequest
    {
        LinkedTo = "APc9vhYcPsRuTSpKD9KpMtPe",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDisbursementRules
}
catch (ApiException<ListDisbursementRulesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDisbursementRulesRequest](src/FinixApiReference/Requests/DisbursementRules/ListDisbursementRulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDisbursementRules](src/FinixApiReference/Models/ListDisbursementRules.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDisbursementRulesError](src/FinixApiReference/Errors/ListDisbursementRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DisputesApi

> Source: [DisputesApi](src/FinixApiReference/Api/DisputesApi.cs)

<details>
<summary><code>Task&lt;Dispute&gt; AcceptDispute(AcceptDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can accept a `Dispute` to prevent a long (and potentially expensive) process. When you accept a `Dispute`, you concede that the `Dispute` is not worth challenging or representing.

Related guides: [Accepting a Dispute](/guides/after-the-payment/disputes/accepting-disputes/)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.AcceptDispute(new AcceptDisputeRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        FinixVersion = "2022-02-01",
        Body = new AcceptDispute { Note = "Accepting Dispute: Valid Reason" },
    });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<AcceptDisputeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AcceptDisputeRequest](src/FinixApiReference/Requests/DisputesApi/AcceptDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/FinixApiReference/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[AcceptDisputeError](src/FinixApiReference/Errors/AcceptDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputeEvidence&gt; CreateDisputeEvidence(CreateDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file as evidence for a `Dispute`.

- You can upload up to 8 files; the total size of the uploaded files combined cannot exceed 10 MB.
- The allowed file formats include JPEG, PDF, PNG.
- Individual JPEG, PDF, PNG files can't exceed 1 MB.
- PNG files will be automatically converted and returned as JPEG files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.CreateDisputeEvidence(new CreateDisputeEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type DisputeEvidence
}
catch (ApiException<CreateDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/CreateDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeEvidence](src/FinixApiReference/Models/DisputeEvidence.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateDisputeEvidenceError](src/FinixApiReference/Errors/CreateDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDisputeEvidence(DeleteDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a `Dispute Evidence` file. You can delete evidence files only before a `Dispute` and its uploaded evidence are submitted for the first time, and only on `FINIX_V1` or `DUMMY_V1`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DisputesApi.DeleteDisputeEvidence(new DeleteDisputeEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        EvidenceId = "some example string",
        FinixVersion = "2022-02-01",
    });
}
catch (ApiException<DeleteDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/DeleteDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[DeleteDisputeEvidenceError](src/FinixApiReference/Errors/DeleteDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadDisputeEvidence(DownloadDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a file uploaded as `Dispute Evidence`.

**Note**: The file extension included in `output` must match the extension of the original uploaded file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.DownloadDisputeEvidence(new DownloadDisputeEvidenceRequest
    {
        DisputeId = "DIpCy4sZTx6im6U1ofBBPzdM",
        EvidenceId = "DFtiQ1LoNbjBTYiuuxju6tE2",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/DownloadDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[DownloadDisputeEvidenceError](src/FinixApiReference/Errors/DownloadDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Dispute&gt; GetDispute(GetDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Dispute`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.GetDispute(new GetDisputeRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<GetDisputeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDisputeRequest](src/FinixApiReference/Requests/DisputesApi/GetDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/FinixApiReference/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetDisputeError](src/FinixApiReference/Errors/GetDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputeEvidence&gt; GetDisputeEvidence(GetDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch evidence uploaded for a `Dispute`.

If the Finix Dashboard is unavailable, you can fetch the evidence to review the upload `state` and confirm it was sent to the processor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.GetDisputeEvidence(new GetDisputeEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        EvidenceId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type DisputeEvidence
}
catch (ApiException<GetDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/GetDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeEvidence](src/FinixApiReference/Models/DisputeEvidence.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetDisputeEvidenceError](src/FinixApiReference/Errors/GetDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDisputes&gt; ListDisputes(ListDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Dispute` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.ListDisputes(new ListDisputesRequest
    {
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        Amount = 100,
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDisputes
}
catch (ApiException<ListDisputesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDisputesRequest](src/FinixApiReference/Requests/DisputesApi/ListDisputesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDisputes](src/FinixApiReference/Models/ListDisputes.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDisputesError](src/FinixApiReference/Errors/ListDisputesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDisputeAdjustmentTransfers&gt; ListDisputesAdjustments(ListDisputesAdjustmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the adjustment `Transfers` for a `Dispute`. Depending on the stage of the `Dispute`, different adjustment `Transfer` subtypes can be applied.

There are four available subtypes for adjustment `Transfers` in `Disputes`:

- `PLATFORM_CREDIT`
- `MERCHANT_DEBIT`
- `MERCHANT_CREDIT`
- `PLATFORM_DEBIT`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.ListDisputesAdjustments(new ListDisputesAdjustmentsRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDisputeAdjustmentTransfers
}
catch (ApiException<ListDisputesAdjustmentsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDisputesAdjustmentsRequest](src/FinixApiReference/Requests/DisputesApi/ListDisputesAdjustmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDisputeAdjustmentTransfers](src/FinixApiReference/Models/ListDisputeAdjustmentTransfers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDisputesAdjustmentsError](src/FinixApiReference/Errors/ListDisputesAdjustmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDisputeEvidence&gt; ListDisputesEvidence(ListDisputesEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Dispute Evidence` for a `Dispute`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.ListDisputesEvidence(new ListDisputesEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListDisputeEvidence
}
catch (ApiException<ListDisputesEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDisputesEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/ListDisputesEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDisputeEvidence](src/FinixApiReference/Models/ListDisputeEvidence.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListDisputesEvidenceError](src/FinixApiReference/Errors/ListDisputesEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputeEvidence&gt; SubmitDisputeEvidence(SubmitDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can submit evidence to the issuing bank, confirming that the `Merchant` has completed submitting evidence and is ready to proceed with the `Dispute`.

Related guides: [Responding to Disputes](/guides/after-the-payment/disputes/responding-to-disputes).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.SubmitDisputeEvidence(new SubmitDisputeEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        FinixVersion = "2022-02-01",
        Body = new SubmitDisputeEvidence
        {
            Note = "Partial rebuttal is due to double charging cardholder due to technical malfunction on point of sale, but we have attached receipt as proof that cardhoder received item.",
        },
    });
    // TODO: Handle 'response' of type DisputeEvidence
}
catch (ApiException<SubmitDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubmitDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/SubmitDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeEvidence](src/FinixApiReference/Models/DisputeEvidence.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[SubmitDisputeEvidenceError](src/FinixApiReference/Errors/SubmitDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Dispute&gt; UpdateDispute(UpdateDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update `tags` on a `Dispute`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.UpdateDispute(new UpdateDisputeRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        Body = new UpdateDispute(),
    });
    // TODO: Handle 'response' of type Dispute
}
catch (ApiException<UpdateDisputeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDisputeRequest](src/FinixApiReference/Requests/DisputesApi/UpdateDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute](src/FinixApiReference/Models/Dispute.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateDisputeError](src/FinixApiReference/Errors/UpdateDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputeEvidence&gt; UpdateDisputeEvidence(UpdateDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update `tags` on `Dispute Evidence`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.UpdateDisputeEvidence(new UpdateDisputeEvidenceRequest
    {
        DisputeId = "DIgDv9764vkkEVu1suZNCDbR",
        EvidenceId = "some example string",
        Body = new UpdateDisputeEvidence(),
    });
    // TODO: Handle 'response' of type DisputeEvidence
}
catch (ApiException<UpdateDisputeEvidenceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDisputeEvidenceRequest](src/FinixApiReference/Requests/DisputesApi/UpdateDisputeEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeEvidence](src/FinixApiReference/Models/DisputeEvidence.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateDisputeEvidenceError](src/FinixApiReference/Errors/UpdateDisputeEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeeProfiles

> Source: [FeeProfiles](src/FinixApiReference/Api/FeeProfiles.cs)

<details>
<summary><code>Task&lt;FeeProfile&gt; CreateFeeProfile(CreateFeeProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Fee Profile`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeeProfiles.CreateFeeProfile(new CreateFeeProfileRequest
    {
        FinixVersion = "2022-02-01",
        Body = new BlendedProfile(),
    });
    // TODO: Handle 'response' of type FeeProfile
}
catch (ApiException<CreateFeeProfileError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFeeProfileRequest](src/FinixApiReference/Requests/FeeProfiles/CreateFeeProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeeProfile](src/FinixApiReference/Models/FeeProfile.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateFeeProfileError](src/FinixApiReference/Errors/CreateFeeProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeeProfile&gt; GetFeeProfile(GetFeeProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Fee Profile`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeeProfiles.GetFeeProfile(new GetFeeProfileRequest
    {
        FeeProfileId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type FeeProfile
}
catch (ApiException<GetFeeProfileError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFeeProfileRequest](src/FinixApiReference/Requests/FeeProfiles/GetFeeProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeeProfile](src/FinixApiReference/Models/FeeProfile.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetFeeProfileError](src/FinixApiReference/Errors/GetFeeProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFeeProfiles&gt; ListFeeProfiles(ListFeeProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of Fee Profile resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeeProfiles.ListFeeProfiles(new ListFeeProfilesRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListFeeProfiles
}
catch (ApiException<ListFeeProfilesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFeeProfilesRequest](src/FinixApiReference/Requests/FeeProfiles/ListFeeProfilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFeeProfiles](src/FinixApiReference/Models/ListFeeProfiles.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListFeeProfilesError](src/FinixApiReference/Errors/ListFeeProfilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeesApi

> Source: [FeesApi](src/FinixApiReference/Api/FeesApi.cs)

<details>
<summary><code>Task&lt;Fee&gt; Createfee(CreatefeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom (i.e. one-time) `Fee`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeesApi.Createfee(new CreatefeeRequest
    {
        FinixVersion = "2022-02-01",
        Body = new CreateCustomFee
        {
            Amount = 10000L,
            Currency = Currency.Usd,
            DisplayName = "April_Monthly_Fee",
            Merchant = "MUmfEGv5bMpSJ9k5TFRUjkmm",
        },
    });
    // TODO: Handle 'response' of type Fee
}
catch (ApiException<CreatefeeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatefeeRequest](src/FinixApiReference/Requests/FeesApi/CreatefeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fee](src/FinixApiReference/Models/Fee.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreatefeeError](src/FinixApiReference/Errors/CreatefeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Fee&gt; GetFee(GetFeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Fee`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeesApi.GetFee(new GetFeeRequest
    {
        FeeId = "FEnzgwGtLzFk61rDdUqsHFAj",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Fee
}
catch (ApiException<GetFeeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFeeRequest](src/FinixApiReference/Requests/FeesApi/GetFeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fee](src/FinixApiReference/Models/Fee.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetFeeError](src/FinixApiReference/Errors/GetFeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFees&gt; ListFees(ListFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Fee` resources.

**Filter fees by linked entity**: You can filter fees by the entity that generated them using the `linked_to` query parameter:

- Transfer fees: `?linked_to=TRnErBfrHLgdAi3BqAkWLN27`
- Authorization fees: `?linked_to=AUg8unYpnWBEY1AdVUDkdQYJ`
- Split transfer fees: `?linked_to=split_transfer_split_transfer_97gaitUpcmzqjYYpQbei9j`
- Compliance Form fees: `?linked_to=cf_uwErNm23TKYNEiqrEdJK59`
- Payment Instrument fees: `?linked_to=PInVUXZLswZi6pdcK1T41MuE`
- Merchant-specific fees: `?linked_to=MUwfZPNW3r4EqLMzwgr6txw4`

{% admonition type="info" %}
Merchant-specific fees include monthly dues and assessments and any [custom fees](/api/fees/createfee).
{% /admonition %}

**To show fees charged to a specific entity during a period**, pass the `created_at.gte` and `created_at.lte` query parameters.
- Example: `?merchant_id=MUeDVrf2ahuKc9Eg5TeZugvs&created_at.lte=2025-01-01&created_at.gte=2025-02-01`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeesApi.ListFees(new ListFeesRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        LinkedTo = "TRrB2VG7H84LmRgSTkfR2Cb6",
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListFees
}
catch (ApiException<ListFeesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFeesRequest](src/FinixApiReference/Requests/FeesApi/ListFeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFees](src/FinixApiReference/Models/ListFees.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListFeesError](src/FinixApiReference/Errors/ListFeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Fee&gt; UpdateFee(UpdateFeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the details of a `Fee`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeesApi.UpdateFee(new UpdateFeeRequest
    {
        FeeId = "FEnzgwGtLzFk61rDdUqsHFAj",
        Body = new UpdateFee(),
    });
    // TODO: Handle 'response' of type Fee
}
catch (ApiException<UpdateFeeError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFeeRequest](src/FinixApiReference/Requests/FeesApi/UpdateFeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fee](src/FinixApiReference/Models/Fee.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateFeeError](src/FinixApiReference/Errors/UpdateFeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FilesApi

> Source: [FilesApi](src/FinixApiReference/Api/FilesApi.cs)

<details>
<summary><code>Task&lt;ExternalLink&gt; CreateExternalLink(CreateExternalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an `External Link` to share with users so they can upload files directly from their browser. For more info, see [Uploading files to Finix](/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files/).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.CreateExternalLink(new CreateExternalLinkRequest
    {
        FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
        FinixVersion = "2022-02-01",
        Body = new CreateExternalLink { Duration = 15, Type = Type46.Upload },
    });
    // TODO: Handle 'response' of type ExternalLink
}
catch (ApiException<CreateExternalLinkError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateExternalLinkRequest](src/FinixApiReference/Requests/FilesApi/CreateExternalLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalLink](src/FinixApiReference/Models/ExternalLink.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateExternalLinkError](src/FinixApiReference/Errors/CreateExternalLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;File&gt; CreateFile(CreateFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Before uploading a file, you must create a `File` resource.

Once created, you can [upload](/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files/) your file to the new `File` resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.CreateFile(new CreateFileRequest
    {
        FinixVersion = "2022-02-01",
        Body = new CreateFile
        {
            DisplayName = "Bank Statement",
            LinkedTo = "MUvWVhLpLj9w7kV1EXA7yvzc",
            Type = Type44.BankStatementOneMonth,
        },
    });
    // TODO: Handle 'response' of type File
}
catch (ApiException<CreateFileError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFileRequest](src/FinixApiReference/Requests/FilesApi/CreateFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[File](src/FinixApiReference/Models/File.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateFileError](src/FinixApiReference/Errors/CreateFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadFileFileThatWasUploadedToAFileResource(DownloadFileFileThatWasUploadedToAFileResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.DownloadFileFileThatWasUploadedToAFileResource(
        new DownloadFileFileThatWasUploadedToAFileResourceRequest
        {
            FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
            FinixVersion = "2022-02-01",
        });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadFileFileThatWasUploadedToAFileResourceError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadFileFileThatWasUploadedToAFileResourceRequest](src/FinixApiReference/Requests/FilesApi/DownloadFileFileThatWasUploadedToAFileResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[DownloadFileFileThatWasUploadedToAFileResourceError](src/FinixApiReference/Errors/DownloadFileFileThatWasUploadedToAFileResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExternalLink&gt; GetExternalLink(GetExternalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a previously created `External Link` resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.GetExternalLink(new GetExternalLinkRequest
    {
        FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
        ExternalLinkId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ExternalLink
}
catch (ApiException<GetExternalLinkError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExternalLinkRequest](src/FinixApiReference/Requests/FilesApi/GetExternalLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalLink](src/FinixApiReference/Models/ExternalLink.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetExternalLinkError](src/FinixApiReference/Errors/GetExternalLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;File&gt; GetFile(GetFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `File`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.GetFile(new GetFileRequest
    {
        FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type File
}
catch (ApiException<GetFileError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFileRequest](src/FinixApiReference/Requests/FilesApi/GetFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[File](src/FinixApiReference/Models/File.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetFileError](src/FinixApiReference/Errors/GetFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListExternalLinks&gt; ListExternalLinks(ListExternalLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the previously created `External Link` resources for a `File`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.ListExternalLinks(new ListExternalLinksRequest
    {
        FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListExternalLinks
}
catch (ApiException<ListExternalLinksError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListExternalLinksRequest](src/FinixApiReference/Requests/FilesApi/ListExternalLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListExternalLinks](src/FinixApiReference/Models/ListExternalLinks.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListExternalLinksError](src/FinixApiReference/Errors/ListExternalLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFiles&gt; ListFiles(ListFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `File` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.ListFiles(new ListFilesRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListFiles
}
catch (ApiException<ListFilesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFilesRequest](src/FinixApiReference/Requests/FilesApi/ListFilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFiles](src/FinixApiReference/Models/ListFiles.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListFilesError](src/FinixApiReference/Errors/ListFilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;File&gt; UploadFile(UploadFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload files directly with a `multipart/form-data` request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FilesApi.UploadFile(new UploadFileRequest
    {
        FileId = "FILE_cSfN6idvWZnBYXS5Vc1Pes",
        FinixVersion = "2022-02-01",
        File = "@/Users/Desktop/finix_file.png",
    });
    // TODO: Handle 'response' of type File
}
catch (ApiException<UploadFileError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadFileRequest](src/FinixApiReference/Requests/FilesApi/UploadFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[File](src/FinixApiReference/Models/File.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UploadFileError](src/FinixApiReference/Errors/UploadFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GatewayIntegrations

> Source: [GatewayIntegrations](src/FinixApiReference/Api/GatewayIntegrations.cs)

<details>
<summary><code>Task&lt;GatewayIntegrationObject&gt; CreateGatewayIntegration(CreateGatewayIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a [Gateway Integration](/api/gateway-integrations) that connects a [Merchant](/api/merchants) to a third-party payment gateway. At this time, the only supported gateway is Cybersource.

If subscribed, a [Gateway Integration - Created webhook](/additional-resources/developers/webhooks/webhook-events#gateway-integration-created) is sent when the integration is created with a `Gateway Integration` ›`state` of `PENDING`.

When the `state` changes to `SUCCEEDED` or `FAILED`, a [Gateway Integration - Updated webhook](/additional-resources/developers/webhooks/webhook-events#gateway-integration-updated) is sent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GatewayIntegrations.CreateGatewayIntegration(new CreateGatewayIntegrationRequest
    {
        FinixVersion = "2022-02-01",
        Body = new GatewayIntegration { Email = "user@example.com", LinkedTo = "MUeg77opgdgQpwejzC9wCNmK" },
    });
    // TODO: Handle 'response' of type GatewayIntegrationObject
}
catch (ApiException<CreateGatewayIntegrationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGatewayIntegrationRequest](src/FinixApiReference/Requests/GatewayIntegrations/CreateGatewayIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GatewayIntegrationObject](src/FinixApiReference/Models/GatewayIntegrationObject.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateGatewayIntegrationError](src/FinixApiReference/Errors/CreateGatewayIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GatewayIntegrationObject&gt; GetGatewayIntegration(GetGatewayIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Gateway Integration`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GatewayIntegrations.GetGatewayIntegration(new GetGatewayIntegrationRequest
    {
        GatewayIntegrationId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type GatewayIntegrationObject
}
catch (ApiException<GetGatewayIntegrationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGatewayIntegrationRequest](src/FinixApiReference/Requests/GatewayIntegrations/GetGatewayIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GatewayIntegrationObject](src/FinixApiReference/Models/GatewayIntegrationObject.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetGatewayIntegrationError](src/FinixApiReference/Errors/GetGatewayIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGatewayIntegrations&gt; ListGatewayIntegrations(ListGatewayIntegrationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Gateway Integration` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GatewayIntegrations.ListGatewayIntegrations(new ListGatewayIntegrationsRequest
    {
        LinkedTo = "MUeg77opgdgQpwejzC9wCNmK",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListGatewayIntegrations
}
catch (ApiException<ListGatewayIntegrationsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGatewayIntegrationsRequest](src/FinixApiReference/Requests/GatewayIntegrations/ListGatewayIntegrationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGatewayIntegrations](src/FinixApiReference/Models/ListGatewayIntegrations.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListGatewayIntegrationsError](src/FinixApiReference/Errors/ListGatewayIntegrationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](src/FinixApiReference/Api/Identities.cs)

<details>
<summary><code>Task&lt;Identity&gt; CreateAssociatedIdentity(CreateAssociatedIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an associated `Identity` for [every owner with 25% or more ownership](/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api#step-3-add-associated-identities) over the merchant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.CreateAssociatedIdentity(new CreateAssociatedIdentityRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        Body = new CreateAssociatedIdentity
        {
            Entity = new Entity
            {
                Dob = new Dob { Day = 1, Month = 1, Year = 2013 },
                Email = "john.smith@company1.com",
                FirstName = "John",
                LastName = "Smith",
                PersonalAddress = new PersonalAddress
                {
                    Line1 = "123 Main Street",
                    City = "San Francisco",
                    Region = "CA",
                    PostalCode = "90650",
                    Country = Country.Usa,
                },
                Phone = "14158885080",
                PrincipalPercentageOwnership = 25,
                TaxId = "123456789",
                Title = "Founder",
            },
        },
    });
    // TODO: Handle 'response' of type Identity
}
catch (ApiException<CreateAssociatedIdentityError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAssociatedIdentityRequest](src/FinixApiReference/Requests/Identities/CreateAssociatedIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Identity](src/FinixApiReference/Models/Identity.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateAssociatedIdentityError](src/FinixApiReference/Errors/CreateAssociatedIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Identity&gt; CreateIdentity(CreateIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an `Identity` for your Buyer, Recipient, or Seller, using `identity_roles` and `type` to indicate the type of Identity you're creating.

Related Guides: [Getting Started](/guides/getting-started/), [Onboarding](/guides/platform-payments/onboarding-sellers/)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.CreateIdentity(new CreateIdentityRequest
    {
        FinixVersion = "2022-02-01",
        Body = new SellerUsa
        {
            AdditionalUnderwritingData = new AdditionalUnderwritingData1
            {
                AnnualAchVolume = 1,
                AverageAchTransferAmount = 1,
                AverageCardTransferAmount = 200000,
                BusinessDescription = "Business offering video editing services.",
                CardVolumeDistribution = new CardVolumeDistribution
                {
                    CardPresentPercentage = 30,
                    EcommercePercentage = 60,
                    MailOrderTelephoneOrderPercentage = 10,
                },
                CreditCheckAllowed = true,
                CreditCheckIpAddress = "42.1.1.112",
                CreditCheckTimestamp = "2021-04-28T16:42:55Z",
                CreditCheckUserAgent = "Mozilla 5.0(Macintosh; IntelMac OS X 10_14_6)",
                MerchantAgreementAccepted = true,
                MerchantAgreementIpAddress = "42.1.1.113",
                MerchantAgreementTimestamp = "2021-04-28T16:42:55Z",
                MerchantAgreementUserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)",
                RefundPolicy = RefundPolicy.MerchandiseExchangeOnly,
                VolumeDistributionByBusinessType = new VolumeDistributionByBusinessType
                {
                    BusinessToBusinessVolumePercentage = 100,
                    BusinessToConsumerVolumePercentage = 0,
                    ConsumerToConsumerVolumePercentage = 0,
                    OtherVolumePercentage = 0,
                    PersonToPersonVolumePercentage = 0,
                },
            },
            Entity = new Entity1
            {
                AchMaxTransactionAmount = 1000000,
                AnnualCardVolume = 12000000,
                BusinessAddress = new BusinessAddress1
                {
                    City = "Vancouver",
                    Country = "CAN",
                    Line1 = "456 Elm Avenue",
                    Line2 = "some example string",
                    PostalCode = "V6B 2L2",
                    Region = "BC",
                },
                BusinessName = "Video Editing Services",
                BusinessPhone = "+1 (416) 555-7890",
                BusinessTaxId = "123456789",
                BusinessType = BusinessType.IndividualSoleProprietorship,
                DefaultStatementDescriptor = "Video Services",
                Dob = new Dob { Day = 27, Month = 6, Year = 1978 },
                DoingBusinessAs = "Video Editing Services",
                Email = "info@video-editing-services.com",
                FirstName = "Jerry",
                HasAcceptedCreditCardsPreviously = true,
                IncorporationDate = new IncorporationDate { Day = 27, Month = 6, Year = 1978 },
                LastName = "Dunhill",
                MaxTransactionAmount = 1000000,
                Mcc = "4900",
                OwnershipType = OwnershipType.Private,
                PersonalAddress = new Address
                {
                    Line1 = "987 Milo Street",
                    Line2 = "some example string",
                    City = "Vancouver",
                    Region = "BC",
                    PostalCode = "V5K 1Z5",
                    Country = Country.Can,
                },
                Phone = "14158885080",
                PrincipalPercentageOwnership = 50,
                TaxId = "123456789",
                Title = "CEO",
                Url = "https://www.video-editing-services.com",
            },
            IdentityRoles = [IdentityRole1.Seller],
            Type = Type11.Business,
        },
    });
    // TODO: Handle 'response' of type Identity
}
catch (ApiException<CreateIdentityError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateIdentityRequest](src/FinixApiReference/Requests/Identities/CreateIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Identity](src/FinixApiReference/Models/Identity.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateIdentityError](src/FinixApiReference/Errors/CreateIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Identity&gt; GetIdentity(GetIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a previously created `Identity`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.GetIdentity(new GetIdentityRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Identity
}
catch (ApiException<GetIdentityError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentityRequest](src/FinixApiReference/Requests/Identities/GetIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Identity](src/FinixApiReference/Models/Identity.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetIdentityError](src/FinixApiReference/Errors/GetIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMerchants&gt; GetIdentityMerchant(GetIdentityMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the `Merchant` resource for an `Identity`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.GetIdentityMerchant(new GetIdentityMerchantRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListMerchants
}
catch (ApiException<GetIdentityMerchantError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentityMerchantRequest](src/FinixApiReference/Requests/Identities/GetIdentityMerchantRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchants](src/FinixApiReference/Models/ListMerchants.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetIdentityMerchantError](src/FinixApiReference/Errors/GetIdentityMerchantError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIdentities&gt; ListIdentities(ListIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list the previously created `Identities`.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

{% admonition type="info" %}
If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.ListIdentities(new ListIdentitiesRequest
    {
        BusinessName = "Finix%20Flowers",
        BusinessType = BusinessType5.IndividualSoleProprietorship,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        DefaultStatementDescriptor = "Finix%20Flowers",
        Email = "user@example.org",
        FirstName = "John",
        IdentityRole = IdentityRole.Seller,
        LastName = "Smith",
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        Title = "ceo",
        Type = Type51.Business,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListIdentities
}
catch (ApiException<ListIdentitiesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIdentitiesRequest](src/FinixApiReference/Requests/Identities/ListIdentitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIdentities](src/FinixApiReference/Models/ListIdentities.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListIdentitiesError](src/FinixApiReference/Errors/ListIdentitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIdentities&gt; ListIdentityAssociatedIdentities(ListIdentityAssociatedIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Associated Identities` for an `Identity`.

For details on how to query endpoints using the available parameters, see [Query Parameters.](/api/section/query-parameters)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.ListIdentityAssociatedIdentities(new ListIdentityAssociatedIdentitiesRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        Limit = 10,
    });
    // TODO: Handle 'response' of type ListIdentities
}
catch (ApiException<ListIdentityAssociatedIdentitiesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIdentityAssociatedIdentitiesRequest](src/FinixApiReference/Requests/Identities/ListIdentityAssociatedIdentitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIdentities](src/FinixApiReference/Models/ListIdentities.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListIdentityAssociatedIdentitiesError](src/FinixApiReference/Errors/ListIdentityAssociatedIdentitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Identity&gt; UpdateIdentity(UpdateIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing `Identity`.

If you are updating the `Identity` of a `Merchant` that’s already been onboarded, you need to [verify the merchant again](#operation/createMerchantVerification).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.UpdateIdentity(new UpdateIdentityRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        Body = new UpdateIdentity
        {
            Entity = new Entity8
            {
                Email = "user@example.org",
                FirstName = "John",
                LastName = "Smith",
                Phone = "7145677613",
            },
        },
    });
    // TODO: Handle 'response' of type Identity
}
catch (ApiException<UpdateIdentityError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateIdentityRequest](src/FinixApiReference/Requests/Identities/UpdateIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Identity](src/FinixApiReference/Models/Identity.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateIdentityError](src/FinixApiReference/Errors/UpdateIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MerchantsApi

> Source: [MerchantsApi](src/FinixApiReference/Api/MerchantsApi.cs)

<details>
<summary><code>Task&lt;MerchantSchema&gt; CreateMerchant(CreateMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Merchant` to start the underwriting (also called provisioning) process for your seller. `Merchants` must be created under an [`Identity`](#Identities).

A bank account must be associated with the previously created `Identity` before a `Merchant` can be successfully onboarded and verified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MerchantsApi.CreateMerchant(new CreateMerchantRequest
    {
        IdentityId = "IDoTsv1LvqoXFmXywU6SoiSE",
        FinixVersion = "2022-02-01",
        Body = new MerchantMinimalFields { Processor = ProcessorRequest.DummyV1 },
    });
    // TODO: Handle 'response' of type MerchantSchema
}
catch (ApiException<CreateMerchantError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMerchantRequest](src/FinixApiReference/Requests/MerchantsApi/CreateMerchantRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantSchema](src/FinixApiReference/Models/MerchantSchema.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateMerchantError](src/FinixApiReference/Errors/CreateMerchantError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MerchantVerification&gt; CreateMerchantVerification(CreateMerchantVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Verification` on a Merchant to get them Approved. This request will create a new `PENDING` Verification. Listen to updates and re-fetch the Verification when it is `SUCCEEDED` or `FAILED`.

For handling `FAILED` Verifications, see [Fetch a Verification](/api/verifications/getverification). See also [Onboarding Process](/guides/platform-payments/onboarding-sellers/seller-onboarding-process) for Seller Merchants and [Verification Requirements for Payouts](/guides/payouts/recipient-verification-process) for Recipient Merchants.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MerchantsApi.CreateMerchantVerification(new CreateMerchantVerificationRequest
    {
        MerchantId = "MUiV7ntxfY4eyJxp6E7cZvym",
        FinixVersion = "2022-02-01",
        Body = body,
    });
    // TODO: Handle 'response' of type MerchantVerification
}
catch (ApiException<CreateMerchantVerificationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMerchantVerificationRequest](src/FinixApiReference/Requests/MerchantsApi/CreateMerchantVerificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantVerification](src/FinixApiReference/Models/MerchantVerification.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateMerchantVerificationError](src/FinixApiReference/Errors/CreateMerchantVerificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MerchantSchema&gt; GetMerchant(GetMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a `Merchant`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MerchantsApi.GetMerchant(new GetMerchantRequest
    {
        MerchantId = "MUiV7ntxfY4eyJxp6E7cZvym",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type MerchantSchema
}
catch (ApiException<GetMerchantError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMerchantRequest](src/FinixApiReference/Requests/MerchantsApi/GetMerchantRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantSchema](src/FinixApiReference/Models/MerchantSchema.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetMerchantError](src/FinixApiReference/Errors/GetMerchantError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMerchants&gt; ListMerchants(ListMerchantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Merchant` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MerchantsApi.ListMerchants(new ListMerchantsRequest
    {
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        Country = Country2.Usa,
        Currency = Currency14.Usd,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        IdentityBusinessName = "finix%20flowers",
        IdentityBusinessNameLike = "finix",
        IdentityDoingBusinessAs = "finix%20flowers",
        IdentityDoingBusinessAsLike = "finix",
        IdentityFirstName = "jonathan",
        IdentityFirstNameLike = "jon",
        IdentityId = "ID6ZC4KedcaCwECQcWr7SM4m",
        IdentityLastName = "williams",
        IdentityLastNameLike = "will",
        IdentityRole = IdentityRole9.Seller,
        Mcc = "4900",
        MerchantName = "finix%20flowers",
        MerchantNameLike = "finix",
        ProcessingEnabled = true,
        ProcessorType = ProcessorType.DummyV1,
        SettlementEnabled = true,
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        VerificationId = "VI7jopNSiaVMXWKkhxt6dJm7",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListMerchants
}
catch (ApiException<ListMerchantsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMerchantsRequest](src/FinixApiReference/Requests/MerchantsApi/ListMerchantsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchants](src/FinixApiReference/Models/ListMerchants.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListMerchantsError](src/FinixApiReference/Errors/ListMerchantsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MerchantSchema&gt; UpdateMerchant(UpdateMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a `Merchant` to:
- Change the `Identity` information saved with the underlying processor
- [Enable Level 2/3 processing](/guides/online-payments/payment-features/level-2-level-3-processing)
- Enable [Buyer Charges](/guides/online-payments/payment-features/buyer-charges)
- Enable partial authorizations
- Disable a `Merchant` so the seller can't create new `Transfers` and `Authorizations`
- Disable a `Merchant` so their `Settlements` cannot be approved.
- Enable a `Merchant` to use the Settlement Queue
- Terminate a `Merchant` for suspected fraud, compliance violations, excessive chargebacks, or merchant churn.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MerchantsApi.UpdateMerchant(new UpdateMerchantRequest
    {
        MerchantId = "MUiV7ntxfY4eyJxp6E7cZvym",
        Body = new DisableProcessing(),
    });
    // TODO: Handle 'response' of type MerchantSchema
}
catch (ApiException<UpdateMerchantError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMerchantRequest](src/FinixApiReference/Requests/MerchantsApi/UpdateMerchantRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantSchema](src/FinixApiReference/Models/MerchantSchema.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateMerchantError](src/FinixApiReference/Errors/UpdateMerchantError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Microdeposits

> Source: [Microdeposits](src/FinixApiReference/Api/Microdeposits.cs)

<details>
<summary><code>Task&lt;Microdeposit&gt; GetMicroDeposit(GetMicroDepositRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a Microdeposit to check the verification's status, remaining submission tries, and expiration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Microdeposits.GetMicroDeposit(new GetMicroDepositRequest
    {
        MicrodepositId = "microdeposit_4ek6YXRKJ1fqvs5E4oHNcY",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Microdeposit
}
catch (ApiException<GetMicroDepositError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMicroDepositRequest](src/FinixApiReference/Requests/Microdeposits/GetMicroDepositRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Microdeposit](src/FinixApiReference/Models/Microdeposit.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetMicroDepositError](src/FinixApiReference/Errors/GetMicroDepositError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMicroDeposits&gt; ListMicroDeposits(ListMicroDepositsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of Microdeposit resources. Filter by `payment_instrument_id` to find microdeposits for a specific `Payment Instrument`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Microdeposits.ListMicroDeposits(new ListMicroDepositsRequest
    {
        Limit = 10,
        PaymentInstrumentId = "PIcgYZswyRfqSSbvMsxuaHxZ",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListMicroDeposits
}
catch (ApiException<ListMicroDepositsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMicroDepositsRequest](src/FinixApiReference/Requests/Microdeposits/ListMicroDepositsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMicroDeposits](src/FinixApiReference/Models/ListMicroDeposits.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListMicroDepositsError](src/FinixApiReference/Errors/ListMicroDepositsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OnboardingForms

> Source: [OnboardingForms](src/FinixApiReference/Api/OnboardingForms.cs)

<details>
<summary><code>Task&lt;OnboardingForm&gt; CreateOnboardingForm(CreateOnboardingFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an `Onboarding Form` by entering the processor’s name you want to onboard users to. Also, provide the links to send users after they finish or leave the form.

You can only create an `Onboarding Form` if you have `ROLE_PARTNER` credentials.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OnboardingForms.CreateOnboardingForm(new CreateOnboardingFormRequest
    {
        FinixVersion = "2022-02-01",
        Body = new CreateOnboardingForm
        {
            MerchantProcessors = [new MerchantProcessor { Processor = "DUMMY_V1" }],
            OnboardingData = new OnboardingData { MaxTransactionAmount = 500000 },
            OnboardingLinkDetails = new OnboardingLinkDetails
            {
                ExpiredSessionUrl = "https://www.finixflowers.com/login",
                FeeDetailsUrl = "https://www.finixflowers.com/fee_details",
                ReturnUrl = "https://www.finixflowers.com/home",
                TermsOfServiceUrl = "https://www.finixflowers.com/ToS",
            },
        },
    });
    // TODO: Handle 'response' of type OnboardingForm
}
catch (ApiException<CreateOnboardingFormError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOnboardingFormRequest](src/FinixApiReference/Requests/OnboardingForms/CreateOnboardingFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingForm](src/FinixApiReference/Models/OnboardingForm.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateOnboardingFormError](src/FinixApiReference/Errors/CreateOnboardingFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OnboardingLink&gt; CreateOnboardingFormLink(CreateOnboardingFormLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a link that lets users resume their `Onboarding Form`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OnboardingForms.CreateOnboardingFormLink(new CreateOnboardingFormLinkRequest
    {
        OnboardingFormId = "some example string",
        FinixVersion = "2022-02-01",
        Body = new OnboardingLinkDetails
        {
            ExpirationInMinutes = 10080,
            ExpiredSessionUrl = "https://www.finixflowers.com/login",
            FeeDetailsUrl = "https://www.finixflowers.com/fee_details",
            MerchantMaxTransactionAmount = 100000,
            MerchantAchMaxTransactionAmount = 100000,
            ReturnUrl = "https://www.finixflowers.com/home",
            TermsOfServiceUrl = "https://www.finixflowers.com/ToS",
        },
    });
    // TODO: Handle 'response' of type OnboardingLink
}
catch (ApiException<CreateOnboardingFormLinkError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOnboardingFormLinkRequest](src/FinixApiReference/Requests/OnboardingForms/CreateOnboardingFormLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingLink](src/FinixApiReference/Models/OnboardingLink.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateOnboardingFormLinkError](src/FinixApiReference/Errors/CreateOnboardingFormLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OnboardingForm&gt; GetOnboardingForm(GetOnboardingFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Onboarding Form`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OnboardingForms.GetOnboardingForm(new GetOnboardingFormRequest
    {
        OnboardingFormId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type OnboardingForm
}
catch (ApiException<GetOnboardingFormError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOnboardingFormRequest](src/FinixApiReference/Requests/OnboardingForms/GetOnboardingFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingForm](src/FinixApiReference/Models/OnboardingForm.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetOnboardingFormError](src/FinixApiReference/Errors/GetOnboardingFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentInstrumentAssociations

> Source: [PaymentInstrumentAssociations](src/FinixApiReference/Api/PaymentInstrumentAssociations.cs)

<details>
<summary><code>Task&lt;PaymentInstrumentAssociation&gt; CreatePaymentInstrumentAssociation(CreatePaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Payment Instrument Association` to associate a `Payment Instrument` with a `Merchant` for fee assignment purposes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentAssociations.CreatePaymentInstrumentAssociation(
        new CreatePaymentInstrumentAssociationRequest
        {
            FinixVersion = "2022-02-01",
            Body = new CreatePaymentInstrumentAssociation
            {
                MerchantId = "MUcgYZswyRfqSSbvMsxuaHxZ",
                PaymentInstrumentId = "PInork4cerZvHWYMasYoo8bN",
            },
        });
    // TODO: Handle 'response' of type PaymentInstrumentAssociation
}
catch (ApiException<CreatePaymentInstrumentAssociationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentInstrumentAssociationRequest](src/FinixApiReference/Requests/PaymentInstrumentAssociations/CreatePaymentInstrumentAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentAssociation](src/FinixApiReference/Models/PaymentInstrumentAssociation.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentInstrumentAssociationError](src/FinixApiReference/Errors/CreatePaymentInstrumentAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentAssociation&gt; GetPaymentInstrumentAssociation(GetPaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Payment Instrument Association`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentAssociations.GetPaymentInstrumentAssociation(
        new GetPaymentInstrumentAssociationRequest
        {
            PaymentInstrumentAssociationId = "payment_instrument_association_63r1sMopQ1xwfzyQuTTRSd",
            FinixVersion = "2022-02-01",
        });
    // TODO: Handle 'response' of type PaymentInstrumentAssociation
}
catch (ApiException<GetPaymentInstrumentAssociationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentInstrumentAssociationRequest](src/FinixApiReference/Requests/PaymentInstrumentAssociations/GetPaymentInstrumentAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentAssociation](src/FinixApiReference/Models/PaymentInstrumentAssociation.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetPaymentInstrumentAssociationError](src/FinixApiReference/Errors/GetPaymentInstrumentAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPaymentInstrumentAssociations&gt; ListPaymentInstrumentAssociations(ListPaymentInstrumentAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Payment Instrument Association` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentAssociations.ListPaymentInstrumentAssociations(
        new ListPaymentInstrumentAssociationsRequest
        {
            Limit = 10,
            MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
            PaymentInstrumentId = "PIcgYZswyRfqSSbvMsxuaHxZ",
            ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
            FinixVersion = "2022-02-01",
        });
    // TODO: Handle 'response' of type ListPaymentInstrumentAssociations
}
catch (ApiException<ListPaymentInstrumentAssociationsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPaymentInstrumentAssociationsRequest](src/FinixApiReference/Requests/PaymentInstrumentAssociations/ListPaymentInstrumentAssociationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPaymentInstrumentAssociations](src/FinixApiReference/Models/ListPaymentInstrumentAssociations.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListPaymentInstrumentAssociationsError](src/FinixApiReference/Errors/ListPaymentInstrumentAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentAssociation&gt; UpdatePaymentInstrumentAssociation(UpdatePaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the `tags` of an existing `Payment Instrument Association`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentAssociations.UpdatePaymentInstrumentAssociation(
        new UpdatePaymentInstrumentAssociationRequest
        {
            PaymentInstrumentAssociationId = "payment_instrument_association_63r1sMopQ1xwfzyQuTTRSd",
            FinixVersion = "2022-02-01",
            Body = new UpdatePaymentInstrumentAssociationTags(),
        });
    // TODO: Handle 'response' of type PaymentInstrumentAssociation
}
catch (ApiException<UpdatePaymentInstrumentAssociationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePaymentInstrumentAssociationRequest](src/FinixApiReference/Requests/PaymentInstrumentAssociations/UpdatePaymentInstrumentAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentAssociation](src/FinixApiReference/Models/PaymentInstrumentAssociation.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdatePaymentInstrumentAssociationError](src/FinixApiReference/Errors/UpdatePaymentInstrumentAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentInstrumentsApi

> Source: [PaymentInstrumentsApi](src/FinixApiReference/Api/PaymentInstrumentsApi.cs)

<details>
<summary><code>Task&lt;PaymentInstrumentApplePaySession1&gt; CreateApplePaySession(CreateApplePaySessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an `apple_pay_session` to process Apple Pay transactions on the web.

To create an Apple Pay Session, pass the unique `validation_url` (provided by Apple) while creating an `apple_pay_sessions` resource. Finix returns a `merchantSession` object that you can use to create a payment. For more information, see [Apple Pay](/guides/online-payments/digital-wallets/apple-pay).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.CreateApplePaySession(new CreateApplePaySessionRequest
    {
        FinixVersion = "2022-02-01",
        Body = new PaymentInstrumentApplePaySession
        {
            DisplayName = "Finix Test Merchant",
            Domain = "www.finixtestmerchant.com",
            MerchantIdentity = "IDmULj61C8ke6Y7qQiKENJ7",
            ValidationUrl = "https://apple-pay-gateway-cert.apple.com/paymentservices/paymentSession",
        },
    });
    // TODO: Handle 'response' of type PaymentInstrumentApplePaySession1
}
catch (ApiException<CreateApplePaySessionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateApplePaySessionRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/CreateApplePaySessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentApplePaySession1](src/FinixApiReference/Models/PaymentInstrumentApplePaySession1.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateApplePaySessionError](src/FinixApiReference/Errors/CreateApplePaySessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreatePaymentInstrument&gt; CreatePaymentInstrument(CreatePaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Payment Instrument` resource using a card or bank account.
{% admonition type="warning" name="Payment Instruments PCI Scope" %}
The creation of `Payment Instruments` directly via Finix's API should only be done for testing purposes. You must use [our hosted fields](/guides/online-payments/payment-tokenization/tokenization-forms) or the javascript client to remain out of PCI scope.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.CreatePaymentInstrument(new CreatePaymentInstrumentRequest
    {
        FinixVersion = "2022-02-01",
        Body = new PaymentInstrumentCard1
        {
            Address = new Address
            {
                Line1 = "900 Metro Center Blv",
                City = "San Francisco",
                Region = "CA",
                PostalCode = "94404",
                Country = Country.Usa,
            },
            ExpirationMonth = 12,
            ExpirationYear = 2029,
            Identity = "IDmj1yA97RS4rMjiQgvK3Vio",
            Name = "John Doe",
            Number = "5200828282828210",
            SecurityCode = "022",
        },
    });
    // TODO: Handle 'response' of type CreatePaymentInstrument
}
catch (ApiException<CreatePaymentInstrumentError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentInstrumentRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreatePaymentInstrument](src/FinixApiReference/Models/AnyOf/CreatePaymentInstrument.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentInstrumentError](src/FinixApiReference/Errors/CreatePaymentInstrumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentCard&gt; CreatePaymentInstrumentVerification(CreatePaymentInstrumentVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify a `Payment Instrument` to determine CVV, AVS, and name verification results.

{% admonition type="warning" name="PCI Scope Restriction" %}
CVV submission is only available to PCI-compliant merchants. Non-PCI customers should not collect and pass CVV in this request.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.CreatePaymentInstrumentVerification(
        new CreatePaymentInstrumentVerificationRequest
        {
            PaymentInstrumentIdVerify = "PIhWqjo3DU13WmFzWZFLngfa",
            Body = new CvvVerification
            {
                Merchant = "MUcgYZswyRfqSSbvMsxuaHxZ",
                SecurityCode = "123",
                VerifyPaymentCard = true,
            },
        });
    // TODO: Handle 'response' of type PaymentInstrumentCard
}
catch (ApiException<CreatePaymentInstrumentVerificationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentInstrumentVerificationRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentVerificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentCard](src/FinixApiReference/Models/PaymentInstrumentCard.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentInstrumentVerificationError](src/FinixApiReference/Errors/CreatePaymentInstrumentVerificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentVerification&gt; CreatePaymentInstrumentVerificationPushToCard(CreatePaymentInstrumentVerificationPushToCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determine Push To Card eligibility for [Push To Card](/guides/payouts/card-payouts) customers.

Additionally, the cardholder's name is verified with the issuing bank, and the result is shown in `name_verification_results`. This applies to Visa and Mastercard.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.CreatePaymentInstrumentVerificationPushToCard(
        new CreatePaymentInstrumentVerificationPushToCardRequest
        {
            PaymentInstrumentIdVerify = "PIhWqjo3DU13WmFzWZFLngfa",
            Body = new PushToCardEligibility { Processor = Processor3.DummyV1 },
        });
    // TODO: Handle 'response' of type PaymentInstrumentVerification
}
catch (ApiException<CreatePaymentInstrumentVerificationPushToCardError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentInstrumentVerificationPushToCardRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentVerificationPushToCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentVerification](src/FinixApiReference/Models/PaymentInstrumentVerification.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreatePaymentInstrumentVerificationPushToCardError](src/FinixApiReference/Errors/CreatePaymentInstrumentVerificationPushToCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentsResponse&gt; GetPaymentInstrument(GetPaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Payment Instrument`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.GetPaymentInstrument(new GetPaymentInstrumentRequest
    {
        PaymentInstrumentId = "PIhWqjo3DU13WmFzWZFLngfa",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type PaymentInstrumentsResponse
}
catch (ApiException<GetPaymentInstrumentError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentInstrumentRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/GetPaymentInstrumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentsResponse](src/FinixApiReference/Models/AnyOf/PaymentInstrumentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetPaymentInstrumentError](src/FinixApiReference/Errors/GetPaymentInstrumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListInstrumentHistoryEntries&gt; ListInstrumentHistoryEntries(ListInstrumentHistoryEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whenever a stored payment card's details are updated, an `Instrument History Entry` is created. Use this endpoint to retrieve a list of `Instrument History Entries` for a specific `Payment Instrument`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.ListInstrumentHistoryEntries(
        new ListInstrumentHistoryEntriesRequest
        {
            PaymentInstrumentId = "some example string",
            Limit = 10,
            FinixVersion = "2022-02-01",
        });
    // TODO: Handle 'response' of type ListInstrumentHistoryEntries
}
catch (ApiException<ListInstrumentHistoryEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInstrumentHistoryEntriesRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/ListInstrumentHistoryEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInstrumentHistoryEntries](src/FinixApiReference/Models/ListInstrumentHistoryEntries.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListInstrumentHistoryEntriesError](src/FinixApiReference/Errors/ListInstrumentHistoryEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPaymentInstruments&gt; ListPaymentInstruments(ListPaymentInstrumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Payment Instrument` resources.

For details on how to query endpoints using the available parameters, see [Query Parameters.](/api/section/query-parameters)

{% admonition type="info" %}
If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.ListPaymentInstruments(new ListPaymentInstrumentsRequest
    {
        AccountLast4 = "4242",
        AccountRoutingNumber = "9444",
        Bin = "411111",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        ExpirationMonth = "9",
        ExpirationYear = "2029",
        Last4 = "0454",
        Limit = 10,
        OwnerIdentityId = "IDcWwprrKrD6cSh225JWPri3",
        Type = Type52.BankAccount,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListPaymentInstruments
}
catch (ApiException<ListPaymentInstrumentsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPaymentInstrumentsRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/ListPaymentInstrumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPaymentInstruments](src/FinixApiReference/Models/ListPaymentInstruments.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListPaymentInstrumentsError](src/FinixApiReference/Errors/ListPaymentInstrumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentInstrumentsResponse1&gt; UpdatePaymentInstrument(UpdatePaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a `Payment Instrument` to:
- Change the **billing address** in case the account holder moved (`instrument_type`:**PAYMENT_CARD** only).
- Disable the `Payment Instrument` resource so it can't be used in requests.
- Update the `name` on the `Payment Instrument`.
- Change the `tags`.
- Enable or disable **Account Updater**.
- Enable or disable **Network Tokens**.
- Update the **expiration date** (`instrument_type`:**PAYMENT_CARD** only).
- Verify a [Microdeposit](/guides/online-payments/bank-payments/microdeposit-verification) code (`instrument_type: BANK_ACCOUNT` only).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentInstrumentsApi.UpdatePaymentInstrument(new UpdatePaymentInstrumentRequest
    {
        PaymentInstrumentId = "PIhWqjo3DU13WmFzWZFLngfa",
        Body = new PaymentInstrumentDisableAPaymentInstrument { Enabled = false },
    });
    // TODO: Handle 'response' of type PaymentInstrumentsResponse1
}
catch (ApiException<UpdatePaymentInstrumentError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePaymentInstrumentRequest](src/FinixApiReference/Requests/PaymentInstrumentsApi/UpdatePaymentInstrumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentsResponse1](src/FinixApiReference/Models/AnyOf/PaymentInstrumentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdatePaymentInstrumentError](src/FinixApiReference/Errors/UpdatePaymentInstrumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Receipts

> Source: [Receipts](src/FinixApiReference/Api/Receipts.cs)

<details>
<summary><code>Task&lt;Receipt&gt; CreateReceipt(CreateReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Receipt` resource to generate a receipt for a
[Transfer](#Transfers) or [Authorization](#Authorizations). Receipts are
supported for `DEBIT` and `REVERSAL` transfers, as well as `CREDIT` transfers
from [unreferenced refunds](/guides/after-the-payment/refunds#unreferenced-refunds).

Include basic details such as total amount, buyer billing information, merchant
name, and contact info.

Optionally, provide:

- an `amount_breakdown` of charges like subtotal, shipping, and surcharges
- an `items` list with product name, description, price, and quantity
- `customization_details` for structured data in the receipt header (`subheader_attributes`) and free-form text arrays above or below the receipt line items (`summary_sections` and `footer_sections`).
- `additional_details` as an array of key-value pairs to capture extra metadata, such as "Invoice Number" or "Service Date". `additional_details` is mutually exclusive with `customization_details.subheader_attributes`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipts.CreateReceipt(new CreateReceiptRequest
    {
        FinixVersion = "2022-02-01",
        Body = new ReceiptMinimalFields { EntityId = "TRnErBfrHLgdAi3BqAkWLN27", SendReceiptToBuyer = true },
    });
    // TODO: Handle 'response' of type Receipt
}
catch (ApiException<CreateReceiptError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateReceiptRequest](src/FinixApiReference/Requests/Receipts/CreateReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Receipt](src/FinixApiReference/Models/Receipt.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateReceiptError](src/FinixApiReference/Errors/CreateReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateReceiptDeliveryAttempt(CreateReceiptDeliveryAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Delivery Attempt` on an existing `Receipt` resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Receipts.CreateReceiptDeliveryAttempt(new CreateReceiptDeliveryAttemptRequest
    {
        ReceiptId = "some example string",
        FinixVersion = "2022-02-01",
        Body = new CreateReceiptDeliveryAttempt
        {
            RequestedDeliveryMethods = [
                new RequestedDeliveryMethod1 { Destinations = ["larrywilliams@gmail.com"], Type = Type1.Email },
                new RequestedDeliveryMethod1 { Destinations = ["8005550100"], Type = Type1.Sms },
                new RequestedDeliveryMethod1 { Destinations = ["DVsEanpBtsAVvCHbNXkFaH6f"], Type = Type1.Print },
            ],
        },
    });
}
catch (ApiException<CreateReceiptDeliveryAttemptError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateReceiptDeliveryAttemptRequest](src/FinixApiReference/Requests/Receipts/CreateReceiptDeliveryAttemptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateReceiptDeliveryAttemptError](src/FinixApiReference/Errors/CreateReceiptDeliveryAttemptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Receipt&gt; GetReceipt(GetReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Receipt`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipts.GetReceipt(new GetReceiptRequest
    {
        ReceiptId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Receipt
}
catch (ApiException<GetReceiptError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReceiptRequest](src/FinixApiReference/Requests/Receipts/GetReceiptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Receipt](src/FinixApiReference/Models/Receipt.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetReceiptError](src/FinixApiReference/Errors/GetReceiptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListReceiptDeliveryAttempts&gt; ListReceiptDeliveryAttempts(ListReceiptDeliveryAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Delivery Attempts for a Receipt resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Receipts.ListReceiptDeliveryAttempts(new ListReceiptDeliveryAttemptsRequest
    {
        ReceiptId = "some example string",
        Limit = 10,
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListReceiptDeliveryAttempts
}
catch (ApiException<ListReceiptDeliveryAttemptsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReceiptDeliveryAttemptsRequest](src/FinixApiReference/Requests/Receipts/ListReceiptDeliveryAttemptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListReceiptDeliveryAttempts](src/FinixApiReference/Models/ListReceiptDeliveryAttempts.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListReceiptDeliveryAttemptsError](src/FinixApiReference/Errors/ListReceiptDeliveryAttemptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementQueueEntries

> Source: [SettlementQueueEntries](src/FinixApiReference/Api/SettlementQueueEntries.cs)

<details>
<summary><code>Task&lt;SettlementQueueEntry&gt; GetSettlementQueueEntry(GetSettlementQueueEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a `Settlement Queue Entry` created from a `Transfer`, `Fee`, or `Reversal`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementQueueEntries.GetSettlementQueueEntry(new GetSettlementQueueEntryRequest
    {
        SettlementQueueEntryId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type SettlementQueueEntry
}
catch (ApiException<GetSettlementQueueEntryError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSettlementQueueEntryRequest](src/FinixApiReference/Requests/SettlementQueueEntries/GetSettlementQueueEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettlementQueueEntry](src/FinixApiReference/Models/SettlementQueueEntry.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetSettlementQueueEntryError](src/FinixApiReference/Errors/GetSettlementQueueEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlementQueueEntries&gt; ListSettlementQueueEntries(ListSettlementQueueEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Settlement Queue Entry` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementQueueEntries.ListSettlementQueueEntries(new ListSettlementQueueEntriesRequest
    {
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        EntityId = "TRdhp3DszqDKbNvwtn7DDcUi",
        EntityType = EntityType9.Transfer,
        Limit = 10,
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        ReadyToSettleAfterGte = DateTimeOffset.Parse("2023-06-28T00:00:00Z"),
        ReadyToSettleAfterLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        State = State23.Pending,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSettlementQueueEntries
}
catch (ApiException<ListSettlementQueueEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementQueueEntriesRequest](src/FinixApiReference/Requests/SettlementQueueEntries/ListSettlementQueueEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlementQueueEntries](src/FinixApiReference/Models/ListSettlementQueueEntries.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementQueueEntriesError](src/FinixApiReference/Errors/ListSettlementQueueEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSettlementQueueEntries(UpdateSettlementQueueEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This action is used to release a number of `Settlement Queue Entry` resources, allowing them to be included in a `Settlement` as `Settlement Entry` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SettlementQueueEntries.UpdateSettlementQueueEntries(new UpdateSettlementQueueEntriesRequest
    {
        FinixVersion = "2022-02-01",
        Body = new ReleaseSettlementQueueEntries
        {
            Action = ActionEnum.Release,
            Ids = ["settlement_queue_entry_cpuisfQBnnRf7vrxUzo2M", "settlement_queue_entry_cpuisgcFNiNtBmC4rm4z9"],
        },
    });
}
catch (ApiException<UpdateSettlementQueueEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSettlementQueueEntriesRequest](src/FinixApiReference/Requests/SettlementQueueEntries/UpdateSettlementQueueEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateSettlementQueueEntriesError](src/FinixApiReference/Errors/UpdateSettlementQueueEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementsApi

> Source: [SettlementsApi](src/FinixApiReference/Api/SettlementsApi.cs)

<details>
<summary><code>Task&lt;Settlement&gt; Closesettlements(ClosesettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close an accruing `Settlement`. Finix, by default, creates accruing settlements then closes them based on your payout configurations. Use this endpoint to manually close a specific `settlement`.

The closed `Settlement` will not accrue any further transactions and gets immediately submitted for approval.

*Important Notes*:
- This endpoint is only available to Finix Core customers. If you have any questions, please contact the [Finix Support Team](mailto:support@finix.com).
- Any refunded `Transfers` get included in `Settlements` as a deduction.
- **PENDING** `Transfers` don't get included in `Settlements`.
- The `total_amount` minus the `total_fee` equals the `net_amount`. The `net_amount` is the amount in cents that gets deposited into the seller's bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.Closesettlements(new ClosesettlementsRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        Body = new CloseSettlement(),
    });
    // TODO: Handle 'response' of type Settlement
}
catch (ApiException<ClosesettlementsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClosesettlementsRequest](src/FinixApiReference/Requests/SettlementsApi/ClosesettlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settlement](src/FinixApiReference/Models/Settlement.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ClosesettlementsError](src/FinixApiReference/Errors/ClosesettlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettlementFundingTransferAttempt&gt; CreateSettlementFundingTransferAttempt(CreateSettlementFundingTransferAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Funding Transfer Attempt` for this `Settlement`. Funding transfer attempts are used to submit funds for instant payout.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.CreateSettlementFundingTransferAttempt(
        new CreateSettlementFundingTransferAttemptRequest
        {
            SettlementId = "STcAm13tv77jyt5n3KQ553X",
            FinixVersion = "2022-02-01",
            Body = new CreateSettlementFundingTransferAttempt
            {
                Amount = 101059d,
                InstrumentId = "PItzrwXcHBsEC9TLL1JHAB2Z",
            },
        });
    // TODO: Handle 'response' of type SettlementFundingTransferAttempt
}
catch (ApiException<CreateSettlementFundingTransferAttemptError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSettlementFundingTransferAttemptRequest](src/FinixApiReference/Requests/SettlementsApi/CreateSettlementFundingTransferAttemptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettlementFundingTransferAttempt](src/FinixApiReference/Models/SettlementFundingTransferAttempt.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateSettlementFundingTransferAttemptError](src/FinixApiReference/Errors/CreateSettlementFundingTransferAttemptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Settlement&gt; GetSettlement(GetSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Settlement`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.GetSettlement(new GetSettlementRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Settlement
}
catch (ApiException<GetSettlementError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSettlementRequest](src/FinixApiReference/Requests/SettlementsApi/GetSettlementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settlement](src/FinixApiReference/Models/Settlement.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetSettlementError](src/FinixApiReference/Errors/GetSettlementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFees&gt; ListSettlementFees(ListSettlementFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of [Fee](/api/fees) resources belonging to a `Settlement`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.ListSettlementFees(new ListSettlementFeesRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListFees
}
catch (ApiException<ListSettlementFeesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementFeesRequest](src/FinixApiReference/Requests/SettlementsApi/ListSettlementFeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFees](src/FinixApiReference/Models/ListFees.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementFeesError](src/FinixApiReference/Errors/ListSettlementFeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlementFundingTransferAttempts&gt; ListSettlementFundingTransferAttempts(ListSettlementFundingTransferAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all settlement `Funding Transfer Attempt` resources associated for the `Settlement`. A `Funding Transfer Attempt` resource is created when [requesting an instant payout of funds](/api/settlements/createsettlementfundingtransferattempt) for the `Settlement`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.ListSettlementFundingTransferAttempts(
        new ListSettlementFundingTransferAttemptsRequest
        {
            SettlementId = "STcAm13tv77jyt5n3KQ553X",
            CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
            CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
            Limit = 10,
            TagsKey = "card_type",
            TagsValue = "business_card",
            UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
            UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
            FinixVersion = "2022-02-01",
        });
    // TODO: Handle 'response' of type ListSettlementFundingTransferAttempts
}
catch (ApiException<ListSettlementFundingTransferAttemptsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementFundingTransferAttemptsRequest](src/FinixApiReference/Requests/SettlementsApi/ListSettlementFundingTransferAttemptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlementFundingTransferAttempts](src/FinixApiReference/Models/ListSettlementFundingTransferAttempts.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementFundingTransferAttemptsError](src/FinixApiReference/Errors/ListSettlementFundingTransferAttemptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlementFundingTransfers&gt; ListSettlementFundingTransfers(ListSettlementFundingTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the funding `Transfer` resources created when a `Settlement` was approved with a `type` of `CREDIT` or `DEBIT`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.ListSettlementFundingTransfers(new ListSettlementFundingTransfersRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSettlementFundingTransfers
}
catch (ApiException<ListSettlementFundingTransfersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementFundingTransfersRequest](src/FinixApiReference/Requests/SettlementsApi/ListSettlementFundingTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlementFundingTransfers](src/FinixApiReference/Models/ListSettlementFundingTransfers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementFundingTransfersError](src/FinixApiReference/Errors/ListSettlementFundingTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlementTransfers&gt; ListSettlementTransfers(ListSettlementTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ##### <u>This endpoint is deprecated</u>.<br/>
> Use [List all Entries in a Settlement](/api/settlements/listsettlemententries) instead.
---

Retrieve a list of every `Transfer` in a `Settlement` that has a `type` of `DEBIT` or `REFUND`. This is not an exhaustive list of everything that comprises a settlement. We recommend using  [List Settlement Entries](#operation/listSettlementEntries).

For details on how to query endpoints using the available parameters, see [Query Parameters.](/api/section/query-parameters)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.ListSettlementTransfers(new ListSettlementTransfersRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSettlementTransfers
}
catch (ApiException<ListSettlementTransfersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementTransfersRequest](src/FinixApiReference/Requests/SettlementsApi/ListSettlementTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlementTransfers](src/FinixApiReference/Models/ListSettlementTransfers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementTransfersError](src/FinixApiReference/Errors/ListSettlementTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlements&gt; ListSettlements(ListSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Settlement` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.ListSettlements(new ListSettlementsRequest
    {
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        TagsKey = "card_type",
        TagsValue = "business_card",
        TotalAmountLte = 2000,
        TotalAmountLt = 2000,
        TotalAmountGte = 2,
        TotalAmountGt = 2,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSettlements
}
catch (ApiException<ListSettlementsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSettlementsRequest](src/FinixApiReference/Requests/SettlementsApi/ListSettlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlements](src/FinixApiReference/Models/ListSettlements.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSettlementsError](src/FinixApiReference/Errors/ListSettlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSettlementEntries&gt; Listsettlemententries(ListsettlemententriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of every `Settlement Entry` in a `Settlement`. A `Settlement Entry` is an object that describes the item inside of a `Settlement`.

A `Settlement Entry` can represent a [Transfer](/api/transfers), custom [Fee](/api/fees), or [Split Transfer](/api/split-transfers).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SettlementsApi.Listsettlemententries(new ListsettlemententriesRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSettlementEntries
}
catch (ApiException<ListsettlemententriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListsettlemententriesRequest](src/FinixApiReference/Requests/SettlementsApi/ListsettlemententriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSettlementEntries](src/FinixApiReference/Models/ListSettlementEntries.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListsettlemententriesError](src/FinixApiReference/Errors/ListsettlemententriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveSettlementEntries(RemoveSettlementEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a `Settlement Entry` or list of `Settlement Entries` that make up a `Settlement`.

As long as the `Settlement` has not been funded, you can remove the `Settlement Entry` or an array of `Settlement Entries`, along with its corresponding fee entry from the encompassing `Settlement`.

The response body is empty after sending a successful delete request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SettlementsApi.RemoveSettlementEntries(new RemoveSettlementEntriesRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        FinixVersion = "2022-02-01",
        Body = new RemoveSettlementEntries { SettlementEntryIds = ["SEivAwLLW6c62Nbvvj7TcDAN"] },
    });
}
catch (ApiException<RemoveSettlementEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveSettlementEntriesRequest](src/FinixApiReference/Requests/SettlementsApi/RemoveSettlementEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[RemoveSettlementEntriesError](src/FinixApiReference/Errors/RemoveSettlementEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveSettlementTransfers(RemoveSettlementTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> ##### <u>This endpoint is deprecated</u>.<br/>
> Use [Delete Settlement Entries](/api/settlements/removeSettlementEntries) instead.
---

Remove one or more `Transfer` objects that make up a `Settlement`.

As long as the `Settlement` has not been funded, you can remove the `Transfer` or an array of `Transfers`, along with its corresponding `Fee` from the encompassing `Settlement`.

Funding `transfers` cannot be deleted.

The response body is empty after sending a successful delete request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SettlementsApi.RemoveSettlementTransfers(new RemoveSettlementTransfersRequest
    {
        SettlementId = "STcAm13tv77jyt5n3KQ553X",
        FinixVersion = "2022-02-01",
        Body = new DeleteSettlementTransfers { Transfers = ["TRr61njQxaa7AJf6E1C3QwCc"] },
    });
}
catch (ApiException<RemoveSettlementTransfersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveSettlementTransfersRequest](src/FinixApiReference/Requests/SettlementsApi/RemoveSettlementTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[RemoveSettlementTransfersError](src/FinixApiReference/Errors/RemoveSettlementTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SplitTransfers

> Source: [SplitTransfers](src/FinixApiReference/Api/SplitTransfers.cs)

<details>
<summary><code>Task&lt;SplitTransfer&gt; GetSplitTransfer(GetSplitTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a `Split Transfer` that was created from a split transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SplitTransfers.GetSplitTransfer(new GetSplitTransferRequest
    {
        SplitTransferId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type SplitTransfer
}
catch (ApiException<GetSplitTransferError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSplitTransferRequest](src/FinixApiReference/Requests/SplitTransfers/GetSplitTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitTransfer](src/FinixApiReference/Models/SplitTransfer.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetSplitTransferError](src/FinixApiReference/Errors/GetSplitTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFees&gt; ListFees(ListFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Fee` resources.

**Filter fees by linked entity**: You can filter fees by the entity that generated them using the `linked_to` query parameter:

- Transfer fees: `?linked_to=TRnErBfrHLgdAi3BqAkWLN27`
- Authorization fees: `?linked_to=AUg8unYpnWBEY1AdVUDkdQYJ`
- Split transfer fees: `?linked_to=split_transfer_split_transfer_97gaitUpcmzqjYYpQbei9j`
- Compliance Form fees: `?linked_to=cf_uwErNm23TKYNEiqrEdJK59`
- Payment Instrument fees: `?linked_to=PInVUXZLswZi6pdcK1T41MuE`
- Merchant-specific fees: `?linked_to=MUwfZPNW3r4EqLMzwgr6txw4`

{% admonition type="info" %}
Merchant-specific fees include monthly dues and assessments and any [custom fees](/api/fees/createfee).
{% /admonition %}

**To show fees charged to a specific entity during a period**, pass the `created_at.gte` and `created_at.lte` query parameters.
- Example: `?merchant_id=MUeDVrf2ahuKc9Eg5TeZugvs&created_at.lte=2025-01-01&created_at.gte=2025-02-01`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SplitTransfers.ListFees(new ListFeesRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        LinkedTo = "TRrB2VG7H84LmRgSTkfR2Cb6",
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListFees
}
catch (ApiException<ListFeesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFeesRequest](src/FinixApiReference/Requests/FeesApi/ListFeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFees](src/FinixApiReference/Models/ListFees.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListFeesError](src/FinixApiReference/Errors/ListFeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSplitTransfers&gt; ListSplitTransfers(ListSplitTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Split Transfer` resources created for a specific split `Transfer`.

For more information, see our [Split Transactions](/guides/online-payments/payment-features/split-transactions) guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SplitTransfers.ListSplitTransfers(new ListSplitTransfersRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSplitTransfers
}
catch (ApiException<ListSplitTransfersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSplitTransfersRequest](src/FinixApiReference/Requests/SplitTransfers/ListSplitTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSplitTransfers](src/FinixApiReference/Models/ListSplitTransfers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSplitTransfersError](src/FinixApiReference/Errors/ListSplitTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionPlans

> Source: [SubscriptionPlans](src/FinixApiReference/Api/SubscriptionPlans.cs)

<details>
<summary><code>Task&lt;SubscriptionPlan&gt; CreateSubscriptionPlan(CreateSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Subscription Plan` resource to group and manage recurring payments for individual `Subscription` resources. You can create a `Subscription Plan` with or without a trial period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SubscriptionPlans.CreateSubscriptionPlan(new CreateSubscriptionPlanRequest
    {
        FinixVersion = "2022-02-01",
        Body = new CreateSubscriptionPlan
        {
            Amount = 19900L,
            BillingDefaults = new BillingDefaults1 { CollectionMethod = CollectionMethod1.BillAutomatically },
            BillingInterval = BillingInterval.Monthly,
            Description = "A basic API portal account with the least features.",
            LinkedTo = "MUwfZPNW3r4EqLMzwgr6txw4",
            PlanName = "API portal - Basic",
        },
    });
    // TODO: Handle 'response' of type SubscriptionPlan
}
catch (ApiException<CreateSubscriptionPlanError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionPlanRequest](src/FinixApiReference/Requests/SubscriptionPlans/CreateSubscriptionPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionPlan](src/FinixApiReference/Models/SubscriptionPlan.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateSubscriptionPlanError](src/FinixApiReference/Errors/CreateSubscriptionPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionPlan&gt; GetSubscriptionPlan(GetSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Subscription Plan`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SubscriptionPlans.GetSubscriptionPlan(new GetSubscriptionPlanRequest
    {
        SubscriptionPlanId = "subscription_plan_cAqNsG7EbVUgqvV3JGhR7",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type SubscriptionPlan
}
catch (ApiException<GetSubscriptionPlanError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscriptionPlanRequest](src/FinixApiReference/Requests/SubscriptionPlans/GetSubscriptionPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionPlan](src/FinixApiReference/Models/SubscriptionPlan.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetSubscriptionPlanError](src/FinixApiReference/Errors/GetSubscriptionPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSubscriptionPlans&gt; ListSubscriptionPlans(ListSubscriptionPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Subscription Plan` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SubscriptionPlans.ListSubscriptionPlans(new ListSubscriptionPlansRequest
    {
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        Amount = 100,
        LinkedTo = "MUcgYZswyRfqSSbvMsxuaHxZ",
        State = "INACTIVE",
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSubscriptionPlans
}
catch (ApiException<ListSubscriptionPlansError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSubscriptionPlansRequest](src/FinixApiReference/Requests/SubscriptionPlans/ListSubscriptionPlansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptionPlans](src/FinixApiReference/Models/ListSubscriptionPlans.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSubscriptionPlansError](src/FinixApiReference/Errors/ListSubscriptionPlansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionPlan&gt; UpdateSubscriptionPlan(UpdateSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing `Subscription Plan`.

Options:
- Set `update_existing_subscriptions` to `true` to update existing subscriptions.
- Archive the `Subscription Plan` by setting its `state` to `INACTIVE`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SubscriptionPlans.UpdateSubscriptionPlan(new UpdateSubscriptionPlanRequest
    {
        SubscriptionPlanId = "subscription_plan_cAqNsG7EbVUgqvV3JGhR7",
        Body = new UpdateSubscriptionPlan
        {
            Amount = 19900L,
            Description = "A starter plan with minimal features",
            Nickname = "API portal - Basic plan",
            UpdateExistingSubscriptions = true,
        },
    });
    // TODO: Handle 'response' of type SubscriptionPlan
}
catch (ApiException<UpdateSubscriptionPlanError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionPlanRequest](src/FinixApiReference/Requests/SubscriptionPlans/UpdateSubscriptionPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionPlan](src/FinixApiReference/Models/SubscriptionPlan.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriptionPlanError](src/FinixApiReference/Errors/UpdateSubscriptionPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/FinixApiReference/Api/Subscriptions.cs)

<details>
<summary><code>Task&lt;Subscription&gt; CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Subscription` to charge a [Payment Instrument](/api/payment-instruments) on a recurring schedule. Without a trial period, the first [Transfer](/api/transfers) is created within 60 minutes of the `Subscription` being created.

**Optional features:**
- **Trial period** - include `trial_details` to delay the first charge; `first_charge_at` in the response shows when billing begins. If the `Subscription` is based on a [Subscription Plan](/api/subscription-plans), `trial_details` do not override those from the plan.
- **Discount phase** - include `discount_phase_details` with a reduced `amount` and a `billing_interval_count` to apply a discounted price for a set number of cycles before full billing resumes. If the `Subscription` is based on a [Subscription Plan](/api/subscription-plans), `discount_phase_details` do not override the plan's values.
- **Subscription Plan** - provide a `subscription_plan_id` to base the `Subscription` on a [Subscription Plan](/api/subscription-plans) template (inherits `amount`, `billing_interval`, and more). You cannot set the `amount` field when you use a `Subscription Plan`.
- **Future start** - set `start_subscription_at` to a future timestamp; the `Subscription` starts in state `NOT_STARTED` with `subscription_phase: NONE`.
- **Billing cycle day** - set `billing_cycle_day` to control which day of the month billing occurs for monthly-cycle subscriptions (e.g., `MONTHLY`, `BIMONTHLY`, `QUARTERLY`, `SEMIYEARLY`, `YEARLY`, `BIYEARLY`, `TRIYEARLY`). If the start date doesn't match the billing cycle day, the first invoice is prorated.
- **Fixed length** - set `total_billing_intervals` to expire the `Subscription` after a fixed number of billing cycles.

{% admonition type="info" %}
When the [Payment Instrument](/api/payment-instruments) › `type` is `PAYMENT_CARD`, `APPLE_PAY`, or `GOOGLE_PAY`, Finix runs a $0.01 `Authorization` to validate the card (AVS and CVV). If validation fails, the API returns `422` and the `Subscription` is not created.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.CreateSubscription(new CreateSubscriptionRequest
    {
        FinixVersion = "2022-02-01",
        Body = new SubscriptionMinimalFields
        {
            Amount = 1L,
            BillingInterval = BillingInterval.Bimonthly,
            BuyerDetails = new BuyerDetails4 { IdentityId = "some example string", InstrumentId = instrumentId },
            Currency = Currency.Cad,
            LinkedTo = "some example string",
            SubscriptionDetails = new SubscriptionDetails1(),
        },
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<CreateSubscriptionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionRequest](src/FinixApiReference/Requests/Subscriptions/CreateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/FinixApiReference/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateSubscriptionError](src/FinixApiReference/Errors/CreateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionBalanceEntry&gt; CreateSubscriptionBalanceEntry(CreateSubscriptionBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Subscription Balance Entry`. A `Subscription Balance Entry` represents a credit applied to a `Subscription`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.CreateSubscriptionBalanceEntry(new CreateSubscriptionBalanceEntryRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        FinixVersion = "2022-02-01",
        Body = new SubscriptionBalanceEntry1
        {
            Amount = 1000L,
            Currency = Currency11.Usd,
            Description = "Applying a credit since I accidentally overcharged this subscription.",
        },
    });
    // TODO: Handle 'response' of type SubscriptionBalanceEntry
}
catch (ApiException<CreateSubscriptionBalanceEntryError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionBalanceEntryRequest](src/FinixApiReference/Requests/Subscriptions/CreateSubscriptionBalanceEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionBalanceEntry](src/FinixApiReference/Models/SubscriptionBalanceEntry.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateSubscriptionBalanceEntryError](src/FinixApiReference/Errors/CreateSubscriptionBalanceEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; GetSubscription(GetSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a previously created `Subscription`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.GetSubscription(new GetSubscriptionRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<GetSubscriptionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscriptionRequest](src/FinixApiReference/Requests/Subscriptions/GetSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/FinixApiReference/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetSubscriptionError](src/FinixApiReference/Errors/GetSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSubscriptionBalanceEntries&gt; ListSubscriptionBalanceEntries(ListSubscriptionBalanceEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Subscription Balance Entry` resources to view a timeline of all changes to a `Subscription` balance by a user. Currently, only credits can modify a `Subscription` balance.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/overview/#section/Query-Parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.ListSubscriptionBalanceEntries(new ListSubscriptionBalanceEntriesRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        Amount = 100,
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSubscriptionBalanceEntries
}
catch (ApiException<ListSubscriptionBalanceEntriesError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSubscriptionBalanceEntriesRequest](src/FinixApiReference/Requests/Subscriptions/ListSubscriptionBalanceEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptionBalanceEntries](src/FinixApiReference/Models/ListSubscriptionBalanceEntries.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSubscriptionBalanceEntriesError](src/FinixApiReference/Errors/ListSubscriptionBalanceEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSubscriptions&gt; ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Subscription` resources.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.ListSubscriptions(new ListSubscriptionsRequest
    {
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        Amount = 100,
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        BillingInterval = BillingInterval1.Monthly,
        BuyerIdentityId = "ID6Qm3BQUxGFcCWZ185TS8sn",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        LinkedTo = "MUcgYZswyRfqSSbvMsxuaHxZ",
        State = "NOT_STARTED",
        SubscriptionLinkId = "subscription_link_cvTp2K5CNH9Lr4BqCphcM",
        SubscriptionPlanId = "subscription_plan_ciLn19pSKDTFoehtH7ET",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListSubscriptions
}
catch (ApiException<ListSubscriptionsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSubscriptionsRequest](src/FinixApiReference/Requests/Subscriptions/ListSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptions](src/FinixApiReference/Models/ListSubscriptions.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListSubscriptionsError](src/FinixApiReference/Errors/ListSubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveSubscription(RemoveSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a `Subscription`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Subscriptions.RemoveSubscription(new RemoveSubscriptionRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        FinixVersion = "2022-02-01",
    });
}
catch (ApiException<RemoveSubscriptionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveSubscriptionRequest](src/FinixApiReference/Requests/Subscriptions/RemoveSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[RemoveSubscriptionError](src/FinixApiReference/Errors/RemoveSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Subscription&gt; UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing `Subscription` resource, typically used for subscriptions created without a `Subscription Plan`. Note that you can only update specific resource fields.

Common use cases for updating a `Subscription` include:

### Updating the payment amount

This operation allows for adjusting the payment amount, such as when a subscriber decides to donate more or less money to a charity or upgrade/downgrade a product or service.

### Updating billing details

If the subscriber wishes to change their payment details, you can update the [`buyer_details.instrument_id`] property with a new [`Payment Instrument`](#Payment-Instruments).

### Updating the billing cycle day

Set `billing_cycle_day` to change the day of the month the `Subscription` bills. Invoices that have already been issued do not change, and the current billing period completes at the full amount. On the next billing date, the buyer is charged a prorated amount that bridges the gap to the new billing cycle day, then full billing resumes. To learn more, see [Billing cycle day](/guides/subscriptions/subscriptions-quickstart#billing-cycle-day).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.UpdateSubscription(new UpdateSubscriptionRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        Body = new UpdateSubscription
        {
            Amount = 12000L,
            BuyerDetails = new BuyerDetails3
            {
                RequestedDeliveryMethods = [
                    new ReceiptRequestedDeliveryMethod { Type = Type22.Email, Destinations = ["test@gmail.com"] },
                ],
                ShippingAddress = new Address
                {
                    Line1 = "324 Oak Avenue",
                    Line2 = "Apartment 7",
                    City = "Middletown",
                    Region = "DE",
                    PostalCode = "19734",
                    Country = Country.Usa,
                },
            },
            Nickname = "Finflix Gold Package",
            SubscriptionDetails = new SubscriptionDetails9 { SendInvoice = true, SendReceipt = true },
        },
    });
    // TODO: Handle 'response' of type Subscription
}
catch (ApiException<UpdateSubscriptionError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionRequest](src/FinixApiReference/Requests/Subscriptions/UpdateSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/FinixApiReference/Models/Subscription.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriptionError](src/FinixApiReference/Errors/UpdateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionBalanceEntry&gt; UpdateSubscriptionBalanceEntry(UpdateSubscriptionBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the tags for an existing `Subscription Balance Entry`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.UpdateSubscriptionBalanceEntry(new UpdateSubscriptionBalanceEntryRequest
    {
        SubscriptionId = "subscription_cAqNtRY2oKTJWbjMSDgrk",
        SubscriptionBalanceEntryId = "some example string",
        FinixVersion = "2022-02-01",
        Body = new UpdateSubscriptionBalanceEntry(),
    });
    // TODO: Handle 'response' of type SubscriptionBalanceEntry
}
catch (ApiException<UpdateSubscriptionBalanceEntryError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionBalanceEntryRequest](src/FinixApiReference/Requests/Subscriptions/UpdateSubscriptionBalanceEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionBalanceEntry](src/FinixApiReference/Models/SubscriptionBalanceEntry.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriptionBalanceEntryError](src/FinixApiReference/Errors/UpdateSubscriptionBalanceEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferAttempts

> Source: [TransferAttempts](src/FinixApiReference/Api/TransferAttempts.cs)

<details>
<summary><code>Task&lt;TransferAttemptsResponse&gt; GetTransferAttempt(GetTransferAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a `Transfer Attempt` initiated from a `Checkout Form`, `Payment Link` or `Payout Link`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferAttempts.GetTransferAttempt(new GetTransferAttemptRequest
    {
        TransferAttemptId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type TransferAttemptsResponse
}
catch (ApiException<GetTransferAttemptError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTransferAttemptRequest](src/FinixApiReference/Requests/TransferAttempts/GetTransferAttemptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferAttemptsResponse](src/FinixApiReference/Models/AnyOf/TransferAttemptsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetTransferAttemptError](src/FinixApiReference/Errors/GetTransferAttemptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTransferAttempts&gt; ListTransferAttempts(ListTransferAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all `Transfer Attempt` resources, or filter the results to a specific `Checkout Form`, `Payment Link`, and `Payout Link` using the `entity_id` query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferAttempts.ListTransferAttempts(new ListTransferAttemptsRequest
    {
        Amount = 100,
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        ApplicationId = "APc9vhYcPsRuTSpKD9KpMtPe",
        AuthorizationId = "AUogt3PgskE2ahBFmTpn2EGJ",
        BuyerEmail = "john@example.com",
        BuyerEmailLike = "john",
        BuyerFirstName = "John",
        BuyerFirstNameLike = "joh",
        BuyerLastName = "Doe",
        BuyerLastNameLike = "do",
        EntityId = "checkout_form_ciADaDNMFAHdyNbDPuByS",
        EntityType = EntityType10.PaymentLink,
        IsAuthorization = true,
        MerchantId = "MUeDVrf2ahuKc9Eg5TeZugvs",
        PaymentInstrumentId = "PIcgYZswyRfqSSbvMsxuaHxZ",
        State = State25.Succeeded,
        TransferId = "TRnH7FkSB7zePeHExNZwSb9H",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListTransferAttempts
}
catch (ApiException<ListTransferAttemptsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransferAttemptsRequest](src/FinixApiReference/Requests/TransferAttempts/ListTransferAttemptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransferAttempts](src/FinixApiReference/Models/ListTransferAttempts.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListTransferAttemptsError](src/FinixApiReference/Errors/ListTransferAttemptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransfersApi

> Source: [TransfersApi](src/FinixApiReference/Api/TransfersApi.cs)

<details>
<summary><code>Task&lt;Transfer&gt; CreateTransfer(CreateTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Transfer`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.CreateTransfer(new CreateTransferRequest
    {
        FinixVersion = "2022-02-01",
        Body = new TransferMinimalFields
        {
            Amount = 10000L,
            Currency = Currency.Usd,
            Merchant = "MUmfEGv5bMpSJ9k5TFRUjkmm",
            Source = "PI6iQcTtJNCS8GZAVKYi5Ueb",
        },
    });
    // TODO: Handle 'response' of type Transfer
}
catch (ApiException<CreateTransferError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTransferRequest](src/FinixApiReference/Requests/TransfersApi/CreateTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transfer](src/FinixApiReference/Models/Transfer.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateTransferError](src/FinixApiReference/Errors/CreateTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Transfer&gt; CreateTransferReversal(CreateTransferReversalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverse a transfer with a `type` of `DEBIT`. This reversal creates a new `Transfer` resource with a `type` of `REVERSAL`.

Related Guides: [Refunding Payments](/guides/after-the-payment/refunds)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.CreateTransferReversal(new CreateTransferReversalRequest
    {
        TransferId = "TRrC36MYGH6n67wRfYs8w8RK",
        FinixVersion = "2022-02-01",
        Body = new RefundTransfer { RefundAmount = 1 },
    });
    // TODO: Handle 'response' of type Transfer
}
catch (ApiException<CreateTransferReversalError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTransferReversalRequest](src/FinixApiReference/Requests/TransfersApi/CreateTransferReversalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transfer](src/FinixApiReference/Models/Transfer.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateTransferReversalError](src/FinixApiReference/Errors/CreateTransferReversalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Transfer&gt; GetTransfer(GetTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a `Transfer`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.GetTransfer(new GetTransferRequest
    {
        TransferId = "TRrC36MYGH6n67wRfYs8w8RK",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Transfer
}
catch (ApiException<GetTransferError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTransferRequest](src/FinixApiReference/Requests/TransfersApi/GetTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transfer](src/FinixApiReference/Models/Transfer.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetTransferError](src/FinixApiReference/Errors/GetTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransfersReversalsResponse&gt; ListTransferReversals(ListTransferReversalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of reversals for a `Transfer`.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.ListTransferReversals(new ListTransferReversalsRequest
    {
        TransferId = "TRrC36MYGH6n67wRfYs8w8RK",
        Limit = 10,
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type TransfersReversalsResponse
}
catch (ApiException<ListTransferReversalsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransferReversalsRequest](src/FinixApiReference/Requests/TransfersApi/ListTransferReversalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransfersReversalsResponse](src/FinixApiReference/Models/TransfersReversalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListTransferReversalsError](src/FinixApiReference/Errors/ListTransferReversalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTransfers&gt; ListTransfers(ListTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Transfers`.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

{% admonition type="info" %}
If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
{% /admonition %}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.ListTransfers(new ListTransfersRequest
    {
        AmountGt = 100,
        AmountGte = 100,
        AmountLt = 100,
        AmountLte = 100,
        Amount = 100,
        BankReturnReasonCode = "R03,R07",
        BuyerBusinessName = "Finix%20Flowers",
        BuyerBusinessNameLike = "finix",
        BuyerDoingBusinessAs = "Finix%20Flowers",
        BuyerDoingBusinessAsLike = "finix",
        BuyerIdentityFirstName = "John",
        BuyerIdentityFirstNameLike = "joh",
        BuyerIdentityId = "ID6Qm3BQUxGFcCWZ185TS8sn",
        BuyerIdentityLastName = "Doe",
        BuyerIdentityLastNameLike = "do",
        BuyerIdentityName = "John%20Doe",
        BuyerIdentityNameLike = "john",
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Currency = "USD",
        Device = "DVsEanpBtsAVvCHbNXkFaH6f",
        IdempotencyId = "15d32948-c766-4033-8d87-dfbdcabcbc5c",
        InstrumentAccountLast4 = "1234",
        InstrumentBin = "601100",
        InstrumentBrandType = "MASTERCARD",
        InstrumentCardLast4 = "4242",
        InstrumentIssuerCountry = "USA,CAN",
        InstrumentName = "Business%20Card",
        InstrumentType = InstrumentType2.PaymentCard,
        Limit = 10,
        Merchant = "MUtAWVfXkf149BVi2cL2HvPU",
        MerchantIdentityId = "IDtX3ciHPq2DDquCQJRwj7VW",
        MerchantIdentityName = "Finix%20Flowers",
        MerchantMid = "FNXkitpwdmgMJ8Vz9FxKBCSza",
        MerchantProcessorId = "DUMMY_V1",
        ParentTransferId = "TRjAnCNNSxDCW8GDsxYobHHe",
        ReadyToSettleAtGte = DateTimeOffset.Parse("2023-06-28T00:00:00Z"),
        ReadyToSettleAtLte = DateTimeOffset.Parse("2023-06-28T00:00:00Z"),
        State = State24.Succeeded,
        TagsKey = "card_type",
        TagsValue = "business_card",
        TraceId = "021fc4ed-f0a8-4932-820c-b22b542526f8",
        Type = Type53.Reversal,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListTransfers
}
catch (ApiException<ListTransfersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTransfersRequest](src/FinixApiReference/Requests/TransfersApi/ListTransfersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransfers](src/FinixApiReference/Models/ListTransfers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListTransfersError](src/FinixApiReference/Errors/ListTransfersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Transfer&gt; UpdateTransfer(UpdateTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a `Transfer`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransfersApi.UpdateTransfer(new UpdateTransferRequest
    {
        TransferId = "TRrC36MYGH6n67wRfYs8w8RK",
        Body = new UpdateTransfer(),
    });
    // TODO: Handle 'response' of type Transfer
}
catch (ApiException<UpdateTransferError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTransferRequest](src/FinixApiReference/Requests/TransfersApi/UpdateTransferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transfer](src/FinixApiReference/Models/Transfer.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateTransferError](src/FinixApiReference/Errors/UpdateTransferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/FinixApiReference/Api/Users.cs)

<details>
<summary><code>Task&lt;User&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `User`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest
    {
        UserId = "USarwmxQ4Mxv6trtYit8bVhy",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetUserError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserRequest](src/FinixApiReference/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/FinixApiReference/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/FinixApiReference/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListUsers&gt; ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `User` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListUsers(new ListUsersRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListUsers
}
catch (ApiException<ListUsersError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUsersRequest](src/FinixApiReference/Requests/Users/ListUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUsers](src/FinixApiReference/Models/ListUsers.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/FinixApiReference/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a `User` with new tags or disable the `User` and their credentials.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserRequest
    {
        UserId = "USarwmxQ4Mxv6trtYit8bVhy",
        Body = new UpdateUser(),
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<UpdateUserError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserRequest](src/FinixApiReference/Requests/Users/UpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/FinixApiReference/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/FinixApiReference/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VerificationsApi

> Source: [VerificationsApi](src/FinixApiReference/Api/VerificationsApi.cs)

<details>
<summary><code>Task&lt;VerificationsResponse&gt; GetVerification(GetVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Verification`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VerificationsApi.GetVerification(new GetVerificationRequest
    {
        VerificationId = "some example string",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type VerificationsResponse
}
catch (ApiException<GetVerificationError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVerificationRequest](src/FinixApiReference/Requests/VerificationsApi/GetVerificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationsResponse](src/FinixApiReference/Models/AnyOf/VerificationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetVerificationError](src/FinixApiReference/Errors/GetVerificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMerchantVerifications&gt; ListMerchantVerifications(ListMerchantVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all the `Verifications` for a `Merchant` resource.

For details on how to query endpoints using the available parameters, see [Query Parameters](/api/section/query-parameters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VerificationsApi.ListMerchantVerifications(new ListMerchantVerificationsRequest
    {
        MerchantId = "MUiV7ntxfY4eyJxp6E7cZvym",
        Limit = 10,
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListMerchantVerifications
}
catch (ApiException<ListMerchantVerificationsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMerchantVerificationsRequest](src/FinixApiReference/Requests/VerificationsApi/ListMerchantVerificationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchantVerifications](src/FinixApiReference/Models/ListMerchantVerifications.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListMerchantVerificationsError](src/FinixApiReference/Errors/ListMerchantVerificationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListVerifications&gt; ListVerifications(ListVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Verification` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VerificationsApi.ListVerifications(new ListVerificationsRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        TagsKey = "card_type",
        TagsValue = "business_card",
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListVerifications
}
catch (ApiException<ListVerificationsError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVerificationsRequest](src/FinixApiReference/Requests/VerificationsApi/ListVerificationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListVerifications](src/FinixApiReference/Models/ListVerifications.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListVerificationsError](src/FinixApiReference/Errors/ListVerificationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/FinixApiReference/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;Webhook&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a `Webhook` to receive webhook events for specified entities (e.g., `transfer`, `merchant`) to a URL provided by you. When an enabled event occurs, Finix sends a POST request to this URL with the webhook event payload.

{% admonition type="info" %}
The response includes a `secret_signing_key`. Store this value securely. It is used to verify that incoming payloads were sent by Finix.
{% /admonition %}

**Authentication**

Set `authentication.type` to control how Finix authenticates requests to your endpoint:
- `NONE` (default) — No authentication header is sent
- `BASIC` — Provide `authentication.basic.username` and `authentication.basic.password`
- `BEARER` — Provide `authentication.bearer.token`

To learn how to add webhook authentication, see [Creating Authenticated Webhooks](/additional-resources/developers/webhooks/integrating-into-webhooks#creating-authenticated-webhooks).

**Event Filtering**

By default, a new `Webhook` subscribes to a standard set of events. Include `enabled_events` to override the default set of events and receive only specific entity/type combinations. See [Webhook Events](/additional-resources/developers/webhooks/webhook-events) for supported entities and event types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        FinixVersion = "2022-02-01",
        Body = new WebhookAllFields { Url = "https://httpbin.org/post" },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<CreateWebhookError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/FinixApiReference/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/FinixApiReference/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/FinixApiReference/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of an existing `Webhook`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest
    {
        WebhookId = "WHhRJLcEt53voydzyLQ9aYs7",
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<GetWebhookError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookRequest](src/FinixApiReference/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/FinixApiReference/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/FinixApiReference/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListWebhooks&gt; ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of `Webhook` resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks(new ListWebhooksRequest
    {
        CreatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        CreatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        Limit = 10,
        UpdatedAtGte = DateTimeOffset.Parse("2022-09-27T11:21:23Z"),
        UpdatedAtLte = DateTimeOffset.Parse("2026-09-27T11:21:23Z"),
        FinixVersion = "2022-02-01",
    });
    // TODO: Handle 'response' of type ListWebhooks
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhooksRequest](src/FinixApiReference/Requests/WebhooksApi/ListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListWebhooks](src/FinixApiReference/Models/ListWebhooks.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/FinixApiReference/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing `Webhook` to:
  - Enable or disable a `Webhook`. Disabled webhooks stop receiving events at the configured URL.
  - Add [authentication to a Webhook](/additional-resources/developers/webhooks/integrating-into-webhooks#creating-authenticated-webhooks)
  - [Override default event filters](/additional-resources/developers/webhooks/integrating-into-webhooks#filtering-webhooks) by specifying the list of events you are interested in receiving

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest
    {
        WebhookId = "WHhRJLcEt53voydzyLQ9aYs7",
        Body = new UpdateWebhookAllFields
        {
            Authentication = new AuthenticationModel
            {
                Basic = new BasicModel { Password = "basic-auth-password", Username = "basic-auth-username" },
                Type = Type42.Basic,
            },
            Enabled = true,
            EnabledEvents = [
                new EnabledEvent { Entity = "authorization", Types = ["created", "updated"] },
                new EnabledEvent { Entity = "balance_transfer", Types = ["created", "updated"] },
                new EnabledEvent { Entity = "evidence", Types = ["created"] },
                new EnabledEvent { Entity = "gateway_integration", Types = ["created"] },
                new EnabledEvent { Entity = "merchant", Types = ["created", "underwritten", "updated"] },
                new EnabledEvent { Entity = "onboarding_form", Types = ["created", "updated"] },
                new EnabledEvent { Entity = "transfer_attempt", Types = ["created"] },
                new EnabledEvent { Entity = "verification", Types = ["created", "updated"] },
            ],
            GenerateNewSecret = true,
            Nickname = "production-payment-events",
            PreviousSecretActiveHours = 24,
            Url = "https://httpbin.org/post",
        },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<UpdateWebhookError> ex)
{
    if (ex.Error.TryGetGenericError(out var error))
    {
        // TODO: Handle 'error' of type GenericError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookRequest](src/FinixApiReference/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/FinixApiReference/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/FinixApiReference/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/FinixApiReference/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

