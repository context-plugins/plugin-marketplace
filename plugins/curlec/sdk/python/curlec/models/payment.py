from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Payment(SdkBaseModel):
    method: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    payment_reference_id: Optional[str] = UNSET
    financier_data: Optional[Any] = UNSET


class PaymentDict(TypedDict):
    method: NotRequired[str]
    currency: NotRequired[str]
    amount: NotRequired[int]
    payment_reference_id: NotRequired[str]
    financier_data: NotRequired[Any]
