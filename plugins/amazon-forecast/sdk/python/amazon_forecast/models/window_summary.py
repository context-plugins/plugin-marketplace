from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.evaluation_type import EvaluationTypeOrStr
from .metrics import Metrics, MetricsDict


class WindowSummary(SdkBaseModel):
    test_window_start: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TestWindowStart")
    """The timestamp that defines the start of the window."""

    test_window_end: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TestWindowEnd")
    """The timestamp that defines the end of the window."""

    item_count: Optional[int] = Field(default=UNSET, alias="ItemCount")
    """The number of data points within the window."""

    evaluation_type: Optional[EvaluationTypeOrStr] = Field(default=UNSET, alias="EvaluationType")
    """The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The metrics for the
    specified window."""

    metrics: Optional[Metrics] = Field(default=UNSET, alias="Metrics")


class WindowSummaryDict(TypedDict):
    test_window_start: NotRequired[RFC3339DateTime]
    test_window_end: NotRequired[RFC3339DateTime]
    item_count: NotRequired[int]
    evaluation_type: NotRequired[EvaluationTypeOrStr]
    metrics: NotRequired[MetricsDict]
