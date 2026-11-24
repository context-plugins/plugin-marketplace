from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorMetric(SdkBaseModel):
    forecast_type: Optional[str] = Field(default=UNSET, alias="ForecastType")
    """The Forecast type used to compute WAPE, MAPE, MASE, and RMSE."""

    wape: Optional[float] = Field(default=UNSET, alias="WAPE")
    """The weighted absolute percentage error (WAPE)."""

    rmse: Optional[float] = Field(default=UNSET, alias="RMSE")
    """The root-mean-square error (RMSE)."""

    mase: Optional[float] = Field(default=UNSET, alias="MASE")
    """The Mean Absolute Scaled Error (MASE)"""

    mape: Optional[float] = Field(default=UNSET, alias="MAPE")
    """The Mean Absolute Percentage Error (MAPE)"""


class ErrorMetricDict(TypedDict):
    forecast_type: NotRequired[str]
    wape: NotRequired[float]
    rmse: NotRequired[float]
    mase: NotRequired[float]
    mape: NotRequired[float]
