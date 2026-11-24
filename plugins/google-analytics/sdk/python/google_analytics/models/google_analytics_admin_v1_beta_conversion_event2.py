from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.counting_method import CountingMethodOrStr
from .google_analytics_admin_v1_beta_conversion_event_default_conversion_value2 import (
    GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2,
    GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Dict,
)


class GoogleAnalyticsAdminV1BetaConversionEvent2(SdkBaseModel):
    """A snapshot of a ConversionEvent resource in change history."""

    custom: Optional[bool] = UNSET
    """Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion
    event refers to a default event in GA. Default events typically have special meaning in GA. Default events are
    usually created for you by the GA system, but in some cases can be created by property admins. Custom events count
    towards the maximum number of custom conversion events that may be created per property."""

    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    """Immutable. The event name for this conversion event. Examples: 'click', 'purchase'"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this conversion event was created in the property."""

    default_conversion_value: Optional[GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2] = Field(
        default=UNSET, alias="defaultConversionValue"
    )
    """Optional. Defines a default value/currency for a conversion event."""

    counting_method: Optional[CountingMethodOrStr] = Field(default=UNSET, alias="countingMethod")
    """Optional. The method by which conversions will be counted across multiple events within a session. If this value
    is not provided, it will be set to ``ONCE_PER_EVENT``."""

    deletable: Optional[bool] = UNSET
    """Output only. If set, this event can currently be deleted with DeleteConversionEvent."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of this conversion event. Format:
    properties/{property}/conversionEvents/{conversion_event}"""


class GoogleAnalyticsAdminV1BetaConversionEvent2Dict(TypedDict):
    custom: NotRequired[bool]
    event_name: NotRequired[str]
    create_time: NotRequired[str]
    default_conversion_value: NotRequired[GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Dict]
    counting_method: NotRequired[CountingMethodOrStr]
    deletable: NotRequired[bool]
    name: NotRequired[str]
