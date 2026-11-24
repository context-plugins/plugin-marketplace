from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Url(SdkBaseModel):
    url: str
    """Webpage URL to capture"""


class UrlDict(TypedDict):
    url: str
