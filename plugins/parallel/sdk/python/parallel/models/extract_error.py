from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExtractError(SdkBaseModel):
    """Extract error details."""

    url: str
    error_type: str
    """Error type."""

    http_status_code: int
    """HTTP status code, if available."""

    content: str
    """Content returned for http client or server errors, if any."""


class ExtractErrorDict(TypedDict):
    url: str
    error_type: str
    http_status_code: int
    content: str
