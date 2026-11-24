from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1MonetizationConfig(SdkBaseModel):
    """Configuration for the Monetization add-on."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether the Monetization add-on is enabled."""


class GoogleCloudApigeeV1MonetizationConfigDict(TypedDict):
    enabled: NotRequired[bool]
