from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollResponsesExpandItems(str, Enum):
    POST = "post"

    __str__ = str.__str__


PollResponsesExpandItemsOrStr: TypeAlias = Annotated[
    PollResponsesExpandItems | str, open_enum_validator(PollResponsesExpandItems)
]
