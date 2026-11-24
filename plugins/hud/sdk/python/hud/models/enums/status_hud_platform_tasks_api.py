from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHudPlatformTasksApi(str, Enum):
    STAGED = "staged"
    ARCHIVED = "archived"
    FAILED = "failed"

    __str__ = str.__str__


StatusHudPlatformTasksApiOrStr: TypeAlias = Annotated[
    StatusHudPlatformTasksApi | str, open_enum_validator(StatusHudPlatformTasksApi)
]
