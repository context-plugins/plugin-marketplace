from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error2Error(SdkBaseModel):
    """Standard error response."""

    error_message: Optional[str] = UNSET
    """Human-readable description of the error."""

    error_code: Optional[int] = UNSET
    """Numeric error code."""

    errors: Optional[Any] = UNSET
    """Field-level validation errors."""


class Error2ErrorDict(TypedDict):
    error_message: NotRequired[str]
    error_code: NotRequired[int]
    errors: NotRequired[Any]
