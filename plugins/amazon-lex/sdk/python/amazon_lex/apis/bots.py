from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.batch_create_custom_vocabulary_item_error import (
    BatchCreateCustomVocabularyItemErrorBody,
    batch_create_custom_vocabulary_item_error_mapper,
)
from ..errors.batch_delete_custom_vocabulary_item_error import (
    BatchDeleteCustomVocabularyItemErrorBody,
    batch_delete_custom_vocabulary_item_error_mapper,
)
from ..errors.batch_update_custom_vocabulary_item_error import (
    BatchUpdateCustomVocabularyItemErrorBody,
    batch_update_custom_vocabulary_item_error_mapper,
)
from ..errors.build_bot_locale_error import BuildBotLocaleErrorBody, build_bot_locale_error_mapper
from ..errors.create_bot_alias_error import CreateBotAliasErrorBody, create_bot_alias_error_mapper
from ..errors.create_bot_error import CreateBotErrorBody, create_bot_error_mapper
from ..errors.create_bot_locale_error import CreateBotLocaleErrorBody, create_bot_locale_error_mapper
from ..errors.create_bot_replica_error import CreateBotReplicaErrorBody, create_bot_replica_error_mapper
from ..errors.create_bot_version1_error import CreateBotVersion1ErrorBody, create_bot_version1_error_mapper
from ..errors.create_bot_version_error import CreateBotVersionErrorBody, create_bot_version_error_mapper
from ..errors.create_intent_error import CreateIntentErrorBody, create_intent_error_mapper
from ..errors.create_slot_error import CreateSlotErrorBody, create_slot_error_mapper
from ..errors.create_slot_type_error import CreateSlotTypeErrorBody, create_slot_type_error_mapper
from ..errors.delete_bot1_error import DeleteBot1ErrorBody, delete_bot1_error_mapper
from ..errors.delete_bot_alias1_error import DeleteBotAlias1ErrorBody, delete_bot_alias1_error_mapper
from ..errors.delete_bot_alias2_error import DeleteBotAlias2ErrorBody, delete_bot_alias2_error_mapper
from ..errors.delete_bot_analyzer_recommendation_error import (
    DeleteBotAnalyzerRecommendationErrorBody,
    delete_bot_analyzer_recommendation_error_mapper,
)
from ..errors.delete_bot_error import DeleteBotErrorBody, delete_bot_error_mapper
from ..errors.delete_bot_locale_error import DeleteBotLocaleErrorBody, delete_bot_locale_error_mapper
from ..errors.delete_bot_replica_error import DeleteBotReplicaErrorBody, delete_bot_replica_error_mapper
from ..errors.delete_bot_version1_error import DeleteBotVersion1ErrorBody, delete_bot_version1_error_mapper
from ..errors.delete_bot_version_error import DeleteBotVersionErrorBody, delete_bot_version_error_mapper
from ..errors.delete_custom_vocabulary_error import (
    DeleteCustomVocabularyErrorBody,
    delete_custom_vocabulary_error_mapper,
)
from ..errors.delete_intent1_error import DeleteIntent1ErrorBody, delete_intent1_error_mapper
from ..errors.delete_intent_error import DeleteIntentErrorBody, delete_intent_error_mapper
from ..errors.delete_session1_error import DeleteSession1ErrorBody, delete_session1_error_mapper
from ..errors.delete_session_error import DeleteSessionErrorBody, delete_session_error_mapper
from ..errors.delete_slot_error import DeleteSlotErrorBody, delete_slot_error_mapper
from ..errors.delete_slot_type1_error import DeleteSlotType1ErrorBody, delete_slot_type1_error_mapper
from ..errors.delete_slot_type_error import DeleteSlotTypeErrorBody, delete_slot_type_error_mapper
from ..errors.delete_utterances1_error import DeleteUtterances1ErrorBody, delete_utterances1_error_mapper
from ..errors.delete_utterances_error import DeleteUtterancesErrorBody, delete_utterances_error_mapper
from ..errors.describe_bot_alias_error import DescribeBotAliasErrorBody, describe_bot_alias_error_mapper
from ..errors.describe_bot_analyzer_recommendation_error import (
    DescribeBotAnalyzerRecommendationErrorBody,
    describe_bot_analyzer_recommendation_error_mapper,
)
from ..errors.describe_bot_error import DescribeBotErrorBody, describe_bot_error_mapper
from ..errors.describe_bot_locale_error import DescribeBotLocaleErrorBody, describe_bot_locale_error_mapper
from ..errors.describe_bot_recommendation_error import (
    DescribeBotRecommendationErrorBody,
    describe_bot_recommendation_error_mapper,
)
from ..errors.describe_bot_replica_error import DescribeBotReplicaErrorBody, describe_bot_replica_error_mapper
from ..errors.describe_bot_resource_generation_error import (
    DescribeBotResourceGenerationErrorBody,
    describe_bot_resource_generation_error_mapper,
)
from ..errors.describe_bot_version_error import DescribeBotVersionErrorBody, describe_bot_version_error_mapper
from ..errors.describe_custom_vocabulary_metadata_error import (
    DescribeCustomVocabularyMetadataErrorBody,
    describe_custom_vocabulary_metadata_error_mapper,
)
from ..errors.describe_intent_error import DescribeIntentErrorBody, describe_intent_error_mapper
from ..errors.describe_slot_error import DescribeSlotErrorBody, describe_slot_error_mapper
from ..errors.describe_slot_type_error import DescribeSlotTypeErrorBody, describe_slot_type_error_mapper
from ..errors.generate_bot_element_error import GenerateBotElementErrorBody, generate_bot_element_error_mapper
from ..errors.get_bots_error import GetBotsErrorBody, get_bots_error_mapper
from ..errors.get_session1_error import GetSession1ErrorBody, get_session1_error_mapper
from ..errors.get_session_error import GetSessionErrorBody, get_session_error_mapper
from ..errors.list_aggregated_utterances_error import (
    ListAggregatedUtterancesErrorBody,
    list_aggregated_utterances_error_mapper,
)
from ..errors.list_bot_alias_replicas_error import ListBotAliasReplicasErrorBody, list_bot_alias_replicas_error_mapper
from ..errors.list_bot_aliases_error import ListBotAliasesErrorBody, list_bot_aliases_error_mapper
from ..errors.list_bot_analyzer_history_error import (
    ListBotAnalyzerHistoryErrorBody,
    list_bot_analyzer_history_error_mapper,
)
from ..errors.list_bot_locales_error import ListBotLocalesErrorBody, list_bot_locales_error_mapper
from ..errors.list_bot_recommendations_error import (
    ListBotRecommendationsErrorBody,
    list_bot_recommendations_error_mapper,
)
from ..errors.list_bot_replicas_error import ListBotReplicasErrorBody, list_bot_replicas_error_mapper
from ..errors.list_bot_resource_generations_error import (
    ListBotResourceGenerationsErrorBody,
    list_bot_resource_generations_error_mapper,
)
from ..errors.list_bot_version_replicas_error import (
    ListBotVersionReplicasErrorBody,
    list_bot_version_replicas_error_mapper,
)
from ..errors.list_bot_versions_error import ListBotVersionsErrorBody, list_bot_versions_error_mapper
from ..errors.list_bots_error import ListBotsErrorBody, list_bots_error_mapper
from ..errors.list_custom_vocabulary_items_error import (
    ListCustomVocabularyItemsErrorBody,
    list_custom_vocabulary_items_error_mapper,
)
from ..errors.list_intent_metrics_error import ListIntentMetricsErrorBody, list_intent_metrics_error_mapper
from ..errors.list_intent_paths_error import ListIntentPathsErrorBody, list_intent_paths_error_mapper
from ..errors.list_intent_stage_metrics_error import (
    ListIntentStageMetricsErrorBody,
    list_intent_stage_metrics_error_mapper,
)
from ..errors.list_intents_error import ListIntentsErrorBody, list_intents_error_mapper
from ..errors.list_recommended_intents_error import (
    ListRecommendedIntentsErrorBody,
    list_recommended_intents_error_mapper,
)
from ..errors.list_session_analytics_data_error import (
    ListSessionAnalyticsDataErrorBody,
    list_session_analytics_data_error_mapper,
)
from ..errors.list_session_metrics_error import ListSessionMetricsErrorBody, list_session_metrics_error_mapper
from ..errors.list_slot_types_error import ListSlotTypesErrorBody, list_slot_types_error_mapper
from ..errors.list_slots_error import ListSlotsErrorBody, list_slots_error_mapper
from ..errors.list_utterance_analytics_data_error import (
    ListUtteranceAnalyticsDataErrorBody,
    list_utterance_analytics_data_error_mapper,
)
from ..errors.list_utterance_metrics_error import ListUtteranceMetricsErrorBody, list_utterance_metrics_error_mapper
from ..errors.put_session1_error import PutSession1ErrorBody, put_session1_error_mapper
from ..errors.put_session_error import PutSessionErrorBody, put_session_error_mapper
from ..errors.recognize_text_error import RecognizeTextErrorBody, recognize_text_error_mapper
from ..errors.recognize_utterance_error import RecognizeUtteranceErrorBody, recognize_utterance_error_mapper
from ..errors.search_associated_transcripts_error import (
    SearchAssociatedTranscriptsErrorBody,
    search_associated_transcripts_error_mapper,
)
from ..errors.start_bot_analyzer_error import StartBotAnalyzerErrorBody, start_bot_analyzer_error_mapper
from ..errors.start_bot_recommendation_error import (
    StartBotRecommendationErrorBody,
    start_bot_recommendation_error_mapper,
)
from ..errors.start_bot_resource_generation_error import (
    StartBotResourceGenerationErrorBody,
    start_bot_resource_generation_error_mapper,
)
from ..errors.start_conversation_error import StartConversationErrorBody, start_conversation_error_mapper
from ..errors.stop_bot_analyzer_error import StopBotAnalyzerErrorBody, stop_bot_analyzer_error_mapper
from ..errors.stop_bot_recommendation_error import StopBotRecommendationErrorBody, stop_bot_recommendation_error_mapper
from ..errors.update_bot_alias_error import UpdateBotAliasErrorBody, update_bot_alias_error_mapper
from ..errors.update_bot_error import UpdateBotErrorBody, update_bot_error_mapper
from ..errors.update_bot_locale_error import UpdateBotLocaleErrorBody, update_bot_locale_error_mapper
from ..errors.update_bot_recommendation_error import (
    UpdateBotRecommendationErrorBody,
    update_bot_recommendation_error_mapper,
)
from ..errors.update_intent_error import UpdateIntentErrorBody, update_intent_error_mapper
from ..errors.update_slot_error import UpdateSlotErrorBody, update_slot_error_mapper
from ..errors.update_slot_type_error import UpdateSlotTypeErrorBody, update_slot_type_error_mapper
from ..models.batch_create_custom_vocabulary_item_request import (
    BatchCreateCustomVocabularyItemRequest,
    BatchCreateCustomVocabularyItemRequestDict,
)
from ..models.batch_create_custom_vocabulary_item_response import BatchCreateCustomVocabularyItemResponse
from ..models.batch_delete_custom_vocabulary_item_request import (
    BatchDeleteCustomVocabularyItemRequest,
    BatchDeleteCustomVocabularyItemRequestDict,
)
from ..models.batch_delete_custom_vocabulary_item_response import BatchDeleteCustomVocabularyItemResponse
from ..models.batch_update_custom_vocabulary_item_request import (
    BatchUpdateCustomVocabularyItemRequest,
    BatchUpdateCustomVocabularyItemRequestDict,
)
from ..models.batch_update_custom_vocabulary_item_response import BatchUpdateCustomVocabularyItemResponse
from ..models.build_bot_locale_request import BuildBotLocaleRequest, BuildBotLocaleRequestDict
from ..models.build_bot_locale_response import BuildBotLocaleResponse
from ..models.create_bot_alias_request import CreateBotAliasRequest, CreateBotAliasRequestDict
from ..models.create_bot_alias_response import CreateBotAliasResponse
from ..models.create_bot_locale_request import CreateBotLocaleRequest, CreateBotLocaleRequestDict
from ..models.create_bot_locale_response import CreateBotLocaleResponse
from ..models.create_bot_replica_request import CreateBotReplicaRequest, CreateBotReplicaRequestDict
from ..models.create_bot_replica_response import CreateBotReplicaResponse
from ..models.create_bot_request import CreateBotRequest, CreateBotRequestDict
from ..models.create_bot_response import CreateBotResponse
from ..models.create_bot_version_request import CreateBotVersionRequest, CreateBotVersionRequestDict
from ..models.create_bot_version_response import CreateBotVersionResponse
from ..models.create_intent_request import CreateIntentRequest, CreateIntentRequestDict
from ..models.create_intent_response import CreateIntentResponse
from ..models.create_slot_request import CreateSlotRequest, CreateSlotRequestDict
from ..models.create_slot_response import CreateSlotResponse
from ..models.create_slot_type_request import CreateSlotTypeRequest, CreateSlotTypeRequestDict
from ..models.create_slot_type_response import CreateSlotTypeResponse
from ..models.delete_bot_alias_request import DeleteBotAliasRequest, DeleteBotAliasRequestDict
from ..models.delete_bot_alias_response import DeleteBotAliasResponse
from ..models.delete_bot_analyzer_recommendation_request import (
    DeleteBotAnalyzerRecommendationRequest,
    DeleteBotAnalyzerRecommendationRequestDict,
)
from ..models.delete_bot_locale_request import DeleteBotLocaleRequest, DeleteBotLocaleRequestDict
from ..models.delete_bot_locale_response import DeleteBotLocaleResponse
from ..models.delete_bot_replica_request import DeleteBotReplicaRequest, DeleteBotReplicaRequestDict
from ..models.delete_bot_replica_response import DeleteBotReplicaResponse
from ..models.delete_bot_request import DeleteBotRequest, DeleteBotRequestDict
from ..models.delete_bot_response import DeleteBotResponse
from ..models.delete_bot_version_request import DeleteBotVersionRequest, DeleteBotVersionRequestDict
from ..models.delete_bot_version_response import DeleteBotVersionResponse
from ..models.delete_custom_vocabulary_request import DeleteCustomVocabularyRequest, DeleteCustomVocabularyRequestDict
from ..models.delete_custom_vocabulary_response import DeleteCustomVocabularyResponse
from ..models.delete_intent_request import DeleteIntentRequest, DeleteIntentRequestDict
from ..models.delete_session_request import DeleteSessionRequest, DeleteSessionRequestDict
from ..models.delete_session_response import DeleteSessionResponse
from ..models.delete_slot_request import DeleteSlotRequest, DeleteSlotRequestDict
from ..models.delete_slot_type_request import DeleteSlotTypeRequest, DeleteSlotTypeRequestDict
from ..models.delete_utterances_request import DeleteUtterancesRequest, DeleteUtterancesRequestDict
from ..models.describe_bot_alias_response import DescribeBotAliasResponse
from ..models.describe_bot_analyzer_recommendation_request import (
    DescribeBotAnalyzerRecommendationRequest,
    DescribeBotAnalyzerRecommendationRequestDict,
)
from ..models.describe_bot_analyzer_recommendation_response import DescribeBotAnalyzerRecommendationResponse
from ..models.describe_bot_locale_response import DescribeBotLocaleResponse
from ..models.describe_bot_recommendation_response import DescribeBotRecommendationResponse
from ..models.describe_bot_replica_response import DescribeBotReplicaResponse
from ..models.describe_bot_resource_generation_response import DescribeBotResourceGenerationResponse
from ..models.describe_bot_response import DescribeBotResponse
from ..models.describe_bot_version_response import DescribeBotVersionResponse
from ..models.describe_custom_vocabulary_metadata_response import DescribeCustomVocabularyMetadataResponse
from ..models.describe_intent_response import DescribeIntentResponse
from ..models.describe_slot_response import DescribeSlotResponse
from ..models.describe_slot_type_response import DescribeSlotTypeResponse
from ..models.generate_bot_element_request import GenerateBotElementRequest, GenerateBotElementRequestDict
from ..models.generate_bot_element_response import GenerateBotElementResponse
from ..models.get_bots_response import GetBotsResponse
from ..models.get_session_response import GetSessionResponse
from ..models.list_aggregated_utterances_request import (
    ListAggregatedUtterancesRequest,
    ListAggregatedUtterancesRequestDict,
)
from ..models.list_aggregated_utterances_response import ListAggregatedUtterancesResponse
from ..models.list_bot_alias_replicas_request import ListBotAliasReplicasRequest, ListBotAliasReplicasRequestDict
from ..models.list_bot_alias_replicas_response import ListBotAliasReplicasResponse
from ..models.list_bot_aliases_request import ListBotAliasesRequest, ListBotAliasesRequestDict
from ..models.list_bot_aliases_response import ListBotAliasesResponse
from ..models.list_bot_analyzer_history_request import ListBotAnalyzerHistoryRequest, ListBotAnalyzerHistoryRequestDict
from ..models.list_bot_analyzer_history_response import ListBotAnalyzerHistoryResponse
from ..models.list_bot_locales_request import ListBotLocalesRequest, ListBotLocalesRequestDict
from ..models.list_bot_locales_response import ListBotLocalesResponse
from ..models.list_bot_recommendations_request import ListBotRecommendationsRequest, ListBotRecommendationsRequestDict
from ..models.list_bot_recommendations_response import ListBotRecommendationsResponse
from ..models.list_bot_replicas_request import ListBotReplicasRequest, ListBotReplicasRequestDict
from ..models.list_bot_replicas_response import ListBotReplicasResponse
from ..models.list_bot_resource_generations_request import (
    ListBotResourceGenerationsRequest,
    ListBotResourceGenerationsRequestDict,
)
from ..models.list_bot_resource_generations_response import ListBotResourceGenerationsResponse
from ..models.list_bot_version_replicas_request import ListBotVersionReplicasRequest, ListBotVersionReplicasRequestDict
from ..models.list_bot_version_replicas_response import ListBotVersionReplicasResponse
from ..models.list_bot_versions_request import ListBotVersionsRequest, ListBotVersionsRequestDict
from ..models.list_bot_versions_response import ListBotVersionsResponse
from ..models.list_bots_request import ListBotsRequest, ListBotsRequestDict
from ..models.list_bots_response import ListBotsResponse
from ..models.list_custom_vocabulary_items_request import (
    ListCustomVocabularyItemsRequest,
    ListCustomVocabularyItemsRequestDict,
)
from ..models.list_custom_vocabulary_items_response import ListCustomVocabularyItemsResponse
from ..models.list_intent_metrics_request import ListIntentMetricsRequest, ListIntentMetricsRequestDict
from ..models.list_intent_metrics_response import ListIntentMetricsResponse
from ..models.list_intent_paths_request import ListIntentPathsRequest, ListIntentPathsRequestDict
from ..models.list_intent_paths_response import ListIntentPathsResponse
from ..models.list_intent_stage_metrics_request import ListIntentStageMetricsRequest, ListIntentStageMetricsRequestDict
from ..models.list_intent_stage_metrics_response import ListIntentStageMetricsResponse
from ..models.list_intents_request import ListIntentsRequest, ListIntentsRequestDict
from ..models.list_intents_response import ListIntentsResponse
from ..models.list_recommended_intents_request import ListRecommendedIntentsRequest, ListRecommendedIntentsRequestDict
from ..models.list_recommended_intents_response import ListRecommendedIntentsResponse
from ..models.list_session_analytics_data_request import (
    ListSessionAnalyticsDataRequest,
    ListSessionAnalyticsDataRequestDict,
)
from ..models.list_session_analytics_data_response import ListSessionAnalyticsDataResponse
from ..models.list_session_metrics_request import ListSessionMetricsRequest, ListSessionMetricsRequestDict
from ..models.list_session_metrics_response import ListSessionMetricsResponse
from ..models.list_slot_types_request import ListSlotTypesRequest, ListSlotTypesRequestDict
from ..models.list_slot_types_response import ListSlotTypesResponse
from ..models.list_slots_request import ListSlotsRequest, ListSlotsRequestDict
from ..models.list_slots_response import ListSlotsResponse
from ..models.list_utterance_analytics_data_request import (
    ListUtteranceAnalyticsDataRequest,
    ListUtteranceAnalyticsDataRequestDict,
)
from ..models.list_utterance_analytics_data_response import ListUtteranceAnalyticsDataResponse
from ..models.list_utterance_metrics_request import ListUtteranceMetricsRequest, ListUtteranceMetricsRequestDict
from ..models.list_utterance_metrics_response import ListUtteranceMetricsResponse
from ..models.models_lex_create_bot_version_request import (
    ModelsLexCreateBotVersionRequest,
    ModelsLexCreateBotVersionRequestDict,
)
from ..models.models_lex_create_bot_version_response import ModelsLexCreateBotVersionResponse
from ..models.models_lex_delete_bot_alias_request import (
    ModelsLexDeleteBotAliasRequest,
    ModelsLexDeleteBotAliasRequestDict,
)
from ..models.models_lex_delete_bot_request import ModelsLexDeleteBotRequest, ModelsLexDeleteBotRequestDict
from ..models.models_lex_delete_bot_version_request import (
    ModelsLexDeleteBotVersionRequest,
    ModelsLexDeleteBotVersionRequestDict,
)
from ..models.models_lex_delete_intent_request import ModelsLexDeleteIntentRequest, ModelsLexDeleteIntentRequestDict
from ..models.models_lex_delete_slot_type_request import (
    ModelsLexDeleteSlotTypeRequest,
    ModelsLexDeleteSlotTypeRequestDict,
)
from ..models.models_lex_delete_utterances_request import (
    ModelsLexDeleteUtterancesRequest,
    ModelsLexDeleteUtterancesRequestDict,
)
from ..models.put_session_request import PutSessionRequest, PutSessionRequestDict
from ..models.put_session_response import PutSessionResponse
from ..models.recognize_text_request import RecognizeTextRequest, RecognizeTextRequestDict
from ..models.recognize_text_response import RecognizeTextResponse
from ..models.recognize_utterance_request import RecognizeUtteranceRequest, RecognizeUtteranceRequestDict
from ..models.recognize_utterance_response import RecognizeUtteranceResponse
from ..models.runtime_lex_delete_session_request import (
    RuntimeLexDeleteSessionRequest,
    RuntimeLexDeleteSessionRequestDict,
)
from ..models.runtime_lex_delete_session_response import RuntimeLexDeleteSessionResponse
from ..models.runtime_lex_get_session_response import RuntimeLexGetSessionResponse
from ..models.runtime_lex_put_session_request import RuntimeLexPutSessionRequest, RuntimeLexPutSessionRequestDict
from ..models.runtime_lex_put_session_response import RuntimeLexPutSessionResponse
from ..models.search_associated_transcripts_request import (
    SearchAssociatedTranscriptsRequest,
    SearchAssociatedTranscriptsRequestDict,
)
from ..models.search_associated_transcripts_response import SearchAssociatedTranscriptsResponse
from ..models.start_bot_analyzer_request import StartBotAnalyzerRequest, StartBotAnalyzerRequestDict
from ..models.start_bot_analyzer_response import StartBotAnalyzerResponse
from ..models.start_bot_recommendation_request import StartBotRecommendationRequest, StartBotRecommendationRequestDict
from ..models.start_bot_recommendation_response import StartBotRecommendationResponse
from ..models.start_bot_resource_generation_request import (
    StartBotResourceGenerationRequest,
    StartBotResourceGenerationRequestDict,
)
from ..models.start_bot_resource_generation_response import StartBotResourceGenerationResponse
from ..models.start_conversation_request import StartConversationRequest, StartConversationRequestDict
from ..models.start_conversation_response import StartConversationResponse
from ..models.stop_bot_analyzer_request import StopBotAnalyzerRequest, StopBotAnalyzerRequestDict
from ..models.stop_bot_analyzer_response import StopBotAnalyzerResponse
from ..models.stop_bot_recommendation_request import StopBotRecommendationRequest, StopBotRecommendationRequestDict
from ..models.stop_bot_recommendation_response import StopBotRecommendationResponse
from ..models.update_bot_alias_request import UpdateBotAliasRequest, UpdateBotAliasRequestDict
from ..models.update_bot_alias_response import UpdateBotAliasResponse
from ..models.update_bot_locale_request import UpdateBotLocaleRequest, UpdateBotLocaleRequestDict
from ..models.update_bot_locale_response import UpdateBotLocaleResponse
from ..models.update_bot_recommendation_request import (
    UpdateBotRecommendationRequest,
    UpdateBotRecommendationRequestDict,
)
from ..models.update_bot_recommendation_response import UpdateBotRecommendationResponse
from ..models.update_bot_request import UpdateBotRequest, UpdateBotRequestDict
from ..models.update_bot_response import UpdateBotResponse
from ..models.update_intent_request import UpdateIntentRequest, UpdateIntentRequestDict
from ..models.update_intent_response import UpdateIntentResponse
from ..models.update_slot_request import UpdateSlotRequest, UpdateSlotRequestDict
from ..models.update_slot_response import UpdateSlotResponse
from ..models.update_slot_type_request import UpdateSlotTypeRequest, UpdateSlotTypeRequestDict
from ..models.update_slot_type_response import UpdateSlotTypeResponse
from ..server.server import Server


