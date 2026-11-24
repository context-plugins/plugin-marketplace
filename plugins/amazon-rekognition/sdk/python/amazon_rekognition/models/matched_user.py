from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.user_status1_amazon_rekognition_user_api import UserStatus1AmazonRekognitionUserApiOrStr


class MatchedUser(SdkBaseModel):
    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """A provided ID for the UserID. Unique within the collection."""

    user_status: Optional[UserStatus1AmazonRekognitionUserApiOrStr] = Field(default=UNSET, alias="UserStatus")
    """The status of the user matched to a provided FaceID."""


class MatchedUserDict(TypedDict):
    user_id: NotRequired[str]
    user_status: NotRequired[UserStatus1AmazonRekognitionUserApiOrStr]
