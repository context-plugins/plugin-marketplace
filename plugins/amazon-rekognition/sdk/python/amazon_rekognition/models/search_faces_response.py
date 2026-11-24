from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face_match import FaceMatch, FaceMatchDict


class SearchFacesResponse(SdkBaseModel):
    searched_face_id: Optional[str] = Field(default=UNSET, alias="SearchedFaceId")
    """ID of the face that was searched for matches in a collection."""

    face_matches: Optional[list[FaceMatch]] = Field(default=UNSET, alias="FaceMatches")
    """An array of faces that matched the input face, along with the confidence in the match."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the input collection (CollectionId)."""


class SearchFacesResponseDict(TypedDict):
    searched_face_id: NotRequired[str]
    face_matches: NotRequired[list[FaceMatchDict]]
    face_model_version: NotRequired[str]
