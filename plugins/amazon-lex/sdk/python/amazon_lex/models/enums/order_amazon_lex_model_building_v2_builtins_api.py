from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderAmazonLexModelBuildingV2BuiltinsApi(str, Enum):
    """The order to sort the list. You can specify ascending or descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


OrderAmazonLexModelBuildingV2BuiltinsApiOrStr: TypeAlias = Annotated[
    OrderAmazonLexModelBuildingV2BuiltinsApi | str, open_enum_validator(OrderAmazonLexModelBuildingV2BuiltinsApi)
]
