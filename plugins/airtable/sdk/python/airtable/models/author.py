from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Author(SdkBaseModel):
    """The user who created the comment."""

    id: Optional[str] = UNSET
    """The user ID of the comment author."""

    email: Optional[EmailStr] = UNSET
    """The email address of the comment author."""

    name: Optional[str] = UNSET
    """The display name of the comment author."""


class AuthorDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[EmailStr]
    name: NotRequired[str]
