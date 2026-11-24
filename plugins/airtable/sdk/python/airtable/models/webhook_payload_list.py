from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_payload import WebhookPayload, WebhookPayloadDict


class WebhookPayloadList(SdkBaseModel):
    """A paginated list of webhook payloads."""

    payloads: list[WebhookPayload]
    cursor: Optional[int] = UNSET
    """The cursor for fetching the next page of payloads."""

    might_have_more: Optional[bool] = Field(default=UNSET, alias="mightHaveMore")
    """Whether there may be more payloads to fetch."""


class WebhookPayloadListDict(TypedDict):
    payloads: list[WebhookPayloadDict]
    cursor: NotRequired[int]
    might_have_more: NotRequired[bool]
