from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchUsersRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a FaceId is provided,
    UserId isn’t required to be present in the Collection."""

    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """ID for the existing User."""

    face_id: Optional[str] = Field(default=UNSET, alias="FaceId")
    """ID for the existing face."""

    user_match_threshold: Optional[float] = Field(default=UNSET, alias="UserMatchThreshold")
    """Optional value that specifies the minimum confidence in the matched UserID to return. Default value of 80."""

    max_users: Optional[int] = Field(default=UNSET, alias="MaxUsers")
    """Maximum number of identities to return."""


class SearchUsersRequestDict(TypedDict):
    collection_id: str
    user_id: NotRequired[str]
    face_id: NotRequired[str]
    user_match_threshold: NotRequired[float]
    max_users: NotRequired[int]
