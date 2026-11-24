from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute3(str, Enum):
    """The attribute to use to sort the list of slot types."""

    SLOT_TYPE_NAME = "SlotTypeName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

    __str__ = str.__str__


Attribute3OrStr: TypeAlias = Annotated[Attribute3 | str, open_enum_validator(Attribute3)]
