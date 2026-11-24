from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity(str, Enum):
    """The entity associated with the event that has occurred"""

    CONSENT = "consent"
    CONNECTION = "connection"

    __str__ = str.__str__


EntityOrStr: TypeAlias = Annotated[Entity | str, open_enum_validator(Entity)]
