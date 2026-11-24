from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind6(str, Enum):
    """side_task, investigation, research, debug or decision; side_task when omitted"""

    SIDE_TASK = "side_task"
    INVESTIGATION = "investigation"
    RESEARCH = "research"
    DEBUG = "debug"
    DECISION = "decision"

    __str__ = str.__str__


Kind6OrStr: TypeAlias = Annotated[Kind6 | str, open_enum_validator(Kind6)]
