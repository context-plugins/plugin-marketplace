import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import { badGatewayExceptionSchema, type BadGatewayException } from "../models/bad-gateway-exception.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  batchCreateCustomVocabularyItemRequestSchema,
  type BatchCreateCustomVocabularyItemRequest,
} from "../models/batch-create-custom-vocabulary-item-request.js";
import {
  batchCreateCustomVocabularyItemResponseSchema,
  type BatchCreateCustomVocabularyItemResponse,
} from "../models/batch-create-custom-vocabulary-item-response.js";
import {
  batchDeleteCustomVocabularyItemRequestSchema,
  type BatchDeleteCustomVocabularyItemRequest,
} from "../models/batch-delete-custom-vocabulary-item-request.js";
import {
  batchDeleteCustomVocabularyItemResponseSchema,
  type BatchDeleteCustomVocabularyItemResponse,
} from "../models/batch-delete-custom-vocabulary-item-response.js";
import {
  batchUpdateCustomVocabularyItemRequestSchema,
  type BatchUpdateCustomVocabularyItemRequest,
} from "../models/batch-update-custom-vocabulary-item-request.js";
import {
  batchUpdateCustomVocabularyItemResponseSchema,
  type BatchUpdateCustomVocabularyItemResponse,
} from "../models/batch-update-custom-vocabulary-item-response.js";
import {
  buildBotLocaleRequestSchema,
  type BuildBotLocaleRequest,
} from "../models/build-bot-locale-request.js";
import {
  buildBotLocaleResponseSchema,
  type BuildBotLocaleResponse,
} from "../models/build-bot-locale-response.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  createBotAliasRequestSchema,
  type CreateBotAliasRequest,
} from "../models/create-bot-alias-request.js";
import {
  createBotAliasResponseSchema,
  type CreateBotAliasResponse,
} from "../models/create-bot-alias-response.js";
import {
  createBotLocaleRequestSchema,
  type CreateBotLocaleRequest,
} from "../models/create-bot-locale-request.js";
import {
  createBotLocaleResponseSchema,
  type CreateBotLocaleResponse,
} from "../models/create-bot-locale-response.js";
import {
  createBotReplicaRequestSchema,
  type CreateBotReplicaRequest,
} from "../models/create-bot-replica-request.js";
import {
  createBotReplicaResponseSchema,
  type CreateBotReplicaResponse,
} from "../models/create-bot-replica-response.js";
import { createBotRequestSchema, type CreateBotRequest } from "../models/create-bot-request.js";
import { createBotResponseSchema, type CreateBotResponse } from "../models/create-bot-response.js";
import {
  createBotVersionRequestSchema,
  type CreateBotVersionRequest,
} from "../models/create-bot-version-request.js";
import {
  createBotVersionResponseSchema,
  type CreateBotVersionResponse,
} from "../models/create-bot-version-response.js";
import { createIntentRequestSchema, type CreateIntentRequest } from "../models/create-intent-request.js";
import { createIntentResponseSchema, type CreateIntentResponse } from "../models/create-intent-response.js";
import { createSlotRequestSchema, type CreateSlotRequest } from "../models/create-slot-request.js";
import { createSlotResponseSchema, type CreateSlotResponse } from "../models/create-slot-response.js";
import {
  createSlotTypeRequestSchema,
  type CreateSlotTypeRequest,
} from "../models/create-slot-type-request.js";
import {
  createSlotTypeResponseSchema,
  type CreateSlotTypeResponse,
} from "../models/create-slot-type-response.js";
import {
  deleteBotAliasRequestSchema,
  type DeleteBotAliasRequest,
} from "../models/delete-bot-alias-request.js";
import {
  deleteBotAliasResponseSchema,
  type DeleteBotAliasResponse,
} from "../models/delete-bot-alias-response.js";
import {
  deleteBotAnalyzerRecommendationRequestSchema,
  type DeleteBotAnalyzerRecommendationRequest,
} from "../models/delete-bot-analyzer-recommendation-request.js";
import {
  deleteBotLocaleRequestSchema,
  type DeleteBotLocaleRequest,
} from "../models/delete-bot-locale-request.js";
import {
  deleteBotLocaleResponseSchema,
  type DeleteBotLocaleResponse,
} from "../models/delete-bot-locale-response.js";
import {
  deleteBotReplicaRequestSchema,
  type DeleteBotReplicaRequest,
} from "../models/delete-bot-replica-request.js";
import {
  deleteBotReplicaResponseSchema,
  type DeleteBotReplicaResponse,
} from "../models/delete-bot-replica-response.js";
import { deleteBotRequestSchema, type DeleteBotRequest } from "../models/delete-bot-request.js";
import { deleteBotResponseSchema, type DeleteBotResponse } from "../models/delete-bot-response.js";
import {
  deleteBotVersionRequestSchema,
  type DeleteBotVersionRequest,
} from "../models/delete-bot-version-request.js";
import {
  deleteBotVersionResponseSchema,
  type DeleteBotVersionResponse,
} from "../models/delete-bot-version-response.js";
import {
  deleteCustomVocabularyRequestSchema,
  type DeleteCustomVocabularyRequest,
} from "../models/delete-custom-vocabulary-request.js";
import {
  deleteCustomVocabularyResponseSchema,
  type DeleteCustomVocabularyResponse,
} from "../models/delete-custom-vocabulary-response.js";
import { deleteIntentRequestSchema, type DeleteIntentRequest } from "../models/delete-intent-request.js";
import { deleteSessionRequestSchema, type DeleteSessionRequest } from "../models/delete-session-request.js";
import {
  deleteSessionResponseSchema,
  type DeleteSessionResponse,
} from "../models/delete-session-response.js";
import { deleteSlotRequestSchema, type DeleteSlotRequest } from "../models/delete-slot-request.js";
import {
  deleteSlotTypeRequestSchema,
  type DeleteSlotTypeRequest,
} from "../models/delete-slot-type-request.js";
import {
  deleteUtterancesRequestSchema,
  type DeleteUtterancesRequest,
} from "../models/delete-utterances-request.js";
import {
  dependencyFailedExceptionSchema,
  type DependencyFailedException,
} from "../models/dependency-failed-exception.js";
import {
  describeBotAliasResponseSchema,
  type DescribeBotAliasResponse,
} from "../models/describe-bot-alias-response.js";
import {
  describeBotAnalyzerRecommendationRequestSchema,
  type DescribeBotAnalyzerRecommendationRequest,
} from "../models/describe-bot-analyzer-recommendation-request.js";
import {
  describeBotAnalyzerRecommendationResponseSchema,
  type DescribeBotAnalyzerRecommendationResponse,
} from "../models/describe-bot-analyzer-recommendation-response.js";
import {
  describeBotLocaleResponseSchema,
  type DescribeBotLocaleResponse,
} from "../models/describe-bot-locale-response.js";
import {
  describeBotRecommendationResponseSchema,
  type DescribeBotRecommendationResponse,
} from "../models/describe-bot-recommendation-response.js";
import {
  describeBotReplicaResponseSchema,
  type DescribeBotReplicaResponse,
} from "../models/describe-bot-replica-response.js";
import {
  describeBotResourceGenerationResponseSchema,
  type DescribeBotResourceGenerationResponse,
} from "../models/describe-bot-resource-generation-response.js";
import { describeBotResponseSchema, type DescribeBotResponse } from "../models/describe-bot-response.js";
import {
  describeBotVersionResponseSchema,
  type DescribeBotVersionResponse,
} from "../models/describe-bot-version-response.js";
import {
  describeCustomVocabularyMetadataResponseSchema,
  type DescribeCustomVocabularyMetadataResponse,
} from "../models/describe-custom-vocabulary-metadata-response.js";
import {
  describeIntentResponseSchema,
  type DescribeIntentResponse,
} from "../models/describe-intent-response.js";
import { describeSlotResponseSchema, type DescribeSlotResponse } from "../models/describe-slot-response.js";
import {
  describeSlotTypeResponseSchema,
  type DescribeSlotTypeResponse,
} from "../models/describe-slot-type-response.js";
import {
  generateBotElementRequestSchema,
  type GenerateBotElementRequest,
} from "../models/generate-bot-element-request.js";
import {
  generateBotElementResponseSchema,
  type GenerateBotElementResponse,
} from "../models/generate-bot-element-response.js";
import { getBotsResponseSchema, type GetBotsResponse } from "../models/get-bots-response.js";
import { getSessionResponseSchema, type GetSessionResponse } from "../models/get-session-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  listAggregatedUtterancesRequestSchema,
  type ListAggregatedUtterancesRequest,
} from "../models/list-aggregated-utterances-request.js";
import {
  listAggregatedUtterancesResponseSchema,
  type ListAggregatedUtterancesResponse,
} from "../models/list-aggregated-utterances-response.js";
import {
  listBotAliasReplicasRequestSchema,
  type ListBotAliasReplicasRequest,
} from "../models/list-bot-alias-replicas-request.js";
import {
  listBotAliasReplicasResponseSchema,
  type ListBotAliasReplicasResponse,
} from "../models/list-bot-alias-replicas-response.js";
import {
  listBotAliasesRequestSchema,
  type ListBotAliasesRequest,
} from "../models/list-bot-aliases-request.js";
import {
  listBotAliasesResponseSchema,
  type ListBotAliasesResponse,
} from "../models/list-bot-aliases-response.js";
import {
  listBotAnalyzerHistoryRequestSchema,
  type ListBotAnalyzerHistoryRequest,
} from "../models/list-bot-analyzer-history-request.js";
import {
  listBotAnalyzerHistoryResponseSchema,
  type ListBotAnalyzerHistoryResponse,
} from "../models/list-bot-analyzer-history-response.js";
import {
  listBotLocalesRequestSchema,
  type ListBotLocalesRequest,
} from "../models/list-bot-locales-request.js";
import {
  listBotLocalesResponseSchema,
  type ListBotLocalesResponse,
} from "../models/list-bot-locales-response.js";
import {
  listBotRecommendationsRequestSchema,
  type ListBotRecommendationsRequest,
} from "../models/list-bot-recommendations-request.js";
import {
  listBotRecommendationsResponseSchema,
  type ListBotRecommendationsResponse,
} from "../models/list-bot-recommendations-response.js";
import {
  listBotReplicasRequestSchema,
  type ListBotReplicasRequest,
} from "../models/list-bot-replicas-request.js";
import {
  listBotReplicasResponseSchema,
  type ListBotReplicasResponse,
} from "../models/list-bot-replicas-response.js";
import {
  listBotResourceGenerationsRequestSchema,
  type ListBotResourceGenerationsRequest,
} from "../models/list-bot-resource-generations-request.js";
import {
  listBotResourceGenerationsResponseSchema,
  type ListBotResourceGenerationsResponse,
} from "../models/list-bot-resource-generations-response.js";
import {
  listBotVersionReplicasRequestSchema,
  type ListBotVersionReplicasRequest,
} from "../models/list-bot-version-replicas-request.js";
import {
  listBotVersionReplicasResponseSchema,
  type ListBotVersionReplicasResponse,
} from "../models/list-bot-version-replicas-response.js";
import {
  listBotVersionsRequestSchema,
  type ListBotVersionsRequest,
} from "../models/list-bot-versions-request.js";
import {
  listBotVersionsResponseSchema,
  type ListBotVersionsResponse,
} from "../models/list-bot-versions-response.js";
import { listBotsRequestSchema, type ListBotsRequest } from "../models/list-bots-request.js";
import { listBotsResponseSchema, type ListBotsResponse } from "../models/list-bots-response.js";
import {
  listCustomVocabularyItemsRequestSchema,
  type ListCustomVocabularyItemsRequest,
} from "../models/list-custom-vocabulary-items-request.js";
import {
  listCustomVocabularyItemsResponseSchema,
  type ListCustomVocabularyItemsResponse,
} from "../models/list-custom-vocabulary-items-response.js";
import {
  listIntentMetricsRequestSchema,
  type ListIntentMetricsRequest,
} from "../models/list-intent-metrics-request.js";
import {
  listIntentMetricsResponseSchema,
  type ListIntentMetricsResponse,
} from "../models/list-intent-metrics-response.js";
import {
  listIntentPathsRequestSchema,
  type ListIntentPathsRequest,
} from "../models/list-intent-paths-request.js";
import {
  listIntentPathsResponseSchema,
  type ListIntentPathsResponse,
} from "../models/list-intent-paths-response.js";
import {
  listIntentStageMetricsRequestSchema,
  type ListIntentStageMetricsRequest,
} from "../models/list-intent-stage-metrics-request.js";
import {
  listIntentStageMetricsResponseSchema,
  type ListIntentStageMetricsResponse,
} from "../models/list-intent-stage-metrics-response.js";
import { listIntentsRequestSchema, type ListIntentsRequest } from "../models/list-intents-request.js";
import { listIntentsResponseSchema, type ListIntentsResponse } from "../models/list-intents-response.js";
import {
  listRecommendedIntentsRequestSchema,
  type ListRecommendedIntentsRequest,
} from "../models/list-recommended-intents-request.js";
import {
  listRecommendedIntentsResponseSchema,
  type ListRecommendedIntentsResponse,
} from "../models/list-recommended-intents-response.js";
import {
  listSessionAnalyticsDataRequestSchema,
  type ListSessionAnalyticsDataRequest,
} from "../models/list-session-analytics-data-request.js";
import {
  listSessionAnalyticsDataResponseSchema,
  type ListSessionAnalyticsDataResponse,
} from "../models/list-session-analytics-data-response.js";
import {
  listSessionMetricsRequestSchema,
  type ListSessionMetricsRequest,
} from "../models/list-session-metrics-request.js";
import {
  listSessionMetricsResponseSchema,
  type ListSessionMetricsResponse,
} from "../models/list-session-metrics-response.js";
import { listSlotTypesRequestSchema, type ListSlotTypesRequest } from "../models/list-slot-types-request.js";
import {
  listSlotTypesResponseSchema,
  type ListSlotTypesResponse,
} from "../models/list-slot-types-response.js";
import { listSlotsRequestSchema, type ListSlotsRequest } from "../models/list-slots-request.js";
import { listSlotsResponseSchema, type ListSlotsResponse } from "../models/list-slots-response.js";
import {
  listUtteranceAnalyticsDataRequestSchema,
  type ListUtteranceAnalyticsDataRequest,
} from "../models/list-utterance-analytics-data-request.js";
import {
  listUtteranceAnalyticsDataResponseSchema,
  type ListUtteranceAnalyticsDataResponse,
} from "../models/list-utterance-analytics-data-response.js";
import {
  listUtteranceMetricsRequestSchema,
  type ListUtteranceMetricsRequest,
} from "../models/list-utterance-metrics-request.js";
import {
  listUtteranceMetricsResponseSchema,
  type ListUtteranceMetricsResponse,
} from "../models/list-utterance-metrics-response.js";
import {
  modelsLexCreateBotVersionRequestSchema,
  type ModelsLexCreateBotVersionRequest,
} from "../models/models-lex-create-bot-version-request.js";
import {
  modelsLexCreateBotVersionResponseSchema,
  type ModelsLexCreateBotVersionResponse,
} from "../models/models-lex-create-bot-version-response.js";
import {
  modelsLexDeleteBotAliasRequestSchema,
  type ModelsLexDeleteBotAliasRequest,
} from "../models/models-lex-delete-bot-alias-request.js";
import {
  modelsLexDeleteBotRequestSchema,
  type ModelsLexDeleteBotRequest,
} from "../models/models-lex-delete-bot-request.js";
import {
  modelsLexDeleteBotVersionRequestSchema,
  type ModelsLexDeleteBotVersionRequest,
} from "../models/models-lex-delete-bot-version-request.js";
import {
  modelsLexDeleteIntentRequestSchema,
  type ModelsLexDeleteIntentRequest,
} from "../models/models-lex-delete-intent-request.js";
import {
  modelsLexDeleteSlotTypeRequestSchema,
  type ModelsLexDeleteSlotTypeRequest,
} from "../models/models-lex-delete-slot-type-request.js";
import {
  modelsLexDeleteUtterancesRequestSchema,
  type ModelsLexDeleteUtterancesRequest,
} from "../models/models-lex-delete-utterances-request.js";
import {
  notAcceptableExceptionSchema,
  type NotAcceptableException,
} from "../models/not-acceptable-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import { putSessionRequestSchema, type PutSessionRequest } from "../models/put-session-request.js";
import { putSessionResponseSchema, type PutSessionResponse } from "../models/put-session-response.js";
import { recognizeTextRequestSchema, type RecognizeTextRequest } from "../models/recognize-text-request.js";
import {
  recognizeTextResponseSchema,
  type RecognizeTextResponse,
} from "../models/recognize-text-response.js";
import {
  recognizeUtteranceRequestSchema,
  type RecognizeUtteranceRequest,
} from "../models/recognize-utterance-request.js";
import {
  recognizeUtteranceResponseSchema,
  type RecognizeUtteranceResponse,
} from "../models/recognize-utterance-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  runtimeLexBadGatewayExceptionSchema,
  type RuntimeLexBadGatewayException,
} from "../models/runtime-lex-bad-gateway-exception.js";
import {
  runtimeLexDeleteSessionRequestSchema,
  type RuntimeLexDeleteSessionRequest,
} from "../models/runtime-lex-delete-session-request.js";
import {
  runtimeLexDeleteSessionResponseSchema,
  type RuntimeLexDeleteSessionResponse,
} from "../models/runtime-lex-delete-session-response.js";
import {
  runtimeLexDependencyFailedExceptionSchema,
  type RuntimeLexDependencyFailedException,
} from "../models/runtime-lex-dependency-failed-exception.js";
import {
  runtimeLexGetSessionResponseSchema,
  type RuntimeLexGetSessionResponse,
} from "../models/runtime-lex-get-session-response.js";
import {
  runtimeLexPutSessionRequestSchema,
  type RuntimeLexPutSessionRequest,
} from "../models/runtime-lex-put-session-request.js";
import {
  runtimeLexPutSessionResponseSchema,
  type RuntimeLexPutSessionResponse,
} from "../models/runtime-lex-put-session-response.js";
import {
  runtimeV2LexConflictExceptionSchema,
  type RuntimeV2LexConflictException,
} from "../models/runtime-v2-lex-conflict-exception.js";
import {
  runtimeV2LexInternalServerExceptionSchema,
  type RuntimeV2LexInternalServerException,
} from "../models/runtime-v2-lex-internal-server-exception.js";
import {
  runtimeV2LexResourceNotFoundExceptionSchema,
  type RuntimeV2LexResourceNotFoundException,
} from "../models/runtime-v2-lex-resource-not-found-exception.js";
import {
  runtimeV2LexThrottlingExceptionSchema,
  type RuntimeV2LexThrottlingException,
} from "../models/runtime-v2-lex-throttling-exception.js";
import {
  runtimeV2LexValidationExceptionSchema,
  type RuntimeV2LexValidationException,
} from "../models/runtime-v2-lex-validation-exception.js";
import {
  searchAssociatedTranscriptsRequestSchema,
  type SearchAssociatedTranscriptsRequest,
} from "../models/search-associated-transcripts-request.js";
import {
  searchAssociatedTranscriptsResponseSchema,
  type SearchAssociatedTranscriptsResponse,
} from "../models/search-associated-transcripts-response.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import {
  startBotAnalyzerRequestSchema,
  type StartBotAnalyzerRequest,
} from "../models/start-bot-analyzer-request.js";
import {
  startBotAnalyzerResponseSchema,
  type StartBotAnalyzerResponse,
} from "../models/start-bot-analyzer-response.js";
import {
  startBotRecommendationRequestSchema,
  type StartBotRecommendationRequest,
} from "../models/start-bot-recommendation-request.js";
import {
  startBotRecommendationResponseSchema,
  type StartBotRecommendationResponse,
} from "../models/start-bot-recommendation-response.js";
import {
  startBotResourceGenerationRequestSchema,
  type StartBotResourceGenerationRequest,
} from "../models/start-bot-resource-generation-request.js";
import {
  startBotResourceGenerationResponseSchema,
  type StartBotResourceGenerationResponse,
} from "../models/start-bot-resource-generation-response.js";
import {
  startConversationRequestSchema,
  type StartConversationRequest,
} from "../models/start-conversation-request.js";
import {
  startConversationResponseSchema,
  type StartConversationResponse,
} from "../models/start-conversation-response.js";
import {
  stopBotAnalyzerRequestSchema,
  type StopBotAnalyzerRequest,
} from "../models/stop-bot-analyzer-request.js";
import {
  stopBotAnalyzerResponseSchema,
  type StopBotAnalyzerResponse,
} from "../models/stop-bot-analyzer-response.js";
import {
  stopBotRecommendationRequestSchema,
  type StopBotRecommendationRequest,
} from "../models/stop-bot-recommendation-request.js";
import {
  stopBotRecommendationResponseSchema,
  type StopBotRecommendationResponse,
} from "../models/stop-bot-recommendation-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import {
  updateBotAliasRequestSchema,
  type UpdateBotAliasRequest,
} from "../models/update-bot-alias-request.js";
import {
  updateBotAliasResponseSchema,
  type UpdateBotAliasResponse,
} from "../models/update-bot-alias-response.js";
import {
  updateBotLocaleRequestSchema,
  type UpdateBotLocaleRequest,
} from "../models/update-bot-locale-request.js";
import {
  updateBotLocaleResponseSchema,
  type UpdateBotLocaleResponse,
} from "../models/update-bot-locale-response.js";
import {
  updateBotRecommendationRequestSchema,
  type UpdateBotRecommendationRequest,
} from "../models/update-bot-recommendation-request.js";
import {
  updateBotRecommendationResponseSchema,
  type UpdateBotRecommendationResponse,
} from "../models/update-bot-recommendation-response.js";
import { updateBotRequestSchema, type UpdateBotRequest } from "../models/update-bot-request.js";
import { updateBotResponseSchema, type UpdateBotResponse } from "../models/update-bot-response.js";
import { updateIntentRequestSchema, type UpdateIntentRequest } from "../models/update-intent-request.js";
import { updateIntentResponseSchema, type UpdateIntentResponse } from "../models/update-intent-response.js";
import { updateSlotRequestSchema, type UpdateSlotRequest } from "../models/update-slot-request.js";
import { updateSlotResponseSchema, type UpdateSlotResponse } from "../models/update-slot-response.js";
import {
  updateSlotTypeRequestSchema,
  type UpdateSlotTypeRequest,
} from "../models/update-slot-type-request.js";
import {
  updateSlotTypeResponseSchema,
  type UpdateSlotTypeResponse,
} from "../models/update-slot-type-response.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Bots {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Create Custom Vocabulary Item
   *
   * @remarks
   * Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.
   *
   * @returns Success
   *
   * @throws {@link Bots.BatchCreateCustomVocabularyItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchCreateCustomVocabularyItem(
    request: Bots.BatchCreateCustomVocabularyItemRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchCreateCustomVocabularyItemResponse, Bots.BatchCreateCustomVocabularyItemError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => batchCreateCustomVocabularyItemRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: batchCreateCustomVocabularyItemResponseSchema },
        errorFactory: Bots.BatchCreateCustomVocabularyItemError,
      },
      options,
    );
  }

  /**
   * Batch Delete Custom Vocabulary Item
   *
   * @remarks
   * Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
   *
   * @returns Success
   *
   * @throws {@link Bots.BatchDeleteCustomVocabularyItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchDeleteCustomVocabularyItem(
    request: Bots.BatchDeleteCustomVocabularyItemRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchDeleteCustomVocabularyItemResponse, Bots.BatchDeleteCustomVocabularyItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => batchDeleteCustomVocabularyItemRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: batchDeleteCustomVocabularyItemResponseSchema },
        errorFactory: Bots.BatchDeleteCustomVocabularyItemError,
      },
      options,
    );
  }

  /**
   * Batch Update Custom Vocabulary Item
   *
   * @remarks
   * Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.
   *
   * @returns Success
   *
   * @throws {@link Bots.BatchUpdateCustomVocabularyItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchUpdateCustomVocabularyItem(
    request: Bots.BatchUpdateCustomVocabularyItemRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchUpdateCustomVocabularyItemResponse, Bots.BatchUpdateCustomVocabularyItemError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => batchUpdateCustomVocabularyItemRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: batchUpdateCustomVocabularyItemResponseSchema },
        errorFactory: Bots.BatchUpdateCustomVocabularyItemError,
      },
      options,
    );
  }

  /**
   * Build Bot Locale
   *
   * @remarks
   * Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into
   * multiple locales. At runtime the locale is used to choose a specific build of the bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.BuildBotLocaleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  buildBotLocale(
    request: Bots.BuildBotLocaleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BuildBotLocaleResponse, Bots.BuildBotLocaleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => buildBotLocaleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: buildBotLocaleResponseSchema },
        errorFactory: Bots.BuildBotLocaleError,
      },
      options,
    );
  }

  /**
   * Create Bot
   *
   * @remarks
   * Creates an Amazon Lex conversational bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBot(
    request: Bots.CreateBotRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<CreateBotResponse, Bots.CreateBotError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => createBotRequestSchema)) },
      },
      {
        success: { kind: "json", schema: createBotResponseSchema },
        errorFactory: Bots.CreateBotError,
      },
      options,
    );
  }

  /**
   * Create Bot Alias
   *
   * @remarks
   * Creates an alias for the specified version of a bot. Use an alias to enable you to change the
   * version of a bot without updating applications that use the bot. For example, you can create an
   * alias called "PROD" that your applications use to call the Amazon Lex bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotAliasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBotAlias(
    request: Bots.CreateBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBotAliasResponse, Bots.CreateBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createBotAliasResponseSchema },
        errorFactory: Bots.CreateBotAliasError,
      },
      options,
    );
  }

  /**
   * Create Bot Locale
   *
   * @remarks
   * Creates a locale in the bot. The locale contains the intents and slot types that the bot uses
   * in conversations with users in the specified language and locale. You must add a locale to a
   * bot before you can add intents and slot types to the bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotLocaleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBotLocale(
    request: Bots.CreateBotLocaleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBotLocaleResponse, Bots.CreateBotLocaleError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createBotLocaleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createBotLocaleResponseSchema },
        errorFactory: Bots.CreateBotLocaleError,
      },
      options,
    );
  }

  /**
   * Create Bot Replica
   *
   * @remarks
   * Action to create a replication of the source bot in the secondary region.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotReplicaError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBotReplica(
    request: Bots.CreateBotReplicaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBotReplicaResponse, Bots.CreateBotReplicaError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createBotReplicaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createBotReplicaResponseSchema },
        errorFactory: Bots.CreateBotReplicaError,
      },
      options,
    );
  }

  /**
   * Create Bot Version
   *
   * @remarks
   * Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex
   * sets the version number to 1. Subsequent bot versions increase in an increment of 1. The
   * version number will always represent the total number of versions created of the bot, not the
   * current number of versions. If a bot version is deleted, that bot version number will not be
   * reused.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBotVersion(
    request: Bots.CreateBotVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBotVersionResponse, Bots.CreateBotVersionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createBotVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createBotVersionResponseSchema },
        errorFactory: Bots.CreateBotVersionError,
      },
      options,
    );
  }

  /**
   * Create Bot Version
   *
   * @remarks
   * Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this
   * resource hasn't changed since you created the last version, Amazon Lex doesn't create a new
   * version. It returns the last created version. You can update only the $LATEST version of the
   * bot. You can't update the numbered versions that you create with the CreateBotVersion
   * operation. When you create the first version of a bot, Amazon Lex sets the version to 1.
   * Subsequent versions increment by 1. For more information, see versioning-intro. This operation
   * requires permission for the lex:CreateBotVersion action.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateBotVersion1Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createBotVersion1(
    request: Bots.CreateBotVersion1Request,
    options?: RequestOptions,
  ): ApiPromise<ModelsLexCreateBotVersionResponse, Bots.CreateBotVersion1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexCreateBotVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: modelsLexCreateBotVersionResponseSchema },
        errorFactory: Bots.CreateBotVersion1Error,
      },
      options,
    );
  }

  /**
   * Create Intent
   *
   * @remarks
   * Creates an intent. To define the interaction between the user and your bot, you define one or
   * more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When
   * you create an intent, you must provide a name. You can optionally provide the following: Sample
   * utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide
   * utterances for built-in intents. Information to be gathered. You specify slots for the
   * information that you bot requests from the user. You can specify standard slot types, such as
   * date and time, or custom slot types for your application. How the intent is fulfilled. You can
   * provide a Lambda function or configure the intent to return the intent information to your
   * client application. If you use a Lambda function, Amazon Lex invokes the function when all of
   * the intent information is available. A confirmation prompt to send to the user to confirm an
   * intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user
   * after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that
   * asks the user for additional activity. For example, "Do you want a drink with yo
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIntent(
    request: Bots.CreateIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateIntentResponse, Bots.CreateIntentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createIntentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createIntentResponseSchema },
        errorFactory: Bots.CreateIntentError,
      },
      options,
    );
  }

  /**
   * Create Slot
   *
   * @remarks
   * Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an
   * OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you
   * define one or more utterances that Amazon Lex uses to elicit a response from the user.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateSlotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSlot(
    request: Bots.CreateSlotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSlotResponse, Bots.CreateSlotError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSlotRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createSlotResponseSchema },
        errorFactory: Bots.CreateSlotError,
      },
      options,
    );
  }

  /**
   * Create Slot Type
   *
   * @remarks
   * Creates a custom slot type To create a custom slot type, specify a name for the slot type and a
   * set of enumeration values, the values that a slot of this type can assume.
   *
   * @returns Success
   *
   * @throws {@link Bots.CreateSlotTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSlotType(
    request: Bots.CreateSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSlotTypeResponse, Bots.CreateSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSlotTypeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createSlotTypeResponseSchema },
        errorFactory: Bots.CreateSlotTypeError,
      },
      options,
    );
  }

  /**
   * Delete Bot
   *
   * @remarks
   * Deletes all versions of a bot, including the Draft version. To delete a specific version, use
   * the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the
   * bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined
   * for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException
   * exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck
   * parameter to true.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBot(
    request: Bots.DeleteBotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBotResponse, Bots.DeleteBotError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => deleteBotRequestSchema)) },
      },
      {
        success: { kind: "json", schema: deleteBotResponseSchema },
        errorFactory: Bots.DeleteBotError,
      },
      options,
    );
  }

  /**
   * Delete Bot
   *
   * @remarks
   * Deletes all versions of the bot, including the $LATEST version. To delete a specific version of
   * the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove
   * the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores
   * utterances indefinitely for improving the ability of your bot to respond to user inputs. These
   * utterances are not removed when the bot is deleted. To remove the utterances, use the
   * DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot
   * operation returns a ResourceInUseException exception that includes a reference to the alias
   * that refers to the bot. To remove the reference to the bot, delete the alias. If you get the
   * same exception again, delete the referring alias until the DeleteBot operation is successful.
   * This operation requires permissions for the lex:DeleteBot action.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBot1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBot1(
    request: Bots.DeleteBot1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteBot1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteBotRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteBot1Error,
      },
      options,
    );
  }

  /**
   * Delete Bot Alias
   *
   * @remarks
   * Deletes an alias for the specified bot. You can't delete an alias that is used in the
   * association between a bot and a messaging channel. If an alias is used in a channel
   * association, the DeleteBot operation returns a ResourceInUseException exception that includes a
   * reference to the channel association that refers to the bot. You can remove the reference to
   * the alias by deleting the channel association. If you get the same exception again, delete the
   * referring association until the DeleteBotAlias operation is successful.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotAlias1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBotAlias1(
    request: Bots.DeleteBotAlias1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteBotAlias1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botName}/aliases/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteBotAlias1Error,
      },
      options,
    );
  }

  /**
   * Delete Bot Alias
   *
   * @remarks
   * Deletes the specified bot alias.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotAlias2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBotAlias2(
    request: Bots.DeleteBotAlias2Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteBotAliasResponse, Bots.DeleteBotAlias2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botaliases/{botAliasId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteBotAliasResponseSchema },
        errorFactory: Bots.DeleteBotAlias2Error,
      },
      options,
    );
  }

  /**
   * Delete Bot Analyzer Recommendation
   *
   * @remarks
   * Permanently deletes the recommendations and analysis results for a specific bot analysis
   * request. This operation is provided for GDPR compliance and cannot be undone. After deletion,
   * the analysis results cannot be retrieved. The analysis request ID will still appear in the
   * history list, but attempting to describe the recommendations will return a
   * ResourceNotFoundException.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotAnalyzerRecommendationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBotAnalyzerRecommendation(
    request: Bots.DeleteBotAnalyzerRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Bots.DeleteBotAnalyzerRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAnalyzerRequestId", value: request.botAnalyzerRequestId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotAnalyzerRecommendationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Bots.DeleteBotAnalyzerRecommendationError,
      },
      options,
    );
  }

  /**
   * Delete Bot Locale
   *
   * @remarks
   * Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types
   * defined for the locale are also deleted.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotLocaleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBotLocale(
    request: Bots.DeleteBotLocaleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBotLocaleResponse, Bots.DeleteBotLocaleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotLocaleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteBotLocaleResponseSchema },
        errorFactory: Bots.DeleteBotLocaleError,
      },
      options,
    );
  }

  /**
   * Delete Bot Replica
   *
   * @remarks
   * The action to delete the replicated bot in the secondary region.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotReplicaError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBotReplica(
    request: Bots.DeleteBotReplicaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBotReplicaResponse, Bots.DeleteBotReplicaError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/replicas/{replicaRegion}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "replicaRegion", value: request.replicaRegion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotReplicaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteBotReplicaResponseSchema },
        errorFactory: Bots.DeleteBotReplicaError,
      },
      options,
    );
  }

  /**
   * Delete Bot Version
   *
   * @remarks
   * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot
   * operation.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBotVersion(
    request: Bots.DeleteBotVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBotVersionResponse, Bots.DeleteBotVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteBotVersionResponseSchema },
        errorFactory: Bots.DeleteBotVersionError,
      },
      options,
    );
  }

  /**
   * Delete Bot Version
   *
   * @remarks
   * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot
   * operation. This operation requires permissions for the lex:DeleteBotVersion action.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteBotVersion1Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBotVersion1(
    request: Bots.DeleteBotVersion1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteBotVersion1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{name}/versions/{version}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "version", value: request.version, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteBotVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteBotVersion1Error,
      },
      options,
    );
  }

  /**
   * Delete Custom Vocabulary
   *
   * @remarks
   * Removes a custom vocabulary from the specified locale in the specified bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteCustomVocabularyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomVocabulary(
    request: Bots.DeleteCustomVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomVocabularyResponse, Bots.DeleteCustomVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteCustomVocabularyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteCustomVocabularyResponseSchema },
        errorFactory: Bots.DeleteCustomVocabularyError,
      },
      options,
    );
  }

  /**
   * Delete Intent
   *
   * @remarks
   * Removes the specified intent. Deleting an intent also deletes the slots associated with the
   * intent.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIntent(
    request: Bots.DeleteIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteIntentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteIntentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteIntentError,
      },
      options,
    );
  }

  /**
   * Delete Intent
   *
   * @remarks
   * Deletes all versions of the intent, including the $LATEST version. To delete a specific version
   * of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent
   * only if it is not referenced. To delete an intent that is referred to in one or more bots (see
   * how-it-works), you must remove those references first. If you get the ResourceInUseException
   * exception, it provides an example reference that shows where the intent is referenced. To
   * remove the reference to the intent, either update the bot or delete it. If you get the same
   * exception when you attempt to delete the intent again, repeat until the intent has no
   * references and the call to DeleteIntent is successful. This operation requires permission for
   * the lex:DeleteIntent action.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteIntent1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteIntent1(
    request: Bots.DeleteIntent1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteIntent1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/intents/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteIntentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteIntent1Error,
      },
      options,
    );
  }

  /**
   * Delete Session
   *
   * @remarks
   * Removes session information for a specified bot, alias, and user ID. You can use this operation
   * to restart a conversation with a bot. When you remove a session, the entire history of the
   * session is removed so that you can start again. You don't need to delete a session. Sessions
   * have a time limit and will expire. Set the session time limit when you create the bot. The
   * default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you
   * specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale
   * doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a
   * BadRequestException.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSession(
    request: Bots.DeleteSessionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteSessionResponse, Bots.DeleteSessionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteSessionResponseSchema },
        errorFactory: Bots.DeleteSessionError,
      },
      options,
    );
  }

  /**
   * Delete Session
   *
   * @remarks
   * Removes session information for a specified bot, alias, and user ID.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteSession1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSession1(
    request: Bots.DeleteSession1Request,
    options?: RequestOptions,
  ): ApiPromise<RuntimeLexDeleteSessionResponse, Bots.DeleteSession1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bot/{botName}/alias/{botAlias}/user/{userId}/session",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => runtimeLexDeleteSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: runtimeLexDeleteSessionResponseSchema },
        errorFactory: Bots.DeleteSession1Error,
      },
      options,
    );
  }

  /**
   * Delete Slot
   *
   * @remarks
   * Deletes the specified slot from an intent.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteSlotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSlot(
    request: Bots.DeleteSlotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteSlotError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
          { name: "slotId", value: request.slotId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteSlotRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteSlotError,
      },
      options,
    );
  }

  /**
   * Delete Slot Type
   *
   * @remarks
   * Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a
   * ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck
   * parameter to true.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteSlotTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSlotType(
    request: Bots.DeleteSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "slotTypeId", value: request.slotTypeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteSlotTypeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteSlotTypeError,
      },
      options,
    );
  }

  /**
   * Delete Slot Type
   *
   * @remarks
   * Deletes all versions of the slot type, including the $LATEST version. To delete a specific
   * version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of
   * a slot type only if it is not referenced. To delete a slot type that is referred to in one or
   * more intents, you must remove those references first. If you get the ResourceInUseException
   * exception, the exception provides an example reference that shows the intent where the slot
   * type is referenced. To remove the reference to the slot type, either update the intent or
   * delete it. If you get the same exception when you attempt to delete the slot type again, repeat
   * until the slot type has no references and the DeleteSlotType call is successful. This operation
   * requires permission for the lex:DeleteSlotType action.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteSlotType1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteSlotType1(
    request: Bots.DeleteSlotType1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteSlotType1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/slottypes/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteSlotTypeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteSlotType1Error,
      },
      options,
    );
  }

  /**
   * Delete Utterances
   *
   * @remarks
   * Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot.
   * Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then
   * stored indefinitely for use in improving the ability of your bot to respond to user input.. Use
   * the DeleteUtterances operation to manually delete utterances for a specific session. When you
   * use the DeleteUtterances operation, utterances stored for improving your bot's ability to
   * respond to user input are deleted immediately. Utterances stored for use with the
   * ListAggregatedUtterances operation are deleted after 15 days.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteUtterancesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUtterances(
    request: Bots.DeleteUtterancesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Bots.DeleteUtterancesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/utterances"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteUtterancesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Bots.DeleteUtterancesError,
      },
      options,
    );
  }

  /**
   * Delete Utterances
   *
   * @remarks
   * Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot.
   * Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored
   * indefinitely for use in improving the ability of your bot to respond to user input. Use the
   * DeleteUtterances operation to manually delete stored utterances for a specific user. When you
   * use the DeleteUtterances operation, utterances stored for improving your bot's ability to
   * respond to user input are deleted immediately. Utterances stored for use with the
   * GetUtterancesView operation are deleted after 15 days. This operation requires permissions for
   * the lex:DeleteUtterances action.
   *
   * @returns Success
   *
   * @throws {@link Bots.DeleteUtterances1Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteUtterances1(
    request: Bots.DeleteUtterances1Request,
    options?: RequestOptions,
  ): ApiPromise<string, Bots.DeleteUtterances1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botName}/utterances/{userId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteUtterancesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Bots.DeleteUtterances1Error,
      },
      options,
    );
  }

  /**
   * Describe Bot
   *
   * @remarks
   * Provides metadata information about a bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBot(
    request: Bots.DescribeBotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotResponse, Bots.DescribeBotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotResponseSchema },
        errorFactory: Bots.DescribeBotError,
      },
      options,
    );
  }

  /**
   * Describe Bot Alias
   *
   * @remarks
   * Get information about a specific bot alias.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotAliasError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotAlias(
    request: Bots.DescribeBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotAliasResponse, Bots.DescribeBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botaliases/{botAliasId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotAliasResponseSchema },
        errorFactory: Bots.DescribeBotAliasError,
      },
      options,
    );
  }

  /**
   * Describe Bot Analyzer Recommendation
   *
   * @remarks
   * Retrieves the analysis results and recommendations for bot optimization. The analysis must be
   * in Available status before recommendations can be retrieved. Recommendations are returned with
   * pagination support. Each recommendation includes the issue location, priority level, detailed
   * description, and proposed fix.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotAnalyzerRecommendationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotAnalyzerRecommendation(
    request: Bots.DescribeBotAnalyzerRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotAnalyzerRecommendationResponse, Bots.DescribeBotAnalyzerRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAnalyzerRequestId", value: request.botAnalyzerRequestId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => describeBotAnalyzerRecommendationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: describeBotAnalyzerRecommendationResponseSchema },
        errorFactory: Bots.DescribeBotAnalyzerRecommendationError,
      },
      options,
    );
  }

  /**
   * Describe Bot Locale
   *
   * @remarks
   * Describes the settings that a bot has for a specific locale.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotLocaleError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotLocale(
    request: Bots.DescribeBotLocaleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotLocaleResponse, Bots.DescribeBotLocaleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotLocaleResponseSchema },
        errorFactory: Bots.DescribeBotLocaleError,
      },
      options,
    );
  }

  /**
   * Describe Bot Recommendation
   *
   * @remarks
   * Provides metadata information about a bot recommendation. This information will enable you to
   * get a description on the request inputs, to download associated transcripts after processing is
   * complete, and to download intents and slot-types generated by the bot recommendation.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotRecommendationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotRecommendation(
    request: Bots.DescribeBotRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotRecommendationResponse, Bots.DescribeBotRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "botRecommendationId", value: request.botRecommendationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotRecommendationResponseSchema },
        errorFactory: Bots.DescribeBotRecommendationError,
      },
      options,
    );
  }

  /**
   * Describe Bot Replica
   *
   * @remarks
   * Monitors the bot replication status through the UI console.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotReplicaError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotReplica(
    request: Bots.DescribeBotReplicaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotReplicaResponse, Bots.DescribeBotReplicaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/replicas/{replicaRegion}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "replicaRegion", value: request.replicaRegion, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotReplicaResponseSchema },
        errorFactory: Bots.DescribeBotReplicaError,
      },
      options,
    );
  }

  /**
   * Describe Bot Resource Generation
   *
   * @remarks
   * Returns information about a request to generate a bot through natural language description,
   * made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3
   * object containing the bot locale configuration. You can then modify and import this
   * configuration.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotResourceGenerationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotResourceGeneration(
    request: Bots.DescribeBotResourceGenerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotResourceGenerationResponse, Bots.DescribeBotResourceGenerationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "generationId", value: request.generationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotResourceGenerationResponseSchema },
        errorFactory: Bots.DescribeBotResourceGenerationError,
      },
      options,
    );
  }

  /**
   * Describe Bot Version
   *
   * @remarks
   * Provides metadata about a version of a bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeBotVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeBotVersion(
    request: Bots.DescribeBotVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeBotVersionResponse, Bots.DescribeBotVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeBotVersionResponseSchema },
        errorFactory: Bots.DescribeBotVersionError,
      },
      options,
    );
  }

  /**
   * Describe Custom Vocabulary Metadata
   *
   * @remarks
   * Provides metadata information about a custom vocabulary.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeCustomVocabularyMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeCustomVocabularyMetadata(
    request: Bots.DescribeCustomVocabularyMetadataRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeCustomVocabularyMetadataResponse, Bots.DescribeCustomVocabularyMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeCustomVocabularyMetadataResponseSchema },
        errorFactory: Bots.DescribeCustomVocabularyMetadataError,
      },
      options,
    );
  }

  /**
   * Describe Intent
   *
   * @remarks
   * Returns metadata about an intent.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeIntent(
    request: Bots.DescribeIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeIntentResponse, Bots.DescribeIntentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeIntentResponseSchema },
        errorFactory: Bots.DescribeIntentError,
      },
      options,
    );
  }

  /**
   * Describe Slot
   *
   * @remarks
   * Gets metadata information about a slot.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeSlotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeSlot(
    request: Bots.DescribeSlotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeSlotResponse, Bots.DescribeSlotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
          { name: "slotId", value: request.slotId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeSlotResponseSchema },
        errorFactory: Bots.DescribeSlotError,
      },
      options,
    );
  }

  /**
   * Describe Slot Type
   *
   * @remarks
   * Gets metadata information about a slot type.
   *
   * @returns Success
   *
   * @throws {@link Bots.DescribeSlotTypeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeSlotType(
    request: Bots.DescribeSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeSlotTypeResponse, Bots.DescribeSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "slotTypeId", value: request.slotTypeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeSlotTypeResponseSchema },
        errorFactory: Bots.DescribeSlotTypeError,
      },
      options,
    );
  }

  /**
   * Generate Bot Element
   *
   * @remarks
   * Generates sample utterances for an intent.
   *
   * @returns Success
   *
   * @throws {@link Bots.GenerateBotElementError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateBotElement(
    request: Bots.GenerateBotElementRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GenerateBotElementResponse, Bots.GenerateBotElementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => generateBotElementRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: generateBotElementResponseSchema },
        errorFactory: Bots.GenerateBotElementError,
      },
      options,
    );
  }

  /**
   * Get Bots
   *
   * @remarks
   * Returns bot information as follows: If you provide the nameContains field, the response
   * includes information for the $LATEST version of all bots whose name contains the specified
   * string. If you don't specify the nameContains field, the operation returns information about
   * the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots
   * action.
   *
   * @returns Success
   *
   * @throws {@link Bots.GetBotsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBots(options?: RequestOptions): ApiPromise<GetBotsResponse, Bots.GetBotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotsResponseSchema },
        errorFactory: Bots.GetBotsError,
      },
      options,
    );
  }

  /**
   * Get Session
   *
   * @remarks
   * Returns session information for a specified bot, alias, and user. For example, you can use this
   * operation to retrieve session information for a user that has left a long-running session in
   * use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a
   * BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a
   * BadRequestException.
   *
   * @returns Success
   *
   * @throws {@link Bots.GetSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSession(
    request: Bots.GetSessionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetSessionResponse, Bots.GetSessionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSessionResponseSchema },
        errorFactory: Bots.GetSessionError,
      },
      options,
    );
  }

  /**
   * Get Session
   *
   * @remarks
   * Returns session information for a specified bot, alias, and user ID.
   *
   * @returns Success
   *
   * @throws {@link Bots.GetSession1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSession1(
    request: Bots.GetSession1Request,
    options?: RequestOptions,
  ): ApiPromise<RuntimeLexGetSessionResponse, Bots.GetSession1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bot/{botName}/alias/{botAlias}/user/{userId}/session",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runtimeLexGetSessionResponseSchema },
        errorFactory: Bots.GetSession1Error,
      },
      options,
    );
  }

  /**
   * List Aggregated Utterances
   *
   * @remarks
   * Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the
   * text of the utterance. For example, all instances where customers used the phrase "I want to
   * order pizza" are aggregated into the same line in the response. You can see both detected
   * utterances and missed utterances. A detected utterance is where the bot properly recognized the
   * utterance and activated the associated intent. A missed utterance was not recognized by the bot
   * and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot
   * version, but not both at the same time. Utterances statistics are not generated under the
   * following conditions: The childDirected field was set to true when the bot was created. You are
   * using slot obfuscation with one or more slots. You opted out of participating in improving
   * Amazon Lex.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListAggregatedUtterancesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAggregatedUtterances(
    request: Bots.ListAggregatedUtterancesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListAggregatedUtterancesResponse, Bots.ListAggregatedUtterancesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/aggregatedutterances",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listAggregatedUtterancesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listAggregatedUtterancesResponseSchema },
        errorFactory: Bots.ListAggregatedUtterancesError,
      },
      options,
    );
  }

  /**
   * List Bot Alias Replicas
   *
   * @remarks
   * The action to list the replicated bots created from the source bot alias.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotAliasReplicasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotAliasReplicas(
    request: Bots.ListBotAliasReplicasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotAliasReplicasResponse, Bots.ListBotAliasReplicasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/replicas/{replicaRegion}/botaliases",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "replicaRegion", value: request.replicaRegion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotAliasReplicasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotAliasReplicasResponseSchema },
        errorFactory: Bots.ListBotAliasReplicasError,
      },
      options,
    );
  }

  /**
   * List Bot Aliases
   *
   * @remarks
   * Gets a list of aliases for the specified bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotAliasesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotAliases(
    request: Bots.ListBotAliasesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotAliasesResponse, Bots.ListBotAliasesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotAliasesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotAliasesResponseSchema },
        errorFactory: Bots.ListBotAliasesError,
      },
      options,
    );
  }

  /**
   * List Bot Analyzer History
   *
   * @remarks
   * Retrieves a list of historical bot analysis executions for a specific bot. You can filter the
   * results by locale and bot version. The history includes all analysis executions regardless of
   * their status, allowing you to track past analyses and their outcomes.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotAnalyzerHistoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotAnalyzerHistory(
    request: Bots.ListBotAnalyzerHistoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotAnalyzerHistoryResponse, Bots.ListBotAnalyzerHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botanalyzer/history",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotAnalyzerHistoryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotAnalyzerHistoryResponseSchema },
        errorFactory: Bots.ListBotAnalyzerHistoryError,
      },
      options,
    );
  }

  /**
   * List Bot Locales
   *
   * @remarks
   * Gets a list of locales for the specified bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotLocalesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotLocales(
    request: Bots.ListBotLocalesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotLocalesResponse, Bots.ListBotLocalesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotLocalesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotLocalesResponseSchema },
        errorFactory: Bots.ListBotLocalesError,
      },
      options,
    );
  }

  /**
   * List Bot Recommendations
   *
   * @remarks
   * Get a list of bot recommendations that meet the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotRecommendationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotRecommendations(
    request: Bots.ListBotRecommendationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotRecommendationsResponse, Bots.ListBotRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotRecommendationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotRecommendationsResponseSchema },
        errorFactory: Bots.ListBotRecommendationsError,
      },
      options,
    );
  }

  /**
   * List Bot Replicas
   *
   * @remarks
   * The action to list the replicated bots.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotReplicasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotReplicas(
    request: Bots.ListBotReplicasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotReplicasResponse, Bots.ListBotReplicasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotReplicasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotReplicasResponseSchema },
        errorFactory: Bots.ListBotReplicasError,
      },
      options,
    );
  }

  /**
   * List Bot Resource Generations
   *
   * @remarks
   * Lists the generation requests made for a bot locale.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotResourceGenerationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotResourceGenerations(
    request: Bots.ListBotResourceGenerationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotResourceGenerationsResponse, Bots.ListBotResourceGenerationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotResourceGenerationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotResourceGenerationsResponseSchema },
        errorFactory: Bots.ListBotResourceGenerationsError,
      },
      options,
    );
  }

  /**
   * List Bot Version Replicas
   *
   * @remarks
   * Contains information about all the versions replication statuses applicable for Global
   * Resiliency.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotVersionReplicasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotVersionReplicas(
    request: Bots.ListBotVersionReplicasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotVersionReplicasResponse, Bots.ListBotVersionReplicasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/replicas/{replicaRegion}/botversions",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "replicaRegion", value: request.replicaRegion, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotVersionReplicasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotVersionReplicasResponseSchema },
        errorFactory: Bots.ListBotVersionReplicasError,
      },
      options,
    );
  }

  /**
   * List Bot Versions
   *
   * @remarks
   * Gets information about all of the versions of a bot. The ListBotVersions operation returns a
   * summary of each version of a bot. For example, if a bot has three numbered versions, the
   * ListBotVersions operation returns for summaries, one for each numbered version and one for the
   * DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT
   * version.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotVersionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBotVersions(
    request: Bots.ListBotVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBotVersionsResponse, Bots.ListBotVersionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBotVersionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBotVersionsResponseSchema },
        errorFactory: Bots.ListBotVersionsError,
      },
      options,
    );
  }

  /**
   * List Bots
   *
   * @remarks
   * Gets a list of available bots.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListBotsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBots(
    request: Bots.ListBotsRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListBotsResponse, Bots.ListBotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => listBotsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: listBotsResponseSchema },
        errorFactory: Bots.ListBotsError,
      },
      options,
    );
  }

  /**
   * List Custom Vocabulary Items
   *
   * @remarks
   * Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListCustomVocabularyItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomVocabularyItems(
    request: Bots.ListCustomVocabularyItemsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListCustomVocabularyItemsResponse, Bots.ListCustomVocabularyItemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listCustomVocabularyItemsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listCustomVocabularyItemsResponseSchema },
        errorFactory: Bots.ListCustomVocabularyItemsError,
      },
      options,
    );
  }

  /**
   * List Intent Metrics
   *
   * @remarks
   * Retrieves summary metrics for the intents in your bot. The following fields are required:
   * metrics – A list of AnalyticsIntentMetric objects. In each object, use the name field to
   * specify the metric to calculate, the statistic field to specify whether to calculate the Sum,
   * Average, or Max number, and the order field to specify whether to sort the results in Ascending
   * or Descending order. startDateTime and endDateTime – Define a time range for which you want to
   * retrieve results. Of the optional fields, you can organize the results in the following ways:
   * Use the filters field to filter the results, the groupBy field to specify categories by which
   * to group the results, and the binBy field to specify time intervals by which to group the
   * results. Use the maxResults field to limit the number of results to return in a single response
   * and the nextToken field to return the next batch of results if the response does not return the
   * full set of results. Note that an order field exists in both binBy and metrics. You can specify
   * only one order in a given request.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListIntentMetricsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntentMetrics(
    request: Bots.ListIntentMetricsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListIntentMetricsResponse, Bots.ListIntentMetricsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/intentmetrics",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listIntentMetricsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listIntentMetricsResponseSchema },
        errorFactory: Bots.ListIntentMetricsError,
      },
      options,
    );
  }

  /**
   * List Intent Paths
   *
   * @remarks
   * Retrieves summary statistics for a path of intents that users take over sessions with your bot.
   * The following fields are required: startDateTime and endDateTime – Define a time range for
   * which you want to retrieve results. intentPath – Define an order of intents for which you want
   * to retrieve metrics. Separate intents in the path with a forward slash. For example, populate
   * the intentPath field with /BookCar/BookHotel to see details about how many times users invoked
   * the BookCar and BookHotel intents in that order. Use the optional filters field to filter the
   * results.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListIntentPathsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntentPaths(
    request: Bots.ListIntentPathsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListIntentPathsResponse, Bots.ListIntentPathsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/intentpaths",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listIntentPathsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listIntentPathsResponseSchema },
        errorFactory: Bots.ListIntentPathsError,
      },
      options,
    );
  }

  /**
   * List Intent Stage Metrics
   *
   * @remarks
   * Retrieves summary metrics for the stages within intents in your bot. The following fields are
   * required: metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name
   * field to specify the metric to calculate, the statistic field to specify whether to calculate
   * the Sum, Average, or Max number, and the order field to specify whether to sort the results in
   * Ascending or Descending order. startDateTime and endDateTime – Define a time range for which
   * you want to retrieve results. Of the optional fields, you can organize the results in the
   * following ways: Use the filters field to filter the results, the groupBy field to specify
   * categories by which to group the results, and the binBy field to specify time intervals by
   * which to group the results. Use the maxResults field to limit the number of results to return
   * in a single response and the nextToken field to return the next batch of results if the
   * response does not return the full set of results. Note that an order field exists in both binBy
   * and metrics. You can only specify one order in a given request.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListIntentStageMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntentStageMetrics(
    request: Bots.ListIntentStageMetricsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListIntentStageMetricsResponse, Bots.ListIntentStageMetricsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/intentstagemetrics",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listIntentStageMetricsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listIntentStageMetricsResponseSchema },
        errorFactory: Bots.ListIntentStageMetricsError,
      },
      options,
    );
  }

  /**
   * List Intents
   *
   * @remarks
   * Get a list of intents that meet the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListIntentsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntents(
    request: Bots.ListIntentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListIntentsResponse, Bots.ListIntentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listIntentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listIntentsResponseSchema },
        errorFactory: Bots.ListIntentsError,
      },
      options,
    );
  }

  /**
   * List Recommended Intents
   *
   * @remarks
   * Gets a list of recommended intents provided by the bot recommendation that you can use in your
   * bot. Intents in the response are ordered by relevance.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListRecommendedIntentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecommendedIntents(
    request: Bots.ListRecommendedIntentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListRecommendedIntentsResponse, Bots.ListRecommendedIntentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "botRecommendationId", value: request.botRecommendationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listRecommendedIntentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listRecommendedIntentsResponseSchema },
        errorFactory: Bots.ListRecommendedIntentsError,
      },
      options,
    );
  }

  /**
   * List Session Analytics Data
   *
   * @remarks
   * Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and
   * endDateTime fields are required. These fields define a time range for which you want to
   * retrieve results. Of the optional fields, you can organize the results in the following ways:
   * Use the filters field to filter the results and the sortBy field to specify the values by which
   * to sort the results. Use the maxResults field to limit the number of results to return in a
   * single response and the nextToken field to return the next batch of results if the response
   * does not return the full set of results.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListSessionAnalyticsDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSessionAnalyticsData(
    request: Bots.ListSessionAnalyticsDataRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListSessionAnalyticsDataResponse, Bots.ListSessionAnalyticsDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/sessions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listSessionAnalyticsDataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listSessionAnalyticsDataResponseSchema },
        errorFactory: Bots.ListSessionAnalyticsDataError,
      },
      options,
    );
  }

  /**
   * List Session Metrics
   *
   * @remarks
   * Retrieves summary metrics for the user sessions with your bot. The following fields are
   * required: metrics – A list of AnalyticsSessionMetric objects. In each object, use the name
   * field to specify the metric to calculate, the statistic field to specify whether to calculate
   * the Sum, Average, or Max number, and the order field to specify whether to sort the results in
   * Ascending or Descending order. startDateTime and endDateTime – Define a time range for which
   * you want to retrieve results. Of the optional fields, you can organize the results in the
   * following ways: Use the filters field to filter the results, the groupBy field to specify
   * categories by which to group the results, and the binBy field to specify time intervals by
   * which to group the results. Use the maxResults field to limit the number of results to return
   * in a single response and the nextToken field to return the next batch of results if the
   * response does not return the full set of results. Note that an order field exists in both binBy
   * and metrics. Currently, you can specify it in either field, but not in both.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListSessionMetricsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSessionMetrics(
    request: Bots.ListSessionMetricsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListSessionMetricsResponse, Bots.ListSessionMetricsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/sessionmetrics",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listSessionMetricsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listSessionMetricsResponseSchema },
        errorFactory: Bots.ListSessionMetricsError,
      },
      options,
    );
  }

  /**
   * List Slot Types
   *
   * @remarks
   * Gets a list of slot types that match the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListSlotTypesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSlotTypes(
    request: Bots.ListSlotTypesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListSlotTypesResponse, Bots.ListSlotTypesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listSlotTypesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listSlotTypesResponseSchema },
        errorFactory: Bots.ListSlotTypesError,
      },
      options,
    );
  }

  /**
   * List Slots
   *
   * @remarks
   * Gets a list of slots that match the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListSlotsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSlots(
    request: Bots.ListSlotsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListSlotsResponse, Bots.ListSlotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => listSlotsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: listSlotsResponseSchema },
        errorFactory: Bots.ListSlotsError,
      },
      options,
    );
  }

  /**
   * List Utterance Analytics Data
   *
   * @remarks
   * To use this API operation, your IAM role must have permissions to perform the
   * ListAggregatedUtterances operation, which provides access to utterance-related analytics. See
   * Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves a list of
   * metadata for individual user utterances to your bot. The following fields are required:
   * startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of
   * the optional fields, you can organize the results in the following ways: Use the filters field
   * to filter the results and the sortBy field to specify the values by which to sort the results.
   * Use the maxResults field to limit the number of results to return in a single response and the
   * nextToken field to return the next batch of results if the response does not return the full
   * set of results.
   *
   * @returns Success
   *
   * @throws {@link Bots.ListUtteranceAnalyticsDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUtteranceAnalyticsData(
    request: Bots.ListUtteranceAnalyticsDataRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListUtteranceAnalyticsDataResponse, Bots.ListUtteranceAnalyticsDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/utterances",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listUtteranceAnalyticsDataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listUtteranceAnalyticsDataResponseSchema },
        errorFactory: Bots.ListUtteranceAnalyticsDataError,
      },
      options,
    );
  }

  /**
   * List Utterance Metrics
   *
   * @remarks
   * To use this API operation, your IAM role must have permissions to perform the
   * ListAggregatedUtterances operation, which provides access to utterance-related analytics. See
   * Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves summary
   * metrics for the utterances in your bot. The following fields are required: metrics – A list of
   * AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to
   * calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number,
   * and the order field to specify whether to sort the results in Ascending or Descending order.
   * startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of
   * the optional fields, you can organize the results in the following ways: Use the filters field
   * to filter the results, the groupBy field to specify categories by which to group the results,
   * and the binBy field to specify time intervals by which to group the results. Use the maxResults
   * field to limit the number of results to return in a single response and the nextToken field to
   * return the next batch of results if the response does not return the full set of re
   *
   * @returns Success
   *
   * @throws {@link Bots.ListUtteranceMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUtteranceMetrics(
    request: Bots.ListUtteranceMetricsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListUtteranceMetricsResponse, Bots.ListUtteranceMetricsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/analytics/utterancemetrics",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listUtteranceMetricsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listUtteranceMetricsResponseSchema },
        errorFactory: Bots.ListUtteranceMetricsError,
      },
      options,
    );
  }

  /**
   * Put Session
   *
   * @remarks
   * Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this
   * operation to enable your application to set the state of the bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.PutSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putSession(
    request: Bots.PutSessionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PutSessionResponse, Bots.PutSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => putSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putSessionResponseSchema },
        errorFactory: Bots.PutSessionError,
      },
      options,
    );
  }

  /**
   * Put Session
   *
   * @remarks
   * Creates a new session or modifies an existing session with an Amazon Lex bot. Use this
   * operation to enable your application to set the state of the bot. For more information, see
   * Managing Sessions.
   *
   * @returns Success
   *
   * @throws {@link Bots.PutSession1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putSession1(
    request: Bots.PutSession1Request,
    options?: RequestOptions,
  ): ApiPromise<RuntimeLexPutSessionResponse, Bots.PutSession1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bot/{botName}/alias/{botAlias}/user/{userId}/session",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => runtimeLexPutSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: runtimeLexPutSessionResponseSchema },
        errorFactory: Bots.PutSession1Error,
      },
      options,
    );
  }

  /**
   * Recognize Text
   *
   * @remarks
   * Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon
   * Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning
   * model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey
   * to the user and an optional response card to display. If the optional post-fulfillment response
   * is specified, the messages are returned as follows. For more information, see
   * PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
   * successfully and the intent state is fulfilled or ready fulfillment if the message is present.
   * Failed message - The failed message is returned if the Lambda function throws an exception or
   * if the Lambda function returns a failed intent state without a message. Timeout message - If
   * you don't configure a timeout message and a timeout, and the Lambda function doesn't return
   * within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout
   * message is returned when the period times out. For more information, see Completion message.
   *
   * @returns Success
   *
   * @throws {@link Bots.RecognizeTextError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recognizeText(
    request: Bots.RecognizeTextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RecognizeTextResponse, Bots.RecognizeTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => recognizeTextRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recognizeTextResponseSchema },
        errorFactory: Bots.RecognizeTextError,
      },
      options,
    );
  }

  /**
   * Recognize Utterance
   *
   * @remarks
   * Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send
   * text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input
   * using the machine learning model built for the bot. The following request fields must be
   * compressed with gzip and then base64 encoded before you send them to Amazon Lex V2.
   * requestAttributes sessionState The following response fields are compressed using gzip and then
   * base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and
   * decompress them. inputTranscript interpretations messages requestAttributes sessionState The
   * example contains a Java application that compresses and encodes a Java object to send to Amazon
   * Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the
   * optional post-fulfillment response is specified, the messages are returned as follows. For more
   * information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda
   * function completes successfully and the intent state is fulfilled or ready fulfillment if the
   * message is present. Failed message - The failed message is returned if the Lambda function
   * throws
   *
   * @returns Success
   *
   * @throws {@link Bots.RecognizeUtteranceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recognizeUtterance(
    request: Bots.RecognizeUtteranceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RecognizeUtteranceResponse, Bots.RecognizeUtteranceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => recognizeUtteranceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recognizeUtteranceResponseSchema },
        errorFactory: Bots.RecognizeUtteranceError,
      },
      options,
    );
  }

  /**
   * Search Associated Transcripts
   *
   * @remarks
   * Search for associated transcripts that meet the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Bots.SearchAssociatedTranscriptsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchAssociatedTranscripts(
    request: Bots.SearchAssociatedTranscriptsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchAssociatedTranscriptsResponse, Bots.SearchAssociatedTranscriptsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "botRecommendationId", value: request.botRecommendationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => searchAssociatedTranscriptsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: searchAssociatedTranscriptsResponseSchema },
        errorFactory: Bots.SearchAssociatedTranscriptsError,
      },
      options,
    );
  }

  /**
   * Start Bot Analyzer
   *
   * @remarks
   * Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to
   * identify potential issues and recommend improvements based on AWS best practices. The analysis
   * examines your bot's configuration, including intents, utterances, slots, and conversation
   * flows, to provide actionable recommendations for optimization.
   *
   * @returns Success
   *
   * @throws {@link Bots.StartBotAnalyzerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBotAnalyzer(
    request: Bots.StartBotAnalyzerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartBotAnalyzerResponse, Bots.StartBotAnalyzerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startBotAnalyzerRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startBotAnalyzerResponseSchema },
        errorFactory: Bots.StartBotAnalyzerError,
      },
      options,
    );
  }

  /**
   * Start Bot Recommendation
   *
   * @remarks
   * Use this to provide your transcript data, and to start the bot recommendation process.
   *
   * @returns Success
   *
   * @throws {@link Bots.StartBotRecommendationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBotRecommendation(
    request: Bots.StartBotRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartBotRecommendationResponse, Bots.StartBotRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startBotRecommendationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startBotRecommendationResponseSchema },
        errorFactory: Bots.StartBotRecommendationError,
      },
      options,
    );
  }

  /**
   * Start Bot Resource Generation
   *
   * @remarks
   * Starts a request for the descriptive bot builder to generate a bot locale configuration based
   * on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration
   * operation to check on the status of the generation and for the generatedBotLocaleUrl when the
   * generation is complete. Use that value to retrieve the Amazon S3 object containing the bot
   * locale configuration. You can then modify and import this configuration.
   *
   * @returns Success
   *
   * @throws {@link Bots.StartBotResourceGenerationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBotResourceGeneration(
    request: Bots.StartBotResourceGenerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartBotResourceGenerationResponse, Bots.StartBotResourceGenerationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startBotResourceGenerationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startBotResourceGenerationResponseSchema },
        errorFactory: Bots.StartBotResourceGenerationError,
      },
      options,
    );
  }

  /**
   * Start Conversation
   *
   * @remarks
   * Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input
   * in real time. After your application starts a conversation, users send input to Amazon Lex V2
   * as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming
   * text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000
   * sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment
   * response is specified, the messages are returned as follows. For more information, see
   * PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
   * successfully and the intent state is fulfilled or ready fulfillment if the message is present.
   * Failed message - The failed message is returned if the Lambda function throws an exception or
   * if the Lambda function returns a failed intent state without a message. Timeout message - If
   * you don't configure a timeout message and a timeout, and the Lambda function doesn't return
   * within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout
   * message is returned when the period times out. For more information, see Complet
   *
   * @returns Success
   *
   * @throws {@link Bots.StartConversationError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startConversation(
    request: Bots.StartConversationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartConversationResponse, Bots.StartConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startConversationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startConversationResponseSchema },
        errorFactory: Bots.StartConversationError,
      },
      options,
    );
  }

  /**
   * Stop Bot Analyzer
   *
   * @remarks
   * Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no
   * recommendations will be generated.
   *
   * @returns Success
   *
   * @throws {@link Bots.StopBotAnalyzerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopBotAnalyzer(
    request: Bots.StopBotAnalyzerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StopBotAnalyzerResponse, Bots.StopBotAnalyzerError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAnalyzerRequestId", value: request.botAnalyzerRequestId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => stopBotAnalyzerRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: stopBotAnalyzerResponseSchema },
        errorFactory: Bots.StopBotAnalyzerError,
      },
      options,
    );
  }

  /**
   * Stop Bot Recommendation
   *
   * @remarks
   * Stop an already running Bot Recommendation request.
   *
   * @returns Success
   *
   * @throws {@link Bots.StopBotRecommendationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopBotRecommendation(
    request: Bots.StopBotRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StopBotRecommendationResponse, Bots.StopBotRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "botRecommendationId", value: request.botRecommendationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => stopBotRecommendationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: stopBotRecommendationResponseSchema },
        errorFactory: Bots.StopBotRecommendationError,
      },
      options,
    );
  }

  /**
   * Update Bot
   *
   * @remarks
   * Updates the configuration of an existing bot.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBot(
    request: Bots.UpdateBotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBotResponse, Bots.UpdateBotError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botId", value: request.botId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => updateBotRequestSchema)) },
      },
      {
        success: { kind: "json", schema: updateBotResponseSchema },
        errorFactory: Bots.UpdateBotError,
      },
      options,
    );
  }

  /**
   * Update Bot Alias
   *
   * @remarks
   * Updates the configuration of an existing bot alias.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateBotAliasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBotAlias(
    request: Bots.UpdateBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBotAliasResponse, Bots.UpdateBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botaliases/{botAliasId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botAliasId", value: request.botAliasId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateBotAliasResponseSchema },
        errorFactory: Bots.UpdateBotAliasError,
      },
      options,
    );
  }

  /**
   * Update Bot Locale
   *
   * @remarks
   * Updates the settings that a bot has for a specific locale.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateBotLocaleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBotLocale(
    request: Bots.UpdateBotLocaleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBotLocaleResponse, Bots.UpdateBotLocaleError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateBotLocaleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateBotLocaleResponseSchema },
        errorFactory: Bots.UpdateBotLocaleError,
      },
      options,
    );
  }

  /**
   * Update Bot Recommendation
   *
   * @remarks
   * Updates an existing bot recommendation request.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateBotRecommendationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBotRecommendation(
    request: Bots.UpdateBotRecommendationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBotRecommendationResponse, Bots.UpdateBotRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "botRecommendationId", value: request.botRecommendationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateBotRecommendationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateBotRecommendationResponseSchema },
        errorFactory: Bots.UpdateBotRecommendationError,
      },
      options,
    );
  }

  /**
   * Update Intent
   *
   * @remarks
   * Updates the settings for an intent.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateIntent(
    request: Bots.UpdateIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateIntentResponse, Bots.UpdateIntentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateIntentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateIntentResponseSchema },
        errorFactory: Bots.UpdateIntentError,
      },
      options,
    );
  }

  /**
   * Update Slot
   *
   * @remarks
   * Updates the settings for a slot.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateSlotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSlot(
    request: Bots.UpdateSlotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateSlotResponse, Bots.UpdateSlotError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "intentId", value: request.intentId, schema: s.string() },
          { name: "slotId", value: request.slotId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSlotRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateSlotResponseSchema },
        errorFactory: Bots.UpdateSlotError,
      },
      options,
    );
  }

  /**
   * Update Slot Type
   *
   * @remarks
   * Updates the configuration of an existing slot type.
   *
   * @returns Success
   *
   * @throws {@link Bots.UpdateSlotTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSlotType(
    request: Bots.UpdateSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateSlotTypeResponse, Bots.UpdateSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botId", value: request.botId, schema: s.string() },
          { name: "botVersion", value: request.botVersion, schema: s.string() },
          { name: "localeId", value: request.localeId, schema: s.string() },
          { name: "slotTypeId", value: request.slotTypeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSlotTypeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateSlotTypeResponseSchema },
        errorFactory: Bots.UpdateSlotTypeError,
      },
      options,
    );
  }
}

export namespace Bots {
  export type BatchCreateCustomVocabularyItemRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: BatchCreateCustomVocabularyItemRequest;
  };

  export class BatchCreateCustomVocabularyItemError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchCreateCustomVocabularyItemError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type BatchDeleteCustomVocabularyItemRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: BatchDeleteCustomVocabularyItemRequest;
  };

  export class BatchDeleteCustomVocabularyItemError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchDeleteCustomVocabularyItemError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type BatchUpdateCustomVocabularyItemRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: BatchUpdateCustomVocabularyItemRequest;
  };

  export class BatchUpdateCustomVocabularyItemError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchUpdateCustomVocabularyItemError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type BuildBotLocaleRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: BuildBotLocaleRequest;
  };

  export class BuildBotLocaleError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<BuildBotLocaleError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotRequestParams = {
    body?: CreateBotRequest;
  };

  export class CreateBotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotAliasRequestParams = {
    botId: string;
    body?: CreateBotAliasRequest;
  };

  export class CreateBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotAliasError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotLocaleRequestParams = {
    botId: string;
    botVersion: string;
    body?: CreateBotLocaleRequest;
  };

  export class CreateBotLocaleError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotLocaleError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotReplicaRequestParams = {
    botId: string;
    body?: CreateBotReplicaRequest;
  };

  export class CreateBotReplicaError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotReplicaError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotVersionRequestParams = {
    botId: string;
    body?: CreateBotVersionRequest;
  };

  export class CreateBotVersionError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotVersionError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateBotVersion1Request = {
    name: string;
    body?: ModelsLexCreateBotVersionRequest;
  };

  export class CreateBotVersion1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotVersion1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
    ];
  }

  export type CreateIntentRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: CreateIntentRequest;
  };

  export class CreateIntentError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIntentError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateSlotRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    body?: CreateSlotRequest;
  };

  export class CreateSlotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSlotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateSlotTypeRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: CreateSlotTypeRequest;
  };

  export class CreateSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSlotTypeError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotRequestParams = {
    botId: string;
    body?: DeleteBotRequest;
  };

  export class DeleteBotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBot1Request = {
    name: string;
    body?: ModelsLexDeleteBotRequest;
  };

  export class DeleteBot1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBot1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteBotAlias1Request = {
    botName: string;
    name: string;
    body?: ModelsLexDeleteBotAliasRequest;
  };

  export class DeleteBotAlias1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotAlias1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteBotAlias2Request = {
    botId: string;
    botAliasId: string;
    body?: DeleteBotAliasRequest;
  };

  export class DeleteBotAlias2Error extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotAlias2Error> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotAnalyzerRecommendationRequestParams = {
    botId: string;
    botAnalyzerRequestId: string;
    body?: DeleteBotAnalyzerRecommendationRequest;
  };

  export class DeleteBotAnalyzerRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotAnalyzerRecommendationError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotLocaleRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: DeleteBotLocaleRequest;
  };

  export class DeleteBotLocaleError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotLocaleError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotReplicaRequestParams = {
    botId: string;
    replicaRegion: string;
    body?: DeleteBotReplicaRequest;
  };

  export class DeleteBotReplicaError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotReplicaError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotVersionRequestParams = {
    botId: string;
    botVersion: string;
    body?: DeleteBotVersionRequest;
  };

  export class DeleteBotVersionError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotVersionError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteBotVersion1Request = {
    name: string;
    version: string;
    body?: ModelsLexDeleteBotVersionRequest;
  };

  export class DeleteBotVersion1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotVersion1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteCustomVocabularyRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: DeleteCustomVocabularyRequest;
  };

  export class DeleteCustomVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomVocabularyError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteIntentRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    body?: DeleteIntentRequest;
  };

  export class DeleteIntentError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIntentError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteIntent1Request = {
    name: string;
    body?: ModelsLexDeleteIntentRequest;
  };

  export class DeleteIntent1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIntent1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteSessionRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
    body?: DeleteSessionRequest;
  };

  export class DeleteSessionError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"runtimeV2LexConflictException", RuntimeV2LexConflictException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexResourceNotFoundException", RuntimeV2LexResourceNotFoundException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSessionError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 409,
        kind: "runtimeV2LexConflictException",
        decode: { kind: "json", schema: runtimeV2LexConflictExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "runtimeV2LexResourceNotFoundException",
        decode: { kind: "json", schema: runtimeV2LexResourceNotFoundExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type DeleteSession1Request = {
    botName: string;
    botAlias: string;
    userId: string;
    body?: RuntimeLexDeleteSessionRequest;
  };

  export class DeleteSession1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSession1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteSlotRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    slotId: string;
    body?: DeleteSlotRequest;
  };

  export class DeleteSlotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSlotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteSlotTypeRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
    body?: DeleteSlotTypeRequest;
  };

  export class DeleteSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSlotTypeError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteSlotType1Request = {
    name: string;
    body?: ModelsLexDeleteSlotTypeRequest;
  };

  export class DeleteSlotType1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSlotType1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DeleteUtterancesRequestParams = {
    botId: string;
    body?: DeleteUtterancesRequest;
  };

  export class DeleteUtterancesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUtterancesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteUtterances1Request = {
    botName: string;
    userId: string;
    body?: ModelsLexDeleteUtterancesRequest;
  };

  export class DeleteUtterances1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUtterances1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type DescribeBotRequestParams = {
    botId: string;
  };

  export class DescribeBotError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotAliasRequestParams = {
    botId: string;
    botAliasId: string;
  };

  export class DescribeBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotAliasError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotAnalyzerRecommendationRequestParams = {
    botId: string;
    botAnalyzerRequestId: string;
    body?: DescribeBotAnalyzerRecommendationRequest;
  };

  export class DescribeBotAnalyzerRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotAnalyzerRecommendationError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotLocaleRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
  };

  export class DescribeBotLocaleError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotLocaleError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotRecommendationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    botRecommendationId: string;
  };

  export class DescribeBotRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotRecommendationError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotReplicaRequestParams = {
    botId: string;
    replicaRegion: string;
  };

  export class DescribeBotReplicaError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotReplicaError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotResourceGenerationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    generationId: string;
  };

  export class DescribeBotResourceGenerationError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotResourceGenerationError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeBotVersionRequestParams = {
    botId: string;
    botVersion: string;
  };

  export class DescribeBotVersionError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBotVersionError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeCustomVocabularyMetadataRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
  };

  export class DescribeCustomVocabularyMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCustomVocabularyMetadataError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeIntentRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
  };

  export class DescribeIntentError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeIntentError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeSlotRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    slotId: string;
  };

  export class DescribeSlotError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSlotError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeSlotTypeRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
  };

  export class DescribeSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSlotTypeError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type GenerateBotElementRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: GenerateBotElementRequest;
  };

  export class GenerateBotElementError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateBotElementError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export class GetBotsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotsError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type GetSessionRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
  };

  export class GetSessionError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexResourceNotFoundException", RuntimeV2LexResourceNotFoundException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "runtimeV2LexResourceNotFoundException",
        decode: { kind: "json", schema: runtimeV2LexResourceNotFoundExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type GetSession1Request = {
    botName: string;
    botAlias: string;
    userId: string;
  };

  export class GetSession1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSession1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type ListAggregatedUtterancesRequestParams = {
    botId: string;
    body?: ListAggregatedUtterancesRequest;
  };

  export class ListAggregatedUtterancesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAggregatedUtterancesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotAliasReplicasRequestParams = {
    botId: string;
    replicaRegion: string;
    body?: ListBotAliasReplicasRequest;
  };

  export class ListBotAliasReplicasError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotAliasReplicasError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotAliasesRequestParams = {
    botId: string;
    body?: ListBotAliasesRequest;
  };

  export class ListBotAliasesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotAliasesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotAnalyzerHistoryRequestParams = {
    botId: string;
    body?: ListBotAnalyzerHistoryRequest;
  };

  export class ListBotAnalyzerHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotAnalyzerHistoryError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotLocalesRequestParams = {
    botId: string;
    botVersion: string;
    body?: ListBotLocalesRequest;
  };

  export class ListBotLocalesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotLocalesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotRecommendationsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: ListBotRecommendationsRequest;
  };

  export class ListBotRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotRecommendationsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotReplicasRequestParams = {
    botId: string;
    body?: ListBotReplicasRequest;
  };

  export class ListBotReplicasError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotReplicasError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotResourceGenerationsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: ListBotResourceGenerationsRequest;
  };

  export class ListBotResourceGenerationsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotResourceGenerationsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotVersionReplicasRequestParams = {
    botId: string;
    replicaRegion: string;
    body?: ListBotVersionReplicasRequest;
  };

  export class ListBotVersionReplicasError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotVersionReplicasError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotVersionsRequestParams = {
    botId: string;
    body?: ListBotVersionsRequest;
  };

  export class ListBotVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotVersionsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBotsRequestParams = {
    body?: ListBotsRequest;
  };

  export class ListBotsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBotsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListCustomVocabularyItemsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: ListCustomVocabularyItemsRequest;
  };

  export class ListCustomVocabularyItemsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomVocabularyItemsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListIntentMetricsRequestParams = {
    botId: string;
    body?: ListIntentMetricsRequest;
  };

  export class ListIntentMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIntentMetricsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListIntentPathsRequestParams = {
    botId: string;
    body?: ListIntentPathsRequest;
  };

  export class ListIntentPathsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIntentPathsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListIntentStageMetricsRequestParams = {
    botId: string;
    body?: ListIntentStageMetricsRequest;
  };

  export class ListIntentStageMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIntentStageMetricsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListIntentsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: ListIntentsRequest;
  };

  export class ListIntentsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIntentsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListRecommendedIntentsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    botRecommendationId: string;
    body?: ListRecommendedIntentsRequest;
  };

  export class ListRecommendedIntentsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecommendedIntentsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListSessionAnalyticsDataRequestParams = {
    botId: string;
    body?: ListSessionAnalyticsDataRequest;
  };

  export class ListSessionAnalyticsDataError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSessionAnalyticsDataError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListSessionMetricsRequestParams = {
    botId: string;
    body?: ListSessionMetricsRequest;
  };

  export class ListSessionMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSessionMetricsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListSlotTypesRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: ListSlotTypesRequest;
  };

  export class ListSlotTypesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSlotTypesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListSlotsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    body?: ListSlotsRequest;
  };

  export class ListSlotsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSlotsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListUtteranceAnalyticsDataRequestParams = {
    botId: string;
    body?: ListUtteranceAnalyticsDataRequest;
  };

  export class ListUtteranceAnalyticsDataError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUtteranceAnalyticsDataError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListUtteranceMetricsRequestParams = {
    botId: string;
    body?: ListUtteranceMetricsRequest;
  };

  export class ListUtteranceMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUtteranceMetricsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type PutSessionRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
    body?: PutSessionRequest;
  };

  export class PutSessionError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badGatewayException", BadGatewayException>
      | Declared<"runtimeV2LexConflictException", RuntimeV2LexConflictException>
      | Declared<"dependencyFailedException", DependencyFailedException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexResourceNotFoundException", RuntimeV2LexResourceNotFoundException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutSessionError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 502, kind: "badGatewayException", decode: { kind: "json", schema: badGatewayExceptionSchema } },
      {
        on: 409,
        kind: "runtimeV2LexConflictException",
        decode: { kind: "json", schema: runtimeV2LexConflictExceptionSchema },
      },
      {
        on: 424,
        kind: "dependencyFailedException",
        decode: { kind: "json", schema: dependencyFailedExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "runtimeV2LexResourceNotFoundException",
        decode: { kind: "json", schema: runtimeV2LexResourceNotFoundExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type PutSession1Request = {
    botName: string;
    botAlias: string;
    userId: string;
    body?: RuntimeLexPutSessionRequest;
  };

  export class PutSession1Error extends ApiError {
    declare readonly payload:
      | Declared<"runtimeLexBadGatewayException", RuntimeLexBadGatewayException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"runtimeLexDependencyFailedException", RuntimeLexDependencyFailedException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notAcceptableException", NotAcceptableException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutSession1Error> = [
      {
        on: 502,
        kind: "runtimeLexBadGatewayException",
        decode: { kind: "json", schema: runtimeLexBadGatewayExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 424,
        kind: "runtimeLexDependencyFailedException",
        decode: { kind: "json", schema: runtimeLexDependencyFailedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 406,
        kind: "notAcceptableException",
        decode: { kind: "json", schema: notAcceptableExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type RecognizeTextRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
    body?: RecognizeTextRequest;
  };

  export class RecognizeTextError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badGatewayException", BadGatewayException>
      | Declared<"runtimeV2LexConflictException", RuntimeV2LexConflictException>
      | Declared<"dependencyFailedException", DependencyFailedException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexResourceNotFoundException", RuntimeV2LexResourceNotFoundException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecognizeTextError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 502, kind: "badGatewayException", decode: { kind: "json", schema: badGatewayExceptionSchema } },
      {
        on: 409,
        kind: "runtimeV2LexConflictException",
        decode: { kind: "json", schema: runtimeV2LexConflictExceptionSchema },
      },
      {
        on: 424,
        kind: "dependencyFailedException",
        decode: { kind: "json", schema: dependencyFailedExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "runtimeV2LexResourceNotFoundException",
        decode: { kind: "json", schema: runtimeV2LexResourceNotFoundExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type RecognizeUtteranceRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
    body?: RecognizeUtteranceRequest;
  };

  export class RecognizeUtteranceError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badGatewayException", BadGatewayException>
      | Declared<"runtimeV2LexConflictException", RuntimeV2LexConflictException>
      | Declared<"dependencyFailedException", DependencyFailedException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexResourceNotFoundException", RuntimeV2LexResourceNotFoundException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecognizeUtteranceError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 502, kind: "badGatewayException", decode: { kind: "json", schema: badGatewayExceptionSchema } },
      {
        on: 409,
        kind: "runtimeV2LexConflictException",
        decode: { kind: "json", schema: runtimeV2LexConflictExceptionSchema },
      },
      {
        on: 424,
        kind: "dependencyFailedException",
        decode: { kind: "json", schema: dependencyFailedExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "runtimeV2LexResourceNotFoundException",
        decode: { kind: "json", schema: runtimeV2LexResourceNotFoundExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type SearchAssociatedTranscriptsRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    botRecommendationId: string;
    body?: SearchAssociatedTranscriptsRequest;
  };

  export class SearchAssociatedTranscriptsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAssociatedTranscriptsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartBotAnalyzerRequestParams = {
    botId: string;
    body?: StartBotAnalyzerRequest;
  };

  export class StartBotAnalyzerError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartBotAnalyzerError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartBotRecommendationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: StartBotRecommendationRequest;
  };

  export class StartBotRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartBotRecommendationError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartBotResourceGenerationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: StartBotResourceGenerationRequest;
  };

  export class StartBotResourceGenerationError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartBotResourceGenerationError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartConversationRequestParams = {
    botId: string;
    botAliasId: string;
    localeId: string;
    sessionId: string;
    body?: StartConversationRequest;
  };

  export class StartConversationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"runtimeV2LexInternalServerException", RuntimeV2LexInternalServerException>
      | Declared<"runtimeV2LexThrottlingException", RuntimeV2LexThrottlingException>
      | Declared<"runtimeV2LexValidationException", RuntimeV2LexValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartConversationError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "runtimeV2LexInternalServerException",
        decode: { kind: "json", schema: runtimeV2LexInternalServerExceptionSchema },
      },
      {
        on: 429,
        kind: "runtimeV2LexThrottlingException",
        decode: { kind: "json", schema: runtimeV2LexThrottlingExceptionSchema },
      },
      {
        on: 400,
        kind: "runtimeV2LexValidationException",
        decode: { kind: "json", schema: runtimeV2LexValidationExceptionSchema },
      },
    ];
  }

  export type StopBotAnalyzerRequestParams = {
    botId: string;
    botAnalyzerRequestId: string;
    body?: StopBotAnalyzerRequest;
  };

  export class StopBotAnalyzerError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopBotAnalyzerError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StopBotRecommendationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    botRecommendationId: string;
    body?: StopBotRecommendationRequest;
  };

  export class StopBotRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopBotRecommendationError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateBotRequestParams = {
    botId: string;
    body?: UpdateBotRequest;
  };

  export class UpdateBotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateBotAliasRequestParams = {
    botId: string;
    botAliasId: string;
    body?: UpdateBotAliasRequest;
  };

  export class UpdateBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBotAliasError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateBotLocaleRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    body?: UpdateBotLocaleRequest;
  };

  export class UpdateBotLocaleError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBotLocaleError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateBotRecommendationRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    botRecommendationId: string;
    body?: UpdateBotRecommendationRequest;
  };

  export class UpdateBotRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBotRecommendationError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateIntentRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    body?: UpdateIntentRequest;
  };

  export class UpdateIntentError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateIntentError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateSlotRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    intentId: string;
    slotId: string;
    body?: UpdateSlotRequest;
  };

  export class UpdateSlotError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSlotError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateSlotTypeRequestParams = {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
    body?: UpdateSlotTypeRequest;
  };

  export class UpdateSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSlotTypeError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
