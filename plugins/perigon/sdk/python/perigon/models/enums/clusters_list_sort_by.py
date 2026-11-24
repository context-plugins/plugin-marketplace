from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClustersListSortBy(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    RELEVANCE = "relevance"
    COUNT = "count"
    TOTAL_COUNT = "totalCount"

    __str__ = str.__str__


ClustersListSortByOrStr: TypeAlias = Annotated[ClustersListSortBy | str, open_enum_validator(ClustersListSortBy)]
