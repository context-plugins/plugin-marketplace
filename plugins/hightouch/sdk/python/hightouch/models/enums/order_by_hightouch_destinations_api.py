from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderByHightouchDestinationsApi(str, Enum):
    ID = "id"
    NAME = "name"
    SLUG = "slug"
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"

    __str__ = str.__str__


OrderByHightouchDestinationsApiOrStr: TypeAlias = Annotated[
    OrderByHightouchDestinationsApi | str, open_enum_validator(OrderByHightouchDestinationsApi)
]
