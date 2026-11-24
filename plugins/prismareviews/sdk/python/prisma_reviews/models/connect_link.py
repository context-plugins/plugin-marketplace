from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.mode import ModeOrStr
from .enums.platform_id import PlatformIdOrStr


class ConnectLink(SdkBaseModel):
    url: str
    """The link to send to the account owner."""

    platform: PlatformIdOrStr | None
    """The only platform the link connects, or ``null`` for any of the plan."""

    mode: ModeOrStr
    """Mode of the connections it creates: that of the key."""

    expires_at: RFC3339DateTime
    """When the link stops working (7 days after creation)."""


class ConnectLinkDict(TypedDict):
    url: str
    platform: PlatformIdOrStr | None
    mode: ModeOrStr
    expires_at: RFC3339DateTime
