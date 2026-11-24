from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .window_summary import WindowSummary, WindowSummaryDict


class EvaluationResult(SdkBaseModel):
    algorithm_arn: Optional[str] = Field(default=UNSET, alias="AlgorithmArn")
    """The Amazon Resource Name (ARN) of the algorithm that was evaluated."""

    test_windows: Optional[list[WindowSummary]] = Field(default=UNSET, alias="TestWindows")
    """The array of test windows used for evaluating the algorithm. The NumberOfBacktestWindows from the
    EvaluationParameters object determines the number of windows in the array."""


class EvaluationResultDict(TypedDict):
    algorithm_arn: NotRequired[str]
    test_windows: NotRequired[list[WindowSummaryDict]]
