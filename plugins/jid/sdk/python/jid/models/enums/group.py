from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Group(str, Enum):
    IDENTITY = "identity"
    LEGITIMACY = "legitimacy"
    SAFETY = "safety"
    LOCATION = "location"
    CAPACITY = "capacity"
    HISTORY = "history"

    __str__ = str.__str__


GroupOrStr: TypeAlias = Annotated[Group | str, open_enum_validator(Group)]
