from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessType1(str, Enum):
    """Cannot be changed after creation."""

    ROUTE = "route"

    __str__ = str.__str__


BusinessType1OrStr: TypeAlias = Annotated[BusinessType1 | str, open_enum_validator(BusinessType1)]
