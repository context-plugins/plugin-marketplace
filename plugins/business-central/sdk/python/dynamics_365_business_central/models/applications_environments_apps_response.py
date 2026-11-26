from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_info import AppInfo, AppInfoDict


class ApplicationsEnvironmentsAppsResponse(SdkBaseModel):
    value: Optional[list[AppInfo]] = UNSET


class ApplicationsEnvironmentsAppsResponseDict(TypedDict):
    value: NotRequired[list[AppInfoDict]]
