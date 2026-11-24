from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Database(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    SHARED = "shared"

    __str__ = str.__str__


DatabaseOrStr: TypeAlias = Annotated[Database | str, open_enum_validator(Database)]
