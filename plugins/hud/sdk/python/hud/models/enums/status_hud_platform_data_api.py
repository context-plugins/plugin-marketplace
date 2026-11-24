from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHudPlatformDataApi(str, Enum):
    PENDING = "pending"
    READY = "ready"

    __str__ = str.__str__


StatusHudPlatformDataApiOrStr: TypeAlias = Annotated[
    StatusHudPlatformDataApi | str, open_enum_validator(StatusHudPlatformDataApi)
]
