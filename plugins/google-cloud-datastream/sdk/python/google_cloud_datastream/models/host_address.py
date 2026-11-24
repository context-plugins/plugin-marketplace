from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HostAddress(SdkBaseModel):
    """A HostAddress represents a transport end point, which is the combination of an IP address or hostname and a port
    number."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the connection."""

    port: Optional[int] = UNSET
    """Optional. Port for the connection."""


class HostAddressDict(TypedDict):
    hostname: NotRequired[str]
    port: NotRequired[int]
