from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RuntimeApiSecurityConfig2(SdkBaseModel):
    """Runtime configuration for API Security add-on."""

    enabled: Optional[bool] = UNSET
    """If the API Security is enabled or not."""


class GoogleCloudApigeeV1RuntimeApiSecurityConfig2Dict(TypedDict):
    enabled: NotRequired[bool]
