from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollResponsesOrderBy(str, Enum):
    CREATED = "created"

    __str__ = str.__str__


PollResponsesOrderByOrStr: TypeAlias = Annotated[PollResponsesOrderBy | str, open_enum_validator(PollResponsesOrderBy)]
