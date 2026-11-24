from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity1(str, Enum):
    """Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING returns both
    WARNING and ERROR diagnostics. The default is ERROR."""

    ERROR = "ERROR"
    WARNING = "WARNING"

    __str__ = str.__str__


Severity1OrStr: TypeAlias = Annotated[Severity1 | str, open_enum_validator(Severity1)]
