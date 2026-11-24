from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1HudPlatformQaAgentsApi(str, Enum):
    ADDED = "added"
    MODIFIED = "modified"

    __str__ = str.__str__


Status1HudPlatformQaAgentsApiOrStr: TypeAlias = Annotated[
    Status1HudPlatformQaAgentsApi | str, open_enum_validator(Status1HudPlatformQaAgentsApi)
]
