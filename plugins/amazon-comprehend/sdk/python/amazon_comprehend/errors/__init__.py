from .batch_detect_dominant_language_error import (
    BatchDetectDominantLanguageErrorBody,
    batch_detect_dominant_language_error_mapper,
)
from .batch_detect_entities_error import BatchDetectEntitiesErrorBody, batch_detect_entities_error_mapper
from .batch_detect_key_phrases_error import BatchDetectKeyPhrasesErrorBody, batch_detect_key_phrases_error_mapper
from .batch_detect_sentiment_error import BatchDetectSentimentErrorBody, batch_detect_sentiment_error_mapper
from .batch_detect_syntax_error import BatchDetectSyntaxErrorBody, batch_detect_syntax_error_mapper
from .batch_detect_targeted_sentiment_error import (
    BatchDetectTargetedSentimentErrorBody,
    batch_detect_targeted_sentiment_error_mapper,
)
from .classify_document2_error import ClassifyDocument2ErrorBody, classify_document2_error_mapper
from .classify_document_error import ClassifyDocumentErrorBody, classify_document_error_mapper
from .contains_pii_entities2_error import ContainsPiiEntities2ErrorBody, contains_pii_entities2_error_mapper
from .contains_pii_entities_error import ContainsPiiEntitiesErrorBody, contains_pii_entities_error_mapper
from .create_dataset_error import CreateDatasetErrorBody, create_dataset_error_mapper
from .create_document_classifier_error import CreateDocumentClassifierErrorBody, create_document_classifier_error_mapper
from .create_endpoint_error import CreateEndpointErrorBody, create_endpoint_error_mapper
from .create_entity_recognizer_error import CreateEntityRecognizerErrorBody, create_entity_recognizer_error_mapper
from .create_flywheel_error import CreateFlywheelErrorBody, create_flywheel_error_mapper
from .delete_document_classifier_error import DeleteDocumentClassifierErrorBody, delete_document_classifier_error_mapper
from .delete_endpoint_error import DeleteEndpointErrorBody, delete_endpoint_error_mapper
from .delete_entity_recognizer_error import DeleteEntityRecognizerErrorBody, delete_entity_recognizer_error_mapper
from .delete_flywheel_error import DeleteFlywheelErrorBody, delete_flywheel_error_mapper
from .delete_resource_policy_error import DeleteResourcePolicyErrorBody, delete_resource_policy_error_mapper
from .describe_dataset_error import DescribeDatasetErrorBody, describe_dataset_error_mapper
from .describe_document_classification_job_error import (
    DescribeDocumentClassificationJobErrorBody,
    describe_document_classification_job_error_mapper,
)
from .describe_document_classifier_error import (
    DescribeDocumentClassifierErrorBody,
    describe_document_classifier_error_mapper,
)
from .describe_dominant_language_detection_job_error import (
    DescribeDominantLanguageDetectionJobErrorBody,
    describe_dominant_language_detection_job_error_mapper,
)
from .describe_endpoint_error import DescribeEndpointErrorBody, describe_endpoint_error_mapper
from .describe_entities_detection_job_error import (
    DescribeEntitiesDetectionJobErrorBody,
    describe_entities_detection_job_error_mapper,
)
from .describe_entity_recognizer_error import DescribeEntityRecognizerErrorBody, describe_entity_recognizer_error_mapper
from .describe_events_detection_job_error import (
    DescribeEventsDetectionJobErrorBody,
    describe_events_detection_job_error_mapper,
)
from .describe_flywheel_error import DescribeFlywheelErrorBody, describe_flywheel_error_mapper
from .describe_flywheel_iteration_error import (
    DescribeFlywheelIterationErrorBody,
    describe_flywheel_iteration_error_mapper,
)
from .describe_key_phrases_detection_job_error import (
    DescribeKeyPhrasesDetectionJobErrorBody,
    describe_key_phrases_detection_job_error_mapper,
)
from .describe_pii_entities_detection_job_error import (
    DescribePiiEntitiesDetectionJobErrorBody,
    describe_pii_entities_detection_job_error_mapper,
)
from .describe_resource_policy_error import DescribeResourcePolicyErrorBody, describe_resource_policy_error_mapper
from .describe_sentiment_detection_job_error import (
    DescribeSentimentDetectionJobErrorBody,
    describe_sentiment_detection_job_error_mapper,
)
from .describe_targeted_sentiment_detection_job_error import (
    DescribeTargetedSentimentDetectionJobErrorBody,
    describe_targeted_sentiment_detection_job_error_mapper,
)
from .describe_topics_detection_job_error import (
    DescribeTopicsDetectionJobErrorBody,
    describe_topics_detection_job_error_mapper,
)
from .detect_dominant_language2_error import DetectDominantLanguage2ErrorBody, detect_dominant_language2_error_mapper
from .detect_dominant_language_error import DetectDominantLanguageErrorBody, detect_dominant_language_error_mapper
from .detect_entities2_error import DetectEntities2ErrorBody, detect_entities2_error_mapper
from .detect_entities_error import DetectEntitiesErrorBody, detect_entities_error_mapper
from .detect_key_phrases2_error import DetectKeyPhrases2ErrorBody, detect_key_phrases2_error_mapper
from .detect_key_phrases_error import DetectKeyPhrasesErrorBody, detect_key_phrases_error_mapper
from .detect_pii_entities2_error import DetectPiiEntities2ErrorBody, detect_pii_entities2_error_mapper
from .detect_pii_entities_error import DetectPiiEntitiesErrorBody, detect_pii_entities_error_mapper
from .detect_sentiment2_error import DetectSentiment2ErrorBody, detect_sentiment2_error_mapper
from .detect_sentiment_error import DetectSentimentErrorBody, detect_sentiment_error_mapper
from .detect_syntax2_error import DetectSyntax2ErrorBody, detect_syntax2_error_mapper
from .detect_syntax_error import DetectSyntaxErrorBody, detect_syntax_error_mapper
from .detect_targeted_sentiment2_error import DetectTargetedSentiment2ErrorBody, detect_targeted_sentiment2_error_mapper
from .detect_targeted_sentiment_error import DetectTargetedSentimentErrorBody, detect_targeted_sentiment_error_mapper
from .detect_toxic_content_error import DetectToxicContentErrorBody, detect_toxic_content_error_mapper
from .import_model_error import ImportModelErrorBody, import_model_error_mapper
from .list_datasets_error import ListDatasetsErrorBody, list_datasets_error_mapper
from .list_document_classification_jobs_error import (
    ListDocumentClassificationJobsErrorBody,
    list_document_classification_jobs_error_mapper,
)
from .list_document_classifier_summaries_error import (
    ListDocumentClassifierSummariesErrorBody,
    list_document_classifier_summaries_error_mapper,
)
from .list_document_classifiers_error import ListDocumentClassifiersErrorBody, list_document_classifiers_error_mapper
from .list_dominant_language_detection_jobs_error import (
    ListDominantLanguageDetectionJobsErrorBody,
    list_dominant_language_detection_jobs_error_mapper,
)
from .list_endpoints_error import ListEndpointsErrorBody, list_endpoints_error_mapper
from .list_entities_detection_jobs_error import (
    ListEntitiesDetectionJobsErrorBody,
    list_entities_detection_jobs_error_mapper,
)
from .list_entity_recognizer_summaries_error import (
    ListEntityRecognizerSummariesErrorBody,
    list_entity_recognizer_summaries_error_mapper,
)
from .list_entity_recognizers_error import ListEntityRecognizersErrorBody, list_entity_recognizers_error_mapper
from .list_events_detection_jobs_error import ListEventsDetectionJobsErrorBody, list_events_detection_jobs_error_mapper
from .list_flywheel_iteration_history_error import (
    ListFlywheelIterationHistoryErrorBody,
    list_flywheel_iteration_history_error_mapper,
)
from .list_flywheels_error import ListFlywheelsErrorBody, list_flywheels_error_mapper
from .list_key_phrases_detection_jobs_error import (
    ListKeyPhrasesDetectionJobsErrorBody,
    list_key_phrases_detection_jobs_error_mapper,
)
from .list_pii_entities_detection_jobs_error import (
    ListPiiEntitiesDetectionJobsErrorBody,
    list_pii_entities_detection_jobs_error_mapper,
)
from .list_sentiment_detection_jobs_error import (
    ListSentimentDetectionJobsErrorBody,
    list_sentiment_detection_jobs_error_mapper,
)
from .list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from .list_targeted_sentiment_detection_jobs_error import (
    ListTargetedSentimentDetectionJobsErrorBody,
    list_targeted_sentiment_detection_jobs_error_mapper,
)
from .list_topics_detection_jobs_error import ListTopicsDetectionJobsErrorBody, list_topics_detection_jobs_error_mapper
from .put_resource_policy_error import PutResourcePolicyErrorBody, put_resource_policy_error_mapper
from .start_document_classification_job_error import (
    StartDocumentClassificationJobErrorBody,
    start_document_classification_job_error_mapper,
)
from .start_dominant_language_detection_job_error import (
    StartDominantLanguageDetectionJobErrorBody,
    start_dominant_language_detection_job_error_mapper,
)
from .start_entities_detection_job_error import (
    StartEntitiesDetectionJobErrorBody,
    start_entities_detection_job_error_mapper,
)
from .start_events_detection_job_error import StartEventsDetectionJobErrorBody, start_events_detection_job_error_mapper
from .start_flywheel_iteration_error import StartFlywheelIterationErrorBody, start_flywheel_iteration_error_mapper
from .start_key_phrases_detection_job_error import (
    StartKeyPhrasesDetectionJobErrorBody,
    start_key_phrases_detection_job_error_mapper,
)
from .start_pii_entities_detection_job_error import (
    StartPiiEntitiesDetectionJobErrorBody,
    start_pii_entities_detection_job_error_mapper,
)
from .start_sentiment_detection_job_error import (
    StartSentimentDetectionJobErrorBody,
    start_sentiment_detection_job_error_mapper,
)
from .start_targeted_sentiment_detection_job_error import (
    StartTargetedSentimentDetectionJobErrorBody,
    start_targeted_sentiment_detection_job_error_mapper,
)
from .start_topics_detection_job_error import StartTopicsDetectionJobErrorBody, start_topics_detection_job_error_mapper
from .stop_dominant_language_detection_job_error import (
    StopDominantLanguageDetectionJobErrorBody,
    stop_dominant_language_detection_job_error_mapper,
)
from .stop_entities_detection_job_error import (
    StopEntitiesDetectionJobErrorBody,
    stop_entities_detection_job_error_mapper,
)
from .stop_events_detection_job_error import StopEventsDetectionJobErrorBody, stop_events_detection_job_error_mapper
from .stop_key_phrases_detection_job_error import (
    StopKeyPhrasesDetectionJobErrorBody,
    stop_key_phrases_detection_job_error_mapper,
)
from .stop_pii_entities_detection_job_error import (
    StopPiiEntitiesDetectionJobErrorBody,
    stop_pii_entities_detection_job_error_mapper,
)
from .stop_sentiment_detection_job_error import (
    StopSentimentDetectionJobErrorBody,
    stop_sentiment_detection_job_error_mapper,
)
from .stop_targeted_sentiment_detection_job_error import (
    StopTargetedSentimentDetectionJobErrorBody,
    stop_targeted_sentiment_detection_job_error_mapper,
)
from .stop_training_document_classifier_error import (
    StopTrainingDocumentClassifierErrorBody,
    stop_training_document_classifier_error_mapper,
)
from .stop_training_entity_recognizer_error import (
    StopTrainingEntityRecognizerErrorBody,
    stop_training_entity_recognizer_error_mapper,
)
from .tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from .untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from .update_endpoint_error import UpdateEndpointErrorBody, update_endpoint_error_mapper
from .update_flywheel_error import UpdateFlywheelErrorBody, update_flywheel_error_mapper

