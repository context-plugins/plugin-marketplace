from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat1(str, Enum):
    """The file format used for the bot or bot locale definition files."""

    LEX_JSON = "LexJson"
    TSV = "TSV"
    CSV = "CSV"

    __str__ = str.__str__


FileFormat1OrStr: TypeAlias = Annotated[FileFormat1 | str, open_enum_validator(FileFormat1)]
