from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class User2(SdkBaseModel):
    """User credential object."""

    email: EmailStr
    """The user's email address."""

    password: str
    """The user's account password."""


class User2Dict(TypedDict):
    email: EmailStr
    password: str
