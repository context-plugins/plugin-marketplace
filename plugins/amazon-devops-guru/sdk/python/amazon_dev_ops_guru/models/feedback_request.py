from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FeedbackRequest(SdkBaseModel):
    insight_id: Optional[str] = Field(default=UNSET, alias="InsightId")
    """The ID of the insight for which the feedback was provided."""


class FeedbackRequestDict(TypedDict):
    insight_id: NotRequired[str]
