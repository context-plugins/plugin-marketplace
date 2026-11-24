from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .message_item import MessageItem, MessageItemDict


class MultiMessageRequest(SdkBaseModel):
    """Request body for publishing multiple messages in the predefined JSON format. Each message contains a payload and
    optional properties."""

    messages: list[MessageItem]
    """Array of messages to publish to the topic."""


class MultiMessageRequestDict(TypedDict):
    messages: list[MessageItemDict]
