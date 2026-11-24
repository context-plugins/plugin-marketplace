from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.issue_type import IssueTypeOrStr
from .enums.status1 import Status1OrStr
from .ipo_investor_type import IpoInvestorType, IpoInvestorTypeDict
from .ipo_registrar_info1 import IpoRegistrarInfo1, IpoRegistrarInfo1Dict
from .ipo_timeline1 import IpoTimeline1, IpoTimeline1Dict


class IpoDetailsData(SdkBaseModel):
    id: Optional[str] = UNSET
    """IPO id (slug). Pass this as the id to the apply API"""

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

    daily_start_time: Optional[str] = UNSET
    """Time bidding opens each day, in HH:mm IST"""

    daily_end_time: Optional[str] = UNSET
    """Time bidding closes each day, in HH:mm IST"""

    face_value: Optional[float] = UNSET
    """Face value of one share"""

    tick_size: Optional[float] = UNSET
    """Minimum price increment for a bid"""

    lot_size: Optional[int] = UNSET
    """Number of shares in one lot"""

    minimum_quantity: Optional[int] = UNSET
    """Smallest quantity that can be bid for; bids must be in multiples of the lot size"""

    cut_off_price: Optional[float] = UNSET
    """Cut-off price for retail applications"""

    listing_price: Optional[float] = UNSET
    """Price the share listed at; null until listing"""

    listing_exchange: Optional[str] = UNSET
    """Exchange(s) the issue lists on. Comma-separated when the issue lists on more than one"""

    rhp_url: Optional[str] = UNSET
    """Link to the Red Herring Prospectus"""

    drhp_url: Optional[str] = UNSET
    """Link to the Draft Red Herring Prospectus"""

    timeline: Optional[IpoTimeline1] = UNSET
    """Key dates for the issue, from pre-apply through listing"""

    registrar_info: Optional[IpoRegistrarInfo1] = UNSET
    """Registrar handling the issue"""

    total_subscription: Optional[str] = UNSET
    """Overall subscription so far; null until the issue opens"""

    investors: Optional[list[IpoInvestorType]] = UNSET
    """Investor categories the issue accepts"""


class IpoDetailsDataDict(TypedDict):
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
    daily_start_time: NotRequired[str]
    daily_end_time: NotRequired[str]
    face_value: NotRequired[float]
    tick_size: NotRequired[float]
    lot_size: NotRequired[int]
    minimum_quantity: NotRequired[int]
    cut_off_price: NotRequired[float]
    listing_price: NotRequired[float]
    listing_exchange: NotRequired[str]
    rhp_url: NotRequired[str]
    drhp_url: NotRequired[str]
    timeline: NotRequired[IpoTimeline1Dict]
    registrar_info: NotRequired[IpoRegistrarInfo1Dict]
    total_subscription: NotRequired[str]
    investors: NotRequired[list[IpoInvestorTypeDict]]
