from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .face_match import FaceMatch, FaceMatchDict


class SearchFacesByImageResponse(SdkBaseModel):
    searched_face_bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="SearchedFaceBoundingBox")
    searched_face_confidence: Optional[float] = Field(default=UNSET, alias="SearchedFaceConfidence")
    """The level of confidence that the searchedFaceBoundingBox, contains a face."""

    face_matches: Optional[list[FaceMatch]] = Field(default=UNSET, alias="FaceMatches")
    """An array of faces that match the input face, along with the confidence in the match."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the input collection (CollectionId)."""


class SearchFacesByImageResponseDict(TypedDict):
    searched_face_bounding_box: NotRequired[BoundingBoxDict]
    searched_face_confidence: NotRequired[float]
    face_matches: NotRequired[list[FaceMatchDict]]
    face_model_version: NotRequired[str]
