from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobLevel(str, Enum):
    """The experience level associated with the job, such as "Entry Level"."""

    JOB_LEVEL_UNSPECIFIED = "JOB_LEVEL_UNSPECIFIED"
    ENTRY_LEVEL = "ENTRY_LEVEL"
    EXPERIENCED = "EXPERIENCED"
    MANAGER = "MANAGER"
    DIRECTOR = "DIRECTOR"
    EXECUTIVE = "EXECUTIVE"

    __str__ = str.__str__


JobLevelOrStr: TypeAlias = Annotated[JobLevel | str, open_enum_validator(JobLevel)]
