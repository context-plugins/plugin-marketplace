from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_runtime_analytics_config2 import (
    GoogleCloudApigeeV1RuntimeAnalyticsConfig2,
    GoogleCloudApigeeV1RuntimeAnalyticsConfig2Dict,
)
from .google_cloud_apigee_v1_runtime_api_security_config2 import (
    GoogleCloudApigeeV1RuntimeApiSecurityConfig2,
    GoogleCloudApigeeV1RuntimeApiSecurityConfig2Dict,
)
from .google_cloud_apigee_v1_runtime_spec_generation_addon_config2 import (
    GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2,
    GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2Dict,
)


class GoogleCloudApigeeV1RuntimeAddonsConfig(SdkBaseModel):
    """RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment."""

    name: Optional[str] = UNSET
    """Name of the addons config in the format: ``organizations/{org}/environments/{env}/addonsConfig``"""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision number used by the runtime to detect config changes."""

    api_security_config: Optional[GoogleCloudApigeeV1RuntimeApiSecurityConfig2] = Field(
        default=UNSET, alias="apiSecurityConfig"
    )
    """Runtime configuration for API Security add-on."""

    analytics_config: Optional[GoogleCloudApigeeV1RuntimeAnalyticsConfig2] = Field(
        default=UNSET, alias="analyticsConfig"
    )
    """Runtime configuration for Analytics add-on."""

    uid: Optional[str] = UNSET
    """UID is to detect if config is recreated after deletion. The add-on config will only be deleted when the
    environment itself gets deleted, thus it will always be the same as the UID of EnvironmentConfig."""

    spec_generation_config: Optional[GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2] = Field(
        default=UNSET, alias="specGenerationConfig"
    )
    """Runtime configuration for Spec Generation add-on."""


class GoogleCloudApigeeV1RuntimeAddonsConfigDict(TypedDict):
    name: NotRequired[str]
    revision_id: NotRequired[str]
    api_security_config: NotRequired[GoogleCloudApigeeV1RuntimeApiSecurityConfig2Dict]
    analytics_config: NotRequired[GoogleCloudApigeeV1RuntimeAnalyticsConfig2Dict]
    uid: NotRequired[str]
    spec_generation_config: NotRequired[GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2Dict]
