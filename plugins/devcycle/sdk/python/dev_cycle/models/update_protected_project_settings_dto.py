from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .protected_project_settings_dto import ProtectedProjectSettingsDto, ProtectedProjectSettingsDtoDict


class UpdateProtectedProjectSettingsDto(SdkBaseModel):
    settings: ProtectedProjectSettingsDto


class UpdateProtectedProjectSettingsDtoDict(TypedDict):
    settings: ProtectedProjectSettingsDtoDict
