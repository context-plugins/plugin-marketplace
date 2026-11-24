from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributionActor(str, Enum):
    """Who to attribute pipeline triggers to"""

    CURRENT = "current"
    SYSTEM = "system"

    __str__ = str.__str__


AttributionActorOrStr: TypeAlias = Annotated[AttributionActor | str, open_enum_validator(AttributionActor)]
