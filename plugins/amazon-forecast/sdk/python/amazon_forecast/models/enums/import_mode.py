from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportMode(str, Enum):
    """Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import replaces all of
    the existing data with the newly imported data. An INCREMENTAL import appends the imported data to the existing
    data."""

    FULL = "FULL"
    INCREMENTAL = "INCREMENTAL"

    __str__ = str.__str__


ImportModeOrStr: TypeAlias = Annotated[ImportMode | str, open_enum_validator(ImportMode)]
