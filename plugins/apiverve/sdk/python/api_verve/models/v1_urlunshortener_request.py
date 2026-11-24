from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1UrlunshortenerRequest(SdkBaseModel):
    url: str
    """The shortened URL to unshorten"""


class V1UrlunshortenerRequestDict(TypedDict):
    url: str
