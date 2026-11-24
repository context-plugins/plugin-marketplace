from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    """The criterion to be used to list build project names. Valid values include: CREATED_TIME: List based on when each
    build project was created. LAST_MODIFIED_TIME: List based on when information about each build project was last
    changed. NAME: List based on each build project's name. Use sortOrder to specify in what order to list the build
    project names based on the preceding criteria."""

    NAME = "NAME"
    CREATED_TIME = "CREATED_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
