from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.counting_method_google_analytics_properties_api import CountingMethodGoogleAnalyticsPropertiesApiOrStr
from .google_analytics_admin_v1_beta_key_event_default_value2 import (
    GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2,
    GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2Dict,
)


class GoogleAnalyticsAdminV1BetaKeyEvent(SdkBaseModel):
    """A key event in a Google Analytics property."""

    counting_method: Optional[CountingMethodGoogleAnalyticsPropertiesApiOrStr] = Field(
        default=UNSET, alias="countingMethod"
    )
    """Required. The method by which Key Events will be counted across multiple events within a session."""

    name: Optional[str] = UNSET
    """Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event}"""

    default_value: Optional[GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2] = Field(
        default=UNSET, alias="defaultValue"
    )
    """Optional. Defines a default value/currency for a key event."""

    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    """Immutable. The event name for this key event. Examples: 'click', 'purchase'"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this key event was created in the property."""

    custom: Optional[bool] = UNSET
    """Output only. If set to true, this key event refers to a custom event. If set to false, this key event refers to a
    default event in GA. Default events typically have special meaning in GA. Default events are usually created for you
    by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum
    number of custom key events that may be created per property."""

    deletable: Optional[bool] = UNSET
    """Output only. If set to true, this event can be deleted."""


class GoogleAnalyticsAdminV1BetaKeyEventDict(TypedDict):
    counting_method: NotRequired[CountingMethodGoogleAnalyticsPropertiesApiOrStr]
    name: NotRequired[str]
    default_value: NotRequired[GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2Dict]
    event_name: NotRequired[str]
    create_time: NotRequired[str]
    custom: NotRequired[bool]
    deletable: NotRequired[bool]
