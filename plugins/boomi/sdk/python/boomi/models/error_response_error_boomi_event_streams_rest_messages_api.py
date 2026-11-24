from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseErrorBoomiEventStreamsRestMessagesApi(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    """Human-readable error message."""


class ErrorResponseErrorBoomiEventStreamsRestMessagesApiDict(TypedDict):
    message: NotRequired[str]
