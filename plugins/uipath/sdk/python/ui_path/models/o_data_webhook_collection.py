from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook import Webhook, WebhookDict


class ODataWebhookCollection(SdkBaseModel):
    """OData collection response containing webhooks"""

    value: Optional[list[Webhook]] = UNSET


class ODataWebhookCollectionDict(TypedDict):
    value: NotRequired[list[WebhookDict]]
