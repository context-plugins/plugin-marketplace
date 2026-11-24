from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .properties import Properties, PropertiesDict


class ApiV2EventsRequest(SdkBaseModel):
    type_: str = Field(alias="type")
    """The type of event that you are creating. This is the name of the event that will show in the Postscript
    application. **Note:** when creating this event, we will *automatically* prefix your partner/shop name in front of
    the event. For example, if sending an event called "OrderPlaced", we'll show it in our UI as "[Your Partner/Shop
    Name] - OrderPlaced" to distinguish it from others of a similar name. We accept the follow characters in the value
    field: lowercase letters (a-z), uppercase letters (A-Z), digits (0-9), and underscores (_)."""

    subscriber_id: Optional[str] = UNSET
    """The ID of the subscriber that you are creating the event for."""

    phone: Optional[str] = UNSET
    """The phone number of the subscriber that you are creating the event for. E.164 format is recommended, but other
    formats will be accepted."""

    email: Optional[str] = UNSET
    """The email of the subscriber that you are creating the event for."""

    occurred_at: Optional[Date] = UNSET
    """When the event occurred. This parameter is optional but allows you to set the exact time that the event occurred
    on your system. If it is not sent to us, we will just use the current time when we receive it. The following UTC
    time format is supported: %Y-%m-%d %H:%M:%S.%f"""

    properties: Optional[Properties] = UNSET
    """These are the properties of the event. These properties will be exposed in the Postscript platform for things
    like filtering and merge tags to merchants."""

    external_id: Optional[str] = UNSET
    """The unique id of the event on your system. This is an optional field. If a value is not provided, we will create
    a default id ourselves based on time of event received."""


class ApiV2EventsRequestDict(TypedDict):
    type_: str
    subscriber_id: NotRequired[str]
    phone: NotRequired[str]
    email: NotRequired[str]
    occurred_at: NotRequired[Date]
    properties: NotRequired[PropertiesDict]
    external_id: NotRequired[str]
