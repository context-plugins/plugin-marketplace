from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LoginRequest(SdkBaseModel):
    username: str
    """The username of the users credentials to login"""

    api_key: str = Field(alias="api-key")
    """The API key of the users credentials to login"""


class LoginRequestDict(TypedDict):
    username: str
    api_key: str
