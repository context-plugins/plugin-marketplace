from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ConnectorsPlatformConfig(SdkBaseModel):
    """Configuration for the Connectors Platform add-on."""

    enabled: Optional[bool] = UNSET
    """Flag that specifies whether the Connectors Platform add-on is enabled."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified,
    the add-on will never expire."""


class GoogleCloudApigeeV1ConnectorsPlatformConfigDict(TypedDict):
    enabled: NotRequired[bool]
    expires_at: NotRequired[str]
