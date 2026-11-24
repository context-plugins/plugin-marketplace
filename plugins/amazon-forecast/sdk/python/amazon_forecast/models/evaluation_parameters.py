from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EvaluationParameters(SdkBaseModel):
    number_of_backtest_windows: Optional[int] = Field(default=UNSET, alias="NumberOfBacktestWindows")
    """The number of times to split the input data. The default is 1. Valid values are 1 through 5."""

    back_test_window_offset: Optional[int] = Field(default=UNSET, alias="BackTestWindowOffset")
    """The point from the end of the dataset where you want to split the data for model training and testing
    (evaluation). Specify the value as the number of data points. The default is the value of the forecast horizon.
    BackTestWindowOffset can be used to mimic a past virtual forecast start date. This value must be greater than or
    equal to the forecast horizon and less than half of the TARGET_TIME_SERIES dataset length. ForecastHorizon
    BackTestWindowOffset"""


class EvaluationParametersDict(TypedDict):
    number_of_backtest_windows: NotRequired[int]
    back_test_window_offset: NotRequired[int]
