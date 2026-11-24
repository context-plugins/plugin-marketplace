from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlainTextMessage(SdkBaseModel):
    value: str
    """The message to send to the user."""


class PlainTextMessageDict(TypedDict):
    value: str
