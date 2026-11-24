from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksConnectionsApi(SdkBaseModel):
    transactions: str
    """transactions link to the transactions associated with this account"""

    self: str
    """self link to the requested account"""


class LinksConnectionsApiDict(TypedDict):
    transactions: str
    self: str
