from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    A = "a"
    MX = "mx"
    CNAME = "cname"
    NS = "ns"
    AAAA = "aaaa"
    TXT = "txt"
    SOA = "soa"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
