from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostingRegion(str, Enum):
    """The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set,
    a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't
    specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job
    Job.addresses to the same location level as this field is strongly recommended."""

    POSTING_REGION_UNSPECIFIED = "POSTING_REGION_UNSPECIFIED"
    ADMINISTRATIVE_AREA = "ADMINISTRATIVE_AREA"
    NATION = "NATION"
    TELECOMMUTE = "TELECOMMUTE"

    __str__ = str.__str__


PostingRegionOrStr: TypeAlias = Annotated[PostingRegion | str, open_enum_validator(PostingRegion)]
