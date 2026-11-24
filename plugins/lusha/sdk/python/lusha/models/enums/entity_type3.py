from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityType3(str, Enum):
    """Overrides default entityType"""

    CONTACT = "contact"
    COMPANY = "company"

    __str__ = str.__str__


EntityType3OrStr: TypeAlias = Annotated[EntityType3 | str, open_enum_validator(EntityType3)]
