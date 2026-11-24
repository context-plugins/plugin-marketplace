from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuthorizationResponse(SdkBaseModel):
    token: Optional[str] = UNSET
    """The generated token to use in API v4 enrichment requests"""

    refresh_token: Optional[str] = Field(default=UNSET, alias="refreshToken")
    """Value to use in refresh token requests"""

    expiration: Optional[int] = UNSET
    """Epoch seconds of the expiration moment"""


class AuthorizationResponseDict(TypedDict):
    token: NotRequired[str]
    refresh_token: NotRequired[str]
    expiration: NotRequired[int]
