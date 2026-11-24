from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingOutputSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingOutputSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingOutputSignalType | str, open_enum_validator(ProductPricingOutputSignalType)
]
