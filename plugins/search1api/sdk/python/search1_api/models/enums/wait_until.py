from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WaitUntil(str, Enum):
    DOMCONTENTLOADED = "domcontentloaded"
    LOAD = "load"
    NETWORKIDLE = "networkidle"

    __str__ = str.__str__


WaitUntilOrStr: TypeAlias = Annotated[WaitUntil | str, open_enum_validator(WaitUntil)]
