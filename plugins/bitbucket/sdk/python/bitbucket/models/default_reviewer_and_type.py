from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class DefaultReviewerAndType(SdkBaseModel):
    """Object containing a user that is a default reviewer and the type of reviewer"""

    type_: str = Field(alias="type")
    reviewer_type: Optional[str] = UNSET
    user: Optional[User] = UNSET


class DefaultReviewerAndTypeDict(TypedDict):
    type_: str
    reviewer_type: NotRequired[str]
    user: NotRequired[UserDict]
