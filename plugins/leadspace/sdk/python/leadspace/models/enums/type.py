from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    DU = "DU"
    GU = "GU"
    SITE = "SITE"
    PARENT = "PARENT"
    HQ = "HQ"
    SU = "SU"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
