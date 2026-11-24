from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute1(str, Enum):
    """The attribute by which to sort the generation request information. You can sort by the following attributes.
    creationStartTime – The time at which the generation request was created. lastUpdatedTime – The time at which the
    generation request was last updated."""

    CREATION_START_TIME = "creationStartTime"
    LAST_UPDATED_TIME = "lastUpdatedTime"

    __str__ = str.__str__


Attribute1OrStr: TypeAlias = Annotated[Attribute1 | str, open_enum_validator(Attribute1)]
