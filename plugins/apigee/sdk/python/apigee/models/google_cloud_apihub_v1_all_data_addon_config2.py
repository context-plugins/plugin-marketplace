from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1AllDataAddonConfig2(SdkBaseModel):
    """Configuration for addons which act on all data in the API hub."""

    enabled: Optional[bool] = UNSET
    """Required. If true, the addon is enabled for all data in the API hub."""


class GoogleCloudApihubV1AllDataAddonConfig2Dict(TypedDict):
    enabled: NotRequired[bool]
