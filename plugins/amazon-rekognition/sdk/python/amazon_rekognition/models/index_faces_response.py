from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.orientation_correction_amazon_rekognition_face_collections_api import (
    OrientationCorrectionAmazonRekognitionFaceCollectionsApiOrStr,
)
from .face_record import FaceRecord, FaceRecordDict
from .unindexed_face import UnindexedFace, UnindexedFaceDict


class IndexFacesResponse(SdkBaseModel):
    face_records: Optional[list[FaceRecord]] = Field(default=UNSET, alias="FaceRecords")
    """An array of faces detected and added to the collection. For more information, see Searching Faces in a Collection
    in the Amazon Rekognition Developer Guide."""

    orientation_correction: Optional[OrientationCorrectionAmazonRekognitionFaceCollectionsApiOrStr] = Field(
        default=UNSET, alias="OrientationCorrection"
    )
    """If your collection is associated with a face detection model that's later than version 3.0, the value of
    OrientationCorrection is always null and no orientation information is returned. If your collection is associated
    with a face detection model that's version 3.0 or earlier, the following applies: If the input image is in .jpeg
    format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation.
    Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are
    translated to represent object locations"""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """The version number of the face detection model that's associated with the input collection (CollectionId)."""

    unindexed_faces: Optional[list[UnindexedFace]] = Field(default=UNSET, alias="UnindexedFaces")
    """An array of faces that were detected in the image but weren't indexed. They weren't indexed because the quality
    filter identified them as low quality, or the MaxFaces request parameter filtered them out. To use the quality
    filter, you specify the QualityFilter request parameter."""


class IndexFacesResponseDict(TypedDict):
    face_records: NotRequired[list[FaceRecordDict]]
    orientation_correction: NotRequired[OrientationCorrectionAmazonRekognitionFaceCollectionsApiOrStr]
    face_model_version: NotRequired[str]
    unindexed_faces: NotRequired[list[UnindexedFaceDict]]
