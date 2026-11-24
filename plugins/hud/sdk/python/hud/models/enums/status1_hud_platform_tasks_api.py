from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1HudPlatformTasksApi(str, Enum):
    PENDING = "pending"
    READY = "ready"
    VERIFIED = "verified"
    REVISION = "revision"
    REJECTED = "rejected"

    __str__ = str.__str__


Status1HudPlatformTasksApiOrStr: TypeAlias = Annotated[
    Status1HudPlatformTasksApi | str, open_enum_validator(Status1HudPlatformTasksApi)
]
