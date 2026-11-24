from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RepliesRequest(SdkBaseModel):
    message: str
    access_token: str


class RepliesRequestDict(TypedDict):
    message: str
    access_token: str
