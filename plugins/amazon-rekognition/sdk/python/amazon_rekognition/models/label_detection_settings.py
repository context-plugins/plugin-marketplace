from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .general_labels_settings import GeneralLabelsSettings, GeneralLabelsSettingsDict


class LabelDetectionSettings(SdkBaseModel):
    general_labels: Optional[GeneralLabelsSettings] = Field(default=UNSET, alias="GeneralLabels")


class LabelDetectionSettingsDict(TypedDict):
    general_labels: NotRequired[GeneralLabelsSettingsDict]
