from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    """Standard error response structure."""

    error: Optional[str] = UNSET
    """Detailed error message."""


class ErrorDict(TypedDict):
    error: NotRequired[str]
