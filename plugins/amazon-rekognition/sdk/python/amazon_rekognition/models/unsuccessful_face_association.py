from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class UnsuccessfulFaceAssociation(SdkBaseModel):
    face_id: Optional[str] = Field(default=UNSET, alias="FaceId")
    """A unique identifier assigned to the face."""

    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """A provided ID for the UserID. Unique within the collection."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Match confidence with the UserID, provides information regarding if a face association was unsuccessful because
    it didn't meet UserMatchThreshold."""

    reasons: Optional[list[ReasonOrStr]] = Field(default=UNSET, alias="Reasons")
    """The reason why the association was unsuccessful."""


class UnsuccessfulFaceAssociationDict(TypedDict):
    face_id: NotRequired[str]
    user_id: NotRequired[str]
    confidence: NotRequired[float]
    reasons: NotRequired[list[ReasonOrStr]]
