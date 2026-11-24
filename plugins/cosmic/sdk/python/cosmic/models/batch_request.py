from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_operation import BatchOperation, BatchOperationDict


class BatchRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    operations: list[BatchOperation]


class BatchRequestDict(TypedDict):
    operations: list[BatchOperationDict]
