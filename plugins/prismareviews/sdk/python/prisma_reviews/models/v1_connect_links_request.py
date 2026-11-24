from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform_id2 import PlatformId2OrStr


class V1ConnectLinksRequest(SdkBaseModel):
    platform: Optional[PlatformId2OrStr] = UNSET
    """Only this platform. Without it, the owner chooses among the platforms of your plan."""

    redirect_url: Optional[str] = UNSET
    """Where to send the owner when they are done, with ``connection_id`` and ``status`` added to the query string. Must
    start with ``https://`` (or ``http://localhost`` for development)."""


class V1ConnectLinksRequestDict(TypedDict):
    platform: NotRequired[PlatformId2OrStr]
    redirect_url: NotRequired[str]
