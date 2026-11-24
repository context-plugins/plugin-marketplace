from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Irregularity(SdkBaseModel):
    gaps: list[str]
    """Array of dates for which the expected credit is not met"""

    stability: str
    """Stability percentage indicator of how stable the income is. 100 = no gaps in the income series from the source.
    Calculated as (number of transactions that are included in the income summary for this source) / (number of
    transactions that were expected to be included in the income summary for this source)."""


class IrregularityDict(TypedDict):
    gaps: list[str]
    stability: str
