from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1RendexRenderingWatchApi(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"

    __str__ = str.__str__


Status1RendexRenderingWatchApiOrStr: TypeAlias = Annotated[
    Status1RendexRenderingWatchApi | str, open_enum_validator(Status1RendexRenderingWatchApi)
]
