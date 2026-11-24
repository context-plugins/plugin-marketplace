from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IpoBidRequest(SdkBaseModel):
    quantity: int
    """Number of shares bid for. Must be a multiple of the IPO's ``lot_size`` and at least its ``minimum_quantity``"""

    price: float
    """Bid price per share, in whole rupees — decimals are not accepted. Must sit within the IPO's price band, or equal
    its ``cut_off_price``"""


class IpoBidRequestDict(TypedDict):
    quantity: int
    price: float
