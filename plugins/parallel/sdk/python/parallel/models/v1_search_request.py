from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_search_settings import AdvancedSearchSettings, AdvancedSearchSettingsDict
from .enums.mode import ModeOrStr


class V1SearchRequest(SdkBaseModel):
    """Search request."""

    model_config = ConfigDict(extra="forbid")

    objective: Optional[str] = UNSET
    """Natural-language description of the underlying question or goal driving the search. Used together with
    search_queries to focus results on the most relevant content. Should be self-contained with enough context to
    understand the intent of the search."""

    search_queries: list[str]
    """Concise keyword search queries, 3-6 words each. At least one query is required, provide 2-3 for best results.
    Used together with objective to focus results on the most relevant content."""

    mode: Optional[ModeOrStr] = UNSET
    """Search mode preset: supported values are ``turbo``, ``fast``, ``basic``, and ``advanced``. Turbo mode is
    optimized for the fastest responses. Use Fast mode for high quality search within a 1-second latency budget. Basic
    mode offers low latency and works best with 2-3 high-quality search_queries. Advanced mode provides higher quality
    with more advanced retrieval and compression. Defaults to ``advanced`` when omitted."""

    max_chars_total: Optional[int] = UNSET
    """Upper bound on total characters across excerpts from all results."""

    session_id: Optional[str] = UNSET
    """Session identifier to track calls across separate search and extract calls, to be used as part of a larger task.
    Specifying it may give better contextual results for subsequent API calls."""

    client_model: Optional[str] = UNSET
    """The model generating this request and consuming the results. Enables optimizations and tailors default settings
    for the model's capabilities."""

    advanced_settings: Optional[AdvancedSearchSettings] = UNSET
    """Advanced configuration for source policy, fetch policy, and excerpt settings. May impact result quality and
    latency unless used carefully. When omitted, excerpts are enabled by default."""


class V1SearchRequestDict(TypedDict):
    objective: NotRequired[str]
    search_queries: list[str]
    mode: NotRequired[ModeOrStr]
    max_chars_total: NotRequired[int]
    session_id: NotRequired[str]
    client_model: NotRequired[str]
    advanced_settings: NotRequired[AdvancedSearchSettingsDict]
