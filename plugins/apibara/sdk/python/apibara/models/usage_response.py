from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageResponse(SdkBaseModel):
    """API usage and plan limit response."""

    data: Any
    """Usage information returned for the authenticated API key."""


class UsageResponseDict(TypedDict):
    data: Any
