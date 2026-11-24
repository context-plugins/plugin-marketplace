from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    STAGE_STATUS_UNSPECIFIED = "STAGE_STATUS_UNSPECIFIED"
    STAGE_STATUS_ACTIVE = "STAGE_STATUS_ACTIVE"
    STAGE_STATUS_COMPLETE = "STAGE_STATUS_COMPLETE"
    STAGE_STATUS_FAILED = "STAGE_STATUS_FAILED"
    STAGE_STATUS_PENDING = "STAGE_STATUS_PENDING"
    STAGE_STATUS_SKIPPED = "STAGE_STATUS_SKIPPED"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
