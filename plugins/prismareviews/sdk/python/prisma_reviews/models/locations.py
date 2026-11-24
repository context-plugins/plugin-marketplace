from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Locations(SdkBaseModel):
    used: int
    """Active live locations (test and disconnected ones are not counted)."""

    limit: int
    """Locations of your plan plus the extra locations you pay for."""


class LocationsDict(TypedDict):
    used: int
    limit: int
