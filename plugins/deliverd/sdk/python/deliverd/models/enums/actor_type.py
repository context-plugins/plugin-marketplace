from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActorType(str, Enum):
    """What kind of actor."""

    USER = "user"
    AGENT = "agent"
    API_KEY = "api_key"
    LINK = "link"
    GUEST = "guest"
    SYSTEM = "system"

    __str__ = str.__str__


ActorTypeOrStr: TypeAlias = Annotated[ActorType | str, open_enum_validator(ActorType)]
