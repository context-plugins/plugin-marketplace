from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WebhookResource(SdkBaseModel):
    id: str
    name: str | None
    signature: OptionalNullable[str] = UNSET
    events: list[Any]
    enabled: bool
    url: str
    last_status: str
    last_status_description: str
    last_used_at: str
    created_at: str
    updated_at: str


class WebhookResourceDict(TypedDict):
    id: str
    name: str | None
    signature: NotRequired[str | None]
    events: list[Any]
    enabled: bool
    url: str
    last_status: str
    last_status_description: str
    last_used_at: str
    created_at: str
    updated_at: str
