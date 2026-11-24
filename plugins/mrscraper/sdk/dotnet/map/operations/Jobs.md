<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/MrScraper/Api/Jobs.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJobs

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetJobs(GetJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `page` ← `Page`, `sortField` ← `SortField`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `startAt` ← `StartAt`, `endAt` ← `EndAt`, `dateRangeColumn` ← `DateRangeColumn`, `name` ← `Name`, `status` ← `Status`
- **Returns**: `JobsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetJobsRequest` | `src/MrScraper/Requests/Jobs/GetJobsRequest.cs` |
| `JobsResponse` | `src/MrScraper/Models/JobsResponse.cs` |

### GetJobsById

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetJobsById(GetJobsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `JobsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetJobsByIdRequest` | `src/MrScraper/Requests/Jobs/GetJobsByIdRequest.cs` |
| `JobsResponse1` | `src/MrScraper/Models/JobsResponse1.cs` |

### PostJobs

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PostJobs(PostJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `JobsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostJobsRequest` | `src/MrScraper/Requests/Jobs/PostJobsRequest.cs` |
| `JobJob` | `src/MrScraper/Models/JobJob.cs` |
| `JobsResponse1` | `src/MrScraper/Models/JobsResponse1.cs` |

### PutJobsById

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PutJobsById(PutJobsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `JobsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutJobsByIdRequest` | `src/MrScraper/Requests/Jobs/PutJobsByIdRequest.cs` |
| `JobJob` | `src/MrScraper/Models/JobJob.cs` |
| `JobsResponse1` | `src/MrScraper/Models/JobsResponse1.cs` |

