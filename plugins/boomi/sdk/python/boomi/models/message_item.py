from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MessageItem(SdkBaseModel):
    """A single message in multi-message mode."""

    payload: str
    """The message content. May be plain text, JSON, or XML encoded as a string."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional custom metadata key-value pairs associated with this message."""


class MessageItemDict(TypedDict):
    payload: str
    properties: NotRequired[dict[str, str]]
