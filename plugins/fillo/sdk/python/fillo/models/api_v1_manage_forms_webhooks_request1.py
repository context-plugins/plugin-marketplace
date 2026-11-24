from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_authentication_input import WebhookAuthenticationInput, WebhookAuthenticationInputDict


class ApiV1ManageFormsWebhooksRequest1(SdkBaseModel):
    include_abandoned: Optional[bool] = Field(default=UNSET, alias="includeAbandoned")
    authentication: Optional[WebhookAuthenticationInput] = UNSET
    """Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at
    rest, and never returned."""


class ApiV1ManageFormsWebhooksRequest1Dict(TypedDict):
    include_abandoned: NotRequired[bool]
    authentication: NotRequired[WebhookAuthenticationInputDict]
