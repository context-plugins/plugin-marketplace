from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserByEmail(SdkBaseModel):
    email: EmailStr
    """Email address of the user."""


class UserByEmailDict(TypedDict):
    email: EmailStr
