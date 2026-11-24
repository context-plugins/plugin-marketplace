from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.time_point_granularity import TimePointGranularityOrStr
from .enums.time_series_granularity import TimeSeriesGranularityOrStr


class ExplainabilityConfig(SdkBaseModel):
    time_series_granularity: TimeSeriesGranularityOrStr = Field(alias="TimeSeriesGranularity")
    """To create an Explainability for all time series in your datasets, use ALL. To create an Explainability for
    specific time series in your datasets, use SPECIFIC. Specify time series by uploading a CSV or Parquet file to an
    Amazon S3 bucket and set the location within the DataDestination data type."""

    time_point_granularity: TimePointGranularityOrStr = Field(alias="TimePointGranularity")
    """To create an Explainability for all time points in your forecast horizon, use ALL. To create an Explainability
    for specific time points in your forecast horizon, use SPECIFIC. Specify time points with the StartDateTime and
    EndDateTime parameters within the CreateExplainability operation."""


class ExplainabilityConfigDict(TypedDict):
    time_series_granularity: TimeSeriesGranularityOrStr
    time_point_granularity: TimePointGranularityOrStr
