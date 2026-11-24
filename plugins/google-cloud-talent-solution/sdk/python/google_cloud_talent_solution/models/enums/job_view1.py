from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobView1(str, Enum):
    JOB_VIEW_UNSPECIFIED = "JOB_VIEW_UNSPECIFIED"
    JOB_VIEW_ID_ONLY = "JOB_VIEW_ID_ONLY"
    JOB_VIEW_MINIMAL = "JOB_VIEW_MINIMAL"
    JOB_VIEW_SMALL = "JOB_VIEW_SMALL"
    JOB_VIEW_FULL = "JOB_VIEW_FULL"

    __str__ = str.__str__


JobView1OrStr: TypeAlias = Annotated[JobView1 | str, open_enum_validator(JobView1)]
