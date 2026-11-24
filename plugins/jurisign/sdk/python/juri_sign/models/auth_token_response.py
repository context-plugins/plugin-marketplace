from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_user import AuthUser, AuthUserDict


class AuthTokenResponse(SdkBaseModel):
    token: Optional[str] = UNSET
    token_type: Optional[str] = UNSET
    user: Optional[AuthUser] = UNSET


class AuthTokenResponseDict(TypedDict):
    token: NotRequired[str]
    token_type: NotRequired[str]
    user: NotRequired[AuthUserDict]
