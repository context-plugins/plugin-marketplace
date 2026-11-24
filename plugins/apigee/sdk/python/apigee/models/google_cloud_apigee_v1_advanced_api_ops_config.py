from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AdvancedApiOpsConfig(SdkBaseModel):
    """Configuration for the Advanced API Ops add-on."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether the Advanced API Ops add-on is enabled."""


class GoogleCloudApigeeV1AdvancedApiOpsConfigDict(TypedDict):
    enabled: NotRequired[bool]
