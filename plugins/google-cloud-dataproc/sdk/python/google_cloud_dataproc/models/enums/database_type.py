from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatabaseType(str, Enum):
    """Immutable. The database type that the Metastore service stores its data."""

    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    SPANNER = "SPANNER"

    __str__ = str.__str__


DatabaseTypeOrStr: TypeAlias = Annotated[DatabaseType | str, open_enum_validator(DatabaseType)]
