<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeAccountApi — operations

Accessor: `client.AcmeAccountApi` · Source: `src/AwsCertificateManager/Api/AcmeAccountApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeAcmeAccount

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAcmeAccount(DescribeAcmeAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAcmeAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAcmeAccountOperationRequest` | `src/AwsCertificateManager/Requests/AcmeAccountApi/DescribeAcmeAccountOperationRequest.cs` |
| `XAmzTarget` | `src/AwsCertificateManager/Models/Enums/XAmzTarget.cs` |
| `DescribeAcmeAccountError` | `src/AwsCertificateManager/Errors/DescribeAcmeAccountError.cs` |

### ListAcmeAccounts

- **Auth**: `options.Sigv4`
- **Signature**: `ListAcmeAccounts(ListAcmeAccountsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListAcmeAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAcmeAccountsOperationRequest` | `src/AwsCertificateManager/Requests/AcmeAccountApi/ListAcmeAccountsOperationRequest.cs` |
| `XAmzTarget1` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1.cs` |
| `ListAcmeAccountsError` | `src/AwsCertificateManager/Errors/ListAcmeAccountsError.cs` |

### RevokeAcmeAccount

- **Auth**: `options.Sigv4`
- **Signature**: `RevokeAcmeAccount(RevokeAcmeAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RevokeAcmeAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeAcmeAccountOperationRequest` | `src/AwsCertificateManager/Requests/AcmeAccountApi/RevokeAcmeAccountOperationRequest.cs` |
| `XAmzTarget2` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2.cs` |
| `RevokeAcmeAccountError` | `src/AwsCertificateManager/Errors/RevokeAcmeAccountError.cs` |

