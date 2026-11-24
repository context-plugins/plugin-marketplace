from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .reimbursement_receipt_request_dto import ReimbursementReceiptRequestDto, ReimbursementReceiptRequestDtoDict
from .update_custom_field_dto import UpdateCustomFieldDto, UpdateCustomFieldDtoDict


class CreateReimbursementRequestDto(SdkBaseModel):
    """Create a reimbursement"""

    user_id: str = Field(alias="userId")
    """BILL-generated ID of the user to be reimbursed"""

    budget_id: str = Field(alias="budgetId")
    """BILL-generated ID of the budget to be used for the reimbursement"""

    amount: float
    """Reimbursement amount"""

    note: str
    """Reimbursement note. Use this field to describe the business purpose for the expense."""

    merchant_name: str = Field(alias="merchantName")
    """Merchant name for the expense"""

    occurred_date: Date = Field(alias="occurredDate")
    """Expense created date. The value is in the ``yyyy-MM-dd`` format."""

    receipts: list[ReimbursementReceiptRequestDto]
    """List of reimbursement receipts"""

    custom_fields: Optional[list[UpdateCustomFieldDto]] = Field(default=UNSET, alias="customFields")
    """List of reimbursement custom fields and values"""


class CreateReimbursementRequestDtoDict(TypedDict):
    user_id: str
    budget_id: str
    amount: float
    note: str
    merchant_name: str
    occurred_date: Date
    receipts: list[ReimbursementReceiptRequestDtoDict]
    custom_fields: NotRequired[list[UpdateCustomFieldDtoDict]]
