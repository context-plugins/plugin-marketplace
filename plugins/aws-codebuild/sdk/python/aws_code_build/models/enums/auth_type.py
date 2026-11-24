from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthType(str, Enum):
    """The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or
    Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild
    console."""

    OAUTH = "OAUTH"
    BASIC_AUTH = "BASIC_AUTH"
    PERSONAL_ACCESS_TOKEN = "PERSONAL_ACCESS_TOKEN"
    CODECONNECTIONS = "CODECONNECTIONS"
    SECRETS_MANAGER = "SECRETS_MANAGER"

    __str__ = str.__str__


AuthTypeOrStr: TypeAlias = Annotated[AuthType | str, open_enum_validator(AuthType)]
