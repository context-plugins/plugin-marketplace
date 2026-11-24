from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Margin(SdkBaseModel):
    span_margin: Optional[float] = UNSET
    """Upfront margin mandatory by exchange for derivatives trade applicable on only FNO trade"""

    exposure_margin: Optional[float] = UNSET
    """Based on ELM percentage values provided by exchange, applicable on only FNO trade"""

    equity_margin: Optional[float] = UNSET
    """Margin applicable for any equity trade"""

    net_buy_premium: Optional[float] = UNSET
    """Option premium required."""

    additional_margin: Optional[float] = UNSET
    """Application margin applicable on MCX FNO trade for certain commodities"""

    total_margin: Optional[float] = UNSET
    """Total margin required for the basket"""

    tender_margin: Optional[float] = UNSET
    """Tender margin"""


class MarginDict(TypedDict):
    span_margin: NotRequired[float]
    exposure_margin: NotRequired[float]
    equity_margin: NotRequired[float]
    net_buy_premium: NotRequired[float]
    additional_margin: NotRequired[float]
    total_margin: NotRequired[float]
    tender_margin: NotRequired[float]
