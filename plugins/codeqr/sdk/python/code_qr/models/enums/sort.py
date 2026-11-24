from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    """The field to sort the links by. The default is ``createdAt``, and sort order is always descending."""

    CREATED_AT = "createdAt"
    CLICKS = "clicks"
    LAST_CLICKED = "lastClicked"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
