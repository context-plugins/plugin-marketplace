from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .check_result_agent_ready_scans_api import CheckResultAgentReadyScansApi, CheckResultAgentReadyScansApiDict
from .enums.status_agent_ready_scans_api import StatusAgentReadyScansApiOrStr
from .enums.vercel_rating import VercelRatingOrStr
from .page_result import PageResult, PageResultDict


class Scan(SdkBaseModel):
    """Full scan result. Same shape returned for sync, async, and cached reads."""

    id: str
    root_url: str = Field(alias="rootUrl")
    status: StatusAgentReadyScansApiOrStr
    """Lifecycle state of a scan. Poll until status is 'completed' or 'failed'."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    completed_at: RFC3339DateTime | None = Field(alias="completedAt")
    pages_discovered: int = Field(alias="pagesDiscovered")
    pages_scanned: int = Field(alias="pagesScanned")
    vercel_score: int = Field(alias="vercelScore")
    vercel_rating: VercelRatingOrStr = Field(alias="vercelRating")
    """Coarse rating bucket derived from the Vercel Agent Readability score."""

    llmstxt_score: int = Field(alias="llmstxtScore")
    accessibility_score: int | None = Field(alias="accessibilityScore")
    """Accessibility / layout-stability sub-score over the homepage WCAG checks (A-series). Null when no accessibility
    checks ran. Separate from the Vercel score — accessibility is WCAG, not the Vercel Agent Readability Spec."""

    percentile: int | None
    """Corpus percentile: share of scanned sites this score beats. Null when the corpus is too small to quote."""

    corpus_total: int | None = Field(alias="corpusTotal")
    """Number of sites the percentile is measured against. Null with percentile."""

    site_checks: list[CheckResultAgentReadyScansApi] = Field(alias="siteChecks")
    llmstxt_checks: list[CheckResultAgentReadyScansApi] = Field(alias="llmstxtChecks")
    page_results: list[PageResult] = Field(alias="pageResults")
    protocol_results: Optional[list[CheckResultAgentReadyScansApi]] = Field(default=UNSET, alias="protocolResults")
    """Agent-protocol discovery checks (C-series) plus the accessibility checks (A-series). Populated only for surfaces
    the site exposes; A-checks run whenever the homepage was fetched. Neither family contributes to the Vercel score."""

    share_token: str = Field(alias="shareToken")


class ScanDict(TypedDict):
    id: str
    root_url: str
    status: StatusAgentReadyScansApiOrStr
    created_at: RFC3339DateTime
    completed_at: RFC3339DateTime | None
    pages_discovered: int
    pages_scanned: int
    vercel_score: int
    vercel_rating: VercelRatingOrStr
    llmstxt_score: int
    accessibility_score: int | None
    percentile: int | None
    corpus_total: int | None
    site_checks: list[CheckResultAgentReadyScansApiDict]
    llmstxt_checks: list[CheckResultAgentReadyScansApiDict]
    page_results: list[PageResultDict]
    protocol_results: NotRequired[list[CheckResultAgentReadyScansApiDict]]
    share_token: str
