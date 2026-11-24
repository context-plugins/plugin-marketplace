from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.batch_detect_dominant_language_error import (
    BatchDetectDominantLanguageErrorBody,
    batch_detect_dominant_language_error_mapper,
)
from ..errors.batch_detect_entities_error import BatchDetectEntitiesErrorBody, batch_detect_entities_error_mapper
from ..errors.batch_detect_key_phrases_error import (
    BatchDetectKeyPhrasesErrorBody,
    batch_detect_key_phrases_error_mapper,
)
from ..errors.batch_detect_sentiment_error import BatchDetectSentimentErrorBody, batch_detect_sentiment_error_mapper
from ..errors.batch_detect_syntax_error import BatchDetectSyntaxErrorBody, batch_detect_syntax_error_mapper
from ..errors.batch_detect_targeted_sentiment_error import (
    BatchDetectTargetedSentimentErrorBody,
    batch_detect_targeted_sentiment_error_mapper,
)
from ..errors.classify_document_error import ClassifyDocumentErrorBody, classify_document_error_mapper
from ..errors.contains_pii_entities_error import ContainsPiiEntitiesErrorBody, contains_pii_entities_error_mapper
from ..errors.create_dataset_error import CreateDatasetErrorBody, create_dataset_error_mapper
from ..errors.create_document_classifier_error import (
    CreateDocumentClassifierErrorBody,
    create_document_classifier_error_mapper,
)
from ..errors.create_endpoint_error import CreateEndpointErrorBody, create_endpoint_error_mapper
from ..errors.create_entity_recognizer_error import (
    CreateEntityRecognizerErrorBody,
    create_entity_recognizer_error_mapper,
)
from ..errors.create_flywheel_error import CreateFlywheelErrorBody, create_flywheel_error_mapper
from ..errors.delete_document_classifier_error import (
    DeleteDocumentClassifierErrorBody,
    delete_document_classifier_error_mapper,
)
from ..errors.delete_endpoint_error import DeleteEndpointErrorBody, delete_endpoint_error_mapper
from ..errors.delete_entity_recognizer_error import (
    DeleteEntityRecognizerErrorBody,
    delete_entity_recognizer_error_mapper,
)
from ..errors.delete_flywheel_error import DeleteFlywheelErrorBody, delete_flywheel_error_mapper
from ..errors.delete_resource_policy_error import DeleteResourcePolicyErrorBody, delete_resource_policy_error_mapper
from ..errors.describe_dataset_error import DescribeDatasetErrorBody, describe_dataset_error_mapper
from ..errors.describe_document_classification_job_error import (
    DescribeDocumentClassificationJobErrorBody,
    describe_document_classification_job_error_mapper,
)
from ..errors.describe_document_classifier_error import (
    DescribeDocumentClassifierErrorBody,
    describe_document_classifier_error_mapper,
)
from ..errors.describe_dominant_language_detection_job_error import (
    DescribeDominantLanguageDetectionJobErrorBody,
    describe_dominant_language_detection_job_error_mapper,
)
from ..errors.describe_endpoint_error import DescribeEndpointErrorBody, describe_endpoint_error_mapper
from ..errors.describe_entities_detection_job_error import (
    DescribeEntitiesDetectionJobErrorBody,
    describe_entities_detection_job_error_mapper,
)
from ..errors.describe_entity_recognizer_error import (
    DescribeEntityRecognizerErrorBody,
    describe_entity_recognizer_error_mapper,
)
from ..errors.describe_events_detection_job_error import (
    DescribeEventsDetectionJobErrorBody,
    describe_events_detection_job_error_mapper,
)
from ..errors.describe_flywheel_error import DescribeFlywheelErrorBody, describe_flywheel_error_mapper
from ..errors.describe_flywheel_iteration_error import (
    DescribeFlywheelIterationErrorBody,
    describe_flywheel_iteration_error_mapper,
)
from ..errors.describe_key_phrases_detection_job_error import (
    DescribeKeyPhrasesDetectionJobErrorBody,
    describe_key_phrases_detection_job_error_mapper,
)
from ..errors.describe_pii_entities_detection_job_error import (
    DescribePiiEntitiesDetectionJobErrorBody,
    describe_pii_entities_detection_job_error_mapper,
)
from ..errors.describe_resource_policy_error import (
    DescribeResourcePolicyErrorBody,
    describe_resource_policy_error_mapper,
)
from ..errors.describe_sentiment_detection_job_error import (
    DescribeSentimentDetectionJobErrorBody,
    describe_sentiment_detection_job_error_mapper,
)
from ..errors.describe_targeted_sentiment_detection_job_error import (
    DescribeTargetedSentimentDetectionJobErrorBody,
    describe_targeted_sentiment_detection_job_error_mapper,
)
from ..errors.describe_topics_detection_job_error import (
    DescribeTopicsDetectionJobErrorBody,
    describe_topics_detection_job_error_mapper,
)
from ..errors.detect_dominant_language_error import (
    DetectDominantLanguageErrorBody,
    detect_dominant_language_error_mapper,
)
from ..errors.detect_entities_error import DetectEntitiesErrorBody, detect_entities_error_mapper
from ..errors.detect_key_phrases_error import DetectKeyPhrasesErrorBody, detect_key_phrases_error_mapper
from ..errors.detect_pii_entities_error import DetectPiiEntitiesErrorBody, detect_pii_entities_error_mapper
from ..errors.detect_sentiment_error import DetectSentimentErrorBody, detect_sentiment_error_mapper
from ..errors.detect_syntax_error import DetectSyntaxErrorBody, detect_syntax_error_mapper
from ..errors.detect_targeted_sentiment_error import (
    DetectTargetedSentimentErrorBody,
    detect_targeted_sentiment_error_mapper,
)
from ..errors.import_model_error import ImportModelErrorBody, import_model_error_mapper
from ..errors.list_datasets_error import ListDatasetsErrorBody, list_datasets_error_mapper
from ..errors.list_document_classification_jobs_error import (
    ListDocumentClassificationJobsErrorBody,
    list_document_classification_jobs_error_mapper,
)
from ..errors.list_document_classifier_summaries_error import (
    ListDocumentClassifierSummariesErrorBody,
    list_document_classifier_summaries_error_mapper,
)
from ..errors.list_document_classifiers_error import (
    ListDocumentClassifiersErrorBody,
    list_document_classifiers_error_mapper,
)
from ..errors.list_dominant_language_detection_jobs_error import (
    ListDominantLanguageDetectionJobsErrorBody,
    list_dominant_language_detection_jobs_error_mapper,
)
from ..errors.list_endpoints_error import ListEndpointsErrorBody, list_endpoints_error_mapper
from ..errors.list_entities_detection_jobs_error import (
    ListEntitiesDetectionJobsErrorBody,
    list_entities_detection_jobs_error_mapper,
)
from ..errors.list_entity_recognizer_summaries_error import (
    ListEntityRecognizerSummariesErrorBody,
    list_entity_recognizer_summaries_error_mapper,
)
from ..errors.list_entity_recognizers_error import ListEntityRecognizersErrorBody, list_entity_recognizers_error_mapper
from ..errors.list_events_detection_jobs_error import (
    ListEventsDetectionJobsErrorBody,
    list_events_detection_jobs_error_mapper,
)
from ..errors.list_flywheel_iteration_history_error import (
    ListFlywheelIterationHistoryErrorBody,
    list_flywheel_iteration_history_error_mapper,
)
from ..errors.list_flywheels_error import ListFlywheelsErrorBody, list_flywheels_error_mapper
from ..errors.list_key_phrases_detection_jobs_error import (
    ListKeyPhrasesDetectionJobsErrorBody,
    list_key_phrases_detection_jobs_error_mapper,
)
from ..errors.list_pii_entities_detection_jobs_error import (
    ListPiiEntitiesDetectionJobsErrorBody,
    list_pii_entities_detection_jobs_error_mapper,
)
from ..errors.list_sentiment_detection_jobs_error import (
    ListSentimentDetectionJobsErrorBody,
    list_sentiment_detection_jobs_error_mapper,
)
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.list_targeted_sentiment_detection_jobs_error import (
    ListTargetedSentimentDetectionJobsErrorBody,
    list_targeted_sentiment_detection_jobs_error_mapper,
)
from ..errors.list_topics_detection_jobs_error import (
    ListTopicsDetectionJobsErrorBody,
    list_topics_detection_jobs_error_mapper,
)
from ..errors.put_resource_policy_error import PutResourcePolicyErrorBody, put_resource_policy_error_mapper
from ..errors.start_document_classification_job_error import (
    StartDocumentClassificationJobErrorBody,
    start_document_classification_job_error_mapper,
)
from ..errors.start_dominant_language_detection_job_error import (
    StartDominantLanguageDetectionJobErrorBody,
    start_dominant_language_detection_job_error_mapper,
)
from ..errors.start_entities_detection_job_error import (
    StartEntitiesDetectionJobErrorBody,
    start_entities_detection_job_error_mapper,
)
from ..errors.start_events_detection_job_error import (
    StartEventsDetectionJobErrorBody,
    start_events_detection_job_error_mapper,
)
from ..errors.start_flywheel_iteration_error import (
    StartFlywheelIterationErrorBody,
    start_flywheel_iteration_error_mapper,
)
from ..errors.start_key_phrases_detection_job_error import (
    StartKeyPhrasesDetectionJobErrorBody,
    start_key_phrases_detection_job_error_mapper,
)
from ..errors.start_pii_entities_detection_job_error import (
    StartPiiEntitiesDetectionJobErrorBody,
    start_pii_entities_detection_job_error_mapper,
)
from ..errors.start_sentiment_detection_job_error import (
    StartSentimentDetectionJobErrorBody,
    start_sentiment_detection_job_error_mapper,
)
from ..errors.start_targeted_sentiment_detection_job_error import (
    StartTargetedSentimentDetectionJobErrorBody,
    start_targeted_sentiment_detection_job_error_mapper,
)
from ..errors.start_topics_detection_job_error import (
    StartTopicsDetectionJobErrorBody,
    start_topics_detection_job_error_mapper,
)
from ..errors.stop_dominant_language_detection_job_error import (
    StopDominantLanguageDetectionJobErrorBody,
    stop_dominant_language_detection_job_error_mapper,
)
from ..errors.stop_entities_detection_job_error import (
    StopEntitiesDetectionJobErrorBody,
    stop_entities_detection_job_error_mapper,
)
from ..errors.stop_events_detection_job_error import (
    StopEventsDetectionJobErrorBody,
    stop_events_detection_job_error_mapper,
)
from ..errors.stop_key_phrases_detection_job_error import (
    StopKeyPhrasesDetectionJobErrorBody,
    stop_key_phrases_detection_job_error_mapper,
)
from ..errors.stop_pii_entities_detection_job_error import (
    StopPiiEntitiesDetectionJobErrorBody,
    stop_pii_entities_detection_job_error_mapper,
)
from ..errors.stop_sentiment_detection_job_error import (
    StopSentimentDetectionJobErrorBody,
    stop_sentiment_detection_job_error_mapper,
)
from ..errors.stop_targeted_sentiment_detection_job_error import (
    StopTargetedSentimentDetectionJobErrorBody,
    stop_targeted_sentiment_detection_job_error_mapper,
)
from ..errors.stop_training_document_classifier_error import (
    StopTrainingDocumentClassifierErrorBody,
    stop_training_document_classifier_error_mapper,
)
from ..errors.stop_training_entity_recognizer_error import (
    StopTrainingEntityRecognizerErrorBody,
    stop_training_entity_recognizer_error_mapper,
)
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..errors.update_endpoint_error import UpdateEndpointErrorBody, update_endpoint_error_mapper
from ..errors.update_flywheel_error import UpdateFlywheelErrorBody, update_flywheel_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target10 import XAmzTarget10OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..models.enums.x_amz_target26 import XAmzTarget26OrStr
from ..models.enums.x_amz_target27 import XAmzTarget27OrStr
from ..models.enums.x_amz_target28 import XAmzTarget28OrStr
from ..models.enums.x_amz_target29 import XAmzTarget29OrStr
from ..models.enums.x_amz_target30 import XAmzTarget30OrStr
from ..models.enums.x_amz_target31 import XAmzTarget31OrStr
from ..models.enums.x_amz_target32 import XAmzTarget32OrStr
from ..models.enums.x_amz_target33 import XAmzTarget33OrStr
from ..models.enums.x_amz_target34 import XAmzTarget34OrStr
from ..models.enums.x_amz_target35 import XAmzTarget35OrStr
from ..models.enums.x_amz_target36 import XAmzTarget36OrStr
from ..models.enums.x_amz_target37 import XAmzTarget37OrStr
from ..models.enums.x_amz_target38 import XAmzTarget38OrStr
from ..models.enums.x_amz_target39 import XAmzTarget39OrStr
from ..models.enums.x_amz_target40 import XAmzTarget40OrStr
from ..models.enums.x_amz_target41 import XAmzTarget41OrStr
from ..models.enums.x_amz_target42 import XAmzTarget42OrStr
from ..models.enums.x_amz_target43 import XAmzTarget43OrStr
from ..models.enums.x_amz_target44 import XAmzTarget44OrStr
from ..models.enums.x_amz_target45 import XAmzTarget45OrStr
from ..models.enums.x_amz_target46 import XAmzTarget46OrStr
from ..models.enums.x_amz_target47 import XAmzTarget47OrStr
from ..models.enums.x_amz_target48 import XAmzTarget48OrStr
from ..models.enums.x_amz_target49 import XAmzTarget49OrStr
from ..models.enums.x_amz_target50 import XAmzTarget50OrStr
from ..models.enums.x_amz_target51 import XAmzTarget51OrStr
from ..models.enums.x_amz_target52 import XAmzTarget52OrStr
from ..models.enums.x_amz_target53 import XAmzTarget53OrStr
from ..models.enums.x_amz_target54 import XAmzTarget54OrStr
from ..models.enums.x_amz_target55 import XAmzTarget55OrStr
from ..models.enums.x_amz_target56 import XAmzTarget56OrStr
from ..models.enums.x_amz_target57 import XAmzTarget57OrStr
from ..models.enums.x_amz_target58 import XAmzTarget58OrStr
from ..models.enums.x_amz_target59 import XAmzTarget59OrStr
from ..models.enums.x_amz_target60 import XAmzTarget60OrStr
from ..models.enums.x_amz_target61 import XAmzTarget61OrStr
from ..models.enums.x_amz_target62 import XAmzTarget62OrStr
from ..models.enums.x_amz_target63 import XAmzTarget63OrStr
from ..models.enums.x_amz_target64 import XAmzTarget64OrStr
from ..models.enums.x_amz_target65 import XAmzTarget65OrStr
from ..models.enums.x_amz_target66 import XAmzTarget66OrStr
from ..models.enums.x_amz_target67 import XAmzTarget67OrStr
from ..models.enums.x_amz_target68 import XAmzTarget68OrStr
from ..models.enums.x_amz_target69 import XAmzTarget69OrStr
from ..models.enums.x_amz_target70 import XAmzTarget70OrStr
from ..models.enums.x_amz_target71 import XAmzTarget71OrStr
from ..models.enums.x_amz_target72 import XAmzTarget72OrStr
from ..models.enums.x_amz_target73 import XAmzTarget73OrStr
from ..models.enums.x_amz_target74 import XAmzTarget74OrStr
from ..models.enums.x_amz_target75 import XAmzTarget75OrStr
from ..models.enums.x_amz_target76 import XAmzTarget76OrStr
from ..models.enums.x_amz_target77 import XAmzTarget77OrStr
from ..models.enums.x_amz_target78 import XAmzTarget78OrStr
from ..models.enums.x_amz_target79 import XAmzTarget79OrStr
from ..models.enums.x_amz_target80 import XAmzTarget80OrStr
from ..models.enums.x_amz_target81 import XAmzTarget81OrStr
from ..models.enums.x_amz_target82 import XAmzTarget82OrStr
from ..models.enums.x_amz_target83 import XAmzTarget83OrStr
from ..server.server import Server


