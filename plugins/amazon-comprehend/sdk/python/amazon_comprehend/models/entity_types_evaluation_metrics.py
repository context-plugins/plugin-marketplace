from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntityTypesEvaluationMetrics(SdkBaseModel):
    precision: Optional[float] = Field(default=UNSET, alias="Precision")
    """A measure of the usefulness of the recognizer results for a specific entity type in the test data. High precision
    means that the recognizer returned substantially more relevant results than irrelevant ones."""

    recall: Optional[float] = Field(default=UNSET, alias="Recall")
    """A measure of how complete the recognizer results are for a specific entity type in the test data. High recall
    means that the recognizer returned most of the relevant results."""

    f1_score: Optional[float] = Field(default=UNSET, alias="F1Score")
    """A measure of how accurate the recognizer results are for a specific entity type in the test data. It is derived
    from the Precision and Recall values. The F1Score is the harmonic average of the two scores. The highest score is 1,
    and the worst score is 0."""


class EntityTypesEvaluationMetricsDict(TypedDict):
    precision: NotRequired[float]
    recall: NotRequired[float]
    f1_score: NotRequired[float]
