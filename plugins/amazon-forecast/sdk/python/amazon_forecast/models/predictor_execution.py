from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_window_summary import TestWindowSummary, TestWindowSummaryDict


class PredictorExecution(SdkBaseModel):
    algorithm_arn: Optional[str] = Field(default=UNSET, alias="AlgorithmArn")
    """The ARN of the algorithm used to test the predictor."""

    test_windows: Optional[list[TestWindowSummary]] = Field(default=UNSET, alias="TestWindows")
    """An array of test windows used to evaluate the algorithm. The NumberOfBacktestWindows from the object determines
    the number of windows in the array."""


class PredictorExecutionDict(TypedDict):
    algorithm_arn: NotRequired[str]
    test_windows: NotRequired[list[TestWindowSummaryDict]]
