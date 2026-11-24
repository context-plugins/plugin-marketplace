<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyCurrency — operations

Accessor: `client.CompanyCurrency` · Source: `src/FlowAccount/Api/CompanyCurrency.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CompanyCurrencyGetCompanyCurrencies

- **Auth**: `options.Bearer`
- **Signature**: `CompanyCurrencyGetCompanyCurrencies(CompanyCurrencyGetCompanyCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyCurrencyGetCompanyCurrenciesRequest` | `src/FlowAccount/Requests/CompanyCurrency/CompanyCurrencyGetCompanyCurrenciesRequest.cs` |

### CompanyCurrencyGetList

- **Auth**: `options.Bearer`
- **Signature**: `CompanyCurrencyGetList(CompanyCurrencyGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyCurrencyGetListRequest` | `src/FlowAccount/Requests/CompanyCurrency/CompanyCurrencyGetListRequest.cs` |

