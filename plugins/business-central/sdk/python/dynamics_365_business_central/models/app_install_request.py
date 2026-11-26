from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppInstallRequest(SdkBaseModel):
    target_version: Optional[str] = Field(default=UNSET, alias="targetVersion")
    """Version to install"""

    allow_preview_version: Optional[bool] = Field(default=UNSET, alias="allowPreviewVersion")
    """Whether to allow preview versions"""

    accept_isv_eula: Optional[bool] = Field(default=UNSET, alias="acceptIsvEula")
    """Whether the ISV EULA is accepted"""

    allow_dependency_update: Optional[bool] = Field(default=UNSET, alias="allowDependencyUpdate")
    """Whether to also update dependent apps"""


class AppInstallRequestDict(TypedDict):
    target_version: NotRequired[str]
    allow_preview_version: NotRequired[bool]
    accept_isv_eula: NotRequired[bool]
    allow_dependency_update: NotRequired[bool]
