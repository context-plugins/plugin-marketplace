from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollOrderBy(str, Enum):
    CREATED = "created"
    NAME = "name"

    __str__ = str.__str__


PollOrderByOrStr: TypeAlias = Annotated[PollOrderBy | str, open_enum_validator(PollOrderBy)]
