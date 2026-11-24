from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity2(str, Enum):
    """Severity of this issue: WARNING or ERROR."""

    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    WARNING = "WARNING"
    ERROR = "ERROR"

    __str__ = str.__str__


Severity2OrStr: TypeAlias = Annotated[Severity2 | str, open_enum_validator(Severity2)]
