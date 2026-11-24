from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.install_preference import InstallPreferenceOrStr
from .enums.mobile_os import MobileOsOrStr


class DeeplinkRule(SdkBaseModel):
    guid: Optional[str] = UNSET
    bitlink: Optional[str] = UNSET
    app_uri_path: Optional[str] = UNSET
    install_url: Optional[str] = UNSET
    app_guid: Optional[str] = UNSET
    os: Optional[MobileOsOrStr] = UNSET
    install_type: Optional[InstallPreferenceOrStr] = UNSET
    created: Optional[str] = UNSET
    """ISO timestamp"""

    modified: Optional[str] = UNSET
    """ISO timestamp"""

    brand_guid: Optional[str] = UNSET


class DeeplinkRuleDict(TypedDict):
    guid: NotRequired[str]
    bitlink: NotRequired[str]
    app_uri_path: NotRequired[str]
    install_url: NotRequired[str]
    app_guid: NotRequired[str]
    os: NotRequired[MobileOsOrStr]
    install_type: NotRequired[InstallPreferenceOrStr]
    created: NotRequired[str]
    modified: NotRequired[str]
    brand_guid: NotRequired[str]
