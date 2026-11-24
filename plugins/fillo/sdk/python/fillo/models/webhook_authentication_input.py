from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_fillo_so_webhooks_api import TypeFilloSoWebhooksApiOrStr


class WebhookAuthenticationInput(SdkBaseModel):
    """Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at
    rest, and never returned."""

    type_: TypeFilloSoWebhooksApiOrStr = Field(alias="type")
    secret: Optional[str] = UNSET


class WebhookAuthenticationInputDict(TypedDict):
    type_: TypeFilloSoWebhooksApiOrStr
    secret: NotRequired[str]
