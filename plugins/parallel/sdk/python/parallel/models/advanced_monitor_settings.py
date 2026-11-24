from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_policy import SourcePolicy, SourcePolicyDict


class AdvancedMonitorSettings(SdkBaseModel):
    """Advanced monitor configuration."""

    source_policy: Optional[SourcePolicy] = UNSET
    """Domain filtering preferences: preferred and disallowed domains for monitor search results."""

    location: Optional[str] = UNSET
    """ISO 3166-1 alpha-2 country code for geo-targeted monitor results."""


class AdvancedMonitorSettingsDict(TypedDict):
    source_policy: NotRequired[SourcePolicyDict]
    location: NotRequired[str]
