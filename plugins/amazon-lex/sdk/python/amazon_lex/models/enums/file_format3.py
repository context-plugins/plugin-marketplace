from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat3(str, Enum):
    """The file format used in the export files."""

    LEX_JSON = "LexJson"
    TSV = "TSV"
    CSV = "CSV"

    __str__ = str.__str__


FileFormat3OrStr: TypeAlias = Annotated[FileFormat3 | str, open_enum_validator(FileFormat3)]
