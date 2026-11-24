from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1UrllookupRequest(SdkBaseModel):
    url: str
    """The URL to lookup the location of. Include the https protocol"""


class V1UrllookupRequestDict(TypedDict):
    url: str
