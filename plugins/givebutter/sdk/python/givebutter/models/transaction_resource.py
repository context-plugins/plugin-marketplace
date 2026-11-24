from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .transaction_line_item_resource import TransactionLineItemResource, TransactionLineItemResourceDict


class TransactionResource(SdkBaseModel):
    id: str
    plan_id: str
    pledge_id: str
    amount: float
    fee: float
    fee_covered: float
    donated: float
    payout: float
    captured: str
    captured_at: str
    timezone: str
    refunded: str
    refunded_at: str
    line_items: list[TransactionLineItemResource]
    fair_market_value_amount: str | None
    tax_deductible_amount: str | None
    is_recurring: str


class TransactionResourceDict(TypedDict):
    id: str
    plan_id: str
    pledge_id: str
    amount: float
    fee: float
    fee_covered: float
    donated: float
    payout: float
    captured: str
    captured_at: str
    timezone: str
    refunded: str
    refunded_at: str
    line_items: list[TransactionLineItemResourceDict]
    fair_market_value_amount: str | None
    tax_deductible_amount: str | None
    is_recurring: str
