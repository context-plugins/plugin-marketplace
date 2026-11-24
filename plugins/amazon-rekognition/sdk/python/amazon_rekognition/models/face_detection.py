from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face_detail import FaceDetail, FaceDetailDict


class FaceDetection(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """Time, in milliseconds from the start of the video, that the face was detected. Note that Timestamp is not
    guaranteed to be accurate to the individual frame where the face first appears."""

    face: Optional[FaceDetail] = Field(default=UNSET, alias="Face")


class FaceDetectionDict(TypedDict):
    timestamp: NotRequired[int]
    face: NotRequired[FaceDetailDict]
