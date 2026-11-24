from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonComprehendOperationsApi(str, Enum):
    """Only supported relationship is a child relationship."""

    CHILD = "CHILD"

    __str__ = str.__str__


TypeAmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    TypeAmazonComprehendOperationsApi | str, open_enum_validator(TypeAmazonComprehendOperationsApi)
]
