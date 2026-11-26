from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.form import FormOrStr
from .enums.kind import KindOrStr


class RadarFilingContext(SdkBaseModel):
    form: FormOrStr
    accession_number: str
    filed_at: RFC3339DateTime
    observed_at: RFC3339DateTime
    sec_url: str
    news_uid: str
    news_title: Optional[str] = UNSET
    """Article title frozen at the context cutoff."""

    news_published: Optional[RFC3339DateTime] = UNSET
    """Article publication time for its AlphAI URL."""

    has_article: bool = False
    """An enriched article existed before the context cutoff. False on older snapshots without metadata."""

    items: Optional[list[str]] = UNSET
    primary_item: Optional[str] = UNSET
    event_date: Optional[Date] = UNSET
    kind: Optional[KindOrStr] = UNSET
    period_label: Optional[str] = UNSET


class RadarFilingContextDict(TypedDict):
    form: FormOrStr
    accession_number: str
    filed_at: RFC3339DateTime
    observed_at: RFC3339DateTime
    sec_url: str
    news_uid: str
    news_title: NotRequired[str]
    news_published: NotRequired[RFC3339DateTime]
    has_article: NotRequired[bool]
    items: NotRequired[list[str]]
    primary_item: NotRequired[str]
    event_date: NotRequired[Date]
    kind: NotRequired[KindOrStr]
    period_label: NotRequired[str]
