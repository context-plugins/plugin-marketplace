from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBitbucketPipelinesApi(str, Enum):
    """The type of selector."""

    BRANCHES = "branches"
    TAGS = "tags"
    BOOKMARKS = "bookmarks"
    DEFAULT = "default"
    CUSTOM = "custom"

    __str__ = str.__str__


TypeBitbucketPipelinesApiOrStr: TypeAlias = Annotated[
    TypeBitbucketPipelinesApi | str, open_enum_validator(TypeBitbucketPipelinesApi)
]
