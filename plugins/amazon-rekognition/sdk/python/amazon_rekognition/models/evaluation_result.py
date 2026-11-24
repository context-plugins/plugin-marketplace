from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .summary import Summary, SummaryDict


class EvaluationResult(SdkBaseModel):
    f1_score: Optional[float] = Field(default=UNSET, alias="F1Score")
    """The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision and recall
    performance of the model as a single value. A higher value indicates better precision and recall performance. A
    lower score indicates that precision, recall, or both are performing poorly."""

    summary: Optional[Summary] = Field(default=UNSET, alias="Summary")


class EvaluationResultDict(TypedDict):
    f1_score: NotRequired[float]
    summary: NotRequired[SummaryDict]
