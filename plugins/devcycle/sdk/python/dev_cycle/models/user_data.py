from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sdk_type import SdkTypeOrStr


class UserData(SdkBaseModel):
    user_id: str
    """Unique id to identify the user"""

    email: Optional[str] = UNSET
    """User's email used to identify the user on the dashboard / target audiences"""

    name: Optional[str] = UNSET
    """User's name used to identify the user on the dashboard / target audiences"""

    language: Optional[str] = UNSET
    """User's language in ISO 639-1 format"""

    country: Optional[str] = UNSET
    """User's country in ISO 3166 alpha-2 format"""

    app_version: Optional[str] = Field(default=UNSET, alias="appVersion")
    """App Version of the running application"""

    app_build: Optional[str] = Field(default=UNSET, alias="appBuild")
    """App Build number of the running application"""

    custom_data: Optional[Any] = Field(default=UNSET, alias="customData")
    """User's custom data to target the user with, data will be logged to DevCycle for use in dashboard."""

    private_custom_data: Optional[Any] = Field(default=UNSET, alias="privateCustomData")
    """User's custom data to target the user with, data will not be logged to DevCycle only used for feature
    bucketing."""

    created_date: Optional[float] = Field(default=UNSET, alias="createdDate")
    """Date the user was created, Unix epoch timestamp format"""

    last_seen_date: Optional[float] = Field(default=UNSET, alias="lastSeenDate")
    """Date the user was created, Unix epoch timestamp format"""

    platform: Optional[str] = UNSET
    """Platform the Client SDK is running on"""

    platform_version: Optional[str] = Field(default=UNSET, alias="platformVersion")
    """Version of the platform the Client SDK is running on"""

    device_model: Optional[str] = Field(default=UNSET, alias="deviceModel")
    """User's device model"""

    sdk_type: Optional[SdkTypeOrStr] = Field(default=UNSET, alias="sdkType")
    """DevCycle SDK type"""

    sdk_version: Optional[str] = Field(default=UNSET, alias="sdkVersion")
    """DevCycle SDK Version"""


class UserDataDict(TypedDict):
    user_id: str
    email: NotRequired[str]
    name: NotRequired[str]
    language: NotRequired[str]
    country: NotRequired[str]
    app_version: NotRequired[str]
    app_build: NotRequired[str]
    custom_data: NotRequired[Any]
    private_custom_data: NotRequired[Any]
    created_date: NotRequired[float]
    last_seen_date: NotRequired[float]
    platform: NotRequired[str]
    platform_version: NotRequired[str]
    device_model: NotRequired[str]
    sdk_type: NotRequired[SdkTypeOrStr]
    sdk_version: NotRequired[str]
