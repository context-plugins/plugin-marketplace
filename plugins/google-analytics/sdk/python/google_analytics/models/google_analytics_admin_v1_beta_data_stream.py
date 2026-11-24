from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .google_analytics_admin_v1_beta_data_stream_android_app_stream_data2 import (
    GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2,
    GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Dict,
)
from .google_analytics_admin_v1_beta_data_stream_ios_app_stream_data2 import (
    GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2,
    GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Dict,
)
from .google_analytics_admin_v1_beta_data_stream_web_stream_data2 import (
    GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2,
    GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2Dict,
)


class GoogleAnalyticsAdminV1BetaDataStream(SdkBaseModel):
    """A resource message representing a data stream."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Required. Immutable. The type of this DataStream resource."""

    web_stream_data: Optional[GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2] = Field(
        default=UNSET, alias="webStreamData"
    )
    """Data specific to web streams. Must be populated if type is WEB_DATA_STREAM."""

    ios_app_stream_data: Optional[GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2] = Field(
        default=UNSET, alias="iosAppStreamData"
    )
    """Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example:
    "properties/1000/dataStreams/2000"
    """

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this stream was originally created."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name
    length is 255 UTF-16 code units."""

    android_app_stream_data: Optional[GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2] = Field(
        default=UNSET, alias="androidAppStreamData"
    )
    """Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Time when stream payload fields were last updated."""


class GoogleAnalyticsAdminV1BetaDataStreamDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    web_stream_data: NotRequired[GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2Dict]
    ios_app_stream_data: NotRequired[GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Dict]
    name: NotRequired[str]
    create_time: NotRequired[str]
    display_name: NotRequired[str]
    android_app_stream_data: NotRequired[GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Dict]
    update_time: NotRequired[str]
