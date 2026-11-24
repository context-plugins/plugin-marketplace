from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Webhook(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    avatar: OptionalNullable[str] = UNSET
    url: OptionalNullable[str] = UNSET


class WebhookDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
    avatar: NotRequired[str | None]
    url: NotRequired[str | None]
