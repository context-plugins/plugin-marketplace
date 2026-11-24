from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WebhookDeleted(SdkBaseModel):
    id: str
    """Webhook endpoint ID."""

    deleted: Literal["True"] = "True"


class WebhookDeletedDict(TypedDict):
    id: str
    deleted: Literal["True"]
