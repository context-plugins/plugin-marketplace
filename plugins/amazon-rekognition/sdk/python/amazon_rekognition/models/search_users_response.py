from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .searched_face import SearchedFace, SearchedFaceDict
from .searched_user import SearchedUser, SearchedUserDict
from .user_match import UserMatch, UserMatchDict


class SearchUsersResponse(SdkBaseModel):
    user_matches: Optional[list[UserMatch]] = Field(default=UNSET, alias="UserMatches")
    """An array of UserMatch objects that matched the input face along with the confidence in the match. Array will be
    empty if there are no matches."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the input CollectionId."""

    searched_face: Optional[SearchedFace] = Field(default=UNSET, alias="SearchedFace")
    searched_user: Optional[SearchedUser] = Field(default=UNSET, alias="SearchedUser")


class SearchUsersResponseDict(TypedDict):
    user_matches: NotRequired[list[UserMatchDict]]
    face_model_version: NotRequired[str]
    searched_face: NotRequired[SearchedFaceDict]
    searched_user: NotRequired[SearchedUserDict]
