from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderBy(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    DELETED_AT = "deletedAt"

    __str__ = str.__str__


OrderByOrStr: TypeAlias = Annotated[OrderBy | str, open_enum_validator(OrderBy)]
