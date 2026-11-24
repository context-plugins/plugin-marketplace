from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PermissionBitbucketRepositoriesApi(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"
    NONE = "none"

    __str__ = str.__str__


PermissionBitbucketRepositoriesApiOrStr: TypeAlias = Annotated[
    PermissionBitbucketRepositoriesApi | str, open_enum_validator(PermissionBitbucketRepositoriesApi)
]
