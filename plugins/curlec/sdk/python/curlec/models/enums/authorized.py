from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Authorized(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


AuthorizedOrInt: TypeAlias = Annotated[Authorized | int, open_enum_validator(Authorized)]
