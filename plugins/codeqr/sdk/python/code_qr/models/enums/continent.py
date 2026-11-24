from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Continent(str, Enum):
    """The 2-letter ISO 3166-1 code representing the continent associated with the location of the user."""

    AF = "AF"
    AN = "AN"
    AS = "AS"
    EU = "EU"
    NA = "NA"
    OC = "OC"
    SA = "SA"

    __str__ = str.__str__


ContinentOrStr: TypeAlias = Annotated[Continent | str, open_enum_validator(Continent)]
