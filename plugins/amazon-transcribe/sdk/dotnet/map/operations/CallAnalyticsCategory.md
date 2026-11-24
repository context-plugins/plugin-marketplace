<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallAnalyticsCategory — operations

Accessor: `client.CallAnalyticsCategory` · Source: `src/AmazonTranscribe/Api/CallAnalyticsCategory.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCallAnalyticsCategory

- **Auth**: `options.Sigv4`
- **Signature**: `CreateCallAnalyticsCategory(CreateCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCallAnalyticsCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCallAnalyticsCategoryOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsCategory/CreateCallAnalyticsCategoryOperationRequest.cs` |
| `XAmzTarget` | `src/AmazonTranscribe/Models/Enums/XAmzTarget.cs` |
| `CreateCallAnalyticsCategoryError` | `src/AmazonTranscribe/Errors/CreateCallAnalyticsCategoryError.cs` |

### DeleteCallAnalyticsCategory

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCallAnalyticsCategory(DeleteCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCallAnalyticsCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCallAnalyticsCategoryOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsCategory/DeleteCallAnalyticsCategoryOperationRequest.cs` |
| `XAmzTarget1` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1.cs` |
| `DeleteCallAnalyticsCategoryError` | `src/AmazonTranscribe/Errors/DeleteCallAnalyticsCategoryError.cs` |

### GetCallAnalyticsCategory

- **Auth**: `options.Sigv4`
- **Signature**: `GetCallAnalyticsCategory(GetCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCallAnalyticsCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCallAnalyticsCategoryOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsCategory/GetCallAnalyticsCategoryOperationRequest.cs` |
| `XAmzTarget2` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2.cs` |
| `GetCallAnalyticsCategoryError` | `src/AmazonTranscribe/Errors/GetCallAnalyticsCategoryError.cs` |

### ListCallAnalyticsCategories

- **Auth**: `options.Sigv4`
- **Signature**: `ListCallAnalyticsCategories(ListCallAnalyticsCategoriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCallAnalyticsCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCallAnalyticsCategoriesOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsCategory/ListCallAnalyticsCategoriesOperationRequest.cs` |
| `XAmzTarget3` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3.cs` |
| `ListCallAnalyticsCategoriesError` | `src/AmazonTranscribe/Errors/ListCallAnalyticsCategoriesError.cs` |

### UpdateCallAnalyticsCategory

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateCallAnalyticsCategory(UpdateCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateCallAnalyticsCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCallAnalyticsCategoryOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsCategory/UpdateCallAnalyticsCategoryOperationRequest.cs` |
| `XAmzTarget4` | `src/AmazonTranscribe/Models/Enums/XAmzTarget4.cs` |
| `UpdateCallAnalyticsCategoryError` | `src/AmazonTranscribe/Errors/UpdateCallAnalyticsCategoryError.cs` |

