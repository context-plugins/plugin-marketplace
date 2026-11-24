from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name23(str, Enum):
    """The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId."""

    INTENT_ID = "IntentId"
    SLOT_TYPE_ID = "SlotTypeId"

    __str__ = str.__str__


Name23OrStr: TypeAlias = Annotated[Name23 | str, open_enum_validator(Name23)]
