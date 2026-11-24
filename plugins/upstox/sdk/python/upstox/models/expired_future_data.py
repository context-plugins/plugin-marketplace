from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExpiredFutureData(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the instrument"""

    segment: Optional[str] = UNSET
    """Segment of the instrument"""

    exchange: Optional[str] = UNSET
    """Exchange of the instrument"""

    expiry: Optional[str] = UNSET
    """Expiry date of the instrument"""

    instrument_key: Optional[str] = UNSET
    """Unique key identifying the instrument"""

    exchange_token: Optional[str] = UNSET
    """Token assigned by the exchange"""

    trading_symbol: Optional[str] = UNSET
    """Symbol used for trading"""

    tick_size: Optional[float] = UNSET
    """Minimum price movement"""

    lot_size: Optional[int] = UNSET
    """Number of units per lot"""

    instrument_type: Optional[str] = UNSET
    """Type of the instrument"""

    freeze_quantity: Optional[float] = UNSET
    """Maximum allowed quantity"""

    underlying_key: Optional[str] = UNSET
    """Key of the underlying asset"""

    underlying_type: Optional[str] = UNSET
    """Type of the underlying asset"""

    underlying_symbol: Optional[str] = UNSET
    """Symbol of the underlying asset"""

    minimum_lot: Optional[int] = UNSET
    """Minimum lot size"""


class ExpiredFutureDataDict(TypedDict):
    name: NotRequired[str]
    segment: NotRequired[str]
    exchange: NotRequired[str]
    expiry: NotRequired[str]
    instrument_key: NotRequired[str]
    exchange_token: NotRequired[str]
    trading_symbol: NotRequired[str]
    tick_size: NotRequired[float]
    lot_size: NotRequired[int]
    instrument_type: NotRequired[str]
    freeze_quantity: NotRequired[float]
    underlying_key: NotRequired[str]
    underlying_type: NotRequired[str]
    underlying_symbol: NotRequired[str]
    minimum_lot: NotRequired[int]
