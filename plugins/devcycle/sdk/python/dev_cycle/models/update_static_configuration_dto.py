from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2_dev_cycle_management_deprecated_features_v1_api import (
    Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .feature_sdk_visibility_dto import FeatureSdkVisibilityDto, FeatureSdkVisibilityDtoDict
from .feature_settings_dto import FeatureSettingsDto, FeatureSettingsDtoDict
from .update_feature_summary_dto import UpdateFeatureSummaryDto, UpdateFeatureSummaryDtoDict


class UpdateStaticConfigurationDto(SdkBaseModel):
    key: Optional[str] = UNSET
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    name: Optional[str] = UNSET
    """Name of the Feature"""

    description: Optional[str] = UNSET
    """Feature description."""

    type_: Optional[Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr] = Field(default=UNSET, alias="type")
    """Feature type."""

    tags: Optional[list[str]] = UNSET
    """Feature tags."""

    control_variation: Optional[str] = Field(default=UNSET, alias="controlVariation")
    """The key of the variation that is used as the control variation for Metrics"""

    settings: Optional[FeatureSettingsDto] = UNSET
    """Feature-level settings."""

    sdk_visibility: Optional[FeatureSdkVisibilityDto] = Field(default=UNSET, alias="sdkVisibility")
    """SDK Type Visibilty Settings"""

    staleness: Optional[Any] = UNSET
    summary: Optional[UpdateFeatureSummaryDto] = UNSET
    variables: Optional[Any] = UNSET
    """The static value of each variable in the feature"""

    environments: Optional[Any] = UNSET
    """The status of the configuration in each environment"""


class UpdateStaticConfigurationDtoDict(TypedDict):
    key: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    type_: NotRequired[Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr]
    tags: NotRequired[list[str]]
    control_variation: NotRequired[str]
    settings: NotRequired[FeatureSettingsDtoDict]
    sdk_visibility: NotRequired[FeatureSdkVisibilityDtoDict]
    staleness: NotRequired[Any]
    summary: NotRequired[UpdateFeatureSummaryDtoDict]
    variables: NotRequired[Any]
    environments: NotRequired[Any]
