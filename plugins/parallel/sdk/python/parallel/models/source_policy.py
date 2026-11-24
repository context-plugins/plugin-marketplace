from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class SourcePolicy(SdkBaseModel):
    """Source policy for web search results.

    This policy governs which sources are allowed/disallowed in results."""

    include_domains: Optional[list[str]] = UNSET
    """List of domains to restrict the results to. If specified, only sources from these domains will be included.
    Accepts plain domains (e.g., example.com, subdomain.example.gov) or bare domain extension starting with a period
    (e.g., .gov, .edu, .co.uk). The combined number of domains in include_domains and exclude_domains cannot exceed
    200."""

    exclude_domains: Optional[list[str]] = UNSET
    """List of domains to exclude from results. If specified, sources from these domains will be excluded. Accepts plain
    domains (e.g., example.com, subdomain.example.gov) or bare domain extension starting with a period (e.g., .gov,
    .edu, .co.uk). The combined number of domains in include_domains and exclude_domains cannot exceed 200."""

    after_date: Optional[Date] = UNSET
    """Optional start date for filtering search results. Results will be limited to content published on or after this
    date. Provided as an RFC 3339 date string (YYYY-MM-DD)."""


class SourcePolicyDict(TypedDict):
    include_domains: NotRequired[list[str]]
    exclude_domains: NotRequired[list[str]]
    after_date: NotRequired[Date]
