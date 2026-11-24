from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Op(str, Enum):
    ADD_FILTER_VALUES = "addFilterValues"
    REMOVE_FILTER_VALUES = "removeFilterValues"

    __str__ = str.__str__


OpOrStr: TypeAlias = Annotated[Op | str, open_enum_validator(Op)]
