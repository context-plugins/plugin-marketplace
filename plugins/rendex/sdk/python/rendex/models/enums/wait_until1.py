from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WaitUntil1(str, Enum):
    LOAD = "load"
    DOMCONTENTLOADED = "domcontentloaded"
    NETWORKIDLE0 = "networkidle0"
    NETWORKIDLE2 = "networkidle2"

    __str__ = str.__str__


WaitUntil1OrStr: TypeAlias = Annotated[WaitUntil1 | str, open_enum_validator(WaitUntil1)]
