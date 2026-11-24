from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_data_retention import EventDataRetentionOrStr
from .enums.user_data_retention import UserDataRetentionOrStr


class GoogleAnalyticsAdminV1BetaDataRetentionSettings(SdkBaseModel):
    """Settings values for data retention. This is a singleton resource."""

    name: Optional[str] = UNSET
    """Identifier. Resource name for this DataRetentionSetting resource. Format:
    properties/{property}/dataRetentionSettings"""

    user_data_retention: Optional[UserDataRetentionOrStr] = Field(default=UNSET, alias="userDataRetention")
    """Required. The length of time that user-level data is retained."""

    event_data_retention: Optional[EventDataRetentionOrStr] = Field(default=UNSET, alias="eventDataRetention")
    """Required. The length of time that event-level data is retained."""

    reset_user_data_on_new_activity: Optional[bool] = Field(default=UNSET, alias="resetUserDataOnNewActivity")
    """If true, reset the retention period for the user identifier with every event from that user."""


class GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict(TypedDict):
    name: NotRequired[str]
    user_data_retention: NotRequired[UserDataRetentionOrStr]
    event_data_retention: NotRequired[EventDataRetentionOrStr]
    reset_user_data_on_new_activity: NotRequired[bool]
