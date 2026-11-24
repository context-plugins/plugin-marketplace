# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsCertificateManagerClient](src/AwsCertificateManager/AwsCertificateManagerClient.cs)

## AcmeAccountApi

> Source: [AcmeAccountApi](src/AwsCertificateManager/Api/AcmeAccountApi.cs)

<details>
<summary><code>Task DescribeAcmeAccount(DescribeAcmeAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeAccountApi.DescribeAcmeAccount(new DescribeAcmeAccountOperationRequest
    {
        XAmzTarget = XAmzTarget.CertificateManagerDescribeAcmeAccount,
    });
}
catch (ApiException<DescribeAcmeAccountError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAcmeAccountOperationRequest](src/AwsCertificateManager/Requests/AcmeAccountApi/DescribeAcmeAccountOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DescribeAcmeAccountError](src/AwsCertificateManager/Errors/DescribeAcmeAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListAcmeAccounts(ListAcmeAccountsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeAccountApi.ListAcmeAccounts(new ListAcmeAccountsOperationRequest
    {
        XAmzTarget = XAmzTarget1.CertificateManagerListAcmeAccounts,
    });
}
catch (ApiException<ListAcmeAccountsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAcmeAccountsOperationRequest](src/AwsCertificateManager/Requests/AcmeAccountApi/ListAcmeAccountsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListAcmeAccountsError](src/AwsCertificateManager/Errors/ListAcmeAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeAcmeAccount(RevokeAcmeAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeAccountApi.RevokeAcmeAccount(new RevokeAcmeAccountOperationRequest
    {
        XAmzTarget = XAmzTarget2.CertificateManagerRevokeAcmeAccount,
    });
}
catch (ApiException<RevokeAcmeAccountError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RevokeAcmeAccountOperationRequest](src/AwsCertificateManager/Requests/AcmeAccountApi/RevokeAcmeAccountOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RevokeAcmeAccountError](src/AwsCertificateManager/Errors/RevokeAcmeAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeDomainValidationApi

> Source: [AcmeDomainValidationApi](src/AwsCertificateManager/Api/AcmeDomainValidationApi.cs)

<details>
<summary><code>Task CreateAcmeDomainValidation(CreateAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeDomainValidationApi.CreateAcmeDomainValidation(new CreateAcmeDomainValidationOperationRequest
    {
        XAmzTarget = XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.CertificateManagerCreateAcmeDomainValidation,
    });
}
catch (ApiException<CreateAcmeDomainValidationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAcmeDomainValidationOperationRequest](src/AwsCertificateManager/Requests/AcmeDomainValidationApi/CreateAcmeDomainValidationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[CreateAcmeDomainValidationError](src/AwsCertificateManager/Errors/CreateAcmeDomainValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAcmeDomainValidation(DeleteAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeDomainValidationApi.DeleteAcmeDomainValidation(new DeleteAcmeDomainValidationOperationRequest
    {
        XAmzTarget = XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDeleteAcmeDomainValidation,
    });
}
catch (ApiException<DeleteAcmeDomainValidationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAcmeDomainValidationOperationRequest](src/AwsCertificateManager/Requests/AcmeDomainValidationApi/DeleteAcmeDomainValidationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DeleteAcmeDomainValidationError](src/AwsCertificateManager/Errors/DeleteAcmeDomainValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeAcmeDomainValidation(DescribeAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeDomainValidationApi.DescribeAcmeDomainValidation(new DescribeAcmeDomainValidationOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.CertificateManagerDescribeAcmeDomainValidation,
    });
}
catch (ApiException<DescribeAcmeDomainValidationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAcmeDomainValidationOperationRequest](src/AwsCertificateManager/Requests/AcmeDomainValidationApi/DescribeAcmeDomainValidationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DescribeAcmeDomainValidationError](src/AwsCertificateManager/Errors/DescribeAcmeDomainValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListAcmeDomainValidations(ListAcmeDomainValidationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of domain validations for the specified ACME endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeDomainValidationApi.ListAcmeDomainValidations(new ListAcmeDomainValidationsOperationRequest
    {
        XAmzTarget = XAmzTarget3.CertificateManagerListAcmeDomainValidations,
    });
}
catch (ApiException<ListAcmeDomainValidationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAcmeDomainValidationsOperationRequest](src/AwsCertificateManager/Requests/AcmeDomainValidationApi/ListAcmeDomainValidationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListAcmeDomainValidationsError](src/AwsCertificateManager/Errors/ListAcmeDomainValidationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateAcmeDomainValidation(UpdateAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the prevalidation configuration of an existing domain validation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeDomainValidationApi.UpdateAcmeDomainValidation(new UpdateAcmeDomainValidationOperationRequest
    {
        XAmzTarget = XAmzTarget4.CertificateManagerUpdateAcmeDomainValidation,
    });
}
catch (ApiException<UpdateAcmeDomainValidationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAcmeDomainValidationOperationRequest](src/AwsCertificateManager/Requests/AcmeDomainValidationApi/UpdateAcmeDomainValidationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[UpdateAcmeDomainValidationError](src/AwsCertificateManager/Errors/UpdateAcmeDomainValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeEndpointApi

> Source: [AcmeEndpointApi](src/AwsCertificateManager/Api/AcmeEndpointApi.cs)

<details>
<summary><code>Task CreateAcmeEndpoint(CreateAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeEndpointApi.CreateAcmeEndpoint(new CreateAcmeEndpointOperationRequest
    {
        XAmzTarget = XAmzTargetAwsCertificateManagerAcmeEndpointApi.CertificateManagerCreateAcmeEndpoint,
    });
}
catch (ApiException<CreateAcmeEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAcmeEndpointOperationRequest](src/AwsCertificateManager/Requests/AcmeEndpointApi/CreateAcmeEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[CreateAcmeEndpointError](src/AwsCertificateManager/Errors/CreateAcmeEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAcmeEndpoint(DeleteAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeEndpointApi.DeleteAcmeEndpoint(new DeleteAcmeEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget1AwsCertificateManagerAcmeEndpointApi.CertificateManagerDeleteAcmeEndpoint,
    });
}
catch (ApiException<DeleteAcmeEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAcmeEndpointOperationRequest](src/AwsCertificateManager/Requests/AcmeEndpointApi/DeleteAcmeEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DeleteAcmeEndpointError](src/AwsCertificateManager/Errors/DeleteAcmeEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeAcmeEndpoint(DescribeAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeEndpointApi.DescribeAcmeEndpoint(new DescribeAcmeEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsCertificateManagerAcmeEndpointApi.CertificateManagerDescribeAcmeEndpoint,
    });
}
catch (ApiException<DescribeAcmeEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAcmeEndpointOperationRequest](src/AwsCertificateManager/Requests/AcmeEndpointApi/DescribeAcmeEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DescribeAcmeEndpointError](src/AwsCertificateManager/Errors/DescribeAcmeEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListAcmeEndpoints(ListAcmeEndpointsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeEndpointApi.ListAcmeEndpoints(new ListAcmeEndpointsOperationRequest
    {
        XAmzTarget = XAmzTarget3AwsCertificateManagerAcmeEndpointApi.CertificateManagerListAcmeEndpoints,
    });
}
catch (ApiException<ListAcmeEndpointsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAcmeEndpointsOperationRequest](src/AwsCertificateManager/Requests/AcmeEndpointApi/ListAcmeEndpointsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListAcmeEndpointsError](src/AwsCertificateManager/Errors/ListAcmeEndpointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateAcmeEndpoint(UpdateAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeEndpointApi.UpdateAcmeEndpoint(new UpdateAcmeEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget4AwsCertificateManagerAcmeEndpointApi.CertificateManagerUpdateAcmeEndpoint,
    });
}
catch (ApiException<UpdateAcmeEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAcmeEndpointOperationRequest](src/AwsCertificateManager/Requests/AcmeEndpointApi/UpdateAcmeEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[UpdateAcmeEndpointError](src/AwsCertificateManager/Errors/UpdateAcmeEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeExternalAccountBindingApi

> Source: [AcmeExternalAccountBindingApi](src/AwsCertificateManager/Api/AcmeExternalAccountBindingApi.cs)

<details>
<summary><code>Task CreateAcmeExternalAccountBinding(CreateAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBinding(
        new CreateAcmeExternalAccountBindingOperationRequest
        {
            XAmzTarget = XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerCreateAcmeExternalAccountBinding,
        });
}
catch (ApiException<CreateAcmeExternalAccountBindingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAcmeExternalAccountBindingOperationRequest](src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/CreateAcmeExternalAccountBindingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[CreateAcmeExternalAccountBindingError](src/AwsCertificateManager/Errors/CreateAcmeExternalAccountBindingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAcmeExternalAccountBinding(DeleteAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBinding(
        new DeleteAcmeExternalAccountBindingOperationRequest
        {
            XAmzTarget = XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDeleteAcmeExternalAccountBinding,
        });
}
catch (ApiException<DeleteAcmeExternalAccountBindingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAcmeExternalAccountBindingOperationRequest](src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/DeleteAcmeExternalAccountBindingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DeleteAcmeExternalAccountBindingError](src/AwsCertificateManager/Errors/DeleteAcmeExternalAccountBindingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeAcmeExternalAccountBinding(DescribeAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBinding(
        new DescribeAcmeExternalAccountBindingOperationRequest
        {
            XAmzTarget = XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerDescribeAcmeExternalAccountBinding,
        });
}
catch (ApiException<DescribeAcmeExternalAccountBindingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAcmeExternalAccountBindingOperationRequest](src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/DescribeAcmeExternalAccountBindingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DescribeAcmeExternalAccountBindingError](src/AwsCertificateManager/Errors/DescribeAcmeExternalAccountBindingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListAcmeExternalAccountBindings(ListAcmeExternalAccountBindingsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of external account bindings for the specified ACME endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindings(
        new ListAcmeExternalAccountBindingsOperationRequest
        {
            XAmzTarget = XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerListAcmeExternalAccountBindings,
        });
}
catch (ApiException<ListAcmeExternalAccountBindingsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAcmeExternalAccountBindingsOperationRequest](src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/ListAcmeExternalAccountBindingsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListAcmeExternalAccountBindingsError](src/AwsCertificateManager/Errors/ListAcmeExternalAccountBindingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeAcmeExternalAccountBinding(RevokeAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBinding(
        new RevokeAcmeExternalAccountBindingOperationRequest
        {
            XAmzTarget = XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.CertificateManagerRevokeAcmeExternalAccountBinding,
        });
}
catch (ApiException<RevokeAcmeExternalAccountBindingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RevokeAcmeExternalAccountBindingOperationRequest](src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/RevokeAcmeExternalAccountBindingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RevokeAcmeExternalAccountBindingError](src/AwsCertificateManager/Errors/RevokeAcmeExternalAccountBindingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Certificates

> Source: [Certificates](src/AwsCertificateManager/Api/Certificates.cs)

<details>
<summary><code>Task DeleteCertificate(DeleteCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.DeleteCertificate(new DeleteCertificateOperationRequest
    {
        XAmzTarget = XAmzTargetAwsCertificateManagerCertificatesApi.CertificateManagerDeleteCertificate,
    });
}
catch (ApiException<DeleteCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/DeleteCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DeleteCertificateError](src/AwsCertificateManager/Errors/DeleteCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCertificate(DescribeCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.DescribeCertificate(new DescribeCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget1AwsCertificateManagerCertificatesApi.CertificateManagerDescribeCertificate,
    });
}
catch (ApiException<DescribeCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/DescribeCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[DescribeCertificateError](src/AwsCertificateManager/Errors/DescribeCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ExportCertificate(ExportCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. For information about exporting and formatting a certificate using the ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates created prior to June 17, 2025 cannot be exported.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.ExportCertificate(new ExportCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsCertificateManagerCertificatesApi.CertificateManagerExportCertificate,
    });
}
catch (ApiException<ExportCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/ExportCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ExportCertificateError](src/AwsCertificateManager/Errors/ExportCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetCertificate(GetCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.GetCertificate(new GetCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget3AwsCertificateManagerCertificatesApi.CertificateManagerGetCertificate,
    });
}
catch (ApiException<GetCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/GetCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[GetCertificateError](src/AwsCertificateManager/Errors/GetCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ImportCertificate(ImportCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal for certificates that you import. Note the following guidelines when importing third party certificates: You must enter the private key that matches the certificate you are importing. The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase. The private key must be no larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The current time must be between the Not Before and Not After certificate fields. The Issuer field must not be empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.ImportCertificate(new ImportCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget4AwsCertificateManagerCertificatesApi.CertificateManagerImportCertificate,
    });
}
catch (ApiException<ImportCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ImportCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/ImportCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ImportCertificateError](src/AwsCertificateManager/Errors/ImportCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCertificates(ListCertificatesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the CertificateKeyPairOrigins filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.ListCertificates(new ListCertificatesOperationRequest
    {
        XAmzTarget = XAmzTarget5.CertificateManagerListCertificates,
    });
}
catch (ApiException<ListCertificatesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCertificatesOperationRequest](src/AwsCertificateManager/Requests/Certificates/ListCertificatesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListCertificatesError](src/AwsCertificateManager/Errors/ListCertificatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RequestCertificate(RequestCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.RequestCertificate(new RequestCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget8.CertificateManagerRequestCertificate,
    });
}
catch (ApiException<RequestCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RequestCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/RequestCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RequestCertificateError](src/AwsCertificateManager/Errors/RequestCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeCertificate(RevokeCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.RevokeCertificate(new RevokeCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget6.CertificateManagerRevokeCertificate,
    });
}
catch (ApiException<RevokeCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RevokeCertificateOperationRequest](src/AwsCertificateManager/Requests/Certificates/RevokeCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RevokeCertificateError](src/AwsCertificateManager/Errors/RevokeCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchCertificates(SearchCertificatesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Certificates.SearchCertificates(new SearchCertificatesOperationRequest
    {
        XAmzTarget = XAmzTarget7.CertificateManagerSearchCertificates,
    });
}
catch (ApiException<SearchCertificatesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCertificatesOperationRequest](src/AwsCertificateManager/Requests/Certificates/SearchCertificatesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[SearchCertificatesError](src/AwsCertificateManager/Errors/SearchCertificatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AwsCertificateManager/Api/Operations.cs)

<details>
<summary><code>Task GetAccountConfiguration(GetAccountConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the account configuration options associated with an Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.GetAccountConfiguration(new GetAccountConfigurationRequest
    {
        XAmzTarget = XAmzTarget3AwsCertificateManagerOperationsApi.CertificateManagerGetAccountConfiguration,
    });
}
catch (ApiException<GetAccountConfigurationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAccountConfigurationRequest](src/AwsCertificateManager/Requests/Operations/GetAccountConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[GetAccountConfigurationError](src/AwsCertificateManager/Errors/GetAccountConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAcmeExternalAccountBindingCredentials(GetAcmeExternalAccountBindingCredentialsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.GetAcmeExternalAccountBindingCredentials(
        new GetAcmeExternalAccountBindingCredentialsOperationRequest
        {
            XAmzTarget = XAmzTarget5AwsCertificateManagerOperationsApi.CertificateManagerGetAcmeExternalAccountBindingCredentials,
        });
}
catch (ApiException<GetAcmeExternalAccountBindingCredentialsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAcmeExternalAccountBindingCredentialsOperationRequest](src/AwsCertificateManager/Requests/Operations/GetAcmeExternalAccountBindingCredentialsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[GetAcmeExternalAccountBindingCredentialsError](src/AwsCertificateManager/Errors/GetAcmeExternalAccountBindingCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCertificateDomainValidations(ListCertificateDomainValidationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ListCertificateDomainValidations(new ListCertificateDomainValidationsOperationRequest
    {
        XAmzTarget = XAmzTarget6AwsCertificateManagerOperationsApi.CertificateManagerListCertificateDomainValidations,
    });
}
catch (ApiException<ListCertificateDomainValidationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCertificateDomainValidationsOperationRequest](src/AwsCertificateManager/Requests/Operations/ListCertificateDomainValidationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListCertificateDomainValidationsError](src/AwsCertificateManager/Errors/ListCertificateDomainValidationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutAccountConfiguration(PutAccountConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry. This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.PutAccountConfiguration(new PutAccountConfigurationOperationRequest
    {
        XAmzTarget = XAmzTarget4AwsCertificateManagerOperationsApi.CertificateManagerPutAccountConfiguration,
    });
}
catch (ApiException<PutAccountConfigurationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutAccountConfigurationOperationRequest](src/AwsCertificateManager/Requests/Operations/PutAccountConfigurationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[PutAccountConfigurationError](src/AwsCertificateManager/Errors/PutAccountConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RenewCertificate(RenewCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing Managed Renewal in the ACM User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RenewCertificate(new RenewCertificateOperationRequest
    {
        XAmzTarget = XAmzTargetAwsCertificateManagerOperationsApi.CertificateManagerRenewCertificate,
    });
}
catch (ApiException<RenewCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RenewCertificateOperationRequest](src/AwsCertificateManager/Requests/Operations/RenewCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RenewCertificateError](src/AwsCertificateManager/Errors/RenewCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RequestCertificate2(RequestCertificate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RequestCertificate2(new RequestCertificate2Request
    {
        XAmzTarget = XAmzTarget1AwsCertificateManagerOperationsApi.CertificateManagerRequestCertificate,
    });
}
catch (ApiException<RequestCertificate2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RequestCertificate2Request](src/AwsCertificateManager/Requests/Operations/RequestCertificate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RequestCertificate2Error](src/AwsCertificateManager/Errors/RequestCertificate2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ResendValidationEmail(ResendValidationEmailOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ResendValidationEmail(new ResendValidationEmailOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsCertificateManagerOperationsApi.CertificateManagerResendValidationEmail,
    });
}
catch (ApiException<ResendValidationEmailError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResendValidationEmailOperationRequest](src/AwsCertificateManager/Requests/Operations/ResendValidationEmailOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ResendValidationEmailError](src/AwsCertificateManager/Errors/ResendValidationEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget7AwsCertificateManagerOperationsApi.CertificateManagerTagResource,
    });
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceOperationRequest](src/AwsCertificateManager/Requests/Operations/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AwsCertificateManager/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget8AwsCertificateManagerOperationsApi.CertificateManagerUntagResource,
    });
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceOperationRequest](src/AwsCertificateManager/Requests/Operations/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AwsCertificateManager/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateCertificateOptions(UpdateCertificateOptionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates certificate options. You can use this operation to change the domain validation method or specify whether to export your certificate. For more information, see Migrate from email to DNS validation and Certificate Manager Exportable Managed Certificates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UpdateCertificateOptions(new UpdateCertificateOptionsOperationRequest
    {
        XAmzTarget = XAmzTarget9.CertificateManagerUpdateCertificateOptions,
    });
}
catch (ApiException<UpdateCertificateOptionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCertificateOptionsOperationRequest](src/AwsCertificateManager/Requests/Operations/UpdateCertificateOptionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[UpdateCertificateOptionsError](src/AwsCertificateManager/Errors/UpdateCertificateOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TagApi

> Source: [TagApi](src/AwsCertificateManager/Api/TagApi.cs)

<details>
<summary><code>Task AddTagsToCertificate(AddTagsToCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TagApi.AddTagsToCertificate(new AddTagsToCertificateOperationRequest
    {
        XAmzTarget = XAmzTargetAwsCertificateManagerTagApi.CertificateManagerAddTagsToCertificate,
    });
}
catch (ApiException<AddTagsToCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTagsToCertificateOperationRequest](src/AwsCertificateManager/Requests/TagApi/AddTagsToCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[AddTagsToCertificateError](src/AwsCertificateManager/Errors/AddTagsToCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForCertificate(ListTagsForCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TagApi.ListTagsForCertificate(new ListTagsForCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget1AwsCertificateManagerTagApi.CertificateManagerListTagsForCertificate,
    });
}
catch (ApiException<ListTagsForCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForCertificateOperationRequest](src/AwsCertificateManager/Requests/TagApi/ListTagsForCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListTagsForCertificateError](src/AwsCertificateManager/Errors/ListTagsForCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TagApi.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsCertificateManagerTagApi.CertificateManagerListTagsForResource,
    });
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceOperationRequest](src/AwsCertificateManager/Requests/TagApi/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AwsCertificateManager/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveTagsFromCertificate(RemoveTagsFromCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TagApi.RemoveTagsFromCertificate(new RemoveTagsFromCertificateOperationRequest
    {
        XAmzTarget = XAmzTarget3AwsCertificateManagerTagApi.CertificateManagerRemoveTagsFromCertificate,
    });
}
catch (ApiException<RemoveTagsFromCertificateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTagsFromCertificateOperationRequest](src/AwsCertificateManager/Requests/TagApi/RemoveTagsFromCertificateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCertificateManager/Core/Exceptions/ApiException.cs)&lt;[RemoveTagsFromCertificateError](src/AwsCertificateManager/Errors/RemoveTagsFromCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

