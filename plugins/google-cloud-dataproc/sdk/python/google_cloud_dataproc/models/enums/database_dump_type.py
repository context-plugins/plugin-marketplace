from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatabaseDumpType(str, Enum):
    """Output only. The type of the database dump."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"

    __str__ = str.__str__


DatabaseDumpTypeOrStr: TypeAlias = Annotated[DatabaseDumpType | str, open_enum_validator(DatabaseDumpType)]
