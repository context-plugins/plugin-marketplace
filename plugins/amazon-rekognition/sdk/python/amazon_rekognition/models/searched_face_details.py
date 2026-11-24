from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face_detail import FaceDetail, FaceDetailDict


class SearchedFaceDetails(SdkBaseModel):
    face_detail: Optional[FaceDetail] = Field(default=UNSET, alias="FaceDetail")


class SearchedFaceDetailsDict(TypedDict):
    face_detail: NotRequired[FaceDetailDict]
