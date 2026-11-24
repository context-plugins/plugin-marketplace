from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_monitor_configuration_dto import DatasetMonitorConfigurationDto, DatasetMonitorConfigurationDtoDict
from .enums.dataset_monitor_metric_type_dto import DatasetMonitorMetricTypeDtoOrStr


class DatasetMetricMonitorConfigurationDto(SdkBaseModel):
    configuration: DatasetMonitorConfigurationDto
    metric_type: DatasetMonitorMetricTypeDtoOrStr = Field(alias="metricType")


class DatasetMetricMonitorConfigurationDtoDict(TypedDict):
    configuration: DatasetMonitorConfigurationDtoDict
    metric_type: DatasetMonitorMetricTypeDtoOrStr
