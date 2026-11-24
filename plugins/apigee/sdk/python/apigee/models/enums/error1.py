from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Error1(str, Enum):
    """Optional. Error in the dependency."""

    ERROR_UNSPECIFIED = "ERROR_UNSPECIFIED"
    SUPPLIER_NOT_FOUND = "SUPPLIER_NOT_FOUND"
    SUPPLIER_RECREATED = "SUPPLIER_RECREATED"

    __str__ = str.__str__


Error1OrStr: TypeAlias = Annotated[Error1 | str, open_enum_validator(Error1)]
