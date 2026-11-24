from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .header import Header, HeaderDict


class Webhook(SdkBaseModel):
    header: OptionalNullable[Header] = UNSET
    id: str
    """Unique webhook ID, assigned by Tabby."""

    is_test: bool = True
    """Indicates whether to use this hook in test environment or not."""

    url: str
    """HTTPS endpoint for notifications. The URL should be valid and accessible (not local)."""


class WebhookDict(TypedDict):
    header: NotRequired[HeaderDict | None]
    id: str
    is_test: bool
    url: str
