<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/Ortto/Api/Campaigns.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCampaignCalendar

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCampaignCalendar(GetCampaignCalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCampaignCalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignCalendarRequest` | `src/Ortto/Requests/Campaigns/GetCampaignCalendarRequest.cs` |
| `CampaignCalendarRequest` | `src/Ortto/Models/CampaignCalendarRequest.cs` |
| `GetCampaignCalendarError` | `src/Ortto/Errors/GetCampaignCalendarError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

### GetCampaignReport

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCampaignReport(GetCampaignReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCampaignReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignReportRequest` | `src/Ortto/Requests/Campaigns/GetCampaignReportRequest.cs` |
| `CampaignReportsGetRequest` | `src/Ortto/Models/CampaignReportsGetRequest.cs` |
| `GetCampaignReportError` | `src/Ortto/Errors/GetCampaignReportError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

