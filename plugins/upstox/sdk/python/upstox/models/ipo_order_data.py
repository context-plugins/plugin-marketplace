from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.issue_type import IssueTypeOrStr
from .ipo_order_bid import IpoOrderBid, IpoOrderBidDict


class IpoOrderData(SdkBaseModel):
    id: Optional[str] = UNSET
    """Reference id of the IPO the application was placed against"""

    symbol: Optional[str] = UNSET
    """Trading symbol of the issuer"""

    exchange: Optional[str] = UNSET
    """Exchange the application was submitted to. Casing follows the exchange feed and may vary"""

    request_id: Optional[str] = UNSET
    """Id of the request that created the application"""

    order_id: Optional[str] = UNSET
    """Application id. Pass this as order_id to the get-order and cancel-order APIs"""

    status: Optional[str] = UNSET
    """Lifecycle stage of the application. Known values: awaiting_mandate, ipo_allotted, ipo_not_allotted,
    application_deleted"""

    order_status: Optional[str] = UNSET
    """Outcome of the application. Known values: success, allotted, not_allotted"""

    payment_status: Optional[str] = UNSET
    """State of the UPI mandate backing the application. Known values: pending, mandate_accepted"""

    category: Optional[str] = UNSET
    """Investor category the application was placed under. IND (individual) and HNI can be applied for; EMP appears on
    employee-quota applications"""

    issue_type: Optional[IssueTypeOrStr] = UNSET
    """Issue type of the IPO. ``regular`` is a mainboard issue"""

    reason: Optional[str] = UNSET
    """Free-text reason from the exchange or registrar explaining the current status"""

    upi: Optional[str] = UNSET
    """UPI id the mandate was raised against"""

    upi_amount_blocked: Optional[str] = UNSET
    """Amount blocked in the applicant's bank account for this application, as a decimal string. Absent until the
    mandate is accepted"""

    nse_submitted_date: Optional[str] = UNSET
    """When the application was submitted to NSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted there"""

    bse_submitted_date: Optional[str] = UNSET
    """When the application was submitted to BSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted there"""

    mandate_approved_date: Optional[str] = UNSET
    """When the UPI mandate was approved; null until approved"""

    rejection_date: Optional[str] = UNSET
    """When the application was rejected; null unless rejected"""

    mandate_rejection_date: Optional[str] = UNSET
    """When the UPI mandate was rejected; null unless rejected"""

    cancel_requested_date: Optional[str] = UNSET
    """When cancellation was requested; null unless a cancellation was raised"""

    cancel_accepted_date: Optional[str] = UNSET
    """When cancellation was accepted; null unless the cancellation completed"""

    units_allotted: Optional[int] = UNSET
    """Shares allotted. 0 until allotment completes, and on applications that were not allotted"""

    bids: Optional[list[IpoOrderBid]] = UNSET
    """Bids placed in this application"""

    created_at: Optional[str] = UNSET
    """When the application was created, in yyyy-MM-dd'T'HH:mm:ss"""

    last_updated_at: Optional[str] = UNSET
    """When the application was last updated, in yyyy-MM-dd'T'HH:mm:ss"""


class IpoOrderDataDict(TypedDict):
    id: NotRequired[str]
    symbol: NotRequired[str]
    exchange: NotRequired[str]
    request_id: NotRequired[str]
    order_id: NotRequired[str]
    status: NotRequired[str]
    order_status: NotRequired[str]
    payment_status: NotRequired[str]
    category: NotRequired[str]
    issue_type: NotRequired[IssueTypeOrStr]
    reason: NotRequired[str]
    upi: NotRequired[str]
    upi_amount_blocked: NotRequired[str]
    nse_submitted_date: NotRequired[str]
    bse_submitted_date: NotRequired[str]
    mandate_approved_date: NotRequired[str]
    rejection_date: NotRequired[str]
    mandate_rejection_date: NotRequired[str]
    cancel_requested_date: NotRequired[str]
    cancel_accepted_date: NotRequired[str]
    units_allotted: NotRequired[int]
    bids: NotRequired[list[IpoOrderBidDict]]
    created_at: NotRequired[str]
    last_updated_at: NotRequired[str]
