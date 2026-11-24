from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_user import AuthUser, AuthUserDict


class AuthSandboxTokenResponse(SdkBaseModel):
    token: Optional[str] = UNSET
    token_type: Optional[str] = UNSET
    sandbox: Optional[bool] = UNSET
    user: Optional[AuthUser] = UNSET


class AuthSandboxTokenResponseDict(TypedDict):
    token: NotRequired[str]
    token_type: NotRequired[str]
    sandbox: NotRequired[bool]
    user: NotRequired[AuthUserDict]
