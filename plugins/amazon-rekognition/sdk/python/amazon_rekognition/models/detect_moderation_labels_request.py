from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .human_loop_config import HumanLoopConfig, HumanLoopConfigDict
from .image import Image, ImageDict


class DetectModerationLabelsRequest(SdkBaseModel):
    image: Image = Field(alias="Image")
    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels
    with a confidence level lower than this specified value. If you don't specify MinConfidence, the operation returns
    labels with confidence values greater than or equal to 50 percent."""

    human_loop_config: Optional[HumanLoopConfig] = Field(default=UNSET, alias="HumanLoopConfig")
    project_version: Optional[str] = Field(default=UNSET, alias="ProjectVersion")
    """Identifier for the custom adapter. Expects the ProjectVersionArn as a value. Use the CreateProject or
    CreateProjectVersion APIs to create a custom adapter."""


class DetectModerationLabelsRequestDict(TypedDict):
    image: ImageDict
    min_confidence: NotRequired[float]
    human_loop_config: NotRequired[HumanLoopConfigDict]
    project_version: NotRequired[str]
