from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.category import CategoryOrStr
from .ipo_bid_request import IpoBidRequest, IpoBidRequestDict


class IpoApplyRequest(SdkBaseModel):
    id: str
    """IPO id (slug) to apply for, as returned in ``id`` by the IPO listing and details APIs"""

    upi: str
    """UPI id used to block the application amount"""

    category: CategoryOrStr
    """Investor category to apply under. Must be one the issue accepts — see ``investors[].category`` in the IPO details
    API"""

    bids: list[IpoBidRequest]
    """List of bids for the application (1 to 3 bids)"""


class IpoApplyRequestDict(TypedDict):
    id: str
    upi: str
    category: CategoryOrStr
    bids: list[IpoBidRequestDict]
