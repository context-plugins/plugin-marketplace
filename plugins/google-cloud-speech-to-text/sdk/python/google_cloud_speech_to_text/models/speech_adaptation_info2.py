from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpeechAdaptationInfo2(SdkBaseModel):
    """Provides information on adaptation behavior in response"""

    timeout_message: Optional[str] = Field(default=UNSET, alias="timeoutMessage")
    """If set, returns a message specifying which part of the speech adaptation request timed out."""

    adaptation_timeout: Optional[bool] = Field(default=UNSET, alias="adaptationTimeout")
    """Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response
    transcript."""


class SpeechAdaptationInfo2Dict(TypedDict):
    timeout_message: NotRequired[str]
    adaptation_timeout: NotRequired[bool]
