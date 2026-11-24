from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Value(str, Enum):
    ORDER_ASC = "order_asc"
    NAME_ASC = "name_asc"
    CREATED_AT_DESC = "created_at_desc"

    __str__ = str.__str__


ValueOrStr: TypeAlias = Annotated[Value | str, open_enum_validator(Value)]
