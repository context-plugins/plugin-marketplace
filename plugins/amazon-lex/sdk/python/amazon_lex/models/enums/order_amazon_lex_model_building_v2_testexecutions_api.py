from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderAmazonLexModelBuildingV2TestexecutionsApi(str, Enum):
    """Specifies whether to sort in ascending or descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr: TypeAlias = Annotated[
    OrderAmazonLexModelBuildingV2TestexecutionsApi | str,
    open_enum_validator(OrderAmazonLexModelBuildingV2TestexecutionsApi),
]
