from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta import Meta, MetaDict
from .venue import Venue, VenueDict


class V2BookmakersResponse(SdkBaseModel):
    meta: Meta
    data: list[Venue]


class V2BookmakersResponseDict(TypedDict):
    meta: MetaDict
    data: list[VenueDict]
