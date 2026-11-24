from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateCategory(str, Enum):
    """Allowed categories when creating insights via the public API."""

    FIN_OPS = "FinOps"
    SECURITY = "Security"

    __str__ = str.__str__


CreateCategoryOrStr: TypeAlias = Annotated[CreateCategory | str, open_enum_validator(CreateCategory)]
