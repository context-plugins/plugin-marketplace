from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DisconnectResponse(SdkBaseModel):
    """Response for disconnect action."""

    success: bool
    provider: str


class DisconnectResponseDict(TypedDict):
    success: bool
    provider: str
