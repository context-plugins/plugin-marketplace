from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1IntegrationConfig(SdkBaseModel):
    """Configuration for the Integration add-on."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether the Integration add-on is enabled."""


class GoogleCloudApigeeV1IntegrationConfigDict(TypedDict):
    enabled: NotRequired[bool]
