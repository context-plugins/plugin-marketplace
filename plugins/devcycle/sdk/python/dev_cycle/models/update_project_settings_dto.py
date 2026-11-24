from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .project_settings import ProjectSettings, ProjectSettingsDict


class UpdateProjectSettingsDto(SdkBaseModel):
    settings: ProjectSettings


class UpdateProjectSettingsDtoDict(TypedDict):
    settings: ProjectSettingsDict
