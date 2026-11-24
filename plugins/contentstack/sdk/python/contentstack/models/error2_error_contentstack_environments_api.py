from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error2ErrorContentstackEnvironmentsApi(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    """Human-readable description of the error."""

    error_code: Optional[int] = UNSET
    """Numeric error code."""


class Error2ErrorContentstackEnvironmentsApiDict(TypedDict):
    message: NotRequired[str]
    error_code: NotRequired[int]
