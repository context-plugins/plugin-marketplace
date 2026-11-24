from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fetch_policy import FetchPolicy, FetchPolicyDict
from .unions.full_content1 import FullContent1, FullContent1Dict
from .v1_excerpt_settings import V1ExcerptSettings, V1ExcerptSettingsDict


class AdvancedExtractSettings(SdkBaseModel):
    """Advanced extract configuration.

    These settings may impact result quality and latency unless used carefully. See
    https://docs.parallel.ai/search/advanced-extract-settings for more info."""

    fetch_policy: Optional[FetchPolicy] = UNSET
    """Fetch policy: determines when to return cached content from the index (faster) vs fetching live content
    (fresher). Default is to use a dynamic policy based on the search objective and url. Note: enabling live fetch
    significantly increases extract latency because it requires fetching content from source websites."""

    excerpt_settings: Optional[V1ExcerptSettings] = UNSET
    """Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use defaults."""

    full_content: Optional[FullContent1] = UNSET
    """Controls full content extraction. Set to true to enable with defaults, false to disable, or provide
    FullContentSettings for fine-grained control."""


class AdvancedExtractSettingsDict(TypedDict):
    fetch_policy: NotRequired[FetchPolicyDict]
    excerpt_settings: NotRequired[V1ExcerptSettingsDict]
    full_content: NotRequired[FullContent1Dict]
