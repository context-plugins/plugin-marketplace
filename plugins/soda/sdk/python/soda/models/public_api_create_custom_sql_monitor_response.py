from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_metric_monitor_dto import CustomMetricMonitorDto, CustomMetricMonitorDtoDict


class PublicApiCreateCustomSqlMonitorResponse(SdkBaseModel):
    custom_sql_monitor: CustomMetricMonitorDto = Field(alias="customSqlMonitor")


class PublicApiCreateCustomSqlMonitorResponseDict(TypedDict):
    custom_sql_monitor: CustomMetricMonitorDtoDict
