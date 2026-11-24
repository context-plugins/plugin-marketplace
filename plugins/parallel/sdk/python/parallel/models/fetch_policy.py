from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FetchPolicy(SdkBaseModel):
    """Policy for live fetching web results."""

    max_age_seconds: Optional[int] = UNSET
    """Maximum age of cached content in seconds to trigger a live fetch. Minimum value 600 seconds (10 minutes)."""

    timeout_seconds: Optional[float] = UNSET
    """Timeout in seconds for fetching live content if unavailable in cache."""

    disable_cache_fallback: bool = False
    """If false, fallback to cached content older than max-age if live fetch fails or times out. If true, returns an
    error instead."""


class FetchPolicyDict(TypedDict):
    max_age_seconds: NotRequired[int]
    timeout_seconds: NotRequired[float]
    disable_cache_fallback: NotRequired[bool]
