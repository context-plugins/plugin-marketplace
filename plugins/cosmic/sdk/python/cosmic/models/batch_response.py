from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .operation import Operation, OperationDict


class BatchResponse(SdkBaseModel):
    """Results in request order. Operations succeed or fail independently, so check each ``status``."""

    operations: list[Operation]


class BatchResponseDict(TypedDict):
    operations: list[OperationDict]
