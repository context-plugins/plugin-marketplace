from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auth_type1 import AuthType1OrStr
from .enums.server_type1 import ServerType1OrStr


class SourceCredentialsInfo(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The Amazon Resource Name (ARN) of the token."""

    server_type: Optional[ServerType1OrStr] = Field(default=UNSET, alias="serverType")
    """The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or
    BITBUCKET."""

    auth_type: Optional[AuthType1OrStr] = Field(default=UNSET, alias="authType")
    """The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN,
    CODECONNECTIONS, or SECRETS_MANAGER."""

    resource: Optional[str] = UNSET
    """The connection ARN if your authType is CODECONNECTIONS or SECRETS_MANAGER."""


class SourceCredentialsInfoDict(TypedDict):
    arn: NotRequired[str]
    server_type: NotRequired[ServerType1OrStr]
    auth_type: NotRequired[AuthType1OrStr]
    resource: NotRequired[str]