class Bots:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BotsWithRawResponse(client, server, auth)

    def batch_create_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchCreateCustomVocabularyItemResponse:
        """Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.batch_create_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def batch_delete_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchDeleteCustomVocabularyItemResponse:
        """Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.batch_delete_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def batch_update_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchUpdateCustomVocabularyItemResponse:
        """Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.batch_update_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def build_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildBotLocaleResponse:
        """Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple
        locales. At runtime the locale is used to choose a specific build of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.build_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def create_bot(
        self,
        *,
        body: CreateBotRequest | CreateBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateBotResponse:
        """Creates an Amazon Lex conversational bot.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.create_bot(body=body, request_options=request_options))

    def create_bot_alias(
        self,
        bot_id: str,
        *,
        body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateBotAliasResponse:
        """Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a
        bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your
        applications use to call the Amazon Lex bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.create_bot_alias(bot_id, body=body, request_options=request_options))

    def create_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateBotLocaleResponse:
        """Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in
        conversations with users in the specified language and locale. You must add a locale to a bot before you can add
        intents and slot types to the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_bot_locale(bot_id, bot_version, body=body, request_options=request_options)
        )

    def create_bot_replica(
        self,
        bot_id: str,
        *,
        body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateBotReplicaResponse:
        """Action to create a replication of the source bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.create_bot_replica(bot_id, body=body, request_options=request_options))

    def create_bot_version(
        self,
        bot_id: str,
        *,
        body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateBotVersionResponse:
        """Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the
        version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always
        represent the total number of versions created of the bot, not the current number of versions. If a bot version
        is deleted, that bot version number will not be reused.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.create_bot_version(bot_id, body=body, request_options=request_options))

    def create_bot_version1(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsLexCreateBotVersionResponse:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.create_bot_version1(name, body=body, request_options=request_options))

    def create_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateIntentRequest | CreateIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateIntentResponse:
        """Creates an intent. To define the interaction between the user and your bot, you define one or more intents.
        For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must
        provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a
        pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered.
        You specify slots for the information that you bot requests from the user. You can specify standard slot types,
        such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a
        Lambda function or configure the intent to return the intent information to your client application. If you use
        a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A
        confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A
        conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A
        follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_intent(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def create_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: CreateSlotRequest | CreateSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateSlotResponse:
        """Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza
        intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances
        that Amazon Lex uses to elicit a response from the user.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_slot(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    def create_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateSlotTypeResponse:
        """Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of
        enumeration values, the values that a slot of this type can assume.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_slot_type(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def delete_bot(
        self,
        bot_id: str,
        *,
        body: DeleteBotRequest | DeleteBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteBotResponse:
        """Deletes all versions of a bot, including the Draft version. To delete a specific version, use the
        DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted.
        Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias,
        the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias,
        set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.delete_bot(bot_id, body=body, request_options=request_options))

    def delete_bot1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use
        the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it
        is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of
        your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the
        utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the
        DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that
        refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again,
        delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for
        the lex:DeleteBot action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_bot1(name, body=body, request_options=request_options))

    def delete_bot_alias1(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_alias1(bot_name, name, body=body, request_options=request_options)
        )

    def delete_bot_alias2(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteBotAliasResponse:
        """Deletes the specified bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_alias2(bot_id, bot_alias_id, body=body, request_options=request_options)
        )

    def delete_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Permanently deletes the recommendations and analysis results for a specific bot analysis request. This
        operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be
        retrieved. The analysis request ID will still appear in the history list, but attempting to describe the
        recommendations will return a ResourceNotFoundException.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_analyzer_recommendation(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    def delete_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteBotLocaleResponse:
        """Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the
        locale are also deleted.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def delete_bot_replica(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteBotReplicaResponse:
        """The action to delete the replicated bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_replica(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    def delete_bot_version(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteBotVersionResponse:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_version(bot_id, bot_version, body=body, request_options=request_options)
        )

    def delete_bot_version1(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_version1(name, version, body=body, request_options=request_options)
        )

    def delete_custom_vocabulary(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteCustomVocabularyResponse:
        """Removes a custom vocabulary from the specified locale in the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_vocabulary(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def delete_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: DeleteIntentRequest | DeleteIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_intent(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    def delete_intent1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the
        intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not
        referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove
        those references first. If you get the ResourceInUseException exception, it provides an example reference that
        shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it.
        If you get the same exception when you attempt to delete the intent again, repeat until the intent has no
        references and the call to DeleteIntent is successful. This operation requires permission for the
        lex:DeleteIntent action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_intent1(name, body=body, request_options=request_options))

    def delete_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: DeleteSessionRequest | DeleteSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteSessionResponse:
        """Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a
        conversation with a bot. When you remove a session, the entire history of the session is removed so that you can
        start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session
        time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and
        24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale
        doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``RuntimeV2LexValidationException |
                AccessDeniedException | RuntimeV2LexResourceNotFoundException | RuntimeV2LexConflictException |
                RuntimeV2LexThrottlingException | RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_session(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    def delete_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RuntimeLexDeleteSessionResponse:
        """Removes session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_session1(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    def delete_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: DeleteSlotRequest | DeleteSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes the specified slot from an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, body=body, request_options=request_options
            ),
        )

    def delete_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a
        ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, body=body, request_options=request_options
            ),
        )

    def delete_slot_type1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the
        slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not
        referenced. To delete a slot type that is referred to in one or more intents, you must remove those references
        first. If you get the ResourceInUseException exception, the exception provides an example reference that shows
        the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent
        or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the
        slot type has no references and the DeleteSlotType call is successful. This operation requires permission for
        the lex:DeleteSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_slot_type1(name, body=body, request_options=request_options))

    def delete_utterances(
        self,
        bot_id: str,
        *,
        body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually
        delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the ListAggregatedUtterances operation are deleted after 15 days.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.delete_utterances(bot_id, body=body, request_options=request_options))

    def delete_utterances1(
        self,
        bot_name: str,
        user_id: str,
        *,
        body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually
        delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the
        lex:DeleteUtterances action.

        Args:
            bot_name: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_utterances1(bot_name, user_id, body=body, request_options=request_options)
        )

    def describe_bot(self, bot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotResponse:
        """Provides metadata information about a bot.

        Args:
            bot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_bot(bot_id, request_options=request_options))

    def describe_bot_alias(
        self, bot_id: str, bot_alias_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeBotAliasResponse:
        """Get information about a specific bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_bot_alias(bot_id, bot_alias_id, request_options=request_options))

    def describe_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeBotAnalyzerRecommendationResponse:
        """Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available
        status before recommendations can be retrieved. Recommendations are returned with pagination support. Each
        recommendation includes the issue location, priority level, detailed description, and proposed fix.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_analyzer_recommendation(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    def describe_bot_locale(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeBotLocaleResponse:
        """Describes the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_locale(bot_id, bot_version, locale_id, request_options=request_options)
        )

    def describe_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeBotRecommendationResponse:
        """Provides metadata information about a bot recommendation. This information will enable you to get a
        description on the request inputs, to download associated transcripts after processing is complete, and to
        download intents and slot-types generated by the bot recommendation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, request_options=request_options
            ),
        )

    def describe_bot_replica(
        self, bot_id: str, replica_region: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeBotReplicaResponse:
        """Monitors the bot replication status through the UI console.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_replica(bot_id, replica_region, request_options=request_options)
        )

    def describe_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        generation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeBotResourceGenerationResponse:
        """Returns information about a request to generate a bot through natural language description, made through the
        StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale
        configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_resource_generation(
                bot_id, bot_version, locale_id, generation_id, request_options=request_options
            ),
        )

    def describe_bot_version(
        self, bot_id: str, bot_version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeBotVersionResponse:
        """Provides metadata about a version of a bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_bot_version(bot_id, bot_version, request_options=request_options)
        )

    def describe_custom_vocabulary_metadata(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeCustomVocabularyMetadataResponse:
        """Provides metadata information about a custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_custom_vocabulary_metadata(
                bot_id, bot_version, locale_id, request_options=request_options
            ),
        )

    def describe_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeIntentResponse:
        """Returns metadata about an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_intent(
                bot_id, bot_version, locale_id, intent_id, request_options=request_options
            ),
        )

    def describe_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeSlotResponse:
        """Gets metadata information about a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, request_options=request_options
            ),
        )

    def describe_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeSlotTypeResponse:
        """Gets metadata information about a slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, request_options=request_options
            ),
        )

    def generate_bot_element(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GenerateBotElementResponse:
        """Generates sample utterances for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.generate_bot_element(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def get_bots(self, *, request_options: RequestOptionsOrDict | None = None) -> GetBotsResponse:
        """Returns bot information as follows: If you provide the nameContains field, the response includes information
        for the $LATEST version of all bots whose name contains the specified string. If you don't specify the
        nameContains field, the operation returns information about the $LATEST version of all of your bots. This
        operation requires permission for the lex:GetBots action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_bots(request_options=request_options))

    def get_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetSessionResponse:
        """Returns session information for a specified bot, alias, and user. For example, you can use this operation to
        retrieve session information for a user that has left a long-running session in use. If the bot, alias, or
        session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is
        not enabled for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``RuntimeV2LexValidationException | AccessDeniedException |
                RuntimeV2LexResourceNotFoundException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.get_session(
                bot_id, bot_alias_id, locale_id, session_id, request_options=request_options
            ),
        )

    def get_session1(
        self, bot_name: str, bot_alias: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RuntimeLexGetSessionResponse:
        """Returns session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_session1(bot_name, bot_alias, user_id, request_options=request_options)
        )

    def list_aggregated_utterances(
        self,
        bot_id: str,
        *,
        body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAggregatedUtterancesResponse:
        """Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the
        utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated
        into the same line in the response. You can see both detected utterances and missed utterances. A detected
        utterance is where the bot properly recognized the utterance and activated the associated intent. A missed
        utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot
        alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the
        following conditions: The childDirected field was set to true when the bot was created. You are using slot
        obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ThrottlingException ValidationException
                ``error`` is ``ValidationException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_aggregated_utterances(bot_id, body=body, request_options=request_options)
        )

    def list_bot_alias_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotAliasReplicasResponse:
        """The action to list the replicated bots created from the source bot alias.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_alias_replicas(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    def list_bot_aliases(
        self,
        bot_id: str,
        *,
        body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotAliasesResponse:
        """Gets a list of aliases for the specified bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_bot_aliases(bot_id, body=body, request_options=request_options))

    def list_bot_analyzer_history(
        self,
        bot_id: str,
        *,
        body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotAnalyzerHistoryResponse:
        """Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by
        locale and bot version. The history includes all analysis executions regardless of their status, allowing you to
        track past analyses and their outcomes.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_analyzer_history(bot_id, body=body, request_options=request_options)
        )

    def list_bot_locales(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotLocalesResponse:
        """Gets a list of locales for the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_locales(bot_id, bot_version, body=body, request_options=request_options)
        )

    def list_bot_recommendations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotRecommendationsResponse:
        """Get a list of bot recommendations that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_recommendations(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def list_bot_replicas(
        self,
        bot_id: str,
        *,
        body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotReplicasResponse:
        """The action to list the replicated bots.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_bot_replicas(bot_id, body=body, request_options=request_options))

    def list_bot_resource_generations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotResourceGenerationsResponse:
        """Lists the generation requests made for a bot locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_resource_generations(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def list_bot_version_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotVersionReplicasResponse:
        """Contains information about all the versions replication statuses applicable for Global Resiliency.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_bot_version_replicas(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    def list_bot_versions(
        self,
        bot_id: str,
        *,
        body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotVersionsResponse:
        """Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each
        version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for
        summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always
        returns at least one version, the DRAFT version.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_bot_versions(bot_id, body=body, request_options=request_options))

    def list_bots(
        self,
        *,
        body: ListBotsRequest | ListBotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBotsResponse:
        """Gets a list of available bots.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_bots(body=body, request_options=request_options))

    def list_custom_vocabulary_items(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListCustomVocabularyItemsResponse:
        """Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_vocabulary_items(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def list_intent_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIntentMetricsResponse:
        """Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of
        AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the
        statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify
        whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time
        range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can specify only one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_intent_metrics(bot_id, body=body, request_options=request_options))

    def list_intent_paths(
        self,
        bot_id: str,
        *,
        body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIntentPathsResponse:
        """Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following
        fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results.
        intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path
        with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about
        how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to
        filter the results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_intent_paths(bot_id, body=body, request_options=request_options))

    def list_intent_stage_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIntentStageMetricsResponse:
        """Retrieves summary metrics for the stages within intents in your bot. The following fields are required:
        metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric
        to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order
        field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime –
        Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results
        in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by
        which to group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can only specify one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_intent_stage_metrics(bot_id, body=body, request_options=request_options)
        )

    def list_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListIntentsRequest | ListIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIntentsResponse:
        """Get a list of intents that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_intents(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def list_recommended_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRecommendedIntentsResponse:
        """Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents
        in the response are ordered by relevance.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_recommended_intents(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    def list_session_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListSessionAnalyticsDataResponse:
        """Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime
        fields are required. These fields define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results and the
        sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of
        results to return in a single response and the nextToken field to return the next batch of results if the
        response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_session_analytics_data(bot_id, body=body, request_options=request_options)
        )

    def list_session_metrics(
        self,
        bot_id: str,
        *,
        body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListSessionMetricsResponse:
        """Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A
        list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate,
        the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to
        specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a
        time range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_session_metrics(bot_id, body=body, request_options=request_options))

    def list_slot_types(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListSlotTypesResponse:
        """Gets a list of slot types that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_slot_types(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def list_slots(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: ListSlotsRequest | ListSlotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListSlotsResponse:
        """Gets a list of slots that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_slots(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    def list_utterance_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListUtteranceAnalyticsDataResponse:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The
        following fields are required: startDateTime and endDateTime – Define a time range for which you want to
        retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters
        field to filter the results and the sortBy field to specify the values by which to sort the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_utterance_analytics_data(bot_id, body=body, request_options=request_options)
        )

    def list_utterance_metrics(
        self,
        bot_id: str,
        *,
        body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListUtteranceMetricsResponse:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields
        are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to
        specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max
        number, and the order field to specify whether to sort the results in Ascending or Descending order.
        startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results, the
        groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals
        by which to group the results. Use the maxResults field to limit the number of results to return in a single
        response and the nextToken field to return the next batch of results if the response does not return the full
        set of re

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_utterance_metrics(bot_id, body=body, request_options=request_options)
        )

    def put_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: PutSessionRequest | PutSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutSessionResponse:
        """Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable
        your application to set the state of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            self._with_raw_response.put_session(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    def put_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RuntimeLexPutSessionResponse:
        """Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable
        your application to set the state of the bot. For more information, see Managing Sessions.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException NotAcceptableException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | NotAcceptableException | ConflictException |
                RuntimeLexDependencyFailedException | LimitExceededException | InternalFailureException |
                RuntimeLexBadGatewayException | RawError``."""
        return unwrap(
            self._with_raw_response.put_session1(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    def recognize_text(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeTextRequest | RecognizeTextRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecognizeTextResponse:
        """Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at
        runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the
        bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to
        display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more
        information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
        successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message -
        The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a
        failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout,
        and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a
        timeout, the timeout message is returned when the period times out. For more information, see Completion
        message.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            self._with_raw_response.recognize_text(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    def recognize_utterance(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecognizeUtteranceResponse:
        """Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio
        requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model
        built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you
        send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using
        gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress
        them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java
        application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and
        decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages
        are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message -
        Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if
        the message is present. Failed message - The failed message is returned if the Lambda function throws

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            self._with_raw_response.recognize_utterance(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    def search_associated_transcripts(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchAssociatedTranscriptsResponse:
        """Search for associated transcripts that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.search_associated_transcripts(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    def start_bot_analyzer(
        self,
        bot_id: str,
        *,
        body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartBotAnalyzerResponse:
        """Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential
        issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration,
        including intents, utterances, slots, and conversation flows, to provide actionable recommendations for
        optimization.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | ResourceNotFoundException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.start_bot_analyzer(bot_id, body=body, request_options=request_options))

    def start_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartBotRecommendationResponse:
        """Use this to provide your transcript data, and to start the bot recommendation process.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.start_bot_recommendation(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def start_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartBotResourceGenerationResponse:
        """Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt
        you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status
        of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve
        the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.start_bot_resource_generation(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def start_conversation(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: StartConversationRequest | StartConversationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartConversationResponse:
        """Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time.
        After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon
        Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in
        the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If
        the optional post-fulfillment response is specified, the messages are returned as follows. For more information,
        see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully
        and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed
        message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent
        state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the
        Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout,
        the timeout message is returned when the period times out. For more information, see Complet

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.start_conversation(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    def stop_bot_analyzer(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StopBotAnalyzerResponse:
        """Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no
        recommendations will be generated.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.stop_bot_analyzer(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    def stop_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StopBotRecommendationResponse:
        """Stop an already running Bot Recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.stop_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    def update_bot(
        self,
        bot_id: str,
        *,
        body: UpdateBotRequest | UpdateBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateBotResponse:
        """Updates the configuration of an existing bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.update_bot(bot_id, body=body, request_options=request_options))

    def update_bot_alias(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateBotAliasResponse:
        """Updates the configuration of an existing bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_bot_alias(bot_id, bot_alias_id, body=body, request_options=request_options)
        )

    def update_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateBotLocaleResponse:
        """Updates the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    def update_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateBotRecommendationResponse:
        """Updates an existing bot recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    def update_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: UpdateIntentRequest | UpdateIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateIntentResponse:
        """Updates the settings for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_intent(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    def update_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: UpdateSlotRequest | UpdateSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateSlotResponse:
        """Updates the settings for a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, body=body, request_options=request_options
            ),
        )

    def update_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateSlotTypeResponse:
        """Updates the configuration of an existing slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BotsWithRawResponse:
        return self._with_raw_response


class AsyncBots:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBotsWithRawResponse(client, server, auth)

    async def batch_create_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchCreateCustomVocabularyItemResponse:
        """Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.batch_create_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def batch_delete_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchDeleteCustomVocabularyItemResponse:
        """Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.batch_delete_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def batch_update_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchUpdateCustomVocabularyItemResponse:
        """Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.batch_update_custom_vocabulary_item(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def build_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildBotLocaleResponse:
        """Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple
        locales. At runtime the locale is used to choose a specific build of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.build_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def create_bot(
        self,
        *,
        body: CreateBotRequest | CreateBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateBotResponse:
        """Creates an Amazon Lex conversational bot.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.create_bot(body=body, request_options=request_options))

    async def create_bot_alias(
        self,
        bot_id: str,
        *,
        body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateBotAliasResponse:
        """Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a
        bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your
        applications use to call the Amazon Lex bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_alias(bot_id, body=body, request_options=request_options)
        )

    async def create_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateBotLocaleResponse:
        """Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in
        conversations with users in the specified language and locale. You must add a locale to a bot before you can add
        intents and slot types to the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_locale(
                bot_id, bot_version, body=body, request_options=request_options
            ),
        )

    async def create_bot_replica(
        self,
        bot_id: str,
        *,
        body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateBotReplicaResponse:
        """Action to create a replication of the source bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_replica(bot_id, body=body, request_options=request_options)
        )

    async def create_bot_version(
        self,
        bot_id: str,
        *,
        body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateBotVersionResponse:
        """Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the
        version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always
        represent the total number of versions created of the bot, not the current number of versions. If a bot version
        is deleted, that bot version number will not be reused.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_version(bot_id, body=body, request_options=request_options)
        )

    async def create_bot_version1(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsLexCreateBotVersionResponse:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_version1(name, body=body, request_options=request_options)
        )

    async def create_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateIntentRequest | CreateIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateIntentResponse:
        """Creates an intent. To define the interaction between the user and your bot, you define one or more intents.
        For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must
        provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a
        pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered.
        You specify slots for the information that you bot requests from the user. You can specify standard slot types,
        such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a
        Lambda function or configure the intent to return the intent information to your client application. If you use
        a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A
        confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A
        conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A
        follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_intent(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def create_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: CreateSlotRequest | CreateSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSlotResponse:
        """Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza
        intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances
        that Amazon Lex uses to elicit a response from the user.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_slot(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    async def create_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSlotTypeResponse:
        """Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of
        enumeration values, the values that a slot of this type can assume.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_slot_type(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def delete_bot(
        self,
        bot_id: str,
        *,
        body: DeleteBotRequest | DeleteBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteBotResponse:
        """Deletes all versions of a bot, including the Draft version. To delete a specific version, use the
        DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted.
        Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias,
        the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias,
        set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.delete_bot(bot_id, body=body, request_options=request_options))

    async def delete_bot1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use
        the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it
        is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of
        your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the
        utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the
        DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that
        refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again,
        delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for
        the lex:DeleteBot action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_bot1(name, body=body, request_options=request_options))

    async def delete_bot_alias1(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_alias1(bot_name, name, body=body, request_options=request_options)
        )

    async def delete_bot_alias2(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteBotAliasResponse:
        """Deletes the specified bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_alias2(
                bot_id, bot_alias_id, body=body, request_options=request_options
            ),
        )

    async def delete_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Permanently deletes the recommendations and analysis results for a specific bot analysis request. This
        operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be
        retrieved. The analysis request ID will still appear in the history list, but attempting to describe the
        recommendations will return a ResourceNotFoundException.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_analyzer_recommendation(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    async def delete_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteBotLocaleResponse:
        """Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the
        locale are also deleted.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def delete_bot_replica(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteBotReplicaResponse:
        """The action to delete the replicated bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_replica(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    async def delete_bot_version(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteBotVersionResponse:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_version(
                bot_id, bot_version, body=body, request_options=request_options
            ),
        )

    async def delete_bot_version1(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_version1(name, version, body=body, request_options=request_options)
        )

    async def delete_custom_vocabulary(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteCustomVocabularyResponse:
        """Removes a custom vocabulary from the specified locale in the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_vocabulary(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def delete_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: DeleteIntentRequest | DeleteIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_intent(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    async def delete_intent1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the
        intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not
        referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove
        those references first. If you get the ResourceInUseException exception, it provides an example reference that
        shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it.
        If you get the same exception when you attempt to delete the intent again, repeat until the intent has no
        references and the call to DeleteIntent is successful. This operation requires permission for the
        lex:DeleteIntent action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_intent1(name, body=body, request_options=request_options))

    async def delete_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: DeleteSessionRequest | DeleteSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteSessionResponse:
        """Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a
        conversation with a bot. When you remove a session, the entire history of the session is removed so that you can
        start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session
        time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and
        24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale
        doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``RuntimeV2LexValidationException |
                AccessDeniedException | RuntimeV2LexResourceNotFoundException | RuntimeV2LexConflictException |
                RuntimeV2LexThrottlingException | RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_session(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    async def delete_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RuntimeLexDeleteSessionResponse:
        """Removes session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_session1(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    async def delete_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: DeleteSlotRequest | DeleteSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes the specified slot from an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, body=body, request_options=request_options
            ),
        )

    async def delete_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a
        ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, body=body, request_options=request_options
            ),
        )

    async def delete_slot_type1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the
        slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not
        referenced. To delete a slot type that is referred to in one or more intents, you must remove those references
        first. If you get the ResourceInUseException exception, the exception provides an example reference that shows
        the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent
        or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the
        slot type has no references and the DeleteSlotType call is successful. This operation requires permission for
        the lex:DeleteSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_slot_type1(name, body=body, request_options=request_options))

    async def delete_utterances(
        self,
        bot_id: str,
        *,
        body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually
        delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the ListAggregatedUtterances operation are deleted after 15 days.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_utterances(bot_id, body=body, request_options=request_options)
        )

    async def delete_utterances1(
        self,
        bot_name: str,
        user_id: str,
        *,
        body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually
        delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the
        lex:DeleteUtterances action.

        Args:
            bot_name: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_utterances1(
                bot_name, user_id, body=body, request_options=request_options
            ),
        )

    async def describe_bot(
        self, bot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeBotResponse:
        """Provides metadata information about a bot.

        Args:
            bot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_bot(bot_id, request_options=request_options))

    async def describe_bot_alias(
        self, bot_id: str, bot_alias_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeBotAliasResponse:
        """Get information about a specific bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_alias(bot_id, bot_alias_id, request_options=request_options)
        )

    async def describe_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeBotAnalyzerRecommendationResponse:
        """Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available
        status before recommendations can be retrieved. Recommendations are returned with pagination support. Each
        recommendation includes the issue location, priority level, detailed description, and proposed fix.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_analyzer_recommendation(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    async def describe_bot_locale(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeBotLocaleResponse:
        """Describes the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_locale(
                bot_id, bot_version, locale_id, request_options=request_options
            ),
        )

    async def describe_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeBotRecommendationResponse:
        """Provides metadata information about a bot recommendation. This information will enable you to get a
        description on the request inputs, to download associated transcripts after processing is complete, and to
        download intents and slot-types generated by the bot recommendation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, request_options=request_options
            ),
        )

    async def describe_bot_replica(
        self, bot_id: str, replica_region: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeBotReplicaResponse:
        """Monitors the bot replication status through the UI console.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_replica(bot_id, replica_region, request_options=request_options)
        )

    async def describe_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        generation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeBotResourceGenerationResponse:
        """Returns information about a request to generate a bot through natural language description, made through the
        StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale
        configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_resource_generation(
                bot_id, bot_version, locale_id, generation_id, request_options=request_options
            ),
        )

    async def describe_bot_version(
        self, bot_id: str, bot_version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeBotVersionResponse:
        """Provides metadata about a version of a bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bot_version(bot_id, bot_version, request_options=request_options)
        )

    async def describe_custom_vocabulary_metadata(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeCustomVocabularyMetadataResponse:
        """Provides metadata information about a custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_custom_vocabulary_metadata(
                bot_id, bot_version, locale_id, request_options=request_options
            ),
        )

    async def describe_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeIntentResponse:
        """Returns metadata about an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_intent(
                bot_id, bot_version, locale_id, intent_id, request_options=request_options
            ),
        )

    async def describe_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeSlotResponse:
        """Gets metadata information about a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, request_options=request_options
            ),
        )

    async def describe_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeSlotTypeResponse:
        """Gets metadata information about a slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, request_options=request_options
            ),
        )

    async def generate_bot_element(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GenerateBotElementResponse:
        """Generates sample utterances for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.generate_bot_element(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def get_bots(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetBotsResponse:
        """Returns bot information as follows: If you provide the nameContains field, the response includes information
        for the $LATEST version of all bots whose name contains the specified string. If you don't specify the
        nameContains field, the operation returns information about the $LATEST version of all of your bots. This
        operation requires permission for the lex:GetBots action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_bots(request_options=request_options))

    async def get_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetSessionResponse:
        """Returns session information for a specified bot, alias, and user. For example, you can use this operation to
        retrieve session information for a user that has left a long-running session in use. If the bot, alias, or
        session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is
        not enabled for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``RuntimeV2LexValidationException | AccessDeniedException |
                RuntimeV2LexResourceNotFoundException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session(
                bot_id, bot_alias_id, locale_id, session_id, request_options=request_options
            ),
        )

    async def get_session1(
        self, bot_name: str, bot_alias: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RuntimeLexGetSessionResponse:
        """Returns session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_session1(bot_name, bot_alias, user_id, request_options=request_options)
        )

    async def list_aggregated_utterances(
        self,
        bot_id: str,
        *,
        body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAggregatedUtterancesResponse:
        """Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the
        utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated
        into the same line in the response. You can see both detected utterances and missed utterances. A detected
        utterance is where the bot properly recognized the utterance and activated the associated intent. A missed
        utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot
        alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the
        following conditions: The childDirected field was set to true when the bot was created. You are using slot
        obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ThrottlingException ValidationException
                ``error`` is ``ValidationException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_aggregated_utterances(bot_id, body=body, request_options=request_options)
        )

    async def list_bot_alias_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotAliasReplicasResponse:
        """The action to list the replicated bots created from the source bot alias.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_alias_replicas(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    async def list_bot_aliases(
        self,
        bot_id: str,
        *,
        body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotAliasesResponse:
        """Gets a list of aliases for the specified bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_aliases(bot_id, body=body, request_options=request_options)
        )

    async def list_bot_analyzer_history(
        self,
        bot_id: str,
        *,
        body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotAnalyzerHistoryResponse:
        """Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by
        locale and bot version. The history includes all analysis executions regardless of their status, allowing you to
        track past analyses and their outcomes.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_analyzer_history(bot_id, body=body, request_options=request_options)
        )

    async def list_bot_locales(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotLocalesResponse:
        """Gets a list of locales for the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_locales(
                bot_id, bot_version, body=body, request_options=request_options
            ),
        )

    async def list_bot_recommendations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotRecommendationsResponse:
        """Get a list of bot recommendations that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_recommendations(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def list_bot_replicas(
        self,
        bot_id: str,
        *,
        body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotReplicasResponse:
        """The action to list the replicated bots.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_replicas(bot_id, body=body, request_options=request_options)
        )

    async def list_bot_resource_generations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotResourceGenerationsResponse:
        """Lists the generation requests made for a bot locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_resource_generations(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def list_bot_version_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotVersionReplicasResponse:
        """Contains information about all the versions replication statuses applicable for Global Resiliency.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_version_replicas(
                bot_id, replica_region, body=body, request_options=request_options
            ),
        )

    async def list_bot_versions(
        self,
        bot_id: str,
        *,
        body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotVersionsResponse:
        """Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each
        version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for
        summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always
        returns at least one version, the DRAFT version.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bot_versions(bot_id, body=body, request_options=request_options)
        )

    async def list_bots(
        self,
        *,
        body: ListBotsRequest | ListBotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBotsResponse:
        """Gets a list of available bots.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.list_bots(body=body, request_options=request_options))

    async def list_custom_vocabulary_items(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListCustomVocabularyItemsResponse:
        """Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_vocabulary_items(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def list_intent_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIntentMetricsResponse:
        """Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of
        AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the
        statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify
        whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time
        range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can specify only one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_intent_metrics(bot_id, body=body, request_options=request_options)
        )

    async def list_intent_paths(
        self,
        bot_id: str,
        *,
        body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIntentPathsResponse:
        """Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following
        fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results.
        intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path
        with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about
        how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to
        filter the results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_intent_paths(bot_id, body=body, request_options=request_options)
        )

    async def list_intent_stage_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIntentStageMetricsResponse:
        """Retrieves summary metrics for the stages within intents in your bot. The following fields are required:
        metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric
        to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order
        field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime –
        Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results
        in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by
        which to group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can only specify one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_intent_stage_metrics(bot_id, body=body, request_options=request_options)
        )

    async def list_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListIntentsRequest | ListIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIntentsResponse:
        """Get a list of intents that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_intents(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def list_recommended_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListRecommendedIntentsResponse:
        """Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents
        in the response are ordered by relevance.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_recommended_intents(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    async def list_session_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListSessionAnalyticsDataResponse:
        """Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime
        fields are required. These fields define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results and the
        sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of
        results to return in a single response and the nextToken field to return the next batch of results if the
        response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_session_analytics_data(
                bot_id, body=body, request_options=request_options
            ),
        )

    async def list_session_metrics(
        self,
        bot_id: str,
        *,
        body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListSessionMetricsResponse:
        """Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A
        list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate,
        the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to
        specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a
        time range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_session_metrics(bot_id, body=body, request_options=request_options)
        )

    async def list_slot_types(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListSlotTypesResponse:
        """Gets a list of slot types that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_slot_types(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def list_slots(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: ListSlotsRequest | ListSlotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListSlotsResponse:
        """Gets a list of slots that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_slots(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    async def list_utterance_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListUtteranceAnalyticsDataResponse:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The
        following fields are required: startDateTime and endDateTime – Define a time range for which you want to
        retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters
        field to filter the results and the sortBy field to specify the values by which to sort the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_utterance_analytics_data(
                bot_id, body=body, request_options=request_options
            ),
        )

    async def list_utterance_metrics(
        self,
        bot_id: str,
        *,
        body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListUtteranceMetricsResponse:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields
        are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to
        specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max
        number, and the order field to specify whether to sort the results in Ascending or Descending order.
        startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results, the
        groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals
        by which to group the results. Use the maxResults field to limit the number of results to return in a single
        response and the nextToken field to return the next batch of results if the response does not return the full
        set of re

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_utterance_metrics(bot_id, body=body, request_options=request_options)
        )

    async def put_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: PutSessionRequest | PutSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutSessionResponse:
        """Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable
        your application to set the state of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            await self._with_raw_response.put_session(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    async def put_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RuntimeLexPutSessionResponse:
        """Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable
        your application to set the state of the bot. For more information, see Managing Sessions.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadGatewayException BadRequestException ConflictException DependencyFailedException
                InternalFailureException LimitExceededException NotAcceptableException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | NotAcceptableException | ConflictException |
                RuntimeLexDependencyFailedException | LimitExceededException | InternalFailureException |
                RuntimeLexBadGatewayException | RawError``."""
        return unwrap(
            await self._with_raw_response.put_session1(
                bot_name, bot_alias, user_id, body=body, request_options=request_options
            ),
        )

    async def recognize_text(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeTextRequest | RecognizeTextRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecognizeTextResponse:
        """Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at
        runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the
        bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to
        display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more
        information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
        successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message -
        The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a
        failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout,
        and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a
        timeout, the timeout message is returned when the period times out. For more information, see Completion
        message.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            await self._with_raw_response.recognize_text(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    async def recognize_utterance(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecognizeUtteranceResponse:
        """Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio
        requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model
        built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you
        send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using
        gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress
        them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java
        application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and
        decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages
        are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message -
        Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if
        the message is present. Failed message - The failed message is returned if the Lambda function throws

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadGatewayException ConflictException DependencyFailedException
                InternalServerException ResourceNotFoundException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexResourceNotFoundException |
                RuntimeV2LexConflictException | DependencyFailedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | BadGatewayException | RawError``."""
        return unwrap(
            await self._with_raw_response.recognize_utterance(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    async def search_associated_transcripts(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchAssociatedTranscriptsResponse:
        """Search for associated transcripts that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.search_associated_transcripts(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    async def start_bot_analyzer(
        self,
        bot_id: str,
        *,
        body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartBotAnalyzerResponse:
        """Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential
        issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration,
        including intents, utterances, slots, and conversation flows, to provide actionable recommendations for
        optimization.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | ResourceNotFoundException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_bot_analyzer(bot_id, body=body, request_options=request_options)
        )

    async def start_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartBotRecommendationResponse:
        """Use this to provide your transcript data, and to start the bot recommendation process.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_bot_recommendation(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def start_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartBotResourceGenerationResponse:
        """Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt
        you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status
        of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve
        the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_bot_resource_generation(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def start_conversation(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: StartConversationRequest | StartConversationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartConversationResponse:
        """Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time.
        After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon
        Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in
        the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If
        the optional post-fulfillment response is specified, the messages are returned as follows. For more information,
        see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully
        and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed
        message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent
        state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the
        Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout,
        the timeout message is returned when the period times out. For more information, see Complet

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``RuntimeV2LexValidationException | AccessDeniedException | RuntimeV2LexThrottlingException |
                RuntimeV2LexInternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_conversation(
                bot_id, bot_alias_id, locale_id, session_id, body=body, request_options=request_options
            ),
        )

    async def stop_bot_analyzer(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StopBotAnalyzerResponse:
        """Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no
        recommendations will be generated.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.stop_bot_analyzer(
                bot_id, bot_analyzer_request_id, body=body, request_options=request_options
            ),
        )

    async def stop_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StopBotRecommendationResponse:
        """Stop an already running Bot Recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.stop_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    async def update_bot(
        self,
        bot_id: str,
        *,
        body: UpdateBotRequest | UpdateBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateBotResponse:
        """Updates the configuration of an existing bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.update_bot(bot_id, body=body, request_options=request_options))

    async def update_bot_alias(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateBotAliasResponse:
        """Updates the configuration of an existing bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bot_alias(
                bot_id, bot_alias_id, body=body, request_options=request_options
            ),
        )

    async def update_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateBotLocaleResponse:
        """Updates the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bot_locale(
                bot_id, bot_version, locale_id, body=body, request_options=request_options
            ),
        )

    async def update_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateBotRecommendationResponse:
        """Updates an existing bot recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bot_recommendation(
                bot_id, bot_version, locale_id, bot_recommendation_id, body=body, request_options=request_options
            ),
        )

    async def update_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: UpdateIntentRequest | UpdateIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateIntentResponse:
        """Updates the settings for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_intent(
                bot_id, bot_version, locale_id, intent_id, body=body, request_options=request_options
            ),
        )

    async def update_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: UpdateSlotRequest | UpdateSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateSlotResponse:
        """Updates the settings for a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_slot(
                bot_id, bot_version, locale_id, intent_id, slot_id, body=body, request_options=request_options
            ),
        )

    async def update_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateSlotTypeResponse:
        """Updates the configuration of an existing slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_slot_type(
                bot_id, bot_version, locale_id, slot_type_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBotsWithRawResponse:
        return self._with_raw_response


class BotsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_create_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchCreateCustomVocabularyItemResponse, BatchCreateCustomVocabularyItemErrorBody]:
        """Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[BatchCreateCustomVocabularyItemResponse],
            error_mapper=batch_create_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    def batch_delete_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchDeleteCustomVocabularyItemResponse, BatchDeleteCustomVocabularyItemErrorBody]:
        """Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[BatchDeleteCustomVocabularyItemResponse],
            error_mapper=batch_delete_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    def batch_update_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchUpdateCustomVocabularyItemResponse, BatchUpdateCustomVocabularyItemErrorBody]:
        """Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[BatchUpdateCustomVocabularyItemResponse],
            error_mapper=batch_update_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    def build_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildBotLocaleResponse, BuildBotLocaleErrorBody]:
        """Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple
        locales. At runtime the locale is used to choose a specific build of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildBotLocaleRequest | BuildBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[BuildBotLocaleResponse],
            error_mapper=build_bot_locale_error_mapper,
            request_options=request_options,
        )

    def create_bot(
        self,
        *,
        body: CreateBotRequest | CreateBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotResponse, CreateBotErrorBody]:
        """Creates an Amazon Lex conversational bot.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotRequest | CreateBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateBotResponse],
            error_mapper=create_bot_error_mapper,
            request_options=request_options,
        )

    def create_bot_alias(
        self,
        bot_id: str,
        *,
        body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotAliasResponse, CreateBotAliasErrorBody]:
        """Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a
        bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your
        applications use to call the Amazon Lex bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botaliases"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotAliasRequest | CreateBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateBotAliasResponse],
            error_mapper=create_bot_alias_error_mapper,
            request_options=request_options,
        )

    def create_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotLocaleResponse, CreateBotLocaleErrorBody]:
        """Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in
        conversations with users in the specified language and locale. You must add a locale to a bot before you can add
        intents and slot types to the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotLocaleRequest | CreateBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateBotLocaleResponse],
            error_mapper=create_bot_locale_error_mapper,
            request_options=request_options,
        )

    def create_bot_replica(
        self,
        bot_id: str,
        *,
        body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotReplicaResponse, CreateBotReplicaErrorBody]:
        """Action to create a replication of the source bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/replicas"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotReplicaRequest | CreateBotReplicaRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateBotReplicaResponse],
            error_mapper=create_bot_replica_error_mapper,
            request_options=request_options,
        )

    def create_bot_version(
        self,
        bot_id: str,
        *,
        body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotVersionResponse, CreateBotVersionErrorBody]:
        """Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the
        version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always
        represent the total number of versions created of the bot, not the current number of versions. If a bot version
        is deleted, that bot version number will not be reused.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botversions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotVersionRequest | CreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateBotVersionResponse],
            error_mapper=create_bot_version_error_mapper,
            request_options=request_options,
        )

    def create_bot_version1(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsLexCreateBotVersionResponse, CreateBotVersion1ErrorBody]:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ModelsLexCreateBotVersionResponse],
            error_mapper=create_bot_version1_error_mapper,
            request_options=request_options,
        )

    def create_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateIntentRequest | CreateIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateIntentResponse, CreateIntentErrorBody]:
        """Creates an intent. To define the interaction between the user and your bot, you define one or more intents.
        For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must
        provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a
        pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered.
        You specify slots for the information that you bot requests from the user. You can specify standard slot types,
        such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a
        Lambda function or configure the intent to return the intent information to your client application. If you use
        a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A
        confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A
        conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A
        follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIntentRequest | CreateIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateIntentResponse],
            error_mapper=create_intent_error_mapper,
            request_options=request_options,
        )

    def create_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: CreateSlotRequest | CreateSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotResponse, CreateSlotErrorBody]:
        """Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza
        intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances
        that Amazon Lex uses to elicit a response from the user.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotRequest | CreateSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateSlotResponse],
            error_mapper=create_slot_error_mapper,
            request_options=request_options,
        )

    def create_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotTypeResponse, CreateSlotTypeErrorBody]:
        """Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of
        enumeration values, the values that a slot of this type can assume.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotTypeRequest | CreateSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateSlotTypeResponse],
            error_mapper=create_slot_type_error_mapper,
            request_options=request_options,
        )

    def delete_bot(
        self,
        bot_id: str,
        *,
        body: DeleteBotRequest | DeleteBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotResponse, DeleteBotErrorBody]:
        """Deletes all versions of a bot, including the Draft version. To delete a specific version, use the
        DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted.
        Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias,
        the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias,
        set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotRequest | DeleteBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteBotResponse],
            error_mapper=delete_bot_error_mapper,
            request_options=request_options,
        )

    def delete_bot1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBot1ErrorBody]:
        """Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use
        the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it
        is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of
        your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the
        utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the
        DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that
        refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again,
        delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for
        the lex:DeleteBot action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot1_error_mapper,
            request_options=request_options,
        )

    def delete_bot_alias1(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotAlias1ErrorBody]:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot_alias1_error_mapper,
            request_options=request_options,
        )

    def delete_bot_alias2(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotAliasResponse, DeleteBotAlias2ErrorBody]:
        """Deletes the specified bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotAliasRequest | DeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteBotAliasResponse],
            error_mapper=delete_bot_alias2_error_mapper,
            request_options=request_options,
        )

    def delete_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteBotAnalyzerRecommendationErrorBody]:
        """Permanently deletes the recommendations and analysis results for a specific bot analysis request. This
        operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be
        retrieved. The analysis request ID will still appear in the history list, but attempting to describe the
        recommendations will return a ResourceNotFoundException.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_bot_analyzer_recommendation_error_mapper,
            request_options=request_options,
        )

    def delete_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotLocaleResponse, DeleteBotLocaleErrorBody]:
        """Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the
        locale are also deleted.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteBotLocaleResponse],
            error_mapper=delete_bot_locale_error_mapper,
            request_options=request_options,
        )

    def delete_bot_replica(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotReplicaResponse, DeleteBotReplicaErrorBody]:
        """The action to delete the replicated bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteBotReplicaResponse],
            error_mapper=delete_bot_replica_error_mapper,
            request_options=request_options,
        )

    def delete_bot_version(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotVersionResponse, DeleteBotVersionErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotVersionRequest | DeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteBotVersionResponse],
            error_mapper=delete_bot_version_error_mapper,
            request_options=request_options,
        )

    def delete_bot_version1(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotVersion1ErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot_version1_error_mapper,
            request_options=request_options,
        )

    def delete_custom_vocabulary(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteCustomVocabularyResponse, DeleteCustomVocabularyErrorBody]:
        """Removes a custom vocabulary from the specified locale in the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteCustomVocabularyResponse],
            error_mapper=delete_custom_vocabulary_error_mapper,
            request_options=request_options,
        )

    def delete_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: DeleteIntentRequest | DeleteIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntentErrorBody]:
        """Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteIntentRequest | DeleteIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_intent_error_mapper,
            request_options=request_options,
        )

    def delete_intent1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntent1ErrorBody]:
        """Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the
        intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not
        referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove
        those references first. If you get the ResourceInUseException exception, it provides an example reference that
        shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it.
        If you get the same exception when you attempt to delete the intent again, repeat until the intent has no
        references and the call to DeleteIntent is successful. This operation requires permission for the
        lex:DeleteIntent action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/intents/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_intent1_error_mapper,
            request_options=request_options,
        )

    def delete_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: DeleteSessionRequest | DeleteSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSessionResponse, DeleteSessionErrorBody]:
        """Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a
        conversation with a bot. When you remove a session, the entire history of the session is removed so that you can
        start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session
        time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and
        24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale
        doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSessionRequest | DeleteSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteSessionResponse],
            error_mapper=delete_session_error_mapper,
            request_options=request_options,
        )

    def delete_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RuntimeLexDeleteSessionResponse, DeleteSession1ErrorBody]:
        """Removes session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[RuntimeLexDeleteSessionResponse],
            error_mapper=delete_session1_error_mapper,
            request_options=request_options,
        )

    def delete_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: DeleteSlotRequest | DeleteSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotErrorBody]:
        """Deletes the specified slot from an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotRequest | DeleteSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_slot_error_mapper,
            request_options=request_options,
        )

    def delete_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeErrorBody]:
        """Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a
        ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_slot_type_error_mapper,
            request_options=request_options,
        )

    def delete_slot_type1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotType1ErrorBody]:
        """Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the
        slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not
        referenced. To delete a slot type that is referred to in one or more intents, you must remove those references
        first. If you get the ResourceInUseException exception, the exception provides an example reference that shows
        the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent
        or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the
        slot type has no references and the DeleteSlotType call is successful. This operation requires permission for
        the lex:DeleteSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/slottypes/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_slot_type1_error_mapper,
            request_options=request_options,
        )

    def delete_utterances(
        self,
        bot_id: str,
        *,
        body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteUtterancesErrorBody]:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually
        delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the ListAggregatedUtterances operation are deleted after 15 days.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/utterances"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteUtterancesRequest | DeleteUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_utterances_error_mapper,
            request_options=request_options,
        )

    def delete_utterances1(
        self,
        bot_name: str,
        user_id: str,
        *,
        body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteUtterances1ErrorBody]:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually
        delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the
        lex:DeleteUtterances action.

        Args:
            bot_name: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botName}/utterances/{userId}"
            ),
            path_params=[param[str]("botName", bot_name), param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_utterances1_error_mapper,
            request_options=request_options,
        )

    def describe_bot(
        self, bot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotResponse, DescribeBotErrorBody]:
        """Provides metadata information about a bot.

        Args:
            bot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotResponse],
            error_mapper=describe_bot_error_mapper,
            request_options=request_options,
        )

    def describe_bot_alias(
        self, bot_id: str, bot_alias_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotAliasResponse, DescribeBotAliasErrorBody]:
        """Get information about a specific bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotAliasResponse],
            error_mapper=describe_bot_alias_error_mapper,
            request_options=request_options,
        )

    def describe_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotAnalyzerRecommendationResponse, DescribeBotAnalyzerRecommendationErrorBody]:
        """Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available
        status before recommendations can be retrieved. Recommendations are returned with pagination support. Each
        recommendation includes the issue location, priority level, detailed description, and proposed fix.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotAnalyzerRecommendationResponse],
            error_mapper=describe_bot_analyzer_recommendation_error_mapper,
            request_options=request_options,
        )

    def describe_bot_locale(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotLocaleResponse, DescribeBotLocaleErrorBody]:
        """Describes the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotLocaleResponse],
            error_mapper=describe_bot_locale_error_mapper,
            request_options=request_options,
        )

    def describe_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotRecommendationResponse, DescribeBotRecommendationErrorBody]:
        """Provides metadata information about a bot recommendation. This information will enable you to get a
        description on the request inputs, to download associated transcripts after processing is complete, and to
        download intents and slot-types generated by the bot recommendation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotRecommendationResponse],
            error_mapper=describe_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    def describe_bot_replica(
        self, bot_id: str, replica_region: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotReplicaResponse, DescribeBotReplicaErrorBody]:
        """Monitors the bot replication status through the UI console.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotReplicaResponse],
            error_mapper=describe_bot_replica_error_mapper,
            request_options=request_options,
        )

    def describe_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        generation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotResourceGenerationResponse, DescribeBotResourceGenerationErrorBody]:
        """Returns information about a request to generate a bot through natural language description, made through the
        StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale
        configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("generationId", generation_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotResourceGenerationResponse],
            error_mapper=describe_bot_resource_generation_error_mapper,
            request_options=request_options,
        )

    def describe_bot_version(
        self, bot_id: str, bot_version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotVersionResponse, DescribeBotVersionErrorBody]:
        """Provides metadata about a version of a bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeBotVersionResponse],
            error_mapper=describe_bot_version_error_mapper,
            request_options=request_options,
        )

    def describe_custom_vocabulary_metadata(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeCustomVocabularyMetadataResponse, DescribeCustomVocabularyMetadataErrorBody]:
        """Provides metadata information about a custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeCustomVocabularyMetadataResponse],
            error_mapper=describe_custom_vocabulary_metadata_error_mapper,
            request_options=request_options,
        )

    def describe_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeIntentResponse, DescribeIntentErrorBody]:
        """Returns metadata about an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeIntentResponse],
            error_mapper=describe_intent_error_mapper,
            request_options=request_options,
        )

    def describe_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeSlotResponse, DescribeSlotErrorBody]:
        """Gets metadata information about a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeSlotResponse],
            error_mapper=describe_slot_error_mapper,
            request_options=request_options,
        )

    def describe_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeSlotTypeResponse, DescribeSlotTypeErrorBody]:
        """Gets metadata information about a slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeSlotTypeResponse],
            error_mapper=describe_slot_type_error_mapper,
            request_options=request_options,
        )

    def generate_bot_element(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GenerateBotElementResponse, GenerateBotElementErrorBody]:
        """Generates sample utterances for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GenerateBotElementRequest | GenerateBotElementRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GenerateBotElementResponse],
            error_mapper=generate_bot_element_error_mapper,
            request_options=request_options,
        )

    def get_bots(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotsResponse, GetBotsErrorBody]:
        """Returns bot information as follows: If you provide the nameContains field, the response includes information
        for the $LATEST version of all bots whose name contains the specified string. If you don't specify the
        nameContains field, the operation returns information about the $LATEST version of all of your bots. This
        operation requires permission for the lex:GetBots action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotsResponse],
            error_mapper=get_bots_error_mapper,
            request_options=request_options,
        )

    def get_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSessionResponse, GetSessionErrorBody]:
        """Returns session information for a specified bot, alias, and user. For example, you can use this operation to
        retrieve session information for a user that has left a long-running session in use. If the bot, alias, or
        session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is
        not enabled for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSessionResponse],
            error_mapper=get_session_error_mapper,
            request_options=request_options,
        )

    def get_session1(
        self, bot_name: str, bot_alias: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RuntimeLexGetSessionResponse, GetSession1ErrorBody]:
        """Returns session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[RuntimeLexGetSessionResponse],
            error_mapper=get_session1_error_mapper,
            request_options=request_options,
        )

    def list_aggregated_utterances(
        self,
        bot_id: str,
        *,
        body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAggregatedUtterancesResponse, ListAggregatedUtterancesErrorBody]:
        """Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the
        utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated
        into the same line in the response. You can see both detected utterances and missed utterances. A detected
        utterance is where the bot properly recognized the utterance and activated the associated intent. A missed
        utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot
        alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the
        following conditions: The childDirected field was set to true when the bot was created. You are using slot
        obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/aggregatedutterances"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListAggregatedUtterancesResponse],
            error_mapper=list_aggregated_utterances_error_mapper,
            request_options=request_options,
        )

    def list_bot_alias_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAliasReplicasResponse, ListBotAliasReplicasErrorBody]:
        """The action to list the replicated bots created from the source bot alias.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}/botaliases"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotAliasReplicasResponse],
            error_mapper=list_bot_alias_replicas_error_mapper,
            request_options=request_options,
        )

    def list_bot_aliases(
        self,
        bot_id: str,
        *,
        body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAliasesResponse, ListBotAliasesErrorBody]:
        """Gets a list of aliases for the specified bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botaliases"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAliasesRequest | ListBotAliasesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotAliasesResponse],
            error_mapper=list_bot_aliases_error_mapper,
            request_options=request_options,
        )

    def list_bot_analyzer_history(
        self,
        bot_id: str,
        *,
        body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAnalyzerHistoryResponse, ListBotAnalyzerHistoryErrorBody]:
        """Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by
        locale and bot version. The history includes all analysis executions regardless of their status, allowing you to
        track past analyses and their outcomes.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/history"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotAnalyzerHistoryResponse],
            error_mapper=list_bot_analyzer_history_error_mapper,
            request_options=request_options,
        )

    def list_bot_locales(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotLocalesResponse, ListBotLocalesErrorBody]:
        """Gets a list of locales for the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotLocalesRequest | ListBotLocalesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotLocalesResponse],
            error_mapper=list_bot_locales_error_mapper,
            request_options=request_options,
        )

    def list_bot_recommendations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotRecommendationsResponse, ListBotRecommendationsErrorBody]:
        """Get a list of bot recommendations that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotRecommendationsResponse],
            error_mapper=list_bot_recommendations_error_mapper,
            request_options=request_options,
        )

    def list_bot_replicas(
        self,
        bot_id: str,
        *,
        body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotReplicasResponse, ListBotReplicasErrorBody]:
        """The action to list the replicated bots.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/replicas"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotReplicasRequest | ListBotReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotReplicasResponse],
            error_mapper=list_bot_replicas_error_mapper,
            request_options=request_options,
        )

    def list_bot_resource_generations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotResourceGenerationsResponse, ListBotResourceGenerationsErrorBody]:
        """Lists the generation requests made for a bot locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotResourceGenerationsResponse],
            error_mapper=list_bot_resource_generations_error_mapper,
            request_options=request_options,
        )

    def list_bot_version_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotVersionReplicasResponse, ListBotVersionReplicasErrorBody]:
        """Contains information about all the versions replication statuses applicable for Global Resiliency.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}/botversions"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotVersionReplicasResponse],
            error_mapper=list_bot_version_replicas_error_mapper,
            request_options=request_options,
        )

    def list_bot_versions(
        self,
        bot_id: str,
        *,
        body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotVersionsResponse, ListBotVersionsErrorBody]:
        """Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each
        version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for
        summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always
        returns at least one version, the DRAFT version.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botversions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotVersionsRequest | ListBotVersionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotVersionsResponse],
            error_mapper=list_bot_versions_error_mapper,
            request_options=request_options,
        )

    def list_bots(
        self,
        *,
        body: ListBotsRequest | ListBotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotsResponse, ListBotsErrorBody]:
        """Gets a list of available bots.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotsRequest | ListBotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBotsResponse],
            error_mapper=list_bots_error_mapper,
            request_options=request_options,
        )

    def list_custom_vocabulary_items(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCustomVocabularyItemsResponse, ListCustomVocabularyItemsErrorBody]:
        """Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListCustomVocabularyItemsResponse],
            error_mapper=list_custom_vocabulary_items_error_mapper,
            request_options=request_options,
        )

    def list_intent_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentMetricsResponse, ListIntentMetricsErrorBody]:
        """Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of
        AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the
        statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify
        whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time
        range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can specify only one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentmetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentMetricsRequest | ListIntentMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListIntentMetricsResponse],
            error_mapper=list_intent_metrics_error_mapper,
            request_options=request_options,
        )

    def list_intent_paths(
        self,
        bot_id: str,
        *,
        body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentPathsResponse, ListIntentPathsErrorBody]:
        """Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following
        fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results.
        intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path
        with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about
        how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to
        filter the results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentpaths"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentPathsRequest | ListIntentPathsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListIntentPathsResponse],
            error_mapper=list_intent_paths_error_mapper,
            request_options=request_options,
        )

    def list_intent_stage_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentStageMetricsResponse, ListIntentStageMetricsErrorBody]:
        """Retrieves summary metrics for the stages within intents in your bot. The following fields are required:
        metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric
        to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order
        field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime –
        Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results
        in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by
        which to group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can only specify one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentstagemetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListIntentStageMetricsResponse],
            error_mapper=list_intent_stage_metrics_error_mapper,
            request_options=request_options,
        )

    def list_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListIntentsRequest | ListIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentsResponse, ListIntentsErrorBody]:
        """Get a list of intents that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentsRequest | ListIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListIntentsResponse],
            error_mapper=list_intents_error_mapper,
            request_options=request_options,
        )

    def list_recommended_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecommendedIntentsResponse, ListRecommendedIntentsErrorBody]:
        """Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents
        in the response are ordered by relevance.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListRecommendedIntentsResponse],
            error_mapper=list_recommended_intents_error_mapper,
            request_options=request_options,
        )

    def list_session_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSessionAnalyticsDataResponse, ListSessionAnalyticsDataErrorBody]:
        """Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime
        fields are required. These fields define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results and the
        sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of
        results to return in a single response and the nextToken field to return the next batch of results if the
        response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/analytics/sessions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListSessionAnalyticsDataResponse],
            error_mapper=list_session_analytics_data_error_mapper,
            request_options=request_options,
        )

    def list_session_metrics(
        self,
        bot_id: str,
        *,
        body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSessionMetricsResponse, ListSessionMetricsErrorBody]:
        """Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A
        list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate,
        the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to
        specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a
        time range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/sessionmetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSessionMetricsRequest | ListSessionMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListSessionMetricsResponse],
            error_mapper=list_session_metrics_error_mapper,
            request_options=request_options,
        )

    def list_slot_types(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSlotTypesResponse, ListSlotTypesErrorBody]:
        """Gets a list of slot types that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSlotTypesRequest | ListSlotTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListSlotTypesResponse],
            error_mapper=list_slot_types_error_mapper,
            request_options=request_options,
        )

    def list_slots(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: ListSlotsRequest | ListSlotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSlotsResponse, ListSlotsErrorBody]:
        """Gets a list of slots that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSlotsRequest | ListSlotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListSlotsResponse],
            error_mapper=list_slots_error_mapper,
            request_options=request_options,
        )

    def list_utterance_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListUtteranceAnalyticsDataResponse, ListUtteranceAnalyticsDataErrorBody]:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The
        following fields are required: startDateTime and endDateTime – Define a time range for which you want to
        retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters
        field to filter the results and the sortBy field to specify the values by which to sort the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/utterances"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListUtteranceAnalyticsDataResponse],
            error_mapper=list_utterance_analytics_data_error_mapper,
            request_options=request_options,
        )

    def list_utterance_metrics(
        self,
        bot_id: str,
        *,
        body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListUtteranceMetricsResponse, ListUtteranceMetricsErrorBody]:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields
        are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to
        specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max
        number, and the order field to specify whether to sort the results in Ascending or Descending order.
        startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results, the
        groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals
        by which to group the results. Use the maxResults field to limit the number of results to return in a single
        response and the nextToken field to return the next batch of results if the response does not return the full
        set of re

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/utterancemetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListUtteranceMetricsResponse],
            error_mapper=list_utterance_metrics_error_mapper,
            request_options=request_options,
        )

    def put_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: PutSessionRequest | PutSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSessionResponse, PutSessionErrorBody]:
        """Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable
        your application to set the state of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutSessionRequest | PutSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutSessionResponse],
            error_mapper=put_session_error_mapper,
            request_options=request_options,
        )

    def put_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RuntimeLexPutSessionResponse, PutSession1ErrorBody]:
        """Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable
        your application to set the state of the bot. For more information, see Managing Sessions.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[RuntimeLexPutSessionResponse],
            error_mapper=put_session1_error_mapper,
            request_options=request_options,
        )

    def recognize_text(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeTextRequest | RecognizeTextRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecognizeTextResponse, RecognizeTextErrorBody]:
        """Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at
        runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the
        bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to
        display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more
        information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
        successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message -
        The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a
        failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout,
        and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a
        timeout, the timeout message is returned when the period times out. For more information, see Completion
        message.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeTextRequest | RecognizeTextRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[RecognizeTextResponse],
            error_mapper=recognize_text_error_mapper,
            request_options=request_options,
        )

    def recognize_utterance(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecognizeUtteranceResponse, RecognizeUtteranceErrorBody]:
        """Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio
        requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model
        built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you
        send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using
        gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress
        them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java
        application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and
        decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages
        are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message -
        Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if
        the message is present. Failed message - The failed message is returned if the Lambda function throws

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[RecognizeUtteranceResponse],
            error_mapper=recognize_utterance_error_mapper,
            request_options=request_options,
        )

    def search_associated_transcripts(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchAssociatedTranscriptsResponse, SearchAssociatedTranscriptsErrorBody]:
        """Search for associated transcripts that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[SearchAssociatedTranscriptsResponse],
            error_mapper=search_associated_transcripts_error_mapper,
            request_options=request_options,
        )

    def start_bot_analyzer(
        self,
        bot_id: str,
        *,
        body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotAnalyzerResponse, StartBotAnalyzerErrorBody]:
        """Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential
        issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration,
        including intents, utterances, slots, and conversation flows, to provide actionable recommendations for
        optimization.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botanalyzer"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartBotAnalyzerResponse],
            error_mapper=start_bot_analyzer_error_mapper,
            request_options=request_options,
        )

    def start_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotRecommendationResponse, StartBotRecommendationErrorBody]:
        """Use this to provide your transcript data, and to start the bot recommendation process.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotRecommendationRequest | StartBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartBotRecommendationResponse],
            error_mapper=start_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    def start_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotResourceGenerationResponse, StartBotResourceGenerationErrorBody]:
        """Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt
        you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status
        of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve
        the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartBotResourceGenerationResponse],
            error_mapper=start_bot_resource_generation_error_mapper,
            request_options=request_options,
        )

    def start_conversation(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: StartConversationRequest | StartConversationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartConversationResponse, StartConversationErrorBody]:
        """Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time.
        After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon
        Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in
        the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If
        the optional post-fulfillment response is specified, the messages are returned as follows. For more information,
        see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully
        and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed
        message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent
        state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the
        Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout,
        the timeout message is returned when the period times out. For more information, see Complet

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartConversationRequest | StartConversationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartConversationResponse],
            error_mapper=start_conversation_error_mapper,
            request_options=request_options,
        )

    def stop_bot_analyzer(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StopBotAnalyzerResponse, StopBotAnalyzerErrorBody]:
        """Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no
        recommendations will be generated.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StopBotAnalyzerResponse],
            error_mapper=stop_bot_analyzer_error_mapper,
            request_options=request_options,
        )

    def stop_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StopBotRecommendationResponse, StopBotRecommendationErrorBody]:
        """Stop an already running Bot Recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopBotRecommendationRequest | StopBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StopBotRecommendationResponse],
            error_mapper=stop_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    def update_bot(
        self,
        bot_id: str,
        *,
        body: UpdateBotRequest | UpdateBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotResponse, UpdateBotErrorBody]:
        """Updates the configuration of an existing bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotRequest | UpdateBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateBotResponse],
            error_mapper=update_bot_error_mapper,
            request_options=request_options,
        )

    def update_bot_alias(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotAliasResponse, UpdateBotAliasErrorBody]:
        """Updates the configuration of an existing bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotAliasRequest | UpdateBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateBotAliasResponse],
            error_mapper=update_bot_alias_error_mapper,
            request_options=request_options,
        )

    def update_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotLocaleResponse, UpdateBotLocaleErrorBody]:
        """Updates the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateBotLocaleResponse],
            error_mapper=update_bot_locale_error_mapper,
            request_options=request_options,
        )

    def update_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotRecommendationResponse, UpdateBotRecommendationErrorBody]:
        """Updates an existing bot recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateBotRecommendationResponse],
            error_mapper=update_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    def update_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: UpdateIntentRequest | UpdateIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateIntentResponse, UpdateIntentErrorBody]:
        """Updates the settings for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIntentRequest | UpdateIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateIntentResponse],
            error_mapper=update_intent_error_mapper,
            request_options=request_options,
        )

    def update_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: UpdateSlotRequest | UpdateSlotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSlotResponse, UpdateSlotErrorBody]:
        """Updates the settings for a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSlotRequest | UpdateSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateSlotResponse],
            error_mapper=update_slot_error_mapper,
            request_options=request_options,
        )

    def update_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSlotTypeResponse, UpdateSlotTypeErrorBody]:
        """Updates the configuration of an existing slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateSlotTypeResponse],
            error_mapper=update_slot_type_error_mapper,
            request_options=request_options,
        )


class AsyncBotsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_create_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchCreateCustomVocabularyItemResponse, BatchCreateCustomVocabularyItemErrorBody]:
        """Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[BatchCreateCustomVocabularyItemResponse],
            error_mapper=batch_create_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    async def batch_delete_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchDeleteCustomVocabularyItemResponse, BatchDeleteCustomVocabularyItemErrorBody]:
        """Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[BatchDeleteCustomVocabularyItemResponse],
            error_mapper=batch_delete_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    async def batch_update_custom_vocabulary_item(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchUpdateCustomVocabularyItemResponse, BatchUpdateCustomVocabularyItemErrorBody]:
        """Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[BatchUpdateCustomVocabularyItemResponse],
            error_mapper=batch_update_custom_vocabulary_item_error_mapper,
            request_options=request_options,
        )

    async def build_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildBotLocaleResponse, BuildBotLocaleErrorBody]:
        """Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple
        locales. At runtime the locale is used to choose a specific build of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildBotLocaleRequest | BuildBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[BuildBotLocaleResponse],
            error_mapper=build_bot_locale_error_mapper,
            request_options=request_options,
        )

    async def create_bot(
        self,
        *,
        body: CreateBotRequest | CreateBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotResponse, CreateBotErrorBody]:
        """Creates an Amazon Lex conversational bot.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotRequest | CreateBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateBotResponse],
            error_mapper=create_bot_error_mapper,
            request_options=request_options,
        )

    async def create_bot_alias(
        self,
        bot_id: str,
        *,
        body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotAliasResponse, CreateBotAliasErrorBody]:
        """Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a
        bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your
        applications use to call the Amazon Lex bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botaliases"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotAliasRequest | CreateBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateBotAliasResponse],
            error_mapper=create_bot_alias_error_mapper,
            request_options=request_options,
        )

    async def create_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotLocaleResponse, CreateBotLocaleErrorBody]:
        """Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in
        conversations with users in the specified language and locale. You must add a locale to a bot before you can add
        intents and slot types to the bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotLocaleRequest | CreateBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateBotLocaleResponse],
            error_mapper=create_bot_locale_error_mapper,
            request_options=request_options,
        )

    async def create_bot_replica(
        self,
        bot_id: str,
        *,
        body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotReplicaResponse, CreateBotReplicaErrorBody]:
        """Action to create a replication of the source bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/replicas"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotReplicaRequest | CreateBotReplicaRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateBotReplicaResponse],
            error_mapper=create_bot_replica_error_mapper,
            request_options=request_options,
        )

    async def create_bot_version(
        self,
        bot_id: str,
        *,
        body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateBotVersionResponse, CreateBotVersionErrorBody]:
        """Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the
        version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always
        represent the total number of versions created of the bot, not the current number of versions. If a bot version
        is deleted, that bot version number will not be reused.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botversions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBotVersionRequest | CreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateBotVersionResponse],
            error_mapper=create_bot_version_error_mapper,
            request_options=request_options,
        )

    async def create_bot_version1(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsLexCreateBotVersionResponse, CreateBotVersion1ErrorBody]:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ModelsLexCreateBotVersionResponse],
            error_mapper=create_bot_version1_error_mapper,
            request_options=request_options,
        )

    async def create_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateIntentRequest | CreateIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateIntentResponse, CreateIntentErrorBody]:
        """Creates an intent. To define the interaction between the user and your bot, you define one or more intents.
        For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must
        provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a
        pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered.
        You specify slots for the information that you bot requests from the user. You can specify standard slot types,
        such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a
        Lambda function or configure the intent to return the intent information to your client application. If you use
        a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A
        confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A
        conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A
        follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIntentRequest | CreateIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateIntentResponse],
            error_mapper=create_intent_error_mapper,
            request_options=request_options,
        )

    async def create_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: CreateSlotRequest | CreateSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotResponse, CreateSlotErrorBody]:
        """Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza
        intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances
        that Amazon Lex uses to elicit a response from the user.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotRequest | CreateSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateSlotResponse],
            error_mapper=create_slot_error_mapper,
            request_options=request_options,
        )

    async def create_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotTypeResponse, CreateSlotTypeErrorBody]:
        """Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of
        enumeration values, the values that a slot of this type can assume.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotTypeRequest | CreateSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateSlotTypeResponse],
            error_mapper=create_slot_type_error_mapper,
            request_options=request_options,
        )

    async def delete_bot(
        self,
        bot_id: str,
        *,
        body: DeleteBotRequest | DeleteBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotResponse, DeleteBotErrorBody]:
        """Deletes all versions of a bot, including the Draft version. To delete a specific version, use the
        DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted.
        Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias,
        the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias,
        set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotRequest | DeleteBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteBotResponse],
            error_mapper=delete_bot_error_mapper,
            request_options=request_options,
        )

    async def delete_bot1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBot1ErrorBody]:
        """Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use
        the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it
        is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of
        your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the
        utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the
        DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that
        refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again,
        delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for
        the lex:DeleteBot action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot1_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_alias1(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotAlias1ErrorBody]:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot_alias1_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_alias2(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotAliasResponse, DeleteBotAlias2ErrorBody]:
        """Deletes the specified bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotAliasRequest | DeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteBotAliasResponse],
            error_mapper=delete_bot_alias2_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteBotAnalyzerRecommendationErrorBody]:
        """Permanently deletes the recommendations and analysis results for a specific bot analysis request. This
        operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be
        retrieved. The analysis request ID will still appear in the history list, but attempting to describe the
        recommendations will return a ResourceNotFoundException.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_bot_analyzer_recommendation_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotLocaleResponse, DeleteBotLocaleErrorBody]:
        """Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the
        locale are also deleted.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteBotLocaleResponse],
            error_mapper=delete_bot_locale_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_replica(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotReplicaResponse, DeleteBotReplicaErrorBody]:
        """The action to delete the replicated bot in the secondary region.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteBotReplicaResponse],
            error_mapper=delete_bot_replica_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_version(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteBotVersionResponse, DeleteBotVersionErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotVersionRequest | DeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteBotVersionResponse],
            error_mapper=delete_bot_version_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_version1(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotVersion1ErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot_version1_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_vocabulary(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteCustomVocabularyResponse, DeleteCustomVocabularyErrorBody]:
        """Removes a custom vocabulary from the specified locale in the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteCustomVocabularyResponse],
            error_mapper=delete_custom_vocabulary_error_mapper,
            request_options=request_options,
        )

    async def delete_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: DeleteIntentRequest | DeleteIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntentErrorBody]:
        """Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteIntentRequest | DeleteIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_intent_error_mapper,
            request_options=request_options,
        )

    async def delete_intent1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntent1ErrorBody]:
        """Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the
        intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not
        referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove
        those references first. If you get the ResourceInUseException exception, it provides an example reference that
        shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it.
        If you get the same exception when you attempt to delete the intent again, repeat until the intent has no
        references and the call to DeleteIntent is successful. This operation requires permission for the
        lex:DeleteIntent action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/intents/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_intent1_error_mapper,
            request_options=request_options,
        )

    async def delete_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: DeleteSessionRequest | DeleteSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSessionResponse, DeleteSessionErrorBody]:
        """Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a
        conversation with a bot. When you remove a session, the entire history of the session is removed so that you can
        start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session
        time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and
        24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale
        doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSessionRequest | DeleteSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteSessionResponse],
            error_mapper=delete_session_error_mapper,
            request_options=request_options,
        )

    async def delete_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RuntimeLexDeleteSessionResponse, DeleteSession1ErrorBody]:
        """Removes session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[RuntimeLexDeleteSessionResponse],
            error_mapper=delete_session1_error_mapper,
            request_options=request_options,
        )

    async def delete_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: DeleteSlotRequest | DeleteSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotErrorBody]:
        """Deletes the specified slot from an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotRequest | DeleteSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_slot_error_mapper,
            request_options=request_options,
        )

    async def delete_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeErrorBody]:
        """Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a
        ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_slot_type_error_mapper,
            request_options=request_options,
        )

    async def delete_slot_type1(
        self,
        name: str,
        *,
        body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotType1ErrorBody]:
        """Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the
        slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not
        referenced. To delete a slot type that is referred to in one or more intents, you must remove those references
        first. If you get the ResourceInUseException exception, the exception provides an example reference that shows
        the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent
        or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the
        slot type has no references and the DeleteSlotType call is successful. This operation requires permission for
        the lex:DeleteSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/slottypes/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_slot_type1_error_mapper,
            request_options=request_options,
        )

    async def delete_utterances(
        self,
        bot_id: str,
        *,
        body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteUtterancesErrorBody]:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually
        delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the ListAggregatedUtterances operation are deleted after 15 days.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/utterances"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteUtterancesRequest | DeleteUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_utterances_error_mapper,
            request_options=request_options,
        )

    async def delete_utterances1(
        self,
        bot_name: str,
        user_id: str,
        *,
        body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteUtterances1ErrorBody]:
        """Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are
        stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in
        improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually
        delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for
        improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with
        the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the
        lex:DeleteUtterances action.

        Args:
            bot_name: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botName}/utterances/{userId}"
            ),
            path_params=[param[str]("botName", bot_name), param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_utterances1_error_mapper,
            request_options=request_options,
        )

    async def describe_bot(
        self, bot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotResponse, DescribeBotErrorBody]:
        """Provides metadata information about a bot.

        Args:
            bot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotResponse],
            error_mapper=describe_bot_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_alias(
        self, bot_id: str, bot_alias_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotAliasResponse, DescribeBotAliasErrorBody]:
        """Get information about a specific bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotAliasResponse],
            error_mapper=describe_bot_alias_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_analyzer_recommendation(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotAnalyzerRecommendationResponse, DescribeBotAnalyzerRecommendationErrorBody]:
        """Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available
        status before recommendations can be retrieved. Recommendations are returned with pagination support. Each
        recommendation includes the issue location, priority level, detailed description, and proposed fix.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotAnalyzerRecommendationResponse],
            error_mapper=describe_bot_analyzer_recommendation_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_locale(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotLocaleResponse, DescribeBotLocaleErrorBody]:
        """Describes the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotLocaleResponse],
            error_mapper=describe_bot_locale_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotRecommendationResponse, DescribeBotRecommendationErrorBody]:
        """Provides metadata information about a bot recommendation. This information will enable you to get a
        description on the request inputs, to download associated transcripts after processing is complete, and to
        download intents and slot-types generated by the bot recommendation.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotRecommendationResponse],
            error_mapper=describe_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_replica(
        self, bot_id: str, replica_region: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotReplicaResponse, DescribeBotReplicaErrorBody]:
        """Monitors the bot replication status through the UI console.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotReplicaResponse],
            error_mapper=describe_bot_replica_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        generation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeBotResourceGenerationResponse, DescribeBotResourceGenerationErrorBody]:
        """Returns information about a request to generate a bot through natural language description, made through the
        StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale
        configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("generationId", generation_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotResourceGenerationResponse],
            error_mapper=describe_bot_resource_generation_error_mapper,
            request_options=request_options,
        )

    async def describe_bot_version(
        self, bot_id: str, bot_version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeBotVersionResponse, DescribeBotVersionErrorBody]:
        """Provides metadata about a version of a bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeBotVersionResponse],
            error_mapper=describe_bot_version_error_mapper,
            request_options=request_options,
        )

    async def describe_custom_vocabulary_metadata(
        self, bot_id: str, bot_version: str, locale_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeCustomVocabularyMetadataResponse, DescribeCustomVocabularyMetadataErrorBody]:
        """Provides metadata information about a custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeCustomVocabularyMetadataResponse],
            error_mapper=describe_custom_vocabulary_metadata_error_mapper,
            request_options=request_options,
        )

    async def describe_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeIntentResponse, DescribeIntentErrorBody]:
        """Returns metadata about an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeIntentResponse],
            error_mapper=describe_intent_error_mapper,
            request_options=request_options,
        )

    async def describe_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeSlotResponse, DescribeSlotErrorBody]:
        """Gets metadata information about a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeSlotResponse],
            error_mapper=describe_slot_error_mapper,
            request_options=request_options,
        )

    async def describe_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeSlotTypeResponse, DescribeSlotTypeErrorBody]:
        """Gets metadata information about a slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeSlotTypeResponse],
            error_mapper=describe_slot_type_error_mapper,
            request_options=request_options,
        )

    async def generate_bot_element(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GenerateBotElementResponse, GenerateBotElementErrorBody]:
        """Generates sample utterances for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GenerateBotElementRequest | GenerateBotElementRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GenerateBotElementResponse],
            error_mapper=generate_bot_element_error_mapper,
            request_options=request_options,
        )

    async def get_bots(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotsResponse, GetBotsErrorBody]:
        """Returns bot information as follows: If you provide the nameContains field, the response includes information
        for the $LATEST version of all bots whose name contains the specified string. If you don't specify the
        nameContains field, the operation returns information about the $LATEST version of all of your bots. This
        operation requires permission for the lex:GetBots action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotsResponse],
            error_mapper=get_bots_error_mapper,
            request_options=request_options,
        )

    async def get_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSessionResponse, GetSessionErrorBody]:
        """Returns session information for a specified bot, alias, and user. For example, you can use this operation to
        retrieve session information for a user that has left a long-running session in use. If the bot, alias, or
        session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is
        not enabled for the alias, you receive a BadRequestException.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSessionResponse],
            error_mapper=get_session_error_mapper,
            request_options=request_options,
        )

    async def get_session1(
        self, bot_name: str, bot_alias: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RuntimeLexGetSessionResponse, GetSession1ErrorBody]:
        """Returns session information for a specified bot, alias, and user ID.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[RuntimeLexGetSessionResponse],
            error_mapper=get_session1_error_mapper,
            request_options=request_options,
        )

    async def list_aggregated_utterances(
        self,
        bot_id: str,
        *,
        body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAggregatedUtterancesResponse, ListAggregatedUtterancesErrorBody]:
        """Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the
        utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated
        into the same line in the response. You can see both detected utterances and missed utterances. A detected
        utterance is where the bot properly recognized the utterance and activated the associated intent. A missed
        utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot
        alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the
        following conditions: The childDirected field was set to true when the bot was created. You are using slot
        obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/aggregatedutterances"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListAggregatedUtterancesResponse],
            error_mapper=list_aggregated_utterances_error_mapper,
            request_options=request_options,
        )

    async def list_bot_alias_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAliasReplicasResponse, ListBotAliasReplicasErrorBody]:
        """The action to list the replicated bots created from the source bot alias.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}/botaliases"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotAliasReplicasResponse],
            error_mapper=list_bot_alias_replicas_error_mapper,
            request_options=request_options,
        )

    async def list_bot_aliases(
        self,
        bot_id: str,
        *,
        body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAliasesResponse, ListBotAliasesErrorBody]:
        """Gets a list of aliases for the specified bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botaliases"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAliasesRequest | ListBotAliasesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotAliasesResponse],
            error_mapper=list_bot_aliases_error_mapper,
            request_options=request_options,
        )

    async def list_bot_analyzer_history(
        self,
        bot_id: str,
        *,
        body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotAnalyzerHistoryResponse, ListBotAnalyzerHistoryErrorBody]:
        """Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by
        locale and bot version. The history includes all analysis executions regardless of their status, allowing you to
        track past analyses and their outcomes.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/history"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotAnalyzerHistoryResponse],
            error_mapper=list_bot_analyzer_history_error_mapper,
            request_options=request_options,
        )

    async def list_bot_locales(
        self,
        bot_id: str,
        bot_version: str,
        *,
        body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotLocalesResponse, ListBotLocalesErrorBody]:
        """Gets a list of locales for the specified bot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botVersion", bot_version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotLocalesRequest | ListBotLocalesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotLocalesResponse],
            error_mapper=list_bot_locales_error_mapper,
            request_options=request_options,
        )

    async def list_bot_recommendations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotRecommendationsResponse, ListBotRecommendationsErrorBody]:
        """Get a list of bot recommendations that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotRecommendationsResponse],
            error_mapper=list_bot_recommendations_error_mapper,
            request_options=request_options,
        )

    async def list_bot_replicas(
        self,
        bot_id: str,
        *,
        body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotReplicasResponse, ListBotReplicasErrorBody]:
        """The action to list the replicated bots.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/replicas"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotReplicasRequest | ListBotReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotReplicasResponse],
            error_mapper=list_bot_replicas_error_mapper,
            request_options=request_options,
        )

    async def list_bot_resource_generations(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotResourceGenerationsResponse, ListBotResourceGenerationsErrorBody]:
        """Lists the generation requests made for a bot locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotResourceGenerationsResponse],
            error_mapper=list_bot_resource_generations_error_mapper,
            request_options=request_options,
        )

    async def list_bot_version_replicas(
        self,
        bot_id: str,
        replica_region: str,
        *,
        body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotVersionReplicasResponse, ListBotVersionReplicasErrorBody]:
        """Contains information about all the versions replication statuses applicable for Global Resiliency.

        Args:
            bot_id: Value sent with the request.
            replica_region: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/replicas/{replicaRegion}/botversions"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("replicaRegion", replica_region)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotVersionReplicasResponse],
            error_mapper=list_bot_version_replicas_error_mapper,
            request_options=request_options,
        )

    async def list_bot_versions(
        self,
        bot_id: str,
        *,
        body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotVersionsResponse, ListBotVersionsErrorBody]:
        """Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each
        version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for
        summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always
        returns at least one version, the DRAFT version.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botversions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotVersionsRequest | ListBotVersionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotVersionsResponse],
            error_mapper=list_bot_versions_error_mapper,
            request_options=request_options,
        )

    async def list_bots(
        self,
        *,
        body: ListBotsRequest | ListBotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBotsResponse, ListBotsErrorBody]:
        """Gets a list of available bots.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBotsRequest | ListBotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBotsResponse],
            error_mapper=list_bots_error_mapper,
            request_options=request_options,
        )

    async def list_custom_vocabulary_items(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCustomVocabularyItemsResponse, ListCustomVocabularyItemsErrorBody]:
        """Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListCustomVocabularyItemsResponse],
            error_mapper=list_custom_vocabulary_items_error_mapper,
            request_options=request_options,
        )

    async def list_intent_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentMetricsResponse, ListIntentMetricsErrorBody]:
        """Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of
        AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the
        statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify
        whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time
        range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can specify only one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentmetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentMetricsRequest | ListIntentMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListIntentMetricsResponse],
            error_mapper=list_intent_metrics_error_mapper,
            request_options=request_options,
        )

    async def list_intent_paths(
        self,
        bot_id: str,
        *,
        body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentPathsResponse, ListIntentPathsErrorBody]:
        """Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following
        fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results.
        intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path
        with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about
        how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to
        filter the results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentpaths"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentPathsRequest | ListIntentPathsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListIntentPathsResponse],
            error_mapper=list_intent_paths_error_mapper,
            request_options=request_options,
        )

    async def list_intent_stage_metrics(
        self,
        bot_id: str,
        *,
        body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentStageMetricsResponse, ListIntentStageMetricsErrorBody]:
        """Retrieves summary metrics for the stages within intents in your bot. The following fields are required:
        metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric
        to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order
        field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime –
        Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results
        in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by
        which to group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. You can only specify one order in a given request.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/intentstagemetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListIntentStageMetricsResponse],
            error_mapper=list_intent_stage_metrics_error_mapper,
            request_options=request_options,
        )

    async def list_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListIntentsRequest | ListIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIntentsResponse, ListIntentsErrorBody]:
        """Get a list of intents that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListIntentsRequest | ListIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListIntentsResponse],
            error_mapper=list_intents_error_mapper,
            request_options=request_options,
        )

    async def list_recommended_intents(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecommendedIntentsResponse, ListRecommendedIntentsErrorBody]:
        """Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents
        in the response are ordered by relevance.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListRecommendedIntentsResponse],
            error_mapper=list_recommended_intents_error_mapper,
            request_options=request_options,
        )

    async def list_session_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSessionAnalyticsDataResponse, ListSessionAnalyticsDataErrorBody]:
        """Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime
        fields are required. These fields define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results and the
        sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of
        results to return in a single response and the nextToken field to return the next batch of results if the
        response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/analytics/sessions"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListSessionAnalyticsDataResponse],
            error_mapper=list_session_analytics_data_error_mapper,
            request_options=request_options,
        )

    async def list_session_metrics(
        self,
        bot_id: str,
        *,
        body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSessionMetricsResponse, ListSessionMetricsErrorBody]:
        """Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A
        list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate,
        the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to
        specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a
        time range for which you want to retrieve results. Of the optional fields, you can organize the results in the
        following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to
        group the results, and the binBy field to specify time intervals by which to group the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results. Note that an order field
        exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/sessionmetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSessionMetricsRequest | ListSessionMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListSessionMetricsResponse],
            error_mapper=list_session_metrics_error_mapper,
            request_options=request_options,
        )

    async def list_slot_types(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSlotTypesResponse, ListSlotTypesErrorBody]:
        """Gets a list of slot types that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSlotTypesRequest | ListSlotTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListSlotTypesResponse],
            error_mapper=list_slot_types_error_mapper,
            request_options=request_options,
        )

    async def list_slots(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: ListSlotsRequest | ListSlotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSlotsResponse, ListSlotsErrorBody]:
        """Gets a list of slots that match the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListSlotsRequest | ListSlotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListSlotsResponse],
            error_mapper=list_slots_error_mapper,
            request_options=request_options,
        )

    async def list_utterance_analytics_data(
        self,
        bot_id: str,
        *,
        body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListUtteranceAnalyticsDataResponse, ListUtteranceAnalyticsDataErrorBody]:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The
        following fields are required: startDateTime and endDateTime – Define a time range for which you want to
        retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters
        field to filter the results and the sortBy field to specify the values by which to sort the results. Use the
        maxResults field to limit the number of results to return in a single response and the nextToken field to return
        the next batch of results if the response does not return the full set of results.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/utterances"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListUtteranceAnalyticsDataResponse],
            error_mapper=list_utterance_analytics_data_error_mapper,
            request_options=request_options,
        )

    async def list_utterance_metrics(
        self,
        bot_id: str,
        *,
        body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListUtteranceMetricsResponse, ListUtteranceMetricsErrorBody]:
        """To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances
        operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM
        policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields
        are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to
        specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max
        number, and the order field to specify whether to sort the results in Ascending or Descending order.
        startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional
        fields, you can organize the results in the following ways: Use the filters field to filter the results, the
        groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals
        by which to group the results. Use the maxResults field to limit the number of results to return in a single
        response and the nextToken field to return the next batch of results if the response does not return the full
        set of re

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/analytics/utterancemetrics"
            ),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListUtteranceMetricsResponse],
            error_mapper=list_utterance_metrics_error_mapper,
            request_options=request_options,
        )

    async def put_session(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: PutSessionRequest | PutSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSessionResponse, PutSessionErrorBody]:
        """Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable
        your application to set the state of the bot.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutSessionRequest | PutSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutSessionResponse],
            error_mapper=put_session_error_mapper,
            request_options=request_options,
        )

    async def put_session1(
        self,
        bot_name: str,
        bot_alias: str,
        user_id: str,
        *,
        body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RuntimeLexPutSessionResponse, PutSession1ErrorBody]:
        """Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable
        your application to set the state of the bot. For more information, see Managing Sessions.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bot/{botName}/alias/{botAlias}/user/{userId}/session"
            ),
            path_params=[
                param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("userId", user_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[RuntimeLexPutSessionResponse],
            error_mapper=put_session1_error_mapper,
            request_options=request_options,
        )

    async def recognize_text(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeTextRequest | RecognizeTextRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecognizeTextResponse, RecognizeTextErrorBody]:
        """Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at
        runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the
        bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to
        display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more
        information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes
        successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message -
        The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a
        failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout,
        and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a
        timeout, the timeout message is returned when the period times out. For more information, see Completion
        message.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeTextRequest | RecognizeTextRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[RecognizeTextResponse],
            error_mapper=recognize_text_error_mapper,
            request_options=request_options,
        )

    async def recognize_utterance(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecognizeUtteranceResponse, RecognizeUtteranceErrorBody]:
        """Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio
        requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model
        built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you
        send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using
        gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress
        them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java
        application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and
        decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages
        are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message -
        Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if
        the message is present. Failed message - The failed message is returned if the Lambda function throws

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[RecognizeUtteranceResponse],
            error_mapper=recognize_utterance_error_mapper,
            request_options=request_options,
        )

    async def search_associated_transcripts(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchAssociatedTranscriptsResponse, SearchAssociatedTranscriptsErrorBody]:
        """Search for associated transcripts that meet the specified criteria.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[SearchAssociatedTranscriptsResponse],
            error_mapper=search_associated_transcripts_error_mapper,
            request_options=request_options,
        )

    async def start_bot_analyzer(
        self,
        bot_id: str,
        *,
        body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotAnalyzerResponse, StartBotAnalyzerErrorBody]:
        """Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential
        issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration,
        including intents, utterances, slots, and conversation flows, to provide actionable recommendations for
        optimization.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}/botanalyzer"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartBotAnalyzerResponse],
            error_mapper=start_bot_analyzer_error_mapper,
            request_options=request_options,
        )

    async def start_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotRecommendationResponse, StartBotRecommendationErrorBody]:
        """Use this to provide your transcript data, and to start the bot recommendation process.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotRecommendationRequest | StartBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartBotRecommendationResponse],
            error_mapper=start_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    async def start_bot_resource_generation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartBotResourceGenerationResponse, StartBotResourceGenerationErrorBody]:
        """Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt
        you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status
        of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve
        the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartBotResourceGenerationResponse],
            error_mapper=start_bot_resource_generation_error_mapper,
            request_options=request_options,
        )

    async def start_conversation(
        self,
        bot_id: str,
        bot_alias_id: str,
        locale_id: str,
        session_id: str,
        *,
        body: StartConversationRequest | StartConversationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartConversationResponse, StartConversationErrorBody]:
        """Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time.
        After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon
        Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in
        the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If
        the optional post-fulfillment response is specified, the messages are returned as follows. For more information,
        see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully
        and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed
        message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent
        state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the
        Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout,
        the timeout message is returned when the period times out. For more information, see Complet

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            locale_id: Value sent with the request.
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botAliasId", bot_alias_id),
                param[str]("localeId", locale_id),
                param[str]("sessionId", session_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartConversationRequest | StartConversationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartConversationResponse],
            error_mapper=start_conversation_error_mapper,
            request_options=request_options,
        )

    async def stop_bot_analyzer(
        self,
        bot_id: str,
        bot_analyzer_request_id: str,
        *,
        body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StopBotAnalyzerResponse, StopBotAnalyzerErrorBody]:
        """Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no
        recommendations will be generated.

        Args:
            bot_id: Value sent with the request.
            bot_analyzer_request_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAnalyzerRequestId", bot_analyzer_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StopBotAnalyzerResponse],
            error_mapper=stop_bot_analyzer_error_mapper,
            request_options=request_options,
        )

    async def stop_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StopBotRecommendationResponse, StopBotRecommendationErrorBody]:
        """Stop an already running Bot Recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopBotRecommendationRequest | StopBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StopBotRecommendationResponse],
            error_mapper=stop_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    async def update_bot(
        self,
        bot_id: str,
        *,
        body: UpdateBotRequest | UpdateBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotResponse, UpdateBotErrorBody]:
        """Updates the configuration of an existing bot.

        Args:
            bot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/bots/{botId}"),
            path_params=[param[str]("botId", bot_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotRequest | UpdateBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateBotResponse],
            error_mapper=update_bot_error_mapper,
            request_options=request_options,
        )

    async def update_bot_alias(
        self,
        bot_id: str,
        bot_alias_id: str,
        *,
        body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotAliasResponse, UpdateBotAliasErrorBody]:
        """Updates the configuration of an existing bot alias.

        Args:
            bot_id: Value sent with the request.
            bot_alias_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botaliases/{botAliasId}"
            ),
            path_params=[param[str]("botId", bot_id), param[str]("botAliasId", bot_alias_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotAliasRequest | UpdateBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateBotAliasResponse],
            error_mapper=update_bot_alias_error_mapper,
            request_options=request_options,
        )

    async def update_bot_locale(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        *,
        body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotLocaleResponse, UpdateBotLocaleErrorBody]:
        """Updates the settings that a bot has for a specific locale.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"
            ),
            path_params=[
                param[str]("botId", bot_id), param[str]("botVersion", bot_version), param[str]("localeId", locale_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateBotLocaleResponse],
            error_mapper=update_bot_locale_error_mapper,
            request_options=request_options,
        )

    async def update_bot_recommendation(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        bot_recommendation_id: str,
        *,
        body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateBotRecommendationResponse, UpdateBotRecommendationErrorBody]:
        """Updates an existing bot recommendation request.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            bot_recommendation_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("botRecommendationId", bot_recommendation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateBotRecommendationResponse],
            error_mapper=update_bot_recommendation_error_mapper,
            request_options=request_options,
        )

    async def update_intent(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        *,
        body: UpdateIntentRequest | UpdateIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateIntentResponse, UpdateIntentErrorBody]:
        """Updates the settings for an intent.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIntentRequest | UpdateIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateIntentResponse],
            error_mapper=update_intent_error_mapper,
            request_options=request_options,
        )

    async def update_slot(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        intent_id: str,
        slot_id: str,
        *,
        body: UpdateSlotRequest | UpdateSlotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSlotResponse, UpdateSlotErrorBody]:
        """Updates the settings for a slot.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            intent_id: Value sent with the request.
            slot_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("intentId", intent_id),
                param[str]("slotId", slot_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSlotRequest | UpdateSlotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateSlotResponse],
            error_mapper=update_slot_error_mapper,
            request_options=request_options,
        )

    async def update_slot_type(
        self,
        bot_id: str,
        bot_version: str,
        locale_id: str,
        slot_type_id: str,
        *,
        body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSlotTypeResponse, UpdateSlotTypeErrorBody]:
        """Updates the configuration of an existing slot type.

        Args:
            bot_id: Value sent with the request.
            bot_version: Value sent with the request.
            locale_id: Value sent with the request.
            slot_type_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"
            ),
            path_params=[
                param[str]("botId", bot_id),
                param[str]("botVersion", bot_version),
                param[str]("localeId", locale_id),
                param[str]("slotTypeId", slot_type_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateSlotTypeResponse],
            error_mapper=update_slot_type_error_mapper,
            request_options=request_options,
        )
