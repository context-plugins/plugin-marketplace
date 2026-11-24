from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .header import Header, HeaderDict


class WebhookRegistration(SdkBaseModel):
    url: str
    """HTTPS endpoint for notifications. The URL should be valid and accessible (not local)."""

    header: Optional[Header] = UNSET


class WebhookRegistrationDict(TypedDict):
    url: str
    header: NotRequired[HeaderDict]
