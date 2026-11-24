from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auth_type import AuthTypeOrStr
from .enums.server_type import ServerTypeOrStr


class ImportSourceCredentialsInput(SdkBaseModel):
    username: Optional[str] = UNSET
    """The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source
    providers or connections."""

    token: str
    """For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access
    token or the app password. For the authType CODECONNECTIONS, this is the connectionArn. For the authType
    SECRETS_MANAGER, this is the secretArn."""

    server_type: ServerTypeOrStr = Field(alias="serverType")
    """The source provider used for this project."""

    auth_type: AuthTypeOrStr = Field(alias="authType")
    """The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or
    Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild
    console."""

    should_overwrite: Optional[bool] = Field(default=UNSET, alias="shouldOverwrite")
    """Set to false to prevent overwriting the repository source credentials. Set to true to overwrite the repository
    source credentials. The default value is true."""


class ImportSourceCredentialsInputDict(TypedDict):
    username: NotRequired[str]
    token: str
    server_type: ServerTypeOrStr
    auth_type: AuthTypeOrStr
    should_overwrite: NotRequired[bool]
