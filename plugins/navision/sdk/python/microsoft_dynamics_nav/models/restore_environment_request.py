from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.environment_type1 import EnvironmentType1OrStr


class RestoreEnvironmentRequest(SdkBaseModel):
    environment_name: str = Field(alias="EnvironmentName")
    """Name of the new restored environment"""

    environment_type: EnvironmentType1OrStr = Field(alias="EnvironmentType")
    """Type of the new environment"""

    point_in_time: RFC3339DateTime = Field(alias="PointInTime")
    """Point in time to restore to (ISO 8601 UTC)"""

    skip_installing_ptes: bool = Field(default=False, alias="SkipInstallingPTEs")
    """Whether to uninstall per-tenant extensions"""

    skip_installing_third_party_global_apps: bool = Field(default=False, alias="SkipInstallingThirdPartyGlobalApps")
    """Whether to uninstall third-party AppSource apps"""

    skip_environment_cleanup: bool = Field(default=False, alias="SkipEnvironmentCleanup")
    """Whether to skip execution of cleanup codeunits"""


class RestoreEnvironmentRequestDict(TypedDict):
    environment_name: str
    environment_type: EnvironmentType1OrStr
    point_in_time: RFC3339DateTime
    skip_installing_ptes: NotRequired[bool]
    skip_installing_third_party_global_apps: NotRequired[bool]
    skip_environment_cleanup: NotRequired[bool]
