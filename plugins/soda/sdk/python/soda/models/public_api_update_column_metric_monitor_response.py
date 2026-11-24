from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .column_metric_monitor_dto import ColumnMetricMonitorDto, ColumnMetricMonitorDtoDict


class PublicApiUpdateColumnMetricMonitorResponse(SdkBaseModel):
    column_metric_monitor: ColumnMetricMonitorDto = Field(alias="columnMetricMonitor")


class PublicApiUpdateColumnMetricMonitorResponseDict(TypedDict):
    column_metric_monitor: ColumnMetricMonitorDtoDict
