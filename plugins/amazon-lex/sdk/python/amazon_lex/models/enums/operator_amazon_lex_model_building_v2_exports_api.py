from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OperatorAmazonLexModelBuildingV2ExportsApi(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListExports operation should return only resource types
    that equal the specified value. Specify CO when the ListExports operation should return resource types that contain
    the specified value."""

    CO = "CO"
    EQ = "EQ"

    __str__ = str.__str__


OperatorAmazonLexModelBuildingV2ExportsApiOrStr: TypeAlias = Annotated[
    OperatorAmazonLexModelBuildingV2ExportsApi | str, open_enum_validator(OperatorAmazonLexModelBuildingV2ExportsApi)
]
