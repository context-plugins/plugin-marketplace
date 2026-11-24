from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityType(str, Enum):
    """Type of entity to search for."""

    PEOPLE = "people"
    COMPANIES = "companies"

    __str__ = str.__str__


EntityTypeOrStr: TypeAlias = Annotated[EntityType | str, open_enum_validator(EntityType)]
