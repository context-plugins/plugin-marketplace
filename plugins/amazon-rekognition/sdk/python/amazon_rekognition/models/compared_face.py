from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .emotion import Emotion, EmotionDict
from .image_quality import ImageQuality, ImageQualityDict
from .landmark import Landmark, LandmarkDict
from .pose import Pose, PoseDict
from .smile import Smile, SmileDict


class ComparedFace(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence that what the bounding box contains is a face."""

    landmarks: Optional[list[Landmark]] = Field(default=UNSET, alias="Landmarks")
    """An array of facial landmarks."""

    pose: Optional[Pose] = Field(default=UNSET, alias="Pose")
    quality: Optional[ImageQuality] = Field(default=UNSET, alias="Quality")
    emotions: Optional[list[Emotion]] = Field(default=UNSET, alias="Emotions")
    """The emotions that appear to be expressed on the face, and the confidence level in the determination. Valid values
    include "Happy", "Sad", "Angry", "Confused", "Disgusted", "Surprised", "Calm", "Unknown", and "Fear"."""

    smile: Optional[Smile] = Field(default=UNSET, alias="Smile")


class ComparedFaceDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    confidence: NotRequired[float]
    landmarks: NotRequired[list[LandmarkDict]]
    pose: NotRequired[PoseDict]
    quality: NotRequired[ImageQualityDict]
    emotions: NotRequired[list[EmotionDict]]
    smile: NotRequired[SmileDict]
