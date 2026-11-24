from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Level1(str, Enum):
    """The severity level of the vulnerability"""

    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"

    __str__ = str.__str__


Level1OrStr: TypeAlias = Annotated[Level1 | str, open_enum_validator(Level1)]
