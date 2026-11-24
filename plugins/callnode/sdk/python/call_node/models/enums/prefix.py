from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Prefix(str, Enum):
    _800 = "800"
    _822 = "822"
    _833 = "833"
    _844 = "844"
    _855 = "855"
    _866 = "866"
    _877 = "877"
    _888 = "888"

    __str__ = str.__str__


PrefixOrStr: TypeAlias = Annotated[Prefix | str, open_enum_validator(Prefix)]
