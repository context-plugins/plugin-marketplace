from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCollectionsResponse(SdkBaseModel):
    collection_ids: Optional[list[str]] = Field(default=UNSET, alias="CollectionIds")
    """An array of collection IDs."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result is truncated, the response provides a NextToken that you can use in the subsequent request to fetch
    the next set of collection IDs."""

    face_model_versions: Optional[list[str]] = Field(default=UNSET, alias="FaceModelVersions")
    """Version numbers of the face detection models associated with the collections in the array CollectionIds. For
    example, the value of FaceModelVersions[2] is the version number for the face detection model used by the collection
    in CollectionId[2]."""


class ListCollectionsResponseDict(TypedDict):
    collection_ids: NotRequired[list[str]]
    next_token: NotRequired[str]
    face_model_versions: NotRequired[list[str]]
