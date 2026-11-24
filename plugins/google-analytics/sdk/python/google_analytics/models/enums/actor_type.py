from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActorType(str, Enum):
    """The type of actor that made this change."""

    ACTOR_TYPE_UNSPECIFIED = "ACTOR_TYPE_UNSPECIFIED"
    USER = "USER"
    SYSTEM = "SYSTEM"
    SUPPORT = "SUPPORT"

    __str__ = str.__str__


ActorTypeOrStr: TypeAlias = Annotated[ActorType | str, open_enum_validator(ActorType)]
