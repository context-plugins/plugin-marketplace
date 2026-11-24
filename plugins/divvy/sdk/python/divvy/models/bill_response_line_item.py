from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications1 import Classifications1, Classifications1Dict


class BillResponseLineItem(SdkBaseModel):
    """Line items that define a bill's overall amount."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the bill line item. The value begins with ``bli``."""

    amount: float
    """Bill line item amount. For a bill in an international currency (not USD), this value is in the local currency.

    If you set ``amount``, ``quantity``, and ``price``, BILL uses the ``amount`` value as the bill line item total
    amount."""

    quantity: Optional[float] = UNSET
    """Bill line item unit quantity"""

    price: Optional[float] = UNSET
    """Bill line item unit price. For a bill in an international currency (not USD), this value is in the local
    currency."""

    description: Optional[str] = UNSET
    """Bill line item description"""

    classifications: Optional[Classifications1] = UNSET


class BillResponseLineItemDict(TypedDict):
    id: NotRequired[str]
    amount: float
    quantity: NotRequired[float]
    price: NotRequired[float]
    description: NotRequired[str]
    classifications: NotRequired[Classifications1Dict]
