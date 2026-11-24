from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessIdNoType(str, Enum):
    """Type of business ID could be ABN Or ACN."""

    ABN = "ABN"
    ACN = "ACN"

    __str__ = str.__str__


BusinessIdNoTypeOrStr: TypeAlias = Annotated[BusinessIdNoType | str, open_enum_validator(BusinessIdNoType)]
