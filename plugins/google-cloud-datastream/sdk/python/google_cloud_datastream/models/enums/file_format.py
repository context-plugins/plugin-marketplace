from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileFormat(str, Enum):
    """Required. The file format."""

    FILE_FORMAT_UNSPECIFIED = "FILE_FORMAT_UNSPECIFIED"
    PARQUET = "PARQUET"

    __str__ = str.__str__


FileFormatOrStr: TypeAlias = Annotated[FileFormat | str, open_enum_validator(FileFormat)]
