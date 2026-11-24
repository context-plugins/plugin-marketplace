from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpoTimeline1(SdkBaseModel):
    """Key dates for the issue, from pre-apply through listing"""

    pre_apply_start_date: Optional[str] = UNSET
    """Date pre-apply opens, in yyyy-MM-dd"""

    application_start_date: Optional[str] = UNSET
    """Date the issue opens for applications, in yyyy-MM-dd"""

    application_end_date: Optional[str] = UNSET
    """Date the issue closes for applications, in yyyy-MM-dd"""

    allotment_start_date: Optional[str] = UNSET
    """Date allotment processing starts, in yyyy-MM-dd"""

    allotment_date: Optional[str] = UNSET
    """Date allotment is finalised, in yyyy-MM-dd"""

    refund_initiation_date: Optional[str] = UNSET
    """Date refunds are initiated for unallotted applications, in yyyy-MM-dd"""

    listing_date: Optional[str] = UNSET
    """Date the share lists on the exchange, in yyyy-MM-dd"""

    mandate_end_date: Optional[str] = UNSET
    """Last date the UPI mandate can be approved, in yyyy-MM-dd"""


class IpoTimeline1Dict(TypedDict):
    pre_apply_start_date: NotRequired[str]
    application_start_date: NotRequired[str]
    application_end_date: NotRequired[str]
    allotment_start_date: NotRequired[str]
    allotment_date: NotRequired[str]
    refund_initiation_date: NotRequired[str]
    listing_date: NotRequired[str]
    mandate_end_date: NotRequired[str]
