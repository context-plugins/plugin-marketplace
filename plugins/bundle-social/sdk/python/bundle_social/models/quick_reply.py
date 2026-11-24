from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class QuickReply(SdkBaseModel):
    id: str
    label: str
    payload: str


class QuickReplyDict(TypedDict):
    id: str
    label: str
    payload: str
