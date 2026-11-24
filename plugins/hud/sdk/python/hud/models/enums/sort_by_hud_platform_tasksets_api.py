from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByHudPlatformTasksetsApi(str, Enum):
    """Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC), tasks
    (task_count DESC)"""

    STARRED = "starred"
    DATE = "date"
    NAME = "name"
    STARS = "stars"
    TASKS = "tasks"

    __str__ = str.__str__


SortByHudPlatformTasksetsApiOrStr: TypeAlias = Annotated[
    SortByHudPlatformTasksetsApi | str, open_enum_validator(SortByHudPlatformTasksetsApi)
]
