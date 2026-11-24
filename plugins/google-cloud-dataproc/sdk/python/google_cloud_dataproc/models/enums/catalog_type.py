from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CatalogType(str, Enum):
    """Output only. The type of the catalog."""

    CATALOG_TYPE_UNSPECIFIED = "CATALOG_TYPE_UNSPECIFIED"
    HIVE = "HIVE"
    ICEBERG = "ICEBERG"

    __str__ = str.__str__


CatalogTypeOrStr: TypeAlias = Annotated[CatalogType | str, open_enum_validator(CatalogType)]
