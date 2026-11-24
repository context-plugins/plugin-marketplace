from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollStatus(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

    __str__ = str.__str__


PollStatusOrStr: TypeAlias = Annotated[PollStatus | str, open_enum_validator(PollStatus)]
