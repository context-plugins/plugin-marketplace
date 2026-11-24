from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductTypes(int, Enum):
    """1 = Service 3 = ProductWithNoStock 5 = ProductWithStock"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


ProductTypesOrInt: TypeAlias = Annotated[ProductTypes | int, open_enum_validator(ProductTypes)]
