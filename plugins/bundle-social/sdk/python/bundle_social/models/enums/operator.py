from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    CONTAINS = "CONTAINS"
    EQUALS = "EQUALS"
    MATCHES_ANY = "MATCHES_ANY"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
