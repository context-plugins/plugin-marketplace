from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .value_receipt_summary import ValueReceiptSummary, ValueReceiptSummaryDict


class ValueReceiptListResponse(SdkBaseModel):
    data: list[ValueReceiptSummary]
    total: int


class ValueReceiptListResponseDict(TypedDict):
    data: list[ValueReceiptSummaryDict]
    total: int
