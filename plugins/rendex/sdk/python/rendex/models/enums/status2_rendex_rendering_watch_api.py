from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2RendexRenderingWatchApi(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"
    ALL = "all"

    __str__ = str.__str__


Status2RendexRenderingWatchApiOrStr: TypeAlias = Annotated[
    Status2RendexRenderingWatchApi | str, open_enum_validator(Status2RendexRenderingWatchApi)
]
