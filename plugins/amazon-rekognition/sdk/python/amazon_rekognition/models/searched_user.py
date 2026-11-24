from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchedUser(SdkBaseModel):
    user_id: Optional[str] = Field(default=UNSET, alias="UserId")
    """A provided ID for the UserID. Unique within the collection."""


class SearchedUserDict(TypedDict):
    user_id: NotRequired[str]
