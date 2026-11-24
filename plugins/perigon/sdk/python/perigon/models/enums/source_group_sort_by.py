from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceGroupSortBy(str, Enum):
    ID = "id"
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    NAME = "name"

    __str__ = str.__str__


SourceGroupSortByOrStr: TypeAlias = Annotated[SourceGroupSortBy | str, open_enum_validator(SourceGroupSortBy)]
