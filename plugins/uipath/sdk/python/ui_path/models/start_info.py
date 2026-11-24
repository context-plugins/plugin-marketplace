from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_priority import JobPriorityOrStr
from .enums.source1 import Source1OrStr
from .enums.strategy import StrategyOrStr


class StartInfo(SdkBaseModel):
    """Parameters controlling how jobs are started"""

    release_key: UUID = Field(alias="ReleaseKey")
    """GUID key of the process (release) to start"""

    strategy: StrategyOrStr = Field(alias="Strategy")
    """Strategy for allocating robots to the job"""

    robot_ids: Optional[list[int]] = Field(default=UNSET, alias="RobotIds")
    """List of robot IDs to use when Strategy is RobotIds or Specific"""

    no_of_robots: Optional[int] = Field(default=UNSET, alias="NoOfRobots")
    """Number of robots to use when Strategy is JobsCount"""

    source: Optional[Source1OrStr] = Field(default=UNSET, alias="Source")
    """Source attribution for the started jobs"""

    input_arguments: Optional[str] = Field(default=UNSET, alias="InputArguments")
    """JSON-serialized input arguments to pass to the process"""

    job_priority: Optional[JobPriorityOrStr] = Field(default=UNSET, alias="JobPriority")
    """Priority level for the job queue"""


class StartInfoDict(TypedDict):
    release_key: UUID
    strategy: StrategyOrStr
    robot_ids: NotRequired[list[int]]
    no_of_robots: NotRequired[int]
    source: NotRequired[Source1OrStr]
    input_arguments: NotRequired[str]
    job_priority: NotRequired[JobPriorityOrStr]
