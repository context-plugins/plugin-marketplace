from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .face_match import FaceMatch, FaceMatchDict
from .person_detail import PersonDetail, PersonDetailDict


class PersonMatch(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """The time, in milliseconds from the beginning of the video, that the person was matched in the video."""

    person: Optional[PersonDetail] = Field(default=UNSET, alias="Person")
    face_matches: Optional[list[FaceMatch]] = Field(default=UNSET, alias="FaceMatches")
    """Information about the faces in the input collection that match the face of a person in the video."""


class PersonMatchDict(TypedDict):
    timestamp: NotRequired[int]
    person: NotRequired[PersonDetailDict]
    face_matches: NotRequired[list[FaceMatchDict]]
