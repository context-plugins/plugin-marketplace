from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code import CodeOrStr


class FeedbackItem(SdkBaseModel):
    code: CodeOrStr = Field(alias="Code")
    """A code identifying the condition that was detected during the Face Liveness session."""

    message: str = Field(alias="Message")
    """A human-readable description of the detected condition, suitable for displaying to an end user before they retry
    a Face Liveness check. Use Code rather than this message for programmatic decisions, because the message text can
    change."""


class FeedbackItemDict(TypedDict):
    code: CodeOrStr
    message: str
