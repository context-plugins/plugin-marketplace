from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1CircleCiRestApiV1SshKeyApi(str, Enum):
    """The type of checkout key to create"""

    DEPLOY_KEY = "deploy-key"
    GITHUB_USER_KEY = "github-user-key"

    __str__ = str.__str__


Type1CircleCiRestApiV1SshKeyApiOrStr: TypeAlias = Annotated[
    Type1CircleCiRestApiV1SshKeyApi | str, open_enum_validator(Type1CircleCiRestApiV1SshKeyApi)
]
