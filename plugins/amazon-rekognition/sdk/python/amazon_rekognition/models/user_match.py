from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .matched_user import MatchedUser, MatchedUserDict


class UserMatch(SdkBaseModel):
    similarity: Optional[float] = Field(default=UNSET, alias="Similarity")
    """Describes the UserID metadata."""

    user: Optional[MatchedUser] = Field(default=UNSET, alias="User")


class UserMatchDict(TypedDict):
    similarity: NotRequired[float]
    user: NotRequired[MatchedUserDict]
