from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentHistoryData(SdkBaseModel):
    amount: Optional[float] = UNSET
    mode: Optional[str] = UNSET
    status: Optional[str] = UNSET
    reason: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    eta: Optional[str] = UNSET
    last_updated_at: Optional[str] = UNSET
    bank_name: Optional[str] = UNSET
    transaction_id: Optional[str] = UNSET
    total_charges: Optional[float] = UNSET
    charges_category: Optional[str] = UNSET
    created_at: Optional[str] = UNSET


class PaymentHistoryDataDict(TypedDict):
    amount: NotRequired[float]
    mode: NotRequired[str]
    status: NotRequired[str]
    reason: NotRequired[str]
    currency: NotRequired[str]
    eta: NotRequired[str]
    last_updated_at: NotRequired[str]
    bank_name: NotRequired[str]
    transaction_id: NotRequired[str]
    total_charges: NotRequired[float]
    charges_category: NotRequired[str]
    created_at: NotRequired[str]
