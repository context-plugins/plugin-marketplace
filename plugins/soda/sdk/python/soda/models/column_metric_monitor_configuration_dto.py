from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .column_monitor_configuration_dto import ColumnMonitorConfigurationDto, ColumnMonitorConfigurationDtoDict
from .enums.column_monitor_metric_type_dto import ColumnMonitorMetricTypeDtoOrStr


class ColumnMetricMonitorConfigurationDto(SdkBaseModel):
    configuration: ColumnMonitorConfigurationDto
    metric_type: ColumnMonitorMetricTypeDtoOrStr = Field(alias="metricType")


class ColumnMetricMonitorConfigurationDtoDict(TypedDict):
    configuration: ColumnMonitorConfigurationDtoDict
    metric_type: ColumnMonitorMetricTypeDtoOrStr
