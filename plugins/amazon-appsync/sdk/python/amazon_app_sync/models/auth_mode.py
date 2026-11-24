from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.auth_type import AuthTypeOrStr


class AuthMode(SdkBaseModel):
    auth_type: AuthTypeOrStr = Field(alias="authType")
    """The authorization type."""


class AuthModeDict(TypedDict):
    auth_type: AuthTypeOrStr
