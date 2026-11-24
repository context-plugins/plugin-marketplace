from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HealthResponse(SdkBaseModel):
    status: str
    """Always ``"healthy"`` if the server is responding."""

    timestamp: str
    """RFC 3339 timestamp at which the health check was generated."""


class HealthResponseDict(TypedDict):
    status: str
    timestamp: str
