from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Placed(SdkBaseModel):
    """Statistics for placed (outgoing) calls"""

    total: str
    """Total cost of placed calls"""

    count: int
    """Number of placed calls"""


class PlacedDict(TypedDict):
    total: str
    count: int
