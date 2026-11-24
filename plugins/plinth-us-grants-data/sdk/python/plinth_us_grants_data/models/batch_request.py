from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_row import BatchRow, BatchRowDict


class BatchRequest(SdkBaseModel):
    rows: list[BatchRow]
    """Up to 500 rows, answered in order."""


class BatchRequestDict(TypedDict):
    rows: list[BatchRowDict]
