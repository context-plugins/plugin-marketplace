from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorError(SdkBaseModel):
    status: int
    """HTTP status."""

    path: str
    """Request path."""

    request_id: str = Field(alias="requestId")
    """Request ID. A UUID in string format to help with request tracking."""

    error: str
    """Error class name."""

    message: str
    """Exception message."""

    timestamp: int
    """Unix timestamp."""


class ErrorErrorDict(TypedDict):
    status: int
    path: str
    request_id: str
    error: str
    message: str
    timestamp: int
