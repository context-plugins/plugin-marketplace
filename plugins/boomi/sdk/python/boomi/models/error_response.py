from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponse(SdkBaseModel):
    """Standard error response from the Boomi Platform API."""

    message: Optional[str] = UNSET
    """Human-readable error message."""

    code: Optional[int] = UNSET
    """Numeric error code."""


class ErrorResponseDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[int]
