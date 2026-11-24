from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductCreateType(str, Enum):
    AGENT = "agent"
    PRODUCT = "product"
    PREPAID_CREDIT_BUNDLE = "prepaidCreditBundle"

    __str__ = str.__str__


ProductCreateTypeOrStr: TypeAlias = Annotated[ProductCreateType | str, open_enum_validator(ProductCreateType)]
