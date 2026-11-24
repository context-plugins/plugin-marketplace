from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1UrltitleRequest(SdkBaseModel):
    url: str
    """The URL of the web page to get the title of"""


class V1UrltitleRequestDict(TypedDict):
    url: str
