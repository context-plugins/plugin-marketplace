from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityHudPlatformTasksApi(str, Enum):
    ERROR = "error"
    WARNING = "warning"

    __str__ = str.__str__


SeverityHudPlatformTasksApiOrStr: TypeAlias = Annotated[
    SeverityHudPlatformTasksApi | str, open_enum_validator(SeverityHudPlatformTasksApi)
]
