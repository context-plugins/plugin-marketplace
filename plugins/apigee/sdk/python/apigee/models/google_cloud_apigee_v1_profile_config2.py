from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_profile_config_category import (
    GoogleCloudApigeeV1ProfileConfigCategory,
    GoogleCloudApigeeV1ProfileConfigCategoryDict,
)


class GoogleCloudApigeeV1ProfileConfig2(SdkBaseModel):
    """Required. Customized profile configuration that computes the security score."""

    categories: Optional[list[GoogleCloudApigeeV1ProfileConfigCategory]] = UNSET
    """List of categories of profile config."""


class GoogleCloudApigeeV1ProfileConfig2Dict(TypedDict):
    categories: NotRequired[list[GoogleCloudApigeeV1ProfileConfigCategoryDict]]
