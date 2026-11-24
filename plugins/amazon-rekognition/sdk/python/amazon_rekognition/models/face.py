from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict


class Face(SdkBaseModel):
    face_id: Optional[str] = Field(default=UNSET, alias="FaceId")
    """Unique identifier that Amazon Rekognition assigns to the face."""

    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    image_id: Optional[str] = Field(default=UNSET, alias="ImageId")
    """Unique identifier that Amazon Rekognition assigns to the input image."""

    external_image_id: Optional[str] = Field(default=UNSET, alias="ExternalImageId")
    """Identifier that you assign to all the faces in the input image."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Confidence level that the bounding box contains a face (and not a different object such as a tree)."""

    index_faces_model_version: Optional[str] = Field(default=UNSET, alias="IndexFacesModelVersion")
    """The version of the face detect and storage model that was used when indexing the face vector."""

    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """Unique identifier assigned to the user."""


class FaceDict(TypedDict):
    face_id: NotRequired[str]
    bounding_box: NotRequired[BoundingBoxDict]
    image_id: NotRequired[str]
    external_image_id: NotRequired[str]
    confidence: NotRequired[float]
    index_faces_model_version: NotRequired[str]
    user_id: NotRequired[str]
