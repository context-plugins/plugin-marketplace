from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .image import Image, ImageDict


class DetectCustomLabelsRequest(SdkBaseModel):
    project_version_arn: str = Field(alias="ProjectVersionArn")
    """The ARN of the model version that you want to use. Only models associated with Custom Labels projects accepted by
    the operation. If a provided ARN refers to a model version associated with a project for a different feature type,
    then an InvalidParameterException is returned."""

    image: Image = Field(alias="Image")
    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results you want the service to return in the response. The service returns the specified
    number of highest confidence labels ranked from highest confidence to lowest."""

    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence level for the labels to return. DetectCustomLabels doesn't return any labels
    with a confidence value that's lower than this specified value. If you specify a value of 0, DetectCustomLabels
    returns all labels, regardless of the assumed threshold applied to each label. If you don't specify a value for
    MinConfidence, DetectCustomLabels returns labels based on the assumed threshold of each label."""


class DetectCustomLabelsRequestDict(TypedDict):
    project_version_arn: str
    image: ImageDict
    max_results: NotRequired[int]
    min_confidence: NotRequired[float]
