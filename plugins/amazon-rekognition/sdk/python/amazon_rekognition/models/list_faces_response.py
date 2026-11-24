from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face import Face, FaceDict


class ListFacesResponse(SdkBaseModel):
    faces: Optional[list[Face]] = Field(default=UNSET, alias="Faces")
    """An array of Face objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to
    retrieve the next set of faces."""

    face_model_version: Optional[str] = Field(default=UNSET, alias="FaceModelVersion")
    """Version number of the face detection model associated with the input collection (CollectionId)."""


class ListFacesResponseDict(TypedDict):
    faces: NotRequired[list[FaceDict]]
    next_token: NotRequired[str]
    face_model_version: NotRequired[str]
