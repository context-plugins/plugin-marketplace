from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContinentCode(str, Enum):
    """The continent to retrieve analytics for."""

    AF = "AF"
    AN = "AN"
    AS = "AS"
    EU = "EU"
    NA = "NA"
    OC = "OC"
    SA = "SA"

    __str__ = str.__str__


ContinentCodeOrStr: TypeAlias = Annotated[ContinentCode | str, open_enum_validator(ContinentCode)]
