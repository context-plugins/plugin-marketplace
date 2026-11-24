from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserDataEdgeDb(SdkBaseModel):
    user_id: str
    """Unique id to identify the user"""

    email: Optional[str] = UNSET
    """User's email used to identify the user on the dashaboard / target audiences"""

    name: Optional[str] = UNSET
    """User's name used to idenify the user on the dashaboard / target audiences"""

    language: Optional[dict[str, str]] = UNSET
    """User's language in ISO 639-1 format"""

    country: Optional[dict[str, str]] = UNSET
    """User's country in ISO 3166 alpha-2 format"""

    custom_data: Optional[Any] = Field(default=UNSET, alias="customData")
    """User's custom data to target the user with, data will be logged to DevCycle for use in dashboard."""

    last_seen_date: Optional[float] = Field(default=UNSET, alias="lastSeenDate")
    """Date the user was last seen being used, Unix epoch timestamp format"""


class UserDataEdgeDbDict(TypedDict):
    user_id: str
    email: NotRequired[str]
    name: NotRequired[str]
    language: NotRequired[dict[str, str]]
    country: NotRequired[dict[str, str]]
    custom_data: NotRequired[Any]
    last_seen_date: NotRequired[float]
