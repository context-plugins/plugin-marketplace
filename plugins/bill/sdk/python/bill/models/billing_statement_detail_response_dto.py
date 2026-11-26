from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .billing_period import BillingPeriod, BillingPeriodDict
from .billing_statement_detail_line_item_dto import (
    BillingStatementDetailLineItemDto,
    BillingStatementDetailLineItemDtoDict,
)
from .download_link import DownloadLink, DownloadLinkDict
from .enums.billing_statement_payment_status import BillingStatementPaymentStatusOrStr


class BillingStatementDetailResponseDto(SdkBaseModel):
    """BillingStatementDetail response Dto."""

    id: str
    """BILL-generated ID of the billing statement. The value begins with ``0S0``."""

    invoice_number: str = Field(alias="invoiceNumber")
    """Billing invoice number"""

    invoice_date: Date = Field(alias="invoiceDate")
    """Billing invoice date"""

    description: str
    """Billing invoice description"""

    billing_period: BillingPeriod = Field(alias="billingPeriod")
    payment_status: BillingStatementPaymentStatusOrStr = Field(alias="paymentStatus")
    payment_date: Optional[Date] = Field(default=UNSET, alias="paymentDate")
    """Billing invoice payment date"""

    amount: float
    """Billing invoice amount"""

    statement_details: Optional[list[BillingStatementDetailLineItemDto]] = Field(
        default=UNSET, alias="statementDetails"
    )
    """Statement details. This includes billing invoice line item information."""

    download_link: DownloadLink = Field(alias="downloadLink")


class BillingStatementDetailResponseDtoDict(TypedDict):
    id: str
    invoice_number: str
    invoice_date: Date
    description: str
    billing_period: BillingPeriodDict
    payment_status: BillingStatementPaymentStatusOrStr
    payment_date: NotRequired[Date]
    amount: float
    statement_details: NotRequired[list[BillingStatementDetailLineItemDtoDict]]
    download_link: DownloadLinkDict
