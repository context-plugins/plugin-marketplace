from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .gate import Gate, GateDict
from .receipt import Receipt, ReceiptDict


class ApiV1GatesExecutionResponse(SdkBaseModel):
    receipt: Receipt
    gate: Gate


class ApiV1GatesExecutionResponseDict(TypedDict):
    receipt: ReceiptDict
    gate: GateDict
