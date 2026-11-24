from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductType(str, Enum):
    """The type of product"""

    AGENT = "agent"
    PRODUCT = "product"
    PREPAID_CREDIT_BUNDLE = "prepaidCreditBundle"

    __str__ = str.__str__


ProductTypeOrStr: TypeAlias = Annotated[ProductType | str, open_enum_validator(ProductType)]
