from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links import Links, LinksDict


class UsersAuthLinkResponse1(SdkBaseModel):
    id: str
    """Uniquely identifies the auth link."""

    mobile: str
    """A user's mobile phone, used as for authentication."""

    type_: str = Field(alias="type")
    """Type of the response, always "auth_link"."""

    user_id: str = Field(alias="userId")
    """A string that uniquely identifies the user."""

    expires_at: str = Field(alias="expiresAt")
    """The date time of auth link expiry."""

    links: Optional[Links] = UNSET


class UsersAuthLinkResponse1Dict(TypedDict):
    id: str
    mobile: str
    type_: str
    user_id: str
    expires_at: str
    links: NotRequired[LinksDict]
