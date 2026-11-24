from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Received(SdkBaseModel):
    """Statistics for received (incoming) calls"""

    total: str
    """Total cost of received calls"""

    count: int
    """Number of received calls"""


class ReceivedDict(TypedDict):
    total: str
    count: int
