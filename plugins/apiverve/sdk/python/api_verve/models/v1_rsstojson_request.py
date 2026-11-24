from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1RsstojsonRequest(SdkBaseModel):
    url: str
    """The URL of the RSS feed you want converted into JSON format"""


class V1RsstojsonRequestDict(TypedDict):
    url: str
