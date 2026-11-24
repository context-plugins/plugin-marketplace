from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .face_detail import FaceDetail, FaceDetailDict


class PersonDetail(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """Identifier for the person detected person within a video. Use to keep track of the person throughout the video.
    The identifier is not stored by Amazon Rekognition."""

    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    face: Optional[FaceDetail] = Field(default=UNSET, alias="Face")


class PersonDetailDict(TypedDict):
    index: NotRequired[int]
    bounding_box: NotRequired[BoundingBoxDict]
    face: NotRequired[FaceDetailDict]
