from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_recurringbills_api import (
    ClassificationsBillV3RecurringbillsApi,
    ClassificationsBillV3RecurringbillsApiDict,
)


class RecurringBillUpdateLineItem(SdkBaseModel):
    """Line items that define a bill's overall amount."""

    id: str
    """BILL-generated ID of the recurring bill line item. The value begins with ``tli``."""

    amount: Optional[float] = UNSET
    """Recurring bill line item amount. For a bill in an international currency (not USD), this value is in the local
    currency."""

    description: Optional[str] = UNSET
    """Recurring bill line item description"""

    price: Optional[float] = UNSET
    """Recurring bill line item unit price"""

    quantity: Optional[float] = UNSET
    """Recurring bill line item quantity"""

    classifications: Optional[ClassificationsBillV3RecurringbillsApi] = UNSET


class RecurringBillUpdateLineItemDict(TypedDict):
    id: str
    amount: NotRequired[float]
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: NotRequired[float]
    classifications: NotRequired[ClassificationsBillV3RecurringbillsApiDict]
