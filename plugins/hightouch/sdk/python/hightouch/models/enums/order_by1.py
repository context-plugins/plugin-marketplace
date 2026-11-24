from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderBy1(str, Enum):
    ID = "id"
    CREATED_AT = "createdAt"
    STARTED_AT = "startedAt"
    FINISHED_AT = "finishedAt"

    __str__ = str.__str__


OrderBy1OrStr: TypeAlias = Annotated[OrderBy1 | str, open_enum_validator(OrderBy1)]
