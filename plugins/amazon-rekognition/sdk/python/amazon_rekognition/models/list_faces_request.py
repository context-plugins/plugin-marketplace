from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListFacesRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """ID of the collection from which to list the faces."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of faces."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of faces to return."""

    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """An array of user IDs to filter results with when listing faces in a collection."""

    face_ids: Optional[list[str]] = Field(default=UNSET, alias="FaceIds")
    """An array of face IDs to filter results with when listing faces in a collection."""


class ListFacesRequestDict(TypedDict):
    collection_id: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    user_id: NotRequired[str]
    face_ids: NotRequired[list[str]]
