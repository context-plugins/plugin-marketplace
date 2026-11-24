from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourceType(str, Enum):
    """The type of resource to export."""

    BOT = "BOT"
    INTENT = "INTENT"
    SLOT_TYPE = "SLOT_TYPE"

    __str__ = str.__str__


ResourceTypeOrStr: TypeAlias = Annotated[ResourceType | str, open_enum_validator(ResourceType)]
