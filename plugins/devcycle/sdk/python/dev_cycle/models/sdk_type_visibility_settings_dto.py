from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SdkTypeVisibilitySettingsDto(SdkBaseModel):
    enabled_in_feature_settings: bool = Field(alias="enabledInFeatureSettings")


class SdkTypeVisibilitySettingsDtoDict(TypedDict):
    enabled_in_feature_settings: bool
