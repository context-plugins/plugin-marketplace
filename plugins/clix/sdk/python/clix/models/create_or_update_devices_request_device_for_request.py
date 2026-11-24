from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateOrUpdateDevicesRequestDeviceForRequest(SdkBaseModel):
    id: Optional[str] = UNSET
    model: Optional[str] = UNSET
    manufacturer: Optional[str] = UNSET
    platform: Optional[str] = UNSET
    os_name: Optional[str] = UNSET
    os_version: Optional[str] = UNSET
    app_name: Optional[str] = UNSET
    app_version: Optional[str] = UNSET
    sdk_type: Optional[str] = UNSET
    sdk_version: Optional[str] = UNSET
    ad_id: Optional[str] = UNSET
    locale_region: Optional[str] = UNSET
    locale_language: Optional[str] = UNSET
    timezone: Optional[str] = UNSET
    is_push_permission_granted: Optional[bool] = UNSET
    push_token: Optional[str] = UNSET
    push_token_type: Optional[str] = UNSET


class CreateOrUpdateDevicesRequestDeviceForRequestDict(TypedDict):
    id: NotRequired[str]
    model: NotRequired[str]
    manufacturer: NotRequired[str]
    platform: NotRequired[str]
    os_name: NotRequired[str]
    os_version: NotRequired[str]
    app_name: NotRequired[str]
    app_version: NotRequired[str]
    sdk_type: NotRequired[str]
    sdk_version: NotRequired[str]
    ad_id: NotRequired[str]
    locale_region: NotRequired[str]
    locale_language: NotRequired[str]
    timezone: NotRequired[str]
    is_push_permission_granted: NotRequired[bool]
    push_token: NotRequired[str]
    push_token_type: NotRequired[str]
