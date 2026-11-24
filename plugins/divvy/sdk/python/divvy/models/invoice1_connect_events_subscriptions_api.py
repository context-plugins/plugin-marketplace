from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel


class Invoice1ConnectEventsSubscriptionsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    invoice_number: Optional[str] = Field(default=UNSET, alias="invoiceNumber")
    archived: Optional[bool] = UNSET
    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    due_amount: Optional[float] = Field(default=UNSET, alias="dueAmount")
    scheduled_amount: Optional[float] = Field(default=UNSET, alias="scheduledAmount")
    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    invoice_date: Optional[Date] = Field(default=UNSET, alias="invoiceDate")
    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    pay_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payToChartOfAccountId")
    sales_tax_percentage: Optional[float] = Field(default=UNSET, alias="salesTaxPercentage")
    sales_tax_total: Optional[float] = Field(default=UNSET, alias="salesTaxTotal")
    status: Optional[str] = UNSET


class Invoice1ConnectEventsSubscriptionsApiDict(TypedDict):
    id: NotRequired[str]
    customer_id: NotRequired[str]
    invoice_number: NotRequired[str]
    archived: NotRequired[bool]
    total_amount: NotRequired[float]
    due_amount: NotRequired[float]
    scheduled_amount: NotRequired[float]
    credit_amount: NotRequired[float]
    invoice_date: NotRequired[Date]
    due_date: NotRequired[Date]
    created_by: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    pay_to_chart_of_account_id: NotRequired[str]
    sales_tax_percentage: NotRequired[float]
    sales_tax_total: NotRequired[float]
    status: NotRequired[str]
