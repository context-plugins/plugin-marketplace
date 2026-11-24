from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaDataStreamWebStreamData(SdkBaseModel):
    """Data specific to web streams."""

    measurement_id: Optional[str] = Field(default=UNSET, alias="measurementId")
    """Output only. Analytics Measurement ID. Example: "G-1A2BCD345E"
    """

    default_uri: Optional[str] = Field(default=UNSET, alias="defaultUri")
    """Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
    """

    firebase_app_id: Optional[str] = Field(default=UNSET, alias="firebaseAppId")
    """Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted
    and recreated."""


class GoogleAnalyticsAdminV1BetaDataStreamWebStreamDataDict(TypedDict):
    measurement_id: NotRequired[str]
    default_uri: NotRequired[str]
    firebase_app_id: NotRequired[str]
