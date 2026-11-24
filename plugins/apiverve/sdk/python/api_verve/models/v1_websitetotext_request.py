from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1WebsitetotextRequest(SdkBaseModel):
    url: str
    """The URL of the website to convert to text"""


class V1WebsitetotextRequestDict(TypedDict):
    url: str
