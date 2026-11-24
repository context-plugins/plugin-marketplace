from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .check_result_anomaly_detection_details_dto import (
    CheckResultAnomalyDetectionDetailsDto,
    CheckResultAnomalyDetectionDetailsDtoDict,
)
from .check_result_diagnostics_v4 import CheckResultDiagnosticsV4, CheckResultDiagnosticsV4Dict
from .check_result_value_series_dto import CheckResultValueSeriesDto, CheckResultValueSeriesDtoDict
from .enums.measure_dto import MeasureDtoOrStr


class CheckResultValueDto(SdkBaseModel):
    anomaly_detection_details: Optional[CheckResultAnomalyDetectionDetailsDto] = Field(
        default=UNSET, alias="anomalyDetectionDetails"
    )
    data_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dataTimestamp")
    diagnostics: Optional[CheckResultDiagnosticsV4] = UNSET
    id: str
    measure: Optional[MeasureDtoOrStr] = UNSET
    value: Optional[float] = UNSET
    value_label: Optional[str] = Field(default=UNSET, alias="valueLabel")
    value_series: Optional[CheckResultValueSeriesDto] = Field(default=UNSET, alias="valueSeries")


class CheckResultValueDtoDict(TypedDict):
    anomaly_detection_details: NotRequired[CheckResultAnomalyDetectionDetailsDtoDict]
    data_timestamp: NotRequired[RFC3339DateTime]
    diagnostics: NotRequired[CheckResultDiagnosticsV4Dict]
    id: str
    measure: NotRequired[MeasureDtoOrStr]
    value: NotRequired[float]
    value_label: NotRequired[str]
    value_series: NotRequired[CheckResultValueSeriesDtoDict]
