from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData(SdkBaseModel):
    """Data specific to Android app streams."""

    firebase_app_id: Optional[str] = Field(default=UNSET, alias="firebaseAppId")
    """Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is
    deleted and recreated."""

    package_name: Optional[str] = Field(default=UNSET, alias="packageName")
    """Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
    """


class GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamDataDict(TypedDict):
    firebase_app_id: NotRequired[str]
    package_name: NotRequired[str]
