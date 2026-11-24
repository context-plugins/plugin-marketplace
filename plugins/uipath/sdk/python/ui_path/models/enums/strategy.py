from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Strategy(str, Enum):
    """Strategy for allocating robots to the job"""

    ALL = "All"
    SPECIFIC = "Specific"
    JOBS_COUNT = "JobsCount"
    ROBOT_IDS = "RobotIds"

    __str__ = str.__str__


StrategyOrStr: TypeAlias = Annotated[Strategy | str, open_enum_validator(Strategy)]
