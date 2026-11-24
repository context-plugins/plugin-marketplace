from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobView(str, Enum):
    """The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no
    value is specified."""

    JOB_VIEW_UNSPECIFIED = "JOB_VIEW_UNSPECIFIED"
    JOB_VIEW_ID_ONLY = "JOB_VIEW_ID_ONLY"
    JOB_VIEW_MINIMAL = "JOB_VIEW_MINIMAL"
    JOB_VIEW_SMALL = "JOB_VIEW_SMALL"
    JOB_VIEW_FULL = "JOB_VIEW_FULL"

    __str__ = str.__str__


JobViewOrStr: TypeAlias = Annotated[JobView | str, open_enum_validator(JobView)]
