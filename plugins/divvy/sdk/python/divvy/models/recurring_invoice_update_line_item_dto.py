from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_credit_memos_api import (
    ClassificationsBillV3CreditMemosApi,
    ClassificationsBillV3CreditMemosApiDict,
)


class RecurringInvoiceUpdateLineItemDto(SdkBaseModel):
    """Line items that define a recurring invoice overall amount."""

    id: str
    """BILL-generated ID of the recurring invoice line item. The value begins with ``ril``."""

    amount: Optional[float] = UNSET
    """Recurring invoice line item amount. For a recurring invoice in an international currency (not USD), this value is
    in the local currency."""

    description: Optional[str] = UNSET
    """Recurring invoice line item description"""

    price: Optional[float] = UNSET
    """Recurring invoice line item unit price. For a recurring invoice in an international currency (not USD), this
    value is in the local currency."""

    quantity: Optional[float] = UNSET
    """Recurring invoice line item unit quantity"""

    classifications: Optional[ClassificationsBillV3CreditMemosApi] = UNSET


class RecurringInvoiceUpdateLineItemDtoDict(TypedDict):
    id: str
    amount: NotRequired[float]
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: NotRequired[float]
    classifications: NotRequired[ClassificationsBillV3CreditMemosApiDict]
