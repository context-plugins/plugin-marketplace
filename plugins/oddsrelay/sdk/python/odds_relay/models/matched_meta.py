from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.odds_format import OddsFormatOrStr
from .unions.processed_at1 import ProcessedAt1, ProcessedAt1Dict


class MatchedMeta(SdkBaseModel):
    feed_type: str
    region: str
    odds_format: OddsFormatOrStr
    processed_at: ProcessedAt1
    """The board time (``X-Processed-At``)."""

    last_seen: Optional[dict[str, str]] = UNSET
    """``{bookmaker key: {sport key base: ISO-8601 Z}}``: the last instant each venue and sport was read, the oldest
    observation behind the board, so ``now - last_seen`` is an upper bound on that venue's price age. The region's
    venues only, cut to a filtered body's venues and sports; always ISO; absent until the board carries the table; never
    on ``format=bare``."""

    count: int
    """Events in ``data``."""

    version: Literal["v2"] = "v2"
    next_cursor: str | None


class MatchedMetaDict(TypedDict):
    feed_type: str
    region: str
    odds_format: OddsFormatOrStr
    processed_at: ProcessedAt1Dict
    last_seen: NotRequired[dict[str, str]]
    count: int
    version: Literal["v2"]
    next_cursor: str | None
