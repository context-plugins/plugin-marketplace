from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role1BitbucketWorkspacesApi(str, Enum):
    OWNER = "owner"
    COLLABORATOR = "collaborator"
    MEMBER = "member"

    __str__ = str.__str__


Role1BitbucketWorkspacesApiOrStr: TypeAlias = Annotated[
    Role1BitbucketWorkspacesApi | str, open_enum_validator(Role1BitbucketWorkspacesApi)
]
