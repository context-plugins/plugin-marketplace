from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Compare1(str, Enum):
    PREVIOUS_PERIOD = "previous_period"

    __str__ = str.__str__


Compare1OrStr: TypeAlias = Annotated[Compare1 | str, open_enum_validator(Compare1)]
