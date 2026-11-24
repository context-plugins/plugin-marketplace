from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute2(str, Enum):
    """The attribute to use to sort the list of intents."""

    INTENT_NAME = "IntentName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

    __str__ = str.__str__


Attribute2OrStr: TypeAlias = Annotated[Attribute2 | str, open_enum_validator(Attribute2)]
