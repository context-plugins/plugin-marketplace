from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Behavior(str, Enum):
    """The behavior for the handler."""

    CODE = "CODE"
    DIRECT = "DIRECT"

    __str__ = str.__str__


BehaviorOrStr: TypeAlias = Annotated[Behavior | str, open_enum_validator(Behavior)]
