from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operation2(str, Enum):
    CREATE = "create"
    UPDATE = "update"

    __str__ = str.__str__


Operation2OrStr: TypeAlias = Annotated[Operation2 | str, open_enum_validator(Operation2)]
