from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    CONTAINS = "CONTAINS"
    NOT_CONTAINS = "NOT_CONTAINS"
    INCLUDING_REGEX = "INCLUDING_REGEX"
    EXCLUDING_REGEX = "EXCLUDING_REGEX"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
