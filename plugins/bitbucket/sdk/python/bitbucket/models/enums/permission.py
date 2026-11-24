from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Permission(str, Enum):
    READ = "read"
    WRITE = "write"
    CREATE_REPO = "create-repo"
    ADMIN = "admin"

    __str__ = str.__str__


PermissionOrStr: TypeAlias = Annotated[Permission | str, open_enum_validator(Permission)]
