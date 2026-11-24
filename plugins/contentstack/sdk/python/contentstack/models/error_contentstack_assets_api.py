from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorContentstackAssetsApi(SdkBaseModel):
    """Standard error response returned by the API."""

    error_message: Optional[str] = UNSET
    """Human-readable description of the error."""

    error_code: Optional[int] = UNSET
    """Numeric code identifying the error type."""

    errors: Optional[Any] = UNSET
    """Field-level validation errors when applicable."""


class ErrorContentstackAssetsApiDict(TypedDict):
    error_message: NotRequired[str]
    error_code: NotRequired[int]
    errors: NotRequired[Any]
