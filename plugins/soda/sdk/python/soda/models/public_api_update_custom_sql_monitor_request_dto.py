from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_sql_monitor_configuration_update_dto import (
    CustomSqlMonitorConfigurationUpdateDto,
    CustomSqlMonitorConfigurationUpdateDtoDict,
)


class PublicApiUpdateCustomSqlMonitorRequestDto(SdkBaseModel):
    column_name: Optional[str] = Field(default=UNSET, alias="columnName")
    configuration: Optional[CustomSqlMonitorConfigurationUpdateDto] = UNSET
    name: Optional[str] = UNSET


class PublicApiUpdateCustomSqlMonitorRequestDtoDict(TypedDict):
    column_name: NotRequired[str]
    configuration: NotRequired[CustomSqlMonitorConfigurationUpdateDtoDict]
    name: NotRequired[str]
