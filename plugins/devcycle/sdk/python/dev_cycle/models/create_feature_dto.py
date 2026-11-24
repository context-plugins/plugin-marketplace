from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_variable_dto import CreateVariableDto, CreateVariableDtoDict
from .create_variation_dto import CreateVariationDto, CreateVariationDtoDict
from .enums.type2_dev_cycle_management_deprecated_features_v1_api import (
    Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .feature_sdk_visibility_dto import FeatureSdkVisibilityDto, FeatureSdkVisibilityDtoDict
from .feature_settings_dto import FeatureSettingsDto, FeatureSettingsDtoDict
from .update_feature_config_dto import UpdateFeatureConfigDto, UpdateFeatureConfigDtoDict


class CreateFeatureDto(SdkBaseModel):
    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    name: str
    """Name of the Feature"""

    description: Optional[str] = UNSET
    """Feature description."""

    configurations: dict[str, UpdateFeatureConfigDto]
    type_: Optional[Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr] = Field(default=UNSET, alias="type")
    """Feature type."""

    tags: Optional[list[str]] = UNSET
    """Feature tags."""

    variations: Optional[list[CreateVariationDto]] = UNSET
    """Variation configurations to be used by feature configurations."""

    control_variation: Optional[str] = Field(default=UNSET, alias="controlVariation")
    """The key of the variation that is used as the control variation for Metrics"""

    variables: Optional[list[CreateVariableDto]] = UNSET
    """Variable definitions to be referenced in variations"""

    settings: Optional[FeatureSettingsDto] = UNSET
    """Feature-level settings."""

    sdk_visibility: Optional[FeatureSdkVisibilityDto] = Field(default=UNSET, alias="sdkVisibility")
    """SDK Type Visibilty Settings"""


class CreateFeatureDtoDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    configurations: dict[str, UpdateFeatureConfigDtoDict]
    type_: NotRequired[Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr]
    tags: NotRequired[list[str]]
    variations: NotRequired[list[CreateVariationDtoDict]]
    control_variation: NotRequired[str]
    variables: NotRequired[list[CreateVariableDtoDict]]
    settings: NotRequired[FeatureSettingsDtoDict]
    sdk_visibility: NotRequired[FeatureSdkVisibilityDtoDict]
