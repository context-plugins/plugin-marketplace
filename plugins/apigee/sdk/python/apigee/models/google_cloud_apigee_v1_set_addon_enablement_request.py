from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SetAddonEnablementRequest(SdkBaseModel):
    """Request for SetAddonEnablement."""

    api_security_enabled: Optional[bool] = Field(default=UNSET, alias="apiSecurityEnabled")
    """If the API Security should be enabled in the environment."""

    analytics_enabled: Optional[bool] = Field(default=UNSET, alias="analyticsEnabled")
    """If the Analytics should be enabled in the environment."""


class GoogleCloudApigeeV1SetAddonEnablementRequestDict(TypedDict):
    api_security_enabled: NotRequired[bool]
    analytics_enabled: NotRequired[bool]
