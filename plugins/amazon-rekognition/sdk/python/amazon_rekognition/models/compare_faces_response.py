from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compare_faces_match import CompareFacesMatch, CompareFacesMatchDict
from .compared_face import ComparedFace, ComparedFaceDict
from .compared_source_image_face import ComparedSourceImageFace, ComparedSourceImageFaceDict
from .enums.source_image_orientation_correction import SourceImageOrientationCorrectionOrStr
from .enums.target_image_orientation_correction import TargetImageOrientationCorrectionOrStr


class CompareFacesResponse(SdkBaseModel):
    source_image_face: Optional[ComparedSourceImageFace] = Field(default=UNSET, alias="SourceImageFace")
    face_matches: Optional[list[CompareFacesMatch]] = Field(default=UNSET, alias="FaceMatches")
    """An array of faces in the target image that match the source image face. Each CompareFacesMatch object provides
    the bounding box, the confidence level that the bounding box contains a face, and the similarity score for the face
    in the bounding box and the face in the source image."""

    unmatched_faces: Optional[list[ComparedFace]] = Field(default=UNSET, alias="UnmatchedFaces")
    """An array of faces in the target image that did not match the source image face."""

    source_image_orientation_correction: Optional[SourceImageOrientationCorrectionOrStr] = Field(
        default=UNSET, alias="SourceImageOrientationCorrection"
    )
    """The value of SourceImageOrientationCorrection is always null. If the input image is in .jpeg format, it might
    contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition
    uses this orientation information to perform image correction. The bounding box coordinates are translated to
    represent object locations after the orientation information in the Exif metadata is used to correct the image
    orientation. Images in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction
    for images in .png format and .jpeg imag"""

    target_image_orientation_correction: Optional[TargetImageOrientationCorrectionOrStr] = Field(
        default=UNSET, alias="TargetImageOrientationCorrection"
    )
    """The value of TargetImageOrientationCorrection is always null. If the input image is in .jpeg format, it might
    contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition
    uses this orientation information to perform image correction. The bounding box coordinates are translated to
    represent object locations after the orientation information in the Exif metadata is used to correct the image
    orientation. Images in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction
    for images in .png format and .jpeg imag"""


class CompareFacesResponseDict(TypedDict):
    source_image_face: NotRequired[ComparedSourceImageFaceDict]
    face_matches: NotRequired[list[CompareFacesMatchDict]]
    unmatched_faces: NotRequired[list[ComparedFaceDict]]
    source_image_orientation_correction: NotRequired[SourceImageOrientationCorrectionOrStr]
    target_image_orientation_correction: NotRequired[TargetImageOrientationCorrectionOrStr]
