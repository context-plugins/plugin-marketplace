from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_razorpay_settlements_api import TypeRazorpaySettlementsApiOrStr


class SettlementReconRecord(SdkBaseModel):
    """A single transaction line item in the settlement reconciliation report."""

    entity_id: Optional[str] = UNSET
    """ID of the transaction entity (payment, refund, etc.)."""

    settlement_id: Optional[str] = UNSET
    order_id: Optional[str] = UNSET
    payment_id: Optional[str] = UNSET
    dispute_id: Optional[str] = UNSET
    type_: Optional[TypeRazorpaySettlementsApiOrStr] = Field(default=UNSET, alias="type")
    amount: Optional[int] = UNSET
    debit: Optional[int] = UNSET
    credit: Optional[int] = UNSET
    fee: Optional[int] = UNSET
    tax: Optional[int] = UNSET
    currency: Optional[str] = UNSET
    method: Optional[str] = UNSET
    description: Optional[str] = UNSET
    notes: Optional[str] = UNSET
    settled: Optional[bool] = UNSET
    on_hold: Optional[bool] = UNSET
    created_at: Optional[int] = UNSET
    settled_at: Optional[int] = UNSET
    posted_at: Optional[int] = UNSET
    card_network: Optional[str] = UNSET
    card_issuer: Optional[str] = UNSET
    card_type: Optional[str] = UNSET
    settlement_utr: Optional[str] = UNSET
    order_receipt: Optional[str] = UNSET
    credit_type: Optional[str] = UNSET


class SettlementReconRecordDict(TypedDict):
    entity_id: NotRequired[str]
    settlement_id: NotRequired[str]
    order_id: NotRequired[str]
    payment_id: NotRequired[str]
    dispute_id: NotRequired[str]
    type_: NotRequired[TypeRazorpaySettlementsApiOrStr]
    amount: NotRequired[int]
    debit: NotRequired[int]
    credit: NotRequired[int]
    fee: NotRequired[int]
    tax: NotRequired[int]
    currency: NotRequired[str]
    method: NotRequired[str]
    description: NotRequired[str]
    notes: NotRequired[str]
    settled: NotRequired[bool]
    on_hold: NotRequired[bool]
    created_at: NotRequired[int]
    settled_at: NotRequired[int]
    posted_at: NotRequired[int]
    card_network: NotRequired[str]
    card_issuer: NotRequired[str]
    card_type: NotRequired[str]
    settlement_utr: NotRequired[str]
    order_receipt: NotRequired[str]
    credit_type: NotRequired[str]
