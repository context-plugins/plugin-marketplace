from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCallnodeIoSipTrunksApi(str, Enum):
    ACTIVE = "active"
    DISABLED = "disabled"

    __str__ = str.__str__


StatusCallnodeIoSipTrunksApiOrStr: TypeAlias = Annotated[
    StatusCallnodeIoSipTrunksApi | str, open_enum_validator(StatusCallnodeIoSipTrunksApi)
]
