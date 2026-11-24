from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    NAME = "name"
    CREATE_TIME = "createTime"
    UPDATE_TIME = "updateTime"
    LAST_ALERTED = "lastAlerted"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
