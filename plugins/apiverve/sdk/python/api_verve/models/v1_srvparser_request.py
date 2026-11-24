from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SrvparserRequest(SdkBaseModel):
    record: str
    """The SRV record string to parse"""


class V1SrvparserRequestDict(TypedDict):
    record: str
