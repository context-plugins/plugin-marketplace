from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.processed_at import ProcessedAt, ProcessedAtDict


class PageMeta(SdkBaseModel):
    feed_type: str
    region: str
    odds_format: str
    processed_at: ProcessedAt
    """ISO-8601 UTC, or epoch seconds under ``dateFormat=unix``."""

    count: int
    """Rows on this page."""

    version: str
    next_cursor: str | None


class PageMetaDict(TypedDict):
    feed_type: str
    region: str
    odds_format: str
    processed_at: ProcessedAtDict
    count: int
    version: str
    next_cursor: str | None
