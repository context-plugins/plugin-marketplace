from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchedFace(SdkBaseModel):
    face_id: Optional[str] = Field(default=UNSET, alias="FaceId")
    """Unique identifier assigned to the face."""


class SearchedFaceDict(TypedDict):
    face_id: NotRequired[str]
