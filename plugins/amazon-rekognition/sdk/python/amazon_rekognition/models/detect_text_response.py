from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text_detection import TextDetection, TextDetectionDict


class DetectTextResponse(SdkBaseModel):
    text_detections: Optional[list[TextDetection]] = Field(default=UNSET, alias="TextDetections")
    """An array of text that was detected in the input image."""

    text_model_version: Optional[str] = Field(default=UNSET, alias="TextModelVersion")
    """The model version used to detect text."""


class DetectTextResponseDict(TypedDict):
    text_detections: NotRequired[list[TextDetectionDict]]
    text_model_version: NotRequired[str]
