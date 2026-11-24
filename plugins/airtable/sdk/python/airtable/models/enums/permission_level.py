from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PermissionLevel(str, Enum):
    """The permission level the authenticated user has on this base."""

    NONE = "none"
    READ = "read"
    COMMENT = "comment"
    EDIT = "edit"
    CREATE = "create"

    __str__ = str.__str__


PermissionLevelOrStr: TypeAlias = Annotated[PermissionLevel | str, open_enum_validator(PermissionLevel)]
