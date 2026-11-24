from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Permission1(str, Enum):
    READ = "read"
    WRITE = "write"
    CREATE_REPO = "create-repo"
    ADMIN = "admin"
    NONE = "none"

    __str__ = str.__str__


Permission1OrStr: TypeAlias = Annotated[Permission1 | str, open_enum_validator(Permission1)]
