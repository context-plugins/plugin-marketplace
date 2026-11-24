from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .operation import Operation, OperationDict


class BatchRequest(SdkBaseModel):
    operations: list[Operation]


class BatchRequestDict(TypedDict):
    operations: list[OperationDict]
