from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(int, Enum):
    """Outcome status (0 = success, 1 = failed)"""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


StatusOrInt: TypeAlias = Annotated[Status | int, open_enum_validator(Status)]
