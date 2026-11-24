from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status6(str, Enum):
    PENDING = "PENDING"
    FETCHING_RECOMMENDATIONS = "FETCHING_RECOMMENDATIONS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    RATE_LIMITED = "RATE_LIMITED"

    __str__ = str.__str__


Status6OrStr: TypeAlias = Annotated[Status6 | str, open_enum_validator(Status6)]
