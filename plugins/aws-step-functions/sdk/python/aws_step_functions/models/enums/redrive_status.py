from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RedriveStatus(str, Enum):
    """Indicates whether or not an execution can be redriven at a given point in time. For executions of type STANDARD,
    redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would return the ExecutionNotRedrivable
    error. For a Distributed Map that includes child workflows of type STANDARD, redriveStatus indicates whether or not
    the Map Run can redrive child workflow executions. For a Distributed Map that includes child workflows of type
    EXPRESS, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You can redrive
    failed or timed out EXPRESS wo"""

    REDRIVABLE = "REDRIVABLE"
    NOT_REDRIVABLE = "NOT_REDRIVABLE"
    REDRIVABLE_BY_MAP_RUN = "REDRIVABLE_BY_MAP_RUN"

    __str__ = str.__str__


RedriveStatusOrStr: TypeAlias = Annotated[RedriveStatus | str, open_enum_validator(RedriveStatus)]
