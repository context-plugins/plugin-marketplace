from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Venue(SdkBaseModel):
    key: str
    name: str
    regions: list[str]
    is_exchange: bool


class VenueDict(TypedDict):
    key: str
    name: str
    regions: list[str]
    is_exchange: bool
