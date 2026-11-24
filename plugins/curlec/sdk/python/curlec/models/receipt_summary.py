from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReceiptSummary(SdkBaseModel):
    total_quantity: Optional[float] = UNSET
    sub_total_amount: Optional[int] = UNSET
    currency: Optional[str] = UNSET
    net_payable_amount: Optional[int] = UNSET
    payment_status: Optional[str] = UNSET
    discounts: Optional[list[Any]] = UNSET
    taxes: Optional[list[Any]] = UNSET


class ReceiptSummaryDict(TypedDict):
    total_quantity: NotRequired[float]
    sub_total_amount: NotRequired[int]
    currency: NotRequired[str]
    net_payable_amount: NotRequired[int]
    payment_status: NotRequired[str]
    discounts: NotRequired[list[Any]]
    taxes: NotRequired[list[Any]]
