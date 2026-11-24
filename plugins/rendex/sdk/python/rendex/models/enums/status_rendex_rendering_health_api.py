from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRendexRenderingHealthApi(str, Enum):
    OK = "ok"
    ERROR = "error"

    __str__ = str.__str__


StatusRendexRenderingHealthApiOrStr: TypeAlias = Annotated[
    StatusRendexRenderingHealthApi | str, open_enum_validator(StatusRendexRenderingHealthApi)
]
