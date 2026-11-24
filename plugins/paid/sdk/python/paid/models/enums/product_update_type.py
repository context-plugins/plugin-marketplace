from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductUpdateType(str, Enum):
    AGENT = "agent"
    PRODUCT = "product"
    PREPAID_CREDIT_BUNDLE = "prepaidCreditBundle"

    __str__ = str.__str__


ProductUpdateTypeOrStr: TypeAlias = Annotated[ProductUpdateType | str, open_enum_validator(ProductUpdateType)]
