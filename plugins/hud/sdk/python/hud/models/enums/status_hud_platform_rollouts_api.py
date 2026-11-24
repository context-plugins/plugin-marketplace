from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHudPlatformRolloutsApi(str, Enum):
    ACCEPTED = "accepted"
    NOOP = "noop"

    __str__ = str.__str__


StatusHudPlatformRolloutsApiOrStr: TypeAlias = Annotated[
    StatusHudPlatformRolloutsApi | str, open_enum_validator(StatusHudPlatformRolloutsApi)
]
