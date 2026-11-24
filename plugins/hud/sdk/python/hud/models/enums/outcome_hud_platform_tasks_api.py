from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutcomeHudPlatformTasksApi(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    UNCHANGED = "unchanged"

    __str__ = str.__str__


OutcomeHudPlatformTasksApiOrStr: TypeAlias = Annotated[
    OutcomeHudPlatformTasksApi | str, open_enum_validator(OutcomeHudPlatformTasksApi)
]
