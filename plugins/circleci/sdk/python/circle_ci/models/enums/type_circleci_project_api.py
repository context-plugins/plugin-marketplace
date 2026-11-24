from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCircleciProjectApi(str, Enum):
    """The type of checkout key"""

    DEPLOY_KEY = "deploy-key"
    GITHUB_USER_KEY = "github-user-key"

    __str__ = str.__str__


TypeCircleciProjectApiOrStr: TypeAlias = Annotated[
    TypeCircleciProjectApi | str, open_enum_validator(TypeCircleciProjectApi)
]
