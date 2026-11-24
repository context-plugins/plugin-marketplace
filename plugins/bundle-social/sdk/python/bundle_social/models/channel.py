from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .metadata import Metadata, MetadataDict
from .webhook import Webhook, WebhookDict


class Channel(SdkBaseModel):
    id: str
    name: OptionalNullable[str] = UNSET
    username: OptionalNullable[str] = UNSET
    address: OptionalNullable[str] = UNSET
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    webhook: OptionalNullable[Webhook] = UNSET
    metadata: OptionalNullable[Metadata] = UNSET


class ChannelDict(TypedDict):
    id: str
    name: NotRequired[str | None]
    username: NotRequired[str | None]
    address: NotRequired[str | None]
    avatar_url: NotRequired[str | None]
    webhook: NotRequired[WebhookDict | None]
    metadata: NotRequired[MetadataDict | None]
