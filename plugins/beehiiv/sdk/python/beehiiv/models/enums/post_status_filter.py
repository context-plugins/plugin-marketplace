from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostStatusFilter(str, Enum):
    DRAFT = "draft"
    CONFIRMED = "confirmed"
    ARCHIVED = "archived"
    ALL = "all"

    __str__ = str.__str__


PostStatusFilterOrStr: TypeAlias = Annotated[PostStatusFilter | str, open_enum_validator(PostStatusFilter)]
