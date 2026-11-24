from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_extract_settings import AdvancedExtractSettings, AdvancedExtractSettingsDict


class V1ExtractRequest(SdkBaseModel):
    """Extract request."""

    model_config = ConfigDict(extra="forbid")

    urls: list[str]
    """URLs to extract content from. Up to 20 URLs."""

    objective: Optional[str] = UNSET
    """As in SearchRequest, a natural-language description of the underlying question or goal driving the request. Used
    together with search_queries to focus excerpts on the most relevant content."""

    search_queries: Optional[list[str]] = UNSET
    """Optional keyword search queries, as in SearchRequest. Used together with objective to focus excerpts on the most
    relevant content."""

    max_chars_total: Optional[int] = UNSET
    """Upper bound on total characters across excerpts from all extracted results."""

    session_id: Optional[str] = UNSET
    """Session identifier to track calls across separate search and extract calls, to be used as part of a larger task.
    Specifying it may give better contextual results for subsequent API calls."""

    client_model: Optional[str] = UNSET
    """The model generating this request and consuming the results. Enables optimizations and tailors default settings
    for the model's capabilities."""

    advanced_settings: Optional[AdvancedExtractSettings] = UNSET
    """Advanced configuration for fetch policy, excerpt settings, and full content settings. May impact result quality
    and latency unless used carefully. When omitted, excerpts are enabled and full content is disabled by default."""


class V1ExtractRequestDict(TypedDict):
    urls: list[str]
    objective: NotRequired[str]
    search_queries: NotRequired[list[str]]
    max_chars_total: NotRequired[int]
    session_id: NotRequired[str]
    client_model: NotRequired[str]
    advanced_settings: NotRequired[AdvancedExtractSettingsDict]
