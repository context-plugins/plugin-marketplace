from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBrowserUsePublicApiV4SessionsApi(str, Enum):
    PENDING = "pending"
    DISPATCHING = "dispatching"
    CONSUMED = "consumed"
    CANCELLED = "cancelled"
    SUPERSEDED = "superseded"
    FAILED = "failed"

    __str__ = str.__str__


StatusBrowserUsePublicApiV4SessionsApiOrStr: TypeAlias = Annotated[
    StatusBrowserUsePublicApiV4SessionsApi | str, open_enum_validator(StatusBrowserUsePublicApiV4SessionsApi)
]
