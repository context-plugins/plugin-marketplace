from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCallnodeIoEmailApi(str, Enum):
    PENDING = "pending"
    VERIFYING = "verifying"
    ACTIVE = "active"
    FAILED = "failed"

    __str__ = str.__str__


StatusCallnodeIoEmailApiOrStr: TypeAlias = Annotated[
    StatusCallnodeIoEmailApi | str, open_enum_validator(StatusCallnodeIoEmailApi)
]
