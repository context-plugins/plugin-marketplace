from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .face_detail import FaceDetail, FaceDetailDict
from .known_gender import KnownGender, KnownGenderDict


class CelebrityDetail(SdkBaseModel):
    urls: Optional[list[str]] = Field(default=UNSET, alias="Urls")
    """An array of URLs pointing to additional celebrity information."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the celebrity."""

    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The unique identifier for the celebrity."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity."""

    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    face: Optional[FaceDetail] = Field(default=UNSET, alias="Face")
    known_gender: Optional[KnownGender] = Field(default=UNSET, alias="KnownGender")


class CelebrityDetailDict(TypedDict):
    urls: NotRequired[list[str]]
    name: NotRequired[str]
    id: NotRequired[str]
    confidence: NotRequired[float]
    bounding_box: NotRequired[BoundingBoxDict]
    face: NotRequired[FaceDetailDict]
    known_gender: NotRequired[KnownGenderDict]
