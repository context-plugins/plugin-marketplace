from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollStatus2(str, Enum):
    """The current status of the poll."""

    DRAFT = "draft"
    PUBLISHED = "published"

    __str__ = str.__str__


PollStatus2OrStr: TypeAlias = Annotated[PollStatus2 | str, open_enum_validator(PollStatus2)]
