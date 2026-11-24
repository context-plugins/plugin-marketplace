from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Type classification of the group"""

    LOCAL = "Local"
    DIRECTORY_GROUP = "DirectoryGroup"
    ROBOTICS_GROUP = "RoboticsGroup"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
