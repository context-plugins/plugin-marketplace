from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CheckDisbursement2(SdkBaseModel):
    sent_date: Optional[Date] = Field(default=UNSET, alias="sentDate")
    """Check payment sent date"""

    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """Check payment arrives by date"""

    check_number: Optional[int] = Field(default=UNSET, alias="checkNumber")
    """Check number"""

    tracking_information: Optional[str] = Field(default=UNSET, alias="trackingInformation")
    """UPS tracking number for the check. You get a tracking number only for a BILL Pay Faster check payment."""


class CheckDisbursement2Dict(TypedDict):
    sent_date: NotRequired[Date]
    arrives_by_date: NotRequired[Date]
    check_number: NotRequired[int]
    tracking_information: NotRequired[str]
