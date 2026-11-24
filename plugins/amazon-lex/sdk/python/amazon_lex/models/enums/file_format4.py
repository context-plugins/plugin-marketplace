from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat4(str, Enum):
    """The file format used for the files that define the resource. The TSV format is required to export a custom
    vocabulary only; otherwise use LexJson format."""

    LEX_JSON = "LexJson"
    TSV = "TSV"
    CSV = "CSV"

    __str__ = str.__str__


FileFormat4OrStr: TypeAlias = Annotated[FileFormat4 | str, open_enum_validator(FileFormat4)]
