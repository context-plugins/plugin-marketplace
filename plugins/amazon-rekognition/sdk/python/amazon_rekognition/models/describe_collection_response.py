from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DescribeCollectionResponse(SdkBaseModel):
    face_count: Optional[int] = Field(default=UNSET, alias="FaceCount")
    """The number of faces that are indexed into the collection. To index faces into a collection, use IndexFaces."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """The version of the face model that's used by the collection for face detection. For more information, see Model
    versioning in the Amazon Rekognition Developer Guide."""

    collection_arn: Optional[str] = Field(default=UNSET, alias="CollectionARN")
    """The Amazon Resource Name (ARN) of the collection."""

    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is
    00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970."""

    user_count: Optional[int] = Field(default=UNSET, alias="UserCount")
    """The number of UserIDs assigned to the specified colleciton."""


class DescribeCollectionResponseDict(TypedDict):
    face_count: NotRequired[int]
    face_model_version: NotRequired[str]
    collection_arn: NotRequired[str]
    creation_timestamp: NotRequired[RFC3339DateTime]
    user_count: NotRequired[int]
