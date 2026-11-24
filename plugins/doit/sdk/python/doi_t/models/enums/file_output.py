from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileOutput(str, Enum):
    PDF = "pdf"
    PNG = "png"
    CSV = "csv"

    __str__ = str.__str__


FileOutputOrStr: TypeAlias = Annotated[FileOutput | str, open_enum_validator(FileOutput)]
