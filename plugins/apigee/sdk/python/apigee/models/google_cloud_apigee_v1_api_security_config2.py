from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiSecurityConfig2(SdkBaseModel):
    """Configuration for the API Security add-on."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Output only. Time at which the API Security add-on expires in milliseconds since epoch. If unspecified, the
    add-on will never expire."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether the API security add-on is enabled."""


class GoogleCloudApigeeV1ApiSecurityConfig2Dict(TypedDict):
    expires_at: NotRequired[str]
    enabled: NotRequired[bool]
