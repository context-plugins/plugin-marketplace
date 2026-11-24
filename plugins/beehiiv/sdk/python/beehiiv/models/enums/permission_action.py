from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PermissionAction(str, Enum):
    READ = "read"
    WRITE = "write"

    __str__ = str.__str__


PermissionActionOrStr: TypeAlias = Annotated[PermissionAction | str, open_enum_validator(PermissionAction)]
