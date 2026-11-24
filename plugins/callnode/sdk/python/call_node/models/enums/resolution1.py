from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolution1(str, Enum):
    FINE = "fine"
    STANDARD = "standard"

    __str__ = str.__str__


Resolution1OrStr: TypeAlias = Annotated[Resolution1 | str, open_enum_validator(Resolution1)]
