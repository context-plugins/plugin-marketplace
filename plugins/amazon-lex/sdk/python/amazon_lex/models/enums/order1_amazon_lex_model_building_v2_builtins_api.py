from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order1AmazonLexModelBuildingV2BuiltinsApi(str, Enum):
    """The order to sort the list. You can choose ascending or descending."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order1AmazonLexModelBuildingV2BuiltinsApiOrStr: TypeAlias = Annotated[
    Order1AmazonLexModelBuildingV2BuiltinsApi | str, open_enum_validator(Order1AmazonLexModelBuildingV2BuiltinsApi)
]
