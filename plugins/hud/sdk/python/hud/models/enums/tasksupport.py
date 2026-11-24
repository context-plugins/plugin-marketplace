from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Tasksupport(str, Enum):
    FORBIDDEN = "forbidden"
    OPTIONAL = "optional"
    REQUIRED = "required"

    __str__ = str.__str__


TasksupportOrStr: TypeAlias = Annotated[Tasksupport | str, open_enum_validator(Tasksupport)]
