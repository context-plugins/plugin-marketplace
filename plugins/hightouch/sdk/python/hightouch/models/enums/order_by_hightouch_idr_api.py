from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderByHightouchIdrApi(str, Enum):
    CREATED_AT = "created_at"
    STARTED_AT = "started_at"
    FINISHED_AT = "finished_at"

    __str__ = str.__str__


OrderByHightouchIdrApiOrStr: TypeAlias = Annotated[
    OrderByHightouchIdrApi | str, open_enum_validator(OrderByHightouchIdrApi)
]
