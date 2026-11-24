from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionItemStatus(str, Enum):
    DONE = "Done"
    ARCHIVED = "Archived"
    INCOMPLETE = "Incomplete"

    __str__ = str.__str__


ActionItemStatusOrStr: TypeAlias = Annotated[ActionItemStatus | str, open_enum_validator(ActionItemStatus)]
