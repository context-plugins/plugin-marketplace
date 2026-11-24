from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MutualFundHoldingData(SdkBaseModel):
    folio: Optional[str] = UNSET
    """Folio number when available."""

    fund: Optional[str] = UNSET
    """Fund display name when available."""

    pnl: Optional[float] = UNSET
    """Unrealized P/L."""

    quantity: Optional[float] = UNSET
    """Units held."""

    instrument_key: Optional[str] = UNSET
    """ISIN of the fund, when available."""

    average_price: Optional[float] = UNSET
    """Average cost per unit."""

    last_price: Optional[float] = UNSET
    """Last available NAV."""

    last_price_date: Optional[str] = UNSET
    """Date for which last NAV is available."""

    pledged_quantity: Optional[float] = UNSET
    """Units pledged as collateral when applicable."""


class MutualFundHoldingDataDict(TypedDict):
    folio: NotRequired[str]
    fund: NotRequired[str]
    pnl: NotRequired[float]
    quantity: NotRequired[float]
    instrument_key: NotRequired[str]
    average_price: NotRequired[float]
    last_price: NotRequired[float]
    last_price_date: NotRequired[str]
    pledged_quantity: NotRequired[float]
