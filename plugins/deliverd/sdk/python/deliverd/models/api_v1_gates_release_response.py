from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .gate import Gate, GateDict
from .receipt import Receipt, ReceiptDict


class ApiV1GatesReleaseResponse(SdkBaseModel):
    receipt: Receipt
    gate: Gate
    url: str


class ApiV1GatesReleaseResponseDict(TypedDict):
    receipt: ReceiptDict
    gate: GateDict
    url: str
