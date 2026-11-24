# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ZeroBounceClient](src/ZeroBounce/ZeroBounceClient.cs)

<details>
<summary><code>Task&lt;ValidateEmailResponse&gt; Validate(ValidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Validate(new ValidateRequest
    {
        Body = new ValidateEmailRequest { Email = "some example string" },
    });
    // TODO: Handle 'response' of type ValidateEmailResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateRequest](src/ZeroBounce/Requests/ValidateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValidateEmailResponse](src/ZeroBounce/Models/ValidateEmailResponse.cs)</code>

**OnError**: <code>[ApiException](src/ZeroBounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ZeroBounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ValidateEmailResponse&gt;&gt; ValidateBatch(ValidateBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ValidateBatch(new ValidateBatchOperationRequest
    {
        Body = new ValidateBatchRequest { ApiKey = "some example string" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<ValidateEmailResponse>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateBatchOperationRequest](src/ZeroBounce/Requests/ValidateBatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ValidateEmailResponse](src/ZeroBounce/Models/ValidateEmailResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ZeroBounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ZeroBounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

