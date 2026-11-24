from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.unavailable_reason import UnavailableReasonOrStr
from .retry_with import RetryWith, RetryWithDict


class AiFallback(SdkBaseModel):
    """Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not check', and says
    whether transcribing the audio would still work."""

    available: bool
    """True when retrying the same request with ai_fallback:true would actually start a transcription."""

    captions_unavailable: bool
    """True only when we reached the video and confirmed no caption track exists. False means we could not check, NOT
    that captions exist."""

    unavailable_reason: Optional[UnavailableReasonOrStr] = UNSET
    """Present when available is false: why AI transcription cannot be used."""

    message: str
    retry_with: Optional[RetryWith] = UNSET
    """Merge into the original request body to trigger the fallback."""

    cost_credits: Optional[int] = UNSET
    """Credits charged on successful delivery. Failures are free. AI transcription bills by audio length, so this is an
    estimate from the measured media length when cost_estimated is true, and otherwise the one-block minimum."""

    cost_estimated: Optional[bool] = UNSET
    """True when cost_credits came from the media's real duration; false when it is only the minimum, because the length
    was not known at that point."""

    balance: OptionalNullable[int] = UNSET
    """Remaining balance; null for admins."""


class AiFallbackDict(TypedDict):
    available: bool
    captions_unavailable: bool
    unavailable_reason: NotRequired[UnavailableReasonOrStr]
    message: str
    retry_with: NotRequired[RetryWithDict]
    cost_credits: NotRequired[int]
    cost_estimated: NotRequired[bool]
    balance: NotRequired[int | None]
