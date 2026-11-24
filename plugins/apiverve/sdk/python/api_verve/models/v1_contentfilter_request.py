from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ContentfilterRequest(SdkBaseModel):
    url: str
    """The URL or domain to check"""


class V1ContentfilterRequestDict(TypedDict):
    url: str
