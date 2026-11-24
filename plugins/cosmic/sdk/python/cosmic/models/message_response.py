from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MessageResponse(SdkBaseModel):
    """Returned by delete operations."""

    message: str


class MessageResponseDict(TypedDict):
    message: str
