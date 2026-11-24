from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WaitUntilRendexRenderingWatchApi(str, Enum):
    LOAD = "load"
    DOMCONTENTLOADED = "domcontentloaded"
    NETWORKIDLE0 = "networkidle0"
    NETWORKIDLE2 = "networkidle2"

    __str__ = str.__str__


WaitUntilRendexRenderingWatchApiOrStr: TypeAlias = Annotated[
    WaitUntilRendexRenderingWatchApi | str, open_enum_validator(WaitUntilRendexRenderingWatchApi)
]
