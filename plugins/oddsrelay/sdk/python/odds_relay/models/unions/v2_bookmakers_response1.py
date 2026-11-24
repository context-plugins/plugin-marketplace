from __future__ import annotations

from typing import TypeAlias

from ..v2_bookmakers_response import V2BookmakersResponse, V2BookmakersResponseDict
from ..venue import Venue, VenueDict

V2BookmakersResponse1: TypeAlias = V2BookmakersResponse | list[Venue]

V2BookmakersResponse1Dict: TypeAlias = V2BookmakersResponseDict | list[VenueDict]
