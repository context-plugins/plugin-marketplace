from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_advanced_api_ops_config import (
    GoogleCloudApigeeV1AdvancedApiOpsConfig,
    GoogleCloudApigeeV1AdvancedApiOpsConfigDict,
)
from .google_cloud_apigee_v1_analytics_config2 import (
    GoogleCloudApigeeV1AnalyticsConfig2,
    GoogleCloudApigeeV1AnalyticsConfig2Dict,
)
from .google_cloud_apigee_v1_api_security_config2 import (
    GoogleCloudApigeeV1ApiSecurityConfig2,
    GoogleCloudApigeeV1ApiSecurityConfig2Dict,
)
from .google_cloud_apigee_v1_connectors_platform_config import (
    GoogleCloudApigeeV1ConnectorsPlatformConfig,
    GoogleCloudApigeeV1ConnectorsPlatformConfigDict,
)
from .google_cloud_apigee_v1_integration_config import (
    GoogleCloudApigeeV1IntegrationConfig,
    GoogleCloudApigeeV1IntegrationConfigDict,
)
from .google_cloud_apigee_v1_monetization_config import (
    GoogleCloudApigeeV1MonetizationConfig,
    GoogleCloudApigeeV1MonetizationConfigDict,
)


class GoogleCloudApigeeV1AddonsConfig1(SdkBaseModel):
    """Required. Add-on configurations."""

    monetization_config: Optional[GoogleCloudApigeeV1MonetizationConfig] = Field(
        default=UNSET, alias="monetizationConfig"
    )
    """Configuration for the Monetization add-on."""

    api_security_config: Optional[GoogleCloudApigeeV1ApiSecurityConfig2] = Field(
        default=UNSET, alias="apiSecurityConfig"
    )
    """Configuration for the API Security add-on."""

    integration_config: Optional[GoogleCloudApigeeV1IntegrationConfig] = Field(default=UNSET, alias="integrationConfig")
    """Configuration for the Integration add-on."""

    connectors_platform_config: Optional[GoogleCloudApigeeV1ConnectorsPlatformConfig] = Field(
        default=UNSET, alias="connectorsPlatformConfig"
    )
    """Configuration for the Connectors Platform add-on."""

    analytics_config: Optional[GoogleCloudApigeeV1AnalyticsConfig2] = Field(default=UNSET, alias="analyticsConfig")
    """Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig."""

    advanced_api_ops_config: Optional[GoogleCloudApigeeV1AdvancedApiOpsConfig] = Field(
        default=UNSET, alias="advancedApiOpsConfig"
    )
    """Configuration for the Advanced API Ops add-on."""


class GoogleCloudApigeeV1AddonsConfig1Dict(TypedDict):
    monetization_config: NotRequired[GoogleCloudApigeeV1MonetizationConfigDict]
    api_security_config: NotRequired[GoogleCloudApigeeV1ApiSecurityConfig2Dict]
    integration_config: NotRequired[GoogleCloudApigeeV1IntegrationConfigDict]
    connectors_platform_config: NotRequired[GoogleCloudApigeeV1ConnectorsPlatformConfigDict]
    analytics_config: NotRequired[GoogleCloudApigeeV1AnalyticsConfig2Dict]
    advanced_api_ops_config: NotRequired[GoogleCloudApigeeV1AdvancedApiOpsConfigDict]
