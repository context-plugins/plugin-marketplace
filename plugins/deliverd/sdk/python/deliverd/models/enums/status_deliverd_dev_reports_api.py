from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevReportsApi(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"
    BLOCKED = "blocked"

    __str__ = str.__str__


StatusDeliverdDevReportsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevReportsApi | str, open_enum_validator(StatusDeliverdDevReportsApi)
]
