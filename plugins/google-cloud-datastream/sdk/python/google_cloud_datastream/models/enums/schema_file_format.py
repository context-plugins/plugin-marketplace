from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SchemaFileFormat(str, Enum):
    """The schema file format along JSON data files."""

    SCHEMA_FILE_FORMAT_UNSPECIFIED = "SCHEMA_FILE_FORMAT_UNSPECIFIED"
    NO_SCHEMA_FILE = "NO_SCHEMA_FILE"
    AVRO_SCHEMA_FILE = "AVRO_SCHEMA_FILE"

    __str__ = str.__str__


SchemaFileFormatOrStr: TypeAlias = Annotated[SchemaFileFormat | str, open_enum_validator(SchemaFileFormat)]
