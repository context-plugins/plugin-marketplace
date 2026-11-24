from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuthorizationRequest(SdkBaseModel):
    user: str
    """The Program ID Leadspace provided in the credentials email"""

    pass_: str = Field(alias="pass")
    """The authentication secret Leadspace provided in the credentials email"""

    audience: str
    """For API v4 services use API_GATEWAY"""


class AuthorizationRequestDict(TypedDict):
    user: str
    pass_: str
    audience: str
