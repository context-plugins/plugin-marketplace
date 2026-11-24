from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportMode1(str, Enum):
    """The import mode of the dataset import job, FULL or INCREMENTAL."""

    FULL = "FULL"
    INCREMENTAL = "INCREMENTAL"

    __str__ = str.__str__


ImportMode1OrStr: TypeAlias = Annotated[ImportMode1 | str, open_enum_validator(ImportMode1)]
