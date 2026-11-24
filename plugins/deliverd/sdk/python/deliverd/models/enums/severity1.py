from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity1(str, Enum):
    """high or critical closes the governance gate until a person resolves it"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


Severity1OrStr: TypeAlias = Annotated[Severity1 | str, open_enum_validator(Severity1)]
