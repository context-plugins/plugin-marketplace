from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .network import Network, NetworkDict
from .unions.consistent import Consistent, ConsistentDict


class Location(SdkBaseModel):
    """Present when location inputs were given: the same block as /v1/screen. A mismatch, Tor exit or hosting/VPN
    network adds risk only alongside another negative signal and never sets engage=false on its own. Jid keeps only
    ip_country, ip_region, network type and consistent."""

    consistent: Optional[Consistent] = UNSET
    """true, false or "unknown"
    """

    reference: OptionalNullable[Any] = UNSET
    signals: Optional[list[Any]] = UNSET
    network: Optional[Network] = UNSET
    detail: Optional[str] = UNSET


class LocationDict(TypedDict):
    consistent: NotRequired[ConsistentDict]
    reference: NotRequired[Any | None]
    signals: NotRequired[list[Any]]
    network: NotRequired[NetworkDict]
    detail: NotRequired[str]
