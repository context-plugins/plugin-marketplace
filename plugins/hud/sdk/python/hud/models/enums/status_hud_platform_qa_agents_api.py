from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHudPlatformQaAgentsApi(str, Enum):
    ADDED = "added"
    MODIFIED = "modified"
    DELETED = "deleted"

    __str__ = str.__str__


StatusHudPlatformQaAgentsApiOrStr: TypeAlias = Annotated[
    StatusHudPlatformQaAgentsApi | str, open_enum_validator(StatusHudPlatformQaAgentsApi)
]
