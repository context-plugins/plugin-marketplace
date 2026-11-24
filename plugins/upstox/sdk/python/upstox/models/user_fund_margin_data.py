from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserFundMarginData(SdkBaseModel):
    used_margin: Optional[float] = UNSET
    """Positive values denote the amount blocked into an Open order or position. Negative value denotes the amount being
    released."""

    payin_amount: Optional[float] = UNSET
    """Instant payin will reflect here"""

    span_margin: Optional[float] = UNSET
    """Amount blocked on futures and options towards SPAN"""

    adhoc_margin: Optional[float] = UNSET
    """Payin amount credited through a manual process"""

    notional_cash: Optional[float] = UNSET
    """The amount maintained for withdrawal"""

    available_margin: Optional[float] = UNSET
    """Total margin available for trading"""

    exposure_margin: Optional[float] = UNSET
    """Amount blocked on futures and options towards Exposure"""


class UserFundMarginDataDict(TypedDict):
    used_margin: NotRequired[float]
    payin_amount: NotRequired[float]
    span_margin: NotRequired[float]
    adhoc_margin: NotRequired[float]
    notional_cash: NotRequired[float]
    available_margin: NotRequired[float]
    exposure_margin: NotRequired[float]
