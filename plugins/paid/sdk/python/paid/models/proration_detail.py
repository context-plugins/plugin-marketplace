from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProrationDetail(SdkBaseModel):
    """Details about the proration calculation for an attribute"""

    old_attribute_id: Optional[UUID] = Field(default=UNSET, alias="oldAttributeId")
    new_attribute_id: Optional[UUID] = Field(default=UNSET, alias="newAttributeId")
    credit_line_id: Optional[UUID] = Field(default=UNSET, alias="creditLineId")
    old_price: Optional[float] = Field(default=UNSET, alias="oldPrice")
    new_price: Optional[float] = Field(default=UNSET, alias="newPrice")
    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    """The credit amount applied for the unused portion"""

    remaining_days: Optional[int] = Field(default=UNSET, alias="remainingDays")
    """Number of days remaining in the current billing cycle"""

    total_days_in_cycle: Optional[int] = Field(default=UNSET, alias="totalDaysInCycle")
    """Total number of days in the billing cycle"""


class ProrationDetailDict(TypedDict):
    old_attribute_id: NotRequired[UUID]
    new_attribute_id: NotRequired[UUID]
    credit_line_id: NotRequired[UUID]
    old_price: NotRequired[float]
    new_price: NotRequired[float]
    credit_amount: NotRequired[float]
    remaining_days: NotRequired[int]
    total_days_in_cycle: NotRequired[int]
