from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.vercel_rating import VercelRatingOrStr


class ScanSummary(SdkBaseModel):
    """Lightweight scan listing entry."""

    id: str
    share_token: str = Field(alias="shareToken")
    domain: str
    root_url: str = Field(alias="rootUrl")
    vercel_score: int | None = Field(alias="vercelScore")
    vercel_rating: VercelRatingOrStr | None = Field(alias="vercelRating")
    """Coarse rating bucket derived from the Vercel Agent Readability score."""

    llmstxt_score: int | None = Field(alias="llmstxtScore")
    accessibility_score: int | None = Field(alias="accessibilityScore")
    """Accessibility sub-score (A-series WCAG checks). Null for scans run before the score was persisted."""

    percentile: int | None
    corpus_total: int | None = Field(alias="corpusTotal")
    pages_scanned: int | None = Field(alias="pagesScanned")
    created_at: RFC3339DateTime = Field(alias="createdAt")


class ScanSummaryDict(TypedDict):
    id: str
    share_token: str
    domain: str
    root_url: str
    vercel_score: int | None
    vercel_rating: VercelRatingOrStr | None
    llmstxt_score: int | None
    accessibility_score: int | None
    percentile: int | None
    corpus_total: int | None
    pages_scanned: int | None
    created_at: RFC3339DateTime
