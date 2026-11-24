from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.install_preference import InstallPreferenceOrStr


class Deeplink(SdkBaseModel):
    app_id: Optional[str] = UNSET
    app_uri_path: Optional[str] = UNSET
    install_url: Optional[str] = UNSET
    install_type: Optional[InstallPreferenceOrStr] = UNSET


class DeeplinkDict(TypedDict):
    app_id: NotRequired[str]
    app_uri_path: NotRequired[str]
    install_url: NotRequired[str]
    install_type: NotRequired[InstallPreferenceOrStr]
