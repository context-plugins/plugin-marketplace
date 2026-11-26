from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditMemoUsageDto(SdkBaseModel):
    """CreditMemo usage Dto."""

    invoice_id: Optional[str] = Field(default=UNSET, alias="invoiceId")
    """BILL-generated ID of the invoice to which the credit memo is applied"""

    amount: Optional[float] = UNSET
    """Credit memo amount applied to the invoice"""


class CreditMemoUsageDtoDict(TypedDict):
    invoice_id: NotRequired[str]
    amount: NotRequired[float]
