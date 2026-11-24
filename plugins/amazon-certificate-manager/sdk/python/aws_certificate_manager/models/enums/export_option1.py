from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportOption1(str, Enum):
    """Filter by certificate export option."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


ExportOption1OrStr: TypeAlias = Annotated[ExportOption1 | str, open_enum_validator(ExportOption1)]
