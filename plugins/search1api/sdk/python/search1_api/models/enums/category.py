from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    BUG = "bug"
    FEATURE_REQUEST = "feature_request"
    DOCS = "docs"
    OTHER = "other"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
