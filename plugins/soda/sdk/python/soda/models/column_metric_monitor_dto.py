from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .column_monitor_configuration_dto import ColumnMonitorConfigurationDto, ColumnMonitorConfigurationDtoDict
from .enums.column_monitor_metric_type_dto import ColumnMonitorMetricTypeDtoOrStr


class ColumnMetricMonitorDto(SdkBaseModel):
    check_id: str = Field(alias="checkId")
    column_name: str = Field(alias="columnName")
    configuration: ColumnMonitorConfigurationDto
    metric_type: ColumnMonitorMetricTypeDtoOrStr = Field(alias="metricType")


class ColumnMetricMonitorDtoDict(TypedDict):
    check_id: str
    column_name: str
    configuration: ColumnMonitorConfigurationDtoDict
    metric_type: ColumnMonitorMetricTypeDtoOrStr
