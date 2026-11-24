from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dynatrace_project_settings_dto import DynatraceProjectSettingsDto, DynatraceProjectSettingsDtoDict
from .edge_db_settings_dto import EdgeDbSettingsDto, EdgeDbSettingsDtoDict
from .life_cycle_settings_dto import LifeCycleSettingsDto, LifeCycleSettingsDtoDict
from .obfuscation_settings_dto import ObfuscationSettingsDto, ObfuscationSettingsDtoDict
from .opt_in_settings_dto import OptInSettingsDto, OptInSettingsDtoDict
from .sdk_type_visibility_settings_dto import SdkTypeVisibilitySettingsDto, SdkTypeVisibilitySettingsDtoDict


class ProjectSettingsDto(SdkBaseModel):
    edge_db: EdgeDbSettingsDto = Field(alias="edgeDB")
    opt_in: OptInSettingsDto = Field(alias="optIn")
    sdk_type_visibility: SdkTypeVisibilitySettingsDto = Field(alias="sdkTypeVisibility")
    life_cycle: LifeCycleSettingsDto = Field(alias="lifeCycle")
    obfuscation: ObfuscationSettingsDto
    disable_passthrough_rollouts: bool = Field(alias="disablePassthroughRollouts")
    dynatrace: DynatraceProjectSettingsDto


class ProjectSettingsDtoDict(TypedDict):
    edge_db: EdgeDbSettingsDtoDict
    opt_in: OptInSettingsDtoDict
    sdk_type_visibility: SdkTypeVisibilitySettingsDtoDict
    life_cycle: LifeCycleSettingsDtoDict
    obfuscation: ObfuscationSettingsDtoDict
    disable_passthrough_rollouts: bool
    dynatrace: DynatraceProjectSettingsDtoDict
