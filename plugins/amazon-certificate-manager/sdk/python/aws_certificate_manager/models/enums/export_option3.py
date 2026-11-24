from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportOption3(str, Enum):
    """Specify ENABLED or DISABLED to identify certificates that can be exported."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


ExportOption3OrStr: TypeAlias = Annotated[ExportOption3 | str, open_enum_validator(ExportOption3)]
