from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .feedback import Feedback, FeedbackDict


class AvaFeedbackRequest(SdkBaseModel):
    conversation_id: str = Field(alias="conversationId")
    """The conversation ID the feedback relates to."""

    answer_id: str = Field(alias="answerId")
    """The specific answer ID within the conversation."""

    feedback: Feedback


class AvaFeedbackRequestDict(TypedDict):
    conversation_id: str
    answer_id: str
    feedback: FeedbackDict
