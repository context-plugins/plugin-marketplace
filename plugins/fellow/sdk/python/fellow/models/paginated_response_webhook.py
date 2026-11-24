from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .page_info import PageInfo, PageInfoDict
from .webhook import Webhook, WebhookDict


class PaginatedResponseWebhook(SdkBaseModel):
    page_info: PageInfo
    """Information about a page returned in a paginated response."""

    data: list[Webhook]


class PaginatedResponseWebhookDict(TypedDict):
    page_info: PageInfoDict
    data: list[WebhookDict]
