from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WaitUntil(str, Enum):
    """Page readiness condition before capture"""

    LOAD = "load"
    DOMCONTENTLOADED = "domcontentloaded"
    NETWORKIDLE0 = "networkidle0"
    NETWORKIDLE2 = "networkidle2"

    __str__ = str.__str__


WaitUntilOrStr: TypeAlias = Annotated[WaitUntil | str, open_enum_validator(WaitUntil)]
