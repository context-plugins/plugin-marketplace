from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MutualFundOrderData(SdkBaseModel):
    status: Optional[str] = UNSET
    """Current status of the order."""

    folio: Optional[str] = UNSET
    """Folio number, when allotted."""

    fund: Optional[str] = UNSET
    """Display name of the fund."""

    amount: Optional[float] = UNSET
    """Order amount."""

    variety: Optional[str] = UNSET
    """Order variety or channel-specific classification, if available."""

    quantity: Optional[float] = UNSET
    """Units allotted or sold."""

    price: Optional[float] = UNSET
    """Price or NAV used for the transaction, when available."""

    order_id: Optional[str] = UNSET
    """Unique order identifier."""

    exchange_order_id: Optional[str] = UNSET
    """Exchange-generated order id, if available."""

    instrument_key: Optional[str] = UNSET
    """ISIN of the fund, when available."""

    status_message: Optional[str] = UNSET
    """Human-readable status or rejection reason."""

    order_timestamp: Optional[str] = UNSET
    """Timestamp when the order was registered."""

    exchange_timestamp: Optional[str] = UNSET
    """Exchange date for the order, if available."""

    settlement_id: Optional[str] = UNSET
    """Exchange settlement id, if available."""

    transaction_type: Optional[str] = UNSET
    """BUY or SELL."""

    purchase_type: Optional[str] = UNSET
    """FRESH or ADDITIONAL for buys, when available."""

    last_price: Optional[float] = UNSET
    """Last known NAV."""

    average_price: Optional[float] = UNSET
    """Allotted or sold NAV."""

    last_price_date: Optional[str] = UNSET
    """Date for which last NAV is available."""


class MutualFundOrderDataDict(TypedDict):
    status: NotRequired[str]
    folio: NotRequired[str]
    fund: NotRequired[str]
    amount: NotRequired[float]
    variety: NotRequired[str]
    quantity: NotRequired[float]
    price: NotRequired[float]
    order_id: NotRequired[str]
    exchange_order_id: NotRequired[str]
    instrument_key: NotRequired[str]
    status_message: NotRequired[str]
    order_timestamp: NotRequired[str]
    exchange_timestamp: NotRequired[str]
    settlement_id: NotRequired[str]
    transaction_type: NotRequired[str]
    purchase_type: NotRequired[str]
    last_price: NotRequired[float]
    average_price: NotRequired[float]
    last_price_date: NotRequired[str]
