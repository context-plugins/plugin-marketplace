from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SellerType1(str, Enum):
    """Labeled seller classification on EU marketplaces."""

    PRIVATE = "private"
    BUSINESS = "business"

    __str__ = str.__str__


SellerType1OrStr: TypeAlias = Annotated[SellerType1 | str, open_enum_validator(SellerType1)]
