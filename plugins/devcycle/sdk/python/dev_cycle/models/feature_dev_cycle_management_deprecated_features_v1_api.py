from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .audit_log_entity import AuditLogEntity, AuditLogEntityDict
from .enums.source_dev_cycle_management_deprecated_features_v1_api import (
    SourceDevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .enums.status1 import Status1OrStr
from .enums.type3_dev_cycle_management_deprecated_features_v1_api import (
    Type3DevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .feature_config import FeatureConfig, FeatureConfigDict
from .feature_custom_status import FeatureCustomStatus, FeatureCustomStatusDict
from .feature_sdk_visibility import FeatureSdkVisibility, FeatureSdkVisibilityDict
from .feature_settings import FeatureSettings, FeatureSettingsDict
from .feature_summary import FeatureSummary, FeatureSummaryDict
from .variable_dev_cycle_management_deprecated_features_v1_api import (
    VariableDevCycleManagementDeprecatedFeaturesV1Api,
    VariableDevCycleManagementDeprecatedFeaturesV1ApiDict,
)
from .variation import Variation, VariationDict


class FeatureDevCycleManagementDeprecatedFeaturesV1Api(SdkBaseModel):
    id: str = Field(alias="_id")
    """A unique Feature ID"""

    project: str = Field(alias="_project")
    """The Project owning the Feature"""

    source: SourceDevCycleManagementDeprecatedFeaturesV1ApiOrStr
    """Source that created the Feature"""

    status: Status1OrStr
    """Status of the Feature"""

    type_: Optional[Type3DevCycleManagementDeprecatedFeaturesV1ApiOrStr] = Field(default=UNSET, alias="type")
    """The Feature type"""

    name: str
    """Name of the Feature"""

    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Feature description."""

    created_by: Optional[str] = Field(default=UNSET, alias="_createdBy")
    """ID of the User who created the Feature"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Feature was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Feature was last updated"""

    prod_targeting_updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="prodTargetingUpdatedAt")
    """The date the Feature had an update that impacted production targeting"""

    variations: Optional[list[Variation]] = UNSET
    """Variation configurations to be used by feature configurations."""

    control_variation: str = Field(alias="controlVariation")
    """The key of the variation that is used as the control variation for Metrics"""

    static_variation: Optional[str] = Field(default=UNSET, alias="staticVariation")
    """The key of the variation that is set when the Feature's status is set to complete"""

    variables: Optional[list[VariableDevCycleManagementDeprecatedFeaturesV1Api]] = UNSET
    """Variable definitions to be referenced in variations"""

    tags: Optional[list[str]] = UNSET
    """Tags to organize Features on the dashboard"""

    ld_link: Optional[str] = Field(default=UNSET, alias="ldLink")
    """A link to the feature on LaunchDarkly if it has importedByLD type"""

    readonly: bool
    """Controls whether the feature is editable for a given user"""

    settings: Optional[FeatureSettings] = UNSET
    """Defines feature-level settings"""

    sdk_visibility: Optional[FeatureSdkVisibility] = Field(default=UNSET, alias="sdkVisibility")
    """SDK Type visibility settings to filter features by platform"""

    configurations: list[FeatureConfig]
    """An array of targeting configurations for the associated environments"""

    latest_update: Optional[AuditLogEntity] = Field(default=UNSET, alias="latestUpdate")
    """Most recent audit log entry for this feature Only included in response if includeLatestUpdate query param is
    true"""

    change_requests: Optional[list[Any]] = Field(default=UNSET, alias="changeRequests")
    """Pending change requests for this Feature"""

    staleness: Optional[Any] = UNSET
    """The staleness of the feature"""

    custom_status: Optional[FeatureCustomStatus] = Field(default=UNSET, alias="customStatus")
    """Custom status reference for this feature"""

    summary: FeatureSummary
    """Summary details for dashboard"""


class FeatureDevCycleManagementDeprecatedFeaturesV1ApiDict(TypedDict):
    id: str
    project: str
    source: SourceDevCycleManagementDeprecatedFeaturesV1ApiOrStr
    status: Status1OrStr
    type_: NotRequired[Type3DevCycleManagementDeprecatedFeaturesV1ApiOrStr]
    name: str
    key: str
    description: NotRequired[str]
    created_by: NotRequired[str]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    prod_targeting_updated_at: NotRequired[RFC3339DateTime]
    variations: NotRequired[list[VariationDict]]
    control_variation: str
    static_variation: NotRequired[str]
    variables: NotRequired[list[VariableDevCycleManagementDeprecatedFeaturesV1ApiDict]]
    tags: NotRequired[list[str]]
    ld_link: NotRequired[str]
    readonly: bool
    settings: NotRequired[FeatureSettingsDict]
    sdk_visibility: NotRequired[FeatureSdkVisibilityDict]
    configurations: list[FeatureConfigDict]
    latest_update: NotRequired[AuditLogEntityDict]
    change_requests: NotRequired[list[Any]]
    staleness: NotRequired[Any]
    custom_status: NotRequired[FeatureCustomStatusDict]
    summary: FeatureSummaryDict
