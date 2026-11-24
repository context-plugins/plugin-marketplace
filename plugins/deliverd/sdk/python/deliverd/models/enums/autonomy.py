from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Autonomy(str, Enum):
    ASSIST = "assist"
    RECOMMEND = "recommend"
    ACT_WITH_APPROVAL = "act_with_approval"
    ACT_AUTONOMOUSLY = "act_autonomously"

    __str__ = str.__str__


AutonomyOrStr: TypeAlias = Annotated[Autonomy | str, open_enum_validator(Autonomy)]
