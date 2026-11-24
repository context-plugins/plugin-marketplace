from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCallnodeIoFaxesApi(str, Enum):
    QUEUED = "queued"
    DIALING = "dialing"
    TRANSMITTING = "transmitting"
    RECEIVING = "receiving"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusCallnodeIoFaxesApiOrStr: TypeAlias = Annotated[
    StatusCallnodeIoFaxesApi | str, open_enum_validator(StatusCallnodeIoFaxesApi)
]
