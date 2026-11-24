from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.event import EventOrStr
from .enums.subject_type import SubjectTypeOrStr

if TYPE_CHECKING:
    from .unions.object import Object, ObjectDict


class WebhookSubscription(SdkBaseModel):
    """All Of object, webhook_subscription."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The webhook's id"""

    url: Optional[str] = UNSET
    """The URL events get delivered to."""

    description: Optional[str] = UNSET
    """A user-defined description of the webhook."""

    subject_type: Optional[SubjectTypeOrStr] = UNSET
    """The type of entity. Set to either ``repository`` or ``workspace`` based on where the subscription is defined."""

    subject: Optional[Object] = UNSET
    """Base type for most resource objects. It defines the common ``type`` element that identifies an object's type. It
    also identifies the element as Swagger's ``discriminator``."""

    active: Optional[bool] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    events: Optional[list[EventOrStr]] = UNSET
    """The events this webhook is subscribed to."""

    secret_set: Optional[bool] = UNSET
    """Indicates whether or not the hook has an associated secret. It is not possible to see the hook's secret. This
    field is ignored during updates."""

    secret: Optional[str] = UNSET
    """The secret to associate with the hook. The secret is never returned via the API. As such, this field is only used
    during updates. The secret can be set to ``null`` or "" to remove the secret (or create a hook with no secret).
    Leaving out the secret field during updates will leave the secret unchanged. Leaving out the secret during creation
    will create a hook with no secret."""


class WebhookSubscriptionDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    url: NotRequired[str]
    description: NotRequired[str]
    subject_type: NotRequired[SubjectTypeOrStr]
    subject: NotRequired[ObjectDict]
    active: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
    events: NotRequired[list[EventOrStr]]
    secret_set: NotRequired[bool]
    secret: NotRequired[str]
