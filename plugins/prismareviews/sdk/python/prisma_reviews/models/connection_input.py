from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform_id1 import PlatformId1OrStr


class ConnectionInput(SdkBaseModel):
    platform: PlatformId1OrStr
    """Platform to connect. An unknown value returns ``422 invalid_request``."""

    redirect_url: Optional[str] = UNSET
    """Required for ``oauth`` platforms (live keys): where the owner lands after approving, with ``connection_id`` and
    ``status`` in the query string."""

    credentials: Optional[Any] = UNSET
    """Required for ``credentials`` platforms, and for Trustpilot (``domain``). Fields per platform in ``GET
    /v1/platforms``."""

    listing_url: Optional[str] = UNSET
    """Required for ``listing_url`` platforms: the public page of the listing."""

    metadata: Optional[Any] = UNSET
    """Your own key-value pairs, for example your client ID."""


class ConnectionInputDict(TypedDict):
    platform: PlatformId1OrStr
    redirect_url: NotRequired[str]
    credentials: NotRequired[Any]
    listing_url: NotRequired[str]
    metadata: NotRequired[Any]
