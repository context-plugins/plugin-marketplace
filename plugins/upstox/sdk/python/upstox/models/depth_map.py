from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .depth import Depth, DepthDict


class DepthMap(SdkBaseModel):
    buy: Optional[list[Depth]] = UNSET
    """Bids"""

    sell: Optional[list[Depth]] = UNSET
    """Asks"""


class DepthMapDict(TypedDict):
    buy: NotRequired[list[DepthDict]]
    sell: NotRequired[list[DepthDict]]
