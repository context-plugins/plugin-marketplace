from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .extreme_values_content_dto import ExtremeValuesContentDto, ExtremeValuesContentDtoDict
from .histogram_bin_content_dto import HistogramBinContentDto, HistogramBinContentDtoDict
from .value_count_content_dto import ValueCountContentDto, ValueCountContentDtoDict


class ColumnMetricContentDto(SdkBaseModel):
    average: Optional[float] = UNSET
    average_length: Optional[float] = Field(default=UNSET, alias="averageLength")
    distinct_count: Optional[int] = Field(default=UNSET, alias="distinctCount")
    extreme_values: Optional[ExtremeValuesContentDto] = Field(default=UNSET, alias="extremeValues")
    frequent_values: Optional[list[ValueCountContentDto]] = Field(default=UNSET, alias="frequentValues")
    histogram: Optional[list[HistogramBinContentDto]] = UNSET
    maximum: Optional[Any] = UNSET
    maximum_length: Optional[int] = Field(default=UNSET, alias="maximumLength")
    maximum_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="maximumTimestamp")
    median: Optional[float] = UNSET
    minimum: Optional[Any] = UNSET
    minimum_length: Optional[int] = Field(default=UNSET, alias="minimumLength")
    minimum_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="minimumTimestamp")
    missing_count: Optional[int] = Field(default=UNSET, alias="missingCount")
    standard_deviation: Optional[float] = Field(default=UNSET, alias="standardDeviation")
    sum: Optional[float] = UNSET
    variance: Optional[float] = UNSET


class ColumnMetricContentDtoDict(TypedDict):
    average: NotRequired[float]
    average_length: NotRequired[float]
    distinct_count: NotRequired[int]
    extreme_values: NotRequired[ExtremeValuesContentDtoDict]
    frequent_values: NotRequired[list[ValueCountContentDtoDict]]
    histogram: NotRequired[list[HistogramBinContentDtoDict]]
    maximum: NotRequired[Any]
    maximum_length: NotRequired[int]
    maximum_timestamp: NotRequired[RFC3339DateTime]
    median: NotRequired[float]
    minimum: NotRequired[Any]
    minimum_length: NotRequired[int]
    minimum_timestamp: NotRequired[RFC3339DateTime]
    missing_count: NotRequired[int]
    standard_deviation: NotRequired[float]
    sum: NotRequired[float]
    variance: NotRequired[float]
