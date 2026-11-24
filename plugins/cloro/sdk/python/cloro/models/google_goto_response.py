from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GoogleGotoResponse(SdkBaseModel):
    url: str
    """The destination the redirect link points to"""


class GoogleGotoResponseDict(TypedDict):
    url: str
