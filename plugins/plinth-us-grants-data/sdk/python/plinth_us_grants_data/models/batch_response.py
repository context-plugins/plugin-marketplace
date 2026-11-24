from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch_result import BatchResult, BatchResultDict
from .x_plinth import XPlinth, XPlinthDict


class BatchResponse(SdkBaseModel):
    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    results_count: int
    calls_charged: int
    """Calls this request cost: one per 50 rows."""

    results: list[BatchResult]


class BatchResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    results_count: int
    calls_charged: int
    results: list[BatchResultDict]
