from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .color_settings_dto import ColorSettingsDto, ColorSettingsDtoDict
from .enums.powered_by_alignment_dev_cycle_management_projects_api import (
    PoweredByAlignmentDevCycleManagementProjectsApiOrStr,
)


class OptInSettingsDto(SdkBaseModel):
    title: str
    description: str
    enabled: bool
    image_url: str = Field(alias="imageURL")
    colors: ColorSettingsDto
    powered_by_alignment: PoweredByAlignmentDevCycleManagementProjectsApiOrStr = Field(alias="poweredByAlignment")


class OptInSettingsDtoDict(TypedDict):
    title: str
    description: str
    enabled: bool
    image_url: str
    colors: ColorSettingsDtoDict
    powered_by_alignment: PoweredByAlignmentDevCycleManagementProjectsApiOrStr
