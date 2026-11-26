from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .update_custom_field_dto import UpdateCustomFieldDto, UpdateCustomFieldDtoDict


class UpdateReimbursementRequestDto(SdkBaseModel):
    """Update a reimbursement (Date updated)"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user to be reimbursed"""

    budget_id: Optional[str] = Field(default=UNSET, alias="budgetId")
    """BILL-generated ID of the budget to be used for the reimbursement"""

    amount: Optional[float] = UNSET
    """Reimbursement amount"""

    note: Optional[str] = UNSET
    """Reimbursement note. Use this field to describe the business purpose for the expense."""

    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    """Merchant name for the expense"""

    occurred_date: Optional[Date] = Field(default=UNSET, alias="occurredDate")
    """Expense created date. The value is in the ``yyyy-MM-dd`` format."""

    custom_fields: Optional[list[UpdateCustomFieldDto]] = Field(default=UNSET, alias="customFields")
    """List of reimbursement custom fields and values"""


class UpdateReimbursementRequestDtoDict(TypedDict):
    user_id: NotRequired[str]
    budget_id: NotRequired[str]
    amount: NotRequired[float]
    note: NotRequired[str]
    merchant_name: NotRequired[str]
    occurred_date: NotRequired[Date]
    custom_fields: NotRequired[list[UpdateCustomFieldDtoDict]]
