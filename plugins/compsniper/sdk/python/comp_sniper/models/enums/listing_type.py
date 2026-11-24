from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ListingType(str, Enum):
    ACTIVE = "active"

    __str__ = str.__str__


ListingTypeOrStr: TypeAlias = Annotated[ListingType | str, open_enum_validator(ListingType)]
