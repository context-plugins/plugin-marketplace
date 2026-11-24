from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccessLevel(str, Enum):
    """The access level of the folder within the workspace."""

    WRITE = "write"
    READ = "read"

    __str__ = str.__str__


AccessLevelOrStr: TypeAlias = Annotated[AccessLevel | str, open_enum_validator(AccessLevel)]
