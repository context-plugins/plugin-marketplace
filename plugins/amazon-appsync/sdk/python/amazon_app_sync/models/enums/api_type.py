from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiType(str, Enum):
    """The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED)."""

    GRAPHQL = "GRAPHQL"
    MERGED = "MERGED"

    __str__ = str.__str__


ApiTypeOrStr: TypeAlias = Annotated[ApiType | str, open_enum_validator(ApiType)]
