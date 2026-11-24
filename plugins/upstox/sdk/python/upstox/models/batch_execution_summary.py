from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchExecutionSummary(SdkBaseModel):
    total: Optional[int] = UNSET
    """The total number of order lines present in the payload."""

    success: Optional[int] = UNSET
    """The number of order lines that were successfully placed without any errors."""

    error: Optional[int] = UNSET
    """The number of order lines that encountered errors during processing, despite their payloads being valid."""


class BatchExecutionSummaryDict(TypedDict):
    total: NotRequired[int]
    success: NotRequired[int]
    error: NotRequired[int]
