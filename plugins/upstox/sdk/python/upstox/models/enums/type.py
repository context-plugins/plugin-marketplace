from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order MULTIPLE refers to a
    multi-leg GTT order"""

    SINGLE = "SINGLE"
    MULTIPLE = "MULTIPLE"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
