from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face import Face, FaceDict
from .face_detail import FaceDetail, FaceDetailDict


class FaceRecord(SdkBaseModel):
    face: Optional[Face] = Field(default=UNSET, alias="Face")
    face_detail: Optional[FaceDetail] = Field(default=UNSET, alias="FaceDetail")


class FaceRecordDict(TypedDict):
    face: NotRequired[FaceDict]
    face_detail: NotRequired[FaceDetailDict]
