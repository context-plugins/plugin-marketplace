from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelatedOrder(str, Enum):
    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


RelatedOrderOrStr: TypeAlias = Annotated[RelatedOrder | str, open_enum_validator(RelatedOrder)]
