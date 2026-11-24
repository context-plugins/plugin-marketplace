from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2WebhooksRequest1(SdkBaseModel):
    callback_url: Optional[str] = UNSET
    """Destination URL for webhook deliveries (HTTPS only)."""

    headers: Optional[Any] = UNSET
    """Custom key:value pairs to be sent as headers in every callback."""


class ApiV2WebhooksRequest1Dict(TypedDict):
    callback_url: NotRequired[str]
    headers: NotRequired[Any]
