from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateBitbucketCommitStatusesApi(str, Enum):
    """Provides some indication of the status of this commit"""

    FAILED = "FAILED"
    INPROGRESS = "INPROGRESS"
    STOPPED = "STOPPED"
    SUCCESSFUL = "SUCCESSFUL"

    __str__ = str.__str__


StateBitbucketCommitStatusesApiOrStr: TypeAlias = Annotated[
    StateBitbucketCommitStatusesApi | str, open_enum_validator(StateBitbucketCommitStatusesApi)
]
