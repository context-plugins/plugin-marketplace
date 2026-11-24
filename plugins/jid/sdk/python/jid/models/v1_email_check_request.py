from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1EmailCheckRequest(SdkBaseModel):
    headers: str
    """The raw message headers (Show original / View source); the body is not needed."""


class V1EmailCheckRequestDict(TypedDict):
    headers: str
