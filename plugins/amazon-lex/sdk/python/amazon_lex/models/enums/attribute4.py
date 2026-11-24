from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute4(str, Enum):
    """The attribute to use to sort the list."""

    SLOT_NAME = "SlotName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

    __str__ = str.__str__


Attribute4OrStr: TypeAlias = Annotated[Attribute4 | str, open_enum_validator(Attribute4)]
