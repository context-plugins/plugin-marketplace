from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Permission2(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"

    __str__ = str.__str__


Permission2OrStr: TypeAlias = Annotated[Permission2 | str, open_enum_validator(Permission2)]
