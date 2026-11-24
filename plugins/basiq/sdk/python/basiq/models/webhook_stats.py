from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookStats(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of the response object."""

    application_id: Optional[UUID] = Field(default=UNSET, alias="applicationId")
    """unique identifier in the form of uuid for the application."""

    webhook_id: Optional[UUID] = Field(default=UNSET, alias="webhookId")
    """unique identifier in the form of uuid for the webhook."""

    success: Optional[int] = UNSET
    """Number of successfully delivered messages."""

    pending: Optional[int] = UNSET
    """Number of messages pending delivery."""

    sending: Optional[int] = UNSET
    """Number of messages currently being sent."""

    fail: Optional[int] = UNSET
    """Number of failed message deliveries."""


class WebhookStatsDict(TypedDict):
    type_: NotRequired[str]
    application_id: NotRequired[UUID]
    webhook_id: NotRequired[UUID]
    success: NotRequired[int]
    pending: NotRequired[int]
    sending: NotRequired[int]
    fail: NotRequired[int]
