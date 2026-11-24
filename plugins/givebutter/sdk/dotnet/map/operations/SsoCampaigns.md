<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoCampaigns — operations

Accessor: `client.SsoCampaigns` · Source: `src/Givebutter/Api/SsoCampaigns.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SsoCampaignsShow

- **Auth**: `options.Http`
- **Signature**: `SsoCampaignsShow(SsoCampaignsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `CampaignResource`
- **Error**: `ApiException<SsoCampaignsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationException1([NotNullWhen(true)] out AuthenticationException1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SsoCampaignsShowRequest` | `src/Givebutter/Requests/SsoCampaigns/SsoCampaignsShowRequest.cs` |
| `CampaignResource` | `src/Givebutter/Models/CampaignResource.cs` |
| `SsoCampaignsShowError` | `src/Givebutter/Errors/SsoCampaignsShowError.cs` |
| `AuthenticationException1` | `src/Givebutter/Models/AuthenticationException1.cs` |

