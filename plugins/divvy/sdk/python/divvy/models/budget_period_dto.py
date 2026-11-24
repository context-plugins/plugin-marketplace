from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .spent import Spent, SpentDict


class BudgetPeriodDto(SdkBaseModel):
    """Class representing a budget's current budget period."""

    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Budget period start date"""

    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    """Budget period end date"""

    limit: Optional[float] = UNSET
    """Budget period spend limit"""

    overspend_buffer: Optional[float] = Field(default=UNSET, alias="overspendBuffer")
    """Spend amount allowed above the budget limit before transactions are declined"""

    assigned: Optional[float] = UNSET
    """Total amount assigned to users and vendor cards"""

    spent: Optional[Spent] = UNSET


class BudgetPeriodDtoDict(TypedDict):
    start_date: NotRequired[Date]
    end_date: NotRequired[Date]
    limit: NotRequired[float]
    overspend_buffer: NotRequired[float]
    assigned: NotRequired[float]
    spent: NotRequired[SpentDict]
