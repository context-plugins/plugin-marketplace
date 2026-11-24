from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.quality_filter import QualityFilterOrStr
from .image import Image, ImageDict


class SearchFacesByImageRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """ID of the collection to search."""

    image: Image = Field(alias="Image")
    max_faces: Optional[int] = Field(default=UNSET, alias="MaxFaces")
    """Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence
    in the match."""

    face_match_threshold: Optional[float] = Field(default=UNSET, alias="FaceMatchThreshold")
    """(Optional) Specifies the minimum confidence in the face match to return. For example, don't return any matches
    where confidence in matches is less than 70%. The default value is 80%."""

    quality_filter: Optional[QualityFilterOrStr] = Field(default=UNSET, alias="QualityFilter")
    """A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't
    searched for in the collection. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you specify LOW,
    MEDIUM, or HIGH, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a
    variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object
    that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you
    specify NONE, no filtering is"""


class SearchFacesByImageRequestDict(TypedDict):
    collection_id: str
    image: ImageDict
    max_faces: NotRequired[int]
    face_match_threshold: NotRequired[float]
    quality_filter: NotRequired[QualityFilterOrStr]
