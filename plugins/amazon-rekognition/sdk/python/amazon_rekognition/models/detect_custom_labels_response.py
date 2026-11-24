from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_label import CustomLabel, CustomLabelDict


class DetectCustomLabelsResponse(SdkBaseModel):
    custom_labels: Optional[list[CustomLabel]] = Field(default=UNSET, alias="CustomLabels")
    """An array of custom labels detected in the input image."""


class DetectCustomLabelsResponseDict(TypedDict):
    custom_labels: NotRequired[list[CustomLabelDict]]
