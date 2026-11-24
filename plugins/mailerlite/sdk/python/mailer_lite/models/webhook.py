from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Webhook(SdkBaseModel):
    event: Optional[Any] = UNSET
    """Event"""

    url: Optional[Any] = UNSET
    """URL for a webhook"""


class WebhookDict(TypedDict):
    event: NotRequired[Any]
    url: NotRequired[Any]
