from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_webhooks_api import StatusWebhooksApiOrStr
from .links_webhooks_api import LinksWebhooksApi, LinksWebhooksApiDict


class Datum7(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """unique identifer in the form of uuid for the webhook."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    """name to describe the webhook."""

    description: Optional[str] = UNSET
    """detailed description of the webhook."""

    url: str
    """url to send webhooks to."""

    status: StatusWebhooksApiOrStr
    """status of the webhook."""

    secret: Optional[str] = UNSET
    """secret for signing the messages."""

    links: Optional[LinksWebhooksApi] = UNSET


class Datum7Dict(TypedDict):
    id: NotRequired[UUID]
    type_: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    url: str
    status: StatusWebhooksApiOrStr
    secret: NotRequired[str]
    links: NotRequired[LinksWebhooksApiDict]
