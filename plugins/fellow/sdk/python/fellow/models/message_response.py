from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MessageResponse(SdkBaseModel):
    """Simple message response for operations like delete."""

    message: str


class MessageResponseDict(TypedDict):
    message: str
