from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_metric_monitor_dto import CustomMetricMonitorDto, CustomMetricMonitorDtoDict


class PublicApiUpdateCustomSqlMonitorResponse(SdkBaseModel):
    custom_sql_metric_monitor: CustomMetricMonitorDto = Field(alias="customSqlMetricMonitor")


class PublicApiUpdateCustomSqlMonitorResponseDict(TypedDict):
    custom_sql_metric_monitor: CustomMetricMonitorDtoDict
