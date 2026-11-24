from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy1(str, Enum):
    """The criterion to be used to list build report groups. Valid values include: CREATED_TIME: List based on when each
    report group was created. LAST_MODIFIED_TIME: List based on when each report group was last changed. NAME: List
    based on each report group's name."""

    NAME = "NAME"
    CREATED_TIME = "CREATED_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

    __str__ = str.__str__


SortBy1OrStr: TypeAlias = Annotated[SortBy1 | str, open_enum_validator(SortBy1)]
