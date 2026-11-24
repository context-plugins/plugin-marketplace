from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RedriveFilter(str, Enum):
    """Sets a filter to list executions based on whether or not they have been redriven. For a Distributed Map,
    redriveFilter sets a filter to list child workflow executions based on whether or not they have been redriven. If
    you do not provide a redriveFilter, Step Functions returns a list of both redriven and non-redriven executions. If
    you provide a state machine ARN in redriveFilter, the API returns a validation exception."""

    REDRIVEN = "REDRIVEN"
    NOT_REDRIVEN = "NOT_REDRIVEN"

    __str__ = str.__str__


RedriveFilterOrStr: TypeAlias = Annotated[RedriveFilter | str, open_enum_validator(RedriveFilter)]
