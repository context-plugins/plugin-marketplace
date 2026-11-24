from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.odds_format import OddsFormatOrStr
from .unions.processed_at import ProcessedAt, ProcessedAtDict


class RawMeta(SdkBaseModel):
    feed_type: Literal["raw"] = "raw"
    region: str
    odds_format: OddsFormatOrStr
    processed_at: ProcessedAt
    """ISO-8601 UTC, or epoch seconds under ``dateFormat=unix``."""

    count: int
    """Events on this page."""

    version: str
    next_cursor: str | None
    total: int
    """Events matching the query, all pages."""

    board_version: int | None
    """The page's ``X-OddsRelay-Version``."""


class RawMetaDict(TypedDict):
    feed_type: Literal["raw"]
    region: str
    odds_format: OddsFormatOrStr
    processed_at: ProcessedAtDict
    count: int
    version: str
    next_cursor: str | None
    total: int
    board_version: int | None
