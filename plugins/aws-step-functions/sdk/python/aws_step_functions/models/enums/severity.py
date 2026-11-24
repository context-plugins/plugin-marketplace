from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity(str, Enum):
    """A value of ERROR means that you cannot create or update a state machine with this definition. WARNING level
    diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state
    machine."""

    ERROR = "ERROR"
    WARNING = "WARNING"

    __str__ = str.__str__


SeverityOrStr: TypeAlias = Annotated[Severity | str, open_enum_validator(Severity)]
