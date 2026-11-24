from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTLabelsApi(str, Enum):
    ID = "id"
    NAME = "name"
    TYPE = "type"
    CREATE_TIME = "createTime"
    UPDATE_TIME = "updateTime"

    __str__ = str.__str__


SortByDoiTLabelsApiOrStr: TypeAlias = Annotated[SortByDoiTLabelsApi | str, open_enum_validator(SortByDoiTLabelsApi)]
