<!-- Generated file — do not edit; regenerated with the SDK. -->

# Robot — operations

Accessor: `client.Robot` · Source: `src/DynamicFeed/Api/Robot.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### V1AnchorDailyV1AnchorDailyGet

- **Signature**: `V1AnchorDailyV1AnchorDailyGet(V1AnchorDailyV1AnchorDailyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `object`
- **Error**: `ApiException<V1AnchorDailyV1AnchorDailyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1AnchorDailyV1AnchorDailyGetRequest` | `src/DynamicFeed/Requests/Robot/V1AnchorDailyV1AnchorDailyGetRequest.cs` |
| `V1AnchorDailyV1AnchorDailyGetError` | `src/DynamicFeed/Errors/V1AnchorDailyV1AnchorDailyGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1AnchorUpgradeV1AnchorUpgradePost

- **Signature**: `V1AnchorUpgradeV1AnchorUpgradePost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1AnchorV1AnchorPost

- **Signature**: `V1AnchorV1AnchorPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1AwarenessV1AwarenessPost

- **Signature**: `V1AwarenessV1AwarenessPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1HumanoidV1HumanoidPost

- **Signature**: `V1HumanoidV1HumanoidPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1MarineV1MarinePost

- **Signature**: `V1MarineV1MarinePost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1PreflightV1PreflightPost

- **Signature**: `V1PreflightV1PreflightPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1RoadV1RoadPost

- **Signature**: `V1RoadV1RoadPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1RobotReceiptSampleV1RobotReceiptSampleGet

- **Signature**: `V1RobotReceiptSampleV1RobotReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### V1RobotReceiptV1RobotReceiptPost

- **Signature**: `V1RobotReceiptV1RobotReceiptPost(V1RobotReceiptV1RobotReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<V1RobotReceiptV1RobotReceiptPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RobotReceiptV1RobotReceiptPostRequest` | `src/DynamicFeed/Requests/Robot/V1RobotReceiptV1RobotReceiptPostRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `V1RobotReceiptV1RobotReceiptPostError` | `src/DynamicFeed/Errors/V1RobotReceiptV1RobotReceiptPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

