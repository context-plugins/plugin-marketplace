from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fetch_policy import FetchPolicy, FetchPolicyDict
from .source_policy import SourcePolicy, SourcePolicyDict
from .v1_excerpt_settings import V1ExcerptSettings, V1ExcerptSettingsDict


class AdvancedSearchSettings(SdkBaseModel):
    """Advanced search configuration.

    These settings may impact result quality and latency unless used carefully. See
    https://docs.parallel.ai/search/advanced-search-settings for more info."""

    model_config = ConfigDict(extra="forbid")

    source_policy: Optional[SourcePolicy] = UNSET
    """Domain and date filtering preferences for search results."""

    fetch_policy: Optional[FetchPolicy] = UNSET
    """Fetch policy: determines when to return cached content from the index (faster) vs fetching live content
    (fresher). Default is to disable live fetch and return cached content from the index. Note: enabling live fetch
    significantly increases search latency because it requires fetching content from source websites."""

    excerpt_settings: Optional[V1ExcerptSettings] = UNSET
    """Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use defaults."""

    location: Optional[str] = UNSET
    """ISO 3166-1 alpha-2 country code for geo-targeted search results."""

    max_results: Optional[int] = UNSET
    """Upper bound on the number of results to return. Defaults to 10 if not provided."""


class AdvancedSearchSettingsDict(TypedDict):
    source_policy: NotRequired[SourcePolicyDict]
    fetch_policy: NotRequired[FetchPolicyDict]
    excerpt_settings: NotRequired[V1ExcerptSettingsDict]
    location: NotRequired[str]
    max_results: NotRequired[int]
