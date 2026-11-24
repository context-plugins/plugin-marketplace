from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_credit_memos_api import (
    ClassificationsBillV3CreditMemosApi,
    ClassificationsBillV3CreditMemosApiDict,
)


class InvoiceCreateLineItem(SdkBaseModel):
    """Invoice Create Request Line Item."""

    description: Optional[str] = UNSET
    """Invoice line item description"""

    price: Optional[float] = UNSET
    """Invoice line item unit price. For an invoice in an international currency (not USD), this value is in the local
    currency."""

    quantity: float
    """Invoice line item unit quantity"""

    classifications: Optional[ClassificationsBillV3CreditMemosApi] = UNSET
    taxable: Optional[bool] = UNSET
    """Set as true if the invoice line item is taxable"""


class InvoiceCreateLineItemDict(TypedDict):
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: float
    classifications: NotRequired[ClassificationsBillV3CreditMemosApiDict]
    taxable: NotRequired[bool]
