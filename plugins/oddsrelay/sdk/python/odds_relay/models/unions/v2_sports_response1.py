from __future__ import annotations

from typing import TypeAlias

from ..sport import Sport, SportDict
from ..v2_sports_response import V2SportsResponse, V2SportsResponseDict

V2SportsResponse1: TypeAlias = V2SportsResponse | list[Sport]

V2SportsResponse1Dict: TypeAlias = V2SportsResponseDict | list[SportDict]
