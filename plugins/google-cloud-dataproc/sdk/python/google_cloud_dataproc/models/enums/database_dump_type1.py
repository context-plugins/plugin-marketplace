from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatabaseDumpType1(str, Enum):
    """Optional. The type of the database dump. If unspecified, defaults to MYSQL."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"

    __str__ = str.__str__


DatabaseDumpType1OrStr: TypeAlias = Annotated[DatabaseDumpType1 | str, open_enum_validator(DatabaseDumpType1)]
