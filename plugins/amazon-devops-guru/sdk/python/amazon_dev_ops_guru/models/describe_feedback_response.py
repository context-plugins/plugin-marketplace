from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_feedback import InsightFeedback, InsightFeedbackDict


class DescribeFeedbackResponse(SdkBaseModel):
    insight_feedback: Optional[InsightFeedback] = Field(default=UNSET, alias="InsightFeedback")


class DescribeFeedbackResponseDict(TypedDict):
    insight_feedback: NotRequired[InsightFeedbackDict]
