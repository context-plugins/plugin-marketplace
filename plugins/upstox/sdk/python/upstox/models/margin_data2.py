from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .margin import Margin, MarginDict


class MarginData2(SdkBaseModel):
    """Response data for margin"""

    margins: Optional[list[Margin]] = UNSET
    """Response data for instrument margin details"""

    required_margin: Optional[float] = UNSET
    """Total margin required to execute the orders"""

    final_margin: Optional[float] = UNSET
    """Total margin after margin benefit"""


class MarginData2Dict(TypedDict):
    margins: NotRequired[list[MarginDict]]
    required_margin: NotRequired[float]
    final_margin: NotRequired[float]
