from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ai_fallback import AiFallback, AiFallbackDict
from .error import Error, ErrorDict


class ErrorEnvelopeError(SdkBaseModel):
    ok: Literal["False"] = "False"
    request_id: str
    error: Error
    reason: Optional[str] = UNSET
    """Structured failure reason on transcript endpoints (no_captions, captions_disabled, age_restricted, rate_limited,
    …)."""

    ai_fallback: Optional[AiFallback] = UNSET
    """Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not check', and says
    whether transcribing the audio would still work."""


class ErrorEnvelopeErrorDict(TypedDict):
    ok: Literal["False"]
    request_id: str
    error: ErrorDict
    reason: NotRequired[str]
    ai_fallback: NotRequired[AiFallbackDict]
