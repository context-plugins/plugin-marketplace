from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1WebhookEndpointsTestResponse(SdkBaseModel):
    delivered: bool
    """Whether the endpoint answered 2xx."""

    response_status: int | None = Field(alias="responseStatus")
    """What it answered. Null when it could not be reached."""

    error: str | None


class ApiV1WebhookEndpointsTestResponseDict(TypedDict):
    delivered: bool
    response_status: int | None
    error: str | None
