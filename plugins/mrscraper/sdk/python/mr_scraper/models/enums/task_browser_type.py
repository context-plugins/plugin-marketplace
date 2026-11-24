from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskBrowserType(str, Enum):
    CHROME = "CHROME"
    FIREFOX = "FIREFOX"
    SAFARI = "SAFARI"

    __str__ = str.__str__


TaskBrowserTypeOrStr: TypeAlias = Annotated[TaskBrowserType | str, open_enum_validator(TaskBrowserType)]
