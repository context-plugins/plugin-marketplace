from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    NAME = "name"
    KEY = "key"
    PROPERTY_KEY = "propertyKey"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
