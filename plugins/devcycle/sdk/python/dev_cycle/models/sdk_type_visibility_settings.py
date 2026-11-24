from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SdkTypeVisibilitySettings(SdkBaseModel):
    enabled_in_feature_settings: bool = Field(alias="enabledInFeatureSettings")


class SdkTypeVisibilitySettingsDict(TypedDict):
    enabled_in_feature_settings: bool
