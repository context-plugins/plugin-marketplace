from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchFacesRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """ID of the collection the face belongs to."""

    face_id: str = Field(alias="FaceId")
    """ID of a face to find matches for in the collection."""

    max_faces: Optional[int] = Field(default=UNSET, alias="MaxFaces")
    """Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence
    in the match."""

    face_match_threshold: Optional[float] = Field(default=UNSET, alias="FaceMatchThreshold")
    """Optional value specifying the minimum confidence in the face match to return. For example, don't return any
    matches where confidence in matches is less than 70%. The default value is 80%."""


class SearchFacesRequestDict(TypedDict):
    collection_id: str
    face_id: str
    max_faces: NotRequired[int]
    face_match_threshold: NotRequired[float]
