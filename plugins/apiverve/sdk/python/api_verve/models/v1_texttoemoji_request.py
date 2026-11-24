from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TexttoemojiRequest(SdkBaseModel):
    text: str
    """The text you want converted into emojis"""


class V1TexttoemojiRequestDict(TypedDict):
    text: str
