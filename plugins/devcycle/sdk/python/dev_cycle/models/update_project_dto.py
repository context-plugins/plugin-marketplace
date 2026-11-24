from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_settings_dto import ProjectSettingsDto, ProjectSettingsDtoDict


class UpdateProjectDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Project name"""

    key: Optional[str] = UNSET
    """A unique key to identify the Project"""

    description: Optional[str] = UNSET
    """A description of the Project"""

    color: Optional[str] = UNSET
    """Project display color, used to highlight different projects on the dashboard. Must use Hex color code."""

    settings: Optional[ProjectSettingsDto] = UNSET


class UpdateProjectDtoDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    description: NotRequired[str]
    color: NotRequired[str]
    settings: NotRequired[ProjectSettingsDtoDict]
