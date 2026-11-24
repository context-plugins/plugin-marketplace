from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_sql_monitor_configuration_dto import CustomSqlMonitorConfigurationDto, CustomSqlMonitorConfigurationDtoDict


class PublicApiCreateCustomSqlMonitorRequestDto(SdkBaseModel):
    column_name: Optional[str] = Field(default=UNSET, alias="columnName")
    configuration: CustomSqlMonitorConfigurationDto
    monitor_name: str = Field(alias="monitorName")


class PublicApiCreateCustomSqlMonitorRequestDtoDict(TypedDict):
    column_name: NotRequired[str]
    configuration: CustomSqlMonitorConfigurationDtoDict
    monitor_name: str
