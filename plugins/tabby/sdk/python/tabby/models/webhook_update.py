from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .header import Header, HeaderDict


class WebhookUpdate(SdkBaseModel):
    header: Optional[Header] = UNSET
    id: str
    """Unique webhook ID, assigned by Tabby."""

    url: str
    """HTTPS endpoint for notifications. The URL should be valid and accessible (not local)."""


class WebhookUpdateDict(TypedDict):
    header: NotRequired[HeaderDict]
    id: str
    url: str
