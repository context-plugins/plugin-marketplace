from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Authorization type identifier user AuthorizationUser AuthorizationUser "User" authorization type identifier token
    AuthorizationToken AuthorizationToken "Token" authorization type identifier other AuthorizationOther
    AuthorizationOther "Other" authorization type identifier user-mfa AuthorizationUserMfa AuthorizationUserMfa
    "UserMfa" authorization type identifier user-mfa-intermittent AuthorizationUserMfaIntermittent
    AuthorizationUserMfaIntermittent "UserMfaIntermittent" authorization type identifier"""

    USER = "user"
    TOKEN = "token"
    OTHER = "other"
    USER_MFA = "user-mfa"
    USER_MFA_INTERMITTENT = "user-mfa-intermittent"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
