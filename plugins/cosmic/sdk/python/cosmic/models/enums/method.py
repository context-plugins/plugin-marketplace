from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    ADD = "add"
    EDIT = "edit"
    DELETE = "delete"

    __str__ = str.__str__


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]
