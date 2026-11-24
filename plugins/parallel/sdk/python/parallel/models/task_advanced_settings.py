from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TaskAdvancedSettings(SdkBaseModel):
    """Advanced search configuration for a task run."""

    location: Optional[str] = UNSET
    """ISO 3166-1 alpha-2 country code for geo-targeted search results."""


class TaskAdvancedSettingsDict(TypedDict):
    location: NotRequired[str]
