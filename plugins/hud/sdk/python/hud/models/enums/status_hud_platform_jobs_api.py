from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHudPlatformJobsApi(str, Enum):
    COMPLETED = "completed"
    ERROR = "error"

    __str__ = str.__str__


StatusHudPlatformJobsApiOrStr: TypeAlias = Annotated[
    StatusHudPlatformJobsApi | str, open_enum_validator(StatusHudPlatformJobsApi)
]
