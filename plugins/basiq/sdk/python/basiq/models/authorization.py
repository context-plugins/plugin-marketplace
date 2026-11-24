from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr
from .meta_platform_connectors_api import MetaPlatformConnectorsApi, MetaPlatformConnectorsApiDict


class Authorization(SdkBaseModel):
    type_: Type1OrStr = Field(alias="type")
    """Authorization type identifier user AuthorizationUser AuthorizationUser "User" authorization type identifier token
    AuthorizationToken AuthorizationToken "Token" authorization type identifier other AuthorizationOther
    AuthorizationOther "Other" authorization type identifier user-mfa AuthorizationUserMfa AuthorizationUserMfa
    "UserMfa" authorization type identifier user-mfa-intermittent AuthorizationUserMfaIntermittent
    AuthorizationUserMfaIntermittent "UserMfaIntermittent" authorization type identifier"""

    meta: Optional[MetaPlatformConnectorsApi] = UNSET


class AuthorizationDict(TypedDict):
    type_: Type1OrStr
    meta: NotRequired[MetaPlatformConnectorsApiDict]
