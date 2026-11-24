from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_labels_settings import DetectLabelsSettings, DetectLabelsSettingsDict
from .enums.feature import FeatureOrStr
from .image import Image, ImageDict


class DetectLabelsRequest(SdkBaseModel):
    image: Image = Field(alias="Image")
    max_labels: Optional[int] = Field(default=UNSET, alias="MaxLabels")
    """Maximum number of labels you want the service to return in the response. The service returns the specified number
    of highest confidence labels. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input
    parameter."""

    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels
    with confidence lower than this specified value. If MinConfidence is not specified, the operation returns labels
    with a confidence values greater than or equal to 55 percent. Only valid when GENERAL_LABELS is specified as a
    feature type in the Feature input parameter."""

    features: Optional[list[FeatureOrStr]] = Field(default=UNSET, alias="Features")
    """A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection feature, while
    specifying IMAGE_PROPERTIES returns information regarding image color and quality. If no option is specified
    GENERAL_LABELS is used by default."""

    settings: Optional[DetectLabelsSettings] = Field(default=UNSET, alias="Settings")


class DetectLabelsRequestDict(TypedDict):
    image: ImageDict
    max_labels: NotRequired[int]
    min_confidence: NotRequired[float]
    features: NotRequired[list[FeatureOrStr]]
    settings: NotRequired[DetectLabelsSettingsDict]
