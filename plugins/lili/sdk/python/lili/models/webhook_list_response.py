from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_response import WebhookResponse, WebhookResponseDict


class WebhookListResponse(SdkBaseModel):
    webhook_list: Optional[list[WebhookResponse]] = Field(default=UNSET, alias="webhookList")


class WebhookListResponseDict(TypedDict):
    webhook_list: NotRequired[list[WebhookResponseDict]]
