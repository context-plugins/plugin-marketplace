from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compared_face import ComparedFace, ComparedFaceDict
from .known_gender import KnownGender, KnownGenderDict


class Celebrity(SdkBaseModel):
    urls: Optional[list[str]] = Field(default=UNSET, alias="Urls")
    """An array of URLs pointing to additional information about the celebrity. If there is no additional information
    about the celebrity, this list is empty."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the celebrity."""

    id: Optional[str] = Field(default=UNSET, alias="Id")
    """A unique identifier for the celebrity."""

    face: Optional[ComparedFace] = Field(default=UNSET, alias="Face")
    match_confidence: Optional[float] = Field(default=UNSET, alias="MatchConfidence")
    """The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity."""

    known_gender: Optional[KnownGender] = Field(default=UNSET, alias="KnownGender")


class CelebrityDict(TypedDict):
    urls: NotRequired[list[str]]
    name: NotRequired[str]
    id: NotRequired[str]
    face: NotRequired[ComparedFaceDict]
    match_confidence: NotRequired[float]
    known_gender: NotRequired[KnownGenderDict]