class AmazonComprehend:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AmazonComprehendWithRawResponse(client, server, auth)

    def batch_detect_dominant_language(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Determines the dominant language of the input text for a batch of documents. For a list of languages that
        Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_detect_dominant_language(x_amz_target, request_options=request_options)
        )

    def batch_detect_entities(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the text of a batch of documents for named entities and returns information about them. For more
        information about named entities, see Entities in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_detect_entities(x_amz_target, request_options=request_options))

    def batch_detect_key_phrases(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Detects the key noun phrases found in a batch of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_detect_key_phrases(x_amz_target, request_options=request_options))

    def batch_detect_sentiment(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED,
        or NEGATIVE, in each one.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_detect_sentiment(x_amz_target, request_options=request_options))

    def batch_detect_syntax(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and
        returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_detect_syntax(x_amz_target, request_options=request_options))

    def batch_detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.
        For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_detect_targeted_sentiment(x_amz_target, request_options=request_options)
        )

    def classify_document(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException
                ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.classify_document(x_amz_target, request_options=request_options))

    def contains_pii_entities(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.contains_pii_entities(x_amz_target, request_options=request_options))

    def create_dataset(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a dataset to upload training or test data for a model associated with a flywheel. For more
        information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    def create_document_classifier(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new document classifier that you can use to categorize documents. To create a classifier, you
        provide a set of training documents that are labeled with the categories that you want to use. For more
        information, see Training classifier models in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_document_classifier(x_amz_target, request_options=request_options))

    def create_endpoint(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a model-specific endpoint for synchronous inference for a previously trained custom model For
        information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_endpoint(x_amz_target, request_options=request_options))

    def create_entity_recognizer(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted,
        you can check job status using the DescribeEntityRecognizer API.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_entity_recognizer(x_amz_target, request_options=request_options))

    def create_flywheel(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom
        classification or custom entity recognition. You can create a flywheel to start with an existing trained model,
        or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in
        your account. The data lake holds the training data and test data for all versions of the model. To use a
        flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
        training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to
        provide a dataset for training data (and optional test data) when you create the flywheel. For more information
        about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_flywheel(x_amz_target, request_options=request_options))

    def delete_document_classifier(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a previously created document classifier Only those classifiers that are in terminated states
        (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException
        will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then
        removed by a background job. Once removed, the classifier disappears from your account and is no longer
        available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_document_classifier(x_amz_target, request_options=request_options))

    def delete_endpoint(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in
        order for the model to be deleted. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_endpoint(x_amz_target, request_options=request_options))

    def delete_entity_recognizer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will
        be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an
        asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job.
        Once removed, the recognizer disappears from your account and is no longer available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_entity_recognizer(x_amz_target, request_options=request_options))

    def delete_flywheel(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the
        model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon
        Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_flywheel(x_amz_target, request_options=request_options))

    def delete_resource_policy(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource-based policy that is attached to a custom model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_resource_policy(x_amz_target, request_options=request_options))

    def describe_dataset(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the dataset that you specify. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    def describe_document_classification_job(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a document classification job. Use this operation to get the status of a
        classification job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_document_classification_job(x_amz_target, request_options=request_options)
        )

    def describe_document_classifier(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a document classifier.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_document_classifier(x_amz_target, request_options=request_options)
        )

    def describe_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a dominant language detection job. Use this operation to get the status
        of a detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_dominant_language_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_endpoint(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
        For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_endpoint(x_amz_target, request_options=request_options))

    def describe_entities_detection_job(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with an entities detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def describe_entity_recognizer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer
        metadata, metrics, and so on.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_entity_recognizer(x_amz_target, request_options=request_options))

    def describe_events_detection_job(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the status and details of an events detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_events_detection_job(x_amz_target, request_options=request_options)
        )

    def describe_flywheel(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides configuration information about the flywheel. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_flywheel(x_amz_target, request_options=request_options))

    def describe_flywheel_iteration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see
        Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_flywheel_iteration(x_amz_target, request_options=request_options)
        )

    def describe_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a key phrases detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_key_phrases_detection_job(x_amz_target, request_options=request_options)
        )

    def describe_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a PII entities detection job. For example, you can use this operation to
        get the job status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_pii_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def describe_resource_policy(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of
        the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.describe_resource_policy(x_amz_target, request_options=request_options))

    def describe_sentiment_detection_job(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a sentiment detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    def describe_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status
        of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_targeted_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_topics_detection_job(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a topic detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_topics_detection_job(x_amz_target, request_options=request_options)
        )

    def detect_dominant_language(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.detect_dominant_language(x_amz_target, request_options=request_options))

    def detect_entities(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_entities(x_amz_target, request_options=request_options))

    def detect_key_phrases(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_key_phrases(x_amz_target, request_options=request_options))

    def detect_pii_entities(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_pii_entities(x_amz_target, request_options=request_options))

    def detect_sentiment(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_sentiment(x_amz_target, request_options=request_options))

    def detect_syntax(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_syntax(x_amz_target, request_options=request_options))

    def detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_targeted_sentiment(x_amz_target, request_options=request_options))

    def import_model(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new custom model that replicates a source custom model that you import. The source model can be in
        your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account,
        then it must have a resource-based policy that authorizes you to import it. The source model must be in the same
        Amazon Web Services Region that you're using when you import. You can't import a model that's in a different
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.import_model(x_amz_target, request_options=request_options))

    def list_datasets(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """List the datasets that you have configured in this Region. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_datasets(x_amz_target, request_options=request_options))

    def list_document_classification_jobs(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the documentation classification jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_document_classification_jobs(x_amz_target, request_options=request_options)
        )

    def list_document_classifier_summaries(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of summaries of the document classifiers that you have created

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.list_document_classifier_summaries(x_amz_target, request_options=request_options)
        )

    def list_document_classifiers(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the document classifiers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_document_classifiers(x_amz_target, request_options=request_options))

    def list_dominant_language_detection_jobs(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the dominant language detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_dominant_language_detection_jobs(x_amz_target, request_options=request_options)
        )

    def list_endpoints(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing
        endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_endpoints(x_amz_target, request_options=request_options))

    def list_entities_detection_jobs(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_entities_detection_jobs(x_amz_target, request_options=request_options)
        )

    def list_entity_recognizer_summaries(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of summaries for the entity recognizers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.list_entity_recognizer_summaries(x_amz_target, request_options=request_options)
        )

    def list_entity_recognizers(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the properties of all entity recognizers that you created, including recognizers currently in
        training. Allows you to filter the list of recognizers based on criteria such as status and submission time.
        This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the
        list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_entity_recognizers(x_amz_target, request_options=request_options))

    def list_events_detection_jobs(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the events detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_events_detection_jobs(x_amz_target, request_options=request_options))

    def list_flywheel_iteration_history(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_flywheel_iteration_history(x_amz_target, request_options=request_options)
        )

    def list_flywheels(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the flywheels that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_flywheels(x_amz_target, request_options=request_options))

    def list_key_phrases_detection_jobs(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Get a list of key phrase detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_key_phrases_detection_jobs(x_amz_target, request_options=request_options)
        )

    def list_pii_entities_detection_jobs(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the PII entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_pii_entities_detection_jobs(x_amz_target, request_options=request_options)
        )

    def list_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_sentiment_detection_jobs(x_amz_target, request_options=request_options)
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists all tags associated with a given Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def list_targeted_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of targeted sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_targeted_sentiment_detection_jobs(
                x_amz_target, request_options=request_options
            ),
        )

    def list_topics_detection_jobs(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the topic detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_topics_detection_jobs(x_amz_target, request_options=request_options))

    def put_resource_policy(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another
        Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their
        account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.put_resource_policy(x_amz_target, request_options=request_options))

    def start_document_classification_job(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous document classification job using a custom classification model. Use the
        DescribeDocumentClassificationJob operation to track the progress of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_document_classification_job(x_amz_target, request_options=request_options)
        )

    def start_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to
        track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_dominant_language_detection_job(x_amz_target, request_options=request_options)
        )

    def start_entities_detection_job(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the
        status of a job. This API can be used for either standard entity detection or custom entity recognition. In
        order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to
        provide access to the recognizer being used to detect the custom entity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def start_events_detection_job(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous event detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_events_detection_job(x_amz_target, request_options=request_options))

    def start_flywheel_iteration(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more
        information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_flywheel_iteration(x_amz_target, request_options=request_options))

    def start_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_key_phrases_detection_job(x_amz_target, request_options=request_options)
        )

    def start_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous PII entity detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_pii_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def start_sentiment_detection_job(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    def start_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
        DescribeTargetedSentimentDetectionJob operation to track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_targeted_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    def start_topics_detection_job(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status
        of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_topics_detection_job(x_amz_target, request_options=request_options))

    def stop_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_dominant_language_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_entities_detection_job(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_events_detection_job(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops an events detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_events_detection_job(x_amz_target, request_options=request_options))

    def stop_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_key_phrases_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a PII entities detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_pii_entities_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_sentiment_detection_job(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_targeted_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    def stop_training_document_classifier(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_training_document_classifier(x_amz_target, request_options=request_options)
        )

    def stop_training_entity_recognizer(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.stop_training_entity_recognizer(x_amz_target, request_options=request_options)
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a
        metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
        resource to indicate its use by the sales department.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException; InvalidRequestException; TooManyTagsException
                InternalServerException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes a specific tag associated with an Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException; InvalidRequestException; TooManyTagKeysException
                InternalServerException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    def update_endpoint(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_endpoint(x_amz_target, request_options=request_options))

    def update_flywheel(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Update the configuration information for an existing flywheel.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException
                ResourceNotFoundException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_flywheel(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AmazonComprehendWithRawResponse:
        return self._with_raw_response


class AsyncAmazonComprehend:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAmazonComprehendWithRawResponse(client, server, auth)

    async def batch_detect_dominant_language(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Determines the dominant language of the input text for a batch of documents. For a list of languages that
        Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_detect_dominant_language(x_amz_target, request_options=request_options)
        )

    async def batch_detect_entities(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the text of a batch of documents for named entities and returns information about them. For more
        information about named entities, see Entities in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_detect_entities(x_amz_target, request_options=request_options)
        )

    async def batch_detect_key_phrases(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Detects the key noun phrases found in a batch of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_detect_key_phrases(x_amz_target, request_options=request_options)
        )

    async def batch_detect_sentiment(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED,
        or NEGATIVE, in each one.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_detect_sentiment(x_amz_target, request_options=request_options)
        )

    async def batch_detect_syntax(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and
        returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_detect_syntax(x_amz_target, request_options=request_options))

    async def batch_detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.
        For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BatchSizeLimitExceededException; InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_detect_targeted_sentiment(x_amz_target, request_options=request_options)
        )

    async def classify_document(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException
                ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.classify_document(x_amz_target, request_options=request_options))

    async def contains_pii_entities(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.contains_pii_entities(x_amz_target, request_options=request_options)
        )

    async def create_dataset(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a dataset to upload training or test data for a model associated with a flywheel. For more
        information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    async def create_document_classifier(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new document classifier that you can use to categorize documents. To create a classifier, you
        provide a set of training documents that are labeled with the categories that you want to use. For more
        information, see Training classifier models in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_document_classifier(x_amz_target, request_options=request_options)
        )

    async def create_endpoint(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a model-specific endpoint for synchronous inference for a previously trained custom model For
        information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_endpoint(x_amz_target, request_options=request_options))

    async def create_entity_recognizer(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted,
        you can check job status using the DescribeEntityRecognizer API.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_entity_recognizer(x_amz_target, request_options=request_options)
        )

    async def create_flywheel(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom
        classification or custom entity recognition. You can create a flywheel to start with an existing trained model,
        or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in
        your account. The data lake holds the training data and test data for all versions of the model. To use a
        flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
        training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to
        provide a dataset for training data (and optional test data) when you create the flywheel. For more information
        about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException;
                UnsupportedLanguageException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_flywheel(x_amz_target, request_options=request_options))

    async def delete_document_classifier(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a previously created document classifier Only those classifiers that are in terminated states
        (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException
        will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then
        removed by a background job. Once removed, the classifier disappears from your account and is no longer
        available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_document_classifier(x_amz_target, request_options=request_options)
        )

    async def delete_endpoint(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in
        order for the model to be deleted. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_endpoint(x_amz_target, request_options=request_options))

    async def delete_entity_recognizer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will
        be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an
        asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job.
        Once removed, the recognizer disappears from your account and is no longer available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_entity_recognizer(x_amz_target, request_options=request_options)
        )

    async def delete_flywheel(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the
        model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon
        Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_flywheel(x_amz_target, request_options=request_options))

    async def delete_resource_policy(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource-based policy that is attached to a custom model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resource_policy(x_amz_target, request_options=request_options)
        )

    async def describe_dataset(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the dataset that you specify. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    async def describe_document_classification_job(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a document classification job. Use this operation to get the status of a
        classification job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_document_classification_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_document_classifier(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a document classifier.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_document_classifier(x_amz_target, request_options=request_options)
        )

    async def describe_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a dominant language detection job. Use this operation to get the status
        of a detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_dominant_language_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_endpoint(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
        For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_endpoint(x_amz_target, request_options=request_options))

    async def describe_entities_detection_job(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with an entities detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_entities_detection_job(x_amz_target, request_options=request_options)
        )

    async def describe_entity_recognizer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer
        metadata, metrics, and so on.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_entity_recognizer(x_amz_target, request_options=request_options)
        )

    async def describe_events_detection_job(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the status and details of an events detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_events_detection_job(x_amz_target, request_options=request_options)
        )

    async def describe_flywheel(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides configuration information about the flywheel. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_flywheel(x_amz_target, request_options=request_options))

    async def describe_flywheel_iteration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see
        Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_flywheel_iteration(x_amz_target, request_options=request_options)
        )

    async def describe_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a key phrases detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_key_phrases_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a PII entities detection job. For example, you can use this operation to
        get the job status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_pii_entities_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_resource_policy(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of
        the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_resource_policy(x_amz_target, request_options=request_options)
        )

    async def describe_sentiment_detection_job(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a sentiment detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status
        of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_targeted_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_topics_detection_job(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the properties associated with a topic detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_topics_detection_job(x_amz_target, request_options=request_options)
        )

    async def detect_dominant_language(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_dominant_language(x_amz_target, request_options=request_options)
        )

    async def detect_entities(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ResourceUnavailableException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_entities(x_amz_target, request_options=request_options))

    async def detect_key_phrases(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_key_phrases(x_amz_target, request_options=request_options))

    async def detect_pii_entities(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_pii_entities(x_amz_target, request_options=request_options))

    async def detect_sentiment(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_sentiment(x_amz_target, request_options=request_options))

    async def detect_syntax(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_syntax(x_amz_target, request_options=request_options))

    async def detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; TextSizeLimitExceededException;
                UnsupportedLanguageException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_targeted_sentiment(x_amz_target, request_options=request_options)
        )

    async def import_model(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new custom model that replicates a source custom model that you import. The source model can be in
        your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account,
        then it must have a resource-based policy that authorizes you to import it. The source model must be in the same
        Amazon Web Services Region that you're using when you import. You can't import a model that's in a different
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; ResourceLimitExceededException; TooManyTagsException ResourceNotFoundException;
                ResourceUnavailableException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.import_model(x_amz_target, request_options=request_options))

    async def list_datasets(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """List the datasets that you have configured in this Region. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_datasets(x_amz_target, request_options=request_options))

    async def list_document_classification_jobs(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the documentation classification jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_document_classification_jobs(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_document_classifier_summaries(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of summaries of the document classifiers that you have created

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_document_classifier_summaries(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_document_classifiers(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the document classifiers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_document_classifiers(x_amz_target, request_options=request_options)
        )

    async def list_dominant_language_detection_jobs(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the dominant language detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_dominant_language_detection_jobs(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_endpoints(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing
        endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.list_endpoints(x_amz_target, request_options=request_options))

    async def list_entities_detection_jobs(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_entities_detection_jobs(x_amz_target, request_options=request_options)
        )

    async def list_entity_recognizer_summaries(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of summaries for the entity recognizers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException TooManyRequestsException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_entity_recognizer_summaries(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_entity_recognizers(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the properties of all entity recognizers that you created, including recognizers currently in
        training. Allows you to filter the list of recognizers based on criteria such as status and submission time.
        This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the
        list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_entity_recognizers(x_amz_target, request_options=request_options)
        )

    async def list_events_detection_jobs(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the events detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_events_detection_jobs(x_amz_target, request_options=request_options)
        )

    async def list_flywheel_iteration_history(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_flywheel_iteration_history(x_amz_target, request_options=request_options)
        )

    async def list_flywheels(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the flywheels that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_flywheels(x_amz_target, request_options=request_options))

    async def list_key_phrases_detection_jobs(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Get a list of key phrase detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_key_phrases_detection_jobs(x_amz_target, request_options=request_options)
        )

    async def list_pii_entities_detection_jobs(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the PII entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_pii_entities_detection_jobs(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_sentiment_detection_jobs(x_amz_target, request_options=request_options)
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists all tags associated with a given Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def list_targeted_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of targeted sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_targeted_sentiment_detection_jobs(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_topics_detection_jobs(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the topic detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidFilterException; InvalidRequestException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_topics_detection_jobs(x_amz_target, request_options=request_options)
        )

    async def put_resource_policy(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another
        Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their
        account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.put_resource_policy(x_amz_target, request_options=request_options))

    async def start_document_classification_job(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous document classification job using a custom classification model. Use the
        DescribeDocumentClassificationJob operation to track the progress of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_document_classification_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to
        track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_dominant_language_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_entities_detection_job(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the
        status of a job. This API can be used for either standard entity detection or custom entity recognition. In
        order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to
        provide access to the recognizer being used to detect the custom entity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_entities_detection_job(x_amz_target, request_options=request_options)
        )

    async def start_events_detection_job(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous event detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_events_detection_job(x_amz_target, request_options=request_options)
        )

    async def start_flywheel_iteration(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more
        information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException ResourceNotFoundException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_flywheel_iteration(x_amz_target, request_options=request_options)
        )

    async def start_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_key_phrases_detection_job(x_amz_target, request_options=request_options)
        )

    async def start_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous PII entity detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_pii_entities_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_sentiment_detection_job(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    async def start_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
        DescribeTargetedSentimentDetectionJob operation to track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_targeted_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_topics_detection_job(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status
        of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException;
                ResourceInUseException; TooManyTagsException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_topics_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_dominant_language_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def stop_entities_detection_job(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_entities_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_events_detection_job(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops an events detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_events_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_key_phrases_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a PII entities detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_pii_entities_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_sentiment_detection_job(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_sentiment_detection_job(x_amz_target, request_options=request_options)
        )

    async def stop_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException JobNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_targeted_sentiment_detection_job(
                x_amz_target, request_options=request_options
            ),
        )

    async def stop_training_document_classifier(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_training_document_classifier(
                x_amz_target, request_options=request_options
            ),
        )

    async def stop_training_entity_recognizer(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException ResourceNotFoundException TooManyRequestsException
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_training_entity_recognizer(x_amz_target, request_options=request_options)
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a
        metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
        resource to indicate its use by the sales department.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException; InvalidRequestException; TooManyTagsException
                InternalServerException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes a specific tag associated with an Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException; InvalidRequestException; TooManyTagKeysException
                InternalServerException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    async def update_endpoint(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; ResourceInUseException;
                ResourceLimitExceededException ResourceNotFoundException; ResourceUnavailableException
                TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_endpoint(x_amz_target, request_options=request_options))

    async def update_flywheel(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Update the configuration information for an existing flywheel.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException InvalidRequestException; KmsKeyValidationException
                ResourceNotFoundException TooManyRequestsException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_flywheel(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAmazonComprehendWithRawResponse:
        return self._with_raw_response


class AmazonComprehendWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_detect_dominant_language(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectDominantLanguageErrorBody]:
        """Determines the dominant language of the input text for a batch of documents. For a list of languages that
        Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectDominantLanguage"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_dominant_language_error_mapper,
            request_options=request_options,
        )

    def batch_detect_entities(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectEntitiesErrorBody]:
        """Inspects the text of a batch of documents for named entities and returns information about them. For more
        information about named entities, see Entities in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectEntities"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_entities_error_mapper,
            request_options=request_options,
        )

    def batch_detect_key_phrases(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectKeyPhrasesErrorBody]:
        """Detects the key noun phrases found in a batch of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectKeyPhrases"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_key_phrases_error_mapper,
            request_options=request_options,
        )

    def batch_detect_sentiment(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectSentimentErrorBody]:
        """Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED,
        or NEGATIVE, in each one.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectSentiment"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_sentiment_error_mapper,
            request_options=request_options,
        )

    def batch_detect_syntax(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectSyntaxErrorBody]:
        """Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and
        returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectSyntax"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_syntax_error_mapper,
            request_options=request_options,
        )

    def batch_detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectTargetedSentimentErrorBody]:
        """Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.
        For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectTargetedSentiment"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_detect_targeted_sentiment_error_mapper,
            request_options=request_options,
        )

    def classify_document(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ClassifyDocumentErrorBody]:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ClassifyDocument"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=classify_document_error_mapper,
            request_options=request_options,
        )

    def contains_pii_entities(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContainsPiiEntitiesErrorBody]:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ContainsPiiEntities"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=contains_pii_entities_error_mapper,
            request_options=request_options,
        )

    def create_dataset(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """Creates a dataset to upload training or test data for a model associated with a flywheel. For more
        information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDataset"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    def create_document_classifier(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDocumentClassifierErrorBody]:
        """Creates a new document classifier that you can use to categorize documents. To create a classifier, you
        provide a set of training documents that are labeled with the categories that you want to use. For more
        information, see Training classifier models in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDocumentClassifier"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_document_classifier_error_mapper,
            request_options=request_options,
        )

    def create_endpoint(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateEndpointErrorBody]:
        """Creates a model-specific endpoint for synchronous inference for a previously trained custom model For
        information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateEndpoint"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_endpoint_error_mapper,
            request_options=request_options,
        )

    def create_entity_recognizer(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateEntityRecognizerErrorBody]:
        """Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted,
        you can check job status using the DescribeEntityRecognizer API.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateEntityRecognizer"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    def create_flywheel(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateFlywheelErrorBody]:
        """A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom
        classification or custom entity recognition. You can create a flywheel to start with an existing trained model,
        or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in
        your account. The data lake holds the training data and test data for all versions of the model. To use a
        flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
        training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to
        provide a dataset for training data (and optional test data) when you create the flywheel. For more information
        about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFlywheel"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_flywheel_error_mapper,
            request_options=request_options,
        )

    def delete_document_classifier(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentClassifierErrorBody]:
        """Deletes a previously created document classifier Only those classifiers that are in terminated states
        (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException
        will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then
        removed by a background job. Once removed, the classifier disappears from your account and is no longer
        available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDocumentClassifier"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_document_classifier_error_mapper,
            request_options=request_options,
        )

    def delete_endpoint(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEndpointErrorBody]:
        """Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in
        order for the model to be deleted. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteEndpoint"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_endpoint_error_mapper,
            request_options=request_options,
        )

    def delete_entity_recognizer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityRecognizerErrorBody]:
        """Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will
        be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an
        asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job.
        Once removed, the recognizer disappears from your account and is no longer available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteEntityRecognizer"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    def delete_flywheel(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFlywheelErrorBody]:
        """Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the
        model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon
        Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFlywheel"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_flywheel_error_mapper,
            request_options=request_options,
        )

    def delete_resource_policy(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourcePolicyErrorBody]:
        """Deletes a resource-based policy that is attached to a custom model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourcePolicy"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    def describe_dataset(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """Returns information about the dataset that you specify. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDataset"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )

    def describe_document_classification_job(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDocumentClassificationJobErrorBody]:
        """Gets the properties associated with a document classification job. Use this operation to get the status of a
        classification job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDocumentClassificationJob"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_document_classification_job_error_mapper,
            request_options=request_options,
        )

    def describe_document_classifier(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDocumentClassifierErrorBody]:
        """Gets the properties associated with a document classifier.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDocumentClassifier"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_document_classifier_error_mapper,
            request_options=request_options,
        )

    def describe_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDominantLanguageDetectionJobErrorBody]:
        """Gets the properties associated with a dominant language detection job. Use this operation to get the status
        of a detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_endpoint(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEndpointErrorBody]:
        """Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
        For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEndpoint"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_endpoint_error_mapper,
            request_options=request_options,
        )

    def describe_entities_detection_job(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEntitiesDetectionJobErrorBody]:
        """Gets the properties associated with an entities detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEntitiesDetectionJob"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_entity_recognizer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEntityRecognizerErrorBody]:
        """Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer
        metadata, metrics, and so on.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEntityRecognizer"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    def describe_events_detection_job(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEventsDetectionJobErrorBody]:
        """Gets the status and details of an events detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEventsDetectionJob"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_events_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_flywheel(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFlywheelErrorBody]:
        """Provides configuration information about the flywheel. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFlywheel"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_flywheel_error_mapper,
            request_options=request_options,
        )

    def describe_flywheel_iteration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFlywheelIterationErrorBody]:
        """Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see
        Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFlywheelIteration"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_flywheel_iteration_error_mapper,
            request_options=request_options,
        )

    def describe_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeKeyPhrasesDetectionJobErrorBody]:
        """Gets the properties associated with a key phrases detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribePiiEntitiesDetectionJobErrorBody]:
        """Gets the properties associated with a PII entities detection job. For example, you can use this operation to
        get the job status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribePiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_resource_policy(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeResourcePolicyErrorBody]:
        """Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of
        the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeResourcePolicy"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_resource_policy_error_mapper,
            request_options=request_options,
        )

    def describe_sentiment_detection_job(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSentimentDetectionJobErrorBody]:
        """Gets the properties associated with a sentiment detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSentimentDetectionJob"),
            headers=[param[XAmzTarget64OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTargetedSentimentDetectionJobErrorBody]:
        """Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status
        of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget68OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def describe_topics_detection_job(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTopicsDetectionJobErrorBody]:
        """Gets the properties associated with a topic detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTopicsDetectionJob"),
            headers=[param[XAmzTarget72OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_topics_detection_job_error_mapper,
            request_options=request_options,
        )

    def detect_dominant_language(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectDominantLanguageErrorBody]:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectDominantLanguage"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_dominant_language_error_mapper,
            request_options=request_options,
        )

    def detect_entities(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectEntitiesErrorBody]:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectEntities"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_entities_error_mapper,
            request_options=request_options,
        )

    def detect_key_phrases(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectKeyPhrasesErrorBody]:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectKeyPhrases"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_key_phrases_error_mapper,
            request_options=request_options,
        )

    def detect_pii_entities(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectPiiEntitiesErrorBody]:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectPiiEntities"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_pii_entities_error_mapper,
            request_options=request_options,
        )

    def detect_sentiment(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectSentimentErrorBody]:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSentiment"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_sentiment_error_mapper,
            request_options=request_options,
        )

    def detect_syntax(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectSyntaxErrorBody]:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSyntax"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_syntax_error_mapper,
            request_options=request_options,
        )

    def detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectTargetedSentimentErrorBody]:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectTargetedSentiment"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_targeted_sentiment_error_mapper,
            request_options=request_options,
        )

    def import_model(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportModelErrorBody]:
        """Creates a new custom model that replicates a source custom model that you import. The source model can be in
        your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account,
        then it must have a resource-based policy that authorizes you to import it. The source model must be in the same
        Amazon Web Services Region that you're using when you import. You can't import a model that's in a different
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportModel"),
            headers=[param[XAmzTarget75OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=import_model_error_mapper,
            request_options=request_options,
        )

    def list_datasets(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetsErrorBody]:
        """List the datasets that you have configured in this Region. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasets"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_datasets_error_mapper,
            request_options=request_options,
        )

    def list_document_classification_jobs(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassificationJobsErrorBody]:
        """Gets a list of the documentation classification jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassificationJobs"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_document_classification_jobs_error_mapper,
            request_options=request_options,
        )

    def list_document_classifier_summaries(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassifierSummariesErrorBody]:
        """Gets a list of summaries of the document classifiers that you have created

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassifierSummaries"),
            headers=[param[XAmzTarget76OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_document_classifier_summaries_error_mapper,
            request_options=request_options,
        )

    def list_document_classifiers(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassifiersErrorBody]:
        """Gets a list of the document classifiers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassifiers"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_document_classifiers_error_mapper,
            request_options=request_options,
        )

    def list_dominant_language_detection_jobs(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDominantLanguageDetectionJobsErrorBody]:
        """Gets a list of the dominant language detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDominantLanguageDetectionJobs"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dominant_language_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_endpoints(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEndpointsErrorBody]:
        """Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing
        endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEndpoints"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_endpoints_error_mapper,
            request_options=request_options,
        )

    def list_entities_detection_jobs(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntitiesDetectionJobsErrorBody]:
        """Gets a list of the entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntitiesDetectionJobs"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_entities_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_entity_recognizer_summaries(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntityRecognizerSummariesErrorBody]:
        """Gets a list of summaries for the entity recognizers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntityRecognizerSummaries"),
            headers=[param[XAmzTarget77OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_entity_recognizer_summaries_error_mapper,
            request_options=request_options,
        )

    def list_entity_recognizers(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntityRecognizersErrorBody]:
        """Gets a list of the properties of all entity recognizers that you created, including recognizers currently in
        training. Allows you to filter the list of recognizers based on criteria such as status and submission time.
        This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the
        list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntityRecognizers"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_entity_recognizers_error_mapper,
            request_options=request_options,
        )

    def list_events_detection_jobs(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEventsDetectionJobsErrorBody]:
        """Gets a list of the events detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEventsDetectionJobs"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_events_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_flywheel_iteration_history(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFlywheelIterationHistoryErrorBody]:
        """Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFlywheelIterationHistory"),
            headers=[param[XAmzTarget78OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_flywheel_iteration_history_error_mapper,
            request_options=request_options,
        )

    def list_flywheels(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFlywheelsErrorBody]:
        """Gets a list of the flywheels that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFlywheels"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_flywheels_error_mapper,
            request_options=request_options,
        )

    def list_key_phrases_detection_jobs(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListKeyPhrasesDetectionJobsErrorBody]:
        """Get a list of key phrase detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListKeyPhrasesDetectionJobs"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_key_phrases_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_pii_entities_detection_jobs(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListPiiEntitiesDetectionJobsErrorBody]:
        """Gets a list of the PII entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListPiiEntitiesDetectionJobs"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_pii_entities_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSentimentDetectionJobsErrorBody]:
        """Gets a list of sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSentimentDetectionJobs"),
            headers=[param[XAmzTarget65OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_sentiment_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists all tags associated with a given Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget79OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def list_targeted_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTargetedSentimentDetectionJobsErrorBody]:
        """Gets a list of targeted sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTargetedSentimentDetectionJobs"),
            headers=[param[XAmzTarget69OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_targeted_sentiment_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def list_topics_detection_jobs(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTopicsDetectionJobsErrorBody]:
        """Gets a list of the topic detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTopicsDetectionJobs"),
            headers=[param[XAmzTarget73OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_topics_detection_jobs_error_mapper,
            request_options=request_options,
        )

    def put_resource_policy(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutResourcePolicyErrorBody]:
        """Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another
        Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their
        account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutResourcePolicy"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )

    def start_document_classification_job(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartDocumentClassificationJobErrorBody]:
        """Starts an asynchronous document classification job using a custom classification model. Use the
        DescribeDocumentClassificationJob operation to track the progress of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartDocumentClassificationJob"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_document_classification_job_error_mapper,
            request_options=request_options,
        )

    def start_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartDominantLanguageDetectionJobErrorBody]:
        """Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to
        track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_entities_detection_job(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartEntitiesDetectionJobErrorBody]:
        """Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the
        status of a job. This API can be used for either standard entity detection or custom entity recognition. In
        order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to
        provide access to the recognizer being used to detect the custom entity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartEntitiesDetectionJob"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_events_detection_job(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartEventsDetectionJobErrorBody]:
        """Starts an asynchronous event detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartEventsDetectionJob"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_events_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_flywheel_iteration(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartFlywheelIterationErrorBody]:
        """Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more
        information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFlywheelIteration"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_flywheel_iteration_error_mapper,
            request_options=request_options,
        )

    def start_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartKeyPhrasesDetectionJobErrorBody]:
        """Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartPiiEntitiesDetectionJobErrorBody]:
        """Starts an asynchronous PII entity detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartPiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_sentiment_detection_job(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSentimentDetectionJobErrorBody]:
        """Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSentimentDetectionJob"),
            headers=[param[XAmzTarget66OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartTargetedSentimentDetectionJobErrorBody]:
        """Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
        DescribeTargetedSentimentDetectionJob operation to track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget70OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def start_topics_detection_job(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartTopicsDetectionJobErrorBody]:
        """Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status
        of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTopicsDetectionJob"),
            headers=[param[XAmzTarget74OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_topics_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopDominantLanguageDetectionJobErrorBody]:
        """Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_entities_detection_job(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopEntitiesDetectionJobErrorBody]:
        """Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopEntitiesDetectionJob"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_events_detection_job(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopEventsDetectionJobErrorBody]:
        """Stops an events detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopEventsDetectionJob"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_events_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopKeyPhrasesDetectionJobErrorBody]:
        """Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopPiiEntitiesDetectionJobErrorBody]:
        """Stops a PII entities detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopPiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget63OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_sentiment_detection_job(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopSentimentDetectionJobErrorBody]:
        """Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopSentimentDetectionJob"),
            headers=[param[XAmzTarget67OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTargetedSentimentDetectionJobErrorBody]:
        """Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget71OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    def stop_training_document_classifier(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTrainingDocumentClassifierErrorBody]:
        """Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTrainingDocumentClassifier"),
            headers=[param[XAmzTarget80OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_training_document_classifier_error_mapper,
            request_options=request_options,
        )

    def stop_training_entity_recognizer(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTrainingEntityRecognizerErrorBody]:
        """Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTrainingEntityRecognizer"),
            headers=[param[XAmzTarget81OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_training_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a
        metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
        resource to indicate its use by the sales department.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget82OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes a specific tag associated with an Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget83OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def update_endpoint(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateEndpointErrorBody]:
        """Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateEndpoint"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_endpoint_error_mapper,
            request_options=request_options,
        )

    def update_flywheel(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateFlywheelErrorBody]:
        """Update the configuration information for an existing flywheel.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFlywheel"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_flywheel_error_mapper,
            request_options=request_options,
        )


class AsyncAmazonComprehendWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_detect_dominant_language(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectDominantLanguageErrorBody]:
        """Determines the dominant language of the input text for a batch of documents. For a list of languages that
        Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectDominantLanguage"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_dominant_language_error_mapper,
            request_options=request_options,
        )

    async def batch_detect_entities(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectEntitiesErrorBody]:
        """Inspects the text of a batch of documents for named entities and returns information about them. For more
        information about named entities, see Entities in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectEntities"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_entities_error_mapper,
            request_options=request_options,
        )

    async def batch_detect_key_phrases(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectKeyPhrasesErrorBody]:
        """Detects the key noun phrases found in a batch of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectKeyPhrases"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_key_phrases_error_mapper,
            request_options=request_options,
        )

    async def batch_detect_sentiment(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectSentimentErrorBody]:
        """Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED,
        or NEGATIVE, in each one.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectSentiment"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_sentiment_error_mapper,
            request_options=request_options,
        )

    async def batch_detect_syntax(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectSyntaxErrorBody]:
        """Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and
        returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectSyntax"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_syntax_error_mapper,
            request_options=request_options,
        )

    async def batch_detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchDetectTargetedSentimentErrorBody]:
        """Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.
        For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDetectTargetedSentiment"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_detect_targeted_sentiment_error_mapper,
            request_options=request_options,
        )

    async def classify_document(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ClassifyDocumentErrorBody]:
        """Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the
        following model types: Custom classifier - a custom model that you have created and trained. For input, you can
        provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more
        information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier -
        Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For
        input, you provide English plain text input. For prompt safety classification, the response includes only the
        Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the
        Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document,
        the API response includes an Errors field that describes the errors. If the system detects a document-level
        error in your input document, the API returns an InvalidRequestException error response. For details about this
        exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ClassifyDocument"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=classify_document_error_mapper,
            request_options=request_options,
        )

    async def contains_pii_entities(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContainsPiiEntitiesErrorBody]:
        """Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of
        identified PII entity types such as name, address, bank account number, or phone number.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ContainsPiiEntities"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=contains_pii_entities_error_mapper,
            request_options=request_options,
        )

    async def create_dataset(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """Creates a dataset to upload training or test data for a model associated with a flywheel. For more
        information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDataset"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    async def create_document_classifier(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDocumentClassifierErrorBody]:
        """Creates a new document classifier that you can use to categorize documents. To create a classifier, you
        provide a set of training documents that are labeled with the categories that you want to use. For more
        information, see Training classifier models in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDocumentClassifier"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_document_classifier_error_mapper,
            request_options=request_options,
        )

    async def create_endpoint(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateEndpointErrorBody]:
        """Creates a model-specific endpoint for synchronous inference for a previously trained custom model For
        information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateEndpoint"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_endpoint_error_mapper,
            request_options=request_options,
        )

    async def create_entity_recognizer(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateEntityRecognizerErrorBody]:
        """Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted,
        you can check job status using the DescribeEntityRecognizer API.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateEntityRecognizer"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    async def create_flywheel(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateFlywheelErrorBody]:
        """A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom
        classification or custom entity recognition. You can create a flywheel to start with an existing trained model,
        or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in
        your account. The data lake holds the training data and test data for all versions of the model. To use a
        flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
        training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to
        provide a dataset for training data (and optional test data) when you create the flywheel. For more information
        about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFlywheel"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_flywheel_error_mapper,
            request_options=request_options,
        )

    async def delete_document_classifier(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentClassifierErrorBody]:
        """Deletes a previously created document classifier Only those classifiers that are in terminated states
        (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException
        will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then
        removed by a background job. Once removed, the classifier disappears from your account and is no longer
        available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDocumentClassifier"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_document_classifier_error_mapper,
            request_options=request_options,
        )

    async def delete_endpoint(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEndpointErrorBody]:
        """Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in
        order for the model to be deleted. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteEndpoint"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_endpoint_error_mapper,
            request_options=request_options,
        )

    async def delete_entity_recognizer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityRecognizerErrorBody]:
        """Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will
        be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an
        asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job.
        Once removed, the recognizer disappears from your account and is no longer available for use.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteEntityRecognizer"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    async def delete_flywheel(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFlywheelErrorBody]:
        """Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the
        model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon
        Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFlywheel"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_flywheel_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_policy(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourcePolicyErrorBody]:
        """Deletes a resource-based policy that is attached to a custom model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourcePolicy"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def describe_dataset(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """Returns information about the dataset that you specify. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDataset"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )

    async def describe_document_classification_job(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDocumentClassificationJobErrorBody]:
        """Gets the properties associated with a document classification job. Use this operation to get the status of a
        classification job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDocumentClassificationJob"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_document_classification_job_error_mapper,
            request_options=request_options,
        )

    async def describe_document_classifier(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDocumentClassifierErrorBody]:
        """Gets the properties associated with a document classifier.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDocumentClassifier"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_document_classifier_error_mapper,
            request_options=request_options,
        )

    async def describe_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDominantLanguageDetectionJobErrorBody]:
        """Gets the properties associated with a dominant language detection job. Use this operation to get the status
        of a detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_endpoint(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEndpointErrorBody]:
        """Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
        For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEndpoint"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_endpoint_error_mapper,
            request_options=request_options,
        )

    async def describe_entities_detection_job(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEntitiesDetectionJobErrorBody]:
        """Gets the properties associated with an entities detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEntitiesDetectionJob"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_entity_recognizer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEntityRecognizerErrorBody]:
        """Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer
        metadata, metrics, and so on.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEntityRecognizer"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    async def describe_events_detection_job(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeEventsDetectionJobErrorBody]:
        """Gets the status and details of an events detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeEventsDetectionJob"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_events_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_flywheel(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFlywheelErrorBody]:
        """Provides configuration information about the flywheel. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFlywheel"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_flywheel_error_mapper,
            request_options=request_options,
        )

    async def describe_flywheel_iteration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFlywheelIterationErrorBody]:
        """Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see
        Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFlywheelIteration"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_flywheel_iteration_error_mapper,
            request_options=request_options,
        )

    async def describe_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeKeyPhrasesDetectionJobErrorBody]:
        """Gets the properties associated with a key phrases detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribePiiEntitiesDetectionJobErrorBody]:
        """Gets the properties associated with a PII entities detection job. For example, you can use this operation to
        get the job status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribePiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_resource_policy(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeResourcePolicyErrorBody]:
        """Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of
        the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeResourcePolicy"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def describe_sentiment_detection_job(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSentimentDetectionJobErrorBody]:
        """Gets the properties associated with a sentiment detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSentimentDetectionJob"),
            headers=[param[XAmzTarget64OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTargetedSentimentDetectionJobErrorBody]:
        """Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status
        of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget68OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def describe_topics_detection_job(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTopicsDetectionJobErrorBody]:
        """Gets the properties associated with a topic detection job. Use this operation to get the status of a
        detection job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTopicsDetectionJob"),
            headers=[param[XAmzTarget72OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_topics_detection_job_error_mapper,
            request_options=request_options,
        )

    async def detect_dominant_language(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectDominantLanguageErrorBody]:
        """Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can
        detect, see Amazon Comprehend Supported Languages.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectDominantLanguage"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_dominant_language_error_mapper,
            request_options=request_options,
        )

    async def detect_entities(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectEntitiesErrorBody]:
        """Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have
        a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as
        the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you
        use a custom entity recognition model, you can input plain text or you can upload a single-page input document
        (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API
        response includes an entry in Errors for each error. If the system detects a document-level error in your input
        document, the API returns an InvalidRequestException error response. For details about this exception, see
        Errors in semi-structured documents in the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectEntities"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_entities_error_mapper,
            request_options=request_options,
        )

    async def detect_key_phrases(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectKeyPhrasesErrorBody]:
        """Detects the key noun phrases found in the text.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectKeyPhrases"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_key_phrases_error_mapper,
            request_options=request_options,
        )

    async def detect_pii_entities(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectPiiEntitiesErrorBody]:
        """Inspects the input text for entities that contain personally identifiable information (PII) and returns
        information about them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectPiiEntities"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_pii_entities_error_mapper,
            request_options=request_options,
        )

    async def detect_sentiment(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectSentimentErrorBody]:
        """Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSentiment"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_sentiment_error_mapper,
            request_options=request_options,
        )

    async def detect_syntax(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectSyntaxErrorBody]:
        """Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in
        the Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectSyntax"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_syntax_error_mapper,
            request_options=request_options,
        )

    async def detect_targeted_sentiment(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetectTargetedSentimentErrorBody]:
        """Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more
        information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectTargetedSentiment"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_targeted_sentiment_error_mapper,
            request_options=request_options,
        )

    async def import_model(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportModelErrorBody]:
        """Creates a new custom model that replicates a source custom model that you import. The source model can be in
        your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account,
        then it must have a resource-based policy that authorizes you to import it. The source model must be in the same
        Amazon Web Services Region that you're using when you import. You can't import a model that's in a different
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportModel"),
            headers=[param[XAmzTarget75OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=import_model_error_mapper,
            request_options=request_options,
        )

    async def list_datasets(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetsErrorBody]:
        """List the datasets that you have configured in this Region. For more information about datasets, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasets"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_datasets_error_mapper,
            request_options=request_options,
        )

    async def list_document_classification_jobs(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassificationJobsErrorBody]:
        """Gets a list of the documentation classification jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassificationJobs"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_document_classification_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_document_classifier_summaries(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassifierSummariesErrorBody]:
        """Gets a list of summaries of the document classifiers that you have created

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassifierSummaries"),
            headers=[param[XAmzTarget76OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_document_classifier_summaries_error_mapper,
            request_options=request_options,
        )

    async def list_document_classifiers(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDocumentClassifiersErrorBody]:
        """Gets a list of the document classifiers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDocumentClassifiers"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_document_classifiers_error_mapper,
            request_options=request_options,
        )

    async def list_dominant_language_detection_jobs(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDominantLanguageDetectionJobsErrorBody]:
        """Gets a list of the dominant language detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDominantLanguageDetectionJobs"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dominant_language_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_endpoints(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEndpointsErrorBody]:
        """Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing
        endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEndpoints"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_endpoints_error_mapper,
            request_options=request_options,
        )

    async def list_entities_detection_jobs(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntitiesDetectionJobsErrorBody]:
        """Gets a list of the entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntitiesDetectionJobs"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_entities_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_entity_recognizer_summaries(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntityRecognizerSummariesErrorBody]:
        """Gets a list of summaries for the entity recognizers that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntityRecognizerSummaries"),
            headers=[param[XAmzTarget77OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_entity_recognizer_summaries_error_mapper,
            request_options=request_options,
        )

    async def list_entity_recognizers(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEntityRecognizersErrorBody]:
        """Gets a list of the properties of all entity recognizers that you created, including recognizers currently in
        training. Allows you to filter the list of recognizers based on criteria such as status and submission time.
        This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the
        list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEntityRecognizers"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_entity_recognizers_error_mapper,
            request_options=request_options,
        )

    async def list_events_detection_jobs(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListEventsDetectionJobsErrorBody]:
        """Gets a list of the events detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListEventsDetectionJobs"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_events_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_flywheel_iteration_history(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFlywheelIterationHistoryErrorBody]:
        """Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel
        overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFlywheelIterationHistory"),
            headers=[param[XAmzTarget78OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_flywheel_iteration_history_error_mapper,
            request_options=request_options,
        )

    async def list_flywheels(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFlywheelsErrorBody]:
        """Gets a list of the flywheels that you have created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFlywheels"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_flywheels_error_mapper,
            request_options=request_options,
        )

    async def list_key_phrases_detection_jobs(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListKeyPhrasesDetectionJobsErrorBody]:
        """Get a list of key phrase detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListKeyPhrasesDetectionJobs"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_key_phrases_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_pii_entities_detection_jobs(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListPiiEntitiesDetectionJobsErrorBody]:
        """Gets a list of the PII entity detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListPiiEntitiesDetectionJobs"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_pii_entities_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSentimentDetectionJobsErrorBody]:
        """Gets a list of sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSentimentDetectionJobs"),
            headers=[param[XAmzTarget65OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_sentiment_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists all tags associated with a given Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget79OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def list_targeted_sentiment_detection_jobs(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTargetedSentimentDetectionJobsErrorBody]:
        """Gets a list of targeted sentiment detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTargetedSentimentDetectionJobs"),
            headers=[param[XAmzTarget69OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_targeted_sentiment_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_topics_detection_jobs(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTopicsDetectionJobsErrorBody]:
        """Gets a list of the topic detection jobs that you have submitted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTopicsDetectionJobs"),
            headers=[param[XAmzTarget73OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_topics_detection_jobs_error_mapper,
            request_options=request_options,
        )

    async def put_resource_policy(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutResourcePolicyErrorBody]:
        """Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another
        Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their
        account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutResourcePolicy"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def start_document_classification_job(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartDocumentClassificationJobErrorBody]:
        """Starts an asynchronous document classification job using a custom classification model. Use the
        DescribeDocumentClassificationJob operation to track the progress of the job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartDocumentClassificationJob"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_document_classification_job_error_mapper,
            request_options=request_options,
        )

    async def start_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartDominantLanguageDetectionJobErrorBody]:
        """Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to
        track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_entities_detection_job(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartEntitiesDetectionJobErrorBody]:
        """Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the
        status of a job. This API can be used for either standard entity detection or custom entity recognition. In
        order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to
        provide access to the recognizer being used to detect the custom entity.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartEntitiesDetectionJob"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_events_detection_job(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartEventsDetectionJobErrorBody]:
        """Starts an asynchronous event detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartEventsDetectionJob"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_events_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_flywheel_iteration(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartFlywheelIterationErrorBody]:
        """Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more
        information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartFlywheelIteration"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_flywheel_iteration_error_mapper,
            request_options=request_options,
        )

    async def start_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartKeyPhrasesDetectionJobErrorBody]:
        """Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartPiiEntitiesDetectionJobErrorBody]:
        """Starts an asynchronous PII entity detection job for a collection of documents.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartPiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_sentiment_detection_job(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartSentimentDetectionJobErrorBody]:
        """Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the
        status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartSentimentDetectionJob"),
            headers=[param[XAmzTarget66OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartTargetedSentimentDetectionJobErrorBody]:
        """Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
        DescribeTargetedSentimentDetectionJob operation to track the status of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget70OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def start_topics_detection_job(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartTopicsDetectionJobErrorBody]:
        """Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status
        of a job.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTopicsDetectionJob"),
            headers=[param[XAmzTarget74OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_topics_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_dominant_language_detection_job(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopDominantLanguageDetectionJobErrorBody]:
        """Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopDominantLanguageDetectionJob"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_dominant_language_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_entities_detection_job(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopEntitiesDetectionJobErrorBody]:
        """Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopEntitiesDetectionJob"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_events_detection_job(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopEventsDetectionJobErrorBody]:
        """Stops an events detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopEventsDetectionJob"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_events_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_key_phrases_detection_job(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopKeyPhrasesDetectionJobErrorBody]:
        """Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED
        or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400
        Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopKeyPhrasesDetectionJob"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_key_phrases_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_pii_entities_detection_job(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopPiiEntitiesDetectionJobErrorBody]:
        """Stops a PII entities detection job in progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopPiiEntitiesDetectionJob"),
            headers=[param[XAmzTarget63OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_pii_entities_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_sentiment_detection_job(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopSentimentDetectionJobErrorBody]:
        """Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopSentimentDetectionJob"),
            headers=[param[XAmzTarget67OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_targeted_sentiment_detection_job(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTargetedSentimentDetectionJobErrorBody]:
        """Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for
        termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into
        the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the
        COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a
        400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output
        location.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTargetedSentimentDetectionJob"),
            headers=[param[XAmzTarget71OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_targeted_sentiment_detection_job_error_mapper,
            request_options=request_options,
        )

    async def stop_training_document_classifier(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTrainingDocumentClassifierErrorBody]:
        """Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTrainingDocumentClassifier"),
            headers=[param[XAmzTarget80OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_training_document_classifier_error_mapper,
            request_options=request_options,
        )

    async def stop_training_entity_recognizer(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopTrainingEntityRecognizerErrorBody]:
        """Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is
        marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be
        stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and
        the service sends back an HTTP 200 response with an empty HTTP body.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopTrainingEntityRecognizer"),
            headers=[param[XAmzTarget81OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_training_entity_recognizer_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a
        metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
        resource to indicate its use by the sales department.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget82OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes a specific tag associated with an Amazon Comprehend resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget83OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def update_endpoint(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateEndpointErrorBody]:
        """Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateEndpoint"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_endpoint_error_mapper,
            request_options=request_options,
        )

    async def update_flywheel(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateFlywheelErrorBody]:
        """Update the configuration information for an existing flywheel.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFlywheel"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_flywheel_error_mapper,
            request_options=request_options,
        )
