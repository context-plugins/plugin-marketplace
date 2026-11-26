from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppUpdateRequest(SdkBaseModel):
    target_version: Optional[str] = Field(default=UNSET, alias="targetVersion")
    """Target version to update to"""

    allow_preview_version: Optional[bool] = Field(default=UNSET, alias="allowPreviewVersion")
    """Whether to allow preview versions"""

    ignore_upgrade_window: Optional[bool] = Field(default=UNSET, alias="ignoreUpgradeWindow")
    """Whether to ignore the update window"""

    allow_dependency_update: Optional[bool] = Field(default=UNSET, alias="allowDependencyUpdate")
    """Whether to also update dependent apps"""


class AppUpdateRequestDict(TypedDict):
    target_version: NotRequired[str]
    allow_preview_version: NotRequired[bool]
    ignore_upgrade_window: NotRequired[bool]
    allow_dependency_update: NotRequired[bool]
