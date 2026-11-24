from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1AllDataAddonConfig(SdkBaseModel):
    """Configuration for addons which act on all data in the API hub. This is used to specify if the addon is enabled
    for all data in the API hub."""

    enabled: Optional[bool] = UNSET
    """Required. If true, the addon is enabled for all data in the API hub."""


class GoogleCloudApihubV1AllDataAddonConfigDict(TypedDict):
    enabled: NotRequired[bool]
