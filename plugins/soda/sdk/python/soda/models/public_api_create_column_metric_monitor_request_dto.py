from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .column_metric_monitor_configuration_dto import (
    ColumnMetricMonitorConfigurationDto,
    ColumnMetricMonitorConfigurationDtoDict,
)


class PublicApiCreateColumnMetricMonitorRequestDto(SdkBaseModel):
    column_metric_monitor_configuration: ColumnMetricMonitorConfigurationDto = Field(
        alias="columnMetricMonitorConfiguration"
    )
    column_name: str = Field(alias="columnName")


class PublicApiCreateColumnMetricMonitorRequestDtoDict(TypedDict):
    column_metric_monitor_configuration: ColumnMetricMonitorConfigurationDtoDict
    column_name: str
