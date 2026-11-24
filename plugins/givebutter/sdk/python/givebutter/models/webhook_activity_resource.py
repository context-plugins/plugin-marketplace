from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WebhookActivityResource(SdkBaseModel):
    id: str
    webhook_id: str
    status: str
    status_description: str
    event: str
    url: str
    payload: list[Any]
    response: list[Any] | None
    created_at: str
    updated_at: str


class WebhookActivityResourceDict(TypedDict):
    id: str
    webhook_id: str
    status: str
    status_description: str
    event: str
    url: str
    payload: list[Any]
    response: list[Any] | None
    created_at: str
    updated_at: str
