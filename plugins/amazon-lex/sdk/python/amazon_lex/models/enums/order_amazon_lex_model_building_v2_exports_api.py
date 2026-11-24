from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderAmazonLexModelBuildingV2ExportsApi(str, Enum):
    """The order to sort the list."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


OrderAmazonLexModelBuildingV2ExportsApiOrStr: TypeAlias = Annotated[
    OrderAmazonLexModelBuildingV2ExportsApi | str, open_enum_validator(OrderAmazonLexModelBuildingV2ExportsApi)
]
