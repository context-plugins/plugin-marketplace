from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .site_stats import SiteStats, SiteStatsDict


class SiteSummary(SdkBaseModel):
    site_id: int
    """The numeric id you pass as ``site_id`` to /query."""

    name: str
    """The site's domain. For the configured public demo site this is masked to ``example.com`` — see "The demo site is
    masked" in docs/public-api-v1.md; breakdown values carrying the host are masked the same way."""

    hash: str
    """The site's public token, used by widget script URLs and the shared dashboard link. Integrations need it and
    previously had to parse it out of a widget snippet URL — which only worked for hobby sites, since a paid site's
    tracker URL is keyed by the numeric id."""

    timezone: str
    """The site's reporting timezone."""

    hobby: bool
    """True for a site on the free plan. It decides how the site counts at all: a hobby site is tracked by the bundled
    ``/t/`` build (widget plus counter) carrying a ``data-id`` attribute, and an event reaching us from any other build
    is refused. Install ``GET /sites/{id}/snippet`` verbatim and this is handled for you; branch on it only if you build
    the tag yourself."""

    stats_start_date: OptionalNullable[Date] = UNSET
    """Stored value only (not computed on the fly); null if not yet computed."""

    created_at: Optional[RFC3339DateTime] = UNSET
    stats: Optional[SiteStats] = UNSET


class SiteSummaryDict(TypedDict):
    site_id: int
    name: str
    hash: str
    timezone: str
    hobby: bool
    stats_start_date: NotRequired[Date | None]
    created_at: NotRequired[RFC3339DateTime]
    stats: NotRequired[SiteStatsDict]
