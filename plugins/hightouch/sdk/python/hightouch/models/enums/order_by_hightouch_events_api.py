from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderByHightouchEventsApi(str, Enum):
    ID = "id"
    NAME = "name"
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"

    __str__ = str.__str__


OrderByHightouchEventsApiOrStr: TypeAlias = Annotated[
    OrderByHightouchEventsApi | str, open_enum_validator(OrderByHightouchEventsApi)
]
