from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user2 import User2, User2Dict


class LoginRequest(SdkBaseModel):
    """Credentials for user authentication."""

    user: User2
    """User credential object."""


class LoginRequestDict(TypedDict):
    user: User2Dict
