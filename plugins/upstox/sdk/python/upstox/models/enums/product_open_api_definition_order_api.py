from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductOpenApiDefinitionOrderApi(str, Enum):
    """Signifies if the order was either Intraday, Delivery, CO or OCO"""

    I_ = "I"
    D = "D"

    __str__ = str.__str__


ProductOpenApiDefinitionOrderApiOrStr: TypeAlias = Annotated[
    ProductOpenApiDefinitionOrderApi | str, open_enum_validator(ProductOpenApiDefinitionOrderApi)
]
