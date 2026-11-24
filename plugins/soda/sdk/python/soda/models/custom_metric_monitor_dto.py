from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_sql_monitor_configuration_dto import CustomSqlMonitorConfigurationDto, CustomSqlMonitorConfigurationDtoDict


class CustomMetricMonitorDto(SdkBaseModel):
    check_id: str = Field(alias="checkId")
    column_name: Optional[str] = Field(default=UNSET, alias="columnName")
    configuration: CustomSqlMonitorConfigurationDto
    monitor_name: str = Field(alias="monitorName")


class CustomMetricMonitorDtoDict(TypedDict):
    check_id: str
    column_name: NotRequired[str]
    configuration: CustomSqlMonitorConfigurationDtoDict
    monitor_name: str
