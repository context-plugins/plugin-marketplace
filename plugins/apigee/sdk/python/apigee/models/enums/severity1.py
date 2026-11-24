from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity1(str, Enum):
    """Required. Severity of the issue."""

    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    SEVERITY_ERROR = "SEVERITY_ERROR"
    SEVERITY_WARNING = "SEVERITY_WARNING"
    SEVERITY_INFO = "SEVERITY_INFO"
    SEVERITY_HINT = "SEVERITY_HINT"

    __str__ = str.__str__


Severity1OrStr: TypeAlias = Annotated[Severity1 | str, open_enum_validator(Severity1)]
