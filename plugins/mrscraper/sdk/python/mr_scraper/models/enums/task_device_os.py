from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskDeviceOs(str, Enum):
    WINDOWS = "WINDOWS"
    MACOS = "MACOS"
    LINUX = "LINUX"

    __str__ = str.__str__


TaskDeviceOsOrStr: TypeAlias = Annotated[TaskDeviceOs | str, open_enum_validator(TaskDeviceOs)]
