from __future__ import annotations

from typing import TypeAlias

To: TypeAlias = str | str | str
"""The destination. An E.164 number, a ``sip:`` URI, or — together with ``sipTrunkId`` — an E.164 number or a 1–64
character extension the trunk's host understands."""

ToDict: TypeAlias = str | str | str
