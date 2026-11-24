from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_dev_cycle_management_environments_api import TypeDevCycleManagementEnvironmentsApiOrStr
from .environment_settings import EnvironmentSettings, EnvironmentSettingsDict
from .sdk_keys import SdkKeys, SdkKeysDict


class EnvironmentModel(SdkBaseModel):
    name: str
    """A unique display name"""

    key: str
    """Unique Environment identifier, can be used in the SDK / API to reference by key rather than ID. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Environment description."""

    color: Optional[str] = UNSET
    """Environment display color, used to highlight different environments on the dashboard. Must use Hex color code."""

    id: str = Field(alias="_id")
    """A unique Environment ID"""

    project: str = Field(alias="_project")
    """The Project owning the Environment"""

    type_: TypeDevCycleManagementEnvironmentsApiOrStr = Field(alias="type")
    """The environment type"""

    created_by: str = Field(alias="_createdBy")
    """ID of the User who created the Environment."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Environment was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Environment was last updated"""

    sdk_keys: Optional[SdkKeys] = Field(default=UNSET, alias="sdkKeys")
    """SDK Keys for mobile SDKs / client SDKs / server SDKs. Multiple keys can be created to allow for key rotation."""

    settings: Optional[EnvironmentSettings] = UNSET
    """Environment based settings"""

    readonly: bool
    """Controls whether the environment is editable for a given user"""


class EnvironmentModelDict(TypedDict):
    name: str
    key: str
    description: NotRequired[str]
    color: NotRequired[str]
    id: str
    project: str
    type_: TypeDevCycleManagementEnvironmentsApiOrStr
    created_by: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    sdk_keys: NotRequired[SdkKeysDict]
    settings: NotRequired[EnvironmentSettingsDict]
    readonly: bool
