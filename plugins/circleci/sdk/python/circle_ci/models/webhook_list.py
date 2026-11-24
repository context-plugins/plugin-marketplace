from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_info import WebhookInfo, WebhookInfoDict


class WebhookList(SdkBaseModel):
    items: Optional[list[WebhookInfo]] = UNSET
    """List of webhooks"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class WebhookListDict(TypedDict):
    items: NotRequired[list[WebhookInfoDict]]
    next_page_token: NotRequired[str]
