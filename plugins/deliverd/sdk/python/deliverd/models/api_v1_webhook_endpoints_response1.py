from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.event import EventOrStr
from .enums.format_deliverd_dev_webhook_endpoints_api import FormatDeliverdDevWebhookEndpointsApiOrStr


class ApiV1WebhookEndpointsResponse1(SdkBaseModel):
    id: UUID
    url: str
    description: str | None
    events: list[EventOrStr]
    """Empty means every event except the opt-in ones."""

    format: FormatDeliverdDevWebhookEndpointsApiOrStr
    enabled: bool
    failure_count: int = Field(alias="failureCount")
    """Consecutive failed deliveries. At twenty the endpoint is switched off."""

    last_success_at: str | None = Field(alias="lastSuccessAt")
    last_failure_at: str | None = Field(alias="lastFailureAt")
    last_error: str | None = Field(alias="lastError")
    created_at: str = Field(alias="createdAt")
    secret: str
    """The signing secret (dlvw_…). Returned by this response only: no other call returns it, and it cannot be retrieved
    afterwards."""


class ApiV1WebhookEndpointsResponse1Dict(TypedDict):
    id: UUID
    url: str
    description: str | None
    events: list[EventOrStr]
    format: FormatDeliverdDevWebhookEndpointsApiOrStr
    enabled: bool
    failure_count: int
    last_success_at: str | None
    last_failure_at: str | None
    last_error: str | None
    created_at: str
    secret: str
