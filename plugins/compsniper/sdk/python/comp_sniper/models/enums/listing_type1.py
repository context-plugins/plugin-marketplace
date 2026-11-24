from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ListingType1(str, Enum):
    SOLD = "sold"

    __str__ = str.__str__


ListingType1OrStr: TypeAlias = Annotated[ListingType1 | str, open_enum_validator(ListingType1)]
