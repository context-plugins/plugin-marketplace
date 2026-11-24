from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorTranscriptfetchTranscriptsApi(SdkBaseModel):
    """Present when status is failed."""

    code: Optional[str] = UNSET
    message: Optional[str] = UNSET


class ErrorTranscriptfetchTranscriptsApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
