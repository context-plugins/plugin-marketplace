from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason2 import Reason2OrStr


class UnsuccessfulFaceDisassociation(SdkBaseModel):
    face_id: Optional[str] = Field(default=UNSET, alias="FaceId")
    """A unique identifier assigned to the face."""

    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """A provided ID for the UserID. Unique within the collection."""

    reasons: Optional[list[Reason2OrStr]] = Field(default=UNSET, alias="Reasons")
    """The reason why the deletion was unsuccessful."""


class UnsuccessfulFaceDisassociationDict(TypedDict):
    face_id: NotRequired[str]
    user_id: NotRequired[str]
    reasons: NotRequired[list[Reason2OrStr]]
