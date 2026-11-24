from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.issue_type import IssueTypeOrStr
from .enums.status1 import Status1OrStr
from .ipo_investor_type import IpoInvestorType, IpoInvestorTypeDict


class IpoListingData(SdkBaseModel):
    id: Optional[str] = UNSET
    """IPO id (slug). Pass this as the id to the IPO details and apply APIs"""

    symbol: Optional[str] = UNSET
    """Trading symbol of the issuer"""

    name: Optional[str] = UNSET
    """Name of the issuer"""

    status: Optional[Status1OrStr] = UNSET
    """Current stage of the IPO"""

    isin: Optional[str] = UNSET
    """ISIN of the issue"""

    issue_type: Optional[IssueTypeOrStr] = UNSET
    """Issue type of the IPO. ``regular`` is a mainboard issue"""

    issue_size: Optional[float] = UNSET
    """Total issue size in crores"""

    industry: Optional[str] = UNSET
    """Industry the issuer operates in"""

    minimum_price: Optional[float] = UNSET
    """Lower end of the price band, per share"""

    maximum_price: Optional[float] = UNSET
    """Upper end of the price band, per share"""

    bidding_start_date: Optional[str] = UNSET
    """Date bidding opens, in yyyy-MM-dd"""

    bidding_end_date: Optional[str] = UNSET
    """Date bidding closes, in yyyy-MM-dd"""

    total_subscription: Optional[str] = UNSET
    """Overall subscription so far; null until the issue opens"""

    investors: Optional[list[IpoInvestorType]] = UNSET
    """Investor categories the issue accepts. Empty when the listing data carries none — the IPO details API is the
    authoritative source"""


class IpoListingDataDict(TypedDict):
    id: NotRequired[str]
    symbol: NotRequired[str]
    name: NotRequired[str]
    status: NotRequired[Status1OrStr]
    isin: NotRequired[str]
    issue_type: NotRequired[IssueTypeOrStr]
    issue_size: NotRequired[float]
    industry: NotRequired[str]
    minimum_price: NotRequired[float]
    maximum_price: NotRequired[float]
    bidding_start_date: NotRequired[str]
    bidding_end_date: NotRequired[str]
    total_subscription: NotRequired[str]
    investors: NotRequired[list[IpoInvestorTypeDict]]
