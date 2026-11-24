<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.Auth` · Source: `src/MrScraper/Api/Auth.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSubscriptionAccounts

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetSubscriptionAccounts(GetSubscriptionAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SubscriptionAccountsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSubscriptionAccountsRequest` | `src/MrScraper/Requests/Auth/GetSubscriptionAccountsRequest.cs` |
| `SubscriptionAccountsResponse` | `src/MrScraper/Models/SubscriptionAccountsResponse.cs` |

