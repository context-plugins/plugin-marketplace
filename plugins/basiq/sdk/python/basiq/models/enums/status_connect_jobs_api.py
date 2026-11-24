from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusConnectJobsApi(str, Enum):
    """Status of the job step"""

    PENDING = "pending"
    IN_PROGRESS = "in-progress"
    SUCCESS = "success"
    FAILED = "failed"

    __str__ = str.__str__


StatusConnectJobsApiOrStr: TypeAlias = Annotated[StatusConnectJobsApi | str, open_enum_validator(StatusConnectJobsApi)]
