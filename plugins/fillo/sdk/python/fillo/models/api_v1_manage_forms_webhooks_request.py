from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_authentication_input import WebhookAuthenticationInput, WebhookAuthenticationInputDict


class ApiV1ManageFormsWebhooksRequest(SdkBaseModel):
    url: str
    """An http(s) delivery URL."""

    include_abandoned: bool = Field(default=False, alias="includeAbandoned")
    """Also deliver draft.abandoned events."""

    authentication: Optional[WebhookAuthenticationInput] = UNSET
    """Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at
    rest, and never returned."""


class ApiV1ManageFormsWebhooksRequestDict(TypedDict):
    url: str
    include_abandoned: NotRequired[bool]
    authentication: NotRequired[WebhookAuthenticationInputDict]
