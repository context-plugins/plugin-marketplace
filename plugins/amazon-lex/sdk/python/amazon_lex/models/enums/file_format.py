from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat(str, Enum):
    """The file format of the bot or bot locale definition files."""

    LEX_JSON = "LexJson"
    TSV = "TSV"
    CSV = "CSV"

    __str__ = str.__str__


FileFormatOrStr: TypeAlias = Annotated[FileFormat | str, open_enum_validator(FileFormat)]
