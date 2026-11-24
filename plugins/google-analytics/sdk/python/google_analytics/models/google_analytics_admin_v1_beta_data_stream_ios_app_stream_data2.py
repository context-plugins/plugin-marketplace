from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2(SdkBaseModel):
    """Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM."""

    firebase_app_id: Optional[str] = Field(default=UNSET, alias="firebaseAppId")
    """Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted
    and recreated."""

    bundle_id: Optional[str] = Field(default=UNSET, alias="bundleId")
    """Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
    """


class GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Dict(TypedDict):
    firebase_app_id: NotRequired[str]
    bundle_id: NotRequired[str]
