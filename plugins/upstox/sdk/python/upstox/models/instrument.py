from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Instrument(SdkBaseModel):
    instrument_key: str
    """Instrument Key of the Instrument"""

    quantity: int
    """Quantity of the instrument to buy or sell for margin calculation"""

    product: str
    """Product with which the order is to be placed"""

    transaction_type: str
    """Indicates whether its a BUY or SELL order"""

    price: Optional[float] = UNSET
    """price"""


class InstrumentDict(TypedDict):
    instrument_key: str
    quantity: int
    product: str
    transaction_type: str
    price: NotRequired[float]
