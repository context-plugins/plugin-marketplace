from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1WebsitereadabilityRequest(SdkBaseModel):
    url: str
    """The URL of the web page to analyze"""


class V1WebsitereadabilityRequestDict(TypedDict):
    url: str
