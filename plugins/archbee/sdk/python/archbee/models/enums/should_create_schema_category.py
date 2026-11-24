from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ShouldCreateSchemaCategory(str, Enum):
    """OPTIONAL. You can create models category to display all your models."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


ShouldCreateSchemaCategoryOrStr: TypeAlias = Annotated[
    ShouldCreateSchemaCategory | str, open_enum_validator(ShouldCreateSchemaCategory)
]
