from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PaymentTerm(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    due_date_calculation: Optional[str] = Field(default=UNSET, alias="dueDateCalculation")
    """The date formula for due date calculation"""

    discount_date_calculation: Optional[str] = Field(default=UNSET, alias="discountDateCalculation")
    """The date formula for discount date calculation"""

    discount_percent: Optional[float] = Field(default=UNSET, alias="discountPercent")
    calculate_discount_on_credit_memos: Optional[bool] = Field(default=UNSET, alias="calculateDiscountOnCreditMemos")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class PaymentTermDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
    due_date_calculation: NotRequired[str]
    discount_date_calculation: NotRequired[str]
    discount_percent: NotRequired[float]
    calculate_discount_on_credit_memos: NotRequired[bool]
    last_modified_date_time: NotRequired[RFC3339DateTime]
