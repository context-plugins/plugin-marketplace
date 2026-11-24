from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LoginRequest2(SdkBaseModel):
    username: str
    """Your API key name"""

    api_key: str = Field(alias="api-key")
    """Your API key secret"""


class LoginRequest2Dict(TypedDict):
    username: str
    api_key: str
