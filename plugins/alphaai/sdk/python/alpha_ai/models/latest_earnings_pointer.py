from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.verdict import VerdictOrStr


class LatestEarningsPointer(SdkBaseModel):
    """Pointer to a ticker's most recent earnings read (for the article link)."""

    uid: str
    """Article uid; resolve the full read via /api/news/{uid}/."""

    time_published: RFC3339DateTime
    title: str
    fiscal_period: str
    verdict: VerdictOrStr
    headline: str


class LatestEarningsPointerDict(TypedDict):
    uid: str
    time_published: RFC3339DateTime
    title: str
    fiscal_period: str
    verdict: VerdictOrStr
    headline: str
