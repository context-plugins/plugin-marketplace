<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.Channels` · Source: `src/AmazonDevOpsGuru/Api/Channels.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddNotificationChannel

- **Auth**: `options.Sigv4`
- **Signature**: `AddNotificationChannel(AddNotificationChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AddNotificationChannelResponse`
- **Error**: `ApiException<AddNotificationChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddNotificationChannelRequest` | `src/AmazonDevOpsGuru/Requests/Channels/AddNotificationChannelRequest.cs` |
| `ChannelsRequest` | `src/AmazonDevOpsGuru/Models/ChannelsRequest.cs` |
| `AddNotificationChannelResponse` | `src/AmazonDevOpsGuru/Models/AddNotificationChannelResponse.cs` |
| `AddNotificationChannelError` | `src/AmazonDevOpsGuru/Errors/AddNotificationChannelError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonDevOpsGuru/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### ListNotificationChannels

- **Auth**: `options.Sigv4`
- **Signature**: `ListNotificationChannels(ListNotificationChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListNotificationChannelsResponse`
- **Error**: `ApiException<ListNotificationChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListNotificationChannelsRequest` | `src/AmazonDevOpsGuru/Requests/Channels/ListNotificationChannelsRequest.cs` |
| `ChannelsRequest1` | `src/AmazonDevOpsGuru/Models/ChannelsRequest1.cs` |
| `ListNotificationChannelsResponse` | `src/AmazonDevOpsGuru/Models/ListNotificationChannelsResponse.cs` |
| `ListNotificationChannelsError` | `src/AmazonDevOpsGuru/Errors/ListNotificationChannelsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### RemoveNotificationChannel

- **Auth**: `options.Sigv4`
- **Signature**: `RemoveNotificationChannel(RemoveNotificationChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RemoveNotificationChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveNotificationChannelRequest` | `src/AmazonDevOpsGuru/Requests/Channels/RemoveNotificationChannelRequest.cs` |
| `RemoveNotificationChannelError` | `src/AmazonDevOpsGuru/Errors/RemoveNotificationChannelError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

