from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Feedback(SdkBaseModel):
    positive: bool
    """Whether the feedback is positive or negative."""

    text: Optional[str] = UNSET
    """Optional text providing additional feedback details."""


class FeedbackDict(TypedDict):
    positive: bool
    text: NotRequired[str]
