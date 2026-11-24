from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributeResourceTypeDto(str, Enum):
    DATASET = "dataset"
    CHECK = "check"
    COLUMN = "column"

    __str__ = str.__str__


AttributeResourceTypeDtoOrStr: TypeAlias = Annotated[
    AttributeResourceTypeDto | str, open_enum_validator(AttributeResourceTypeDto)
]
