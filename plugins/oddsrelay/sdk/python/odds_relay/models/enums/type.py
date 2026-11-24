from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Scope 403s only: which axis refused (``not_in_key_scope`` and ``product_not_in_region`` product;
    ``region_not_in_scope`` and ``bookmaker_not_in_region`` region; ``schema_not_in_scope`` schema)."""

    PRODUCT = "product"
    REGION = "region"
    SCHEMA = "schema"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
