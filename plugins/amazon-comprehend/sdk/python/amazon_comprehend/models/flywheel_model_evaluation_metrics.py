from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FlywheelModelEvaluationMetrics(SdkBaseModel):
    average_f1_score: Optional[float] = Field(default=UNSET, alias="AverageF1Score")
    """The average F1 score from the evaluation metrics."""

    average_precision: Optional[float] = Field(default=UNSET, alias="AveragePrecision")
    """Average precision metric for the model."""

    average_recall: Optional[float] = Field(default=UNSET, alias="AverageRecall")
    """Average recall metric for the model."""

    average_accuracy: Optional[float] = Field(default=UNSET, alias="AverageAccuracy")
    """Average accuracy metric for the model."""


class FlywheelModelEvaluationMetricsDict(TypedDict):
    average_f1_score: NotRequired[float]
    average_precision: NotRequired[float]
    average_recall: NotRequired[float]
    average_accuracy: NotRequired[float]
