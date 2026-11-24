from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Public1(str, Enum):
    OWNER = "owner"
    EDITOR = "editor"
    VIEWER = "viewer"

    __str__ = str.__str__


Public1OrStr: TypeAlias = Annotated[Public1 | str, open_enum_validator(Public1)]
