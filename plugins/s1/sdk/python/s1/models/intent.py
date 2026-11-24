from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.time_range1 import TimeRange1OrStr


class Intent(SdkBaseModel):
    """How the request was interpreted and searched."""

    search_query: str
    """Keywords sent to the engines, with platform and time phrases removed."""

    sources: list[str]
    """Engines searched."""

    time_range: TimeRange1OrStr | None
    """Publication window applied, or null for none."""


class IntentDict(TypedDict):
    search_query: str
    sources: list[str]
    time_range: TimeRange1OrStr | None
