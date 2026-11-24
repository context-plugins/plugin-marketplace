export { AudioscrapeClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { AgentRail } from "./resources/agent-rail.js";
export { ApiKeys } from "./resources/api-keys.js";
export { Charts } from "./resources/charts.js";
export { DataExport } from "./resources/data-export.js";
export { Episodes } from "./resources/episodes.js";
export { Items } from "./resources/items.js";
export { KnowledgeGraph } from "./resources/knowledge-graph.js";
export { Libraries } from "./resources/libraries.js";
export { Persons } from "./resources/persons.js";
export { Podcasts } from "./resources/podcasts.js";
export { Search } from "./resources/search.js";
export { System } from "./resources/system.js";
export { Workspaces } from "./resources/workspaces.js";

export { agentSearchRequestSchema, type AgentSearchRequest } from "./models/agent-search-request.js";
export {
  agentTranscribeRequestSchema,
  type AgentTranscribeRequest,
} from "./models/agent-transcribe-request.js";
export { apiErrorBodySchema, type ApiErrorBody } from "./models/api-error-body.js";
export { apiErrorBodyErrorSchema, type ApiErrorBodyError } from "./models/api-error-body-error.js";
export { apiKeySchema, type ApiKey } from "./models/api-key.js";
export { apiKeyUsageSchema, type ApiKeyUsage } from "./models/api-key-usage.js";
export { buyCreditRequestSchema, type BuyCreditRequest } from "./models/buy-credit-request.js";
export { chartPodcastEntrySchema, type ChartPodcastEntry } from "./models/chart-podcast-entry.js";
export { createApiKeySchema, type CreateApiKey } from "./models/create-api-key.js";
export {
  createExportJobResponseSchema,
  type CreateExportJobResponse,
} from "./models/create-export-job-response.js";
export { datasetDetailSchema, type DatasetDetail } from "./models/dataset-detail.js";
export { datasetListSchema, type DatasetList } from "./models/dataset-list.js";
export { datasetSummarySchema, type DatasetSummary } from "./models/dataset-summary.js";
export { entityDetailSchema, type EntityDetail } from "./models/entity-detail.js";
export { entityEpisodeMentionSchema, type EntityEpisodeMention } from "./models/entity-episode-mention.js";
export { entityRefSchema, type EntityRef } from "./models/entity-ref.js";
export { entitySearchResponseSchema, type EntitySearchResponse } from "./models/entity-search-response.js";
export { episodeSchema, type Episode } from "./models/episode.js";
export { episodeDetailSchema, type EpisodeDetail } from "./models/episode-detail.js";
export { episodeFullSchema, type EpisodeFull } from "./models/episode-full.js";
export { episodeInPodcastSchema, type EpisodeInPodcast } from "./models/episode-in-podcast.js";
export { episodeListSchema, type EpisodeList } from "./models/episode-list.js";
export { episodeSummarySchema, type EpisodeSummary } from "./models/episode-summary.js";
export { exportJobStatusSchema, type ExportJobStatus } from "./models/export-job-status.js";
export { healthResponseSchema, type HealthResponse } from "./models/health-response.js";
export { itemSchema, type Item } from "./models/item.js";
export { itemListSchema, type ItemList } from "./models/item-list.js";
export { itemPodcastRefSchema, type ItemPodcastRef } from "./models/item-podcast-ref.js";
export { itemPodcastRef2Schema, type ItemPodcastRef2 } from "./models/item-podcast-ref2.js";
export { librarySchema, type Library } from "./models/library.js";
export { libraryDetailSchema, type LibraryDetail } from "./models/library-detail.js";
export { libraryListSchema, type LibraryList } from "./models/library-list.js";
export { meApiKeySchema, type MeApiKey } from "./models/me-api-key.js";
export { meApiKey1Schema, type MeApiKey1 } from "./models/me-api-key1.js";
export { mePlanSchema, type MePlan } from "./models/me-plan.js";
export { meResponseSchema, type MeResponse } from "./models/me-response.js";
export { meUserSchema, type MeUser } from "./models/me-user.js";
export { meWorkspaceSchema, type MeWorkspace } from "./models/me-workspace.js";
export { meWorkspace1Schema, type MeWorkspace1 } from "./models/me-workspace1.js";
export { personAppearanceSchema, type PersonAppearance } from "./models/person-appearance.js";
export { personDetailSchema, type PersonDetail } from "./models/person-detail.js";
export { personListSchema, type PersonList } from "./models/person-list.js";
export { personSummarySchema, type PersonSummary } from "./models/person-summary.js";
export { planLimitsResponseSchema, type PlanLimitsResponse } from "./models/plan-limits-response.js";
export { podcastSchema, type Podcast } from "./models/podcast.js";
export { podcastDetailSchema, type PodcastDetail } from "./models/podcast-detail.js";
export { podcastFullSchema, type PodcastFull } from "./models/podcast-full.js";
export { podcastListSchema, type PodcastList } from "./models/podcast-list.js";
export {
  podcastRankingHistoryEntrySchema,
  type PodcastRankingHistoryEntry,
} from "./models/podcast-ranking-history-entry.js";
export { podcastRefSchema, type PodcastRef } from "./models/podcast-ref.js";
export { podcastRef2Schema, type PodcastRef2 } from "./models/podcast-ref2.js";
export { podcastSummarySchema, type PodcastSummary } from "./models/podcast-summary.js";
export { resultUrlsSchema, type ResultUrls } from "./models/result-urls.js";
export { searchFiltersSchema, type SearchFilters } from "./models/search-filters.js";
export { searchMetaSchema, type SearchMeta } from "./models/search-meta.js";
export { searchRequestSchema, type SearchRequest } from "./models/search-request.js";
export { searchResponseSchema, type SearchResponse } from "./models/search-response.js";
export { searchResultSchema, type SearchResult } from "./models/search-result.js";
export { sortOptionsSchema, type SortOptions } from "./models/sort-options.js";
export { timestampSchema, type Timestamp } from "./models/timestamp.js";
export { transcriptSchema, type Transcript } from "./models/transcript.js";
export { transcriptPartialSchema, type TranscriptPartial } from "./models/transcript-partial.js";
export { transcriptPartial2Schema, type TranscriptPartial2 } from "./models/transcript-partial2.js";
export { transcriptSegmentSchema, type TranscriptSegment } from "./models/transcript-segment.js";
export { trendingEntitySchema, type TrendingEntity } from "./models/trending-entity.js";
export { trendingResponseSchema, type TrendingResponse } from "./models/trending-response.js";
export { trendingSearchSchema, type TrendingSearch } from "./models/trending-search.js";
export { uploadFromUrlSchema, type UploadFromUrl } from "./models/upload-from-url.js";
export { uploadResponseSchema, type UploadResponse } from "./models/upload-response.js";
export { usageCounterSchema, type UsageCounter } from "./models/usage-counter.js";
export { usageInfoSchema, type UsageInfo } from "./models/usage-info.js";
export { usageInfo2Schema, type UsageInfo2 } from "./models/usage-info2.js";
export { usageResponseSchema, type UsageResponse } from "./models/usage-response.js";
export { workspaceDetailSchema, type WorkspaceDetail } from "./models/workspace-detail.js";
export { workspaceListSchema, type WorkspaceList } from "./models/workspace-list.js";
export { workspaceSummarySchema, type WorkspaceSummary } from "./models/workspace-summary.js";

export {
  CoreError as AudioscrapeError,
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
