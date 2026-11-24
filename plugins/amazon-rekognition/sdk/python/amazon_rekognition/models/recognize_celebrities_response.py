from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .celebrity import Celebrity, CelebrityDict
from .compared_face import ComparedFace, ComparedFaceDict
from .enums.orientation_correction import OrientationCorrectionOrStr


class RecognizeCelebritiesResponse(SdkBaseModel):
    celebrity_faces: Optional[list[Celebrity]] = Field(default=UNSET, alias="CelebrityFaces")
    """Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64 celebrities in an
    image. Each celebrity object includes the following attributes: Face, Confidence, Emotions, Landmarks, Pose,
    Quality, Smile, Id, KnownGender, MatchConfidence, Name, Urls."""

    unrecognized_faces: Optional[list[ComparedFace]] = Field(default=UNSET, alias="UnrecognizedFaces")
    """Details about each unrecognized face in the image."""

    orientation_correction: Optional[OrientationCorrectionOrStr] = Field(default=UNSET, alias="OrientationCorrection")
    """Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021.
    Any returned values for this field included in an API response will always be NULL. The orientation of the input
    image (counterclockwise direction). If your application displays the image, you can use this value to correct the
    orientation. The bounding box coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations
    before the image orientation is corrected. If the input image is in .jpeg format, it might contain exchangeable
    image (Exif) metadata that inclu"""


class RecognizeCelebritiesResponseDict(TypedDict):
    celebrity_faces: NotRequired[list[CelebrityDict]]
    unrecognized_faces: NotRequired[list[ComparedFaceDict]]
    orientation_correction: NotRequired[OrientationCorrectionOrStr]
