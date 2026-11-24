from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Request(SdkBaseModel):
    hide: bool
    """True to hide, false to unhide."""

    access_token: str


class RequestDict(TypedDict):
    hide: bool
    access_token: str
