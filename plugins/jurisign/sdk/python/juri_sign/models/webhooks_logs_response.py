from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .webhook_log import WebhookLog, WebhookLogDict


class WebhooksLogsResponse(SdkBaseModel):
    data: Optional[list[WebhookLog]] = UNSET
    meta: Optional[Pagination] = UNSET


class WebhooksLogsResponseDict(TypedDict):
    data: NotRequired[list[WebhookLogDict]]
    meta: NotRequired[PaginationDict]
