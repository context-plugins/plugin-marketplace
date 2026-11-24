from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.user_status_amazon_rekognition_user_api import UserStatusAmazonRekognitionUserApiOrStr


class User(SdkBaseModel):
    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """A provided ID for the User. Unique within the collection."""

    user_status: Optional[UserStatusAmazonRekognitionUserApiOrStr] = Field(default=UNSET, alias="UserStatus")
    """Communicates if the UserID has been updated with latest set of faces to be associated with the UserID."""


class UserDict(TypedDict):
    user_id: NotRequired[str]
    user_status: NotRequired[UserStatusAmazonRekognitionUserApiOrStr]
