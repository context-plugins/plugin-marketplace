from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatabaseType1(str, Enum):
    """The type of the database."""

    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"

    __str__ = str.__str__


DatabaseType1OrStr: TypeAlias = Annotated[DatabaseType1 | str, open_enum_validator(DatabaseType1)]
