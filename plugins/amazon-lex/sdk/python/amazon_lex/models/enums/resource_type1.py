from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourceType1(str, Enum):
    """The type of the exported resource."""

    BOT = "BOT"
    INTENT = "INTENT"
    SLOT_TYPE = "SLOT_TYPE"

    __str__ = str.__str__


ResourceType1OrStr: TypeAlias = Annotated[ResourceType1 | str, open_enum_validator(ResourceType1)]
