from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportOption(str, Enum):
    """Indicates whether the certificate can be exported."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


ExportOptionOrStr: TypeAlias = Annotated[ExportOption | str, open_enum_validator(ExportOption)]
