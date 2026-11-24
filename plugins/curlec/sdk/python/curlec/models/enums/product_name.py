from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductName(str, Enum):
    """Product name. Always 'route' for Route product."""

    ROUTE = "route"

    __str__ = str.__str__


ProductNameOrStr: TypeAlias = Annotated[ProductName | str, open_enum_validator(ProductName)]
