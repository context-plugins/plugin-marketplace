from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_credit_memos_api import (
    ClassificationsBillV3CreditMemosApi,
    ClassificationsBillV3CreditMemosApiDict,
)


class InvoiceReplaceLineItem(SdkBaseModel):
    """Invoice Replace Request Line Item."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the invoice line item. The value begins with ``00f``."""

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


class InvoiceReplaceLineItemDict(TypedDict):
    id: NotRequired[str]
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: float
    classifications: NotRequired[ClassificationsBillV3CreditMemosApiDict]
    taxable: NotRequired[bool]
