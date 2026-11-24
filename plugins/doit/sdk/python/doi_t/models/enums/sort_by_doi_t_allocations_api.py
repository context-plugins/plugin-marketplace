from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTAllocationsApi(str, Enum):
    ID = "id"
    NAME = "name"
    OWNER = "owner"
    DESCRIPTION = "description"
    TYPE = "type"
    CREATE_TIME = "createTime"
    UPDATE_TIME = "updateTime"

    __str__ = str.__str__


SortByDoiTAllocationsApiOrStr: TypeAlias = Annotated[
    SortByDoiTAllocationsApi | str, open_enum_validator(SortByDoiTAllocationsApi)
]
