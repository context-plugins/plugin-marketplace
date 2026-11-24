from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links6 import Links6, Links6Dict
from .payload import Payload, PayloadDict


class NotificationsWebhooksMessagesResponse1(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """unique identifer in the form of uuid for the webhook message."""

    webhook_id: Optional[UUID] = Field(default=UNSET, alias="webhookId")
    """unique identifer in the form of uuid for the webhook."""

    event: Optional[str] = UNSET
    event_type_id: Optional[str] = Field(default=UNSET, alias="eventTypeId")
    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    payload: Optional[Payload] = UNSET
    attempts: Optional[list[str]] = UNSET
    links: Optional[Links6] = UNSET


class NotificationsWebhooksMessagesResponse1Dict(TypedDict):
    id: NotRequired[UUID]
    webhook_id: NotRequired[UUID]
    event: NotRequired[str]
    event_type_id: NotRequired[str]
    event_id: NotRequired[str]
    payload: NotRequired[PayloadDict]
    attempts: NotRequired[list[str]]
    links: NotRequired[Links6Dict]
