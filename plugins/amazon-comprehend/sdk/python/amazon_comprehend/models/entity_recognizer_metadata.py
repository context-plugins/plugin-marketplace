from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_recognizer_evaluation_metrics import (
    EntityRecognizerEvaluationMetrics,
    EntityRecognizerEvaluationMetricsDict,
)
from .entity_recognizer_metadata_entity_types_list_item import (
    EntityRecognizerMetadataEntityTypesListItem,
    EntityRecognizerMetadataEntityTypesListItemDict,
)


class EntityRecognizerMetadata(SdkBaseModel):
    number_of_trained_documents: Optional[int] = Field(default=UNSET, alias="NumberOfTrainedDocuments")
    """The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to
    90 percent of the input documents."""

    number_of_test_documents: Optional[int] = Field(default=UNSET, alias="NumberOfTestDocuments")
    """The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to
    20 percent of the input documents."""

    evaluation_metrics: Optional[EntityRecognizerEvaluationMetrics] = Field(default=UNSET, alias="EvaluationMetrics")
    entity_types: Optional[list[EntityRecognizerMetadataEntityTypesListItem]] = Field(
        default=UNSET, alias="EntityTypes"
    )
    """Entity types from the metadata of an entity recognizer."""


class EntityRecognizerMetadataDict(TypedDict):
    number_of_trained_documents: NotRequired[int]
    number_of_test_documents: NotRequired[int]
    evaluation_metrics: NotRequired[EntityRecognizerEvaluationMetricsDict]
    entity_types: NotRequired[list[EntityRecognizerMetadataEntityTypesListItemDict]]