__all__ = [
    "BatchDetectDominantLanguageErrorBody",
    "BatchDetectEntitiesErrorBody",
    "BatchDetectKeyPhrasesErrorBody",
    "BatchDetectSentimentErrorBody",
    "BatchDetectSyntaxErrorBody",
    "BatchDetectTargetedSentimentErrorBody",
    "ClassifyDocument2ErrorBody",
    "ClassifyDocumentErrorBody",
    "ContainsPiiEntities2ErrorBody",
    "ContainsPiiEntitiesErrorBody",
    "CreateDatasetErrorBody",
    "CreateDocumentClassifierErrorBody",
    "CreateEndpointErrorBody",
    "CreateEntityRecognizerErrorBody",
    "CreateFlywheelErrorBody",
    "DeleteDocumentClassifierErrorBody",
    "DeleteEndpointErrorBody",
    "DeleteEntityRecognizerErrorBody",
    "DeleteFlywheelErrorBody",
    "DeleteResourcePolicyErrorBody",
    "DescribeDatasetErrorBody",
    "DescribeDocumentClassificationJobErrorBody",
    "DescribeDocumentClassifierErrorBody",
    "DescribeDominantLanguageDetectionJobErrorBody",
    "DescribeEndpointErrorBody",
    "DescribeEntitiesDetectionJobErrorBody",
    "DescribeEntityRecognizerErrorBody",
    "DescribeEventsDetectionJobErrorBody",
    "DescribeFlywheelErrorBody",
    "DescribeFlywheelIterationErrorBody",
    "DescribeKeyPhrasesDetectionJobErrorBody",
    "DescribePiiEntitiesDetectionJobErrorBody",
    "DescribeResourcePolicyErrorBody",
    "DescribeSentimentDetectionJobErrorBody",
    "DescribeTargetedSentimentDetectionJobErrorBody",
    "DescribeTopicsDetectionJobErrorBody",
    "DetectDominantLanguage2ErrorBody",
    "DetectDominantLanguageErrorBody",
    "DetectEntities2ErrorBody",
    "DetectEntitiesErrorBody",
    "DetectKeyPhrases2ErrorBody",
    "DetectKeyPhrasesErrorBody",
    "DetectPiiEntities2ErrorBody",
    "DetectPiiEntitiesErrorBody",
    "DetectSentiment2ErrorBody",
    "DetectSentimentErrorBody",
    "DetectSyntax2ErrorBody",
    "DetectSyntaxErrorBody",
    "DetectTargetedSentiment2ErrorBody",
    "DetectTargetedSentimentErrorBody",
    "DetectToxicContentErrorBody",
    "ImportModelErrorBody",
    "ListDatasetsErrorBody",
    "ListDocumentClassificationJobsErrorBody",
    "ListDocumentClassifierSummariesErrorBody",
    "ListDocumentClassifiersErrorBody",
    "ListDominantLanguageDetectionJobsErrorBody",
    "ListEndpointsErrorBody",
    "ListEntitiesDetectionJobsErrorBody",
    "ListEntityRecognizerSummariesErrorBody",
    "ListEntityRecognizersErrorBody",
    "ListEventsDetectionJobsErrorBody",
    "ListFlywheelIterationHistoryErrorBody",
    "ListFlywheelsErrorBody",
    "ListKeyPhrasesDetectionJobsErrorBody",
    "ListPiiEntitiesDetectionJobsErrorBody",
    "ListSentimentDetectionJobsErrorBody",
    "ListTagsForResourceErrorBody",
    "ListTargetedSentimentDetectionJobsErrorBody",
    "ListTopicsDetectionJobsErrorBody",
    "PutResourcePolicyErrorBody",
    "StartDocumentClassificationJobErrorBody",
    "StartDominantLanguageDetectionJobErrorBody",
    "StartEntitiesDetectionJobErrorBody",
    "StartEventsDetectionJobErrorBody",
    "StartFlywheelIterationErrorBody",
    "StartKeyPhrasesDetectionJobErrorBody",
    "StartPiiEntitiesDetectionJobErrorBody",
    "StartSentimentDetectionJobErrorBody",
    "StartTargetedSentimentDetectionJobErrorBody",
    "StartTopicsDetectionJobErrorBody",
    "StopDominantLanguageDetectionJobErrorBody",
    "StopEntitiesDetectionJobErrorBody",
    "StopEventsDetectionJobErrorBody",
    "StopKeyPhrasesDetectionJobErrorBody",
    "StopPiiEntitiesDetectionJobErrorBody",
    "StopSentimentDetectionJobErrorBody",
    "StopTargetedSentimentDetectionJobErrorBody",
    "StopTrainingDocumentClassifierErrorBody",
    "StopTrainingEntityRecognizerErrorBody",
    "TagResourceErrorBody",
    "UntagResourceErrorBody",
    "UpdateEndpointErrorBody",
    "UpdateFlywheelErrorBody",
    "batch_detect_dominant_language_error_mapper",
    "batch_detect_entities_error_mapper",
    "batch_detect_key_phrases_error_mapper",
    "batch_detect_sentiment_error_mapper",
    "batch_detect_syntax_error_mapper",
    "batch_detect_targeted_sentiment_error_mapper",
    "classify_document2_error_mapper",
    "classify_document_error_mapper",
    "contains_pii_entities2_error_mapper",
    "contains_pii_entities_error_mapper",
    "create_dataset_error_mapper",
    "create_document_classifier_error_mapper",
    "create_endpoint_error_mapper",
    "create_entity_recognizer_error_mapper",
    "create_flywheel_error_mapper",
    "delete_document_classifier_error_mapper",
    "delete_endpoint_error_mapper",
    "delete_entity_recognizer_error_mapper",
    "delete_flywheel_error_mapper",
    "delete_resource_policy_error_mapper",
    "describe_dataset_error_mapper",
    "describe_document_classification_job_error_mapper",
    "describe_document_classifier_error_mapper",
    "describe_dominant_language_detection_job_error_mapper",
    "describe_endpoint_error_mapper",
    "describe_entities_detection_job_error_mapper",
    "describe_entity_recognizer_error_mapper",
    "describe_events_detection_job_error_mapper",
    "describe_flywheel_error_mapper",
    "describe_flywheel_iteration_error_mapper",
    "describe_key_phrases_detection_job_error_mapper",
    "describe_pii_entities_detection_job_error_mapper",
    "describe_resource_policy_error_mapper",
    "describe_sentiment_detection_job_error_mapper",
    "describe_targeted_sentiment_detection_job_error_mapper",
    "describe_topics_detection_job_error_mapper",
    "detect_dominant_language2_error_mapper",
    "detect_dominant_language_error_mapper",
    "detect_entities2_error_mapper",
    "detect_entities_error_mapper",
    "detect_key_phrases2_error_mapper",
    "detect_key_phrases_error_mapper",
    "detect_pii_entities2_error_mapper",
    "detect_pii_entities_error_mapper",
    "detect_sentiment2_error_mapper",
    "detect_sentiment_error_mapper",
    "detect_syntax2_error_mapper",
    "detect_syntax_error_mapper",
    "detect_targeted_sentiment2_error_mapper",
    "detect_targeted_sentiment_error_mapper",
    "detect_toxic_content_error_mapper",
    "import_model_error_mapper",
    "list_datasets_error_mapper",
    "list_document_classification_jobs_error_mapper",
    "list_document_classifier_summaries_error_mapper",
    "list_document_classifiers_error_mapper",
    "list_dominant_language_detection_jobs_error_mapper",
    "list_endpoints_error_mapper",
    "list_entities_detection_jobs_error_mapper",
    "list_entity_recognizer_summaries_error_mapper",
    "list_entity_recognizers_error_mapper",
    "list_events_detection_jobs_error_mapper",
    "list_flywheel_iteration_history_error_mapper",
    "list_flywheels_error_mapper",
    "list_key_phrases_detection_jobs_error_mapper",
    "list_pii_entities_detection_jobs_error_mapper",
    "list_sentiment_detection_jobs_error_mapper",
    "list_tags_for_resource_error_mapper",
    "list_targeted_sentiment_detection_jobs_error_mapper",
    "list_topics_detection_jobs_error_mapper",
    "put_resource_policy_error_mapper",
    "start_document_classification_job_error_mapper",
    "start_dominant_language_detection_job_error_mapper",
    "start_entities_detection_job_error_mapper",
    "start_events_detection_job_error_mapper",
    "start_flywheel_iteration_error_mapper",
    "start_key_phrases_detection_job_error_mapper",
    "start_pii_entities_detection_job_error_mapper",
    "start_sentiment_detection_job_error_mapper",
    "start_targeted_sentiment_detection_job_error_mapper",
    "start_topics_detection_job_error_mapper",
    "stop_dominant_language_detection_job_error_mapper",
    "stop_entities_detection_job_error_mapper",
    "stop_events_detection_job_error_mapper",
    "stop_key_phrases_detection_job_error_mapper",
    "stop_pii_entities_detection_job_error_mapper",
    "stop_sentiment_detection_job_error_mapper",
    "stop_targeted_sentiment_detection_job_error_mapper",
    "stop_training_document_classifier_error_mapper",
    "stop_training_entity_recognizer_error_mapper",
    "tag_resource_error_mapper",
    "untag_resource_error_mapper",
    "update_endpoint_error_mapper",
    "update_flywheel_error_mapper",
]
