from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CategoryAppliedInputType(str, Enum):
    TEXT = "text"
    IMAGE = "image"

    __str__ = str.__str__


CategoryAppliedInputTypeOrStr: TypeAlias = Annotated[
    CategoryAppliedInputType | str, open_enum_validator(CategoryAppliedInputType)
]
