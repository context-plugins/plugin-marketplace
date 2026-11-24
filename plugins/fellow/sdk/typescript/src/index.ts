export { FellowClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ActionItems } from "./resources/action-items.js";
export { Notes } from "./resources/notes.js";
export { Recordings } from "./resources/recordings.js";
export { Users } from "./resources/users.js";
export { Webhooks } from "./resources/webhooks.js";

export {
  ApiRecapTemplateSectionType,
  apiRecapTemplateSectionTypeSchema,
} from "./models/api-recap-template-section-type.js";
export { actionItemSchema, type ActionItem } from "./models/action-item.js";
export { actionItemAssigneeSchema, type ActionItemAssignee } from "./models/action-item-assignee.js";
export { actionItemFiltersSchema, type ActionItemFilters } from "./models/action-item-filters.js";
export { ActionItemOrderBy, actionItemOrderBySchema } from "./models/action-item-order-by.js";
export { actionItemResponseSchema, type ActionItemResponse } from "./models/action-item-response.js";
export { ActionItemStatus, actionItemStatusSchema } from "./models/action-item-status.js";
export {
  actionItemsListResponseSchema,
  type ActionItemsListResponse,
} from "./models/action-items-list-response.js";
export {
  appendNoteAgendaRequestSchema,
  type AppendNoteAgendaRequest,
} from "./models/append-note-agenda-request.js";
export { attendeeSchema, type Attendee } from "./models/attendee.js";
export {
  authenticatedUserResponseSchema,
  type AuthenticatedUserResponse,
} from "./models/authenticated-user-response.js";
export { basicAuthSchema, type BasicAuth } from "./models/basic-auth.js";
export { bearerTokenAuthSchema, type BearerTokenAuth } from "./models/bearer-token-auth.js";
export { CompletionType, completionTypeSchema } from "./models/completion-type.js";
export { contentSchema, type Content } from "./models/unions/content.js";
export { createWebhookRequestSchema, type CreateWebhookRequest } from "./models/create-webhook-request.js";
export {
  findReplaceNoteAgendaRequestSchema,
  type FindReplaceNoteAgendaRequest,
} from "./models/find-replace-note-agenda-request.js";
export {
  getActionItemsRequestSchema,
  type GetActionItemsRequest,
} from "./models/get-action-items-request.js";
export { getNotesRequestSchema, type GetNotesRequest } from "./models/get-notes-request.js";
export { getRecordingsRequestSchema, type GetRecordingsRequest } from "./models/get-recordings-request.js";
export { getUploadsRequestSchema, type GetUploadsRequest } from "./models/get-uploads-request.js";
export {
  markActionItemCompleteRequestSchema,
  type MarkActionItemCompleteRequest,
} from "./models/mark-action-item-complete-request.js";
export { mediaAuthSchema, type MediaAuth } from "./models/unions/media-auth.js";
export { mediaUrlConfigSchema, type MediaUrlConfig } from "./models/media-url-config.js";
export { messageResponseSchema, type MessageResponse } from "./models/message-response.js";
export { noteSchema, type Note } from "./models/note.js";
export { noteAgendaSchema, type NoteAgenda } from "./models/note-agenda.js";
export { noteAgendaResponseSchema, type NoteAgendaResponse } from "./models/note-agenda-response.js";
export { noteFiltersSchema, type NoteFilters } from "./models/note-filters.js";
export {
  noteIncludableExpensiveFieldSchema,
  type NoteIncludableExpensiveField,
} from "./models/note-includable-expensive-field.js";
export { noteResponseSchema, type NoteResponse } from "./models/note-response.js";
export { notesListResponseSchema, type NotesListResponse } from "./models/notes-list-response.js";
export { pageInfoSchema, type PageInfo } from "./models/page-info.js";
export {
  paginatedRequestParamsSchema,
  type PaginatedRequestParams,
} from "./models/paginated-request-params.js";
export {
  paginatedResponseActionItemSchema,
  type PaginatedResponseActionItem,
} from "./models/paginated-response-action-item.js";
export { paginatedResponseNoteSchema, type PaginatedResponseNote } from "./models/paginated-response-note.js";
export {
  paginatedResponseRecordingUploadSchema,
  type PaginatedResponseRecordingUpload,
} from "./models/paginated-response-recording-upload.js";
export {
  paginatedResponseRecordingSchema,
  type PaginatedResponseRecording,
} from "./models/paginated-response-recording.js";
export {
  paginatedResponseWebhookSchema,
  type PaginatedResponseWebhook,
} from "./models/paginated-response-webhook.js";
export {
  prependNoteAgendaRequestSchema,
  type PrependNoteAgendaRequest,
} from "./models/prepend-note-agenda-request.js";
export { recapSchema, type Recap } from "./models/recap.js";
export { recapActionItemSchema, type RecapActionItem } from "./models/recap-action-item.js";
export { recapBulletPointSchema, type RecapBulletPoint } from "./models/recap-bullet-point.js";
export { recapDecisionSchema, type RecapDecision } from "./models/recap-decision.js";
export { recapKeyMomentSchema, type RecapKeyMoment } from "./models/recap-key-moment.js";
export { recapTemplateSectionSchema, type RecapTemplateSection } from "./models/recap-template-section.js";
export { recapTopicSchema, type RecapTopic } from "./models/recap-topic.js";
export { recordingSchema, type Recording } from "./models/recording.js";
export { recordingFiltersSchema, type RecordingFilters } from "./models/recording-filters.js";
export {
  recordingIncludableExpensiveFieldSchema,
  type RecordingIncludableExpensiveField,
} from "./models/recording-includable-expensive-field.js";
export { recordingResponseSchema, type RecordingResponse } from "./models/recording-response.js";
export { recordingUploadSchema, type RecordingUpload } from "./models/recording-upload.js";
export {
  recordingUploadRequestSchema,
  type RecordingUploadRequest,
} from "./models/recording-upload-request.js";
export {
  recordingUploadResponseSchema,
  type RecordingUploadResponse,
} from "./models/recording-upload-response.js";
export {
  recordingUploadSubmitResponseSchema,
  type RecordingUploadSubmitResponse,
} from "./models/recording-upload-submit-response.js";
export {
  recordingUploadsListResponseSchema,
  type RecordingUploadsListResponse,
} from "./models/recording-uploads-list-response.js";
export {
  recordingsListResponseSchema,
  type RecordingsListResponse,
} from "./models/recordings-list-response.js";
export { Scope, scopeSchema } from "./models/scope.js";
export {
  ScopeFellowDeveloperWebhooksApi,
  scopeFellowDeveloperWebhooksApiSchema,
} from "./models/scope-fellow-developer-webhooks-api.js";
export { Status, statusSchema } from "./models/status.js";
export {
  StatusFellowDeveloperWebhooksApi,
  statusFellowDeveloperWebhooksApiSchema,
} from "./models/status-fellow-developer-webhooks-api.js";
export { transcriptSchema, type Transcript } from "./models/transcript.js";
export { transcriptSegmentSchema, type TranscriptSegment } from "./models/transcript-segment.js";
export { TranscriptionLanguage, transcriptionLanguageSchema } from "./models/transcription-language.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { updateWebhookRequestSchema, type UpdateWebhookRequest } from "./models/update-webhook-request.js";
export { uploadFiltersSchema, type UploadFilters } from "./models/upload-filters.js";
export { userInfoSchema, type UserInfo } from "./models/user-info.js";
export { webhookSchema, type Webhook } from "./models/webhook.js";
export { webhookCreateResponseSchema, type WebhookCreateResponse } from "./models/webhook-create-response.js";
export { webhookDeleteResponseSchema, type WebhookDeleteResponse } from "./models/webhook-delete-response.js";
export { webhookResponseSchema, type WebhookResponse } from "./models/webhook-response.js";
export { webhookWithSecretSchema, type WebhookWithSecret } from "./models/webhook-with-secret.js";
export { webhooksListResponseSchema, type WebhooksListResponse } from "./models/webhooks-list-response.js";
export { workspaceInfoSchema, type WorkspaceInfo } from "./models/workspace-info.js";
export {
  writeNoteAgendaRequestSchema,
  type WriteNoteAgendaRequest,
} from "./models/write-note-agenda-request.js";

export {
  CoreError as FellowError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
