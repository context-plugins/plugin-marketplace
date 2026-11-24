from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SendMessageRequest(SdkBaseModel):
    body: str
    """The text content of the message to send to the shopper."""


class SendMessageRequestDict(TypedDict):
    body: str
