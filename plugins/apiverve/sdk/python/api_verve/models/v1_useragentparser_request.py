from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1UseragentparserRequest(SdkBaseModel):
    ua: str
    """The user agent string to parse"""


class V1UseragentparserRequestDict(TypedDict):
    ua: str
