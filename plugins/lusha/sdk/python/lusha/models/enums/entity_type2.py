from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityType2(str, Enum):
    """Default entity type for all subscriptions"""

    CONTACT = "contact"
    COMPANY = "company"

    __str__ = str.__str__


EntityType2OrStr: TypeAlias = Annotated[EntityType2 | str, open_enum_validator(EntityType2)]
