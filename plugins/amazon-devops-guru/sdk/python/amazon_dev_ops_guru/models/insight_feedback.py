from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feedback import FeedbackOrStr


class InsightFeedback(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The insight feedback ID."""

    feedback: Optional[FeedbackOrStr] = Field(default=UNSET, alias="Feedback")
    """The feedback provided by the customer."""


class InsightFeedbackDict(TypedDict):
    id: NotRequired[str]
    feedback: NotRequired[FeedbackOrStr]
