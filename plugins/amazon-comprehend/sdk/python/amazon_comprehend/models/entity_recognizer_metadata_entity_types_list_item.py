from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_types_evaluation_metrics import EntityTypesEvaluationMetrics, EntityTypesEvaluationMetricsDict


class EntityRecognizerMetadataEntityTypesListItem(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """Type of entity from the list of entity types in the metadata of an entity recognizer."""

    evaluation_metrics: Optional[EntityTypesEvaluationMetrics] = Field(default=UNSET, alias="EvaluationMetrics")
    number_of_train_mentions: Optional[int] = Field(default=UNSET, alias="NumberOfTrainMentions")
    """Indicates the number of times the given entity type was seen in the training data."""


class EntityRecognizerMetadataEntityTypesListItemDict(TypedDict):
    type_: NotRequired[str]
    evaluation_metrics: NotRequired[EntityTypesEvaluationMetricsDict]
    number_of_train_mentions: NotRequired[int]
