from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .column_monitor_configuration_dto import ColumnMonitorConfigurationDto, ColumnMonitorConfigurationDtoDict


class PublicApiUpdateColumnMetricMonitorRequestDto(SdkBaseModel):
    configuration: ColumnMonitorConfigurationDto


class PublicApiUpdateColumnMetricMonitorRequestDtoDict(TypedDict):
    configuration: ColumnMonitorConfigurationDtoDict
