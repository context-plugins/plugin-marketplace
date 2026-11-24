from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_specification import WebhookSpecification, WebhookSpecificationDict


class WebhookCreateRequest(SdkBaseModel):
    """Request body for creating a new webhook."""

    notification_url: str = Field(alias="notificationUrl")
    """The URL that will receive POST notifications when changes occur."""

    specification: Optional[WebhookSpecification] = UNSET
    """The specification defining what changes the webhook monitors."""


class WebhookCreateRequestDict(TypedDict):
    notification_url: str
    specification: NotRequired[WebhookSpecificationDict]
