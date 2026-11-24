from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .searched_face_details import SearchedFaceDetails, SearchedFaceDetailsDict
from .unsearched_face import UnsearchedFace, UnsearchedFaceDict
from .user_match import UserMatch, UserMatchDict


class SearchUsersByImageResponse(SdkBaseModel):
    user_matches: Optional[list[UserMatch]] = Field(default=UNSET, alias="UserMatches")
    """An array of UserID objects that matched the input face, along with the confidence in the match. The returned
    structure will be empty if there are no matches. Returned if the SearchUsersByImageResponse action is successful."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the input collection CollectionId."""

    searched_face: Optional[SearchedFaceDetails] = Field(default=UNSET, alias="SearchedFace")
    unsearched_faces: Optional[list[UnsearchedFace]] = Field(default=UNSET, alias="UnsearchedFaces")
    """List of UnsearchedFace objects. Contains the face details infered from the specified image but not used for
    search. Contains reasons that describe why a face wasn't used for Search."""


class SearchUsersByImageResponseDict(TypedDict):
    user_matches: NotRequired[list[UserMatchDict]]
    face_model_version: NotRequired[str]
    searched_face: NotRequired[SearchedFaceDetailsDict]
    unsearched_faces: NotRequired[list[UnsearchedFaceDict]]
