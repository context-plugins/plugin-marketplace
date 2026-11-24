from __future__ import annotations

from typing import TypeAlias

LastUpdate1: TypeAlias = str | int
"""When this venue's market last changed (second precision): a price, a lay price or ``available`` moved, or a row
appeared, including a venue's rows coming back after a few seconds off the board (see the Freshness note). A service
restart can also move it once with nothing changed: dedupe on content. It is not a heartbeat: a quiet venue's
``last_update`` ages while the venue is still read (venue freshness is ``last_seen`` in keyed ``/v2/coverage``)."""

LastUpdate1Dict: TypeAlias = str | int
