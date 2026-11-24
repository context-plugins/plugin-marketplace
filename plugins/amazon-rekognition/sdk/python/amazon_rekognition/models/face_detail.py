from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .age_range import AgeRange, AgeRangeDict
from .beard import Beard, BeardDict
from .bounding_box import BoundingBox, BoundingBoxDict
from .emotion import Emotion, EmotionDict
from .eye_direction import EyeDirection, EyeDirectionDict
from .eye_open import EyeOpen, EyeOpenDict
from .eyeglasses import Eyeglasses, EyeglassesDict
from .face_occluded import FaceOccluded, FaceOccludedDict
from .gender import Gender, GenderDict
from .image_quality import ImageQuality, ImageQualityDict
from .landmark import Landmark, LandmarkDict
from .mouth_open import MouthOpen, MouthOpenDict
from .mustache import Mustache, MustacheDict
from .pose import Pose, PoseDict
from .smile import Smile, SmileDict
from .sunglasses import Sunglasses, SunglassesDict


class FaceDetail(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    age_range: Optional[AgeRange] = Field(default=UNSET, alias="AgeRange")
    smile: Optional[Smile] = Field(default=UNSET, alias="Smile")
    eyeglasses: Optional[Eyeglasses] = Field(default=UNSET, alias="Eyeglasses")
    sunglasses: Optional[Sunglasses] = Field(default=UNSET, alias="Sunglasses")
    gender: Optional[Gender] = Field(default=UNSET, alias="Gender")
    beard: Optional[Beard] = Field(default=UNSET, alias="Beard")
    mustache: Optional[Mustache] = Field(default=UNSET, alias="Mustache")
    eyes_open: Optional[EyeOpen] = Field(default=UNSET, alias="EyesOpen")
    mouth_open: Optional[MouthOpen] = Field(default=UNSET, alias="MouthOpen")
    emotions: Optional[list[Emotion]] = Field(default=UNSET, alias="Emotions")
    """The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is
    only making a determination of the physical appearance of a person's face. It is not a determination of the person’s
    internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face
    might not be sad emotionally."""

    landmarks: Optional[list[Landmark]] = Field(default=UNSET, alias="Landmarks")
    """Indicates the location of landmarks on the face. Default attribute."""

    pose: Optional[Pose] = Field(default=UNSET, alias="Pose")
    quality: Optional[ImageQuality] = Field(default=UNSET, alias="Quality")
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Confidence level that the bounding box contains a face (and not a different object such as a tree). Default
    attribute."""

    face_occluded: Optional[FaceOccluded] = Field(default=UNSET, alias="FaceOccluded")
    eye_direction: Optional[EyeDirection] = Field(default=UNSET, alias="EyeDirection")


class FaceDetailDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    age_range: NotRequired[AgeRangeDict]
    smile: NotRequired[SmileDict]
    eyeglasses: NotRequired[EyeglassesDict]
    sunglasses: NotRequired[SunglassesDict]
    gender: NotRequired[GenderDict]
    beard: NotRequired[BeardDict]
    mustache: NotRequired[MustacheDict]
    eyes_open: NotRequired[EyeOpenDict]
    mouth_open: NotRequired[MouthOpenDict]
    emotions: NotRequired[list[EmotionDict]]
    landmarks: NotRequired[list[LandmarkDict]]
    pose: NotRequired[PoseDict]
    quality: NotRequired[ImageQualityDict]
    confidence: NotRequired[float]
    face_occluded: NotRequired[FaceOccludedDict]
    eye_direction: NotRequired[EyeDirectionDict]
