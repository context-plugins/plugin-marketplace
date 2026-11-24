<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recordings — operations

Accessor: `client.Recordings` · Source: `src/Fellow/Api/Recordings.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AppsDeveloperApiApiDeleteRecording

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiDeleteRecording(AppsDeveloperApiApiDeleteRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecordingId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiDeleteRecordingRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiDeleteRecordingRequest.cs` |
| `MessageResponse` | `src/Fellow/Models/MessageResponse.cs` |

### AppsDeveloperApiApiGetRecordingById

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetRecordingById(AppsDeveloperApiApiGetRecordingByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecordingId`
- **Returns**: `RecordingResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetRecordingByIdRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetRecordingByIdRequest.cs` |
| `RecordingResponse` | `src/Fellow/Models/RecordingResponse.cs` |

### AppsDeveloperApiApiGetRecordings

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetRecordings(AppsDeveloperApiApiGetRecordingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordingsListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetRecordingsRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetRecordingsRequest.cs` |
| `GetRecordingsRequest` | `src/Fellow/Models/GetRecordingsRequest.cs` |
| `RecordingsListResponse` | `src/Fellow/Models/RecordingsListResponse.cs` |

### AppsDeveloperApiApiGetUploadById

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetUploadById(AppsDeveloperApiApiGetUploadByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecordingId`
- **Returns**: `RecordingUploadResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetUploadByIdRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetUploadByIdRequest.cs` |
| `RecordingUploadResponse` | `src/Fellow/Models/RecordingUploadResponse.cs` |

### AppsDeveloperApiApiListUploads

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiListUploads(AppsDeveloperApiApiListUploadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordingUploadsListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiListUploadsRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiListUploadsRequest.cs` |
| `GetUploadsRequest` | `src/Fellow/Models/GetUploadsRequest.cs` |
| `RecordingUploadsListResponse` | `src/Fellow/Models/RecordingUploadsListResponse.cs` |

### AppsDeveloperApiApiUploadRecording

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiUploadRecording(AppsDeveloperApiApiUploadRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordingUploadSubmitResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiUploadRecordingRequest` | `src/Fellow/Requests/Recordings/AppsDeveloperApiApiUploadRecordingRequest.cs` |
| `RecordingUploadRequest` | `src/Fellow/Models/RecordingUploadRequest.cs` |
| `RecordingUploadSubmitResponse` | `src/Fellow/Models/RecordingUploadSubmitResponse.cs` |

