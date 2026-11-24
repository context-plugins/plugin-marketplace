from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseBoomiEventStreamsRestMessagesApi(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    """Human-readable error message."""


class ErrorResponseBoomiEventStreamsRestMessagesApiDict(TypedDict):
    message: NotRequired[str]
