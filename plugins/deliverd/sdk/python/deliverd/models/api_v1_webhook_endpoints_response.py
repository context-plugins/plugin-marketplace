from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook_endpoint import WebhookEndpoint, WebhookEndpointDict


class ApiV1WebhookEndpointsResponse(SdkBaseModel):
    webhook_endpoints: list[WebhookEndpoint] = Field(alias="webhookEndpoints")
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1WebhookEndpointsResponseDict(TypedDict):
    webhook_endpoints: list[WebhookEndpointDict]
    next_cursor: str | None
