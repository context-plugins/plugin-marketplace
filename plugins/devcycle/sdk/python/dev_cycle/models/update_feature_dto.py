from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_variable_dto import CreateVariableDto, CreateVariableDtoDict
from .enums.type2_dev_cycle_management_deprecated_features_v1_api import (
    Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .feature_sdk_visibility_dto import FeatureSdkVisibilityDto, FeatureSdkVisibilityDtoDict
from .feature_settings_dto import FeatureSettingsDto, FeatureSettingsDtoDict
from .update_feature_config_dto import UpdateFeatureConfigDto, UpdateFeatureConfigDtoDict
from .update_feature_summary_dto import UpdateFeatureSummaryDto, UpdateFeatureSummaryDtoDict
from .update_variation_dto import UpdateVariationDto, UpdateVariationDtoDict


class UpdateFeatureDto(SdkBaseModel):
    key: Optional[str] = UNSET
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    name: Optional[str] = UNSET
    """Name of the Feature"""

    description: Optional[str] = UNSET
    """Feature description."""

    configurations: Optional[dict[str, UpdateFeatureConfigDto]] = UNSET
    variations: Optional[list[UpdateVariationDto]] = UNSET
    """Variation configurations to be used by feature configurations."""

    staleness: Optional[Any] = UNSET
    summary: Optional[UpdateFeatureSummaryDto] = UNSET
    variables: Optional[list[CreateVariableDto]] = UNSET
    """Variable definitions to be referenced in variations"""

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


class UpdateFeatureDtoDict(TypedDict):
    key: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    configurations: NotRequired[dict[str, UpdateFeatureConfigDtoDict]]
    variations: NotRequired[list[UpdateVariationDtoDict]]
    staleness: NotRequired[Any]
    summary: NotRequired[UpdateFeatureSummaryDtoDict]
    variables: NotRequired[list[CreateVariableDtoDict]]
    type_: NotRequired[Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr]
    tags: NotRequired[list[str]]
    control_variation: NotRequired[str]
    settings: NotRequired[FeatureSettingsDtoDict]
    sdk_visibility: NotRequired[FeatureSdkVisibilityDtoDict]
