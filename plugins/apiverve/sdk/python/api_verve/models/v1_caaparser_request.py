from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1CaaparserRequest(SdkBaseModel):
    record: str
    """The CAA record string to parse"""


class V1CaaparserRequestDict(TypedDict):
    record: str
