from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_dev_cycle_management_environments_api import TypeDevCycleManagementEnvironmentsApiOrStr
from .environment_settings import EnvironmentSettings, EnvironmentSettingsDict


class UpdateEnvironmentDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """A unique display name"""

    key: Optional[str] = UNSET
    """Unique Environment identifier, can be used in the SDK / API to reference by key rather than ID. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Environment description."""

    color: Optional[str] = UNSET
    """Environment display color, used to highlight different environments on the dashboard. Must use Hex color code."""

    type_: Optional[TypeDevCycleManagementEnvironmentsApiOrStr] = Field(default=UNSET, alias="type")
    """The environment type"""

    settings: Optional[EnvironmentSettings] = UNSET
    """Environment based settings"""


class UpdateEnvironmentDtoDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    description: NotRequired[str]
    color: NotRequired[str]
    type_: NotRequired[TypeDevCycleManagementEnvironmentsApiOrStr]
    settings: NotRequired[EnvironmentSettingsDict]
