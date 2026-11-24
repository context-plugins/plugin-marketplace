<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recordings — operations

Accessor: `client.recordings` · Source: `src/resources/recordings.ts` · 6 operations · Request types: namespace `Recordings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fellow`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsDeveloperApiApiDeleteRecording

- **Signature**: `appsDeveloperApiApiDeleteRecording(request: Recordings.AppsDeveloperApiApiDeleteRecordingRequest, options?: RequestOptions): ApiPromise<MessageResponse, ApiError>`
- **Wire**: `DELETE /api/v1/recording/{recording_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiDeleteRecordingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `recordingId` | `path` | `recording_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### appsDeveloperApiApiGetRecordingById

- **Signature**: `appsDeveloperApiApiGetRecordingById(request: Recordings.AppsDeveloperApiApiGetRecordingByIdRequest, options?: RequestOptions): ApiPromise<RecordingResponse, ApiError>`
- **Wire**: `GET /api/v1/recording/{recording_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecordingResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiGetRecordingByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `recordingId` | `path` | `recording_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingResponse` | `recordingResponseSchema` | `src/models/recording-response.ts` |

### appsDeveloperApiApiGetRecordings

- **Signature**: `appsDeveloperApiApiGetRecordings(request: Recordings.AppsDeveloperApiApiGetRecordingsRequest, options?: RequestOptions): ApiPromise<RecordingsListResponse, ApiError>`
- **Wire**: `POST /api/v1/recordings`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordingsListResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiGetRecordingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetRecordingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetRecordingsRequest` | `getRecordingsRequestSchema` | `src/models/get-recordings-request.ts` |
| `RecordingsListResponse` | `recordingsListResponseSchema` | `src/models/recordings-list-response.ts` |

### appsDeveloperApiApiGetUploadById

- **Signature**: `appsDeveloperApiApiGetUploadById(request: Recordings.AppsDeveloperApiApiGetUploadByIdRequest, options?: RequestOptions): ApiPromise<RecordingUploadResponse, ApiError>`
- **Wire**: `GET /api/v1/recordings/upload/{recording_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecordingUploadResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiGetUploadByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `recordingId` | `path` | `recording_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingUploadResponse` | `recordingUploadResponseSchema` | `src/models/recording-upload-response.ts` |

### appsDeveloperApiApiListUploads

- **Signature**: `appsDeveloperApiApiListUploads(request: Recordings.AppsDeveloperApiApiListUploadsRequest, options?: RequestOptions): ApiPromise<RecordingUploadsListResponse, ApiError>`
- **Wire**: `POST /api/v1/recordings/upload/list`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordingUploadsListResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiListUploadsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetUploadsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetUploadsRequest` | `getUploadsRequestSchema` | `src/models/get-uploads-request.ts` |
| `RecordingUploadsListResponse` | `recordingUploadsListResponseSchema` | `src/models/recording-uploads-list-response.ts` |

### appsDeveloperApiApiUploadRecording

- **Signature**: `appsDeveloperApiApiUploadRecording(request: Recordings.AppsDeveloperApiApiUploadRecordingRequest, options?: RequestOptions): ApiPromise<RecordingUploadSubmitResponse, ApiError>`
- **Wire**: `POST /api/v1/recordings/upload`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordingUploadSubmitResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recordings.AppsDeveloperApiApiUploadRecordingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecordingUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingUploadRequest` | `recordingUploadRequestSchema` | `src/models/recording-upload-request.ts` |
| `RecordingUploadSubmitResponse` | `recordingUploadSubmitResponseSchema` | `src/models/recording-upload-submit-response.ts` |

