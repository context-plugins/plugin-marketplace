from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_addons_config1 import (
    GoogleCloudApigeeV1AddonsConfig1,
    GoogleCloudApigeeV1AddonsConfig1Dict,
)


class GoogleCloudApigeeV1SetAddonsRequest(SdkBaseModel):
    """Request for SetAddons."""

    addons_config: Optional[GoogleCloudApigeeV1AddonsConfig1] = Field(default=UNSET, alias="addonsConfig")
    """Required. Add-on configurations."""


class GoogleCloudApigeeV1SetAddonsRequestDict(TypedDict):
    addons_config: NotRequired[GoogleCloudApigeeV1AddonsConfig1Dict]
