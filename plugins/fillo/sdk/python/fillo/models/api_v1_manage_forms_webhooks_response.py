from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class ApiV1ManageFormsWebhooksResponse(SdkBaseModel):
    webhooks: list[Webhook]


class ApiV1ManageFormsWebhooksResponseDict(TypedDict):
    webhooks: list[WebhookDict]
