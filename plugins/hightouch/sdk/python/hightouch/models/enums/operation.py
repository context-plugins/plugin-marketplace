from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operation(str, Enum):
    """``create`` publishes a new sync, ``update`` changes an existing one"""

    CREATE = "create"
    UPDATE = "update"

    __str__ = str.__str__


OperationOrStr: TypeAlias = Annotated[Operation | str, open_enum_validator(Operation)]
