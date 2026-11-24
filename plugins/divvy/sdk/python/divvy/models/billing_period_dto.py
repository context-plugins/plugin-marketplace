from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class BillingPeriodDto(SdkBaseModel):
    """BillingPeriod response Dto."""

    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Billing period start date"""

    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    """Billing period end date"""


class BillingPeriodDtoDict(TypedDict):
    start_date: NotRequired[Date]
    end_date: NotRequired[Date]
