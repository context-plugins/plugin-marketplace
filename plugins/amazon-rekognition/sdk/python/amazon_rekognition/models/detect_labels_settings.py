from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_labels_image_properties_settings import (
    DetectLabelsImagePropertiesSettings,
    DetectLabelsImagePropertiesSettingsDict,
)
from .general_labels_settings import GeneralLabelsSettings, GeneralLabelsSettingsDict


class DetectLabelsSettings(SdkBaseModel):
    general_labels: Optional[GeneralLabelsSettings] = Field(default=UNSET, alias="GeneralLabels")
    image_properties: Optional[DetectLabelsImagePropertiesSettings] = Field(default=UNSET, alias="ImageProperties")


class DetectLabelsSettingsDict(TypedDict):
    general_labels: NotRequired[GeneralLabelsSettingsDict]
    image_properties: NotRequired[DetectLabelsImagePropertiesSettingsDict]
