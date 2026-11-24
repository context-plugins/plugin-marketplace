from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat2(str, Enum):
    """The file format used in the files that describe the resource."""

    LEX_JSON = "LexJson"
    TSV = "TSV"
    CSV = "CSV"

    __str__ = str.__str__


FileFormat2OrStr: TypeAlias = Annotated[FileFormat2 | str, open_enum_validator(FileFormat2)]
