from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCollectionResponse(SdkBaseModel):
    status_code: Optional[int] = Field(default=UNSET, alias="StatusCode")
    """HTTP status code indicating the result of the operation."""

    collection_arn: Optional[str] = Field(default=UNSET, alias="CollectionArn")
    """Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the collection you are creating."""


class CreateCollectionResponseDict(TypedDict):
    status_code: NotRequired[int]
    collection_arn: NotRequired[str]
    face_model_version: NotRequired[str]
