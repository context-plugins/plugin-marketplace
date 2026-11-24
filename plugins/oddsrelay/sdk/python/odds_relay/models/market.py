from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .raw_outcome import RawOutcome, RawOutcomeDict
from .unions.last_update1 import LastUpdate1, LastUpdate1Dict


class Market(SdkBaseModel):
    key: str
    last_update: LastUpdate1 | None
    """When this venue's market last changed (second precision): a price, a lay price or ``available`` moved, or a row
    appeared, including a venue's rows coming back after a few seconds off the board (see the Freshness note). A service
    restart can also move it once with nothing changed: dedupe on content. It is not a heartbeat: a quiet venue's
    ``last_update`` ages while the venue is still read (venue freshness is ``last_seen`` in keyed ``/v2/coverage``)."""

    outcomes: list[RawOutcome]


class MarketDict(TypedDict):
    key: str
    last_update: LastUpdate1Dict | None
    outcomes: list[RawOutcomeDict]
