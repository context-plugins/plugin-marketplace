from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .custom_field_dto import CustomFieldDto, CustomFieldDtoDict
from .enums.fulfillment_type import FulfillmentTypeOrStr
from .enums.reimbursement_status import ReimbursementStatusOrStr
from .enums.reimbursement_type import ReimbursementTypeOrStr
from .receipt_image import ReceiptImage, ReceiptImageDict
from .status_history import StatusHistory, StatusHistoryDict


class ReimbursementResponseDto(SdkBaseModel):
    """DTO representing a reimbursement response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the reimbursement"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the reimbursement"""

    amount: Optional[float] = UNSET
    """Reimbursement amount"""

    fulfillment_type: Optional[FulfillmentTypeOrStr] = Field(default=UNSET, alias="fulfillmentType")
    fund_request_amount: Optional[float] = Field(default=UNSET, alias="fundRequestAmount")
    """Amount that must be added to the user funds for the user to have enough funds for this reimbursement"""

    fund_request_budget_amount: Optional[float] = Field(default=UNSET, alias="fundRequestBudgetAmount")
    """Amount that must be added to the budget for the user to have enough funds for this reimbursement"""

    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    """Merchant name for the expense"""

    note: Optional[str] = UNSET
    """Reimbursement note. Use this field to describe the business purpose for the expense."""

    submitted_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="submittedTime")
    """Reimbursement request submission date and time"""

    occurred_date: Optional[Date] = Field(default=UNSET, alias="occurredDate")
    """Expense created date. The value is in the ``yyyy-MM-dd`` format."""

    retired: Optional[bool] = UNSET
    """This field is set as ``true`` if the reimbursement has been deleted"""

    status: Optional[ReimbursementStatusOrStr] = UNSET
    type_: Optional[ReimbursementTypeOrStr] = Field(default=UNSET, alias="type")
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    """ACH batch ID.

    You can use ``batchId`` to identify the set of reimbursements bundled together when funds are withdrawn from the
    company bank account. Reimbursements with the same ``batchId`` are withdrawn at the same time."""

    batch_amount: Optional[float] = Field(default=UNSET, alias="batchAmount")
    """ACH batch amount"""

    status_history: Optional[list[StatusHistory]] = Field(default=UNSET, alias="statusHistory")
    """Reimbursement approval status history"""

    budget_id: Optional[str] = Field(default=UNSET, alias="budgetId")
    """BILL-generated ID of the budget to be used for the reimbursement"""

    budget_uuid: Optional[str] = Field(default=UNSET, alias="budgetUuid")
    """BILL-generated UUID of the budget to be used for the reimbursement"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user to be reimbursed"""

    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    """BILL-generated UUID of the user to be reimbursed"""

    receipts: Optional[list[ReceiptImage]] = UNSET
    """List of reimbursement receipts"""

    custom_fields: Optional[list[CustomFieldDto]] = Field(default=UNSET, alias="customFields")
    """List of reimbursement custom fields and values"""


class ReimbursementResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    amount: NotRequired[float]
    fulfillment_type: NotRequired[FulfillmentTypeOrStr]
    fund_request_amount: NotRequired[float]
    fund_request_budget_amount: NotRequired[float]
    merchant_name: NotRequired[str]
    note: NotRequired[str]
    submitted_time: NotRequired[RFC3339DateTime]
    occurred_date: NotRequired[Date]
    retired: NotRequired[bool]
    status: NotRequired[ReimbursementStatusOrStr]
    type_: NotRequired[ReimbursementTypeOrStr]
    batch_id: NotRequired[str]
    batch_amount: NotRequired[float]
    status_history: NotRequired[list[StatusHistoryDict]]
    budget_id: NotRequired[str]
    budget_uuid: NotRequired[str]
    user_id: NotRequired[str]
    user_uuid: NotRequired[str]
    receipts: NotRequired[list[ReceiptImageDict]]
    custom_fields: NotRequired[list[CustomFieldDtoDict]]
