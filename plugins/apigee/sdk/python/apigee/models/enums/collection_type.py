from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CollectionType(str, Enum):
    """Required. The type of collection. Applies to all entries in api_data."""

    COLLECTION_TYPE_UNSPECIFIED = "COLLECTION_TYPE_UNSPECIFIED"
    COLLECTION_TYPE_UPSERT = "COLLECTION_TYPE_UPSERT"
    COLLECTION_TYPE_DELETE = "COLLECTION_TYPE_DELETE"

    __str__ = str.__str__


CollectionTypeOrStr: TypeAlias = Annotated[CollectionType | str, open_enum_validator(CollectionType)]
