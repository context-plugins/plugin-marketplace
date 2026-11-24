from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.category import Category, CategoryOrStr


class ApiV2MessageRequestsRequest(SdkBaseModel):
    subscriber_id: Optional[str] = UNSET
    """The ID of the subscriber to send the message to. Either ``subscriber_id`` or ``phone`` is **required**."""

    phone: Optional[str] = UNSET
    """The phone number of the subscriber to send the message to. The subscriber must exist. Either ``phone`` or
    ``subscriber_id`` is **required**. The phone number of the subscriber you want to send the message to."""

    country: str = "US"
    """ISO Alpha-2 country code, used to parse ``phone`` more accurately."""

    body: str
    """The message body that you want to send to the subscriber."""

    category: CategoryOrStr = Category.PROMOTIONAL
    """The category of message you are sending."""

    scheduled_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 datetime to schedule delivery in the future. Default: ``null`` (deliver ASAP)"""

    media_url: Optional[str] = UNSET
    """The URL of the media to send with the message. The media can be of type ``gif``, ``png``, and ``jpeg`` and will
    be formatted correctly on the recipient's device. The media size limit is 1MB for supported file types (JPEG, PNG,
    GIF) and 500KB for other types of accepted media. Please note that if you include a media url with your message,
    then it gets sent as an MMS message, which has different costs and character limits than SMS messages."""


class ApiV2MessageRequestsRequestDict(TypedDict):
    subscriber_id: NotRequired[str]
    phone: NotRequired[str]
    country: NotRequired[str]
    body: str
    category: NotRequired[CategoryOrStr]
    scheduled_at: NotRequired[RFC3339DateTime]
    media_url: NotRequired[str]
