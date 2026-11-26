from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class AchDisbursement2(SdkBaseModel):
    sent_date: Optional[Date] = Field(default=UNSET, alias="sentDate")
    """ACH payment sent date"""

    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """ACH payment arrives by date"""


class AchDisbursement2Dict(TypedDict):
    sent_date: NotRequired[Date]
    arrives_by_date: NotRequired[Date]
